"use client";

import { createContext, useContext, useState, useEffect, useRef, type ReactNode, type ElementRef } from 'react';
import { cn } from '@/lib/utils';

const FadeInStaggerContext = createContext(false);

const viewportOptions = { rootMargin: '0px 0px -200px' };

export function FadeInStagger({
  children,
  faster = false,
  className,
  ...props
}: {
  children: ReactNode;
  faster?: boolean;
  className?: string;
}) {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      });
    }, viewportOptions);

    const { current } = domRef;
    if (current) {
      observer.observe(current);
    }

    return () => {
      if (current) {
        observer.unobserve(current);
      }
    };
  }, []);

  return (
    <FadeInStaggerContext.Provider value={isVisible}>
      <div
        ref={domRef}
        className={cn(
          "flex flex-col gap-4", // Adjust gap as needed
          className
        )}
        {...props}
      >
        {children}
      </div>
    </FadeInStaggerContext.Provider>
  );
}

type FadeInProps = {
  children: ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
};

export function FadeIn({ children, className, as = 'div' }: FadeInProps) {
  const isStaggered = useContext(FadeInStaggerContext);
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef<ElementRef<typeof as> | null>(null);
  const Tag = as;

  useEffect(() => {
    if (isStaggered) {
      // Visibility is controlled by the parent stagger component
      setVisible(isStaggered);
      return;
    }

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    const { current } = domRef;
    if (current) {
      observer.observe(current);
    }

    return () => {
      if (current && !isStaggered) {
        observer.unobserve(current);
      }
    };
  }, [isStaggered]);

  return (
    <Tag
      ref={domRef}
      className={cn(
        'transition-all duration-1000 ease-out',
        'will-change-[opacity,transform]',
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
        'motion-reduce:transition-none',
        '[&>*:last-child]:transition-all',
        isStaggered && 'transition-opacity delay-[var(--stagger-delay,0)]',
        className
      )}
    >
      {children}
    </Tag>
  );
}

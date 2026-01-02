'use client';

import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
  type CSSProperties,
} from 'react';
import { cn } from '@/lib/utils';
import type { JSX } from 'react';


const FadeInStaggerContext = createContext(false);

const viewportOptions: IntersectionObserverInit = { rootMargin: '0px 0px -200px' };

export function FadeInStagger({
  children,
  className,
  ...props
}: {
  children: ReactNode;
  className?: string;
} & React.HTMLAttributes<HTMLDivElement>) {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const node = domRef.current;
    if (!node) return;

    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          setVisible(true);
          // Optional: once visible, no need to keep observing
          observer.unobserve(entry.target);
        }
      }
    }, viewportOptions);

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return (
    <FadeInStaggerContext.Provider value={isVisible}>
      <div ref={domRef} className={className} {...props}>
        {children}
      </div>
    </FadeInStaggerContext.Provider>
  );
}

type FadeInProps = {
  children: ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
  delay?: number;
};

export function FadeIn({ children, className, as = 'div', delay = 0 }: FadeInProps) {
  const isStaggered = useContext(FadeInStaggerContext);
  const [isVisible, setVisible] = useState(false);

  // Store the actual DOM node regardless of tag type
  const nodeRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    // If controlled by a parent stagger, just mirror that state.
    if (isStaggered) {
      setVisible(true);
      return;
    }

    const node = nodeRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [isStaggered]);

  const Tag = as as any;

  return (
    <Tag
      // Callback ref keeps TS happy for any intrinsic tag
      ref={(el: HTMLElement | null) => {
        nodeRef.current = el;
      }}
      className={cn(
        'transition-all duration-[1200ms] ease-[cubic-bezier(0.25,0.1,0.25,1)]',
        'will-change-[opacity,transform]',
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8',
        'motion-reduce:transition-none',
        className
      )}
      style={
        {
          transitionDelay: isVisible ? `${delay}ms` : '0ms',
        } as CSSProperties
      }
    >
      {children}
    </Tag>
  );
}

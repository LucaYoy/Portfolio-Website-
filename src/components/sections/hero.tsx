"use client";
import { useState, useEffect, useRef } from 'react';
import { TypeAnimation } from 'react-type-animation';
import { profile } from '@/lib/data';
import Socials from '@/components/shared/socials';
import { FadeIn } from '@/components/shared/fade-in';
import { PsiIcon } from '@/components/icons/PsiIcon';
import { LossIcon } from '@/components/icons/LossIcon';
import { HbarIcon } from '@/components/icons/HbarIcon';

export default function Hero() {
  const [isMounted, setIsMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const symbol1Ref = useRef<SVGSVGElement>(null);
  const symbol2Ref = useRef<SVGSVGElement>(null);
  const symbol3Ref = useRef<SVGSVGElement>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted || !containerRef.current) return;

    const container = containerRef.current;
    const symbols = [
      { ref: symbol1Ref, speedX: 0.2, speedY: 0.3, speedR: 0.1 },
      { ref: symbol2Ref, speedX: -0.3, speedY: 0.2, speedR: -0.15 },
      { ref: symbol3Ref, speedX: 0.1, speedY: -0.4, speedR: 0.2 },
    ];

    let animationFrameId: number;

    const animate = (time: number) => {
      symbols.forEach(symbol => {
        if (symbol.ref.current) {
          const x = Math.sin(time * 0.0001 * symbol.speedX) * 20;
          const y = Math.cos(time * 0.0001 * symbol.speedY) * 20;
          const r = Math.sin(time * 0.0001 * symbol.speedR) * 10;
          symbol.ref.current.style.transform = `translate(${x}px, ${y}px) rotate(${r}deg)`;
        }
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isMounted]);

    return (
        <section
          id="home"
          className="relative w-full h-auto min-h-[calc(100vh-4rem)] flex flex-col md:flex-row items-center justify-center bg-background"
        >
          <div className="container relative z-10 text-center md:text-left">
              <FadeIn>
                <TypeAnimation
                  sequence={[profile.name, 900]}
                  wrapper="h1"
                  speed={10}
                  cursor={false}
                  className="
                    hero-typed
                    font-headline text-4xl font-bold tracking-tighter text-primary
                    sm:text-5xl md:text-6xl lg:text-7xl
                  "
                />
              </FadeIn>
              <FadeIn delay={200}>
                <p className="max-w-2xl mx-auto md:mx-0 mt-4 text-lg text-muted-foreground md:text-xl">
                  {profile.position}
                </p>
              </FadeIn>
              <FadeIn delay={400}>
                <div className="mt-6 flex justify-center md:justify-start">
                  <Socials />
                </div>
              </FadeIn>
          </div>
          {isMounted && (
            <div 
              ref={containerRef} 
              className="
                relative w-full h-64
                md:absolute md:inset-y-0 md:right-0 md:w-1/2 md:h-full
                pointer-events-none
              "
            >
              <FadeIn delay={1000}>
                <div className="float-symbol symbol-1">
                  <PsiIcon ref={symbol1Ref} className="h-full w-full" />
                </div>
              </FadeIn>
              <FadeIn delay={1200}>
                <div className="float-symbol symbol-2">
                  <LossIcon ref={symbol2Ref} className="h-full w-full" />
                </div>
              </FadeIn>
              <FadeIn delay={1400}>
                <div className="float-symbol symbol-3">
                  <HbarIcon ref={symbol3Ref} className="h-full w-full" />
                </div>
              </FadeIn>
            </div>
          )}
        </section>
      );
    }
    
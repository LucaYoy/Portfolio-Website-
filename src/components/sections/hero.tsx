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
  const symbol1Ref = useRef<HTMLDivElement | null>(null);
  const symbol2Ref = useRef<HTMLDivElement | null>(null);
  const symbol3Ref = useRef<HTMLDivElement | null>(null);  

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    const symbols = [
      { ref: symbol1Ref, speedX: 0.3, speedY: 0.5, speedR: 0.3 },
      { ref: symbol2Ref, speedX: -0.2, speedY: 0.6, speedR: -0.2 },
      { ref: symbol3Ref, speedX: 0.1, speedY: -0.4, speedR: 0.2 },
    ];

    const mousePosition = { x: -1000, y: -1000 };
    const repulsionRadius = 90;
    const repulsionStrength = 80;

    const handleMouseMove = (e: MouseEvent) => {
      mousePosition.x = e.clientX;
      mousePosition.y = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove);

    let animationFrameId: number;

    const animate = (time: number) => {
      symbols.forEach(symbol => {
        if (symbol.ref.current) {
          // 1. Calculate the base floating position
          const floatX = Math.sin(time * 0.0004 * symbol.speedX) * 20;
          const floatY = Math.cos(time * 0.0004 * symbol.speedY) * 20;
          const floatR = Math.sin(time * 0.0004 * symbol.speedR) * 10;

          // 2. Calculate the repulsion offset
          let repulsionX = 0;
          let repulsionY = 0;
          const rect = symbol.ref.current.getBoundingClientRect();
          const symbolCenterX = rect.left + rect.width / 2;
          const symbolCenterY = rect.top + rect.height / 2;
          const distance = Math.hypot(mousePosition.x - symbolCenterX, mousePosition.y - symbolCenterY);

          if (distance < repulsionRadius) {
            const angle = Math.atan2(mousePosition.y - symbolCenterY, mousePosition.x - symbolCenterX);
            const force = (repulsionRadius - distance) / repulsionRadius * repulsionStrength;
            repulsionX = -Math.cos(angle) * force;
            repulsionY = -Math.sin(angle) * force;
          }

          // 3. Combine both floating and repulsion transforms
          const finalX = floatX + repulsionX;
          const finalY = floatY + repulsionY;
          symbol.ref.current.style.transform = `translate(${finalX}px, ${finalY}px) rotate(${floatR}deg)`;
        }
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
    };
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
              <div className="float-symbol symbol-1" ref={symbol1Ref}>
                <FadeIn delay={600}>
                  <PsiIcon className="h-full w-full" />
                </FadeIn>
              </div>

              <div className="float-symbol symbol-2" ref={symbol2Ref}>
                <FadeIn delay={800}>
                  <LossIcon className="h-full w-full" />
                </FadeIn>
              </div>

              <div className="float-symbol symbol-3" ref={symbol3Ref}>
                <FadeIn delay={1000}>
                  <HbarIcon className="h-full w-full" />
                </FadeIn>
              </div>

            </div>
          )}
        </section>
      );
    }
    
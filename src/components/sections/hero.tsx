'use client';

import { profile } from '@/lib/data';
import Socials from '@/components/shared/socials';
import { FadeIn, FadeInStagger } from '@/components/shared/fade-in';
import dynamic from 'next/dynamic';

const TypeAnimation = dynamic(
  () => import('react-type-animation').then((mod) => mod.TypeAnimation),
  { ssr: false }
);

export default function Hero() {
  return (
    <section
      id="home"
      className="w-full h-[calc(100vh-4rem)] flex items-center justify-center bg-background"
    >
      <div className="container">
        <FadeInStagger>
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
          <FadeIn>
            <p className="max-w-2xl mt-4 text-lg text-muted-foreground md:text-xl">
              {profile.position}
            </p>
          </FadeIn>
          <FadeIn>
            <div className="mt-6">
              <Socials />
            </div>
          </FadeIn>
        </FadeInStagger>
      </div>
    </section>
  );
}

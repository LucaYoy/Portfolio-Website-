'use client';

import { profile } from '@/lib/data';
import Socials from '@/components/shared/socials';
import { FadeIn, FadeInStagger } from '@/components/shared/fade-in';
import { TypeAnimation } from 'react-type-animation';
import Image from 'next/image';

export default function Hero() {
  return (
    <section
      id="home"
      className="w-full min-h-[calc(100vh-4rem)] flex items-center justify-center bg-background"
    >
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-4">
          <FadeInStagger>
            <FadeIn>
              <TypeAnimation
                sequence={[
                  profile.name,
                  1000,
                ]}
                wrapper="h1"
                speed={10}
                className="font-headline text-4xl font-bold tracking-tighter text-primary sm:text-5xl md:text-6xl lg:text-7xl"
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
        <div className="flex justify-center items-center">
           <Image
            src="/profile.jpeg"
            alt="Luca Petru Ion"
            width={300}
            height={300}
            className="rounded-full object-cover w-[300px] h-[300px] border-4 border-primary/20 shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}

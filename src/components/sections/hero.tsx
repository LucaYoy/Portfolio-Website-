import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { profile } from '@/lib/data';
import { FadeIn } from '@/components/shared/fade-in';

export default function Hero() {
  const profilePhoto = PlaceHolderImages.find(p => p.id === 'profile-photo');

  return (
    <section className="container grid grid-cols-1 items-center gap-12 py-12 md:py-24 lg:grid-cols-2 lg:py-32">
      <FadeIn className="flex flex-col items-center text-center lg:items-start lg:text-left">
        <div className="space-y-4">
          <h1 className="font-headline text-4xl font-bold tracking-tighter text-primary sm:text-5xl md:text-6xl lg:text-7xl">
            {profile.name}
          </h1>
          <p className="max-w-[700px] text-lg text-muted-foreground md:text-xl">
            {profile.position}
          </p>
        </div>
        <div className="mt-6 flex gap-2">
          {profile.socials.map((social) => (
            <Button key={social.name} variant="outline" size="icon" asChild className="border-primary/20 text-primary hover:bg-primary hover:text-primary-foreground">
              <Link href={social.url} target="_blank" rel="noopener noreferrer">
                <social.icon className="h-5 w-5" />
                <span className="sr-only">{social.name}</span>
              </Link>
            </Button>
          ))}
        </div>
      </FadeIn>
      <FadeIn className="flex justify-center">
        {profilePhoto && (
          <Image
            src={profilePhoto.imageUrl}
            alt={profilePhoto.description}
            width={400}
            height={400}
            className="rounded-full border-4 border-primary/20 object-cover shadow-lg"
            priority
            data-ai-hint={profilePhoto.imageHint}
          />
        )}
      </FadeIn>
    </section>
  );
}

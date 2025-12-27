import { Card, CardContent } from '@/components/ui/card';
import { profile } from '@/lib/data';
import { FadeIn } from '@/components/shared/fade-in';

export default function Bio() {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-secondary/20">
      <div className="container">
        <FadeIn>
          <Card className="max-w-3xl mx-auto border-none bg-transparent shadow-none">
            <CardContent className="p-0">
              <h2 className="mb-8 text-center font-headline text-3xl font-bold tracking-tighter text-primary sm:text-4xl">
                About Me
              </h2>
              <div className="space-y-6 text-lg leading-relaxed text-muted-foreground text-center">
                {profile.bio.map((paragraph, index) => (
                  <p key={index}>
                    {paragraph}
                  </p>
                ))}
              </div>
            </CardContent>
          </Card>
        </FadeIn>
      </div>
    </section>
  );
}

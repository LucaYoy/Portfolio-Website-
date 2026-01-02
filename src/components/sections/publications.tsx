import { publications } from '@/lib/data';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { FadeIn } from '@/components/shared/fade-in';

export default function Publications() {
  return (
    <section id="publications" className="container py-12 md:py-24 lg:py-32">
      <FadeIn>
        <h2 className="mb-12 text-center font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Publications 📝
        </h2>
        <div className="mx-auto grid max-w-4xl gap-8">
          {publications.map((pub, index) => (
            <Card key={index} className="transition-all hover:shadow-lg hover:shadow-primary/10">
              <CardHeader>
                <CardTitle className="font-headline text-xl text-primary">{pub.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{pub.authors}</p>
              </CardContent>
              <CardFooter className="flex gap-2">
                {pub.links.map(link => (
                  <Button key={link.name} variant="ghost" size="sm" asChild>
                    <Link href={link.url} target="_blank" rel="noopener noreferrer">
                      <link.icon className="mr-2 h-4 w-4" />
                      {link.name}
                    </Link>
                  </Button>
                ))}
              </CardFooter>
            </Card>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}

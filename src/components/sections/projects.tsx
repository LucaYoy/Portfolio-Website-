import { projects } from '@/lib/data';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { FadeIn } from '@/components/shared/fade-in';

export default function Projects() {
  return (
    <section id="projects" className="w-full py-12 md:py-24 lg:py-32 bg-secondary/20">
      <div className="container">
        <FadeIn>
          <h2 className="mb-12 text-center font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Projects
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <Card key={index} className="flex flex-col transition-all hover:shadow-lg hover:shadow-accent/10">
                <CardHeader>
                  <CardTitle className="font-headline text-xl text-accent">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-sm text-muted-foreground">{project.description}</p>
                </CardContent>
                <CardFooter className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <Badge key={tag} variant="secondary">{tag}</Badge>
                  ))}
                  <div className="mt-2 flex w-full gap-2">
                    {project.links.map(link => (
                      <Button key={link.name} variant="outline" size="sm" asChild>
                        <Link href={link.url} target="_blank" rel="noopener noreferrer">
                          <link.icon className="mr-2 h-4 w-4" />
                          {link.name}
                        </Link>
                      </Button>
                    ))}
                  </div>
                </CardFooter>
              </Card>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

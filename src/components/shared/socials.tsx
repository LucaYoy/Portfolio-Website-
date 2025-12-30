import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { profile } from '@/lib/data';

export default function Socials() {
  return (
    <div className="flex items-center gap-2">
      {profile.socials.map((social) => (
        <Button key={social.name} variant="ghost" size="icon" asChild>
          <Link href={social.url.startsWith('mailto:') ? social.url : social.url} target="_blank" rel="noopener noreferrer">
            <social.icon className="h-6 w-6 text-muted-foreground transition-colors hover:text-primary" />
            <span className="sr-only">{social.name}</span>
          </Link>
        </Button>
      ))}
    </div>
  );
}

import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import Hero from '@/components/sections/hero';
import Bio from '@/components/sections/bio';
import Publications from '@/components/sections/publications';
import Projects from '@/components/sections/projects';

export default function Home() {
  return (
    <div className="flex min-h-[100dvh] flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Bio />
        <Publications />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}

"use client";
import { useIntroState } from "@/components/intro/useIntroState";
import { BombIntro } from "@/components/intro/BombIntro";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About, Expertise, Certifications, Experience, Projects, Education, ContactCTA } from "@/components/sections";

export default function Home() {
  const { showIntro, skipIntro, completeIntro, isMounted } = useIntroState();

  if (!isMounted) return null;

  return (
    <div className="min-h-screen bg-white selection:bg-yellow-200 selection:text-slate-900">
      {showIntro ? (
        <BombIntro onComplete={completeIntro} onSkip={skipIntro} />
      ) : (
        <main className="animate-in fade-in duration-1000">
          <Header />
          <Hero />
          <About />
          <Expertise />
          <Certifications />
          <Experience />
          <Projects />
          <Education />
          <ContactCTA />
          <Footer />
        </main>
      )}
    </div>
  );
}

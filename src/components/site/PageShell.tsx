import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";

export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

export function PageHero({ eyebrow, title, subtitle }: { eyebrow: string; title: React.ReactNode; subtitle?: string }) {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="absolute inset-0 -z-10 bg-hero" />
      <div className="absolute inset-0 -z-10 grid-bg opacity-70" />
      <div className="mx-auto max-w-7xl px-6 pt-24 pb-20">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">{eyebrow}</p>
        </Reveal>
        <Reveal delay={1}>
          <h1 className="mt-5 font-display text-5xl sm:text-6xl font-semibold tracking-tight max-w-4xl text-foreground">{title}</h1>
        </Reveal>
        {subtitle && (
          <Reveal delay={2}>
            <p className="mt-6 text-lg text-muted-foreground max-w-2xl">{subtitle}</p>
          </Reveal>
        )}
      </div>
    </section>
  );
}

export function CtaBand() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-24 text-center">
      <Reveal>
        <h2 className="font-display text-4xl sm:text-5xl font-semibold tracking-tight">Ready to build with Holbox?</h2>
      </Reveal>
      <Reveal delay={1}>
        <p className="mt-4 text-lg text-muted-foreground">Talk to our team or start free today.</p>
      </Reveal>
      <Reveal delay={2}>
        <div className="mt-8 flex flex-wrap gap-3 justify-center">
          <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-primary-foreground gradient-brand glow font-medium">Get a demo <ArrowRight className="h-4 w-4" /></Link>
          <Link to="/pricing" className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border bg-card font-medium hover:bg-secondary">See pricing</Link>
        </div>
      </Reveal>
    </section>
  );
}

export function Section({ id, children, className = "" }: { id?: string; children: React.ReactNode; className?: string }) {
  return <section id={id} className={`mx-auto max-w-7xl px-6 py-20 scroll-mt-24 ${className}`}>{children}</section>;
}

import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, PageHero, Section } from "@/components/site/PageShell";
import { BookOpen, Code2, FileText, Activity, Rocket, Shield } from "lucide-react";

export const Route = createFileRoute("/docs")({
  head: () => ({
    meta: [
      { title: "Docs — Holbox AI" },
      { name: "description", content: "API reference, guides, and changelog for the Holbox AI platform." },
    ],
  }),
  component: DocsPage,
});

const cards = [
  { id: "guides", icon: Rocket, title: "Quickstart", desc: "Ship your first integration in under 10 minutes." },
  { id: "api", icon: Code2, title: "API Reference", desc: "Type-safe SDKs for Node, Python, Go, and Ruby." },
  { id: "guides2", icon: BookOpen, title: "Guides", desc: "End-to-end guides for RAG, agents, and routing." },
  { id: "changelog", icon: FileText, title: "Changelog", desc: "Every release, every improvement — in one place." },
  { id: "status", icon: Activity, title: "Status", desc: "Real-time platform health and historical uptime." },
  { id: "security", icon: Shield, title: "Security & Trust", desc: "How we protect your data — and your customers'." },
];

function DocsPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Developers"
        title={<>Build with <span className="gradient-text">Holbox.</span></>}
        subtitle="Everything you need to integrate Holbox into your stack — fast."
      />

      <Section>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {cards.map((c) => (
            <Link key={c.title} to="/contact" id={c.id} className="group rounded-2xl border border-border bg-card p-6 hover:border-primary/60 transition scroll-mt-24">
              <c.icon className="h-6 w-6 text-primary" />
              <h3 className="mt-4 font-display text-lg font-semibold">{c.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{c.desc}</p>
              <p className="mt-4 text-xs font-medium text-primary group-hover:translate-x-0.5 transition">Open →</p>
            </Link>
          ))}
        </div>
      </Section>

      <Section>
        <div className="rounded-2xl border border-border bg-card p-8">
          <p className="text-xs font-semibold text-primary">QUICKSTART</p>
          <h3 className="mt-2 font-display text-2xl font-semibold">Install the SDK</h3>
          <pre className="mt-6 rounded-xl border border-border bg-background p-5 text-sm font-mono text-muted-foreground overflow-x-auto"><code>{`npm install @holbox/ai

import Holbox from "@holbox/ai";

const holbox = new Holbox({ apiKey: process.env.HOLBOX_API_KEY });

const result = await holbox.gateway.complete({ prompt: "Hello, world" });`}</code></pre>
        </div>
      </Section>
    </PageShell>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero, Section, CtaBand } from "@/components/site/PageShell";
import { Quote } from "lucide-react";

export const Route = createFileRoute("/customers")({
  head: () => ({
    meta: [
      { title: "Customers — Holbox AI" },
      { name: "description", content: "How leading AI and SaaS teams build with Holbox." },
    ],
  }),
  component: CustomersPage,
});

const stories = [
  { brand: "OpenAI", quote: "Holbox lets us focus on the model layer while they handle the connective tissue across our enterprise customers.", who: "Head of Platform" },
  { brand: "Mistral AI", quote: "We had an aggressive timeline. Holbox supported the file storage integrations we needed and we hit our launch date.", who: "Head of Engineering" },
  { brand: "Perplexity", quote: "With Agent Handler, we can bring a broader set of data connectors to our users faster.", who: "Frank te Pas, Head of Enterprise Product" },
  { brand: "Ramp", quote: "Holbox lets us add HRIS integrations by checking a box. Total confidence we can support any customer.", who: "Anish Ravipati, Senior Software Engineer" },
  { brand: "Drata", quote: "Working with Holbox's Unified API took less than a sprint to integrate, test, and release.", who: "Daniel Marashlian, Co-founder & CTO" },
  { brand: "BILL", quote: "Holbox came on-site to train our customer-facing teams. It took work off our plate.", who: "Alex Giddens, Senior Product Manager" },
];

const stats = [
  { v: "10x", l: "Faster integrations shipped" },
  { v: "500+", l: "Connectors maintained" },
  { v: "99.99%", l: "Uptime SLA" },
  { v: "$80M+", l: "Engineering hours saved" },
];

function CustomersPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Customers"
        title={<>The teams building <span className="gradient-text">what's next.</span></>}
        subtitle="Frontier AI labs, fast-growing SaaS, and global enterprises trust Holbox to run the connective infrastructure for their AI products."
      />

      <Section>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((s) => (
            <div key={s.l} className="rounded-2xl border border-border bg-card p-6 text-center">
              <p className="font-display text-4xl font-semibold gradient-text">{s.v}</p>
              <p className="mt-2 text-sm text-muted-foreground">{s.l}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <h2 className="font-display text-3xl font-semibold">Stories from the frontier</h2>
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {stories.map((s) => (
            <div key={s.brand} className="rounded-2xl border border-border bg-card p-6 flex flex-col">
              <Quote className="h-6 w-6 text-primary" />
              <p className="mt-4 text-sm leading-relaxed">"{s.quote}"</p>
              <div className="mt-6 pt-4 border-t border-border">
                <p className="font-display text-lg font-semibold">{s.brand}</p>
                <p className="text-xs text-muted-foreground">{s.who}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <CtaBand />
    </PageShell>
  );
}

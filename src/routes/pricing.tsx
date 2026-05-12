import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, PageHero, Section, CtaBand } from "@/components/site/PageShell";
import { Check } from "lucide-react";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — Holbox AI" },
      { name: "description", content: "Simple, transparent pricing that scales with your AI product." },
    ],
  }),
  component: PricingPage,
});

const tiers = [
  { name: "Launch", price: "Free", desc: "For prototypes and side projects.", features: ["1,000 unified API calls / mo", "3 integrations", "Community support", "Shared infra"], cta: "Start free", highlight: false },
  { name: "Scale", price: "$499", suffix: "/mo", desc: "For startups going to production.", features: ["100k unified API calls / mo", "All integrations", "Agent Handler included", "Slack support", "99.9% uptime SLA"], cta: "Start free trial", highlight: true },
  { name: "Enterprise", price: "Custom", desc: "Deployed on your cloud, with white-glove support.", features: ["Unlimited usage", "Bring your own cloud", "Dedicated solutions engineer", "SOC 2, HIPAA BAA", "99.99% uptime SLA"], cta: "Talk to sales", highlight: false },
];

function PricingPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Pricing"
        title={<>Pricing built to <span className="gradient-text">scale with you.</span></>}
        subtitle="Start free. Pay only for what you ship. Upgrade when your product takes off."
      />

      <Section>
        <div className="grid gap-5 md:grid-cols-3">
          {tiers.map((t) => (
            <div key={t.name} className={`rounded-2xl p-8 border ${t.highlight ? "border-primary bg-gradient-to-b from-primary/15 to-card glow" : "border-border bg-card"}`}>
              <p className="font-display text-2xl font-semibold">{t.name}</p>
              <p className="mt-1 text-sm text-muted-foreground">{t.desc}</p>
              <p className="mt-6 font-display text-5xl font-semibold">{t.price}<span className="text-base font-normal text-muted-foreground">{t.suffix}</span></p>
              <Link to="/contact" className={`mt-6 inline-flex w-full items-center justify-center px-5 py-3 rounded-full font-medium transition ${t.highlight ? "gradient-brand text-primary-foreground" : "border border-border hover:bg-secondary"}`}>{t.cta}</Link>
              <ul className="mt-8 space-y-3">
                {t.features.map((f) => (
                  <li key={f} className="flex gap-3 text-sm"><Check className="h-5 w-5 text-primary shrink-0" /> {f}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="rounded-2xl border border-border bg-card p-10 text-center">
          <h3 className="font-display text-2xl font-semibold">Have a high-volume use case?</h3>
          <p className="mt-3 text-muted-foreground">Custom volume discounts available for teams processing millions of calls.</p>
          <Link to="/contact" className="mt-6 inline-flex px-5 py-3 rounded-full gradient-brand text-primary-foreground font-medium">Contact sales</Link>
        </div>
      </Section>

      <CtaBand />
    </PageShell>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero, Section, CtaBand } from "@/components/site/PageShell";
import { Shield, Lock, FileCheck, Eye, Server, KeyRound } from "lucide-react";

export const Route = createFileRoute("/security")({
  head: () => ({
    meta: [
      { title: "Security — Holbox AI" },
      { name: "description", content: "SOC 2 Type II, ISO 27001, HIPAA, GDPR. Security and compliance are our foundation." },
    ],
  }),
  component: SecurityPage,
});

const pillars = [
  { icon: Lock, title: "Encryption everywhere", desc: "AES-256 at rest. TLS 1.3 in transit. Per-tenant key isolation on request." },
  { icon: KeyRound, title: "Granular access", desc: "OAuth-scoped permissions, role-based access control, and SSO/SAML for every plan." },
  { icon: Eye, title: "Auditability", desc: "Every action — every tool call — captured in immutable, exportable audit logs." },
  { icon: Server, title: "Bring your own cloud", desc: "Deploy Holbox into your AWS, Azure, or GCP account. Your data never leaves your VPC." },
  { icon: FileCheck, title: "Compliance certified", desc: "SOC 2 Type II, ISO 27001, HIPAA BAA, and GDPR-ready out of the box." },
  { icon: Shield, title: "Zero retention", desc: "Optional zero-retention mode for sensitive customer data — including LLM prompts." },
];

function SecurityPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Security & Trust"
        title={<>Security and compliance <span className="gradient-text">are our foundation.</span></>}
        subtitle="Holbox is engineered from the ground up to safeguard the most sensitive customer data."
      />

      <Section>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {pillars.map((p) => (
            <div key={p.title} className="rounded-2xl border border-border bg-card p-6">
              <p.icon className="h-6 w-6 text-primary" />
              <h3 className="mt-4 font-display text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="rounded-3xl border border-border bg-gradient-to-br from-primary/15 via-card to-accent/10 p-10">
          <h3 className="font-display text-3xl font-semibold">Certifications</h3>
          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-3">
            {["SOC 2 Type II", "ISO 27001", "HIPAA", "GDPR"].map((b) => (
              <div key={b} className="rounded-xl border border-border bg-background/60 px-4 py-6 text-center font-medium">{b}</div>
            ))}
          </div>
        </div>
      </Section>

      <CtaBand />
    </PageShell>
  );
}

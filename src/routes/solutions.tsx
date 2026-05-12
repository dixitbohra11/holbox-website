import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero, Section, CtaBand } from "@/components/site/PageShell";
import { Sparkles, Users, Briefcase, BookOpen, BarChart3, Megaphone, FileText, Building2, Code2 } from "lucide-react";

export const Route = createFileRoute("/solutions")({
  head: () => ({
    meta: [
      { title: "Solutions — Holbox AI" },
      { name: "description", content: "Power AI products, auto-provision users, source candidates, and more — Holbox solutions for every team." },
    ],
  }),
  component: SolutionsPage,
});

const useCases = [
  { id: "power-ai", icon: Sparkles, title: "Power AI products", desc: "Continuously sync customer data into your RAG and agent stacks." },
  { id: "auto-provision", icon: Users, title: "Auto-provision", desc: "Onboard and assign permissions in real time with HR data." },
  { id: "candidate-sourcing", icon: Briefcase, title: "Candidate sourcing", desc: "Pipe ATS data into your sourcing and recruiting workflows." },
  { id: "knowledge-base", icon: BookOpen, title: "Knowledge base", desc: "Index documents, tickets and wikis as a single source of truth." },
  { id: "project-analysis", icon: BarChart3, title: "Project analysis", desc: "Visualize ticketing and project data across teams." },
  { id: "financial-analysis", icon: BarChart3, title: "Financial analysis", desc: "Deeper financial insights powered by transactions." },
  { id: "source-leads", icon: Megaphone, title: "Source leads", desc: "Sync CRM and marketing data to fuel pipeline generation." },
  { id: "vendor-payments", icon: FileText, title: "Reconcile vendor payments", desc: "Automatic bill and payment sync to accounting platforms." },
  { id: "customer-payments", icon: FileText, title: "Reconcile customer payments", desc: "Match payments and invoices automatically across providers." },
];

const industries = [
  { id: "financial-services", icon: Building2, title: "Financial services", desc: "Compliance-ready AI for banks, fintechs, and asset managers." },
  { id: "hr-tech", icon: Users, title: "HR technology", desc: "Unified HRIS, payroll, and ATS data for the next generation of HR products." },
];

const functions = [
  { id: "product", icon: Sparkles, title: "Product", desc: "Ship AI features and integrations faster, without sacrificing quality or control." },
  { id: "developer", icon: Code2, title: "Developer", desc: "Focus on product, not plumbing. One API, dozens of integrations." },
  { id: "gtm", icon: Megaphone, title: "GTM", desc: "Turn integrations into a revenue-generating motion — with co-selling support." },
];

function SolutionsPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Solutions"
        title={<>Built for teams shipping <span className="gradient-text">production AI.</span></>}
        subtitle="From power users to entire industries, Holbox solutions adapt to how your team builds."
      />

      <Section>
        <h2 className="font-display text-3xl font-semibold">By use case</h2>
        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {useCases.map((u) => (
            <div key={u.id} id={u.id} className="rounded-2xl border border-border bg-card p-6 scroll-mt-24 hover:border-primary/40 transition">
              <div className="h-10 w-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center"><u.icon className="h-5 w-5 text-primary" /></div>
              <h3 className="mt-4 font-display text-lg font-semibold">{u.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{u.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <h2 className="font-display text-3xl font-semibold">By industry</h2>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {industries.map((u) => (
            <div key={u.id} id={u.id} className="rounded-2xl border border-border bg-card p-8 scroll-mt-24">
              <u.icon className="h-7 w-7 text-primary" />
              <h3 className="mt-4 font-display text-2xl font-semibold">{u.title}</h3>
              <p className="mt-2 text-muted-foreground">{u.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <h2 className="font-display text-3xl font-semibold">By function</h2>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {functions.map((u) => (
            <div key={u.id} id={u.id} className="rounded-2xl border border-border bg-card p-6 scroll-mt-24">
              <u.icon className="h-6 w-6 text-primary" />
              <h3 className="mt-4 font-display text-xl font-semibold">{u.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{u.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <CtaBand />
    </PageShell>
  );
}

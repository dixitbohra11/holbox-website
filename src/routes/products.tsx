import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, PageHero, Section, CtaBand } from "@/components/site/PageShell";
import { Database, Bot, GitBranch, Activity, Globe2, Shield, ArrowRight, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — Holbox AI" },
      { name: "description", content: "Unified integrations, Agent Handler, and Gateway — the platform powering enterprise AI." },
    ],
  }),
  component: ProductsPage,
});

const features = (items: string[]) => (
  <ul className="mt-6 space-y-3">
    {items.map((i) => (
      <li key={i} className="flex gap-3 text-sm text-muted-foreground"><CheckCircle2 className="h-5 w-5 text-primary shrink-0" /> {i}</li>
    ))}
  </ul>
);

function ProductsPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="The platform"
        title={<>One platform. <span className="gradient-text">Three pillars.</span></>}
        subtitle="Integrations, agentic tooling, and LLM optimization — built for production AI from day one."
      />

      <Section id="unified">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-medium text-primary"><Database className="h-4 w-4" /> DATA INTEGRATIONS</div>
            <h2 className="mt-3 font-display text-4xl font-semibold">Unified</h2>
            <p className="mt-4 text-muted-foreground">Build once and access hundreds of customer-facing integrations through a single API. Ship integrations in days, not quarters — and let Holbox maintain them on your behalf.</p>
            {features(["One API for HRIS, CRM, ATS, Ticketing, Accounting and more", "Beautiful drop-in React component for your end users", "Automatic field mapping and webhook management", "Always up-to-date connectors with 99.99% uptime SLA"])}
          </div>
          <div className="rounded-2xl border border-border bg-card p-6 glow">
            <pre className="text-xs font-mono text-muted-foreground overflow-x-auto"><code>{`const employees = await holbox.hris.employees.list({
  account_token: customer.token,
});

// Returns a unified shape across Workday, BambooHR,
// Rippling, ADP, and 50+ more providers.`}</code></pre>
          </div>
        </div>
      </Section>

      <Section id="agent-handler">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 rounded-2xl border border-border bg-card p-6 glow">
            <pre className="text-xs font-mono text-muted-foreground overflow-x-auto"><code>{`const tools = await holbox.agents.tools({
  scope: ["slack:read", "drive:write"],
  user: currentUser.id,
});

const result = await agent.run({ tools });`}</code></pre>
          </div>
          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 text-xs font-medium text-primary"><Bot className="h-4 w-4" /> AGENTIC TOOLING</div>
            <h2 className="mt-3 font-display text-4xl font-semibold">Agent Handler</h2>
            <p className="mt-4 text-muted-foreground">Let your AI agents make the call with secure, scoped access to thousands of pre-built tools. Autonomous agents — with enterprise-grade guardrails.</p>
            {features(["Pre-built tools for Slack, Drive, Jira, Salesforce and more", "Per-user OAuth and scoped permissions", "Audit logs for every tool call", "Approval workflows for high-risk actions"])}
          </div>
        </div>
      </Section>

      <Section id="gateway">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-medium text-primary"><GitBranch className="h-4 w-4" /> LLM OPTIMIZATION</div>
            <h2 className="mt-3 font-display text-4xl font-semibold">Gateway</h2>
            <p className="mt-4 text-muted-foreground">Route smarter across models. Balance cost, reliability, and performance with a single API across OpenAI, Anthropic, Mistral, and your own deployments.</p>
            {features(["Smart routing by task complexity, cost, and latency", "Automatic failover and retries", "Full spend visibility per team and customer", "Zero lock-in — bring your own keys"])}
          </div>
          <div className="rounded-2xl border border-border bg-card p-6 glow">
            <pre className="text-xs font-mono text-muted-foreground overflow-x-auto"><code>{`const response = await holbox.gateway.complete({
  prompt,
  policy: "cost-optimized",
  fallbacks: ["gpt-4o", "claude-sonnet", "mistral-large"],
});`}</code></pre>
          </div>
        </div>
      </Section>

      <Section id="observability">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: Activity, title: "Observability", desc: "Real-time monitoring for every sync, call, and tool action across your customers." },
            { icon: Globe2, title: "All integrations", desc: "Hundreds of connectors maintained for you — never patch a broken integration again." },
            { icon: Shield, title: "Enterprise security", desc: "SOC 2 Type II, ISO 27001, HIPAA, GDPR. Encryption at rest and in transit." },
          ].map((c) => (
            <div key={c.title} className="rounded-2xl border border-border bg-card p-6">
              <c.icon className="h-6 w-6 text-primary" />
              <h3 className="mt-4 font-display text-xl font-semibold">{c.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{c.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="integrations">
        <h2 className="font-display text-3xl font-semibold">A connector library that grows with you</h2>
        <p className="mt-3 text-muted-foreground max-w-2xl">From Workday to HubSpot to NetSuite — Holbox maintains every connector so you don't have to.</p>
        <div className="mt-8 grid grid-cols-3 sm:grid-cols-5 lg:grid-cols-8 gap-3">
          {["Workday","HubSpot","Salesforce","NetSuite","Slack","Jira","Drive","Notion","Asana","Rippling","ClickUp","BambooHR","Mondaycom","Copper","FreshBooks","Zoom"].map((n) => (
            <div key={n} className="rounded-lg border border-border bg-card/60 p-3 text-center text-xs font-medium text-muted-foreground">{n}</div>
          ))}
        </div>
        <Link to="/contact" className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-primary">Request a connector <ArrowRight className="h-3.5 w-3.5" /></Link>
      </Section>

      <CtaBand />
    </PageShell>
  );
}

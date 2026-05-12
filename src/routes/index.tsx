import { createFileRoute, Link } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/Reveal";
import heroBg from "@/assets/hero-light.jpg";
import logo from "@/assets/holbox-logo.png";
import { ArrowRight, Zap, Shield, GitBranch, Database, Bot, Workflow, CheckCircle2, Sparkles, Brain, Eye, Mic, Cog, Cpu, LineChart, Building2, HeartPulse, ShoppingBag, Rocket, Lock, Play, MessageSquare } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "HolboxAI - Powering the Future with AI" },
      { name: "description", content: "HolboxAI delivers enterprise generative AI — intelligent data syncing, secure agentic tooling, and smart LLM optimization deployed on your cloud." },
    ],
  }),
  component: Home,
});

const logos = ["OpenAI", "Mistral", "AWS", "Azure", "Snowflake", "Databricks", "NVIDIA", "Anthropic", "Google", "Meta", "Cohere", "Perplexity"];

const products = [
  { tag: "Data integrations", title: "Unified", desc: "Build once and access hundreds of customer-facing integrations through a single API.", icon: Database, to: "/products#unified" },
  { tag: "Agentic tooling", title: "Agent Handler", desc: "Let your AI agents make the call with secure, scoped access to tools.", icon: Bot, to: "/products#agent-handler" },
  { tag: "LLM optimization", title: "Gateway", desc: "Route smarter across models. Balance cost, reliability, and performance.", icon: GitBranch, to: "/products#gateway" },
];

const services = [
  { icon: Brain, title: "Generative AI Strategy", desc: "Identify high-ROI AI opportunities and design a roadmap aligned to your business outcomes." },
  { icon: Cpu, title: "LLM Engineering", desc: "Fine-tune, evaluate, and deploy models that meet your accuracy, latency, and cost targets." },
  { icon: Bot, title: "AI Agents & Copilots", desc: "Production-ready agents that automate workflows across your tools and data." },
  { icon: Database, title: "Data & RAG Pipelines", desc: "Continuously sync structured and unstructured data into retrieval-grade context." },
  { icon: Lock, title: "AI Governance", desc: "Guardrails, observability, and policy controls for safe enterprise rollouts." },
  { icon: Cog, title: "MLOps & Cloud", desc: "Deploy on AWS, Azure, or GCP with full ownership of weights, data, and infrastructure." },
];

const industries = [
  { icon: Building2, title: "Financial Services", desc: "Risk, compliance, and customer intelligence powered by domain-tuned models." },
  { icon: HeartPulse, title: "Healthcare", desc: "Clinical workflow automation with HIPAA-grade privacy and traceability." },
  { icon: ShoppingBag, title: "Retail & CPG", desc: "Demand forecasting, conversational commerce, and merchandising copilots." },
  { icon: Rocket, title: "SaaS & Tech", desc: "Embed AI in your product with multi-tenant, white-label infrastructure." },
];

const capabilities = [
  { icon: Brain, title: "LLMs", desc: "Powerful language models that create, understand, and evolve human-like text." },
  { icon: Eye, title: "Vision", desc: "Generative visual intelligence that learns from and creates image-based insights." },
  { icon: Mic, title: "Speech", desc: "Natural voice systems with real-time recognition, understanding, and synthesis." },
  { icon: Bot, title: "Agents", desc: "Autonomous AI agents built to adapt, learn, and act intelligently across tasks." },
];

const useCases = [
  { title: "Fuel enterprise search", desc: "Continuously sync your customers' data into your RAG applications.", icon: Sparkles },
  { title: "Enable agents to take actions", desc: "Power agents to act inside your users' systems — ad hoc or background.", icon: Bot },
  { title: "Cut model costs without cutting quality", desc: "Auto-route each LLM call to the best provider for the task.", icon: Zap },
  { title: "Auto-provision employees", desc: "Onboard and assign permissions in real time using HR data.", icon: Workflow },
  { title: "Reconcile vendor payments", desc: "Sync bills and payments to your customers' accounting platforms.", icon: CheckCircle2 },
  { title: "Analyze project status", desc: "Visualize ticketing data to improve team collaboration.", icon: LineChart },
];

const steps = [
  { n: "01", title: "Discover", desc: "We map your data, workflows, and KPIs to high-impact AI use cases." },
  { n: "02", title: "Design", desc: "Architect models, retrieval, agents, and guardrails for your environment." },
  { n: "03", title: "Deploy", desc: "Ship to your cloud with CI/CD, monitoring, and human-in-the-loop controls." },
  { n: "04", title: "Scale", desc: "Iterate with evaluation pipelines, cost routing, and continuous tuning." },
];

const testimonials = [
  { quote: "Holbox cut our integration backlog from quarters to weeks and gave our agents production-grade reliability.", who: "VP Engineering, Fintech Unicorn" },
  { quote: "Their Gateway saved us 38% on inference spend in the first month with zero quality regression.", who: "Head of AI, SaaS Platform" },
  { quote: "The agent runtime is the safest we've evaluated — auditable tool calls and policy enforcement out of the box.", who: "CISO, Healthcare Provider" },
];

function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        {/* HERO */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 -z-10">
            <img src={heroBg} alt="" className="absolute inset-0 w-full h-full object-cover opacity-60" width={1920} height={1080} />
            <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/60 to-background" />
            <div className="absolute inset-0 grid-bg opacity-80" />
          </div>
          <div className="mx-auto max-w-7xl px-6 pt-16 pb-20 md:pt-24 md:pb-28 lg:pt-28 lg:pb-32 grid md:grid-cols-[1.15fr_1fr] gap-10 md:gap-8 lg:gap-14 items-center">
            <div className="text-center md:text-left">
              <Reveal>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Enterprise Generative AI</p>
              </Reveal>
              <Reveal delay={1}>
                <h1 className="mt-5 font-display text-4xl sm:text-5xl md:text-5xl lg:text-7xl font-semibold leading-[1.05] tracking-tight max-w-3xl text-foreground">
                  Move fast.<br />Build AI <span className="gradient-text">right.</span>
                </h1>
              </Reveal>
              <Reveal delay={2}>
                <p className="mt-6 max-w-xl mx-auto md:mx-0 text-base sm:text-lg text-muted-foreground leading-relaxed">
                  Battle-tested infrastructure for AI and SaaS products at scale — intelligent data syncing, secure agentic tooling, and smart LLM optimization. Deployed on your own cloud.
                </p>
              </Reveal>
              <Reveal delay={3}>
                <div className="mt-9 flex flex-wrap gap-3 justify-center md:justify-start">
                  <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-primary-foreground gradient-brand glow font-medium hover:opacity-95 transition">
                    Get a demo <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link to="/pricing" className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border bg-card font-medium hover:bg-secondary transition">
                    Start for free
                  </Link>
                </div>
              </Reveal>
            </div>

            {/* PDR Circle animation - tablet & desktop only */}
            <Reveal delay={2} className="relative hidden md:block">
              <div className="relative mx-auto aspect-square w-full max-w-[420px] lg:max-w-[520px]">
                <div className="pdr-circle absolute inset-0">
                  <div className="pdr-ring r1" />
                  <div className="pdr-ring r2" />
                  <div className="pdr-ring r3" />
                  <div className="pdr-dot float" style={{ top: "-6px", left: "calc(50% - 6px)" }} />
                  <div className="pdr-dot float" style={{ top: "calc(50% - 6px)", right: "-6px", animationDelay: "1s" }} />
                  <div className="pdr-dot float" style={{ bottom: "-6px", left: "calc(50% - 6px)", animationDelay: "2s" }} />
                  <div className="pdr-dot float" style={{ top: "calc(50% - 6px)", left: "-6px", animationDelay: "3s" }} />
                </div>
                <div className="absolute inset-[28%] rounded-full bg-gradient-to-br from-primary/15 to-accent/15 backdrop-blur-md border border-primary/30 flex items-center justify-center pulse-glow">
                  {/* <img src={logo} alt="HolboxAI" className="h-16 w-16 lg:h-24 lg:w-24 float rounded-lg" width={96} height={96} /> */}
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* MARQUEE */}
        <section className="border-y border-border bg-secondary/40">
          <div className="mx-auto max-w-7xl px-6 py-10">
            <p className="text-center text-sm text-muted-foreground">Trusted by the companies building what's next</p>
            <div className="mt-6 marquee">
              <div className="marquee-track">
                {[...logos, ...logos].map((l, i) => (
                  <span key={i} className="font-display text-xl font-semibold text-muted-foreground/70 hover:text-primary transition shrink-0">{l}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* PRODUCTS */}
        <section className="mx-auto max-w-7xl px-6 py-24">
          <div className="max-w-3xl">
            <Reveal><p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">One platform</p></Reveal>
            <Reveal delay={1}><h2 className="mt-4 font-display text-4xl sm:text-5xl font-semibold tracking-tight">The hardest parts of building AI, handled.</h2></Reveal>
            <Reveal delay={2}><p className="mt-5 text-lg text-muted-foreground">Holbox handles the integrations, agent infrastructure, and model routing so your team stays focused on product.</p></Reveal>
          </div>
          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {products.map((p, i) => (
              <Reveal key={p.title} delay={(i + 1) as 1 | 2 | 3}>
                <Link to={p.to} className="group relative block rounded-2xl border border-border bg-card p-7 hover:border-primary/60 hover:shadow-soft transition overflow-hidden h-full">
                  <div className="absolute -top-20 -right-20 h-40 w-40 rounded-full bg-primary/10 blur-3xl opacity-0 group-hover:opacity-100 transition" />
                  <p className="text-xs font-medium text-primary">{p.tag}</p>
                  <div className="mt-3 flex items-center gap-3">
                    <div className="h-10 w-10 rounded-lg gradient-brand flex items-center justify-center"><p.icon className="h-5 w-5 text-white" /></div>
                    <h3 className="font-display text-2xl font-semibold">{p.title}</h3>
                  </div>
                  <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
                  <p className="mt-6 text-sm font-medium text-primary inline-flex items-center gap-1 group-hover:gap-2 transition-all">Learn more <ArrowRight className="h-3.5 w-3.5" /></p>
                </Link>
              </Reveal>
            ))}
          </div>
        </section>

        {/* SERVICES (holbox.ai inspired) */}
        <section className="relative bg-secondary/30 border-y border-border">
          <div className="mx-auto max-w-7xl px-6 py-24">
            <div className="max-w-2xl">
              <Reveal><p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Services</p></Reveal>
              <Reveal delay={1}><h2 className="mt-4 font-display text-4xl sm:text-5xl font-semibold tracking-tight">End-to-end generative AI services</h2></Reveal>
              <Reveal delay={2}><p className="mt-5 text-lg text-muted-foreground">From discovery to deployment, our experts ship measurable AI outcomes for your business.</p></Reveal>
            </div>
            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((s, i) => (
                <Reveal key={s.title} delay={((i % 3) + 1) as 1 | 2 | 3}>
                  <div className="rounded-2xl bg-card border border-border p-6 hover:border-primary/50 hover:shadow-soft transition h-full">
                    <div className="h-11 w-11 rounded-xl gradient-brand flex items-center justify-center"><s.icon className="h-5 w-5 text-white" /></div>
                    <h3 className="mt-5 font-display text-xl font-semibold">{s.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* CAPABILITIES */}
        <section className="relative">
          <div className="absolute inset-0 -z-10 bg-hero opacity-60" />
          <div className="mx-auto max-w-7xl px-6 py-24">
            <div className="text-center max-w-2xl mx-auto">
              <Reveal><p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Capabilities</p></Reveal>
              <Reveal delay={1}><h2 className="mt-4 font-display text-4xl sm:text-5xl font-semibold tracking-tight">Pushing the boundaries of what's possible</h2></Reveal>
              <Reveal delay={2}><p className="mt-5 text-lg text-muted-foreground">Cutting-edge AI across language, vision, speech, and autonomous agents — engineered for enterprise scale.</p></Reveal>
            </div>
            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {capabilities.map((c, i) => (
                <Reveal key={c.title} delay={((i % 4) + 1) as 1 | 2 | 3 | 4}>
                  <div className="rounded-2xl border border-border bg-card/80 backdrop-blur p-6 hover:shadow-soft transition h-full">
                    <div className="h-11 w-11 rounded-xl gradient-brand flex items-center justify-center"><c.icon className="h-5 w-5 text-white" /></div>
                    <h3 className="mt-5 font-display text-xl font-semibold">{c.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{c.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="mx-auto max-w-7xl px-6 py-24">
          <div className="max-w-2xl">
            <Reveal><p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">How we work</p></Reveal>
            <Reveal delay={1}><h2 className="mt-4 font-display text-4xl sm:text-5xl font-semibold tracking-tight">A proven path from idea to production</h2></Reveal>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={((i % 4) + 1) as 1 | 2 | 3 | 4}>
                <div className="rounded-2xl border border-border bg-card p-6 pt-8 h-full relative overflow-hidden hover:border-primary/40 hover:shadow-soft transition">
                  <div className="absolute top-3 right-4 font-display text-6xl font-bold text-primary/15 leading-none select-none">{s.n}</div>
                  <h3 className="mt-3 font-display text-xl font-semibold relative">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground relative">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* WHY GENAI CUSTOMER SERVICE — animated phone */}
        <section className="bg-secondary/30 border-y border-border">
          <div className="mx-auto max-w-7xl px-6 py-24 grid lg:grid-cols-2 gap-12 items-center">
            <Reveal>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Customer experience</p>
                <h2 className="mt-4 font-display text-4xl sm:text-5xl font-semibold tracking-tight">Why You Need GenAI-Powered Customer Service</h2>
                <p className="mt-5 text-lg text-muted-foreground">Always-on, multilingual assistants that resolve queries instantly, escalate intelligently, and learn from every conversation — across web, app, voice and WhatsApp.</p>
                <ul className="mt-6 space-y-3 text-sm">
                  {[
                    "24×7 conversational support with sub-second responses",
                    "Grounded in your KB, products and policies — no hallucinations",
                    "Seamless handoff to human agents with full context",
                    "Continuous learning from every resolved ticket",
                  ].map((t) => (
                    <li key={t} className="flex items-start gap-2"><CheckCircle2 className="h-4 w-4 text-primary mt-0.5" />{t}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={2}>
              <div className="flex justify-center">
                <div className="phone-frame float">
                  <div className="phone-screen">
                    <div className="flex items-center gap-2 pb-2 border-b border-border/60">
                      <div className="h-7 w-7 rounded-full gradient-brand flex items-center justify-center"><MessageSquare className="h-3.5 w-3.5 text-white" /></div>
                      <div>
                        <p className="text-[11px] font-semibold leading-tight">HolboxAI Assistant</p>
                        <p className="text-[10px] text-muted-foreground leading-tight">Online · replies instantly</p>
                      </div>
                    </div>
                    <div className="mt-3 space-y-2">
                      <div className="phone-bubble b1 max-w-[80%]">Hi! How can I help you today?</div>
                      <div className="phone-bubble user b2 max-w-[80%]">Where is my order #A23?</div>
                      <div className="phone-bubble b3 max-w-[85%]">Your order is out for delivery and arrives by 6 PM today. Want me to share live tracking?</div>
                      <div className="phone-bubble user b4 max-w-[60%]">Yes please!</div>
                      <div className="phone-bubble b4 max-w-[40%]" style={{ animationDelay: "4.4s" }}>
                        <span className="typing-dots"><span></span><span></span><span></span></span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* CREATE ANYTHING — video canvas */}
        <section className="mx-auto max-w-7xl px-6 py-24  gap-12 items-center">
          {/* <Reveal delay={1}>
            <div className="video-canvas">
              <button aria-label="Play" className="play-btn group">
                <Play className="h-7 w-7 text-primary fill-primary group-hover:scale-110 transition" />
              </button>
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-foreground/70">
                <span className="font-medium">HolboxAI · Showreel</span>
                <span>02:14</span>
              </div>
            </div>
          </Reveal> */}
          <Reveal>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Creative AI</p>
              <h2 className="mt-4 font-display text-4xl sm:text-5xl font-semibold tracking-tight">Create Anything You Can Imagine</h2>
              <p className="mt-5 text-lg text-muted-foreground">Generate marketing copy, product imagery, videos, voiceovers and code from a single prompt — with brand-safe guardrails and enterprise governance.</p>
              <div className="mt-8 grid grid-cols-2 gap-3">
                {["Text", "Image", "Video", "Voice", "Code", "3D"].map((t, i) => (
                  <Reveal key={t} delay={((i % 3) + 1) as 1 | 2 | 3}>
                    <div className="rounded-xl border border-border bg-card px-4 py-3 text-sm font-medium hover:border-primary/50 hover:shadow-soft transition flex items-center gap-2">
                      <Sparkles className="h-4 w-4 text-primary" /> {t} generation
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </Reveal>
        </section>

        {/* INDUSTRIES */}
        <section className="bg-secondary/30 border-y border-border">
          <div className="mx-auto max-w-7xl px-6 py-24">
            <div className="max-w-2xl">
              <Reveal><p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Industries</p></Reveal>
              <Reveal delay={1}><h2 className="mt-4 font-display text-4xl sm:text-5xl font-semibold tracking-tight">Built for regulated, high-stakes industries</h2></Reveal>
            </div>
            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {industries.map((c, i) => (
                <Reveal key={c.title} delay={((i % 4) + 1) as 1 | 2 | 3 | 4}>
                  <div className="rounded-2xl border border-border bg-card p-6 hover:border-primary/50 hover:shadow-soft transition h-full">
                    <div className="h-11 w-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center"><c.icon className="h-5 w-5 text-primary" /></div>
                    <h3 className="mt-5 font-display text-lg font-semibold">{c.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{c.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* USE CASES */}
        <section className="mx-auto max-w-7xl px-6 py-24">
          <div className="flex items-end justify-between flex-wrap gap-4">
            <Reveal>
              <div className="max-w-2xl">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Use cases</p>
                <h2 className="mt-4 font-display text-4xl sm:text-5xl font-semibold tracking-tight">Designed for teams building AI products</h2>
              </div>
            </Reveal>
            <Reveal delay={1}>
              <Link to="/solutions" className="text-sm font-medium text-primary inline-flex items-center gap-1">View all use cases <ArrowRight className="h-3.5 w-3.5" /></Link>
            </Reveal>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {useCases.map((u, i) => (
              <Reveal key={u.title} delay={((i % 3) + 1) as 1 | 2 | 3}>
                <div className="rounded-2xl border border-border bg-card p-6 hover:border-primary/40 hover:shadow-soft transition h-full">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center"><u.icon className="h-5 w-5 text-primary" /></div>
                  <h3 className="mt-5 font-display text-lg font-semibold">{u.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{u.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="bg-secondary/30 border-y border-border">
          <div className="mx-auto max-w-7xl px-6 py-24">
            <Reveal><h2 className="font-display text-4xl sm:text-5xl font-semibold tracking-tight max-w-3xl">Outcomes that move the business forward</h2></Reveal>
            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {testimonials.map((t, i) => (
                <Reveal key={i} delay={((i % 3) + 1) as 1 | 2 | 3}>
                  <figure className="rounded-2xl border border-border bg-card p-7 h-full">
                    <blockquote className="font-display text-lg leading-relaxed">&ldquo;{t.quote}&rdquo;</blockquote>
                    <figcaption className="mt-5 text-sm text-muted-foreground">— {t.who}</figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* SECURITY STRIP */}
        <section className="mx-auto max-w-7xl px-6 py-20">
          <Reveal>
            <div className="rounded-3xl border border-border bg-gradient-to-br from-primary/10 via-card to-accent/10 p-10 lg:p-14 relative overflow-hidden shadow-card">
              <div className="absolute -top-32 -right-20 h-80 w-80 rounded-full bg-primary/15 blur-3xl" />
              <div className="relative grid lg:grid-cols-[1.5fr_1fr] gap-10 items-center">
                <div>
                  <Shield className="h-10 w-10 text-primary" />
                  <h2 className="mt-4 font-display text-3xl sm:text-4xl font-semibold">Security and compliance are our foundation</h2>
                  <p className="mt-4 text-muted-foreground max-w-xl">Designed from the ground up to safeguard your customer data. Holbox is certified in SOC 2 Type II, ISO 27001, HIPAA, and GDPR.</p>
                  <Link to="/security" className="mt-6 inline-flex text-sm font-medium text-primary">Security at Holbox →</Link>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {["SOC 2 Type II", "ISO 27001", "HIPAA", "GDPR"].map((b) => (
                    <div key={b} className="rounded-xl border border-border bg-background px-4 py-5 text-center text-sm font-medium">{b}</div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-5xl px-6 py-24 text-center">
          <Reveal><h2 className="font-display text-4xl sm:text-5xl font-semibold tracking-tight">Integrate smarter. <span className="gradient-text">Scale faster.</span></h2></Reveal>
          <Reveal delay={1}><p className="mt-5 text-lg text-muted-foreground">See Holbox in action. Try it free or get a custom demo today.</p></Reveal>
          <Reveal delay={2}>
            <div className="mt-8 flex flex-wrap gap-3 justify-center">
              <Link to="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-primary-foreground gradient-brand glow font-medium">Get a demo <ArrowRight className="h-4 w-4" /></Link>
              <Link to="/pricing" className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-border bg-card font-medium hover:bg-secondary">Start for free</Link>
            </div>
          </Reveal>
        </section>
      </main>
      <Footer />
    </div>
  );
}

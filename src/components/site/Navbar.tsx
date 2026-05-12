import { Link } from "@tanstack/react-router";
import { useState, useRef } from "react";
import { ChevronDown, Shield, Activity, Globe2, Sparkles, Users, BookOpen, BarChart3, Building2, Briefcase, Code2, Megaphone, FileText, GraduationCap, HelpCircle, Calendar, Handshake, Newspaper, X, Menu } from "lucide-react";
import logo from "@/assets/holbox-logo.png";

const productsMenu = {
  left: { 
    title: "Platform",
    items: [
      { icon: Shield, label: "Security", to: "/security" },
      { icon: Activity, label: "Observability", to: "/products#observability" },
      { icon: Globe2, label: "All integrations", to: "/products#integrations" },
    ],
  },
  cards: [ 
    { tag: "Data integrations", title: "Unified", desc: "Build once, access hundreds of customer-facing integrations.", to: "/products#unified" },
    { tag: "Agentic tooling", title: "Agent Handler", desc: "Connect your agent to thousands of pre-built tools.", to: "/products#agent-handler" },
    { tag: "LLM optimization", title: "Gateway", desc: "Access all LLMs through one API with routing and governance.", to: "/products#gateway" },
  ],
};

const solutionsMenu = {
  useCases: [ 
    { icon: Sparkles, label: "Power AI products", to: "/solutions#power-ai" },
    { icon: Users, label: "Auto-provision", to: "/solutions#auto-provision" },
    { icon: Briefcase, label: "Candidate sourcing", to: "/solutions#candidate-sourcing" },
    { icon: BookOpen, label: "Knowledge base", to: "/solutions#knowledge-base" },
    { icon: BarChart3, label: "Project analysis", to: "/solutions#project-analysis" },
    { icon: BarChart3, label: "Financial analysis", to: "/solutions#financial-analysis" },
    { icon: Megaphone, label: "Source leads", to: "/solutions#source-leads" },
    { icon: FileText, label: "Reconcile vendor payments", to: "/solutions#vendor-payments" },
    { icon: FileText, label: "Reconcile customer payments", to: "/solutions#customer-payments" },
  ],
  industries: [
    { icon: Building2, label: "Financial services", to: "/solutions#financial-services" },
    { icon: Users, label: "HR technology", to: "/solutions#hr-tech" },
  ],
  functions: [
    { label: "Product", to: "/solutions#product" },
    { label: "Developer", to: "/solutions#developer" },
    { label: "GTM", to: "/solutions#gtm" },
  ],
};

const resourcesMenu = [
  { icon: Newspaper, label: "Blog", to: "/resources#blog" },
  { icon: FileText, label: "Data sheets", to: "/resources#data-sheets" },
  { icon: BookOpen, label: "eBooks", to: "/resources#ebooks" },
  { icon: HelpCircle, label: "Help center", to: "/resources#help" },
  { icon: Calendar, label: "Events and webinars", to: "/resources#events" },
  { icon: GraduationCap, label: "Careers", to: "/resources#careers" },
  { icon: Handshake, label: "Partners", to: "/resources#partners" },
];

const docsMenu = [
  { icon: Code2, label: "API Reference", to: "/docs#api" },
  { icon: BookOpen, label: "Guides", to: "/docs#guides" },
  { icon: FileText, label: "Changelog", to: "/docs#changelog" },
];

export function Navbar() {
  const [open, setOpen] = useState<string | null>(null);
  const [mobile, setMobile] = useState(false);
  const [acc, setAcc] = useState<string | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const openMenu = (id: string) => {
    if (closeTimer.current) { clearTimeout(closeTimer.current); closeTimer.current = null; }
    setOpen(id);
  };
  const scheduleClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpen(null), 180);
  };
  const cancelClose = () => {
    if (closeTimer.current) { clearTimeout(closeTimer.current); closeTimer.current = null; }
  };

  return (
    <header className="sticky top-0 z-50 bg-background/85 backdrop-blur-xl border-b border-border">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <img src={logo} alt="Holbox AI" className="h-9 w-9" width={36} height={36} />
          <span className="font-display text-lg font-semibold tracking-tight text-foreground">Holbox<span className="text-primary">.ai</span></span>
        </Link>

        <nav className="relative hidden xl:flex items-center gap-1" onMouseLeave={scheduleClose} onMouseEnter={cancelClose}>
          <NavTrigger label="Products" onEnter={() => openMenu("products")} active={open === "products"} />
          <NavTrigger label="Solutions" onEnter={() => openMenu("solutions")} active={open === "solutions"} />
          <NavLink to="/customers" onEnter={scheduleClose}>Customers</NavLink>
          <NavTrigger label="Resources" onEnter={() => openMenu("resources")} active={open === "resources"} />
          <NavLink to="/pricing" onEnter={scheduleClose}>Pricing</NavLink>
          <NavTrigger label="Docs" onEnter={() => openMenu("docs")} active={open === "docs"} />
          <NavLink to="/security" onEnter={scheduleClose}>Security</NavLink>

          {open === "products" && <PanelWrap onEnter={cancelClose} onLeave={scheduleClose}><ProductsPanel /></PanelWrap>}
          {open === "solutions" && <PanelWrap onEnter={cancelClose} onLeave={scheduleClose}><SolutionsPanel /></PanelWrap>}
          {open === "resources" && <PanelWrap onEnter={cancelClose} onLeave={scheduleClose}><ResourcesPanel /></PanelWrap>}
          {open === "docs" && <PanelWrap onEnter={cancelClose} onLeave={scheduleClose}><DocsPanel /></PanelWrap>}
        </nav>

        <div className="hidden xl:flex items-center gap-2 shrink-0 whitespace-nowrap">
          <Link to="/contact" className="text-sm font-medium px-5 py-2 rounded-full text-primary-foreground gradient-brand glow hover:opacity-95 transition">Get a demo</Link>
        </div>

        <button onClick={() => setMobile(!mobile)} className="xl:hidden p-2 -mr-2" aria-label="Menu">
          {mobile ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {mobile && (
        <div className="xl:hidden border-t border-border bg-background max-h-[80vh] overflow-y-auto">
          <div className="px-4 py-3 space-y-1">
            <MobileGroup label="Products" id="products" acc={acc} setAcc={setAcc}>
              {productsMenu.cards.map((c) => (
                <Link key={c.title} to={c.to} onClick={() => setMobile(false)} className="block py-2 text-sm">
                  <span className="font-medium">{c.title}</span>
                  <span className="block text-xs text-muted-foreground">{c.desc}</span>
                </Link>
              ))}
              {productsMenu.left.items.map((it) => (
                <MobileItem key={it.label} to={it.to} onClick={() => setMobile(false)} icon={it.icon} label={it.label} />
              ))}
            </MobileGroup>

            <MobileGroup label="Solutions" id="solutions" acc={acc} setAcc={setAcc}>
              <p className="text-[11px] uppercase tracking-wider text-muted-foreground mt-2 mb-1">By use case</p>
              {solutionsMenu.useCases.map((it) => (
                <MobileItem key={it.label} to={it.to} onClick={() => setMobile(false)} icon={it.icon} label={it.label} />
              ))}
              <p className="text-[11px] uppercase tracking-wider text-muted-foreground mt-3 mb-1">By industry</p>
              {solutionsMenu.industries.map((it) => (
                <MobileItem key={it.label} to={it.to} onClick={() => setMobile(false)} icon={it.icon} label={it.label} />
              ))}
              <p className="text-[11px] uppercase tracking-wider text-muted-foreground mt-3 mb-1">By function</p>
              {solutionsMenu.functions.map((it) => (
                <Link key={it.label} to={it.to} onClick={() => setMobile(false)} className="block py-2 text-sm">{it.label}</Link>
              ))}
            </MobileGroup>

            <MobileLink to="/customers" onClick={() => { setMobile(false); setAcc(null); }}>Customers</MobileLink>

            <MobileGroup label="Resources" id="resources" acc={acc} setAcc={setAcc}>
              {resourcesMenu.map((it) => (
                <MobileItem key={it.label} to={it.to} onClick={() => setMobile(false)} icon={it.icon} label={it.label} />
              ))}
            </MobileGroup>

            <MobileLink to="/pricing" onClick={() => { setMobile(false); setAcc(null); }}>Pricing</MobileLink>

            <MobileGroup label="Docs" id="docs" acc={acc} setAcc={setAcc}>
              {docsMenu.map((it) => (
                <MobileItem key={it.label} to={it.to} onClick={() => setMobile(false)} icon={it.icon} label={it.label} />
              ))}
            </MobileGroup>

            <MobileLink to="/security" onClick={() => { setMobile(false); setAcc(null); }}>Security</MobileLink>

            <div className="pt-3 mt-3 border-t border-border flex flex-col gap-2">
              <Link to="/contact" onClick={() => setMobile(false)} className="text-center text-sm font-medium px-5 py-2 rounded-full text-primary-foreground gradient-brand glow">Get a demo</Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

function MobileGroup({ label, id, acc, setAcc, children }: { label: string; id: string; acc: string | null; setAcc: (v: string | null) => void; children: React.ReactNode }) {
  const open = acc === id;
  return (
    <div className="border-b border-border/60 last:border-b-0">
      <button onClick={() => setAcc(open ? null : id)} className="flex w-full items-center justify-between py-3 text-sm font-semibold">
        {label} <ChevronDown className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && <div className="pb-3 pl-1">{children}</div>}
    </div>
  );
}
function MobileLink({ to, onClick, children }: { to: string; onClick: () => void; children: React.ReactNode }) {
  return <Link to={to} onClick={onClick} className="block py-3 text-sm font-semibold border-b border-border/60 last:border-b-0">{children}</Link>;
}
function MobileItem({ to, onClick, icon: Icon, label }: { to: string; onClick: () => void; icon: any; label: string }) {
  return (
    <Link to={to} onClick={onClick} className="flex items-center gap-2 py-2 text-sm text-foreground/90 hover:text-primary">
      <Icon className="h-4 w-4 text-primary" /> {label}
    </Link>
  );
}

function NavTrigger({ label, onEnter, active }: { label: string; onEnter: () => void; active: boolean }) {
  return (
    <button onMouseEnter={onEnter} className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md transition ${active ? "text-foreground bg-secondary" : "text-muted-foreground hover:text-foreground"}`}>
      {label} <ChevronDown className="h-3.5 w-3.5 opacity-70" />
    </button>
  );
}
function NavLink({ to, children, onEnter }: { to: string; children: React.ReactNode; onEnter: () => void }) {
  return (
    <Link to={to} onMouseEnter={onEnter} className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition" activeProps={{ className: "text-foreground" }}>
      {children}
    </Link>
  );
}

function PanelShell({ children, wide }: { children: React.ReactNode; wide?: boolean }) {
  return (
    <div className={`absolute left-1/2 top-full -translate-x-1/2 pt-3 ${wide ? "w-[920px]" : "w-[680px]"} animate-in fade-in slide-in-from-top-2 duration-200`}>
      <div className="rounded-2xl border border-border bg-popover shadow-card overflow-hidden">
        <div className="p-6">{children}</div>
      </div>
    </div>
  );
}

function PanelWrap({ children, onEnter, onLeave }: { children: React.ReactNode; onEnter: () => void; onLeave: () => void }) {
  return <div onMouseEnter={onEnter} onMouseLeave={onLeave}>{children}</div>;
}

function ProductsPanel() {
  return (
    <PanelShell wide>
      <div className="grid grid-cols-[200px_1fr] gap-8">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">{productsMenu.left.title}</p>
          <ul className="space-y-1">
            {productsMenu.left.items.map((it) => (
              <li key={it.label}>
                <Link to={it.to} className="flex items-center gap-2 px-2 py-2 rounded-md hover:bg-secondary text-sm">
                  <it.icon className="h-4 w-4 text-primary" /> {it.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">Products</p>
          <div className="grid grid-cols-3 gap-3">
            {productsMenu.cards.map((c) => (
              <Link key={c.title} to={c.to} className="group rounded-xl border border-border bg-card p-4 hover:border-primary/60 hover:shadow-soft transition">
                <p className="text-[11px] font-medium text-muted-foreground">{c.tag}</p>
                <p className="mt-1 font-display text-lg font-semibold">{c.title}</p>
                <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{c.desc}</p>
                <p className="mt-3 text-xs font-medium text-primary group-hover:translate-x-0.5 transition">Learn more →</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </PanelShell>
  );
}

function SolutionsPanel() {
  return (
    <PanelShell wide>
      <div className="grid grid-cols-[1fr_220px] gap-8">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">By use case</p>
          <ul className="grid grid-cols-2 gap-x-4 gap-y-1">
            {solutionsMenu.useCases.map((it) => (
              <li key={it.label}>
                <Link to={it.to} className="flex items-center gap-2 px-2 py-2 rounded-md hover:bg-secondary text-sm">
                  <it.icon className="h-4 w-4 text-primary" /> {it.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-5">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">By industry</p>
            <ul className="space-y-1">
              {solutionsMenu.industries.map((it) => (
                <li key={it.label}>
                  <Link to={it.to} className="flex items-center gap-2 px-2 py-2 rounded-md hover:bg-secondary text-sm">
                    <it.icon className="h-4 w-4 text-primary" /> {it.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">By function</p>
            <ul className="space-y-1">
              {solutionsMenu.functions.map((it) => (
                <li key={it.label}>
                  <Link to={it.to} className="block px-2 py-1.5 rounded-md hover:bg-secondary text-sm">{it.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </PanelShell>
  );
}

function ResourcesPanel() {
  return (
    <PanelShell>
      <div className="grid grid-cols-[1fr_1fr] gap-6">
        <div className="rounded-xl border border-border p-5 bg-gradient-to-br from-primary/10 to-accent/10">
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Resources</p>
          <p className="mt-2 font-display text-xl font-semibold">Everything you need to ship enterprise AI</p>
          <Link to="/resources" className="mt-4 inline-flex text-sm font-medium text-primary">Visit resources →</Link>
        </div>
        <ul className="space-y-1">
          {resourcesMenu.map((it) => (
            <li key={it.label}>
              <Link to={it.to} className="flex items-center gap-3 px-2 py-2 rounded-md hover:bg-secondary text-sm">
                <it.icon className="h-4 w-4 text-primary" /> {it.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </PanelShell>
  );
}

function DocsPanel() {
  return (
    <PanelShell>
      <ul className="grid grid-cols-3 gap-2">
        {docsMenu.map((it) => (
          <li key={it.label}>
            <Link to={it.to} className="flex flex-col gap-2 p-4 rounded-lg border border-border hover:border-primary/60 hover:shadow-soft transition">
              <it.icon className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium">{it.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </PanelShell>
  );
}

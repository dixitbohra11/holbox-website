import { Link } from "@tanstack/react-router";
import logo from "@/assets/holbox-logo.png";
import { Linkedin, Twitter, Mail, MapPin } from "lucide-react";

const cols = [
  { title: "Products", links: [["Unified", "/products#unified"], ["Agent Handler", "/products#agent-handler"], ["Gateway", "/products#gateway"], ["Security", "/security"]] },
  { title: "Solutions", links: [["Power AI products", "/solutions#power-ai"], ["Knowledge base", "/solutions#knowledge-base"], ["Auto-provision", "/solutions#auto-provision"], ["Financial services", "/solutions#financial-services"]] },
  { title: "Company", links: [["Customers", "/customers"], ["Pricing", "/pricing"], ["Resources", "/resources"], ["Contact", "/contact"]] },
  { title: "Developers", links: [["Docs", "/docs"], ["API Reference", "/docs#api"], ["Changelog", "/docs#changelog"], ["Status", "/docs#status"]] },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/40 mt-24">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-[1.5fr_repeat(4,1fr)]">
          <div>
            <Link to="/" className="flex items-center gap-2">
              <img src={logo} alt="HolboxAI" className="h-9 w-9 rounded" loading="lazy" width={36} height={36} />
              <span className="font-display text-lg font-semibold">Holbox<span className="text-primary">AI</span></span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground max-w-xs">Powering the future with AI — enterprise-grade generative AI deployed on your cloud.</p>
            
          </div>
          {cols.map((c) => (
            <div key={c.title}>
              <p className="text-sm font-semibold mb-3">{c.title}</p>
              <ul className="space-y-2">
                {c.links.map(([l, t]) => (
                  <li key={l}><Link to={t} className="text-sm text-muted-foreground hover:text-primary">{l}</Link></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 pt-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} HolboxAI. All rights reserved.</p>
          <div className="flex items-center gap-3 text-muted-foreground">
            <a href="https://www.linkedin.com/company/holboxai" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-primary transition"><Linkedin className="h-5 w-5" /></a>
            <a href="https://twitter.com/holboxai" target="_blank" rel="noreferrer" aria-label="Twitter" className="hover:text-primary transition"><Twitter className="h-5 w-5" /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}

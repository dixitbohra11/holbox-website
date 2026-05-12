import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell, PageHero, Section } from "@/components/site/PageShell";
import { Newspaper, FileText, BookOpen, HelpCircle, Calendar, GraduationCap, Handshake } from "lucide-react";

export const Route = createFileRoute("/resources")({
  head: () => ({
    meta: [
      { title: "Resources — Holbox AI" },
      { name: "description", content: "Blog, ebooks, data sheets, events, careers, and partners." },
    ],
  }),
  component: ResourcesPage,
});

const sections = [
  { id: "blog", icon: Newspaper, title: "Blog", desc: "Engineering deep-dives, product updates, and AI infrastructure trends." },
  { id: "data-sheets", icon: FileText, title: "Data sheets", desc: "Technical one-pagers for every product and integration." },
  { id: "ebooks", icon: BookOpen, title: "eBooks", desc: "Long-form guides on building production AI." },
  { id: "help", icon: HelpCircle, title: "Help center", desc: "Answers to the most common questions, fast." },
  { id: "events", icon: Calendar, title: "Events and webinars", desc: "Live and on-demand sessions with the Holbox team." },
  { id: "careers", icon: GraduationCap, title: "Careers", desc: "Help us build the connective tissue for production AI." },
  { id: "partners", icon: Handshake, title: "Partners", desc: "Implementation, technology, and channel partners." },
];

const posts = [
  { tag: "Engineering", title: "How we built Agent Handler in 90 days", read: "8 min read" },
  { tag: "Guides", title: "RAG patterns that actually scale to enterprise", read: "12 min read" },
  { tag: "Product", title: "Introducing Gateway: smart routing across LLMs", read: "6 min read" },
];

function ResourcesPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Resources"
        title={<>Everything you need to <span className="gradient-text">ship enterprise AI.</span></>}
        subtitle="The latest from the Holbox team — and the broader AI infrastructure community."
      />

      <Section id="blog">
        <h2 className="font-display text-3xl font-semibold">Featured posts</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {posts.map((p) => (
            <Link key={p.title} to="/contact" className="group rounded-2xl border border-border bg-card p-6 hover:border-primary/40 transition">
              <p className="text-xs font-medium text-primary">{p.tag}</p>
              <h3 className="mt-3 font-display text-lg font-semibold">{p.title}</h3>
              <p className="mt-4 text-xs text-muted-foreground">{p.read}</p>
            </Link>
          ))}
        </div>
      </Section>

      <Section>
        <h2 className="font-display text-3xl font-semibold">Browse all resources</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {sections.map((s) => (
            <div key={s.id} id={s.id} className="rounded-2xl border border-border bg-card p-6 scroll-mt-24">
              <s.icon className="h-6 w-6 text-primary" />
              <h3 className="mt-4 font-display text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </Section>
    </PageShell>
  );
}

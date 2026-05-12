import { createFileRoute } from "@tanstack/react-router";
import { PageShell, PageHero, Section } from "@/components/site/PageShell";
import { useState } from "react";
import { Mail, MapPin, Phone, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Holbox AI" },
      { name: "description", content: "Talk to the Holbox AI team. Get a demo, ask questions, or join us." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <PageShell>
      <PageHero
        eyebrow="Contact"
        title={<>Let's build <span className="gradient-text">together.</span></>}
        subtitle="Tell us about your project. A solutions engineer will reach out within one business day."
      />

      <Section>
        <div className="grid lg:grid-cols-[1.5fr_1fr] gap-10">
          <form
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="rounded-2xl border border-border bg-card p-8 space-y-5"
          >
            {sent ? (
              <div className="text-center py-12">
                <CheckCircle2 className="h-12 w-12 text-primary mx-auto" />
                <h3 className="mt-4 font-display text-2xl font-semibold">Thanks — we'll be in touch.</h3>
                <p className="mt-2 text-muted-foreground">We received your message and will reply within one business day.</p>
              </div>
            ) : (
              <>
                <div className="grid sm:grid-cols-2 gap-4">
                  <Field label=" Name" name="name" required />
                  <Field label="Phone No." name="phone no." required />
                </div>
                <Field label="Work email" name="email" type="email" required />
                <Field label="Company" name="company" required />
                <div>
                  <label className="text-sm font-medium block mb-1.5">What can we help with?</label>
                  <textarea required rows={5} className="w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40" />
                </div>
                <button type="submit" className="px-6 py-3 rounded-full gradient-brand text-primary-foreground font-medium glow">Send message</button>
              </>
            )}
          </form>

          <aside className="space-y-6">
            <div className="rounded-2xl border border-border bg-card p-6">
              <h3 className="font-display text-lg font-semibold">Reach us directly</h3>
              <div className="mt-4 space-y-3 text-sm">
                <p className="flex items-center gap-3 text-muted-foreground"><Mail className="h-4 w-4 text-primary" />sales@holbox.ai</p>
                
                <p className="flex items-center gap-3 text-muted-foreground"><MapPin className="h-4 w-4 text-primary" /> 701 Tillery Street Unit 12 1850,
Austin, TX 78702</p>
              </div>
            </div>
            <div className="rounded-2xl border border-border bg-gradient-to-br from-primary/15 to-accent/10 p-6">
              <h3 className="font-display text-lg font-semibold">Get a personalized demo</h3>
              <p className="mt-2 text-sm text-muted-foreground">See how Holbox fits into your stack — in 30 minutes.</p>
            </div>
          </aside>
        </div>
      </Section>
    </PageShell>
  );
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label htmlFor={name} className="text-sm font-medium block mb-1.5">{label}</label>
      <input id={name} name={name} type={type} required={required} className="w-full rounded-lg border border-border bg-background px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40" />
    </div>
  );
}

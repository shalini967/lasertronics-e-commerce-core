import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";

import { PageHeading, PageShell } from "@/components/PageShell";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Lasertronics — Sales, Support & Bulk Orders" },
      {
        name: "description",
        content:
          "Reach the Lasertronics team in Colombo for product advice, warranty support, bulk pricing and scheduled supply.",
      },
      { property: "og:title", content: "Contact Lasertronics" },
      {
        property: "og:description",
        content: "Talk to our engineers about products, support or bulk orders.",
      },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <PageShell>
      <PageHeading
        eyebrow="Contact"
        title="Talk to an engineer, not a call script"
        description="Product selection, warranty claims, bulk pricing or a part you cannot find — send it over and we will come back within one working day."
      />

      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-5">
        <Reveal className="lg:col-span-2">
          <div className="glass-card h-full rounded-3xl p-8">
            <h2 className="font-display text-lg font-bold">Lasertronics HQ</h2>
            <ul className="mt-6 space-y-5 text-sm text-muted-foreground">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                No. 214, Union Place, Colombo 02, Sri Lanka
              </li>
              <li className="flex gap-3">
                <Phone className="h-5 w-5 shrink-0 text-primary" />
                +94 11 234 5678
              </li>
              <li className="flex gap-3">
                <Mail className="h-5 w-5 shrink-0 text-primary" />
                hello@lasertronics.lk
              </li>
              <li className="flex gap-3">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                Mon–Fri 8.30am–6pm · Sat 9am–1pm
              </li>
            </ul>
          </div>
        </Reveal>

        <Reveal delay={100} className="lg:col-span-3">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="glass-card rounded-3xl p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field id="name" label="Full name" type="text" />
              <Field id="email" label="Email address" type="email" />
              <Field id="phone" label="Phone" type="tel" required={false} />
              <Field id="subject" label="Subject" type="text" />
            </div>
            <div className="mt-5">
              <label htmlFor="message" className="text-sm font-medium">
                How can we help?
              </label>
              <textarea
                id="message"
                required
                rows={5}
                className="mt-2 w-full rounded-2xl border border-input bg-background/60 px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary"
                placeholder="Tell us what you are building or which part you need."
              />
            </div>
            <button
              type="submit"
              className="mt-6 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110 active:scale-95"
            >
              {sent ? "Message sent" : "Send message"}
            </button>
            {sent ? (
              <p className="mt-3 text-sm text-primary">
                Thanks — this prototype form does not deliver mail yet.
              </p>
            ) : null}
          </form>
        </Reveal>
      </section>
    </PageShell>
  );
}

function Field({
  id,
  label,
  type,
  required = true,
}: {
  id: string;
  label: string;
  type: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={id} className="text-sm font-medium">
        {label}
      </label>
      <input
        id={id}
        type={type}
        required={required}
        className="mt-2 w-full rounded-full border border-input bg-background/60 px-5 py-3 text-sm outline-none transition-colors focus:border-primary"
      />
    </div>
  );
}

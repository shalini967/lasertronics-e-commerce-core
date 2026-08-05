import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Cpu, Factory, Radio, Wrench } from "lucide-react";

import { PageHeading, PageShell } from "@/components/PageShell";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/solutions")({
  head: () => ({
    meta: [
      { title: "Solutions — Industrial, Embedded, IoT & Repair | Lasertronics" },
      {
        name: "description",
        content:
          "Lasertronics supplies industrial electronics, embedded systems hardware, IoT deployments and repair bench equipment for teams across Sri Lanka.",
      },
      { property: "og:title", content: "Solutions | Lasertronics" },
      {
        property: "og:description",
        content: "Hardware programmes for industrial, embedded, IoT and service teams.",
      },
    ],
  }),
  component: Solutions,
});

const solutions = [
  {
    icon: Factory,
    title: "Industrial Electronics",
    text: "Panel-ready modules, DIN power conversion and rugged sensing selected for continuous duty on factory floors.",
    points: ["24V industrial sensing", "DIN-rail power supplies", "Cabinet wiring accessories"],
  },
  {
    icon: Cpu,
    title: "Embedded Systems",
    text: "Board bring-up hardware, programmers and prototyping supplies for product teams shipping real firmware.",
    points: ["Dev boards and debuggers", "Prototyping consumables", "Small-batch supply"],
  },
  {
    icon: Radio,
    title: "IoT Solutions",
    text: "Connected sensing, gateways and low-power wireless kits that go from pilot to rollout without redesign.",
    points: ["WiFi and LoRa nodes", "Gateway hardware", "Field enclosures"],
  },
  {
    icon: Wrench,
    title: "Repair & Maintenance",
    text: "Bench equipment, spares and diagnostics packages for service centres and in-house maintenance crews.",
    points: ["Soldering and rework", "Test and measurement", "Consumables restock"],
  },
];

function Solutions() {
  return (
    <PageShell>
      <PageHeading
        eyebrow="Solutions"
        title="Hardware programmes built around how your team works"
        description="From a single prototype to scheduled production supply, we put the right parts on your bench and keep them coming."
      />
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="grid gap-6 lg:grid-cols-2">
          {solutions.map((s, i) => (
            <Reveal key={s.title} delay={i * 80}>
              <article className="glass-card hover-lift flex h-full flex-col rounded-3xl p-8">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/15 text-primary">
                  <s.icon className="h-6 w-6" />
                </span>
                <h2 className="mt-5 font-display text-xl font-bold">{s.title}</h2>
                <p className="mt-2 text-sm text-muted-foreground">{s.text}</p>
                <ul className="mt-5 flex-1 space-y-2 text-sm text-muted-foreground">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                      {p}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110 active:scale-95"
                >
                  Learn More <ArrowRight className="h-4 w-4" />
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </PageShell>
  );
}

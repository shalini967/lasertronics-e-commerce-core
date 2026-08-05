import { createFileRoute } from "@tanstack/react-router";

import { PageHeading, PageShell } from "@/components/PageShell";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Lasertronics — Electronics Supply for Sri Lankan Engineers" },
      {
        name: "description",
        content:
          "Lasertronics supplies tested electronics, embedded hardware and service tools to engineers, makers and technicians across Sri Lanka.",
      },
      { property: "og:title", content: "About Lasertronics" },
      {
        property: "og:description",
        content: "Who we are, how we source, and why engineers reorder from us.",
      },
    ],
  }),
  component: About,
});

const milestones = [
  { year: "2018", text: "Founded in Colombo as a two-bench component supplier for local makers." },
  { year: "2021", text: "Opened the test lab; every incoming batch is now sampled before it ships." },
  { year: "2023", text: "Launched scheduled bulk supply for industrial and service customers." },
  { year: "2026", text: "Over 5,000 stocked lines serving 15,000 customers island-wide." },
];

function About() {
  return (
    <PageShell>
      <PageHeading
        eyebrow="About"
        title="We stock the parts we would put in our own builds"
        description="Lasertronics is an electronics supply house run by engineers. We test what we sell, document what we stock, and answer the phone when a board misbehaves."
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <div className="grid gap-6 lg:grid-cols-3">
          {[
            {
              title: "Our promise",
              text: "Traceable sourcing, honest stock counts and no relabelled surplus. If a part is not right, it does not reach the shelf.",
            },
            {
              title: "Our customers",
              text: "Product teams, university labs, robotics clubs, TV service centres and factory maintenance crews across the island.",
            },
            {
              title: "Our bench",
              text: "A working test lab where boards are powered, meters are calibrated and every new supplier gets sampled first.",
            },
          ].map((c, i) => (
            <Reveal key={c.title} delay={i * 80}>
              <article className="glass-card h-full rounded-3xl p-8">
                <h2 className="font-display text-lg font-bold">{c.title}</h2>
                <p className="mt-3 text-sm text-muted-foreground">{c.text}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-extrabold">Milestones</h2>
          <ol className="mt-8 space-y-4">
            {milestones.map((m, i) => (
              <Reveal key={m.year} delay={i * 70}>
                <li className="glass-card flex gap-5 rounded-3xl p-6">
                  <span className="font-display text-xl font-extrabold text-primary">{m.year}</span>
                  <span className="text-sm text-muted-foreground">{m.text}</span>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>

        <p className="mt-12 text-sm text-muted-foreground">Prototype by ValGrow Labs</p>
      </section>
    </PageShell>
  );
}

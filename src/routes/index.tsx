import { createFileRoute, Link } from "@tanstack/react-router";
import {
  BadgeCheck,
  Boxes,
  Cpu,
  Factory,
  Headphones,
  Radio,
  ShieldCheck,
  ShoppingBag,
  Truck,
  Wrench,
  ArrowRight,
  CreditCard,
} from "lucide-react";
import { useState } from "react";

import { Hero } from "@/components/Hero";
import { PageShell } from "@/components/PageShell";
import { ProductCard } from "@/components/ProductCard";
import { Reveal } from "@/components/Reveal";
import { categories, products } from "@/data/catalog";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Lasertronics — Electronics, IoT Boards & Repair Tools in Sri Lanka" },
      {
        name: "description",
        content:
          "Shop premium electronics, IoT development boards, mobile and TV accessories and repair kits from Lasertronics. Island-wide delivery, prices in LKR.",
      },
      { property: "og:title", content: "Lasertronics — Premium Electronics Store" },
      {
        property: "og:description",
        content:
          "Electronics, embedded hardware and service tools for engineers, makers and technicians. Prices in LKR.",
      },
    ],
  }),
  component: Home,
});

const solutions = [
  {
    icon: Factory,
    title: "Industrial Electronics",
    text: "Panel-ready modules, power conversion and rugged sensing for factory floors.",
  },
  {
    icon: Cpu,
    title: "Embedded Systems",
    text: "Board bring-up, firmware toolchains and prototyping hardware for product teams.",
  },
  {
    icon: Radio,
    title: "IoT Solutions",
    text: "Connected sensing, gateways and low-power wireless kits ready to deploy.",
  },
  {
    icon: Wrench,
    title: "Repair & Maintenance",
    text: "Bench equipment, spares and diagnostics for service centres and workshops.",
  },
];

const features = [
  { icon: BadgeCheck, title: "Original Products", text: "Sourced from vetted manufacturers with traceable batches." },
  { icon: ShieldCheck, title: "Quality Assurance", text: "Every batch bench-tested before it reaches your order." },
  { icon: Truck, title: "Fast Delivery", text: "Island-wide dispatch within 24 hours on stocked items." },
  { icon: CreditCard, title: "Secure Payments", text: "Encrypted checkout with local cards and bank transfer." },
  { icon: Headphones, title: "Technical Support", text: "Talk to engineers, not scripts, before and after you buy." },
  { icon: Boxes, title: "Bulk Orders", text: "Volume pricing and scheduled supply for production runs." },
];

const stats = [
  { value: "5000+", label: "Products" },
  { value: "15000+", label: "Customers" },
  { value: "500+", label: "Business Clients" },
  { value: "99%", label: "Customer Satisfaction" },
];

const testimonials = [
  {
    name: "Nuwan Perera",
    role: "Hardware Lead, Kandy Robotics",
    quote:
      "Their dev boards arrive tested and labelled. We cut two weeks off our last prototype cycle because nothing was dead on arrival.",
    initials: "NP",
  },
  {
    name: "Ishara Fernando",
    role: "Service Manager, ClearView TV",
    quote:
      "The soldering stations and meters have handled a year of daily bench use without a single failure. Support answers within the hour.",
    initials: "IF",
  },
  {
    name: "Dilhani Jayasuriya",
    role: "Procurement, Southline Industries",
    quote:
      "Bulk pricing is transparent and scheduled deliveries actually land on the dates promised. That is rare here.",
    initials: "DJ",
  },
];

function Home() {
  return (
    <PageShell>
      <Hero />

      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6" aria-labelledby="categories-heading">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">Browse</p>
          <h2 id="categories-heading" className="mt-3 text-3xl font-extrabold sm:text-4xl">
            Shop by category
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat, i) => (
            <Reveal key={cat.slug} delay={i * 70} className={i === 0 ? "lg:col-span-2" : ""}>
              <article className="glass-card hover-lift group h-full overflow-hidden rounded-3xl">
                <div className={`overflow-hidden ${i === 0 ? "aspect-[16/9]" : "aspect-[4/3]"}`}>
                  <img
                    src={cat.image}
                    alt={cat.title}
                    width={800}
                    height={600}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-bold">{cat.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{cat.blurb}</p>
                  <Link
                    to={`/${cat.slug}`}
                    className="mt-5 inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-5 py-2.5 text-sm font-semibold text-primary transition-all hover:bg-primary hover:text-primary-foreground"
                  >
                    {cat.cta} <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="featured" className="border-y border-border bg-surface/30 py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">Featured</p>
            <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">Best selling hardware</h2>
            <p className="mt-3 max-w-2xl text-muted-foreground">
              Twelve of the parts our customers reorder most, all priced in Sri Lankan Rupees.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {products.map((product, i) => (
              <Reveal key={product.id} delay={(i % 4) * 70}>
                <ProductCard product={product} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6" aria-labelledby="solutions-heading">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">Solutions</p>
          <h2 id="solutions-heading" className="mt-3 text-3xl font-extrabold sm:text-4xl">
            Built around how you work
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {solutions.map((s, i) => (
            <Reveal key={s.title} delay={i * 70}>
              <article className="glass-card hover-lift flex h-full flex-col rounded-3xl p-7">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/15 text-primary">
                  <s.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-display text-lg font-bold">{s.title}</h3>
                <p className="mt-2 flex-1 text-sm text-muted-foreground">{s.text}</p>
                <Link
                  to="/solutions"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-transform hover:translate-x-1"
                >
                  Learn More <ArrowRight className="h-4 w-4" />
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-surface/30 py-24" aria-labelledby="why-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <Reveal>
            <h2 id="why-heading" className="text-3xl font-extrabold sm:text-4xl">
              Why choose Lasertronics
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f, i) => (
              <Reveal key={f.title} delay={i * 60}>
                <article className="glass-card hover-lift flex h-full gap-4 rounded-3xl p-6">
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-primary/15 text-primary">
                    <f.icon className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-display text-base font-bold">{f.title}</h3>
                    <p className="mt-1.5 text-sm text-muted-foreground">{f.text}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <div className="mt-16 grid gap-6 rounded-3xl border border-border p-8 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 80} className="text-center">
                <p className="font-display text-4xl font-extrabold text-primary">{s.value}</p>
                <p className="mt-1 text-sm text-muted-foreground">{s.label}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6" aria-labelledby="reviews-heading">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">Reviews</p>
          <h2 id="reviews-heading" className="mt-3 text-3xl font-extrabold sm:text-4xl">
            Trusted on the bench
          </h2>
        </Reveal>
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 90}>
              <figure className="glass-card hover-lift flex h-full flex-col rounded-3xl p-7">
                <blockquote className="flex-1 text-sm leading-relaxed text-muted-foreground">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/15 font-display text-sm font-bold text-primary">
                    {t.initials}
                  </span>
                  <span>
                    <span className="block text-sm font-semibold">{t.name}</span>
                    <span className="block text-xs text-muted-foreground">{t.role}</span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      <Newsletter />
    </PageShell>
  );
}

function Newsletter() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  return (
    <section className="mx-auto max-w-7xl px-4 pb-8 sm:px-6" aria-labelledby="newsletter-heading">
      <div className="glass-card rounded-[2rem] px-6 py-14 text-center sm:px-12">
        <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/15 text-primary">
          <ShoppingBag className="h-6 w-6" />
        </span>
        <h2 id="newsletter-heading" className="mt-5 text-3xl font-extrabold sm:text-4xl">
          Stay Updated with Lasertronics
        </h2>
        <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
          New stock arrivals, engineering notes and bulk pricing offers — once a month, no noise.
        </p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
          }}
          className="mx-auto mt-8 flex w-full max-w-md flex-col gap-3 sm:flex-row"
        >
          <label htmlFor="newsletter-email" className="sr-only">
            Email address
          </label>
          <input
            id="newsletter-email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@company.lk"
            className="w-full rounded-full border border-input bg-background/60 px-5 py-3.5 text-sm outline-none transition-colors placeholder:text-muted-foreground focus:border-primary"
          />
          <button
            type="submit"
            className="rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110 active:scale-95"
          >
            {sent ? "Subscribed" : "Subscribe"}
          </button>
        </form>
      </div>
    </section>
  );
}

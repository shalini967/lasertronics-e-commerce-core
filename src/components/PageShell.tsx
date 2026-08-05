import type { ReactNode } from "react";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

export function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

export function PageHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="border-b border-border bg-surface/40">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:py-20">
        <p className="text-xs font-semibold uppercase tracking-widest text-primary">{eyebrow}</p>
        <h1 className="mt-3 max-w-3xl text-4xl font-extrabold sm:text-5xl">{title}</h1>
        <p className="mt-4 max-w-2xl text-lg text-muted-foreground">{description}</p>
      </div>
    </section>
  );
}

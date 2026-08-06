import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import hero3 from "@/assets/hero-3.jpg";
import logo from "@/assets/logo.png";

const slides = [
  {
    image: hero1,
    eyebrow: "Lasertronics Store",
    headline: "Powering Innovation with Lasertronics",
    sub: "Premium electronics, IoT devices, development boards, repair tools, and accessories.",
  },
  {
    image: hero2,
    eyebrow: "Embedded Hardware",
    headline: "Build Smarter with Embedded Technology",
    sub: "Wireless dev boards, sensor modules and prototyping gear tested on our own bench.",
  },
  {
    image: hero3,
    eyebrow: "Service Bench",
    headline: "Everything for Engineers, Makers & Technicians",
    sub: "Soldering stations, precision tools and meters trusted by service professionals.",
  },
];

export function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setIndex((i) => (i + 1) % slides.length), 6000);
    return () => clearInterval(timer);
  }, []);

  const active = slides[index] ?? slides[0]!;


  return (
    <section className="mx-auto max-w-7xl px-4 pb-10 pt-6 sm:px-6" aria-label="Featured">
      <div className="mb-6 flex items-center gap-3">
        <img src={logo} alt="" aria-hidden="true" width={48} height={48} className="h-12 w-12" />
        <div>
          <p className="font-display text-lg font-bold leading-none">Lasertronics</p>
          <p className="mt-1 text-xs tracking-wide text-muted-foreground">Prototype by ValGrow Labs</p>
        </div>
      </div>

      <div className="relative isolate overflow-hidden rounded-[2rem] bg-hero-dark text-hero-dark-foreground shadow-premium">
        {slides.map((slide, i) => (
          <img
            key={slide.headline}
            src={slide.image}
            alt=""
            aria-hidden="true"
            width={1920}
            height={1080}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-hero-dark via-hero-dark/90 to-hero-dark/40" />

        <div className="relative px-6 py-14 sm:px-12 sm:py-20 lg:py-28">
          <div key={index} className="max-w-2xl animate-fade-up">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.3em] text-primary sm:text-sm">
              {active.eyebrow}
            </p>
            <h1 className="mt-6 text-4xl font-extrabold leading-[1.05] sm:text-5xl lg:text-6xl">
              {active.headline}
            </h1>
            <p className="mt-5 max-w-lg text-base text-hero-dark-muted sm:text-lg">{active.sub}</p>

            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#featured"
                className="inline-flex items-center gap-3 rounded-md bg-primary px-8 py-4 text-base font-bold text-primary-foreground transition-all hover:brightness-110 active:scale-95"
              >
                Shop Now <ArrowRight className="h-5 w-5" />
              </a>
              <Link
                to="/electronics"
                className="inline-flex items-center gap-2 rounded-md border border-hero-dark-foreground/25 px-8 py-4 text-base font-semibold transition-colors hover:border-primary hover:text-primary"
              >
                Explore Products
              </Link>
            </div>

            <div className="mt-12 flex gap-2">
              {slides.map((slide, i) => (
                <button
                  key={slide.headline}
                  type="button"
                  onClick={() => setIndex(i)}
                  aria-label={`Show slide ${i + 1}`}
                  className={`h-2 rounded-full transition-all ${
                    i === index ? "w-12 bg-primary" : "w-6 bg-hero-dark-foreground/25 hover:bg-hero-dark-foreground/40"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

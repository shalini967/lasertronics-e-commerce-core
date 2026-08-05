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

  return (
    <section className="relative isolate min-h-[calc(100svh-5rem)] overflow-hidden" aria-label="Featured">
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
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/25" />

      <div className="relative mx-auto flex min-h-[calc(100svh-5rem)] max-w-7xl items-center px-4 py-20 sm:px-6">
        <div key={index} className="max-w-2xl animate-fade-up">
          <div className="flex items-center gap-3">
            <img src={logo} alt="" aria-hidden="true" width={56} height={56} className="h-14 w-14" />
            <div>
              <p className="font-display text-xl font-bold leading-none">Lasertronics</p>
              <p className="mt-1 text-xs tracking-wide text-muted-foreground">
                Prototype by ValGrow Labs
              </p>
            </div>
          </div>

          <p className="mt-8 inline-flex rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
            {slides[index].eyebrow}
          </p>
          <h1 className="mt-5 text-4xl font-extrabold leading-[1.08] sm:text-5xl lg:text-6xl">
            {slides[index].headline}
          </h1>
          <p className="mt-5 max-w-xl text-lg text-muted-foreground">{slides[index].sub}</p>

          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href="#featured"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110 hover:shadow-glow active:scale-95"
            >
              Shop Now <ArrowRight className="h-4 w-4" />
            </a>
            <Link
              to="/electronics"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background/40 px-7 py-3.5 text-sm font-semibold backdrop-blur-md transition-all hover:border-primary/50 hover:text-primary active:scale-95"
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
                className={`h-1.5 rounded-full transition-all ${
                  i === index ? "w-10 bg-primary" : "w-5 bg-foreground/25 hover:bg-foreground/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

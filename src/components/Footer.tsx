import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Youtube } from "lucide-react";

import logo from "@/assets/logo.png";

const columns = [
  {
    title: "Products",
    links: [
      { label: "Mobile Accessories", to: "/mobile-accessories" },
      { label: "Electronics", to: "/electronics" },
      { label: "TV Accessories", to: "/tv-accessories" },
      { label: "IoT & Microcontrollers", to: "/iot-microcontrollers" },
      { label: "Repair Kits", to: "/repair-kits" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Contact Support", to: "/contact" },
      { label: "Shipping & Delivery", to: "/contact" },
      { label: "Returns & Warranty", to: "/contact" },
      { label: "Order Tracking", to: "/contact" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Lasertronics", to: "/about" },
      { label: "Solutions", to: "/solutions" },
      { label: "Careers", to: "/about" },
      { label: "Partner With Us", to: "/contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Datasheets", to: "/solutions" },
      { label: "Build Guides", to: "/solutions" },
      { label: "Bulk Pricing", to: "/contact" },
      { label: "Engineering Blog", to: "/about" },
    ],
  },
] as const;

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-surface/40">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-6">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Lasertronics logo" width={40} height={40} loading="lazy" className="h-10 w-10" />
            <span className="font-display text-lg font-bold">Lasertronics</span>
          </div>
          <p className="mt-4 max-w-xs text-sm text-muted-foreground">
            Premium electronics, embedded hardware and service tools for engineers,
            makers and technicians across Sri Lanka.
          </p>
          <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              No. 214, Union Place, Colombo 02, Sri Lanka
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0 text-primary" />
              +94 11 234 5678
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 shrink-0 text-primary" />
              hello@lasertronics.lk
            </li>
          </ul>
          <div className="mt-6 flex gap-2">
            {[Facebook, Instagram, Linkedin, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="/contact"
                aria-label="Lasertronics social profile"
                className="rounded-full border border-border p-2.5 text-muted-foreground transition-all hover:border-primary/50 hover:text-primary"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        {columns.map((col) => (
          <div key={col.title}>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
              {col.title}
            </h3>
            <ul className="mt-4 space-y-2.5">
              {col.links.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-6 text-sm text-muted-foreground sm:flex-row sm:px-6">
          <p>© 2026 Lasertronics. All Rights Reserved.</p>
          <p>Prototype by ValGrow Labs</p>
        </div>
      </div>
    </footer>
  );
}

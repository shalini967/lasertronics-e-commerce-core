import { Link } from "@tanstack/react-router";
import { Heart, Menu, Search, ShoppingCart, User, X } from "lucide-react";
import { useEffect, useState } from "react";

import logo from "@/assets/logo.png";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/mobile-accessories", label: "Mobile Accessories" },
  { to: "/electronics", label: "Electronics" },
  { to: "/tv-accessories", label: "TV Accessories" },
  { to: "/iot-microcontrollers", label: "IoT & Microcontrollers" },
  { to: "/repair-kits", label: "Repair Kits" },
  { to: "/solutions", label: "Solutions" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-border bg-background/85 backdrop-blur-xl shadow-[0_10px_30px_-20px_oklch(0_0_0/0.9)]"
          : "bg-background/40 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center gap-4 px-4 sm:px-6">
        <Link to="/" className="flex shrink-0 items-center gap-3" aria-label="Lasertronics home">
          <img src={logo} alt="Lasertronics logo" width={44} height={44} className="h-11 w-11" />
          <span className="font-display text-lg font-bold tracking-tight">Lasertronics</span>
        </Link>

        <nav className="mx-auto hidden items-center gap-1 xl:flex" aria-label="Main">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              activeOptions={{ exact: link.to === "/" }}
              activeProps={{ className: "text-primary" }}
              className="rounded-full px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary/60 hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-1 xl:ml-0">
          <IconButton label="Search">
            <Search className="h-5 w-5" />
          </IconButton>
          <IconButton label="Wishlist">
            <Heart className="h-5 w-5" />
          </IconButton>
          <IconButton label="Cart" badge="0">
            <ShoppingCart className="h-5 w-5" />
          </IconButton>
          <IconButton label="Account">
            <User className="h-5 w-5" />
          </IconButton>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="ml-1 rounded-full p-2.5 text-muted-foreground transition-colors hover:bg-secondary/60 hover:text-foreground xl:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <nav
          className="border-t border-border bg-background/95 px-4 pb-5 pt-3 backdrop-blur-xl xl:hidden"
          aria-label="Mobile"
        >
          <ul className="grid gap-1">
            {navLinks.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  onClick={() => setOpen(false)}
                  activeOptions={{ exact: link.to === "/" }}
                  activeProps={{ className: "text-primary" }}
                  className="block rounded-xl px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary/60 hover:text-foreground"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
  );
}

function IconButton({
  label,
  badge,
  children,
}: {
  label: string;
  badge?: string;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      className="relative rounded-full p-2.5 text-muted-foreground transition-all hover:bg-secondary/60 hover:text-foreground active:scale-95"
    >
      {children}
      {badge ? (
        <span className="absolute -right-0.5 -top-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-primary px-1 text-[10px] font-bold text-primary-foreground">
          {badge}
        </span>
      ) : null}
    </button>
  );
}

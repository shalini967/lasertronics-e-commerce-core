import { Eye, Heart, ShoppingCart, Star } from "lucide-react";
import { useState } from "react";

import { formatLKR, type Product } from "@/data/catalog";

export function ProductCard({ product }: { product: Product }) {
  const [wished, setWished] = useState(false);
  const [added, setAdded] = useState(false);
  const [loaded, setLoaded] = useState(false);

  return (
    <article className="glass-card hover-lift group flex flex-col overflow-hidden rounded-3xl">
      <div className="relative aspect-square overflow-hidden bg-surface">
        {!loaded ? <div className="skeleton absolute inset-0" aria-hidden="true" /> : null}
        <img
          src={product.image}
          alt={product.name}
          width={640}
          height={640}
          loading="lazy"
          onLoad={() => setLoaded(true)}
          className={`h-full w-full object-cover transition-all duration-700 group-hover:scale-105 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
        />
        <button
          type="button"
          onClick={() => setWished((v) => !v)}
          aria-label={wished ? `Remove ${product.name} from wishlist` : `Add ${product.name} to wishlist`}
          aria-pressed={wished}
          className="absolute right-3 top-3 rounded-full border border-border bg-background/70 p-2.5 backdrop-blur-md transition-all hover:scale-110 hover:border-primary/50"
        >
          <Heart
            className={`h-4 w-4 transition-colors ${
              wished ? "fill-primary text-primary" : "text-foreground"
            }`}
          />
        </button>
        <button
          type="button"
          className="absolute inset-x-3 bottom-3 flex translate-y-4 items-center justify-center gap-2 rounded-full border border-border bg-background/75 py-2.5 text-sm font-medium opacity-0 backdrop-blur-md transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
        >
          <Eye className="h-4 w-4" /> Quick View
        </button>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="font-display text-base font-semibold">{product.name}</h3>
        <p className="mt-1.5 line-clamp-2 text-sm text-muted-foreground">{product.description}</p>

        <div className="mt-3 flex items-center gap-2">
          <span className="flex" aria-label={`Rated ${product.rating} out of 5`}>
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < product.rating ? "fill-star text-star" : "text-muted-foreground/40"
                }`}
              />
            ))}
          </span>
          <span className="text-xs text-muted-foreground">({product.reviews})</span>
        </div>

        <div className="mt-4 flex items-center justify-between gap-3 pt-1">
          <p className="font-display text-lg font-bold text-primary">{formatLKR(product.price)}</p>
        </div>

        <button
          type="button"
          onClick={() => setAdded(true)}
          className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:brightness-110 active:scale-95"
        >
          <ShoppingCart className="h-4 w-4" />
          {added ? "Added to Cart" : "Add to Cart"}
        </button>
      </div>
    </article>
  );
}

import { createFileRoute } from "@tanstack/react-router";

import { CategoryPage } from "@/components/CategoryPage";

export const Route = createFileRoute("/mobile-accessories")({
  head: () => ({
    meta: [
      { title: "Mobile Accessories — Chargers, Cables & Earbuds | Lasertronics" },
      {
        name: "description",
        content:
          "Fast chargers, braided USB-C cables, wireless earbuds and power banks from Lasertronics, priced in LKR with island-wide delivery.",
      },
      { property: "og:title", content: "Mobile Accessories | Lasertronics" },
      {
        property: "og:description",
        content: "Chargers, cables, earbuds and power banks built for daily use. Prices in LKR.",
      },
    ],
  }),
  component: () => <CategoryPage slug="mobile-accessories" />,
});

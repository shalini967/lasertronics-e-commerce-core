import { createFileRoute } from "@tanstack/react-router";

import { CategoryPage } from "@/components/CategoryPage";

export const Route = createFileRoute("/electronics")({
  head: () => ({
    meta: [
      { title: "Electronics — Modules, Sensors & Power Supplies | Lasertronics" },
      {
        name: "description",
        content:
          "Electronic modules, sensors and bench power supplies for reliable builds, stocked by Lasertronics with prices in LKR.",
      },
      { property: "og:title", content: "Electronics | Lasertronics" },
      {
        property: "og:description",
        content: "Modules, sensors and power supplies for dependable electronics builds.",
      },
    ],
  }),
  component: () => <CategoryPage slug="electronics" />,
});

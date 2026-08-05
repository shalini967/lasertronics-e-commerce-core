import { createFileRoute } from "@tanstack/react-router";

import { CategoryPage } from "@/components/CategoryPage";

export const Route = createFileRoute("/repair-kits")({
  head: () => ({
    meta: [
      { title: "Repair Kits — Soldering Stations, Meters & Tools | Lasertronics" },
      {
        name: "description",
        content:
          "Soldering stations, digital multimeters and precision toolkits for the service bench, priced in LKR by Lasertronics.",
      },
      { property: "og:title", content: "Repair Kits | Lasertronics" },
      {
        property: "og:description",
        content: "Bench tools, meters and soldering gear trusted by service technicians.",
      },
    ],
  }),
  component: () => <CategoryPage slug="repair-kits" />,
});

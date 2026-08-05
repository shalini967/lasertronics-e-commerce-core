import { createFileRoute } from "@tanstack/react-router";

import { CategoryPage } from "@/components/CategoryPage";

export const Route = createFileRoute("/tv-accessories")({
  head: () => ({
    meta: [
      { title: "TV Accessories — HDMI Cables, Mounts & Remotes | Lasertronics" },
      {
        name: "description",
        content:
          "HDMI 2.1 cables, full-motion wall mounts and replacement remotes from Lasertronics, priced in LKR.",
      },
      { property: "og:title", content: "TV Accessories | Lasertronics" },
      {
        property: "og:description",
        content: "High-bandwidth HDMI cabling, sturdy mounts and remotes for every panel.",
      },
    ],
  }),
  component: () => <CategoryPage slug="tv-accessories" />,
});

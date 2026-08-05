import { createFileRoute } from "@tanstack/react-router";

import { CategoryPage } from "@/components/CategoryPage";

export const Route = createFileRoute("/iot-microcontrollers")({
  head: () => ({
    meta: [
      { title: "IoT & Microcontrollers — Dev Boards & Robotics | Lasertronics" },
      {
        name: "description",
        content:
          "WiFi development boards, starter kits and robotics parts for embedded projects. Lasertronics stock, prices in LKR.",
      },
      { property: "og:title", content: "IoT & Microcontrollers | Lasertronics" },
      {
        property: "og:description",
        content: "Wireless dev boards, single board computers and robotics parts for makers.",
      },
    ],
  }),
  component: () => <CategoryPage slug="iot-microcontrollers" />,
});

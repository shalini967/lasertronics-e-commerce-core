import catMobile from "@/assets/cat-mobile.jpg";
import catElectronics from "@/assets/cat-electronics.jpg";
import catTv from "@/assets/cat-tv.jpg";
import catIot from "@/assets/cat-iot.jpg";
import catRepair from "@/assets/cat-repair.jpg";
import p1 from "@/assets/p1.jpg";
import p2 from "@/assets/p2.jpg";
import p3 from "@/assets/p3.jpg";
import p4 from "@/assets/p4.jpg";
import p5 from "@/assets/p5.jpg";
import p6 from "@/assets/p6.jpg";
import p7 from "@/assets/p7.jpg";
import p8 from "@/assets/p8.jpg";
import p9 from "@/assets/p9.jpg";
import p10 from "@/assets/p10.jpg";
import p11 from "@/assets/p11.jpg";
import p12 from "@/assets/p12.jpg";
import p13 from "@/assets/p13.jpg";
import p14 from "@/assets/p14.jpg";
import p15 from "@/assets/p15.jpg";
import p16 from "@/assets/p16.jpg";
import p17 from "@/assets/p17.jpg";
import p18 from "@/assets/p18.jpg";
import p19 from "@/assets/p19.jpg";
import p20 from "@/assets/p20.jpg";
import p21 from "@/assets/p21.jpg";
import p22 from "@/assets/p22.jpg";
import p23 from "@/assets/p23.jpg";
import p24 from "@/assets/p24.jpg";
import p25 from "@/assets/p25.jpg";

export type CategorySlug =
  | "mobile-accessories"
  | "electronics"
  | "tv-accessories"
  | "iot-microcontrollers"
  | "repair-kits";

export type Category = {
  slug: CategorySlug;
  title: string;
  blurb: string;
  cta: string;
  image: string;
};

export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  rating: number;
  reviews: number;
  image: string;
  category: CategorySlug;
};

export const categories: Category[] = [
  {
    slug: "mobile-accessories",
    title: "Mobile Accessories",
    blurb: "Chargers, braided cables, earbuds and power banks built for daily abuse.",
    cta: "Shop Mobile Accessories",
    image: catMobile,
  },
  {
    slug: "electronics",
    title: "Electronics",
    blurb: "Modules, sensors and bench power supplies for reliable builds.",
    cta: "Shop Electronics",
    image: catElectronics,
  },
  {
    slug: "tv-accessories",
    title: "TV Accessories",
    blurb: "Remotes, high-bandwidth HDMI cabling and sturdy wall mounts.",
    cta: "Shop TV Accessories",
    image: catTv,
  },
  {
    slug: "iot-microcontrollers",
    title: "IoT & Microcontrollers",
    blurb: "Wireless dev boards, single board computers and robotics parts.",
    cta: "Shop IoT",
    image: catIot,
  },
  {
    slug: "repair-kits",
    title: "Repair Kits",
    blurb: "Toolkits, soldering stations and meters for the service bench.",
    cta: "Shop Repair Kits",
    image: catRepair,
  },
];

export const products: Product[] = [
  {
    id: "lt-esp32",
    name: "ESP32 Development Board",
    description: "Dual-core WiFi + BLE board with USB-C and 38 GPIO pins.",
    price: 3950,
    rating: 5,
    reviews: 218,
    image: p1,
    category: "iot-microcontrollers",
  },
  {
    id: "lt-starter",
    name: "Arduino Compatible Starter Kit",
    description: "Breadboard, sensors, jumper leads and a project workbook.",
    price: 8450,
    rating: 5,
    reviews: 164,
    image: p2,
    category: "iot-microcontrollers",
  },
  {
    id: "lt-charger",
    name: "USB-C Fast Charger 65W",
    description: "GaN charger with adaptive delivery for phones and laptops.",
    price: 5990,
    rating: 4,
    reviews: 302,
    image: p3,
    category: "mobile-accessories",
  },
  {
    id: "lt-earbuds",
    name: "Wireless Earbuds Pro",
    description: "Hybrid noise cancellation with 32 hours of case playback.",
    price: 12900,
    rating: 5,
    reviews: 411,
    image: p4,
    category: "mobile-accessories",
  },
  {
    id: "lt-powerbank",
    name: "Power Bank 20000mAh",
    description: "Dual-port 22.5W output with a live capacity display.",
    price: 10950,
    rating: 4,
    reviews: 187,
    image: p5,
    category: "mobile-accessories",
  },
  {
    id: "lt-hdmi",
    name: "HDMI 2.1 Cable 2m",
    description: "48Gbps braided cable rated for 8K60 and 4K120 output.",
    price: 2450,
    rating: 5,
    reviews: 96,
    image: p6,
    category: "tv-accessories",
  },
  {
    id: "lt-multimeter",
    name: "Digital Multimeter",
    description: "True RMS meter with continuity buzzer and capacitance range.",
    price: 9450,
    rating: 5,
    reviews: 143,
    image: p7,
    category: "repair-kits",
  },
  {
    id: "lt-screwdriver",
    name: "Precision Screwdriver Kit",
    description: "62 hardened bits in a magnetic case for micro repairs.",
    price: 4990,
    rating: 4,
    reviews: 258,
    image: p8,
    category: "repair-kits",
  },
  {
    id: "lt-soldering",
    name: "Professional Soldering Station",
    description: "Fast-heat ceramic element with digital temperature lock.",
    price: 18500,
    rating: 5,
    reviews: 88,
    image: p9,
    category: "repair-kits",
  },
  {
    id: "lt-sensor",
    name: "WiFi Smart Sensor Module",
    description: "Temperature, humidity and motion sensing over local MQTT.",
    price: 6990,
    rating: 4,
    reviews: 121,
    image: p10,
    category: "electronics",
  },
  {
    id: "lt-usbc",
    name: "USB-C Braided Cable 1m",
    description: "100W rated cable with 10Gbps data and reinforced strain relief.",
    price: 1250,
    rating: 5,
    reviews: 530,
    image: p11,
    category: "mobile-accessories",
  },
  {
    id: "lt-mount",
    name: "TV Wall Mount Full Motion",
    description: "Steel articulating arm supporting up to 55 inch panels.",
    price: 7990,
    rating: 4,
    reviews: 74,
    image: p12,
    category: "tv-accessories",
  },
  {
    id: "lt-magstand",
    name: "Magnetic Wireless Charging Stand",
    description: "15W magnetic stand with adjustable viewing angle and cooling vents.",
    price: 6450,
    rating: 4,
    reviews: 142,
    image: p13,
    category: "mobile-accessories",
  },
  {
    id: "lt-benchpsu",
    name: "Bench DC Power Supply 30V 5A",
    description: "Programmable output with fine current limiting and digital readout.",
    price: 24500,
    rating: 5,
    reviews: 63,
    image: p14,
    category: "electronics",
  },
  {
    id: "lt-scope",
    name: "Digital Storage Oscilloscope 100MHz",
    description: "Two-channel scope with deep memory and automatic measurements.",
    price: 87500,
    rating: 5,
    reviews: 41,
    image: p15,
    category: "electronics",
  },
  {
    id: "lt-components",
    name: "Electronic Components Assortment Box",
    description: "Sorted resistors, capacitors, diodes and LEDs in a labelled case.",
    price: 4350,
    rating: 4,
    reviews: 209,
    image: p16,
    category: "electronics",
  },
  {
    id: "lt-fume",
    name: "Solder Fume Extractor",
    description: "Quiet bench extractor with replaceable carbon filter cartridge.",
    price: 11250,
    rating: 4,
    reviews: 57,
    image: p17,
    category: "electronics",
  },
  {
    id: "lt-remote",
    name: "Universal Smart TV Remote",
    description: "Pre-programmed for major brands with learning IR function.",
    price: 2150,
    rating: 4,
    reviews: 318,
    image: p18,
    category: "tv-accessories",
  },
  {
    id: "lt-tvbox",
    name: "4K Android TV Streaming Box",
    description: "HDR10 streaming box with voice remote and dual-band WiFi.",
    price: 15900,
    rating: 5,
    reviews: 127,
    image: p19,
    category: "tv-accessories",
  },
  {
    id: "lt-soundbar",
    name: "Slim TV Soundbar 2.1",
    description: "Bluetooth soundbar with wireless subwoofer and HDMI ARC.",
    price: 22900,
    rating: 4,
    reviews: 84,
    image: p20,
    category: "tv-accessories",
  },
  {
    id: "lt-sbc",
    name: "Single Board Computer 4GB",
    description: "Quad-core SBC with gigabit ethernet and 40-pin GPIO header.",
    price: 26500,
    rating: 5,
    reviews: 152,
    image: p21,
    category: "iot-microcontrollers",
  },
  {
    id: "lt-lora",
    name: "LoRa Long Range Module",
    description: "868MHz transceiver module with antenna for low-power telemetry.",
    price: 4750,
    rating: 4,
    reviews: 68,
    image: p22,
    category: "iot-microcontrollers",
  },
  {
    id: "lt-servo",
    name: "Metal Gear Servo Motor Kit",
    description: "High-torque servos with horns, screws and mounting brackets.",
    price: 5650,
    rating: 4,
    reviews: 96,
    image: p23,
    category: "iot-microcontrollers",
  },
  {
    id: "lt-esdmat",
    name: "ESD Safe Repair Mat Kit",
    description: "Anti-static mat with magnetic screw zones, tweezers and spudgers.",
    price: 6250,
    rating: 5,
    reviews: 133,
    image: p24,
    category: "repair-kits",
  },
  {
    id: "lt-heatgun",
    name: "Hot Air Rework Station",
    description: "Digital hot air station with multiple nozzles for SMD rework.",
    price: 21500,
    rating: 5,
    reviews: 71,
    image: p25,
    category: "repair-kits",
  },
];

export const formatLKR = (value: number) =>
  `LKR ${value.toLocaleString("en-LK")}`;

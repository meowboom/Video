import { EPriceCard } from "../../data/types";

export const PRICE_CARDS = [
  {
    id: "1",
    tariff: EPriceCard.base,
    description: "The essentials to provide your best work for clients.",
    price: 20,
    advantage: ["5 products", "Up to 1,000 subscribers", "Basic analytics"],
  },
  {
    id: "2",
    tariff: EPriceCard.pro,
    description: "A plan that scales with your rapidly growing business.",
    price: 50,
    advantage: [
      "25 products",
      "Up to 10,000 subscribers",
      "Advanced analytics",
      "24-hour support response time",
      "Marketing automation",
    ],
  },
  {
    id: "3",
    tariff: EPriceCard.individual,
    description: "Dedicated support and infrastructure for your company.",
    price: 150,
    advantage: [
      "Unlimited products",
      "Unlimited subscribers",
      "Advanced analytics",
      "Marketing automations",
      "Custom reporting tools",
    ],
  },
];

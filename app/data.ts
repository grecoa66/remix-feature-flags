import { Item, ItemHistory } from "./types";

export const fetchItems = () => {
  return items;
};

export const items: Item[] = [
  {
    id: "abc123",
    name: "Macbook Pro",
    description: '2024 Apple 16" M4 Macbook Pro',
    quantity: 2,
    sku: "mbp-2024-m4-qf8f998475",
  },
  {
    id: "xyz987",
    name: "iPhone 16",
    description: "2024 Apple 512 GB iPhone 16",
    quantity: 12,
    sku: "ip-16-526-p3pe7h2kcc",
  },
  {
    id: "def456",
    name: "MX Master 2S",
    description: "2021 Logitech MX Master 2S Wireless Mouse",
    quantity: 4,
    sku: "log-mx-2s-9keifj28jn",
  },
];

export const fetchItemsHistory = () => {
  return itemsHistory;
};

export const itemsHistory: ItemHistory[] = [
  {
    id: "9t88f7q6",
    itemId: "abc123",
    description: "Received 3 new macbooks. Added to inventory shelf.",
    date: new Date("06/01/2024"),
  },
  {
    id: "123f9g76",
    itemId: "abc123",
    description: "Assigned macbook to new associate.",
    date: new Date("07/10/2024"),
  },
  {
    id: "v8928x88",
    itemId: "def456",
    description: "Received shipment of 5 new MX Master mice.",
    date: new Date("04/11/2022"),
  },
  {
    id: "3ldy738d",
    itemId: "def456",
    description: "Assigned MX Master 2S to new associate",
    date: new Date("01/18/2023"),
  },
];

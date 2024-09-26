export type Item = {
  id: string;
  name: string;
  description: string;
  quantity: number;
  sku: string;
};

export type ItemHistory = {
  id: string;
  itemId: Item["id"];
  description: string;
  date: Date;
};

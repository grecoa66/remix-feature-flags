import { Item } from "~/types";

type ItemListProps = {
  items: Item[];
  showItemSku: boolean;
};

export const ItemList = ({ items, showItemSku }: ItemListProps) => {
  return items.map((item) => (
    <div key={item.id} className="item-panel">
      <h3>{item.name}</h3>
      <p>{item.description}</p>
      <p>Quantity: {item.quantity}</p>
      {showItemSku ? <p>SKU: {item.sku}</p> : null}
    </div>
  ));
};

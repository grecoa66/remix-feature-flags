import { json, type MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { fetchItems } from "~/data";
import "~/styles.css";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export const loader = () => {
  // This would be an async call to a db...
  const items = fetchItems();

  return json(items);
};

export default function Index() {
  const items = useLoaderData<typeof loader>();
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      {items.map((item) => (
        <div className="item-panel">
          <h3>{item.name}</h3>
          <p>{item.description}</p>
          <p>
            Quantity: <span>{item.quantity}</span>
          </p>
          <p>
            SKU: <span>{item.sku}</span>
          </p>
        </div>
      ))}
    </div>
  );
}

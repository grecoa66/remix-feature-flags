import { json, type MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { ItemList } from "~/components/ItemList";
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

  const showItemSku = process.env.SHOW_ITEM_SKU === "enabled";

  return json({ items, showItemSku });
};

export default function Index() {
  const { items, showItemSku } = useLoaderData<typeof loader>();
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <ItemList {...{ items, showItemSku }} />
    </div>
  );
}

import { useLoaderData } from '@remix-run/react'
import { InventoryItem } from '~/components/InventoryItem'
import { inventoryList } from '~/data/inventory'

export const loader = () => {
    // in lieu of a fetching from an external source...
    const inventoryItems = inventoryList

    const showItemSku = process.env.SHOW_ITEM_SKU

    return { inventoryItems, showItemSku }
}

export const InventoryPage = () => {
    const { inventoryItems, showItemSku } = useLoaderData<typeof loader>()

    return (
        <div className="relative flex min-h-screen flex-col items-center bg-slate-100">
            <div className="sticky top-0 ml-auto flex w-full flex-col items-center bg-slate-200">
                <h1 className="my-8 text-3xl">Inventory</h1>
            </div>
            <div className="flex flex-col items-center gap-2 py-8">
                {inventoryItems.map((item) => (
                    <InventoryItem key={item.id} item={item} />
                ))}
            </div>
        </div>
    )
}

export default InventoryPage

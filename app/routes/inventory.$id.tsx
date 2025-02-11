import { LoaderFunctionArgs } from '@remix-run/node'
import { useLoaderData } from '@remix-run/react'
import invariant from 'tiny-invariant'
import { InventoryItem } from '~/components/InventoryItem'
import { inventoryList } from '~/data/inventory'

export const loader = ({ params }: LoaderFunctionArgs) => {
    invariant(params.id, 'Iventory item id missing')
    // in lieu of a fetching from an external source...
    const inventoryItem = inventoryList.find((item) => item.id === params.id)

    invariant(inventoryItem, 'Inventory item not found')

    const showItemSku = process.env.SHOW_ITEM_SKU

    return { inventoryItem, showItemSku }
}

const InventoryItemPage = () => {
    const { inventoryItem } = useLoaderData<typeof loader>()

    return (
        <div className="relative flex min-h-screen flex-col items-center gap-4 bg-slate-100">
            <div className="sticky top-0 ml-auto flex w-full flex-col items-center bg-slate-200">
                <h1 className="my-8 text-3xl">{inventoryItem.name}</h1>
            </div>
            <InventoryItem item={inventoryItem} />
        </div>
    )
}

export default InventoryItemPage

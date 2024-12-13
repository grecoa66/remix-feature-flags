import { useFeatureFlagContext } from '~/context/FeatureFlagContext'
import type { InventoryItem as InventoryItemType } from '~/types/inventory'

export const InventoryItem = ({ item }: { item: InventoryItemType }) => {
    const { showItemSku } = useFeatureFlagContext()

    return (
        <div
            key={item.id}
            className="border-black-200 flex w-96 flex-col gap-2 rounded-md border-2 bg-white p-4 shadow-md"
        >
            <p>Name: {item.name}</p>
            <p>Description: {item.description}</p>
            <p>Quantity: {item.quantity}</p>
            {showItemSku ? <p>SKU: {item.sku}</p> : null}
            <div>
                <p>Location</p>
                <div className="ml-4">
                    <p>Building: {item.location.building}</p>
                    <p>Shelf: {item.location.shelf}</p>
                </div>
            </div>
        </div>
    )
}

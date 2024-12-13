import { useLoaderData } from '@remix-run/react'
import { inventoryList } from '~/data/inventory'

export const loader = ({}) => {
    // in lieu of a fetch
    const inventoryItems = inventoryList

    return { inventoryItems }
}

export const InventoryPage = () => {
    const { inventoryItems } = useLoaderData<typeof loader>()

    return (
        <div className="relative flex min-h-screen flex-col items-center bg-slate-100">
            <div className="sticky top-0 ml-auto flex w-full flex-col items-center bg-slate-200">
                <h1 className="my-8 text-3xl">Inventory</h1>
            </div>
            <div className="flex flex-col items-center gap-2 py-8">
                {inventoryItems.map((item) => (
                    <div
                        key={item.id}
                        className="border-black-200 flex w-96 flex-col gap-2 rounded-md border-2 bg-white p-4 shadow-md"
                    >
                        <p>Name: {item.name}</p>
                        <p>Description: {item.description}</p>
                        <p>Quantity: {item.quantity}</p>
                        <div>
                            <p>Location</p>
                            <div className="ml-4">
                                <p>Building: {item.location.building}</p>
                                <p>Shelf: {item.location.shelf}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default InventoryPage

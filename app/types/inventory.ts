export type InventoryItem = {
  readonly id: string
  readonly sku: string
  name: string
  quantity: number
  description: string
  location: {
    building: string
    shelf: string
  }
}
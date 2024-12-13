import { InventoryItem } from '~/types/inventory'

export const inventoryList: InventoryItem[] = [
    {
        id: '1',
        sku: 'SKU-1001',
        name: 'Widget A',
        quantity: 50,
        description: 'A basic widget for general use.',
        location: {
            building: 'A',
            shelf: 'S1',
        },
    },
    {
        id: '2',
        sku: 'SKU-1002',
        name: 'Gadget B',
        quantity: 30,
        description: 'A versatile gadget with multiple features.',
        location: {
            building: 'B',
            shelf: 'S2',
        },
    },
    {
        id: '3',
        sku: 'SKU-1003',
        name: 'Component C',
        quantity: 100,
        description: 'An essential component for assembly.',
        location: {
            building: 'C',
            shelf: 'S3',
        },
    },
    {
        id: '4',
        sku: 'SKU-1004',
        name: 'Tool D',
        quantity: 25,
        description: 'A specialized tool for maintenance.',
        location: {
            building: 'D',
            shelf: 'S4',
        },
    },
    {
        id: '5',
        sku: 'SKU-1005',
        name: 'Part E',
        quantity: 75,
        description: 'Replacement part for standard equipment.',
        location: {
            building: 'E',
            shelf: 'S5',
        },
    },
    {
        id: '6',
        sku: 'SKU-1006',
        name: 'Device F',
        quantity: 40,
        description: 'Electronic device with advanced capabilities.',
        location: {
            building: 'F',
            shelf: 'S6',
        },
    },
    {
        id: '7',
        sku: 'SKU-1007',
        name: 'Accessory G',
        quantity: 60,
        description: 'An accessory compatible with multiple devices.',
        location: {
            building: 'G',
            shelf: 'S7',
        },
    },
    {
        id: '8',
        sku: 'SKU-1008',
        name: 'Module H',
        quantity: 20,
        description: 'A modular component for custom setups.',
        location: {
            building: 'H',
            shelf: 'S8',
        },
    },
    {
        id: '9',
        sku: 'SKU-1009',
        name: 'Assembly I',
        quantity: 15,
        description: 'Pre-assembled unit for rapid deployment.',
        location: {
            building: 'I',
            shelf: 'S9',
        },
    },
    {
        id: '10',
        sku: 'SKU-1010',
        name: 'Kit J',
        quantity: 55,
        description: 'A complete kit with essential components.',
        location: {
            building: 'J',
            shelf: 'S10',
        },
    },
]

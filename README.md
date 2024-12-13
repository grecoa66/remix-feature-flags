### TODO
Write a description of the project and how to use this readme

## Commit #1
- Initial project setup. I used the CodeSandbox Remix template to initialize the project.
- Added tailwind and required dependencies and configuration (https://tailwindcss.com/docs/guides/remix).
- Create types and static data for inventory items.
- Created the basic structure of the application in the `_index` route.

## Commit #2
- Added a `.env` file to store our environment variable.
  - Added `SHOW_ITEM_SKU` feature flag env var.
  - Removed `.env` from `.gitignore`. I'm not storing anything secret, and the blog depends on this knowledge.
- Added types to the Node namespace to declare the env var.
- Accessing the env var in the `_index` route loader and passing it to the component.
  - Using the env var value to conditionally render the SKU.

## Commit #3
- Added a new folder for components and context in the app directory.
  - `<InventoryItem ... />` is the component code from app/_index.tsx route.
  - `FeatureFlagContext` is a simple context to hold the values of the environment variables.
- Moved the access of the `SHOW_ITEM_SKU` env var to the root route.
  - Wrapped the root `<Outlet />` in the `FeatureFlagContext`. This provides the env var values to all child routes and components via React Context.
- Accessing the context in the `<InventoryItem ... />` component. Using the value to conditionally render the SKU.

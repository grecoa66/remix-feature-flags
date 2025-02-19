Thanks for reading my blog about zero dependency feature flags in Remix! You can read these commit messages along with (the blog)[https://www.alex-greco.dev/blog/remix-feature-flags] to build the examples yourself.

## Commit #1
- (0dc1096)[https://github.com/grecoa66/remix-feature-flags/commit/0dc1096c71d45d8a2b7c8aded567ed36e7eafcce]
- Initial project setup. I used the CodeSandbox Remix template to initialize the project.
- Added tailwind and required dependencies and configuration (https://tailwindcss.com/docs/guides/remix).
- Create types and static data for inventory items.
- Created the basic structure of the application in the `_index` route.

## Commit #2
- (b179e80)[https://github.com/grecoa66/remix-feature-flags/commit/b179e80db4ccd0ce63c236308e399aa35ff0d45c]
- Added a `.env` file to store our environment variable.
  - Added `SHOW_ITEM_SKU` feature flag env var.
  - Removed `.env` from `.gitignore`. I'm not storing anything secret, and the blog depends on this knowledge.
- Added types to the Node namespace to declare the env var.
- Accessing the env var in the `_index` route loader and passing it to the component.
  - Using the env var value to conditionally render the SKU.

## Commit #3
- (4995c1e)[https://github.com/grecoa66/remix-feature-flags/commit/4995c1e5b6363a884e6604da86eb8097835e7377]
- Added a new folder for components and context in the app directory.
  - `<InventoryItem ... />` is the component code from app/_index.tsx route.
  - `FeatureFlagContext` is a simple context to hold the values of the environment variables.
- Moved the access of the `SHOW_ITEM_SKU` env var to the root route.
  - Wrapped the root `<Outlet />` in the `FeatureFlagContext`. This provides the env var values to all child routes and components via React Context.
- Accessing the context in the `<InventoryItem ... />` component. Using the value to conditionally render the SKU.

## Commit #4
- (33ed38d)[https://github.com/grecoa66/remix-feature-flags/commit/33ed38da3cad374202213cfa78968a182aa971e2]
- Add tiny-invariant package to check if route parameters and requested resources exist.
- Added a serialized route for each inventory item.
  - This route renders the `<InventoryItem ... />` component for a specific item.
- This commit is setup for the final example of the blog post. This commit doesn't serve any educational purpose on its own. 

## Commit #5
- (2314d54)[https://github.com/grecoa66/remix-feature-flags/commit/2314d54dfa236a09acf4e08436af215176af5150]
- Add `SHOW_ITEM_PAGE` to the `.env` file and type information to the `global.d.ts` file.
- Check the environment variable value in the serialized item page loader. Throw a 404 if the value is false.
- Add `SHOW_ITEM_PAGE` to the feature flag context. Use this context value to either render a link, or render the regular inventory card.

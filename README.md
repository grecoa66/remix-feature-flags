### TODO
Write a description of the project and how to use this readme

## Commit #1
- Initial project setup. I used the CodeSandbox Remix template to initialize the project.
- Added tailwind and required dependencies and configuration (https://tailwindcss.com/docs/guides/remix).
- Create types and static data for inventory items.
- Created the basic structure of the application in the `_index` route.

## Commit #2
- Added a .env file to store our environment variable.
  - Added "SHOW_ITEM_SKU" feature flag env var.
  - Removed .env from gitignore. I'm not storing anything secret, and the blog depends on this knowledge.
- Added types to the Node namespace to declare the env var.
- Accessing the env var in the _index route loader and passing it to the component.
  - Using the env var value to conditionally render the SKU.

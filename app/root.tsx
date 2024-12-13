import { cssBundleHref } from '@remix-run/css-bundle'
import type { LinksFunction } from '@remix-run/node'
import {
    Links,
    LiveReload,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
    useLoaderData,
} from '@remix-run/react'

import stylesheet from '~/tailwind.css'
import { FeatureFlagProvider } from './context/FeatureFlagContext'

export const links: LinksFunction = () => [
    ...(cssBundleHref
        ? [
              { rel: 'stylesheet', href: cssBundleHref },
              { rel: 'stylesheet', href: stylesheet },
          ]
        : [{ rel: 'stylesheet', href: stylesheet }]),
]

export const loader = () => {
    const showItemSku = process.env.SHOW_ITEM_SKU === 'true'

    return { showItemSku }
}

export default function App() {
    const { showItemSku } = useLoaderData<typeof loader>()

    return (
        <html lang="en">
            <head>
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <Meta />
                <Links />
            </head>
            <body>
                <FeatureFlagProvider value={{ showItemSku }}>
                    <Outlet />
                </FeatureFlagProvider>
                <ScrollRestoration />
                <Scripts />
                <LiveReload />
            </body>
        </html>
    )
}

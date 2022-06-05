import type { MetaFunction } from '@remix-run/node'
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration
} from '@remix-run/react'

import globalStyles from '~/styles/global.css'

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'New Remix App',
  viewport: 'width=device-width,initial-scale=1'
})
export const links = () => ([
  {
    rel: 'stylesheet',
    href: globalStyles
  }
])

function Layout () {
  return (
    <>
        <header></header>
        <Outlet />
        <footer> &copy; Copyright 2022 PabloMoreno.</footer>
    </>
  )
}

export default function App () {
  return (
    <html lang="es">
      <head>
        <title>Pablo Moreno</title>
        <Meta />
        <Links />
      </head>
      <body>
        <Layout />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}

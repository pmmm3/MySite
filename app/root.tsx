import type { MetaFunction } from '@remix-run/node';
import {
  Link,
  Links,
  LiveReload,
  Meta,
  NavLink,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
} from '@remix-run/react';

import globalStyles from '~/styles/global.css';

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'New Remix App',
  viewport: 'width=device-width,initial-scale=1'
});
export const links = () => [
  {
    rel: 'stylesheet',
    href: globalStyles
  },
  {
    rel: 'stylesheet',
    href: 'https://cdn.simplecss.org/simple.css'
  }
];
function Layout () {
  return (
    <>
      <header>
        <h4>Pablo Moreno</h4>
        <nav>
          <NavLink to='' end>
            Inicio
          </NavLink>
          <NavLink to='/works'>Trabajos</NavLink>
          <NavLink to='/skills'>Skills</NavLink>
          <a href='~/pdfs/sample.pdf' download>
            Curriculum en PDF
          </a>
        </nav>
      </header>
      <Outlet />
      <footer>
        <small> &copy; Copyright 2022 PabloMoreno.</small>
      </footer>
    </>
  );
}

export default function App() {
  return (
    <html lang='es'>
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
  );
}
export function CatchBoundary() {
  const caught = useCatch();

  return (
    <html>
      <head>
        <title>Oops!</title>
        <Meta />
        <Links />
      </head>
      <body>
        <h1>{caught.status + ' ' + caught.statusText + '😬'}</h1>
        <img
          alt={caught.status + ' ' + caught.statusText}
          width='100%'
          src='assets/404/16.png'
        />
        <Scripts />
      </body>
    </html>
  );
}

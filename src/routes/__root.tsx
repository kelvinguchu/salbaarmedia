import {
  HeadContent,
  Outlet,
  Scripts,
  createRootRoute,
} from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { TanStackDevtools } from '@tanstack/react-devtools'
import { useEffect } from 'react'
import Lenis from 'lenis'

import appCss from '../styles.css?url'
import { ThemeProvider } from '@/components/theme-provider'
import { getThemeServerFn } from '@/lib/theme'

export const Route = createRootRoute({
  loader: async () => {
    const theme = await getThemeServerFn()
    return { theme }
  },
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'Salbaar Media - Amplifying Voices, Shaping Narratives',
      },
      {
        name: 'description',
        content:
          'Salbaar Media is a creative powerhouse delivering exceptional video production, broadcasting, and digital storytelling services connecting brands with global audiences.',
      },
      // Open Graph
      {
        property: 'og:url',
        content: 'https://salbaar.com',
      },
      {
        property: 'og:type',
        content: 'website',
      },
      {
        property: 'og:title',
        content: 'Salbaar Media - Amplifying Voices, Shaping Narratives',
      },
      {
        property: 'og:description',
        content:
          'Salbaar Media is a creative powerhouse delivering exceptional video production, broadcasting, and digital storytelling services connecting brands with global audiences.',
      },
      {
        property: 'og:image',
        content: 'https://salbaar.com/opengraph-image.png',
      },
      // Twitter
      {
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        name: 'twitter:domain',
        content: 'salbaar.com',
      },
      {
        name: 'twitter:url',
        content: 'https://salbaar.com',
      },
      {
        name: 'twitter:title',
        content: 'Salbaar Media - Amplifying Voices, Shaping Narratives',
      },
      {
        name: 'twitter:description',
        content:
          'Salbaar Media is a creative powerhouse delivering exceptional video production, broadcasting, and digital storytelling services connecting brands with global audiences.',
      },
      {
        name: 'twitter:image',
        content: 'https://salbaar.com/opengraph-image.png',
      },
    ],
    links: [
      {
        rel: 'stylesheet',
        href: appCss,
      },
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/favicon.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/favicon.png',
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/favicon.png',
      },
      {
        rel: 'manifest',
        href: '/manifest.json',
      },
    ],
  }),

  component: RootDocument,
})

function RootDocument() {
  const { theme } = Route.useLoaderData()

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    })

    let rafId: number

    function raf(time: number) {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }

    rafId = requestAnimationFrame(raf)

    // Handle anchor links for smooth scrolling
    const handleAnchorClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('a')
      if (!target) return

      const href = target.getAttribute('href')
      if (href?.startsWith('#')) {
        e.preventDefault()
        const element = document.querySelector(href)
        if (element) {
          lenis.scrollTo(element as HTMLElement)
        }
      }
    }

    document.addEventListener('click', handleAnchorClick)

    return () => {
      cancelAnimationFrame(rafId)
      lenis.destroy()
      document.removeEventListener('click', handleAnchorClick)
    }
  }, [])

  return (
    <html lang="en" className={theme}>
      <head>
        <HeadContent />
      </head>
      <body>
        <ThemeProvider theme={theme}>
          <div id="root">
            <Outlet />
          </div>
          <TanStackDevtools
            config={{
              position: 'bottom-right',
            }}
            plugins={[
              {
                name: 'Tanstack Router',
                render: <TanStackRouterDevtoolsPanel />,
              },
            ]}
          />
          <Scripts />
        </ThemeProvider>
      </body>
    </html>
  )
}

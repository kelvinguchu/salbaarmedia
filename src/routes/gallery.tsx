import { createFileRoute } from '@tanstack/react-router'
import { Gallery } from '@/components/gallery/Gallery'

export const Route = createFileRoute('/gallery')({
  component: Gallery,
  head: () => ({
    meta: [
      {
        title: 'Gallery - Salbaar Media',
      },
      {
        name: 'description',
        content:
          'Explore our portfolio of field reporting, studio productions, and impactful stories across the Horn of Africa.',
      },
      {
        property: 'og:title',
        content: 'Gallery - Salbaar Media',
      },
      {
        property: 'og:description',
        content:
          'Explore our portfolio of field reporting, studio productions, and impactful stories across the Horn of Africa.',
      },
    ],
  }),
})

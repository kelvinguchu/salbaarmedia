import { createFileRoute } from '@tanstack/react-router'

import { HeroSection } from '@/components/landing/HeroSection'
import { StorySection } from '@/components/landing/StorySection'
import { PartnersSection } from '@/components/landing/PartnersSection'
import { ServicesSection } from '@/components/landing/ServicesSection'
import { PurposeSection } from '@/components/landing/PurposeSection'
import { ConnectSection } from '@/components/landing/ConnectSection'

export const Route = createFileRoute('/')({
  head: () => ({
    meta: [
      {
        title: 'Salbaar Media - Amplifying Voices, Shaping Narratives',
      },
      {
        name: 'description',
        content:
          'Based in Mogadishu, Salbaar Media is a premier creative agency specializing in video production, broadcasting, and digital storytelling across the Horn of Africa.',
      },
      {
        name: 'keywords',
        content:
          'media production, video production somalia, creative agency mogadishu, digital storytelling, broadcasting services, salbaar media, horn of africa media',
      },
    ],
    scripts: [
      {
        type: 'application/ld+json',
        children: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'Salbaar Media',
          url: 'https://salbaar.com',
          logo: 'https://salbaar.com/logo.png',
          image: 'https://salbaar.com/opengraph-image.png',
          description:
            'A creative media powerhouse delivering exceptional video production, broadcasting, and digital storytelling services.',
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Mogadishu',
            addressCountry: 'Somalia',
          },
          contactPoint: [
            {
              '@type': 'ContactPoint',
              telephone: '+252 61 6068554',
              contactType: 'customer service',
              email: 'connect@salbaar.com',
            },
            {
              '@type': 'ContactPoint',
              telephone: '+252 61 9039111',
              contactType: 'customer service',
              email: 'hajiatosh@gmail.com',
            },
          ],
          sameAs: [
            'https://www.facebook.com/SalbaarMedialtd',
            'https://www.instagram.com/salbaar_media/',
          ],
        }),
      },
    ],
  }),
  component: Index,
})

function Index() {
  return (
    <>
      <HeroSection />
      <StorySection />
      <PurposeSection />
      <ServicesSection />
      <PartnersSection />
      <ConnectSection />
    </>
  )
}

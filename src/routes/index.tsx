import { createFileRoute } from '@tanstack/react-router'
import { Footer } from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'
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
          'Based in Mogadishu, Salbaar Media is a premier creative agency specializing in video production, broadcasting, and digital storytelling across East Africa.',
      },
      {
        name: 'keywords',
        content:
          'media production, video production somalia, creative agency mogadishu, digital storytelling, broadcasting services, salbaar media, east africa media',
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
              email: 'hajiatosh@gmail.com',
            },
            {
              '@type': 'ContactPoint',
              telephone: '+252 61 9039111',
              contactType: 'customer service',
              email: 'hajiatosh@gmail.com',
            },
          ],
          sameAs: [
            'https://www.youtube.com/@abdirizakatosh8936',
            'https://web.facebook.com/AbdirizakHajiAtosh',
            'https://www.instagram.com/abdirizak_atosh/',
            'https://www.linkedin.com/in/abdirizak-atosh-081ab1172',
            'https://x.com/abdirizakatosh',
            'https://www.tiktok.com/@abdirizakatosh',
          ],
        }),
      },
    ],
  }),
  component: Index,
})

function Index() {
  return (
    <div className="bg-background min-h-screen">
      <Header />
      <HeroSection />
      <StorySection />
      <PurposeSection />
      <ServicesSection />
      <PartnersSection />
      <ConnectSection />
      <Footer />
    </div>
  )
}

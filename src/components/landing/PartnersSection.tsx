import * as motion from 'motion/react-client'

// Partner data with real images
const partners = [
  { name: 'UNICEF', logo: '/partners/unicef.webp' },
  { name: 'USAID', logo: '/partners/usa-international-development.webp' },
  { name: 'African Union', logo: '/partners/african-union.webp' },
  { name: 'IGAD', logo: '/partners/igad.webp' },
  { name: 'Mercy Corps', logo: '/partners/mercy-cops.webp' },
  {
    name: 'AECOM',
    logo: '/partners/aecom.webp',
    className: 'brightness-0 invert',
  },
  { name: 'EAJ', logo: '/partners/eaj.webp' },
  { name: 'Federal Government of Somalia', logo: '/partners/somalia.webp' },
]

// Duplicate for seamless infinite scroll
const duplicatedPartners = [...partners, ...partners]

export function PartnersSection() {
  return (
    <section
      id="partners"
      className="py-12 md:py-20 bg-background overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header - Left aligned */}
        <div className="mb-10 md:mb-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="h-px w-8 md:w-12 bg-salbaar-500" />
              <span className="text-salbaar-500 font-semibold uppercase tracking-widest text-xs md:text-sm">
                Trusted By
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-3">
              Our Partners
            </h2>

            <p className="text-base md:text-lg text-zinc-700 dark:text-zinc-400 max-w-4xl">
              Working with leading organizations to deliver impactful stories.
            </p>
          </motion.div>
        </div>

        {/* Infinite scroll marquee */}
        <div className="relative mb-12 md:mb-16">
          {/* Gradient masks */}
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 lg:w-32 bg-linear-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 lg:w-32 bg-linear-to-l from-background to-transparent z-10 pointer-events-none" />

          {/* Scrolling row */}
          <div className="flex gap-4 md:gap-6 overflow-hidden">
            <motion.div
              className="flex gap-12 md:gap-20 shrink-0 items-center"
              animate={{ x: ['0%', '-50%'] }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: 'linear',
              }}
            >
              {duplicatedPartners.map((partner, index) => (
                <div
                  key={`${partner.name}-${index}`}
                  className="shrink-0 flex items-center justify-center"
                >
                  <img
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    className={`h-16 sm:h-20 md:h-24 w-auto object-contain hover:scale-110 transition-transform duration-300 ${partner.className ? 'dark:brightness-0 dark:invert' : ''}`}
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Simple CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="text-base md:text-lg text-zinc-600 dark:text-zinc-400">
            Want to partner with us?{' '}
            <a
              href="#connect"
              className="text-salbaar-500 font-semibold hover:text-salbaar-400 transition-colors"
            >
              Let's talk →
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  )
}

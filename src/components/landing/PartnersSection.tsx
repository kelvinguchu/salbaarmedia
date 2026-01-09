import * as motion from 'motion/react-client'

const partners = [
  { name: 'IOM', logo: '/partners/iom.png', className: 'invert dark:invert-0' },
  { name: 'USAID', logo: '/partners/usa-international-development.webp' },
  { name: 'GIZ', logo: '/partners/giz-partner.svg', className: 'dark:invert' },
  { name: 'UNICEF', logo: '/partners/unicef.webp' },
  { name: 'IGAD', logo: '/partners/igad.webp' },
  { name: 'African Union', logo: '/partners/african-union.webp' },
  { name: 'Mercy Corps', logo: '/partners/mercy-cops.webp' },
  { name: 'AECOM', logo: '/partners/aecom.webp', className: 'dark:invert' },
  { name: 'Particip', logo: '/partners/particip.png' },
  {
    name: 'WorldRemit',
    logo: '/partners/worldremit.avif',
    className: 'invert dark:invert-0',
  },
  {
    name: 'Dahabshiil',
    logo: '/partners/dahabshiil.svg',
    className: 'invert dark:invert-0',
  },
  { name: 'Telesom', logo: '/partners/telesom.png' },
  { name: 'Golis', logo: '/partners/golis.png' },
  { name: 'Safaricom', logo: '/partners/safaricom.png' },
  { name: 'Amal Express', logo: '/partners/amal-express.png' },
  {
    name: 'Freedom Airlines',
    logo: '/partners/freedom-airlines.png',
    className: 'invert dark:invert-0',
  },

  { name: 'EAJ', logo: '/partners/eaj.webp' },
  { name: 'SIB', logo: '/partners/sib.svg', className: 'dark:invert' },
  {
    name: 'Mogadishu Specialist Hospital',
    logo: '/partners/mogadishu-specialist-hospital.png',
    className: 'invert dark:invert-0',
  },
  {
    name: 'Horyaal Hospital',
    logo: '/partners/horyaal-hospital.webp',
    className: 'invert dark:invert-0',
  },
  { name: 'Shaafi Hospital', logo: '/partners/shaafi-hospital.png' },
  { name: 'Hodan Hospital', logo: '/partners/hodan-hospital.png' },
  { name: 'Somalia', logo: '/partners/somalia.webp' },
]

export function PartnersSection() {
  return (
    <section
      id="partners"
      className="py-12 md:py-16 bg-background relative overflow-hidden"
    >
      {/* Top Divider */}
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-salbaar-600/30 to-transparent" />

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#ed2024_1px,transparent_1px)] bg-size-[16px_16px]" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header - Left aligned */}
        <div className="text-center max-w-4xl mx-auto mb-10 md:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="h-px w-8 bg-salbaar-500" />
              <span className="text-salbaar-500 font-semibold uppercase tracking-widest text-xs md:text-sm">
                Trusted Partners
              </span>
              <span className="h-px w-8 bg-salbaar-500" />
            </div>

            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Partnering across the private, public, and humanitarian sectors to
              deliver excellence and amplify your impact.
            </h2>
          </motion.div>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 md:gap-12 items-center justify-items-center">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              className="w-full flex items-center justify-center p-4 hover:scale-110 transition-transform duration-300 group"
            >
              {partner.logo ? (
                <img
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  className={`max-h-16 md:max-h-20 w-auto object-contain transition-all duration-300 ${partner.className || ''}`}
                  title={partner.name}
                />
              ) : (
                <span className="text-xl font-bold text-zinc-400 group-hover:text-salbaar-500 transition-colors pointer-events-none select-none">
                  {partner.name}
                </span>
              )}
            </motion.div>
          ))}
        </div>

        {/* Simple count summary */}
        <div className="mt-12 md:mt-16 text-center border-t border-border pt-8">
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            Trusted by{' '}
            <span className="text-salbaar-500 font-bold">
              {partners.length}+
            </span>{' '}
            organizations across the Horn of Africa and beyond.
          </p>
        </div>
      </div>
    </section>
  )
}

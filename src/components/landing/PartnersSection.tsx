import * as motion from 'motion/react-client'

// Comprehensive list of partners from public/partners directory
const partners = [
  {
    name: 'Dahabshiil',
    logo: '/partners/dahabshiil.svg',
    className: 'invert dark:invert-0',
  },
  { name: 'Safaricom', logo: '/partners/safaricom.png' },
  { name: 'Unicef', logo: '/partners/unicef.webp' },
  { name: 'USAID', logo: '/partners/usa-international-development.webp' },
  { name: 'African Union', logo: '/partners/african-union.webp' },
  { name: 'IGAD', logo: '/partners/igad.webp' },
  {
    name: 'WorldRemit',
    logo: '/partners/worldremit.avif',
    className: 'invert dark:invert-0',
  },
  { name: 'Amal Express', logo: '/partners/amal-express.png' },
  { name: 'Golis', logo: '/partners/golis.png' },
  { name: 'Telesom', logo: '/partners/telesom.png' },
  { name: 'Hodan Hospital', logo: '/partners/hodan-hospital.png' },
  { name: 'Shaafi Hospital', logo: '/partners/shaafi-hospital.png' },
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
  { name: 'Mercy Corps', logo: '/partners/mercy-cops.webp' },
  { name: 'GIZ', logo: '/partners/giz-partner.svg' },
  {
    name: 'AECOM',
    logo: '/partners/aecom.webp',
    className: 'dark:invert',
  },
  { name: 'EAJ', logo: '/partners/eaj.webp' },
  { name: 'Federal Government of Somalia', logo: '/partners/somalia.webp' },
  {
    name: 'Daallo Airlines',
    logo: '/partners/dallo-airlines.svg',
    className: 'invert dark:invert-0',
  },
  { name: 'SIB', logo: '/partners/sib.svg' },
  { name: 'EU Particip', logo: '/partners/particip.png' },
]

export function PartnersSection() {
  return (
    <section
      id="partners"
      className="py-6 md:py-8 bg-background overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header - Left aligned */}
        <div className="mb-4 md:mb-8">
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
              From finance to healthcare and telecommunications, we partner with
              diverse sectors to deliver excellence and amplify impact.
            </p>
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

import * as motion from 'motion/react-client'
import {
  HiOutlineDesktopComputer,
  HiOutlineFilm,
  HiOutlineNewspaper,
  HiOutlinePhotograph,
  HiOutlinePresentationChartBar,
  HiOutlineSpeakerphone,
  HiOutlineVideoCamera,
} from 'react-icons/hi'

const services = [
  {
    name: 'News & Reporting',
    description:
      'Daily digital bulletins with Daqiiqadaha Wararka new bulletins, in-depth articles, and real-time news updates.',
    icon: HiOutlineNewspaper,
    number: '01',
  },
  {
    name: 'Film & Documentary',
    description:
      'Script-to-screen storytelling, human-interest features, and business documentaries.',
    icon: HiOutlineFilm,
    number: '02',
  },
  {
    name: 'Digital Broadcasting',
    description:
      'Live event coverage, real-time digital broadcasting, and expert interviews.',
    icon: HiOutlineDesktopComputer,
    number: '03',
  },
  {
    name: 'Commercial Production',
    description:
      'Brand videos, professional audio/video ads, and success story features.',
    icon: HiOutlineSpeakerphone,
    number: '04',
  },
  {
    name: 'Creative Assets',
    description: 'Professional still photography and data-driven infographics.',
    icon: HiOutlinePhotograph,
    number: '05',
  },
  {
    name: 'Media Consulting',
    description:
      'Media mapping, monitoring, strategic buying, and communication.',
    icon: HiOutlinePresentationChartBar,
    number: '06',
  },
  {
    name: 'Film & Media Production',
    description: 'Script to Screen storytelling',
    icon: HiOutlineVideoCamera,
    number: '07',
  },
  {
    name: 'Success Story Articles',
    description: 'Compelling narratives that highlight achievements',
    icon: HiOutlineNewspaper,
    number: '08',
  },
]

export function ServicesSection() {
  return (
    <section
      id="services"
      className="py-6 md:py-8 bg-background overflow-hidden relative"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(24,24,27,0.8))] dark:bg-[linear-gradient(to_bottom,transparent,rgba(24,24,27,0.8))] opacity-0 dark:opacity-100" />

      {/* Top Divider */}
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-salbaar-600/30 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="max-w-4xl mb-4 md:mb-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="h-px w-8 md:w-12 bg-salbaar-500" />
              <span className="text-salbaar-500 font-semibold uppercase tracking-widest text-xs md:text-sm">
                What We Do
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-tight mb-4 md:mb-6">
              Our Services
            </h2>

            <p className="text-base md:text-lg text-zinc-700 dark:text-zinc-400 leading-relaxed">
              End-to-end media production tailored to your vision. Every project
              receives our full creative attention.
            </p>
          </motion.div>
        </div>

        {/* Services Grid - Unique numbered cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group relative overflow-hidden h-full bg-card border border-border rounded-2xl md:rounded-3xl p-6 hover:border-salbaar-500/30 hover:shadow-lg hover:shadow-salbaar-500/5 transition-[border-color,box-shadow] duration-300"
            >
              {/* Creative Numbering */}
              <div className="absolute bottom-2 right-4 text-5xl md:text-6xl font-bold text-zinc-100 dark:text-zinc-800/20 group-hover:text-salbaar-600/5 transition-colors duration-500 select-none pointer-events-none">
                {service.number}
              </div>

              <div className="relative z-10 flex flex-col h-full">
                <div className="flex items-center gap-3 mb-3 md:mb-4">
                  <service.icon className="w-6 h-6 text-salbaar-600 dark:text-salbaar-500 shrink-0" />
                  <h3 className="text-base sm:text-lg font-bold text-foreground leading-snug group-hover:text-salbaar-600 transition-colors">
                    {service.name}
                  </h3>
                </div>

                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed pr-8">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA - Simplified */}
        <motion.div
          className="mt-12 md:mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <a
            href="#connect"
            className="inline-flex items-center gap-3 px-8 py-4 bg-salbaar-600 hover:bg-salbaar-500 text-white font-semibold rounded-full transition-all duration-300 text-sm md:text-base"
          >
            Start Your Project
            <span>→</span>
          </a>
        </motion.div>
      </div>
    </section>
  )
}

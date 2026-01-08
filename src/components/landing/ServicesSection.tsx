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
      'Daily bulletins with Daqiiqadaha Wararka, in-depth articles & real-time updates',
    icon: HiOutlineNewspaper,
    number: '01',
  },
  {
    name: 'Film & Documentary',
    description: 'Script-to-screen storytelling & business documentaries',
    icon: HiOutlineFilm,
    number: '02',
  },
  {
    name: 'Digital Broadcasting',
    description: 'Live coverage & real-time digital broadcasting',
    icon: HiOutlineDesktopComputer,
    number: '03',
  },
  {
    name: 'Commercial Production',
    description: 'Brand videos, audio/video ads & success stories',
    icon: HiOutlineSpeakerphone,
    number: '04',
  },
  {
    name: 'Creative Assets',
    description: 'Professional photography & data-driven infographics',
    icon: HiOutlinePhotograph,
    number: '05',
  },
  {
    name: 'Media Consulting',
    description: 'Media mapping, monitoring & strategic buying',
    icon: HiOutlinePresentationChartBar,
    number: '06',
  },
  {
    name: 'Success Story Articles',
    description: 'Compelling narratives that highlight achievement',
    icon: HiOutlineVideoCamera, // Using VideoCamera as generic media/story icon or could import HiOutlineDocumentText
    number: '07',
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
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group"
            >
              <div className="relative h-full p-4 sm:p-5 md:p-6 rounded-xl md:rounded-2xl bg-card border border-border hover:border-salbaar-500/50 hover:bg-zinc-50 dark:hover:bg-zinc-800/60 transition-all duration-300 shadow-sm dark:shadow-none">
                {/* Number */}
                <span className="absolute top-3 right-3 md:top-4 md:right-4 text-xs font-mono text-zinc-400 dark:text-zinc-600 group-hover:text-salbaar-600 transition-colors">
                  {service.number}
                </span>

                {/* Icon */}
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-salbaar-600/10 border border-salbaar-600/20 flex items-center justify-center mb-4 group-hover:bg-salbaar-600 group-hover:border-salbaar-600 transition-all duration-300">
                  <service.icon className="w-5 h-5 sm:w-6 sm:h-6 text-salbaar-500 group-hover:text-white transition-colors duration-300" />
                </div>

                {/* Content */}
                <h3 className="text-sm sm:text-base md:text-lg font-bold text-foreground mb-1 md:mb-2">
                  {service.name}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
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

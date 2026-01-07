import * as motion from 'motion/react-client'
import {
  HiOutlineEye,
  HiOutlineHeart,
  HiOutlineLightBulb,
  HiOutlineShieldCheck,
  HiOutlineStar,
  HiOutlineTrendingUp,
} from 'react-icons/hi'

const values = [
  { icon: HiOutlineLightBulb, label: 'Creativity', desc: 'Think differently' },
  { icon: HiOutlineTrendingUp, label: 'Excellence', desc: 'Pursue perfection' },
  { icon: HiOutlineHeart, label: 'Passion', desc: 'Create with heart' },
  { icon: HiOutlineShieldCheck, label: 'Integrity', desc: 'Build on trust' },
]

export function PurposeSection() {
  return (
    <section className="py-12 md:py-20 bg-zinc-950 overflow-hidden relative">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(237,32,36,0.06),transparent_40%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(237,32,36,0.04),transparent_40%)]" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 mb-6"
          >
            <span className="h-px w-8 md:w-12 bg-salbaar-500" />
            <span className="text-salbaar-400 font-semibold uppercase tracking-widest text-xs md:text-sm">
              What Drives Us
            </span>
            <span className="h-px w-8 md:w-12 bg-salbaar-500" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white"
          >
            Our Purpose
          </motion.h2>
        </div>

        {/* Mission & Vision - Asymmetric Layout */}
        <div className="grid lg:grid-cols-5 gap-6 mb-12 md:mb-16">
          {/* Mission Card - Takes 3 columns */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 group"
          >
            <div className="h-full bg-zinc-900 border border-zinc-800 rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-10 hover:border-salbaar-600/40 transition-colors duration-300 relative overflow-hidden">
              {/* Accent line */}
              <div className="absolute top-0 left-0 w-1 h-full bg-linear-to-b from-salbaar-500 via-salbaar-600 to-transparent rounded-l-full" />

              <div className="flex items-start gap-4 md:gap-6 mb-6">
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-salbaar-600/10 border border-salbaar-600/20 flex items-center justify-center shrink-0">
                  <HiOutlineStar className="w-6 h-6 md:w-7 md:h-7 text-salbaar-500" />
                </div>
                <div>
                  <p className="text-salbaar-400 text-xs md:text-sm font-medium uppercase tracking-wider mb-1">
                    Our Mission
                  </p>
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white">
                    Create Impact
                  </h3>
                </div>
              </div>

              <div className="space-y-4 pl-0 md:pl-20">
                <p className="text-base md:text-lg text-zinc-300 leading-relaxed">
                  To produce{' '}
                  <span className="text-white font-semibold">
                    exceptional visual content
                  </span>{' '}
                  that elevates brands and inspires audiences across East Africa
                  and beyond.
                </p>
                <p className="text-sm md:text-base text-zinc-500 leading-relaxed">
                  We bridge ideas and impact, transforming visions into
                  compelling narratives that resonate.
                </p>
              </div>

              {/* Decorative */}
              <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6 text-6xl md:text-7xl font-bold text-zinc-800/50">
                01
              </div>
            </div>
          </motion.div>

          {/* Vision Card - Takes 2 columns */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2 group"
          >
            <div className="h-full bg-linear-to-br from-salbaar-600 via-salbaar-700 to-salbaar-800 rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-10 relative overflow-hidden">
              {/* Pattern overlay */}
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_80%_20%,white,transparent_50%)]" />

              <div className="relative">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-white/10 backdrop-blur flex items-center justify-center shrink-0">
                    <HiOutlineEye className="w-6 h-6 md:w-7 md:h-7 text-white" />
                  </div>
                  <div>
                    <p className="text-salbaar-200 text-xs md:text-sm font-medium uppercase tracking-wider mb-1">
                      Our Vision
                    </p>
                    <h3 className="text-xl md:text-2xl font-bold text-white">
                      Lead Innovation
                    </h3>
                  </div>
                </div>

                <p className="text-base md:text-lg text-white/90 leading-relaxed mb-4">
                  To become the{' '}
                  <span className="text-white font-semibold">
                    premier media production house
                  </span>{' '}
                  in the Horn of Africa.
                </p>
                <p className="text-sm md:text-base text-white/70 leading-relaxed">
                  Setting new standards for creativity and redefining visual
                  storytelling.
                </p>

                {/* Decorative */}
                <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6 text-6xl md:text-7xl font-bold text-white/10">
                  02
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Values - Horizontal scroll on mobile, grid on desktop */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-lg md:text-xl font-semibold text-white text-center mb-6">
            Our Core Values
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {values.map((value) => (
              <div
                key={value.label}
                className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 md:p-5 text-center hover:border-salbaar-600/40 hover:-translate-y-1 transition-all duration-200"
              >
                <div className="w-10 h-10 md:w-12 md:h-12 mx-auto rounded-lg bg-salbaar-600/10 flex items-center justify-center mb-3">
                  <value.icon className="w-5 h-5 md:w-6 md:h-6 text-salbaar-500" />
                </div>
                <h4 className="text-sm md:text-base font-bold text-white mb-1">
                  {value.label}
                </h4>
                <p className="text-xs text-zinc-500">{value.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

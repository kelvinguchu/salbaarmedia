import * as motion from 'motion/react-client'
import {
  HiOutlineLocationMarker,
  HiOutlineMail,
  HiOutlinePhone,
} from 'react-icons/hi'
import { FaWhatsapp } from 'react-icons/fa'
import { Button } from '@/components/ui/button'

const contactMethods = [
  {
    icon: HiOutlineMail,
    title: 'Email',
    value: 'hajiatosh@gmail.com',
    href: 'mailto:hajiatosh@gmail.com',
    description: 'Response within 24h',
  },
  {
    icon: HiOutlinePhone,
    title: 'Phone',
    value: null,
    links: [
      {
        label: '+252 61 6068554',
        href: 'tel:+252616068554',
      },
      {
        label: '+252 61 9039111',
        href: 'tel:+252619039111',
      },
    ],
    description: 'Sat-Thu, 9am-6pm',
  },
  {
    icon: FaWhatsapp,
    title: 'WhatsApp',
    value: null,
    links: [
      {
        label: '+252 61 6068554',
        href: 'https://wa.me/252616068554',
      },
      {
        label: '+252 61 9039111',
        href: 'https://wa.me/252619039111',
      },
    ],
    description: 'Quick responses',
  },
  {
    icon: HiOutlineLocationMarker,
    title: 'Office',
    value: 'Mogadishu, Somalia',
    href: '#',
    description: 'Visit our studio',
  },
]

export function ConnectSection() {
  return (
    <section
      id="connect"
      className="relative py-6 md:py-8 overflow-hidden bg-zinc-50 dark:bg-transparent"
    >
      {/* Backgrounds - Dark Mode Only */}
      <div className="absolute inset-0 bg-linear-to-br from-salbaar-700 via-salbaar-600 to-salbaar-800 opacity-0 dark:opacity-100 transition-opacity duration-300" />
      <div className="absolute inset-0 opacity-0 dark:opacity-5 bg-[radial-gradient(circle_at_30%_30%,white,transparent_50%)]" />
      <div className="absolute inset-0 opacity-0 dark:opacity-5 bg-[radial-gradient(circle_at_70%_70%,white,transparent_50%)]" />

      {/* Light Mode - Subtle Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(237,32,36,0.03),transparent_50%)] dark:hidden" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            {/* Left side - CTA content */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="inline-flex items-center gap-3 mb-6">
                <span className="h-px w-8 md:w-12 bg-salbaar-500 dark:bg-white/40" />
                <span className="text-salbaar-600 dark:text-white/70 font-semibold uppercase tracking-widest text-xs md:text-sm">
                  Get in Touch
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-6">
                Ready to Bring
                <br />
                <span className="text-salbaar-600 dark:text-salbaar-200">
                  Your Vision to Life?
                </span>
              </h2>

              <p className="text-base md:text-lg text-zinc-600 dark:text-white/80 mb-8 leading-relaxed max-w-lg">
                Let's create something remarkable together. Whether it's a
                campaign, documentary, or brand story — we're here to help.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="w-full sm:w-auto h-14 px-8 bg-salbaar-600 text-white hover:bg-salbaar-700 dark:bg-white dark:text-salbaar-700 dark:hover:bg-zinc-100 font-semibold text-base transition-all shadow-lg shadow-salbaar-600/20 dark:shadow-none"
                  asChild
                >
                  <a
                    href="mailto:hajiatosh@gmail.com"
                    className="inline-flex items-center gap-2"
                  >
                    <HiOutlineMail className="w-5 h-5" />
                    Send a Message
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto h-14 px-8 border-zinc-300 text-zinc-700 hover:bg-zinc-100 hover:text-black dark:bg-transparent dark:border-white/30 dark:text-white dark:hover:bg-white/10 dark:hover:border-white/50 font-semibold text-base"
                  asChild
                >
                  <a
                    href="https://wa.me/252619039111"
                    className="inline-flex items-center gap-2"
                  >
                    <FaWhatsapp className="w-5 h-5" />
                    WhatsApp Us
                  </a>
                </Button>
              </div>
            </motion.div>

            {/* Right side - Contact cards */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div className="grid grid-cols-2 gap-3 md:gap-4">
                {contactMethods.map((method) => (
                  <div
                    key={method.title}
                    className="group p-4 md:p-6 bg-white border border-zinc-200 shadow-sm hover:shadow-md hover:border-salbaar-500/30 dark:bg-white/10 dark:backdrop-blur-sm dark:border-white/20 dark:shadow-none dark:hover:bg-white/15 dark:hover:border-white/30 rounded-xl md:rounded-2xl transition-all duration-300"
                  >
                    {/* Icon */}
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-salbaar-50 text-salbaar-600 dark:bg-white/20 dark:text-white flex items-center justify-center mb-3 md:mb-4 group-hover:scale-110 transition-all duration-300">
                      <method.icon className="w-5 h-5 md:w-6 md:h-6" />
                    </div>

                    {/* Content */}
                    <p className="text-zinc-500 dark:text-white/60 text-[10px] md:text-xs uppercase tracking-wider mb-1">
                      {method.title}
                    </p>
                    {method.links ? (
                      <div className="flex flex-col gap-1 mb-1 md:mb-2 text-zinc-900 dark:text-white font-semibold text-sm md:text-base">
                        {method.links.map((link) => (
                          <a
                            key={link.href}
                            href={link.href}
                            className="hover:text-salbaar-600 dark:hover:text-salbaar-200 transition-colors break-all md:break-normal"
                          >
                            {link.label}
                          </a>
                        ))}
                      </div>
                    ) : (
                      <a
                        href={method.href}
                        className="block text-zinc-900 dark:text-white font-semibold text-sm md:text-base mb-1 md:mb-2 hover:text-salbaar-600 dark:hover:text-salbaar-200 transition-colors break-all md:break-normal"
                      >
                        {method.value}
                      </a>
                    )}
                    <p className="text-zinc-500 dark:text-white/50 text-xs hidden sm:block">
                      {method.description}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Bottom tagline */}
          <motion.div
            className="mt-12 md:mt-16 pt-8 border-t border-zinc-200 dark:border-white/10 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <p className="text-xl md:text-2xl text-zinc-900 dark:text-white font-medium">
              Amplifying Voices. Shaping Narratives.
            </p>
            <p className="text-zinc-500 dark:text-white/60 mt-2 text-sm md:text-base">
              Salbaar Media — Your Story, Our Craft
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

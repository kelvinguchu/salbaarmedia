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
      { label: '+252 61 6068554', href: 'tel:+252616068554' },
      { label: '+252 61 9039111', href: 'tel:+252619039111' },
    ],
    description: 'Sat-Thu, 9am-6pm',
  },
  {
    icon: FaWhatsapp,
    title: 'WhatsApp',
    value: '+252 61 9039111',
    href: 'https://wa.me/252619039111',
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
    <section id="connect" className="relative py-12 md:py-20 overflow-hidden">
      {/* ... (background divs kept same) ... */}
      <div className="absolute inset-0 bg-linear-to-br from-salbaar-700 via-salbaar-600 to-salbaar-800" />
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_30%_30%,white,transparent_50%)]" />
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle_at_70%_70%,white,transparent_50%)]" />

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
                <span className="h-px w-8 md:w-12 bg-white/40" />
                <span className="text-white/70 font-semibold uppercase tracking-widest text-xs md:text-sm">
                  Get in Touch
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Bring
                <br />
                <span className="text-salbaar-200">Your Vision to Life?</span>
              </h2>

              <p className="text-base md:text-lg text-white/80 mb-8 leading-relaxed max-w-lg">
                Let's create something remarkable together. Whether it's a
                campaign, documentary, or brand story — we're here to help.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="w-full sm:w-auto h-14 px-8 bg-white text-salbaar-700 hover:bg-zinc-100 font-semibold text-base"
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
                  className="w-full sm:w-auto h-14 px-8 bg-transparent border-white/30 text-white hover:bg-white/10 hover:border-white/50 font-semibold text-base"
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
                    className="group p-4 md:p-6 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl md:rounded-2xl transition-all duration-300 hover:bg-white/15 hover:border-white/30"
                  >
                    {/* Icon */}
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg md:rounded-xl bg-white/20 flex items-center justify-center mb-3 md:mb-4 group-hover:bg-white transition-all duration-300">
                      <method.icon className="w-5 h-5 md:w-6 md:h-6 text-white group-hover:text-salbaar-600 transition-colors duration-300" />
                    </div>

                    {/* Content */}
                    <p className="text-white/60 text-[10px] md:text-xs uppercase tracking-wider mb-1">
                      {method.title}
                    </p>
                    {method.links ? (
                      <div className="flex flex-col gap-1 mb-1 md:mb-2">
                        {method.links.map((link) => (
                          <a
                            key={link.href}
                            href={link.href}
                            className="text-white font-semibold text-sm md:text-base hover:text-salbaar-200 transition-colors break-all md:break-normal"
                          >
                            {link.label}
                          </a>
                        ))}
                      </div>
                    ) : (
                      <a
                        href={method.href}
                        className="block text-white font-semibold text-sm md:text-base mb-1 md:mb-2 hover:text-salbaar-200 transition-colors break-all md:break-normal"
                      >
                        {method.value}
                      </a>
                    )}
                    <p className="text-white/50 text-xs hidden sm:block">
                      {method.description}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Bottom tagline */}
          <motion.div
            className="mt-12 md:mt-16 pt-8 border-t border-white/10 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <p className="text-xl md:text-2xl text-white font-medium">
              Amplifying Voices. Shaping Narratives.
            </p>
            <p className="text-white/60 mt-2 text-sm md:text-base">
              Salbaar Media — Your Story, Our Craft
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

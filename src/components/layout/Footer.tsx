import { Link } from '@tanstack/react-router'
import {
  HiOutlineLocationMarker,
  HiOutlineMail,
  HiOutlinePhone,
} from 'react-icons/hi'
import { RiFacebookLine, RiInstagramLine } from 'react-icons/ri'

const socialLinks = [
  {
    icon: RiFacebookLine,
    href: 'https://www.facebook.com/SalbaarMedialtd',
    label: 'Facebook',
  },
  {
    icon: RiInstagramLine,
    href: 'https://www.instagram.com/salbaar_media/',
    label: 'Instagram',
  },
]

const quickLinks = [
  { name: 'Our Story', href: '#story' },
  { name: 'Services', href: '#services' },
  { name: 'Partners', href: '#partners' },
  { name: 'Connect', href: '#connect' },
]

export function Footer() {
  return (
    <footer className="bg-muted dark:bg-black text-muted-foreground overflow-hidden relative border-t border-border">
      {/* Decorative gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-salbaar-600/10 rounded-full blur-[120px]" />

      {/* Main Footer */}
      <div className="container mx-auto px-4 sm:px-6 py-12 md:py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 mb-12">
          {/* Logo & Description */}
          <div className="md:col-span-5">
            <Link to="/" className="inline-block mb-6">
              <img
                src="/logo.png"
                alt="Salbaar Media"
                className="h-12 w-auto object-contain"
              />
            </Link>
            <p className="text-salbaar-500 font-semibold tracking-wide mb-3">
              Amplifying Voices. Shaping Narratives.
            </p>
            <p className="text-sm mb-8 max-w-md leading-relaxed text-muted-foreground">
              A creative media powerhouse delivering exceptional video
              production, broadcasting, and digital storytelling services.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-salbaar-500 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h4 className="text-foreground font-semibold mb-5 text-sm uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-salbaar-500 transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-3 h-px bg-salbaar-500 transition-all duration-300" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <h4 className="text-foreground font-semibold mb-5 text-sm uppercase tracking-wider">
              Get in Touch
            </h4>
            <div className="space-y-4">
              <a
                href="mailto:hajiatosh@gmail.com"
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-salbaar-500 transition-colors group"
              >
                <HiOutlineMail className="w-5 h-5" />
                hajiatosh@gmail.com
              </a>
              <div className="flex flex-col gap-2">
                <a
                  href="tel:+252616068554"
                  className="flex items-center gap-3 text-sm text-muted-foreground hover:text-salbaar-500 transition-colors group"
                >
                  <HiOutlinePhone className="w-5 h-5" />
                  +252 61 6068554
                </a>
                <a
                  href="tel:+252619039111"
                  className="flex items-center gap-3 text-sm text-muted-foreground hover:text-salbaar-500 transition-colors group ml-8"
                >
                  +252 61 9039111
                </a>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <HiOutlineLocationMarker className="w-5 h-5" />
                Mogadishu, Somalia
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-linear-to-r from-transparent via-border to-transparent mb-8" />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>
            © {new Date().getFullYear()} Salbaar Media. All rights reserved.
          </p>
          <p className="text-zinc-500 dark:text-zinc-400">
            Designed and Developed by{' '}
            <a
              href="https://kulmi.digital"
              target="_blank"
              rel="noopener noreferrer"
              className="text-salbaar-500 hover:text-salbaar-600 dark:text-salbaar-400 dark:hover:text-salbaar-300 font-medium transition-colors"
            >
              Kulmi Digital
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

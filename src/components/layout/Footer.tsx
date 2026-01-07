import { Link } from '@tanstack/react-router'
import {
  HiOutlineLocationMarker,
  HiOutlineMail,
  HiOutlinePhone,
} from 'react-icons/hi'
import {
  RiFacebookLine,
  RiInstagramLine,
  RiLinkedinLine,
  RiTiktokLine,
  RiTwitterXLine,
  RiYoutubeLine,
} from 'react-icons/ri'

const socialLinks = [
  {
    icon: RiYoutubeLine,
    href: 'https://www.youtube.com/@abdirizakatosh8936',
    label: 'YouTube',
  },
  {
    icon: RiFacebookLine,
    href: 'https://web.facebook.com/AbdirizakHajiAtosh',
    label: 'Facebook',
  },
  {
    icon: RiInstagramLine,
    href: 'https://www.instagram.com/abdirizak_atosh/',
    label: 'Instagram',
  },
  {
    icon: RiLinkedinLine,
    href: 'https://www.linkedin.com/in/abdirizak-atosh-081ab1172',
    label: 'LinkedIn',
  },
  {
    icon: RiTwitterXLine,
    href: 'https://x.com/abdirizakatosh',
    label: 'X',
  },
  {
    icon: RiTiktokLine,
    href: 'https://www.tiktok.com/@abdirizakatosh',
    label: 'TikTok',
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
    <footer className="bg-zinc-950 text-zinc-300 overflow-hidden relative">
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
                className="h-12 w-auto object-contain brightness-0 invert"
              />
            </Link>
            <p className="text-salbaar-400 text-sm font-semibold tracking-wide mb-3">
              Amplifying Voices. Shaping Narratives.
            </p>
            <p className="text-sm mb-8 max-w-md leading-relaxed text-zinc-400">
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
                  className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 hover:bg-salbaar-600 hover:border-salbaar-600 transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-zinc-400 hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-zinc-400 hover:text-salbaar-400 transition-colors inline-flex items-center gap-2 group"
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
            <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">
              Get in Touch
            </h4>
            <div className="space-y-4">
              <a
                href="mailto:hajiatosh@gmail.com"
                className="flex items-center gap-4 text-sm text-zinc-400 hover:text-salbaar-400 transition-colors group"
              >
                <div className="p-2.5 rounded-lg bg-zinc-900 border border-zinc-800 group-hover:bg-salbaar-600/20 group-hover:border-salbaar-600/30 transition-all">
                  <HiOutlineMail className="w-4 h-4" />
                </div>
                hajiatosh@gmail.com
              </a>
              <div className="flex flex-col gap-2">
                <a
                  href="tel:+252616068554"
                  className="flex items-center gap-4 text-sm text-zinc-400 hover:text-salbaar-400 transition-colors group"
                >
                  <div className="p-2.5 rounded-lg bg-zinc-900 border border-zinc-800 group-hover:bg-salbaar-600/20 group-hover:border-salbaar-600/30 transition-all">
                    <HiOutlinePhone className="w-4 h-4" />
                  </div>
                  +252 61 6068554
                </a>
                <a
                  href="tel:+252619039111"
                  className="flex items-center gap-4 text-sm text-zinc-400 hover:text-salbaar-400 transition-colors group ml-13"
                >
                  +252 61 9039111
                </a>
              </div>
              <div className="flex items-center gap-4 text-sm text-zinc-400">
                <div className="p-2.5 rounded-lg bg-zinc-900 border border-zinc-800">
                  <HiOutlineLocationMarker className="w-4 h-4" />
                </div>
                Mogadishu, Somalia
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-linear-to-r from-transparent via-zinc-800 to-transparent mb-8" />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-zinc-500">
          <p>
            © {new Date().getFullYear()} Salbaar Media. All rights reserved.
          </p>
          <p className="text-salbaar-500 font-medium">Amplifying Your Voice</p>
        </div>
      </div>
    </footer>
  )
}

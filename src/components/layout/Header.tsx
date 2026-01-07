import { Link } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { useState, useEffect } from 'react'
import { HiOutlineMenuAlt3, HiOutlineX } from 'react-icons/hi'

export function Header() {
  const [sheetOpen, setSheetOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '#story', label: 'Our Story' },
    { href: '#services', label: 'Services' },
    { href: '#partners', label: 'Partners' },
    { href: '#connect', label: 'Connect' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-zinc-950/90 backdrop-blur-xl border-b border-salbaar-600/20 shadow-lg shadow-salbaar-950/10'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-18 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <img
              src="/logo.png"
              alt="Salbaar Media"
              className="h-10 md:h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="relative px-4 py-2 text-sm font-medium text-zinc-400 hover:text-white transition-colors duration-300 group"
              >
                {link.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-salbaar-500 group-hover:w-3/4 transition-all duration-300" />
              </a>
            ))}
          </nav>

          {/* CTA Button & Mobile Menu */}
          <div className="flex items-center gap-3">
            <Button
              className="hidden sm:inline-flex bg-salbaar-600 hover:bg-salbaar-500 text-white font-medium shadow-lg shadow-salbaar-600/25 hover:shadow-salbaar-500/40 transition-all duration-300"
              asChild
            >
              <a href="#connect">Start a Project</a>
            </Button>

            {/* Mobile Menu Sheet */}
            <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
              <SheetTrigger asChild>
                <button className="md:hidden text-zinc-400 hover:text-white p-2 transition-colors">
                  {sheetOpen ? (
                    <HiOutlineX className="h-6 w-6" />
                  ) : (
                    <HiOutlineMenuAlt3 className="h-6 w-6" />
                  )}
                </button>
              </SheetTrigger>
              <SheetContent
                side="top"
                className="min-h-[60vh] bg-zinc-950/98 backdrop-blur-xl border-b border-salbaar-600/20"
              >
                <SheetHeader className="pb-6 border-b border-zinc-800">
                  <SheetTitle>
                    <img
                      src="/logo.png"
                      alt="Salbaar Media"
                      className="h-10 w-auto object-contain"
                    />
                  </SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col gap-2 mt-8">
                  {navLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={() => setSheetOpen(false)}
                      className="px-4 py-4 text-lg font-medium text-zinc-300 hover:text-white hover:bg-salbaar-600/10 rounded-xl transition-all duration-300 border border-transparent hover:border-salbaar-600/20"
                    >
                      {link.label}
                    </a>
                  ))}
                  <Button
                    className="mt-6 h-14 bg-salbaar-600 hover:bg-salbaar-500 text-white text-lg font-medium"
                    asChild
                  >
                    <a href="#connect" onClick={() => setSheetOpen(false)}>
                      Start a Project
                    </a>
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}

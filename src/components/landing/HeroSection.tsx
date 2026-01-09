import * as motion from 'motion/react-client'
import { HiOutlineArrowRight, HiOutlinePlay } from 'react-icons/hi'
import { Button } from '@/components/ui/button'
import { SmoothWavyCanvas } from '@/components/ui/smooth-wavy-canvas'
import { useTheme } from '@/components/theme-provider'

export function HeroSection() {
  const { theme } = useTheme()
  const isDark =
    theme === 'dark' ||
    (theme === 'system' &&
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-color-scheme: dark)').matches)

  const colors = isDark
    ? {
        background: '#0a0a0a',
        primary: '237, 32, 36',
        secondary: '40, 40, 40',
        accent: '20, 20, 20',
      }
    : {
        background: '#ffffff',
        primary: '237, 32, 36',
        secondary: '200, 200, 200',
        accent: '230, 230, 230',
      }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Optimized Canvas Background */}
      <div className="absolute inset-0 z-0">
        <SmoothWavyCanvas
          backgroundColor={colors.background}
          primaryColor={colors.primary}
          secondaryColor={colors.secondary}
          accentColor={colors.accent}
          lineOpacity={isDark ? 0.4 : 0.6}
        />

        <div className="absolute inset-0 bg-linear-to-t from-background via-transparent to-background/50 pointer-events-none" />
        <div className="absolute inset-0 bg-linear-to-b from-background via-transparent to-transparent opacity-80 pointer-events-none" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 relative z-10 pt-20 pb-10 md:pt-28 md:pb-12">
        <div className="max-w-5xl mx-auto text-center">
          {/* Main Heading with staggered animation */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-4 relative leading-none">
              <span className="text-foreground">Amplifying Voices.</span>
              <br />
              <span className="relative inline-block">
                <span className="bg-linear-to-r from-salbaar-400 via-salbaar-500 to-salbaar-600 bg-clip-text text-transparent">
                  Shaping Narratives.
                </span>
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-base sm:text-lg md:text-xl lg:text-xl text-zinc-700 dark:text-zinc-400 mb-6 md:mb-10 max-w-3xl mx-auto leading-relaxed px-4"
          >
            We transform ideas into powerful visual stories. From documentaries
            to live broadcasts, we craft content that{' '}
            <span className="text-foreground font-medium">moves</span>,{' '}
            <span className="text-foreground font-medium">inspires</span>, and{' '}
            <span className="text-foreground font-medium">connects</span>.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full px-4 sm:px-0"
          >
            <Button
              size="lg"
              className="w-full sm:w-auto h-14 px-8 bg-salbaar-600 hover:bg-salbaar-500 text-white font-semibold shadow-2xl shadow-salbaar-600/20 hover:shadow-salbaar-500/30 transition-all duration-300 rounded-full text-base group"
              asChild
            >
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2"
              >
                <HiOutlinePlay className="w-5 h-5" />
                <span>View Our Work</span>
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto h-14 px-8 bg-white/50 dark:bg-zinc-900/40 backdrop-blur border-zinc-200 dark:border-zinc-700/50 text-foreground dark:text-white hover:bg-salbaar-600/10 hover:border-salbaar-500 hover:text-salbaar-600 dark:hover:text-salbaar-400 font-semibold transition-all duration-300 rounded-full text-base group"
              asChild
            >
              <a
                href="#story"
                className="inline-flex items-center justify-center gap-2"
              >
                <HiOutlineArrowRight className="w-5 h-5 rotate-90 sm:rotate-0" />
                <span>Discover Our Story</span>
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

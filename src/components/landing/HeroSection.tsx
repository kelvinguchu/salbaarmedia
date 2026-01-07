import * as motion from 'motion/react-client'
import { HiOutlineArrowRight, HiOutlinePlay } from 'react-icons/hi'
import { Button } from '@/components/ui/button'

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Animated mesh gradient background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(237,32,36,0.15),transparent)] dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(237,32,36,0.15),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_100%_100%,rgba(237,32,36,0.08),transparent)] dark:bg-[radial-gradient(ellipse_60%_60%_at_100%_100%,rgba(237,32,36,0.08),transparent)]" />
      </div>

      {/* Animated geometric shapes - Hidden on mobile for performance */}
      <div className="absolute inset-0 overflow-hidden hidden md:block">
        {/* Large rotating ring */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[900px] md:h-[900px] border border-salbaar-600/20 rounded-full"
          style={{ willChange: 'transform' }}
          animate={{ rotate: 360 }}
          transition={{ duration: 80, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[600px] md:h-[600px] border border-salbaar-500/10 rounded-full"
          style={{ willChange: 'transform' }}
          animate={{ rotate: -360 }}
          transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
        />

        {/* Floating accent dots */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-2 h-2 bg-salbaar-500 rounded-full"
          style={{ willChange: 'transform' }}
          animate={{ y: [0, -20, 0], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute top-1/3 right-1/4 w-3 h-3 bg-salbaar-400/60 rounded-full"
          style={{ willChange: 'transform' }}
          animate={{ y: [0, 15, 0], opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-salbaar-600 rounded-full"
          style={{ willChange: 'transform' }}
          animate={{ y: [0, -15, 0], opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      {/* Animated glow orbs - Reduced intensity/hidden on mobile */}
      <motion.div
        className="absolute top-0 left-1/4 w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full bg-salbaar-600/10 md:bg-salbaar-600/15 blur-[100px] md:blur-[150px]"
        style={{ willChange: 'transform, opacity' }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-0 right-1/4 w-[300px] h-[300px] md:w-[600px] md:h-[600px] rounded-full bg-salbaar-500/5 md:bg-salbaar-500/10 blur-[100px] md:blur-[180px]"
        style={{ willChange: 'transform, opacity' }}
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 relative z-10 pt-24 pb-12 md:pt-32 md:pb-20">
        <div className="max-w-5xl mx-auto text-center">
          {/* Main Heading with staggered animation */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
              <span className="text-foreground">Amplifying</span>
              <br />
              <span className="relative inline-block">
                <span className="bg-linear-to-r from-salbaar-400 via-salbaar-500 to-salbaar-600 bg-clip-text text-transparent">
                  Your Voice
                </span>
                {/* Underline accent */}
                <motion.span
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-linear-to-r from-salbaar-500 to-salbaar-600 rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                />
              </span>
            </h1>
          </motion.div>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-zinc-700 dark:text-zinc-400 mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed px-4"
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
              className="w-full sm:w-auto h-14 px-8 bg-white/80 dark:bg-zinc-900/50 backdrop-blur border-zinc-200 dark:border-zinc-700/50 text-foreground dark:text-white hover:bg-salbaar-600/10 hover:border-salbaar-500 hover:text-salbaar-600 dark:hover:text-salbaar-400 font-semibold transition-all duration-300 rounded-full text-base group"
              asChild
            >
              <a
                href="#story"
                className="inline-flex items-center justify-center gap-2"
              >
                {/* Added icon for consistency */}
                <HiOutlineArrowRight className="w-5 h-5 rotate-90 sm:rotate-0" />
                <span>Discover Our Story</span>
              </a>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-linear-to-t from-background via-background/80 to-transparent" />
    </section>
  )
}

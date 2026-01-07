import {
  HiOutlineCalendar,
  HiOutlineGlobe,
  HiOutlineUserGroup,
} from 'react-icons/hi'
import {
  RiFacebookLine,
  RiInstagramLine,
  RiLinkedinLine,
  RiTiktokLine,
  RiTwitterXLine,
  RiYoutubeLine,
} from 'react-icons/ri'

const socialPlatforms = [
  {
    icon: RiYoutubeLine,
    name: 'YouTube',
    href: 'https://www.youtube.com/@abdirizakatosh8936',
    hoverClass: 'hover:bg-red-600 hover:border-red-600',
  },
  {
    icon: RiFacebookLine,
    name: 'Facebook',
    href: 'https://web.facebook.com/AbdirizakHajiAtosh',
    hoverClass: 'hover:bg-blue-600 hover:border-blue-600',
  },
  {
    icon: RiInstagramLine,
    name: 'Instagram',
    href: 'https://www.instagram.com/abdirizak_atosh/',
    hoverClass: 'hover:bg-pink-500 hover:border-pink-500',
  },
  {
    icon: RiLinkedinLine,
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/abdirizak-atosh-081ab1172',
    hoverClass: 'hover:bg-blue-700 hover:border-blue-700',
  },
  {
    icon: RiTwitterXLine,
    name: 'X',
    href: 'https://x.com/abdirizakatosh',
    hoverClass: 'hover:bg-zinc-600 hover:border-zinc-600',
  },
  {
    icon: RiTiktokLine,
    name: 'TikTok',
    href: 'https://www.tiktok.com/@abdirizakatosh',
    hoverClass: 'hover:bg-pink-600 hover:border-pink-600',
  },
]

const stats = [
  { icon: HiOutlineUserGroup, value: '2M+', label: 'Followers' },
  { icon: HiOutlineGlobe, value: '5+', label: 'Platforms' },
  { icon: HiOutlineCalendar, value: '2025', label: 'Founded' },
]

export function StorySection() {
  return (
    <section
      id="story"
      className="py-8 md:py-16 bg-background dark:bg-muted/50 overflow-hidden relative"
    >
      {/* Background accent */}
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-salbaar-600/30 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(237,32,36,0.05),transparent_50%)]" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="h-px w-8 md:w-12 bg-salbaar-500" />
            <span className="text-salbaar-500 font-semibold uppercase tracking-widest text-xs md:text-sm">
              Who We Are
            </span>
            <span className="h-px w-8 md:w-12 bg-salbaar-500" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-tight">
            The Creative Force
            <br />
            <span className="text-salbaar-500">Behind the Lens</span>
          </h2>
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 lg:items-stretch">
          {/* Left - Founder Card */}
          <div className="h-full group">
            <div className="relative h-full">
              {/* Gradient border */}
              <div className="absolute -inset-px bg-linear-to-br from-salbaar-500 via-salbaar-600 to-salbaar-700 rounded-2xl md:rounded-3xl opacity-60 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative h-full bg-card rounded-2xl md:rounded-3xl overflow-hidden flex flex-col">
                {/* Founder Image */}
                <div className="relative h-64 sm:h-80 md:h-96 overflow-hidden">
                  <div className="absolute inset-0 group-hover:scale-105 transition-transform duration-700 ease-out">
                    <img
                      src="/founder.jpeg"
                      alt="Abdirizak Atosh - Founder"
                      className="w-full h-full object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
                  </div>

                  {/* Founder Info Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                    <p className="text-salbaar-400 text-xs uppercase tracking-widest mb-1">
                      Founder & CEO
                    </p>
                    <h3 className="text-2xl md:text-3xl font-bold text-white">
                      Abdirizak Atosh
                    </h3>
                  </div>
                </div>

                {/* Content Below Image */}
                <div className="p-6 md:p-8 flex-1 flex flex-col">
                  {/* Quote */}
                  <div className="mb-6">
                    <div className="text-4xl md:text-5xl text-salbaar-500 font-serif leading-none mb-3">
                      &ldquo;
                    </div>
                    <p className="text-base md:text-lg text-zinc-700 dark:text-zinc-400 leading-relaxed italic">
                      Every story deserves to be heard. At Salbaar Media, we
                      don't just create content — we amplify voices that shape
                      our world.
                    </p>
                  </div>

                  {/* Social Platforms */}
                  <div className="pt-6 border-t border-border mt-auto">
                    <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-4">
                      Connect across platforms
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {socialPlatforms.map((platform) => (
                        <a
                          key={platform.name}
                          href={platform.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`p-3 rounded-xl bg-secondary hover:bg-salbaar-600 hover:text-white border border-border ${platform.hoverClass} hover:scale-110 active:scale-95 transition-all duration-200 group/icon`}
                          aria-label={platform.name}
                        >
                          <platform.icon className="w-5 h-5 text-zinc-600 dark:text-zinc-400 group-hover/icon:text-white transition-colors" />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Story Content */}
          <div className="space-y-6 h-full flex flex-col">
            {/* Story Text */}
            <div className="bg-card backdrop-blur rounded-2xl p-6 md:p-8 border border-border hover:border-salbaar-500/30 transition-colors duration-300">
              <p className="text-lg md:text-xl text-zinc-800 dark:text-zinc-200 leading-relaxed mb-4">
                Salbaar Media was born from a simple belief:{' '}
                <span className="text-foreground font-semibold">
                  powerful storytelling changes everything
                </span>
                .
              </p>
              <p className="text-base md:text-lg text-zinc-700 dark:text-zinc-400 leading-relaxed">
                Based in the heart of East Africa, we've quickly established
                ourselves as a creative force in media production. From
                compelling documentaries to dynamic live broadcasts, we bring
                visions to life with passion and precision.
              </p>
            </div>

            {/* Key Info Cards */}
            <div className="grid grid-cols-3 gap-3 md:gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-card rounded-xl p-4 md:p-5 text-center border border-border hover:border-salbaar-500/50 hover:-translate-y-1 transition-all duration-200"
                >
                  <stat.icon className="w-6 h-6 text-salbaar-500 mx-auto mb-2" />
                  <p className="text-xl md:text-2xl font-bold text-foreground">
                    {stat.value}
                  </p>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA Banner */}
            <div className="mt-auto group">
              <div className="relative overflow-hidden rounded-2xl bg-linear-to-r from-salbaar-700 via-salbaar-600 to-salbaar-500 p-6 md:p-8 group-hover:scale-[1.02] transition-transform duration-300">
                {/* Shimmer effect */}
                <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />

                <div className="relative flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-white mb-1">
                      Ready to work together?
                    </h3>
                    <p className="text-sm text-white/80">
                      Let's bring your vision to life.
                    </p>
                  </div>
                  <a
                    href="#connect"
                    className="shrink-0 inline-flex items-center gap-2 px-6 py-3 bg-white text-salbaar-700 font-semibold rounded-full text-sm hover:bg-zinc-100 hover:scale-105 active:scale-95 transition-all duration-200"
                  >
                    Get Started
                    <span aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

import {
  HiOutlineCalendar,
  HiOutlineGlobe,
  HiOutlineUserGroup,
} from 'react-icons/hi'
import {
  RiFacebookLine,
  RiInstagramLine,
  RiLinkedinLine,
  RiTwitterXLine,
  RiYoutubeLine,
} from 'react-icons/ri'

const socialPlatforms = {
  personal: [
    {
      icon: RiFacebookLine,
      name: 'Facebook',
      href: 'https://www.facebook.com/AbdirizakHajiAtosh/',
      hoverClass: 'hover:bg-blue-600 hover:border-blue-600',
    },
    {
      icon: RiInstagramLine,
      name: 'Instagram',
      href: 'https://www.instagram.com/abdirizak_atosh/',
      hoverClass: 'hover:bg-pink-500 hover:border-pink-500',
    },
    {
      icon: RiTwitterXLine,
      name: 'X (Twitter)',
      href: 'https://x.com/abdirizakatosh?lang=en',
      hoverClass: 'hover:bg-black hover:border-black',
    },
    {
      icon: RiLinkedinLine,
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/abdirizak-atosh-081ab1172/?originalSubdomain=ke',
      hoverClass: 'hover:bg-blue-700 hover:border-blue-700',
    },
    {
      icon: RiYoutubeLine,
      name: 'YouTube',
      href: 'https://www.youtube.com/@abdirizakatosh8936',
      hoverClass: 'hover:bg-red-600 hover:border-red-600',
    },
  ],
  company: [
    {
      icon: RiFacebookLine,
      name: 'Facebook',
      href: 'https://www.facebook.com/SalbaarMedialtd',
      hoverClass: 'hover:bg-blue-600 hover:border-blue-600',
    },
    {
      icon: RiInstagramLine,
      name: 'Instagram',
      href: 'https://www.instagram.com/salbaar_media/',
      hoverClass: 'hover:bg-pink-500 hover:border-pink-500',
    },
  ],
}

const stats = [
  { icon: HiOutlineUserGroup, value: '2M+', label: 'Followers' },
  { icon: HiOutlineGlobe, value: '5+', label: 'Platforms' },
  { icon: HiOutlineCalendar, value: '2025', label: 'Founded' },
]

export function StorySection() {
  return (
    <section
      id="story"
      className="py-6 md:py-8 bg-background dark:bg-muted/50 overflow-hidden relative"
    >
      {/* Background accent */}
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-salbaar-600/30 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(237,32,36,0.05),transparent_50%)]" />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="mb-4 md:mb-8">
          <div className="inline-flex items-center gap-3 mb-6">
            <span className="h-px w-8 md:w-12 bg-salbaar-500" />
            <span className="text-salbaar-500 font-semibold uppercase tracking-widest text-xs md:text-sm">
              Who We Are
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-tight">
            Our Story
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
                <div className="grid grid-cols-1 md:grid-cols-3 gap-1 p-1 bg-zinc-100 dark:bg-black/20 h-full min-h-[420px]">
                  {/* Main Portrait - Left 2/3 */}
                  <div className="md:col-span-2 relative h-64 md:h-full overflow-hidden rounded-xl md:rounded-l-2xl md:rounded-r-none group/main">
                    <div className="absolute inset-0 group-hover/main:scale-105 transition-transform duration-700 ease-out">
                      <img
                        src="/founder.jpeg"
                        alt="Abdirizak Atosh - Founder"
                        className="w-full h-full object-cover object-top"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
                    </div>

                    {/* Founder Info Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                      <p className="text-salbaar-300 text-xs uppercase tracking-widest mb-1 font-medium drop-shadow-md">
                        Founder & Chief Visionary
                      </p>
                      <h3 className="text-2xl md:text-3xl font-bold text-white">
                        Abdirizak Atosh
                      </h3>
                    </div>
                  </div>

                  {/* Field Images - Right 1/3 Stacked */}
                  <div className="md:col-span-1 flex flex-row md:flex-col gap-1 h-32 md:h-full">
                    {/* Field Image 1 */}
                    <div className="relative w-1/2 md:w-full h-full md:h-1/2 overflow-hidden rounded-xl md:rounded-tr-2xl md:rounded-tl-none md:rounded-b-none group/field1">
                      <div className="absolute inset-0 group-hover/field1:scale-105 transition-transform duration-700 ease-out">
                        <img
                          src="/founder-in-field-1.jpeg"
                          alt="Founder in the field"
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/10 group-hover/field1:bg-transparent transition-colors duration-300" />
                      </div>
                    </div>

                    {/* Field Image 2 */}
                    <div className="relative w-1/2 md:w-full h-full md:h-1/2 overflow-hidden rounded-xl md:rounded-br-2xl md:rounded-bl-none md:rounded-t-none group/field2">
                      <div className="absolute inset-0 group-hover/field2:scale-105 transition-transform duration-700 ease-out">
                        <img
                          src="/founder-in-field-2.jpeg"
                          alt="Founder in action"
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/10 group-hover/field2:bg-transparent transition-colors duration-300" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content Below Image */}
                <div className="p-6 md:p-8 flex-1 flex flex-col">
                  {/* Bio Text */}
                  <div className="mb-6">
                    <p className="text-sm md:text-base text-zinc-700 dark:text-zinc-400 leading-relaxed mb-4">
                      A highly respected journalist and influential media
                      professional, Atosh brings deep experience in connecting
                      with Somali audiences. His work highlights the dynamic and
                      culturally resonating role of digital journalism in
                      Somalia's media landscape.
                    </p>
                    <div className="text-3xl md:text-4xl text-salbaar-500 font-serif leading-none mb-2">
                      &ldquo;
                    </div>
                    <p className="text-base md:text-lg text-zinc-800 dark:text-zinc-300 leading-relaxed italic font-medium">
                      Our visionary roots mirror the values of dynamic
                      storytelling, where every frame captures the essence of
                      humanity and every report builds a bridge of
                      understanding.
                    </p>
                  </div>

                  {/* Social Links */}
                  <div className="mt-auto space-y-6">
                    {/* Atosh Socials */}
                    <div>
                      <p className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-2">
                        Connect with Abdirizak Atosh
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {socialPlatforms.personal.map((platform) => (
                          <a
                            key={platform.name}
                            href={platform.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`p-2.5 rounded-lg bg-secondary hover:bg-salbaar-600 hover:text-white border border-border ${platform.hoverClass} transition-all duration-200 group/icon`}
                            aria-label={platform.name}
                          >
                            <platform.icon className="w-4 h-4 text-zinc-600 dark:text-zinc-400 group-hover/icon:text-white transition-colors" />
                          </a>
                        ))}
                      </div>
                    </div>

                    {/* Company Socials */}
                    <div>
                      <p className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-2">
                        Connect with Salbaar Media
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {socialPlatforms.company.map((platform) => (
                          <a
                            key={platform.name}
                            href={platform.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`p-2.5 rounded-lg bg-secondary hover:bg-salbaar-600 hover:text-white border border-border ${platform.hoverClass} transition-all duration-200 group/icon`}
                            aria-label={platform.name}
                          >
                            <platform.icon className="w-4 h-4 text-zinc-600 dark:text-zinc-400 group-hover/icon:text-white transition-colors" />
                          </a>
                        ))}
                      </div>
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
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">
                Amplifying Voices. Shaping Narratives.
              </h3>
              <p className="text-base md:text-lg text-zinc-700 dark:text-zinc-400 leading-relaxed mb-4">
                Salbaar Media is a registered, Somalia-based company
                specializing in comprehensive digital media production and news
                services. We deliver daily bulletins through{' '}
                <span className="text-salbaar-500 font-medium">
                  Daqiiqadaha Wararka
                </span>
                , in-depth articles, timely news gathering, and human stories
                across the Horn of Africa.
              </p>

              <div className="my-6 border-l-4 border-salbaar-500 pl-4">
                <h4 className="text-lg font-semibold text-foreground mb-2">
                  Why Salbaar?
                </h4>
                <p className="text-base text-zinc-600 dark:text-zinc-400 italic">
                  &ldquo;We don’t just report the news; we amplify voices. By
                  blending traditional journalistic principles with innovative
                  digital production, we set the standard for media
                  excellence.&rdquo;
                </p>
              </div>

              <p className="text-base md:text-lg text-zinc-700 dark:text-zinc-400 leading-relaxed">
                Our mission is powered by a seasoned team: producers and editors
                crafting polished narratives, journalists and voiceover artists
                delivering excellence, and visual artists creating impactful
                content—all supported by our admin and strategy staff ensuring
                operational precision.
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

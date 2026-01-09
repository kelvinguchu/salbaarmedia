import { useState } from 'react'
import * as motion from 'motion/react-client'

const galleryImages = [
  {
    src: '/work/atosh-addressing-a-conference.jpeg',
    alt: 'Atosh addressing a conference',
  },
  {
    src: '/work/atosh-addressing-another-conference.jpeg',
    alt: 'Speaking at conference',
  },
  { src: '/work/atosh-advertising-himself.jpeg', alt: 'Media feature' },
  { src: '/work/atosh-contact-us-graphic.jpeg', alt: 'Contact graphic' },
  {
    src: '/work/atosh-in-field-with-a-walkietalkie.jpeg',
    alt: 'Field reporting',
  },
  { src: '/work/atosh-in-studio.jpeg', alt: 'In studio' },
  {
    src: '/work/atosh-interviewing-a-local.jpeg',
    alt: 'Interviewing a local source',
  },
  {
    src: '/work/atosh-interviewing-a-millitant.jpeg',
    alt: 'Exclusive interview',
  },
  {
    src: '/work/atosh-interviewing-an-official.jpeg',
    alt: 'Interviewing an official',
  },
  { src: '/work/atosh-with-fellow-journalist.jpeg', alt: 'Collaboration' },
  { src: '/work/in-the-studio-headquarters.jpeg', alt: 'Studio headquarters' },
  { src: '/work/taking-a-walk.jpeg', alt: 'On the move' },
]

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <div className="py-24 md:py-28 bg-background relative min-h-screen">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="text-salbaar-600 font-semibold uppercase tracking-widest text-xs md:text-sm mb-4 block">
            Our Work
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Gallery</h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-4xl mx-auto">
            A glimpse into our journey—from field reporting to studio
            productions and exclusive interviews across the Horn of Africa.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 auto-rows-fr">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group relative aspect-square overflow-hidden rounded-xl bg-muted cursor-pointer"
              onClick={() => setSelectedImage(image.src)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 transition-opacity duration-300"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl w-full max-h-[90vh]">
            <img
              src={selectedImage}
              alt="Selected"
              className="w-full h-full object-contain rounded-lg max-h-[90vh]"
            />
            <button
              className="absolute top-4 right-4 text-white hover:text-salbaar-500 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

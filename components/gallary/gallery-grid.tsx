"use client"

import Image from "next/image"
import { useState } from "react"
import ImageModal from "./image-modal"

interface GalleryGridProps {
  images: string[]
  title?: string
}

const GalleryGrid = ({ images, title }: GalleryGridProps) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  const handleNext = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex + 1) % images.length)
    }
  }

  const handlePrev = () => {
    if (selectedIndex !== null) {
      setSelectedIndex((selectedIndex - 1 + images.length) % images.length)
    }
  }

  return (
    <>
      {title && (
        <div className="mb-8">
          <h2 className="text-3xl font-semibold text-secondary mb-2">{title}</h2>
          <p className="text-gray-600">Browse our completed projects and see the quality of our work</p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedIndex(index)}
            className="relative aspect-square group cursor-pointer rounded-lg overflow-hidden"
          >
            <Image
              src={image || "/noimage.jpg"}
              alt={`Gallery image ${index + 1}`}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors flex items-center justify-center">
              <div className="text-white text-4xl opacity-0 group-hover:opacity-100 transition-opacity">🔍</div>
            </div>
          </button>
        ))}
      </div>

      <ImageModal
        isOpen={selectedIndex !== null}
        imageUrl={selectedIndex !== null ? images[selectedIndex] : ""}
        onClose={() => setSelectedIndex(null)}
        onNext={handleNext}
        onPrev={handlePrev}
        imageAlt={`Project gallery image ${selectedIndex !== null ? selectedIndex + 1 : ""}`}
      />
    </>
  )
}

export default GalleryGrid

"use client"

import Image from "next/image"
import { useEffect, useState } from "react"

interface ImageModalProps {
  isOpen: boolean
  imageUrl: string
  onClose: () => void
  onNext?: () => void
  onPrev?: () => void
  imageAlt?: string
}

const ImageModal = ({ isOpen, imageUrl, onClose, onNext, onPrev, imageAlt = "Gallery image" }: ImageModalProps) => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }

    if (isOpen) {
      document.addEventListener("keydown", handleEsc)
    }

    return () => {
      document.removeEventListener("keydown", handleEsc)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4">
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-60 text-2xl font-bold"
        aria-label="Close modal"
      >
        ×
      </button>

      {/* Previous button */}
      {onPrev && (
        <button
          onClick={onPrev}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:bg-white/20 p-2 rounded-full transition-colors"
          aria-label="Previous image"
        >
          {"<"}
        </button>
      )}

      {/* Image container */}
      <div className="relative w-full h-full max-w-4xl max-h-[90vh] flex items-center justify-center">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-8 h-8 border-4 border-white border-t-transparent rounded-full animate-spin" />
          </div>
        )}
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={imageAlt}
          fill
          className="object-contain"
          onLoadingComplete={() => setIsLoading(false)}
        />
      </div>

      {/* Next button */}
      {onNext && (
        <button
          onClick={onNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:bg-white/20 p-2 rounded-full transition-colors"
          aria-label="Next image"
        >
          {">"}
        </button>
      )}
    </div>
  )
}

export default ImageModal

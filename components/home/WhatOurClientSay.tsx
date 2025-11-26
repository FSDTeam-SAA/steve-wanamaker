"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { Button } from "../ui/button"
import testimonialsData from "@/data/clientsay.json"

interface Testimonial {
  id: number
  quote: string
  name: string
  title: string
  image: string
  rating: number
}

const WhatOurClientsSay = () => {
  const testimonials: Testimonial[] = testimonialsData.testimonials
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlay, setIsAutoPlay] = useState(true)

  useEffect(() => {
    if (!isAutoPlay || !testimonials || testimonials.length === 0) return

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [isAutoPlay, testimonials])

  const goToPrevious = () => {
    setIsAutoPlay(false)
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToNext = () => {
    setIsAutoPlay(false)
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const goToSlide = (index: number) => {
    setIsAutoPlay(false)
    setCurrentIndex(index)
  }

  if (!testimonials || testimonials.length === 0) return null

  const current = testimonials[currentIndex]

  return (
    <section className="bg-white py-16 md:py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-secondary mb-4">What Our Clients Say</h2>
          <p className="text-gray-600 text-base md:text-lg">
            Real experiences from businesses who trusted District Floors for their commercial flooring needs
          </p>
        </div>

        {/* Carousel */}
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Left Content */}
          <div className="w-full lg:w-1/2 order-2 lg:order-1">
            <div className="space-y-6">
              {/* Quote */}
              <div className="text-lg md:text-xl text-gray-800 leading-relaxed">
                <p className="text-4xl text-green-200 mb-2 font-serif">&apos;</p>
                <p className="text-base md:text-lg text-gray-700">{current.quote}</p>
              </div>

              {/* Rating */}
              <div className="flex gap-1">
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Author Info */}
              <div>
                <h3 className="font-semibold text-lg text-secondary">{current.name}</h3>
                <p className="text-sm text-gray-600">{current.title}</p>
              </div>

              {/* Navigation Dots and Arrows */}
              <div className="flex items-center justify-between pt-6">
                <div className="flex gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`w-3 h-3 rounded-full transition-all ${
                        index === currentIndex ? "bg-primary w-8" : "bg-gray-300 hover:bg-gray-400"
                      }`}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button
                    onClick={goToPrevious}
                    variant="outline"
                    size="icon"
                    className="border-primary text-primary hover:bg-primary hover:text-white bg-transparent"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </Button>
                  <Button
                    onClick={goToNext}
                    variant="outline"
                    size="icon"
                    className="border-primary text-primary hover:bg-primary hover:text-white bg-transparent"
                    aria-label="Next testimonial"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full lg:w-1/2 order-1 lg:order-2">
            <div className="relative aspect-square lg:aspect-auto lg:h-[500px] rounded-lg overflow-hidden shadow-lg">
              <Image
                src={current.image || "/placeholder.svg"}
                alt={current.name}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhatOurClientsSay
import Image from "next/image"
import Link from "next/link"

import projects from "@/data/projects.json"
import PageHeader from "../shared/page-header"
import CtaSection from "../shared/cta-section"

export const metadata = {
  title: "Projects Gallery | District Floors",
  description:
    "Browse our completed flooring projects and see how we transform commercial spaces with quality and precision.",
}

export default function ProjectsGalleryPage() {
  return (
    <>
      <PageHeader
        subtitle="Our Work Showcase"
        title="Projects Gallery"
        description="Browse our completed flooring projects and see how we transform commercial spaces with quality and precision."
      />

      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl font-semibold text-center text-secondary mb-4">Browse Our Work</h2>
            <p className="text-center text-gray-600 max-w-2xl mx-auto">
              Explore our completed flooring projects showcasing our commitment to quality, durability, and exceptional
              craftsmanship across diverse commercial and residential spaces.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {projects.projects.map((project) => (
              <Link key={project.id} href={`/projectgallary/${project.id}`}>
                <div className="group cursor-pointer h-full flex flex-col">
                  <div className="relative aspect-square mb-4 rounded-lg overflow-hidden flex-shrink-0">
                    <Image
                      src={project.featuredImage || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-lg md:text-xl font-semibold text-gray-900 group-hover:text-primary transition-colors mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 text-sm md:text-base mb-4">{project.shortDescription}</p>
                  </div>
                  <div className="inline-block">
                    <span className="text-primary font-semibold text-sm">View Project →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  )
}

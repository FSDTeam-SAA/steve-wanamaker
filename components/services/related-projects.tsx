import Image from "next/image"
import Link from "next/link"

interface Project {
  id: number
  title: string
  description: string
  image: string
}

interface RelatedProjectsProps {
  projects: Project[]
  currentServiceId?: number
}

const RelatedProjects = ({ projects }: RelatedProjectsProps) => {
  return (
    <section className="py-16 md:py-20 ">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-3xl font-semibold text-secondary mb-3 font-serif">Related Projects</h2>
          <p className="text-gray-600 text-sm md:text-base">
            Explore our completed flooring projects and see how we transform commercial spaces with quality and
            precision
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {projects.map((project) => (
            <Link key={project.id} href={`/projects/${project.id}`}>
              <div className="group cursor-pointer">
                <div className="relative aspect-square mb-3 rounded-lg overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors flex items-end p-4">
                    <div className="text-white">
                      <h3 className="font-semibold text-base md:text-lg">{project.title}</h3>
                      <p className="text-xs md:text-sm text-gray-200">{project.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default RelatedProjects

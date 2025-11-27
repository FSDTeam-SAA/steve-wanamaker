import React from 'react'
import RelatedProjects from '../related-projects'

const RelatedProject = ({serviceId}:{serviceId:number}) => {
      // Example related projects
      const relatedProjects = [
        {
          id: 1,
          title: "Commercial Flooring",
          description:
            "Durable and stylish flooring for offices, retail, and industrial spaces.",
          image: "/images/image-20preview.png",
        },
        {
          id: 2,
          title: "Commercial Flooring",
          description:
            "Durable and stylish flooring for offices, retail, and industrial spaces.",
          image:
            "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&h=400&fit=crop",
        },
        {
          id: 3,
          title: "Commercial Flooring",
          description:
            "Durable and stylish flooring for offices, retail, and industrial spaces.",
          image:
            "https://images.unsplash.com/photo-1633540642136-2ffc4a0f3108?w=400&h=400&fit=crop",
        },
        {
          id: 4,
          title: "Commercial Flooring",
          description:
            "Durable and stylish flooring for offices, retail, and industrial spaces.",
          image:
            "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&h=400&fit=crop",
        },
      ];
  return (
    <section>
      {/* Related Projects */}
      <RelatedProjects
        projects={relatedProjects}
        currentServiceId={serviceId}
      />
    </section>
  )
}

export default RelatedProject
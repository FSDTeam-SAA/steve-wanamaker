import GalleryGrid from "@/components/gallary/gallery-grid";

import PageHeader from "@/components/shared/page-header";
import ReadyToStart from "@/components/shared/ReadyToStart";
import projects from "@/data/projects.json";
import { notFound } from "next/navigation";

export const metadata = {
  title: "Project Details | District Floors",
  description: "Explore detailed project information and gallery",
};

export default async function ProjectDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const project = projects.projects.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  return (
    <>
      <PageHeader
        subtitle="Project Details"
        title={project.title}
        description="A closer look at the work, materials, and craftsmanship behind this completed flooring project."
      />

      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          {/* Top section - centered */}
          <div className="text-center max-w-4xl mx-auto space-y-3 mb-16 md:mb-20">
            <h2 className="text-2xl md:text-4xl tracking-tight text-secondary font-semibold">
              About the Project
            </h2>
            <p className="text-[#575F65] text-sm md:text-base">
              {project.description}
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-xl font-semibold text-secondary mb-2">
              {project.title}
            </h2>
            <p className="text-gray text-base leading-relaxed mb-6">
              {project.fullDescription}
            </p>
            <p className="text-gray text-base leading-relaxed">
              {project.discription2}
            </p>
          </div>

          {/* Gallery Section */}
          <div className="mb-16">
            {/* <h2 className="text-2xl md:text-3xl font-semibold text-secondary mb-8">
              Project Gallery
            </h2> */}
            <GalleryGrid images={project.images} />
          </div>
        </div>
      </section>

      <ReadyToStart />
    </>
  );
}

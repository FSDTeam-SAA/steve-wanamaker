import GalleryGrid from "@/components/gallary/gallery-grid";
import CtaSection from "@/components/shared/cta-section";
import PageHeader from "@/components/shared/page-header";
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
          {/* About Section */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-semibold text-secondary mb-8">
              About the Project
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              {project.fullDescription}
            </p>
            <p className="text-gray-600 text-base leading-relaxed">
              Situated in Skopje, Macedonia, this project showcases our commitment
              to delivering exceptional results in flooring installation. Our team
              of skilled professionals combines attention to detail with quality
              materials to ensure every project exceeds expectations.
            </p>
          </div>

          {/* Gallery Section */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-semibold text-secondary mb-8">
              Project Gallery
            </h2>
            <GalleryGrid images={project.images} />
          </div>

          {/* Highlights */}
          <div className="bg-gray-50 rounded-lg p-8 md:p-12">
            <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-6">
              Project Highlights
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-primary text-xl font-bold">✓</span>
                <span className="text-gray-700">
                  Professional installation with attention to detail
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary text-xl font-bold">✓</span>
                <span className="text-gray-700">
                  High-quality materials and durable finishes
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary text-xl font-bold">✓</span>
                <span className="text-gray-700">
                  On-time completion and project management
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary text-xl font-bold">✓</span>
                <span className="text-gray-700">
                  Warranty and ongoing maintenance support
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}

import Image from "next/image";

import servicesData from "@/data/services.json";
import ServiceFeatures from "@/components/services/service-features";
import RelatedProjects from "@/components/services/related-projects";
import WhatOurClientsSay from "@/components/home/WhatOurClientSay";
import CtaSection from "@/components/shared/cta-section";

export async function generateStaticParams() {
  return servicesData.services.map((service) => ({
    id: service.id.toString(),
  }));
}

export function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  return params.then(({ id }) => {
    const service = servicesData.services.find(
      (s) => s.id === Number.parseInt(id)
    );

    return {
      title: service?.title || "Service Details",
      description: service?.description || "District Floors Service",
    };
  });
}

const ServiceDetailPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;

  const service = servicesData.services.find(
    (s) => s.id === Number.parseInt(id)
  );

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-secondary mb-2">
            Service Not Found
          </h1>
          <p className="text-gray-600">
            Sorry, the service you&apos;re looking for doesn&apos;t exist.
          </p>
        </div>
      </div>
    );
  }

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
    <main className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="bg-gray-50 border-b border-gray-200 py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="space-y-4">
            <h1 className="text-primary text-2xl md:text-3xl font-semibold">
              {service.title}
            </h1>
            <p className="text-gray-600 text-base md:text-lg max-w-2xl">
              {service.description}
            </p>
          </div>
        </div>
      </section>

      {/* Main Image */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4">
          <div className="relative aspect-video md:h-96 rounded-lg overflow-hidden shadow-lg">
            <Image
              src={service.imageUrl || "/placeholder.svg"}
              alt={service.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl space-y-6">
            <h2 className="text-2xl md:text-3xl font-semibold text-secondary">
              About the {service.title}
            </h2>
            <p className="text-gray-700 leading-relaxed text-base md:text-lg">
              {service.fullDescription}
            </p>
          </div>
        </div>
      </section>

      {/* Features */}
      <ServiceFeatures features={service.features} />

      {/* Related Projects */}
      <RelatedProjects
        projects={relatedProjects}
        currentServiceId={service.id}
      />

      {/* Testimonials */}
      <WhatOurClientsSay />

      {/* CTA */}
      <CtaSection />
    </main>
  );
};

export default ServiceDetailPage;

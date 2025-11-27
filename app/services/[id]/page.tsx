

import servicesData from "@/data/services.json";

import RelatedProject from "@/components/services/details/RelatedProject";
import ReadyToStart from "@/components/shared/ReadyToStart";

import PageHeader from "@/components/shared/page-header";
import WhatWeOffer from "@/components/services/details/WhatWeOffer";

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

  return (
    <main className="min-h-screen  bg-[url('/backgrounds/home-bg.jpg')]">
      <PageHeader
        subtitle="Our Work Showcase"
        title="Commercial Flooring"
        description="Delivering high-quality, durable commercial flooring solutions designed to enhance every business environment."
      />

      <WhatWeOffer service={service} />

      <RelatedProject serviceId={service.id} />
      {/* CTA */}
      <ReadyToStart />
      {/* <CtaSection /> */}
    </main>
  );
};

export default ServiceDetailPage;

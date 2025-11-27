import PageHeader from "@/components/shared/page-header";
import ReadyToStart from "@/components/shared/ReadyToStart";
import ServicesList from "@/components/shared/ServicesList";
import React from "react";

export default function page() {
  return (
    <>
      <div className="lg:mt-40 mt-36">
            <PageHeader
        subtitle="Our Work Showcase"
        title="Our Services"
        description="Professional commercial flooring solutions designed for offices, retail spaces, and industrial environments."
      />
        <ServicesList
          heading="Professional Flooring Services"
          paragraph="Explore our completed flooring projects and see how we transform commercial spaces with quality and precision."
        />
        <ReadyToStart />
      </div>
    </>
  );
}

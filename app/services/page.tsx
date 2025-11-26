import ServicesList from "@/components/shared/ServicesList";
import React from "react";

export default function page() {
  return (
    <>
      <div className="lg:mt-40 mt-36">
        <ServicesList
          heading="Professional Flooring Services"
          paragraph="Explore our completed flooring projects and see how we transform commercial spaces with quality and precision."
        />
      </div>
    </>
  );
}

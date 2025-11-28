import React from "react";
import ServicesCard from "./ServicesCard";
import data from "@/data/services.json";

const ServicesList = ({
  heading,
  paragraph,
}: {
  heading: string;
  paragraph: string;
}) => {
  return (
    <section className="my-16 md:my-20">
      <div className="container mx-auto">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-secondary font-serif text-2xl md:text-3xl font-semibold tracking-tighter mb-1">
            {heading}
          </h2>
          <p className="text-gray font-normal text-sm md:text-base">
            {paragraph}
          </p>
        </div>

        {data.services.map((service) => (
          <ServicesCard
            key={service.id}
            id={service.id}
            img={service.imageUrl}
            title={service.title}
            description={service.description}
            button={service.button ?? ""}
            whichside={service.whichside}
          />
        ))}
      </div>
    </section>
  );
};

export default ServicesList;

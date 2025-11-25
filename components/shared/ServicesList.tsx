import React from "react";
import ServicesCard from "./ServicesCard";
import services from "@/data/services.json";

const ServicesList = () => {
  return (
    <section className="my-16 md:my-20 ">
      <div className="container mx-auto">
        <div className="text-center mb-12 md:mb-20">
            <h2 className="text-secondary text-2xl md:text-3xl font-semibold tracking-tighter mb-1">Our Services</h2>
            <p className="text-gray font-normal text-sm md:text-base">Comprehensive flooring solutions for commercial spaces</p>
        </div>
        {services.map((service, index) => (
          <ServicesCard
            key={index}
            img={service.img}
            title={service.title}
            description={service.description}
            button={service.button}
            whichside={service.whichside}
          />
        ))}
      </div>
    </section>
  );
};

export default ServicesList;

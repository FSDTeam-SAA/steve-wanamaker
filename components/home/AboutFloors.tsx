import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

const AboutFloors = () => {
  return (
    <section className="py-16 md:py-20">
      <div className="container mx-auto px-4">

        {/* Heading */}
        <div className="text-center">
          <h2 className="text-xl md:text-3xl font-bold text-secondary mb-4 tracking-tight">
            About District Floors
          </h2>
          <p className="text-sm md:text-base text-gray">
            Your trusted partner for delivering exceptional, high-quality
            commercial flooring solutions tailored to every business space.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:gap-12 mt-[40] lg:mt-20  lg:grid-cols-2 items-center">



        {/* Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
          <div>
            <Image
              src="/about-florr.jpg"
              width={800}
              height={600}
              alt="about-floors"
              className="rounded-lg object-cover w-full h-full"
            />
          </div>

          <div className="flex flex-col gap-2">
            <Image
              src="/about2-flors.png"
              width={800}
              height={600}
              alt="about-floors-2"
              className="rounded-lg object-cover w-full aspect-square"
            />
            <Image
              src="/about3.png"
              width={800}
              height={600}
              alt="about-floors-3"
              className="rounded-lg object-cover w-full aspect-square"
            />
          </div>
        </div>

        {/* Text Section */}
        <div className="mt-8 max-w-3xl">
          <h3 className="text-xl md:text-2xl font-semibold text-secondary mb-3">
            Delivering Excellence in Commercial Flooring
          </h3>

          <p className="text-gray-700 leading-relaxed mb-4">
            District Floors has been delivering high-quality flooring solutions
            for offices, retail, and industrial spaces. Our mission is to combine
            durability, style, and functionality to transform every commercial
            space we work on. We pride ourselves on using the best materials and
            professional techniques to ensure long-lasting results.
          </p>

          <p className="text-gray-700 leading-relaxed">
            From consultation to installation, we ensure every project is handled
            with precision and dedication. Our focus is creating flooring systems
            that meet both the aesthetic and operational needs of your business.
          </p>
          <Button className="bg-transparent text-primary text-base font-medium border border-primary mt-[30px] cursor-pointer hover:bg-transparent hover:scale-105 mg:mt-[60px] rounded-sm">Learn More</Button>
        </div>

        </div>


      </div>
    </section>
  );
};

export default AboutFloors;

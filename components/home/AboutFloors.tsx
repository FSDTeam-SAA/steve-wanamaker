import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const AboutFloors = () => {
  return (
    <section className="py-16 md:py-20">
      <div className="container mx-auto px-4">

        {/* Heading */}
        <div className="text-center">
          <h2 className="text-xl md:text-3xl font-serif font-bold text-secondary mb-4 tracking-tight">
            About District Floors
          </h2>
          <p className="text-sm md:text-base text-gray">
            Your trusted partner for delivering exceptional, high-quality
            commercial flooring solutions tailored to every business space.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 md:gap-12 lg:grid-cols-5 items-center lg:mt-10">



        {/* Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4 lg:col-span-2 col-span-5">
          <div>
            <Image
              src="/about-florr.jpg"
              width={800}
              height={600}
              alt="about-floors"
              className="rounded-lg object-cover w-full h-full"
            />
          </div>

          <div className="flex flex-col ">
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
        <div className="max-w-3xl lg:col-span-3 col-span-5">
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
          <Link href={"/about"}>
          
          <Button className="bg-transparent group text-primary py-5 text-base font-medium border border-primary mt-[30px] w-[200px] cursor-pointer hover:bg-transparent  mg:mt-[60px] rounded-sm">Learn More

                <ArrowRight className="ml-2 hidden group-hover:block transform transition-transform duration-300" />

          </Button>
          </Link>
        </div>

        </div>


      </div>
    </section>
  );
};

export default AboutFloors;

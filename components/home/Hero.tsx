import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";

const Hero = () => {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden">
      {/* Background Video */}
      <video
        src="/hero.mp4"
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
      ></video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4 text-white max-w-[50%] text-start sm:text-center">
          <h2 className="text-2xl md:text-4xl lg:text-5xl lg:text-[50px] font-bold leading-tight">
            Transforming{" "}
            <span className="text-[#426E25]">Commercial Spaces</span> with
            Expert Flooring Solutions
          </h2>

          <p className="mt-4 text-sm md:text-lg lg:text-xl text-gray-200">
            High quality, durable, and stylish flooring solutions for offices,
            retail spaces, and industrial environments — designed to elevate
            your commercial space with professional excellence.
          </p>

          <div className="mt-6 flex flex-col my-5 md:flex-row md:my-5 gap-4  justify-center items-center">
            <Link href="/services">
              <Button className="px-6 flex gap-1 group bg-transparent border text-white font-semibold rounded-lg hover:bg-transparent w-[200px] py-5 cursor-pointer transition-colors duration-300">
                Learn More
                <ArrowRight className="ml-2 opacity-100 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-1 transition duration-300 ease-in-out" />
              </Button>
            </Link>

            <Link href="/projectgallary" className="inline-block">
              <Button className="px-6 py-5 bg-primary group text-white font-semibold rounded-sm w-[200px] transform transition-colors duration-300 cursor-pointer flex items-center">
                View Project
                <ArrowRight className="ml-2 opacity-100 transform -translate-x-2 group-hover:opacity-100 group-hover:translate-x-1 transition duration-300" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

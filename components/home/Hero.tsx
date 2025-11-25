import React from "react";
import Link from "next/link";

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
        <div className="container mx-auto px-4 text-white max-w-[50%] text-center">
          <h2 className="text-4xl md:text-5xl lg:text-[50px] font-bold leading-tight">
            Transforming <span className="text-[#426E25]">Commercial Spaces</span>  with Expert Flooring Solutions
          </h2>

          <p className="mt-4 text-lg md:text-xl text-gray-200">
            High quality, durable, and stylish flooring solutions for offices,
            retail spaces, and industrial environments — designed to elevate your
            commercial space with professional excellence.
          </p>

          <div className="mt-6 flex gap-4  justify-center items-center">
            <Link href="/services">
              <button className="px-6 py-3 bg-transparent text-white font-semibold rounded-lg hover:bg-gray-200 hover:text-black cursor-pointer transition">
                Learn More
              </button>
            </Link>

            <Link href="/contact">
              <button className="px-6 py-3 bg-primary text-white font-semibold rounded-sm hover:bg-blue-700 transition cursor-pointer">
                View Project
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

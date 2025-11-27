import { SingleService } from "@/lib/types/service";
import { Award, Target, TrendingUp, Users } from "lucide-react";
import Image from "next/image";
import React from "react";

const WhatWeOffer = ({ service }: { service: SingleService }) => {
    const valuesData = [
  {
    title: "Quality Excellence",
    description:
      "We never compromise on quality, delivering premium flooring solutions that exceed industry standards.",
    icon: Award,
  },
  {
    title: "Customer Focus",
    description:
      "Your satisfaction is our priority. We work closely with you to ensure your vision becomes reality.",
    icon: Users,
  },
  {
    title: "Precision & Detail",
    description:
      "Every project receives meticulous attention to detail, ensuring flawless installation and finish.",
    icon: Target,
  },
  {
    title: "Innovation",
    description:
      "We stay ahead of idustryends, offering the latest flooring technologies and materials.",
    icon: TrendingUp,
  },
];
  return (
    <section className="pb-12">
      <div className="container mx-auto space-y-10">
        
        {/* Top section - centered */}
        <div className="text-center max-w-4xl mx-auto space-y-3 mb-16 md:mb-20">
          <h2 className="text-2xl md:text-4xl tracking-tight text-secondary font-semibold">
            What We Offer
          </h2>
          <p className="text-[#575F65] text-sm md:text-base">
            {service.description}
          </p>
        </div>

        {/* Content section */}
        <div className="space-y-4">
          <h2 className="text-[20px] text-[#343A40] tracking-tighter font-semibold">
            {service.title}
          </h2>

          <p className="text-[#575F65] text-sm md:text-base">
            {service.discrip2}
          </p>

          <p className="text-[#575F65] text-sm md:text-base">
            {service.fullDescription}
          </p>

          {/* List */}
          <ul className="space-y-2">
            {service?.list?.map((lis, index) => (
              <li
                key={index}
                className="flex gap-2 items-center text-[#575F65] text-sm md:text-base"
              >
                <Image
                  src={"/okay.svg"}
                  alt="servicesdetails"
                  width={24}
                  height={24}
                />
                {lis}
              </li>
            ))}
          </ul>

          <p className="text-[#575F65] text-sm md:text-base">
            {service.discrip3}
          </p>
        </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-16 md:mt-20">
          {valuesData.map((item, index) => (
            <div
              key={index}
              className="border p-8 rounded-lg text-center space-y-2"
            >
              <div className="bg-[#DAEECD66] inline-block p-4 rounded-md">
                <item.icon className="w-6 h-6 text-[#75C043] mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-[#343A40] mb-3">
                {item.title}
              </h3>
              <p className="text-[#575F65] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhatWeOffer;

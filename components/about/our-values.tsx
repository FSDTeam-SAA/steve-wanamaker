import { Award, Target, TrendingUp, Users } from "lucide-react";
import React from "react";

const missionVission = [
  {
    title: "Our Mission",
    description:
      "To transform commercial spaces through innovative flooring solutions that enhance functionality, aesthetics, and value. We strive to exceed client expectations by delivering superior craftsmanship, reliable service, and lasting results.",
  },
  {
    title: "Our Vision",
    description:
      "To be the most trusted and sought after commercial flooring partner in the industry, recognized for our commitment and exceptional customer service. We envision a future where every commercial space we touch becomes a testament to excellence.",
  },
];

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

export default function OurValues() {
  return (
    <section className="lg:pt-20 pt-8">
      <div className="container mx-auto px-2 lg:px-0">
        {/* Header */}
        <div className="text-center mb-6 md:mb-12">
          <h2 className="text-secondary text-2xl md:text-3xl font-semibold tracking-tighter mb-1">
            Our Values
          </h2>
          <p className="text-gray font-normal text-sm md:text-base">
            The principles that guide everything we do
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center lg:gap-8 gap-3">
          {missionVission.map((item, index) => (
            <div
              key={index}
              className="border p-8 rounded-lg text-center lg:text-start space-y-2"
            >
              <h3 className="text-xl font-semibold text-[#343A40]">
                {item.title}
              </h3>
              <p className="text-[#575F65] leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
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
}

import React from "react";
import TeamMembers from "@/data/team.json";

export default function Team() {
  return (
    <section className="lg:pt-40 pt-32">
      <div className="container mx-auto px-2 lg:px-0">
        {/* Header */}
        <div className="text-center mb-6 md:mb-12">
          <h2 className="text-secondary text-2xl md:text-3xl font-semibold tracking-tighter mb-1">
            Meet Our Team
          </h2>
          <p className="text-gray font-normal text-sm md:text-base">
            The skilled professionals dedicated to delivering exceptional
            commercial flooring solutions.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center lg:gap-8 gap-3">
          {/* Team Member 1 */}
          {TeamMembers.map((item, index) => (
            <div
              key={index}
              className="border p-8 rounded-lg text-center lg:text-start space-y-2"
            >
              <h3 className="text-xl font-semibold text-[#343A40]">
                {item.name}
              </h3>
              <p className="text-[#575F65] leading-relaxed">
                {item.designation}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center gap-3">
          {/* Team Member 1 */}
          {TeamMembers.map((item, index) => (
            <div
              key={index}
              className="border p-8 rounded-lg text-center lg:text-start space-y-2 bg-[url('/team/steve.jpg')] bg-no-repeat bg-center bg-cover relative aspect-3/4 flex flex-col justify-end z-20 rounded-md">
              <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 -z-10 rounded-md"></div>
              <h3 className="text-xl text-white font-semibold">
                {item.name}
              </h3>
              <p className="leading-relaxed text-white">
                {item.designation}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

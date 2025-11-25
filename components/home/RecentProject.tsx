import Image from "next/image";
import React from "react";

const RecentProject = () => {
  return (
    <section className="my-16 md:my-20">
      <div className="container mx-auto ">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-secondary text-2xl md:text-3xl font-semibold tracking-tighter mb-1">
            Our Recent Projects
          </h2>
          <p className="text-gray font-normal text-sm md:text-base">
            Your trusted partner for delivering exceptional, high quality
            commercial flooring solutions tailored to every business space.
          </p>
        </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

  {/* LEFT COLUMN — Large Vertical */}
  <div className="relative w-full h-full overflow-hidden rounded-lg">
    <Image
      src="/project/project.jpg"
      alt="project"
      fill
      className="object-cover"
    />
  </div>

  {/* RIGHT SIDE (2 columns inside 2-column span) */}
  <div className="col-span-2 grid grid-cols-2 gap-6">

    {/* Top full-width inside right side */}
    <div className="col-span-2 relative w-full h-[250px] overflow-hidden rounded-lg">
      <Image
        src="/project/project2.jpg"
        alt="project"
        fill
        className="object-cover"
      />
    </div>

    {/* Small Left */}
    <div className="relative w-full h-[200px] overflow-hidden rounded-lg">
      <Image
        src="/project/project3.jpg"
        alt="project"
        fill
        className="object-cover"
      />
    </div>

    {/* Small Right */}
    <div className="relative w-full h-[200px] overflow-hidden rounded-lg">
      <Image
        src="/project/project4.jpg"
        alt="project"
        fill
        className="object-cover"
      />
    </div>

    {/* Bottom Full Width */}
    <div className="col-span-2 relative w-full h-[260px] overflow-hidden rounded-lg">
      <Image
        src="/project/project5.jpg"
        alt="project"
        fill
        className="object-cover"
      />
    </div>

  </div>

</div>


      </div>
    </section>
  );
};

export default RecentProject;

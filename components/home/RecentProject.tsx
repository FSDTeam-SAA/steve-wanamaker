import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

const RecentProject = () => {
  return (
    <section className="py-16 md:py-20 bg-[#DAEECD]/20  ">

      <div className="container mx-auto ">
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-secondary text-2xl md:text-3xl font-semibold tracking-tighter mb-1">
            Our Recent Projects
          </h2>
          <p className="text-gray font-normal text-sm md:text-base w-[90%] mx-auto">
            Your trusted partner for delivering exceptional, high quality
            commercial flooring solutions tailored to every business space.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-6 w-[95%] mx-auto">
          <div className="relative w-full lg:w-[36%] aspect-4/3  rounded-lg overflow-hidden">
            <Image
              src="/project/project.jpg"
              alt="project"
              width={496}
              height={1000}
              className="object-cover w-full h-full"
            />
          </div>

          <div className="w-full lg:w-[64%] grid grid-cols-2 gap-6">
            <div className="col-span-2 relative w-full h-[250px] overflow-hidden rounded-lg">
              <Image
                src="/project/project2.jpg"
                alt="project"
                fill
                className="object-cover"
              />
            </div>

            <div className="flex gap-5 flex-col lg:flex-row w-full col-span-2">
              <div className="w-full lg:w-1/2 flex flex-col gap-5">
                <div className="relative w-full aspect-4/2 rounded-lg overflow-hidden">
                  <Image
                    src="/project/project4.jpg"
                    alt="project"
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="relative w-full aspect-4/2 rounded-lg overflow-hidden">
                  <Image
                    src="/project/project3.jpg"
                    alt="project"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* LAST IMAGE (FIXED HEIGHT SO IT SHOWS) */}
              <div className="relative w-full lg:w-1/2 aspect-4/2 rounded-lg overflow-hidden">
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
        <Button className="bg-white cursor-pointer border-2 hover:bg-white border-primary mx-auto flex rounded-xm  text-primary mt-16 md:mt-20">View Project</Button>
      </div>
    </section>
  );
};

export default RecentProject;

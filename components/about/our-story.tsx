import Image from "next/image";
import React from "react";

export default function OurStory() {
  return (
    <section className="lg:pt-40 pt-32">
      <div className="container mx-auto px-2 lg:px-0">
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

            <div className="flex flex-col lg:gap-2">
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
              Our Story
            </h3>

            <p className="text-gray-700 leading-relaxed mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              quam ligula, rhoncus ut sem vel, fringilla mattis magna. Sed
              tincidunt eleifend ipsum, cursus molestie ipsum vulputate ac.
              Aenean sit amet mi ac urna viverra feugiat. Suspendisse et elit eu
              enim commodo tincidunt. Pellentesque eu faucibus sem, vel egestas
              libero. Maecenas sed elit id magna pellentesque ultrices. Vivamus
              nec nibh scelerisque, faucibus lacus et, imperdiet augue. Duis nec
              libero sed augue varius pharetra.
            </p>

            <p className="text-gray-700 leading-relaxed mb-4">
              Vivamus egestas arcu lorem, a consequat ante posuere eget. Fusce
              lacinia malesuada dolor, sit amet tempor eros gravida sit amet.
              Nulla libero nulla, malesuada vitae lorem efficitur, tincidunt
              ullamcorper neque. Ut tincidunt nisl et tempor rhoncus. Donec
              sodales ligula a eros dignissim imperdiet. Orci varius natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Cras eros lectus, lacinia non vulputate id, fringilla sit amet mi.
            </p>

            <p className="text-gray-700 leading-relaxed">
              Suspendisse hendrerit est non porta blandit. Nullam ut enim eu ex
              mattis commodo. Nulla tempor eu nisl in pellentesque. Morbi eu
              tellus vulputate, rutrum lorem nec, facilisis magna. Pellentesque
              pretium suscipit imperdiet. Quisque consequat, sapien non
              pellentesque tristique, magna mauris placerat purus, a efficitur
              ipsum nunc a nibh. Phasellus efficitur eget mi sit amet posuere.
            </p>
            <div className="flex justify-between items-center mt-6">
              <div className="text-center space-y-2">
                <h4 className="text-[#75C043] text-4xl font-extrabold">20+</h4>
                <p className="text-[#343A40] text-base">Years of Experience</p>
              </div>
              <div className="text-center space-y-2">
                <h4 className="text-[#75C043] text-4xl font-extrabold">500+</h4>
                <p className="text-[#343A40] text-base">Projects Completed</p>
              </div>
              <div className="text-center space-y-2">
                <h4 className="text-[#75C043] text-4xl font-extrabold">98+</h4>
                <p className="text-[#343A40] text-base">Client Satisfaction</p>
              </div>
              <div className="text-center space-y-2">
                <h4 className="text-[#75C043] text-4xl font-extrabold">50+</h4>
                <p className="text-[#343A40] text-base">Team Members</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

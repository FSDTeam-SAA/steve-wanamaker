import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

export interface Service {
  img: string;
  title: string;
  description: string;
  button: string;
  whichside?: string;
}

const ServicesCard = ({
  img,
  title,
  description,
  button,
  whichside = "left",
}: Service) => {
  return (
    <div className="">
      <div
        className={`container mx-auto flex flex-col md:flex-row items-center  ${
          whichside === "left"
            ? "md:flex-row"
            : "md:flex-row-reverse"
        }`}
      >
        {/* Image */}
        <div className="w-full md:w-1/2">
          <Image
            src={img}
            alt={title}
            width={768}
            height={373}
            className="rounded-lg object-cover max-h-[373px] border-4 border-primary"
          />
        </div>

        {/* Content */}
        <div className={`w-full md:w-1/2 space-y-4 ${whichside === "left" ? "md:pl-12" : "md:pr-12 text-right"} mt-8 md:mt-0`}>
          <h2 className="text-xl md:text-2xl font-semibold text-secondary">
            {title}
          </h2>

          <p className="text-gray text-sm md:text-base leading-relaxed">
            {description}
          </p>

          <Button className="bg-transparent text-primary text-base tracking-tight font-mediumv border-2  rounded-sm  border-primary mt-[30px] md:mt-[40px]">{button}</Button>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;

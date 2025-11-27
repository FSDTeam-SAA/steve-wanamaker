import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export interface Service {
  id: number;
  img: string;
  title: string;
  description: string;
  button: string;
  whichside?: string;
}

const ServicesCard = ({
  id,
  img,
  title,
  description,
  button,
  whichside = "left",
}: Service) => {
  return (
    <div className="">
      <div
        className={`container w-[95%] py-4 lg:w-full mx-auto flex flex-col lg:flex-row items-center   ${
          whichside === "left" ? "lg:flex-row" : "lg:flex-row-reverse"
        }`}
      >
        {/* Image */}
        <div className="w-full lg:w-1/2">
          <Image
            src={img}
            alt={title}
            width={768}
            height={373}
            className="rounded-lg object-cover max-h-[373px] border-4 border-primary"
          />
        </div>

        {/* Content */}
        <div
          className={`w-full lg:w-1/2 space-y-4 ${
            whichside === "left" ? "lg:pl-12" : "lg:pr-12 text-right"
          } mt-8 lg:mt-0`}
        >
          <h2 className="text-xl md:text-2xl font-semibold text-secondary">
            {title}
          </h2>

          <p className="text-gray text-sm md:text-base leading-relaxed">
            {description}
          </p>
         <Link href={`/services/${id}`}>
         
          <Button className="bg-transparent text-primary text-base w-[200px] group py-5 tracking-tight hover:bg-transparent cursor-pointer   font-medium border-2  rounded-sm  border-primary mt-[30px] md:mt-10">
            {button}
               <ArrowRight className="ml-2 opacity-100 transform -translate-x-2 group-hover:opacity-100 group-hover:translate-x-1 transition duration-300" />
          </Button>
         </Link>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;

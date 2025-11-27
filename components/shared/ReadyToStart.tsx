import React from "react";
import { Button } from "../ui/button";
import { MoveRight } from "lucide-react";
import Link from "next/link";

const ReadyToStart = () => {
  return (
    <section>
      <div className="container mx-auto px-4 py-16 md:py-20">
        <div className="relative flex justify-center flex-col items-center text-center py-16 md:py-20 px-4 md:px-8 rounded-lg shadow-lg border bg-[#CFE9BD] overflow-hidden">
          
          {/* Background Image with Opacity */}
          <div className="absolute inset-0 bg-[url('/readytostart.png')] bg-cover bg-center opacity-80"></div>

          {/* Content */}
          <div className="relative z-10">
            <h2 className="text-gray-800 text-2xl md:text-3xl font-semibold tracking-tight mb-4">
              Ready to Start Your{" "}
              <span className="text-primary">Flooring Project?</span>
            </h2>

            <p className="text-gray-600 text-sm md:text-base tracking-tight max-w-2xl mb-6">
              Get in touch with our expert team to discuss your project needs,
              explore the right flooring solutions, and receive a custom quote
              tailored specifically to your commercial space.
            </p>
            <Link href={'/contact'}>
            
            <Button className="text-base font-medium mx-auto tracking-tight w-[200px] bg-primary group  text-white border-none rounded-sm px-8 py-6 flex items-center gap-2">
              Contact Us
              <MoveRight className="ml-2 opacity-100 transform -translate-x-2 group-hover:opacity-100 group-hover:translate-x-1 transition duration-300" />
            </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReadyToStart;

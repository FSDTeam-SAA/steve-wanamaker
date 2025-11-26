// ...existing code...
import React from "react";
import { Button } from "../ui/button";
import { MoveLeft, MoveRight } from "lucide-react";

//

const ReadyToStart = () => {
  return (
    <section>
      {/* Use a valid Tailwind gradient class instead of an empty bg-[url()] */}
      <div className="container mx-auto px-4 py-16 md:py-20  ">
        <div className="flex justify-center flex-col items-center text-center  py-16 md:py-20 px-4 md:px-8 bg-[url('/readytostart.png')] rounded-lg shadow-lg border opacity--0 bg-cover bg-center bg-no-repeat bg-[#CFE9BD]">
          <h2 className="text-gray-800 text-2xl md:text-3xl font-semibold tracking-tight mb-4">
            Ready to Start Your{" "}
            <span className="text-primary">Flooring Project?</span>
          </h2>

          <p className="text-gray-600 text-sm md:text-base tracking-tight max-w-2xl mb-6">
            Get in touch with our expert team to discuss your project needs,
            explore the right flooring solutions, and receive a custom quote
            tailored specifically to your commercial space.
          </p>

          <Button className="text-base font-medium tracking-tight bg-primary group hover:scale-105 overflow-hidden  text-white border-none rounded-sm px-8 py-6 flex items-center gap-2">
            Contact Us
            <MoveRight className="opacity-0 hidden group-hover:inline-block translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ReadyToStart;
// ...existing code...

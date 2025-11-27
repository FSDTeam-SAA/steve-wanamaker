import Image from "next/image"
import Link from "next/link"

import projects from "@/data/projects.json";

export const metadata = {
  title: "Projects Gallery | District Floors",
  description:
    "Browse our completed flooring projects and see how we transform commercial spaces with quality and precision.",
};

export default function ProjectsGalleryPage() {
  const data = [
    {
      title1: "Our Work Showcase",
      description1:
        "Since our establishment, we`ve been steadfast in our commitment to nurturing exceptional talent for the global hospitality industry, spanning luxurious 5-star hotels, renowned cruise companies, and prestigious ala carte dining establishments.",
      description2:
        "Browse through completed flooring projects crafted with precision and quality.",
    },
    {
      title1: "Our Work Showcase",
      description1:
        "Our dedication to excellence did not go unnoticed. In the years following, we forged partnerships with industry giants, including Norwegian Cruise Line from 2004 to 2007, followed by Royal Caribbean Cruise Line and Celebrity Cruises from 2011 to 2014. – * ROTC Macedonia and CSA Macedonia",
      description2:
        "This period marked the genesis of our Training Academies, where we honed the skills of aspiring employees, ensuring they were equipped for success in their respective roles. From 2014 to 2017, we further solidified our presence by organizing training academies for MSC Cruises across several cities in the Balkan region.",
      description3:
        "The year 2018 marked a significant milestone as we revitalized our collaboration with Celebrity Cruises and launched the CSEA Macedonia initiative in October of the same year. Additionally, we undertook the responsibility of hosting EFFY Jewelry Corporate Training in Skopje from 2021 to 2023. In each endeavor, the cruise line companies provided expert trainers, ensuring the highest standard of instruction.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
     
        <div className="mb-12 md:mb-16 text-center max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold  text-[#343A40] mb-4">
            Our Work Showcase
          </h2>
          <p className="text-[#6C757D] text-sm md:text-base leading-relaxed">
            Browse through completed flooring projects crafted with precision
            and quality.
          </p>
        </div>

        {/* Data Sections */}
        <div className="space-y-12">
          {data.map((item, index) => (
            <div key={index}>
              <h3 className="text-[20px] font-semibold text-secondary mb-4">
                {item.title1}
              </h3>
              <p className="text-[#575F65] text-sm md:text-base mb-4">
                {item.description1}
              </p>
              <p className="text-[#575F65] text-sm md:text-base mb-4">
                {item.description2}
              </p>
              {item.description3 && (
                <p className="text-[#575F65] text-sm md:text-base">
                  {item.description3}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-12 md:mt-20">
          {projects.projects.map((project) => (
            <Link key={project.id} href={`/projectgallary/${project.id}`}>
              <div className=" relative group cursor-pointer h-full flex flex-col">
                <div className="relative aspect-square mb-4 rounded-lg overflow-hidden shrink-0">
                  <Image
                    src={project.featuredImage || "/noimage.jpg"}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                </div>
                <div className=" absolute bottom-5 left-5">
                  <h3 className="text-lg md:text-xl font-semibold text-[#FFFFFF] transition-colors mb-2 tracking-tighter">
                    {project.title}
                  </h3>
                  <p className="text-[#F1F2F3] text-sm md:text-base mb-4 tracking-tighter">
                    {project.shortDescription}
                  </p>
                </div>
                {/* <div className="inline-block">
                  <span className="text-primary font-semibold text-sm">
                    View Project →
                  </span>
                </div> */}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}



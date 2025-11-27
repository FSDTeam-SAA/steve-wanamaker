import AboutFloors from "@/components/home/AboutFloors";
import Hero from "@/components/home/Hero";
import RecentProject from "@/components/home/RecentProject";
import WhatOurClientsSay from "@/components/home/WhatOurClientSay";

import ReadyToStart from "@/components/shared/ReadyToStart";
import ServicesList from "@/components/shared/ServicesList";

export default function Home() {
  return (
    <>
      <Hero />
      <section className="relative min-h-screen bg-[url('/backgrounds/home-bg.jpg')] bg-cover bg-center bg-no-repeat  ">
        {/* <div className="absolute inset-0 bg-black/40"></div> */}

        <AboutFloors />
        <ServicesList
          heading="Our Services"
          paragraph="Comprehensive flooring solutions for commercial spaces"
        />
        <RecentProject />
        <WhatOurClientsSay />
        <ReadyToStart />
       
      </section>
    </>
  );
}

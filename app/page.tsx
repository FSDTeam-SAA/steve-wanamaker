import AboutFloors from "@/components/home/AboutFloors";
import Hero from "@/components/home/Hero";
import RecentProject from "@/components/home/RecentProject";
import Footer from "@/components/shared/footer";
import ServicesList from "@/components/shared/ServicesList";

export default function Home() {
  return (
    <>
      <Hero />
      <section className="relative min-h-screen bg-cover bg-center bg-no-repeat  ">
        {/* <div className="absolute inset-0 bg-black/40"></div> */}

        <AboutFloors />
        <ServicesList
          heading="Our Services"
          paragraph="Comprehensive flooring solutions for commercial spaces"
        />
        <RecentProject />
        <Footer />
      </section>
    </>
  );
}

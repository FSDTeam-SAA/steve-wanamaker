import AboutFloors from "@/components/home/AboutFloors";
import Hero from "@/components/home/Hero";
import RecentProject from "@/components/home/RecentProject";
import Footer from "@/components/shared/footer";
import Navbar from "@/components/shared/Navbar";
import ServicesList from "@/components/shared/ServicesList";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <section className="relative min-h-screen bg-cover bg-center bg-no-repeat bg-[url('/backgrounds/home-bg.jpg')]">
        {/* <div className="absolute inset-0 bg-black/40"></div> */}
     
          <AboutFloors />
          <ServicesList />
           <RecentProject />
           <Footer />
      </section>
    </>
  );
}

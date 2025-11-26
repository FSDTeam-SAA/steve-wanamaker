import AboutFloors from "@/components/home/AboutFloors";
import Hero from "@/components/home/Hero";
import RecentProject from "@/components/home/RecentProject";
import Footer from "@/components/shared/footer";
import Navbar from "@/components/shared/Navbar";
import ReadyToStart from "@/components/shared/ReadyToStart";
import ServicesList from "@/components/shared/ServicesList";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />

      {/* Background section */}
      <section
        className="relative min-h-screen bg-cover bg-center bg-no-repeat"
        // style={{
        //   backgroundAttachment: 'fixed',
        //   backgroundImage: "url('/backgrounds/home-bg.jpg')"
        // }}
      >
        {/* Optional overlay */}
        {/* <div className="absolute inset-0 bg-black/40"></div> */}

        <AboutFloors />
        <ServicesList />
        <RecentProject />
        <ReadyToStart />
        <Footer />
      </section>
    </>
  );
}

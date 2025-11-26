import OurStory from "@/components/about/our-story";
import OurValues from "@/components/about/our-values";
import React from "react";

export default function page() {
  return (
    <div className="bg-[url('/backgrounds/home-bg.jpg')]">
      <OurStory />
      <OurValues />
    </div>
  );
}

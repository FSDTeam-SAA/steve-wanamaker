"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { usePathname } from "next/navigation";
import { ArrowRight, Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [isHero, setIsHero] = useState(true);
  const pathname = usePathname();

  // Scroll detection — only used on Home page
  useEffect(() => {
    if (pathname !== "/") return;

    const handleScroll = () => {
      setIsHero(window.scrollY < 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Projects Gallery", href: "/projectgallary" },
    { label: "About Us", href: "/about" },
    { label: "Contact Us", href: "/contact" },
  ];

  const isHome = pathname === "/";

  return (
    <section
      className={`py-4 fixed top-0 left-0 w-full z-50 backdrop-blur-2xl transition-all duration-300
        ${isHome && isHero ? "bg-transparent" : "bg-white shadow-sm"}
      `}
    >
      <div className="container mx-auto md:px-4">
        <div className="flex justify-between items-center px-4">
          
          {/* Logo */}
          <Link href={"/"}>
          <Image src={"/logo.png"} width={66} height={80} alt="logo" />
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-8 items-center">
            {navItems.map((item) => {
              const isActive = pathname === item.href;

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`
                      pb-1 transition-all 
                      ${
                        isHome
                          ? // HOME PAGE COLORS
                            isActive
                            ? isHero
                              ? "text-white border-b-2 border-white font-semibold"
                              : "text-primary border-b-2 border-primary font-semibold"
                            : isHero
                            ? "text-white hover:text-gray-200"
                            : "text-black hover:text-primary"
                          : // OTHER PAGES COLORS
                          isActive
                          ? "text-primary border-b-2 border-primary font-semibold"
                          : "text-black hover:text-primary"
                      }
                    `}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Desktop Button */}
          <div className="hidden md:block">
            <Link href={"/"}>
              <Button
                className={`w-[200px] group mt-2 px-6 py-5 rounded-sm transition-colors duration-300 flex items-center
                ${
                  isHome && isHero
                    ? "bg-primary text-white"
                    : "bg-primary text-white"
                }
              `}
              >
                Get a Quote
                <ArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setOpen(!open)}>
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden mt-4 bg-white border w-full h-screen p-4 space-y-4">
            {navItems.map((item) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`block pb-1 text-lg ${
                    isActive
                      ? "border-b-2 border-black font-semibold"
                      : "text-gray-700"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}

            <Link href={"/"}>
              <Button className="w-[200px] group mt-2 px-6 py-5 bg-primary text-white font-semibold rounded-sm flex items-center">
                Get a Quote
                <ArrowRight className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default Navbar;

"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Projects Gallery", href: "/projectgallary" },
    { label: "About Us", href: "/about" },
    { label: "Contact Us", href: "/contact" },
  ];

  return (
    <section className="py-4 shadow-sm bg-transparent backdrop-blur-2xl fixed top-0 left-0 z-50 w-full">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div>
            <Image src={"/logo.png"} width={66} height={80} alt="logo" />
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-8 items-center">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`pb-1 transition-all ${
                    pathname === item.href
                      ? "border-b-2 text-primary border-primary font-semibold"
                      : "text-black hover:text-black"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop Button */}
          <div className="hidden md:block">
            <Button>Get a Quote</Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setOpen(!open)}>
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {open && (
          <div className="md:hidden mt-4 bg-white border rounded-lg p-4 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`block pb-1 text-lg ${
                  pathname === item.href
                    ? "border-b-2 border-black font-semibold"
                    : "text-gray-700"
                }`}
              >
                {item.label}
              </Link>
            ))}

            <Button className="w-full mt-2">Get a Quote</Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Navbar;

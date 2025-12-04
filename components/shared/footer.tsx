import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="  bg-[url('/footerbg.png')]  bg-bottom md:bg-center bg-no-repeat ">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div>
            <Link href={"/"}>
            
            <Image
              src={"/footerlogo.png"}
              alt="footerlogo"
              width={106}
              height={200}
              className="mb-5 object-cover "
            />
            </Link>
            <p className="text-[#6C757D] text-sm md:text-base">
              Delivering trusted and professional commercial flooring solutions
              tailored to every business space.
            </p>
          </div>

          {/* Links Section */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className=" inline-block gap-2 text-sm">
              <FooterLink href="/" text="Home" />
              <FooterLink href="/services" text="Services" />
              <FooterLink href="/projects" text="Projects" />
              <FooterLink href="/about" text="About Us" />
              <FooterLink href="/contact" text="Contact us" />
        
            </div>
          </div>
          {/* Legal Section */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <div className=" inline-block gap-2 text-sm ">
              <FooterLink href="/privacy-policy" text="Privacy Policy" />
              <FooterLink href="/terms-and-conditions" text="Terms & Conditions" />
            </div>
          </div>
          {/* Contact Section */}
          <div>
            <h4 className="font-semibold mb-4">Contact Information</h4>
            <div className="space-y-2 text-[#6C757D] text-sm md:text-base">
              <div>44200 Waxpool Rd Ashburn,VA,USA</div>
              <div>Phone:(972) 555-1234</div>

              <div>Email:info@example.com</div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700 mt-8 pt-6 text-center text-[#6C757D] text-sm flex justify-between items-center">
          <p>© 2024 Quintet Thone. All rights reserved.</p>
          <div className="flex gap-3">
            {/* <Link
              href="https://stevewanamaker.com"
              target="_blank"
              className="text-slate-400 hover:text-slate-200"
            >
              <Image
                src="/facebook.svg"
                alt="Steve Wanamaker"
              width={25}
                height={25}
                className="mx-auto mt-2"
              />
            </Link> */}
            {/* <Link
              href="https://stevewanamaker.com"
              target="_blank"
              className="text-slate-400 hover:text-slate-200"
            >
              <Image
                src="/twitter.svg"
                alt="Steve Wanamaker"
          width={25}
                height={25}
                className="mx-auto mt-2"
              />
            </Link> */}
            <Link
              href="https://www.linkedin.com/in/steve-wanamaker-46567a10b?utm_source=share_via&utm_content=profile&utm_medium=member_android"
              target="_blank"
              className="text-slate-400 hover:text-slate-200"
            >
              <Image
                src="/linkedin.svg"
                alt="Steve Wanamaker"
                width={25}
                height={25}
                className="mx-auto mt-2"
              />
            </Link>
            <Link
              href="https://www.instagram.com/district_floors?igsh=MW5hY2NrMm1iczk3NA=="
              target="_blank"
              className="text-slate-400 hover:text-slate-200"
            >
              <Image
                src="/instagram.svg"
                alt="Steve Wanamaker"
               width={25}
                height={25}
                className="mx-auto mt-2"
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FooterLink = ({ href, text }: { href: string; text: string }) => (
  <Link
    href={href}
    className="text-[#6C757D] cursor-pointer hover:text-[#6a6e72] py-3 text-sm md:ext-base transition-colors block "
  >
    {text}
  </Link>
);

export default Footer;

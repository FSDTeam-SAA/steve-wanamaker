import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className=" text-gray">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Brand Section */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quintet Thone</h3>
            <p className="text-slate-300 text-sm">
              Innovative solutions for modern businesses.
            </p>
          </div>

          {/* Links Section */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <FooterLink href="/" text="Home" />
              <FooterLink href="/services" text="Services" />
              <FooterLink href="/projects" text="Projects" />
              <FooterLink href="/about" text="About" />
              <FooterLink href="/contact" text="Contact" />
              <FooterLink href="/privacy" text="Privacy" />
            </div>
          </div>

          {/* Contact Section */}
          <div>
            <h4 className="font-semibold mb-4">Get in Touch</h4>
            <div className="space-y-2 text-sm">
              <div>📧 info@example.com</div>
              <div>📞 (972) 555-1234</div>
              <div>📷 @quintetthone</div>
              <div>📍 Texas, USA</div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700 mt-8 pt-6 text-center text-slate-400 text-sm">
          <p>© 2024 Quintet Thone. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

const FooterLink = ({ href, text }: { href: string; text: string }) => (
  <Link
    href={href}
    className="text-slate-300 hover:text-white transition-colors block"
  >
    {text}
  </Link>
);

export default Footer;
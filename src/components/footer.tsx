"use client";

import { Instagram, Facebook, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#2a1a0c]">
      <div className="container mx-auto px-4 py-8">
        {/* Top Section - Logo & Navigation */}
        <div className="flex flex-col items-center space-y-6 pb-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div>
              <img
                src="/logo-remover.png"
                alt="FitGym Logo"
                className="w-20 h-20 object-contain"
              />
            </div>
            {/* <span className="text-white text-xl font-semibold">FitGym</span> */}
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center gap-6 text-sm">
            <a
              href="#hero"
              className="text-white hover:text-orange-500 transition-colors"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-white hover:text-orange-500 transition-colors"
            >
              About
            </a>
            <a
              href="#trainers"
              className="text-white hover:text-orange-500 transition-colors"
            >
              Trainers
            </a>
            <a
              href="#gallery"
              className="text-white hover:text-orange-500 transition-colors"
            >
              Gallery
            </a>
            <a
              href="#contact"
              className="text-white hover:text-orange-500 transition-colors"
            >
              Contact
            </a>
          </nav>
        </div>

        {/* Separator */}
        <div className="border-t border-dotted border-gray-600"></div>

        {/* Bottom Section - Copyright & Social */}
        <div className="flex flex-col items-center justify-center pt-6 gap-4">
          {/* Social Media Icons */}
          <div className="flex items-center gap-4">
            <a
              href="https://www.facebook.com/share/1DKmphegHB/"
              className="text-white hover:text-orange-500 transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="https://www.instagram.com/thecoregym_official?igsh=MWtiNTBkaGJzdDVvNA=="
              className="text-white hover:text-orange-500 transition-colors"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://youtube.com/@coregymkolkata?si=8ZPHec5SfWtXsFXi"
              className="text-white hover:text-orange-500 transition-colors"
              aria-label="YouTube"
            >
              <Youtube className="w-5 h-5" />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-white text-sm">
            © Coregym. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
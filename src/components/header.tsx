"use client";

import { useState, useEffect } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Fixed Header - always visible at top */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
          isScrolled
            ? "bg-black/95 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-orange-500/5"
            : "bg-transparent"
        }`}
      >
        <nav className="flex items-center justify-between px-6 lg:px-8 py-2 lg:py-3">
          {/* Logo */}
          <div className="flex items-center group cursor-pointer">
            <div className="relative">
              <img
                src="/logo-remover.png"
                alt="CoreGym Logo"
                className="w-8 h-8 lg:w-10 lg:h-10 object-contain transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-orange-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="ml-3 hidden sm:block">
              <h1 className="text-base lg:text-lg font-bold text-white tracking-tight">
                Core<span className="text-orange-500">Gym</span>
              </h1>
              <div className="h-0.5 bg-gradient-to-r from-orange-500 to-transparent w-0 group-hover:w-full transition-all duration-500"></div>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            <a
              href="#hero"
              className="relative text-white hover:text-orange-500 transition-all duration-300 font-medium text-sm xl:text-base group"
            >
              HOME
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#about"
              className="relative text-white hover:text-orange-500 transition-all duration-300 font-medium text-sm xl:text-base group"
            >
              ABOUT
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#offers"
              className="relative text-white hover:text-orange-500 transition-all duration-300 font-medium text-sm xl:text-base group"
            >
              PRICING
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#gallery"
              className="relative text-white hover:text-orange-500 transition-all duration-300 font-medium text-sm xl:text-base group"
            >
              GALLERY
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#trainers"
              className="relative text-white hover:text-orange-500 transition-all duration-300 font-medium text-sm xl:text-base group"
            >
              TRAINERS
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#transformations"
              className="relative text-white hover:text-orange-500 transition-all duration-300 font-medium text-sm xl:text-base group"
            >
              TRANSFORMATIONS
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a
              href="#contact"
              className="relative text-white hover:text-orange-500 transition-all duration-300 font-medium text-sm xl:text-base group"
            >
              CONTACT
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>

          {/* Desktop Join Us Button */}
          <button className="hidden lg:block relative overflow-hidden bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 xl:px-5 py-2 xl:py-2.5 text-xs xl:text-sm font-bold uppercase tracking-wide rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/25 hover:scale-105 active:scale-95 group">
            <span className="relative z-10">Join Us</span>
            <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden relative p-2 text-white hover:text-orange-500 transition-colors duration-300"
          >
            <div className="w-6 h-6 relative">
              <span
                className={`absolute left-0 top-1/2 w-full h-0.5 bg-current transform -translate-y-1/2 transition-all duration-300 ${
                  isMenuOpen ? "rotate-45" : ""
                }`}
              ></span>
              <span
                className={`absolute left-0 top-1/2 w-full h-0.5 bg-current transform -translate-y-1/2 transition-all duration-300 ${
                  isMenuOpen ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`absolute left-0 top-1/2 w-full h-0.5 bg-current transform -translate-y-1/2 transition-all duration-300 ${
                  isMenuOpen ? "-rotate-45" : ""
                }`}
              ></span>
            </div>
          </button>
        </nav>
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          className="lg:hidden fixed top-20 left-1/2 transform -translate-x-1/2 backdrop-blur-xl border border-white/20 shadow-2xl shadow-orange-500/10 transition-all duration-500 z-[60] rounded-3xl w-[350px] animate-in slide-in-from-top-2"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.95)" }}
        >
          <div className="px-6 py-6 space-y-5 text-center">
            <a
              href="#hero"
              className="block text-white hover:text-orange-500 transition-all duration-300 font-medium text-lg hover:translate-x-2"
              onClick={() => setIsMenuOpen(false)}
            >
              HOME
            </a>
            <a
              href="#about"
              className="block text-white hover:text-orange-500 transition-all duration-300 font-medium text-lg hover:translate-x-2"
              onClick={() => setIsMenuOpen(false)}
            >
              ABOUT
            </a>
            <a
              href="#offers"
              className="block text-white hover:text-orange-500 transition-all duration-300 font-medium text-lg hover:translate-x-2"
              onClick={() => setIsMenuOpen(false)}
            >
              PRICING
            </a>
            <a
              href="#gallery"
              className="block text-white hover:text-orange-500 transition-all duration-300 font-medium text-lg hover:translate-x-2"
              onClick={() => setIsMenuOpen(false)}
            >
              GALLERY
            </a>
            <a
              href="#trainers"
              className="block text-white hover:text-orange-500 transition-all duration-300 font-medium text-lg hover:translate-x-2"
              onClick={() => setIsMenuOpen(false)}
            >
              TRAINERS
            </a>
            <a
              href="#transformations"
              className="block text-white hover:text-orange-500 transition-all duration-300 font-medium text-lg hover:translate-x-2"
              onClick={() => setIsMenuOpen(false)}
            >
              TRANSFORMATIONS
            </a>
            <a
              href="#contact"
              className="block text-white hover:text-orange-500 transition-all duration-300 font-medium text-lg hover:translate-x-2"
              onClick={() => setIsMenuOpen(false)}
            >
              CONTACT
            </a>
            <div className="pt-4">
              <button
                className="w-full relative overflow-hidden bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-3 font-bold uppercase tracking-wide rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/25 hover:scale-105 active:scale-95 group"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="relative z-10">Join Us</span>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

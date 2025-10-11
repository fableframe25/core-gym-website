import { useState, useEffect } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Original Header - only visible when not scrolled */}
      {!isScrolled && (
        <header className="absolute top-0 left-0 right-0 z-50">
          <nav className="flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
            {/* Logo */}
            <div className="flex items-center">
              <h1 className="text-xl sm:text-2xl font-bold text-white">
                Gym<span className="text-red-500">.</span>
              </h1>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              <a
                href="#hero"
                className="text-white hover:text-red-500 transition-colors font-medium text-sm xl:text-base"
              >
                HOME
              </a>
              <a
                href="#about"
                className="text-white hover:text-red-500 transition-colors font-medium text-sm xl:text-base"
              >
                ABOUT
              </a>
              <a
                href="#offers"
                className="text-white hover:text-red-500 transition-colors font-medium text-sm xl:text-base"
              >
                PRICING
              </a>
              <a
                href="#gallery"
                className="text-white hover:text-red-500 transition-colors font-medium text-sm xl:text-base"
              >
                GALLERY
              </a>
              <a
                href="#trainers"
                className="text-white hover:text-red-500 transition-colors font-medium flex items-center text-sm xl:text-base"
              >
                TRAINERS
                <svg
                  className="w-3 h-3 xl:w-4 xl:h-4 ml-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="#transformations"
                className="text-white hover:text-red-500 transition-colors font-medium flex items-center text-sm xl:text-base"
              >
                TRANSFORMATIONS
                <svg
                  className="w-3 h-3 xl:w-4 xl:h-4 ml-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="#contact"
                className="text-white hover:text-red-500 transition-colors font-medium text-sm xl:text-base"
              >
                CONTACT
              </a>
            </div>

            {/* Desktop Join Us Button */}
            <button
              className="hidden sm:block text-white px-4 sm:px-6 py-2 text-sm sm:text-base font-semibold transition-colors"
              style={{ backgroundColor: "#FE9900" }}
              onMouseEnter={(e) =>
                ((e.target as HTMLButtonElement).style.backgroundColor = "#E6850E")
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLButtonElement).style.backgroundColor = "#FE9900")
              }
            >
              JOIN US
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-white p-2"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </nav>
        </header>
      )}
      
      {/* Floating Navbar - appears when scrolled */}
      {isScrolled && (
        <header className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 ease-in-out">
          <nav className="flex items-center justify-center px-4 sm:px-6 py-3 sm:py-4 bg-black/80 backdrop-blur-md rounded-3xl border border-white/10 shadow-2xl w-fit max-w-xs sm:max-w-sm">
            {/* Icon-only Navigation Links */}
            <div className="flex items-center space-x-4 sm:space-x-6">
              {/* Home Icon */}
              <a
                href="#hero"
                className="text-white hover:text-red-500 transition-colors p-2"
                title="Home"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </a>

              {/* About Icon */}
              <a
                href="#about"
                className="text-white hover:text-red-500 transition-colors p-2"
                title="About"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </a>

              {/* Pricing Icon */}
              <a
                href="#offers"
                className="text-white hover:text-red-500 transition-colors p-2"
                title="Pricing"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </a>

              {/* Gallery Icon */}
              <a
                href="#gallery"
                className="text-white hover:text-red-500 transition-colors p-2"
                title="Gallery"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </a>

              {/* Contact Icon */}
              <a
                href="#contact"
                className="text-white hover:text-red-500 transition-colors p-2"
                title="Contact"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>

              {/* Join Us Icon */}
              <button
                className="text-white hover:text-red-500 transition-colors p-2 rounded-xl"
                title="Join Us"
                style={{ backgroundColor: "#FE9900" }}
                onMouseEnter={(e) =>
                  ((e.target as HTMLButtonElement).style.backgroundColor = "#E6850E")
                }
                onMouseLeave={(e) =>
                  ((e.target as HTMLButtonElement).style.backgroundColor = "#FE9900")
                }
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                </svg>
              </button>
            </div>
          </nav>
        </header>
      )}

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          className={`lg:hidden fixed backdrop-blur-md border border-white/10 shadow-2xl transition-all duration-300 z-[60] ${
            isScrolled 
              ? 'bottom-20 left-1/2 transform -translate-x-1/2 rounded-3xl w-fit max-w-sm' 
              : 'top-20 left-1/2 transform -translate-x-1/2 rounded-3xl w-fit max-w-sm'
          }`}
          style={{ backgroundColor: "rgba(0, 0, 0, 0.8)" }}
        >
          <div className="px-6 py-6 space-y-4 text-center">
            <a
              href="#hero"
              className="block text-white hover:text-red-500 transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              HOME
            </a>
            <a
              href="#about"
              className="block text-white hover:text-red-500 transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              ABOUT
            </a>
            <a
              href="#offers"
              className="block text-white hover:text-red-500 transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              PRICING
            </a>
            <a
              href="#gallery"
              className="block text-white hover:text-red-500 transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              GALLERY
            </a>
            <a
              href="#trainers"
              className="block text-white hover:text-red-500 transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              TRAINERS
            </a>
            <a
              href="#transformations"
              className="block text-white hover:text-red-500 transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              TRANSFORMATIONS
            </a>
            <a
              href="#contact"
              className="block text-white hover:text-red-500 transition-colors font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              CONTACT
            </a>
            <button
              className="w-full text-white px-6 py-3 font-semibold transition-colors rounded-xl"
              style={{ backgroundColor: "#FE9900" }}
              onMouseEnter={(e) =>
                ((e.target as HTMLButtonElement).style.backgroundColor =
                  "#E6850E")
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLButtonElement).style.backgroundColor =
                  "#FE9900")
              }
              onClick={() => setIsMenuOpen(false)}
            >
              JOIN US
            </button>
          </div>
        </div>
      )}
    </>
  );
}

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
      {/* Fixed Header - always visible at top */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        isScrolled 
          ? 'bg-black/90 backdrop-blur-md border-b border-white/10 shadow-lg' 
          : 'bg-transparent'
      }`}>
        <nav className="flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-xl sm:text-2xl font-bold text-white">
              Core Gym<span className="text-red-500">.</span>
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

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          className="lg:hidden fixed top-20 left-1/2 transform -translate-x-1/2 backdrop-blur-md border border-white/10 shadow-2xl transition-all duration-300 z-[60] rounded-3xl w-fit max-w-sm"
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

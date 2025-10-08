import { useState } from 'react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
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
          <a href="#" className="text-white hover:text-red-500 transition-colors font-medium text-sm xl:text-base">HOME</a>
          <a href="#" className="text-white hover:text-red-500 transition-colors font-medium text-sm xl:text-base">ABOUT</a>
          <a href="#" className="text-white hover:text-red-500 transition-colors font-medium text-sm xl:text-base">PRICING</a>
          <a href="#" className="text-white hover:text-red-500 transition-colors font-medium text-sm xl:text-base">GALLERY</a>
          <a href="#" className="text-white hover:text-red-500 transition-colors font-medium flex items-center text-sm xl:text-base">
            PAGES
            <svg className="w-3 h-3 xl:w-4 xl:h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
          <a href="#" className="text-white hover:text-red-500 transition-colors font-medium flex items-center text-sm xl:text-base">
            BLOG
            <svg className="w-3 h-3 xl:w-4 xl:h-4 ml-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
          <a href="#" className="text-white hover:text-red-500 transition-colors font-medium text-sm xl:text-base">CONTACT</a>
        </div>
        
        {/* Desktop Join Us Button */}
        <button className="hidden sm:block text-white px-4 sm:px-6 py-2 text-sm sm:text-base font-semibold transition-colors"
                style={{backgroundColor: '#FE9900'}}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#E6850E'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#FE9900'}>
          JOIN US
        </button>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden text-white p-2"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 backdrop-blur-sm border-t border-white/10" style={{backgroundColor: 'rgba(254, 153, 0, 0.9)'}}>
          <div className="px-4 py-6 space-y-4">
            <a href="#" className="block text-white hover:text-red-500 transition-colors font-medium">HOME</a>
            <a href="#" className="block text-white hover:text-red-500 transition-colors font-medium">ABOUT</a>
            <a href="#" className="block text-white hover:text-red-500 transition-colors font-medium">PRICING</a>
            <a href="#" className="block text-white hover:text-red-500 transition-colors font-medium">GALLERY</a>
            <a href="#" className="block text-white hover:text-red-500 transition-colors font-medium">PAGES</a>
            <a href="#" className="block text-white hover:text-red-500 transition-colors font-medium">BLOG</a>
            <a href="#" className="block text-white hover:text-red-500 transition-colors font-medium">CONTACT</a>
            <button className="w-full text-white px-6 py-3 font-semibold transition-colors"
                    style={{backgroundColor: '#FE9900'}}
                    onMouseEnter={(e) => e.target.style.backgroundColor = '#E6850E'}
                    onMouseLeave={(e) => e.target.style.backgroundColor = '#FE9900'}>
              JOIN US
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

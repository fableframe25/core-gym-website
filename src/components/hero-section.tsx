import { useState, useEffect } from 'react';

export function HeroSection() {
  const [isPortrait, setIsPortrait] = useState(false);

  useEffect(() => {
    const checkOrientation = () => {
      setIsPortrait(window.innerHeight > window.innerWidth);
    };

    // Check on mount
    checkOrientation();

    // Listen for resize events
    window.addEventListener('resize', checkOrientation);
    window.addEventListener('orientationchange', checkOrientation);

    return () => {
      window.removeEventListener('resize', checkOrientation);
      window.removeEventListener('orientationchange', checkOrientation);
    };
  }, []);

  const heroContent = {
    title: "TRANSFORM YOUR",
    subtitle: "LIFESTYLE",
    title2: "ACHIEVE YOUR",
    subtitle2: "GOALS"
  };

  return (
    <div id="hero" className="relative min-h-screen text-white overflow-hidden">
      {/* Background with Dark Gradient */}
      <div 
        className="absolute inset-0 bg-gradient-to-r from-gray-900 via-black to-black"
        style={{ minHeight: "100vh" }}
      />
      
      {/* Hero Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: isPortrait 
            ? "url('/hero2_protrait.jpg')"
            : "url('/hero2.jpg')",
          filter: "brightness(0.7) contrast(1.1)",
          minHeight: "100vh"
        }}
      />
      
      {/* Orange Glow Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-900/10 via-orange-800/15 to-orange-900/10" />
      
      {/* Faded EVERFITNESS Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <span className="text-9xl font-black text-white/5 tracking-widest select-none">EVERFITNESS</span>
      </div>
      
      {/* Main Content Container */}
      <div className="relative z-10 grid grid-cols-1 items-center gap-8 min-h-screen px-6 lg:px-12 max-w-7xl mx-auto pt-24 pb-16">
        {/* Left Side - Text Content */}
        <div className="max-w-2xl">
          <div className="mb-8">
            <h1 className="text-5xl lg:text-7xl xl:text-8xl font-black tracking-wider mb-2">
              <span className="block">{heroContent.title}</span>
              <span className="block text-white">{heroContent.subtitle}</span>
            </h1>
            <h1 className="text-5xl lg:text-7xl xl:text-8xl font-black tracking-wider">
              <span className="block">{heroContent.title2}</span>
              <span className="block text-white">{heroContent.subtitle2}</span>
            </h1>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <button 
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-bold tracking-wider rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              TRY FOR FREE
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            <button 
              className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-4 text-lg font-bold tracking-wider rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              SCHEDULE TIME
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </button>
          </div>
          
          {/* Social Proof */}
          <div className="flex items-center gap-3">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="w-8 h-8 rounded-full bg-gray-600 border-2 border-white"></div>
              ))}
            </div>
            <span className="text-white font-medium">10,000+ Active members</span>
          </div>
        </div>
        
        {/* Right side stats removed as requested */}
      </div>
      
      
      {/* Bottom benefits removed as requested */}
    </div>
  );
}

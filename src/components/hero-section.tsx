const HeroSection = () => {
  return (
    <>
      {/* Mobile Layout (Updated) */}
      <section className="lg:hidden relative min-h-screen bg-black overflow-hidden flex items-center justify-center">
        {/* Darker orange gradients on left and right sides */}
        <div className="absolute left-0 top-1/4 w-1/3 h-1/2 bg-gradient-to-r from-orange-900/30 via-orange-800/20 to-transparent blur-2xl"></div>
        <div className="absolute right-0 top-1/4 w-1/3 h-1/2 bg-gradient-to-l from-orange-900/30 via-orange-800/20 to-transparent blur-2xl"></div>

        {/* Hero image - properly centered */}
        <div className="absolute left-1/2 top-2/5 sm:top-1/2 md:top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
          <div className="relative">
            <img 
              src="/hero_final.png" 
              alt="Fitness trainer with dumbbells" 
              className="w-64 sm:w-80 md:w-96 h-auto object-contain drop-shadow-2xl"
            />
            {/* Subtle glow effect around the image */}
            <div className="absolute inset-0 bg-orange-500/10 rounded-full blur-3xl scale-110"></div>
          </div>
        </div>

        {/* Centered headline text - properly centered */}
        <div className="absolute top-1/3 sm:top-2/5 md:top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 text-center w-full px-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight tracking-tight uppercase">
            <span className="block text-white drop-shadow-lg">
              SCULPT <span className="text-orange-500">YOUR</span> BODY,
            </span>
            <span className="block text-white drop-shadow-lg mt-1 sm:mt-2">
              ELEVATE <span className="text-orange-500">YOUR</span> SPIRIT
            </span>
          </h1>
        </div>

        {/* Bottom section - centered vertical layout for mobile */}
        <div className="absolute bottom-0 left-0 right-0 z-30 pb-8 sm:pb-10 md:pb-12 px-4 sm:px-6 md:px-8">
          <div className="flex flex-col items-center space-y-6">
            {/* Social Proof - centered */}
            <div className="flex flex-col items-center">
              <div className="flex -space-x-1 mb-2">
                <img src="/fitness-member-1.jpg" alt="Member" className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full border-2 border-white object-cover" />
                <img src="/fitness-member-2.jpg" alt="Member" className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full border-2 border-white object-cover" />
                <img src="/fitness-member-3.jpg" alt="Member" className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full border-2 border-white object-cover" />
                <img src="/fitness-member-4.jpg" alt="Member" className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full border-2 border-white object-cover" />
                <img src="/placeholder-user.jpg" alt="Member" className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full border-2 border-white object-cover" />
              </div>
              <p className="text-white text-xs sm:text-sm md:text-base text-center">
                <span className="text-orange-500 font-bold text-sm sm:text-base md:text-lg">10,000+</span> Active members
              </p>
            </div>

            {/* Buttons - centered */}
            <div className="flex flex-col items-center space-y-2 w-full max-w-xs">
              <button className="w-full bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full font-bold text-xs sm:text-sm md:text-base flex items-center justify-center space-x-2 transition-colors">
                <span>TRY FOR FREE</span>
                <span>→</span>
              </button>
              <button className="w-full bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full font-bold text-xs sm:text-sm md:text-base flex items-center justify-center space-x-2 transition-colors">
                <span>SCHEDULE TIME</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Desktop Layout (Unchanged) */}
      <section className="hidden lg:block relative min-h-screen bg-black overflow-hidden flex items-center justify-center">
        {/* Darker orange gradients on left and right sides with reduced height */}
        <div className="absolute left-0 top-1/4 w-1/3 h-1/2 bg-gradient-to-r from-orange-900/30 via-orange-800/20 to-transparent blur-2xl"></div>
        <div className="absolute right-0 top-1/4 w-1/3 h-1/2 bg-gradient-to-l from-orange-900/30 via-orange-800/20 to-transparent blur-2xl"></div>

        {/* Hero image */}
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
          <div className="relative">
            <img 
              src="/hero_final.png" 
              alt="Fitness trainer with dumbbells" 
              className="w-[500px] xl:w-[600px] h-auto object-contain drop-shadow-2xl"
            />
            {/* Subtle glow effect around the image */}
            <div className="absolute inset-0 bg-orange-500/10 rounded-full blur-3xl scale-110"></div>
          </div>
        </div>

        {/* Centered headline text */}
        <div className="absolute top-40 left-1/2 transform -translate-x-1/2 z-10 text-center w-full px-4">
          <h1 className="text-7xl xl:text-9xl font-black leading-tight tracking-tight uppercase">
            <span className="block text-white drop-shadow-lg">
              SCULPT <span className="text-orange-500">YOUR</span> BODY,
            </span>
            <span className="block text-white drop-shadow-lg mt-4">
              ELEVATE <span className="text-orange-500">YOUR</span> SPIRIT
            </span>
          </h1>
        </div>

        {/* Left side - Social Proof */}
        <div className="absolute left-40 xl:left-80 bottom-32 z-10">
          <div className="flex -space-x-1 mb-2">
            <img src="/fitness-member-1.jpg" alt="Member" className="w-12 h-12 rounded-full border-2 border-white object-cover" />
            <img src="/fitness-member-2.jpg" alt="Member" className="w-12 h-12 rounded-full border-2 border-white object-cover" />
            <img src="/fitness-member-3.jpg" alt="Member" className="w-12 h-12 rounded-full border-2 border-white object-cover" />
            <img src="/fitness-member-4.jpg" alt="Member" className="w-12 h-12 rounded-full border-2 border-white object-cover" />
            <img src="/placeholder-user.jpg" alt="Member" className="w-12 h-12 rounded-full border-2 border-white object-cover" />
          </div>
          <p className="text-white text-base">
            <span className="text-orange-500 font-bold text-lg">10,000+</span> Active members
          </p>
        </div>

        {/* Right side - Buttons */}
        <div className="absolute right-40 xl:right-80 bottom-32 z-10 space-y-2">
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-bold text-base flex items-center space-x-2 transition-colors">
            <span>TRY FOR FREE</span>
            <span>→</span>
          </button>
          <button className="bg-gray-700 hover:bg-gray-600 text-white px-8 py-4 rounded-full font-bold text-base flex items-center space-x-2 transition-colors">
            <span>SCHEDULE TIME</span>
          </button>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
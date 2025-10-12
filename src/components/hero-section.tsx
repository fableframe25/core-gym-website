const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative h-screen bg-[#1a120e] overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/one.jpg"
          alt="Modern gym with person exercising"
          className="w-full h-full object-cover filter sepia saturate-200 hue-rotate-10"
        />
  <div className="absolute inset-0 bg-[#1a120e]/50"></div>

        {/* Dotted pattern overlay - bottom */}
  <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#1a120e]/40 via-[#1a120e]/20 to-transparent"></div>
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

            {/* CTA Button */}
            <div className="mt-12">
              <button className="bg-orange-600 hover:bg-orange-700 text-white font-bold px-4 py-2 uppercase tracking-wider transition-all duration-300 transform shadow-lg rounded-full">
                START TODAY →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Desktop Layout (Unchanged) */}
      <section className="hidden lg:block relative min-h-screen bg-[#1a120e] overflow-hidden flex items-center justify-center">
        {/* Darker orange gradients on left and right sides with reduced height */}
        <div className="absolute left-0 top-1/4 w-1/3 h-1/2 bg-gradient-to-r from-orange-900/30 via-orange-800/20 to-transparent blur-2xl"></div>
        <div className="absolute right-0 top-1/4 w-1/3 h-1/2 bg-gradient-to-l from-orange-900/30 via-orange-800/20 to-transparent blur-2xl"></div>

      {/* Decorative dots removed per request */}
    </section>
  );
};

export default HeroSection;
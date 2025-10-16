const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative h-screen bg-[#1a120e] overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/new_gym.jpg"
          alt="Modern gym with person exercising"
          className="w-full h-full object-cover filter sepia saturate-200 hue-rotate-10"
        />
        <div className="absolute inset-0 bg-[#1a120e]/40"></div>

        {/* Dotted pattern overlay - bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#1a120e]/100 via-[#1a120e]/60 to-transparent"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 h-screen flex items-center">
        <div className="w-full max-w-4xl">
          {/* Main Headline */}
          <div className="text-left">
            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-8">
              <span
                className="block text-white font-bold"
                style={{
                  fontFamily: '"Great Vibes", cursive',
                  fontWeight: 700,
                  fontStyle: "normal",
                }}
              >
                Club
              </span>
              <span
                className="block text-orange-600 font-bold"
                style={{
                  fontFamily: '"Great Vibes", cursive',
                  fontWeight: 700,
                  fontStyle: "normal",
                }}
              >
                The Ultimate
              </span>
              <span className="block text-white font-black tracking-wider">
                TRAINING
              </span>
            </h1>

            {/* CTA Button */}
            <div className="mt-12">
              <button className="bg-orange-600 hover:bg-orange-700 text-white font-bold px-4 py-2 uppercase tracking-wider transition-all duration-300 transform shadow-lg rounded-full">
                START TODAY →
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative dots removed per request */}
    </section>
  );
};

export default HeroSection;

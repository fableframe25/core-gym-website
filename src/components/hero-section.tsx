const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative h-screen bg-[#2a1a0c] overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        {/* Mobile Image */}
        <img
          src="/mobile.jpg"
          alt="Modern gym with person exercising"
          className="md:hidden w-full h-full object-cover brightness-115 saturate-125"
        />
        {/* Desktop Image */}
        <img
          src="/new_gym.jpg"
          alt="Modern gym with person exercising"
          className="hidden md:block w-full h-full object-cover brightness-115 saturate-125"
        />
        {/* Further reduced overlay to allow more image brightness */}
        <div className="absolute inset-0 bg-[#2a1a0c]/40"></div>

        {/* Dotted pattern overlay - bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#2a1a0c]/90 via-[#2a1a0c]/50 to-transparent"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 h-screen flex md:items-center items-end pb-16">
        <div className="w-full max-w-4xl">
          {/* Main Headline */}
          {/* Left-aligned text on all screen sizes */}
          <div className="text-left">
            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-8">
              <span
                className="block text-white font-extrabold"
                style={{
                  fontFamily: '"Great Vibes", cursive',
                  fontWeight: 800,
                  fontStyle: "normal",
                  textShadow:
                    "2px 2px 4px rgba(0,0,0,0.6), -2px -2px 4px rgba(0,0,0,0.6)",
                }}
              >
                Fitness
              </span>
              <span
                className="block font-extrabold text-[#e66a00] md:text-white"
                style={{
                  fontFamily: '"Great Vibes", cursive',
                  fontWeight: 800,
                  fontStyle: "normal",
                  textShadow:
                    "2px 2px 4px rgba(0,0,0,0.6), -2px -2px 4px rgba(0,0,0,0.6)",
                }}
              >
                That Fits
              </span>
              <span
                className="block text-white font-extrabold tracking-wider"
                style={{
                  textShadow:
                    "2px 2px 4px rgba(0,0,0,0.6), -2px -2px 4px rgba(0,0,0,0.6)",
                }}
              >
                Your Life
              </span>
            </h1>

            {/* CTA Butt6x */}
            <div className="mt-12"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;


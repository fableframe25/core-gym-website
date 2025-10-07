import { useState } from 'react';

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      backgroundImage: "url('/hero.jpg')",
      title: "BUILD UP YOUR",
      subtitle: "BODY SHAPE",
      description: "Build Your Body and Fitness with Professional Touch"
    },
    {
      backgroundImage: "url('/hero2.jpg')",
      title: "TRANSFORM YOUR",
      subtitle: "LIFESTYLE",
      description: "Achieve Your Fitness Goals with Expert Guidance"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover sm:bg-cover md:bg-cover lg:bg-cover xl:bg-cover bg-center bg-no-repeat transition-all duration-1000 ease-in-out"
        style={{
          backgroundImage: slides[currentSlide].backgroundImage,
          filter: "brightness(0.6) contrast(1.1)",
          minHeight: "100vh",
          width: "100%"
        }}
      />
      
      {/* Red Glow Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-red-900/10 via-red-600/15 to-red-900/10" />
      
      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen text-center px-4 py-20">
        <div className="max-w-5xl w-full">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mb-2 sm:mb-4 tracking-[0.2em] text-red-300 transition-all duration-1000 ease-in-out">
            {slides[currentSlide].title}
          </h2>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-4 sm:mb-6 tracking-[0.3em] text-white transition-all duration-1000 ease-in-out">
            {slides[currentSlide].subtitle}
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-8 sm:mb-10 text-white font-light max-w-3xl mx-auto leading-relaxed transition-all duration-1000 ease-in-out">
            {slides[currentSlide].description}
          </p>
          <button className="bg-red-600 hover:bg-red-700 text-white px-10 sm:px-12 py-4 sm:py-5 text-lg sm:text-xl font-bold tracking-wider transition-colors rounded-sm">
            JOIN US
          </button>
        </div>
      </div>
      
      {/* Slider Navigation Arrows */}
      <button 
        onClick={prevSlide}
        className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-2 sm:p-3 rounded-full transition-colors"
      >
        <svg className="w-4 h-4 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-2 sm:p-3 rounded-full transition-colors"
      >
        <svg className="w-4 h-4 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
      
      {/* Slide Indicators */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-10 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors ${
              index === currentSlide ? 'bg-red-600' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </section>
  );
}

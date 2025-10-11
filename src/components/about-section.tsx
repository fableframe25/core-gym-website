import { useRef, useEffect } from 'react';

export default function AboutSection() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Video is visible - unmute and play
            video.muted = false;
            video.play().catch(console.error);
          } else {
            // Video is not visible - mute and pause
            video.muted = true;
            video.pause();
          }
        });
      },
      {
        threshold: 0.5, // Trigger when 50% of video is visible
        rootMargin: '0px 0px -10% 0px' // Start before completely out of view
      }
    );

    observer.observe(video);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section id="about" className="relative bg-black font-sans px-4 py-16 md:py-24">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side - Image Collage */}
          <div className="relative w-full max-w-lg mx-auto mt-12 lg:mt-0 pb-20 lg:pb-0">
            {/* Main Video */}
            <div className="relative rounded-lg overflow-hidden shadow-2xl">
              <video 
                ref={videoRef}
                src="/feedback.mp4"
                className="w-full h-[550px] object-cover rounded-lg"
                controls
                muted
                loop
                playsInline
                preload="metadata"
              >
                Your browser does not support the video tag.
              </video>
            </div>
            
            {/* Angled Image 1 - Top Right */}
            <div className="absolute -top-6 right-4 w-44 h-28 overflow-hidden transform rotate-[12deg] shadow-lg border-2 border-white">
              <img 
                src="/gymgallery5.jpg"
                alt="Gym gallery" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Angled Image 2 - Bottom Right */}
            <div className="absolute bottom-4 lg:-bottom-8 right-8 w-40 h-24 overflow-hidden transform rotate-[12deg] shadow-lg border-2 border-white">
              <img 
                src="/gymgallery8.jpg"
                alt="Gym gallery" 
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Experience Overlay */}
            <div className="absolute bottom-2 lg:-bottom-4 -left-4 bg-orange-500 rounded-lg px-5 py-3 shadow-2xl">
              <div className="flex items-center gap-3">
                <span className="text-3xl font-extrabold text-white">25+</span>
                <span className="text-white text-xs font-bold leading-tight">
                  YEARS OF FITNESS<br />EXPERIENCE
                </span>
              </div>
            </div>
          </div>
          
          {/* Right Side - Content */}
          <div className="text-white">
            {/* Section Title */}
            <div className="mb-6">
              <div className="inline-block bg-orange-500 rounded-lg px-4 py-2 mb-2">
                <h3 className="text-sm font-bold text-white">ABOUT COMPANY</h3>
              </div>
            </div>
            
            {/* Main Heading */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight uppercase">
              DEDICATED TO<br />IGNITING YOUR<br />
              <span className="bg-gradient-to-b from-orange-400 to-orange-600 bg-clip-text text-transparent text-5xl md:text-6xl lg:text-7xl drop-shadow-lg">
                FITNESS HEALTH
              </span>
            </h2>
            
            {/* Description */}
            <p className="text-gray-400 text-base md:text-lg mb-8 leading-relaxed">
              Quam elementum nullam quas duis, natus tempus, sunt habitant sunt beatae! 
              Aptent enim dolorem aliquet saepe aliquam donec. Dignissimos voluptatum 
              officiis dolorem.
            </p>
            
            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-white font-semibold">MODERN FACILITIES</span>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-white font-semibold">EXPERT TEAM</span>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-white font-semibold">DIVERSE OFFERING</span>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-white font-semibold">FITNESS FOCUS</span>
              </div>
            </div>
            
            {/* Call to Action Button */}
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-xl flex items-center gap-2 transition-all duration-300 transform hover:scale-105 shadow-lg">
              MORE ABOUT US
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}


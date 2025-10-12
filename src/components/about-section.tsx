import { useRef, useEffect, useState } from "react";

export default function AboutSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    video.addEventListener('play', handlePlay);
    video.addEventListener('pause', handlePause);

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
        rootMargin: "0px 0px -10% 0px", // Start before completely out of view
      }
    );

    observer.observe(video);

    return () => {
      observer.disconnect();
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('pause', handlePause);
    };
  }, []);

  return (
    <section
      id="about"
      className="relative bg-black font-sans px-4 py-16 md:py-24"
    >
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Image Collage */}
          <div className="relative w-full max-w-lg mx-auto mt-12 lg:mt-0 pb-20 lg:pb-0">
            {/* Main Video */}
            <div className="relative rounded-lg overflow-hidden shadow-2xl group">
              <video
                ref={videoRef}
                src="/feedback.mp4"
                className="w-full h-[550px] object-cover rounded-lg"
                muted
                loop
                playsInline
                preload="metadata"
              >
               
              </video>
              
              {/* Custom Play/Pause Button in Center */}
              <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                <button 
                  className={`bg-orange-500/80 hover:bg-orange-600/90 text-white rounded-full p-6 transition-all duration-300 transform hover:scale-110 shadow-2xl pointer-events-auto ${isPlaying ? 'opacity-0 group-hover:opacity-100' : 'opacity-100'}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    togglePlayPause();
                  }}
                >
                  {isPlaying ? (
                    // Pause Icon
                    <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
                    </svg>
                  ) : (
                    // Play Icon
                    <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  )}
                </button>
              </div>
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
                <span className="text-3xl font-extrabold text-white">HAPPY CLIENT</span>
                <span className="text-white text-xs font-bold leading-tight">
                 
                  <br />
                  
                </span>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="text-white">
            {/* Themed heading with styled label */}
            <div className="text-left mb-6">
              <div className="inline-block mb-4">
                <span
                  className="text-black px-6 py-2 text-xs font-black uppercase tracking-widest"
                  style={{
                    backgroundColor: "#F97316",
                    borderRadius: "12px 12px 15px 5px / 10px 10px 15px 8px",
                    display: "inline-block",
                    lineHeight: "1.5",
                    clipPath:
                      "polygon(0% 0%, 95% 0%, 100% 30%, 100% 100%, 5% 100%, 0% 70%)",
                  }}
                >
                  About
                </span>
              </div>
              <h2 className="text-4xl font-bold text-left mb-6 tracking-wide">
                <span className="relative inline-block">
                  <span className="border-b-4 border-orange-500 pb-1">About</span>
                </span>{" "}
                <span>
                  <span className="text-orange-500">U</span>s
                </span>
              </h2>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 leading-tight uppercase">
              THE BEST GYM IN
              <br />
              <span className="bg-gradient-to-b from-orange-400 to-orange-600 bg-clip-text text-transparent text-4xl md:text-5xl lg:text-6xl drop-shadow-lg">
                NORTH 24 PARGANAS
              </span>
            </h2>

            {/* Description */}
            <p className="text-gray-400 text-base md:text-lg mb-8 leading-relaxed">
              First international standard gym with 4,500 sq ft of premium fitness space. 
              Equipped with over 2,500 kgs of free weights, modern dumbbells, Olympic gear, 
              and top global brand machines for strength training and cardio.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center shrink-0">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="text-white font-semibold">
                  FULLY AIR-CONDITIONED
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center shrink-0">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="text-white font-semibold">TOP GLOBAL BRANDS</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center shrink-0">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="text-white font-semibold">
                  INDOOR RUNNING TRACK
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center shrink-0">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="text-white font-semibold">ZUMBA & FUNCTIONAL ROOM</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center shrink-0">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="text-white font-semibold">SEPARATE MEN & WOMEN AREAS</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center shrink-0">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="text-white font-semibold">CLEAN WASHROOMS & SHOWERS</span>
              </div>
            </div>

            {/* Call to Action Button */}
            {/* <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-4 rounded-xl flex items-center gap-2 transition-all duration-300 transform hover:scale-105 shadow-lg">
              MORE ABOUT US
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </button> */}
          </div>
        </div>
      </div>
    </section>
  );
}

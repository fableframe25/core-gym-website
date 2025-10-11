import { useState } from "react";

export function TransformationSection() {
  const transformations = [
    {
      before: "/transform1before.jpg",
      after: "/transform1after.jpg",
      title: "SHREDDED IN 6 MONTHS",
      description:
        "Dropped 30 pounds. Built discipline. Earned confidence. No gimmicks — just raw grind.",
    },
    {
      before: "/gymgallery1.jpg",
      after: "/gymgallery2.jpg",
      title: "MUSCLE GAIN JOURNEY",
      description:
        "Grew stronger every day. Fueled by sweat, not shortcuts. Built to last.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const nextStory = () => setCurrentIndex((p) => (p + 1) % transformations.length);
  const prevStory = () =>
    setCurrentIndex((p) => (p === 0 ? transformations.length - 1 : p - 1));

  return (
    <section id="transformations" className="relative py-20 bg-black text-white overflow-hidden">
      {/* Gritty background textures */}
      <div className="absolute inset-0 bg-[url('/grain-texture.png')] opacity-10 mix-blend-overlay"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black via-zinc-900 to-black opacity-95"></div>

      {/* Background motivational words */}
      <div className="absolute inset-0 text-white/5 font-black uppercase tracking-[0.25em] select-none">
        <div className="absolute top-16 left-6 text-8xl rotate-[-5deg]">NO LIMITS</div>
        <div className="absolute bottom-24 right-10 text-9xl rotate-[6deg]">GRIND</div>
        <div className="absolute top-1/2 left-1/3 -rotate-12 text-[10rem] leading-none">
          FOCUS
        </div>
        <div className="absolute bottom-10 left-1/4 rotate-[4deg] text-7xl">BEAST</div>
      </div>

      {/* Right industrial metal element */}
      <div className="hidden md:flex absolute top-0 right-0 h-full items-center justify-end pr-16 pointer-events-none">
        <div className="relative w-48 h-[80%] flex flex-col justify-between">
          {/* Unique hanging chain */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 flex flex-col items-center space-y-1">
            {[...Array(10)].map((_, i) => (
              <div
                key={i}
                className={`w-3 h-5 border-2 border-gray-600 rounded-full shadow-inner ${i % 2 === 0 ? 'rotate-12' : '-rotate-12'
                  }`}
              ></div>
            ))}
            {/* Small bolt at bottom */}
            <div className="w-4 h-4 bg-gray-700 rounded-full shadow-md mt-2"></div>
          </div>
        </div>
      </div>


      <div className="relative container mx-auto px-4 z-10">
        <h2 className="text-3xl md:text-5xl font-black text-center mb-16 tracking-[0.25em]">
          <span className="text-white">Raw</span>{" "}
          <span className="text-zinc-400">Transformations</span>
        </h2>

        {/* Desktop layout */}
        <div className="hidden md:flex flex-col gap-24">
          {transformations.map((story, idx) => (
            <div
              key={idx}
              className={`flex flex-col md:flex-row items-center justify-center gap-10`}
            >
              {/* Photos section */}
              <div className="relative flex items-center -space-x-8 grayscale">
                <div className="relative rotate-3 overflow-hidden shadow-[0_0_40px_-10px_rgba(255,255,255,0.15)]">
                  <img
                    src={story.before}
                    alt="Before"
                    className="w-80 h-[28rem] object-cover brightness-[0.7] contrast-[1.1]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                  <div className="absolute bottom-0 left-0 w-full h-[6px] bg-gradient-to-r from-white via-zinc-300 to-transparent"></div>
                  <span className="absolute top-3 left-3 text-[12px] uppercase bg-white/15 backdrop-blur-sm px-3 py-[2px] tracking-widest">
                    Before
                  </span>
                </div>

                <div className="relative rotate-3 overflow-hidden shadow-[0_0_40px_-10px_rgba(255,255,255,0.2)] -translate-y-2">
                  <img
                    src={story.after}
                    alt="After"
                    className="w-80 h-[28rem] object-cover brightness-[1.1] contrast-[1.3]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  <div className="absolute bottom-0 left-0 w-full h-[6px] bg-gradient-to-r from-white via-zinc-300 to-transparent"></div>
                  <span className="absolute top-3 left-3 text-[12px] uppercase bg-white text-black px-3 py-[2px] tracking-widest">
                    After
                  </span>
                </div>
              </div>

              {/* Text content */}
              <div className="md:w-[40%]">
                <h3 className="text-3xl font-extrabold uppercase mb-3 tracking-[0.15em] text-white">
                  {story.title}
                </h3>
                <div className="h-[3px] w-20 bg-white mb-4"></div>
                <p className="text-gray-300 text-lg leading-relaxed max-w-md">
                  {story.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Divider quote */}
        <div className="hidden md:block text-center my-16">
          <p className="text-gray-500 uppercase tracking-[0.3em] text-sm">
            “Train insane or remain the same.”
          </p>
          <div className="mx-auto mt-4 h-[2px] w-48 bg-gradient-to-r from-transparent via-zinc-400 to-transparent"></div>
        </div>

        {/* Mobile layout */}
        <div className="md:hidden flex flex-col items-center gap-8">
          <div className="flex gap-2 relative grayscale">
            <div className="relative rotate-3 overflow-hidden border border-white/10">
              <img
                src={transformations[currentIndex].before}
                alt="Before"
                className="w-36 h-52 object-cover brightness-[0.7]"
              />
              <div className="absolute bottom-0 left-0 w-full h-[5px] bg-gradient-to-r from-white via-zinc-300 to-transparent"></div>
              <span className="absolute top-2 left-2 bg-white/15 text-white text-[10px] uppercase px-2 py-[1px]">
                Before
              </span>
            </div>

            <div className="relative rotate-3 overflow-hidden border border-white/10 -translate-y-1">
              <img
                src={transformations[currentIndex].after}
                alt="After"
                className="w-36 h-52 object-cover brightness-[1.1] contrast-[1.3]"
              />
              <div className="absolute bottom-0 left-0 w-full h-[5px] bg-gradient-to-r from-white via-zinc-300 to-transparent"></div>
              <span className="absolute top-2 left-2 bg-white text-black text-[10px] uppercase px-2 py-[1px]">
                After
              </span>
            </div>
          </div>

          <div className="text-center mt-2">
            <h3 className="text-2xl font-bold text-white uppercase mb-2 tracking-[0.1em]">
              {transformations[currentIndex].title}
            </h3>
            <p className="text-gray-300 text-base leading-relaxed">
              {transformations[currentIndex].description}
            </p>
          </div>

          <div className="flex gap-4 mt-4">
            <button
              onClick={prevStory}
              className="px-4 py-2 border border-white/30 text-white/80 rounded font-bold text-sm uppercase tracking-wide"
            >
              Prev
            </button>
            <button
              onClick={nextStory}
              className="px-4 py-2 bg-white text-black rounded font-bold text-sm uppercase tracking-wide"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

import { useState } from "react";

export function TransformationSection() {
  const transformations = [
    {
      before: "/transform1before.jpg",
      after: "/transform1after.jpg",
      title: "Shredded in 6 Months",
      description: "Lost 30 pounds and gained confidence through our expert training and nutrition plan.",
    },
    {
      before: "/gymgallery1.jpg",
      after: "/gymgallery2.jpg",
      title: "Muscle Gain Journey",
      description: "Built lean muscle and improved endurance with our personalized strength program.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextStory = () => setCurrentIndex((p) => (p + 1) % transformations.length);
  const prevStory = () =>
    setCurrentIndex((p) => (p === 0 ? transformations.length - 1 : p - 1));

  return (
    <section className="py-20 bg-[#0a0a0a] relative overflow-hidden">
      {/* background texture overlay */}
      <div className="absolute inset-0 bg-[url('/metal-texture.jpg')] bg-cover bg-center opacity-10"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/90"></div>

      <div className="relative container mx-auto px-6 text-white">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-14 tracking-wide">
          <span className="text-orange-500">Real</span> Transformations
        </h2>

        {/* Desktop View */}
        <div className="hidden md:flex flex-col gap-20">
          {transformations.map((story, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div
                key={idx}
                className={`flex flex-col md:flex-row items-center gap-10 ${
                  isEven ? "" : "md:flex-row-reverse"
                }`}
              >
                {/* Image Pair */}
                <div className="flex items-center gap-6 bg-black/40 p-6 rounded-2xl border border-gray-700 shadow-xl">
                  <div className="flex flex-col items-center">
                    <div className="relative">
                      <img
                        src={story.before}
                        alt="Before"
                        className="w-52 h-64 object-cover rounded-xl brightness-75"
                      />
                      <span className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-black/70 px-3 py-1 text-xs font-bold uppercase text-orange-400 rounded">
                        Before
                      </span>
                    </div>
                  </div>

                  <div className="text-orange-500 text-4xl font-bold">→</div>

                  <div className="flex flex-col items-center">
                    <div className="relative">
                      <img
                        src={story.after}
                        alt="After"
                        className="w-52 h-64 object-cover rounded-xl brightness-110"
                      />
                      <span className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-orange-500/90 px-3 py-1 text-xs font-bold uppercase rounded text-black">
                        After
                      </span>
                    </div>
                  </div>
                </div>

                {/* Text Content */}
                <div className="md:w-1/2 text-center md:text-left">
                  <h3 className="text-3xl font-bold mb-3 text-orange-400 uppercase tracking-wider">
                    {story.title}
                  </h3>
                  <p className="text-gray-300 text-lg leading-relaxed max-w-lg mx-auto md:mx-0">
                    {story.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile View */}
        <div className="md:hidden flex flex-col items-center gap-6 bg-black/40 p-6 rounded-2xl border border-gray-700 shadow-xl">
          <div className="flex items-center gap-4">
            <div className="relative">
              <img
                src={transformations[currentIndex].before}
                alt="Before"
                className="w-44 h-52 object-cover rounded-xl brightness-75"
              />
              <span className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-black/70 px-3 py-1 text-xs font-bold uppercase text-orange-400 rounded">
                Before
              </span>
            </div>

            <div className="text-orange-500 text-3xl font-bold">→</div>

            <div className="relative">
              <img
                src={transformations[currentIndex].after}
                alt="After"
                className="w-44 h-52 object-cover rounded-xl brightness-110"
              />
              <span className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-orange-500/90 px-3 py-1 text-xs font-bold uppercase rounded text-black">
                After
              </span>
            </div>
          </div>

          <div className="text-center mt-4">
            <h3 className="text-2xl font-bold text-orange-400 uppercase mb-2">
              {transformations[currentIndex].title}
            </h3>
            <p className="text-gray-300 text-base">
              {transformations[currentIndex].description}
            </p>
          </div>

          <div className="flex gap-4 mt-6">
            <button
              onClick={prevStory}
              className="px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg font-bold text-sm uppercase tracking-wide"
            >
              Prev
            </button>
            <button
              onClick={nextStory}
              className="px-4 py-2 bg-orange-500 hover:bg-orange-600 text-black rounded-lg font-bold text-sm uppercase tracking-wide"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

import { useState } from "react";

export function TransformationSection() {
  const transformations = [
    {
      before: "/gymgallery1.jpg",
      after: "/gymgallery2.jpg",
      title: "Amazing Transformation 1",
      description: "Lost 30 pounds in 6 months with our program!",
    },
    {
      before: "/gymgallery1.jpg",
      after: "/gymgallery2.jpg",
      title: "Amazing Transformation 2",
      description: "Gained muscle and improved endurance in 4 months!",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextStory = () =>
    setCurrentIndex((prev) => (prev + 1) % transformations.length);
  const prevStory = () =>
    setCurrentIndex((prev) =>
      prev === 0 ? transformations.length - 1 : prev - 1
    );

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Success Stories</h2>

        <div className="hidden md:flex flex-col gap-16">
          {transformations.map((story, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div
                key={idx}
                className={`flex flex-col md:flex-row items-center gap-8 ${
                  isEven ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >

                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-4">
                    <div className="flex flex-col gap-2">
                      <img
                        src={story.before}
                        alt={`Before ${story.title}`}
                        className="w-48 h-48 object-cover rounded-lg border-2 border-gray-200"
                      />
                      <span className="text-sm font-bold text-center">Before</span>
                    </div>
                    <div className="text-orange-500 text-3xl font-bold">→</div>
                    <div className="flex flex-col gap-2">
                      <img
                        src={story.after}
                        alt={`After ${story.title}`}
                        className="w-48 h-48 object-cover rounded-lg border-2 border-gray-200"
                      />
                      <span className="text-sm font-bold text-center">After</span>
                    </div>
                  </div>
                </div>


                <div className="md:w-1/2 text-center md:text-left">
                  <h3 className="text-2xl font-semibold mb-2">{story.title}</h3>
                  <p className="text-gray-600">{story.description}</p>
                </div>
              </div>
            );
          })}
        </div>


        <div className="md:hidden flex flex-col items-center gap-6">
          <div className="flex items-center gap-4">
            <div className="flex flex-col gap-2 items-center">
              <img
                src={transformations[currentIndex].before}
                alt={`Before ${transformations[currentIndex].title}`}
                className="w-64 h-64 object-cover rounded-lg border-2 border-gray-200"
              />
              <span className="text-sm font-bold">Before</span>
            </div>

            <div className="text-orange-500 text-3xl font-bold">→</div>

            <div className="flex flex-col gap-2 items-center">
              <img
                src={transformations[currentIndex].after}
                alt={`After ${transformations[currentIndex].title}`}
                className="w-64 h-64 object-cover rounded-lg border-2 border-gray-200"
              />
              <span className="text-sm font-bold">After</span>
            </div>
          </div>

          {/* Text */}
          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-2">
              {transformations[currentIndex].title}
            </h3>
            <p className="text-gray-600">{transformations[currentIndex].description}</p>
          </div>

          {/* Carousel Buttons */}
          <div className="flex gap-4 mt-4">
            <button
              onClick={prevStory}
              className="px-4 py-2 bg-gray-300 rounded-lg font-bold"
            >
              Prev
            </button>
            <button
              onClick={nextStory}
              className="px-4 py-2 bg-orange-500 text-white rounded-lg font-bold"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

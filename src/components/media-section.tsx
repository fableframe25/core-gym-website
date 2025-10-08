
const gymImages1 = [
  "/professional-female-yoga-fitness-instructor.jpg",
  "/professional-female-yoga-fitness-instructor.jpg",
  "/professional-female-yoga-fitness-instructor.jpg",
  "/professional-female-yoga-fitness-instructor.jpg",
];

const gymImages2 = [
  "/professional-female-yoga-fitness-instructor.jpg",
  "/professional-female-yoga-fitness-instructor.jpg",
  "/professional-female-yoga-fitness-instructor.jpg",
  "/professional-female-yoga-fitness-instructor.jpg",
];

export function MediaSection() {
  return (
    <div className="bg-black text-white min-h-screen py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 tracking-wide">
          Gym Gallery
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {gymImages1.map((src, i) => (
            <div key={i} className="relative group">
              <img
                src={src}
                alt={`Gym Image ${i + 1}`}
                className="w-full h-40 sm:h-48 md:h-56 lg:h-64 object-cover"
              />

              <div className="hidden md:flex absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-3 justify-between items-end">
                
              </div>
            </div>
          ))}
        </div>

        <h2 className="border-b-2 border-orange-500 w-full inline-block mt-8 mb-4 md:hidden text-center text-lg font-medium">
          we going to write something
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-4 gap-6">
          {gymImages2.map((src, i) => (
            <div key={i} className="relative group">
              <img
                src={src}
                alt={`Gym Image ${i + 1}`}
                className="w-full h-40 sm:h-48 md:h-56 lg:h-64 object-cover"
              />

              <div className="hidden md:flex absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-3 justify-between items-end">
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

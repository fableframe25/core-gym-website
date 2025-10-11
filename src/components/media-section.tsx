const gymImages1 = [
  { src: "/gymgallery1.jpg" },
  { src: "/gymgallery5.jpg", text: "Cardio Zone" },
  { src: "/gymgallery4.jpg", text: "Personal Training" },
  { src: "/gymgallery2.jpg" },
];

const gymImages2 = [
  { src: "/gymgallery3.jpg", text: "Yoga Studio" },
  { src: "/gymgallery7.jpg" },
  { src: "/gymgallery8.jpg" },
  { src: "/gymgallery9.jpg", text: "Weightlifting" },
];

export function MediaSection() {
  return (
    <div id="gallery" className="bg-black text-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 tracking-wide">
          <span className="relative inline-block">
            <span className="border-b-4 border-orange-500 pb-1">Our</span>
          </span>{" "}
          <span>
            <span className="text-orange-500">G</span>allery
          </span>
        </h2>

        {/* First Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {gymImages1.map((item, i) => (
            <div key={i} className="relative group overflow-hidden">
              <img
                src={item.src}
                alt={`Gym Image ${i + 1}`}
                className={`w-full h-40 sm:h-48 md:h-56 lg:h-64 object-cover transition duration-500 
                  ${item.text ? "opacity-80 group-hover:opacity-100" : "opacity-100"}`}
              />
              {item.text && (
                <div className="absolute inset-0 flex items-center justify-center opacity-100">
                  <p className="text-lg w-full font-semibold tracking-wide text-white/80 drop-shadow-md bg-black/40 px-3 py-1 text-center">
                    {item.text}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Second Grid (Hidden on mobile) */}
        <div className="hidden sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:mt-6">
          {gymImages2.map((item, i) => (
            <div key={i} className="relative group overflow-hidden">
              <img
                src={item.src}
                alt={`Gym Image ${i + 1}`}
                className={`w-full h-40 sm:h-48 md:h-56 lg:h-64 object-cover transition duration-500 
                  ${item.text ? "opacity-80 group-hover:opacity-100" : "opacity-100"}`}
              />
              {item.text && (
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-100">
                  <p className="text-lg font-semibold tracking-wide text-white drop-shadow-md">
                    {item.text}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

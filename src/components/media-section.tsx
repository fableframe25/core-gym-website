const gymImages1 = [
  { src: "/gymgallery1.jpg" },
  { src: "/gymgallery5.jpg", text: "Cardio Floor" },
  { src: "/gymgallery4.jpg", text: "Personal Training" },
  { src: "/gymgallery2.jpg" },
];

const gymImages2 = [
  { src: "/gymgallery3.jpg", text: "Training Zone" },
  { src: "/gymgallery7.jpg" },
  { src: "/gymgallery8.jpg" },
  { src: "/gymgallery9.jpg", text: "Weight Lifting" },
];

export function MediaSection() {
  return (
    <div id="gallery" className="bg-[#1a120e] text-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
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
              Gallery
            </span>
          </div>
          <h2 className="text-4xl font-bold text-center mb-12 tracking-wide">
            <span className="relative inline-block">
              <span className="border-b-4 border-orange-500 pb-1">Tour</span>
            </span>{" "}
            <span>
              <span className="text-orange-500">The</span> Floor
            </span>
          </h2>
        </div>

        {/* First Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {gymImages1.map((item, i) => (
            <div key={i} className="relative group overflow-hidden">
              <img
                src={item.src}
                alt={`Gym Image ${i + 1}`}
                className={`w-full h-40 sm:h-48 md:h-56 lg:h-64 object-cover transition duration-500 
                  ${
                    item.text
                      ? "opacity-80 group-hover:opacity-100"
                      : "opacity-100"
                  }`}
              />
              {item.text && (
                <div className="absolute inset-0 flex items-center justify-center opacity-100">
                  <p className="text-lg w-full font-semibold tracking-wide text-white/80 drop-shadow-md bg-[#1a120e]/40 px-3 py-1 text-center">
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
                  ${
                    item.text
                      ? "opacity-80 group-hover:opacity-100"
                      : "opacity-100"
                  }`}
              />
              {item.text && (
                <div className="absolute inset-0 bg-[#1a120e]/40 flex items-center justify-center opacity-100">
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

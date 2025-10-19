"use client";

export function ContactSection() {
  const handleMapClick = () => {
    // Redirect to Google Maps with gym location
    window.open("https://share.google/aq0R4AD80VAJMOZgB", "_blank");
  };

  return (
    <section
      id="contact"
      className="py-16 px-10 bg-[#2a1a0c] relative overflow-hidden"
    >
      {/* Background Effects - Matching other components */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(251,146,60,0.08)_0%,transparent_50%)]"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header - Matching other components */}
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <span
              className="text-black px-8 py-3 text-sm md:text-base font-black uppercase tracking-widest shadow-lg"
              style={{
                backgroundColor: "#F97316",
                borderRadius: "16px 16px 20px 8px / 14px 14px 20px 12px",
                display: "inline-block",
                lineHeight: "1.5",
                clipPath:
                  "polygon(0% 0%, 95% 0%, 100% 30%, 100% 100%, 5% 100%, 0% 70%)",
              }}
            >
              Contact Us
            </span>
          </div>
          <h2 className="font-extrabold text-center mb-10 text-white tracking-wide text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight">
            <span className="relative inline-block">
              <span className="border-b-4 border-white pb-1">Get</span>
            </span>{" "}
            <span>
              <span className="text-orange-500">In</span> Touch
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Section - Contact Info */}
          <div className="flex flex-col items-center justify-center space-y-12 text-center">
            {/* Header */}
            <div className="max-w-md mb-2">
              <p className="text-xl leading-relaxed">
                <span className="text-white font-light">
                  We are always looking for ways to{" "}
                </span>
                <span className="text-orange-500 font-medium">
                  improve our products
                </span>
                <span className="text-white font-light"> and </span>
                <span className="text-orange-500 font-medium">services</span>
                <span className="text-white font-light">. </span>
                <span className="text-orange-500 font-semibold">
                  Contact us
                </span>
                <span className="text-white font-light">
                  {" "}
                  and let us know how we can{" "}
                </span>
                <span className="text-orange-500 font-semibold">
                  help you
                </span>
                <span className="text-white font-light">.</span>
              </p>
            </div>

            {/* Contact Details */}
            <div className="flex flex-col lg:flex-col items-center gap-4 lg:gap-4 w-full max-w-md">
              {/* Email Box with Multiple Emails */}
              <div className="group bg-gradient-to-br from-[#2d1a12] via-[#1a120e] to-orange-500/10 p-4 sm:p-5 rounded-2xl w-full max-w-sm sm:max-w-xs md:max-w-sm border border-orange-500/20 shadow-lg hover:border-orange-500/40 transition-all duration-300 flex flex-col items-start">
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex-shrink-0 w-10 h-10 bg-orange-500/30 rounded-xl flex items-center justify-center group-hover:bg-orange-500/40 transition-colors shadow-md">
                    <span className="text-xl sm:text-2xl">📧</span>
                  </div>
                  <span className="text-white text-base sm:text-lg font-bold tracking-wide">
                    Email Us
                  </span>
                </div>
                <div className="flex flex-col gap-3 w-full">
                  <a
                    href="mailto:gym.coregym@gmail.com"
                    className="block px-4 py-2 rounded-xl bg-[#22140f]/70 text-white text-sm sm:text-base md:text-lg font-light font-sans transition-all duration-200 text-left shadow border border-orange-500/10 hover:border-orange-500/30 hover:text-orange-500 hover:scale-105 focus:outline-none"
                    style={{
                      fontFamily:
                        "Lato, Raleway, Montserrat, Poppins, Open Sans, Source Sans Pro, sans-serif",
                    }}
                  >
                    gym.coregym@gmail.com
                  </a>
                  <a
                    href="mailto:paulamiseal@coregym.net"
                    className="block px-4 py-2 rounded-xl bg-[#22140f]/70 text-white text-sm sm:text-base md:text-lg font-light font-sans transition-all duration-200 text-left shadow border border-orange-500/10 hover:border-orange-500/30 hover:text-orange-500 hover:scale-105 focus:outline-none"
                    style={{
                      fontFamily:
                        "Lato, Raleway, Montserrat, Poppins, Open Sans, Source Sans Pro, sans-serif",
                    }}
                  >
                    paulamiseal@coregym.net
                  </a>
                  <a
                    href="mailto:bhattacharyatuhin@coregym.net"
                    className="block px-4 py-2 rounded-xl bg-[#22140f]/70 text-white text-sm sm:text-base md:text-lg font-light font-sans transition-all duration-200 text-left shadow border border-orange-500/10 hover:border-orange-500/30 hover:text-orange-500 hover:scale-105 focus:outline-none"
                    style={{
                      fontFamily:
                        "Lato, Raleway, Montserrat, Poppins, Open Sans, Source Sans Pro, sans-serif",
                    }}
                  >
                    bhattacharyatuhin@coregym.net
                  </a>
                </div>
              </div>

              {/* Phone */}
              <a
                href="tel:09330059709"
                className="group flex items-center gap-3 bg-gradient-to-r from-orange-500/10 to-transparent p-3 lg:p-4 rounded-xl w-full max-w-sm border border-orange-500/20 shadow-md hover:border-orange-500/40 transition-all duration-300 cursor-pointer hover:scale-105"
              >
                <div className="flex-shrink-0 w-10 h-10 bg-orange-500/20 rounded-lg flex items-center justify-center group-hover:bg-orange-500/30 transition-colors">
                  <span className="text-xl lg:text-2xl">📞</span>
                </div>
                <div className="text-left flex-1">
                  <span className="text-white text-base lg:text-lg font-medium group-hover:text-orange-500 transition-colors">
                    093300 59709
                  </span>
                </div>
              </a>
            </div>
          </div>

          {/* Right Section - Map */}
          <div
            className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl h-96 cursor-pointer overflow-hidden group border border-gray-700"
            onClick={handleMapClick}
          >
            {/* Map Background */}
            <div className="absolute inset-0">
              {/* Map Image */}
              <div className="absolute inset-0">
                <img
                  src="/map.png"
                  alt="Gym location map"
                  className="w-full h-full object-cover hover:grayscale-0 transition-all duration-300"
                />
                {/* Light overlay for better contrast */}
                <div className="absolute inset-0 bg-[#1a120e]/20"></div>
              </div>
            </div>

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                <p className="text-white text-sm font-medium">
                  Click to view on Google Maps
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
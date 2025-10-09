export function Footer() {
  return (
    <footer className="bg-black py-4 px-4 sm:py-6 sm:px-6 md:py-8 md:px-8">
      <div className="bg-white rounded-2xl sm:rounded-[40px] md:rounded-[50px] shadow-2xl py-8 sm:py-12 md:py-16 mx-auto max-w-7xl">
        <div className="container mx-auto px-4 sm:px-8 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 mb-8 sm:mb-12">
            {/* Left Section - Let's Get Started */}
            <div className="space-y-6 sm:space-y-8">
              <div className="space-y-2 sm:space-y-4">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight font-heading">
                  LET'S GET{" "}
                  <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                    STARTED!
                  </span>
                </h2>
                <div className="w-16 sm:w-20 md:w-24 h-1 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full"></div>
              </div>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed font-medium font-body">
                Take the first step towards your fitness goals. Contact us today
                to begin your transformation journey with our expert trainers
                and state-of-the-art facilities.
              </p>
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 bg-gray-50 rounded-xl sm:rounded-2xl hover:bg-gray-100 transition-colors">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg sm:rounded-xl flex items-center justify-center">
                    <svg
                      className="w-5 h-5 sm:w-6 sm:h-6 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm text-gray-500 font-medium">
                      Email Address
                    </p>
                    <p className="text-base sm:text-lg font-bold text-gray-900">
                      info@fitek.com
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 bg-gray-50 rounded-xl sm:rounded-2xl hover:bg-gray-100 transition-colors">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg sm:rounded-xl flex items-center justify-center">
                    <svg
                      className="w-5 h-5 sm:w-6 sm:h-6 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm text-gray-500 font-medium">
                      Phone Number
                    </p>
                    <p className="text-base sm:text-lg font-bold text-gray-900">
                      +1 (555) 123-4567
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Section - Our Gym */}
            <div className="space-y-6 sm:space-y-8">
              <div className="space-y-2 sm:space-y-4">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-gray-900 font-heading">
                  Our{" "}
                  <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                    Gym
                  </span>
                </h3>
                <div className="w-12 sm:w-14 md:w-16 h-1 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full"></div>
              </div>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed font-medium font-body">
                Experience the ultimate fitness destination with cutting-edge
                equipment, personalized training programs, and a supportive
                community that will help you achieve your goals.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <div className="flex items-center space-x-2 sm:space-x-3 p-2 sm:p-3 bg-gradient-to-r from-orange-50 to-orange-100 rounded-lg sm:rounded-xl border border-orange-200">
                  <div className="w-2 h-2 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full"></div>
                  <span className="text-gray-800 font-semibold text-sm sm:text-base">
                    24/7 Access Available
                  </span>
                </div>
                <div className="flex items-center space-x-2 sm:space-x-3 p-2 sm:p-3 bg-gradient-to-r from-orange-50 to-orange-100 rounded-lg sm:rounded-xl border border-orange-200">
                  <div className="w-2 h-2 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full"></div>
                  <span className="text-gray-800 font-semibold text-sm sm:text-base">
                    Professional Trainers
                  </span>
                </div>
                <div className="flex items-center space-x-2 sm:space-x-3 p-2 sm:p-3 bg-gradient-to-r from-orange-50 to-orange-100 rounded-lg sm:rounded-xl border border-orange-200">
                  <div className="w-2 h-2 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full"></div>
                  <span className="text-gray-800 font-semibold text-sm sm:text-base">
                    Modern Equipment
                  </span>
                </div>
                <div className="flex items-center space-x-2 sm:space-x-3 p-2 sm:p-3 bg-gradient-to-r from-orange-50 to-orange-100 rounded-lg sm:rounded-xl border border-orange-200">
                  <div className="w-2 h-2 bg-gradient-to-r from-orange-500 to-orange-600 rounded-full"></div>
                  <span className="text-gray-800 font-semibold text-sm sm:text-base">
                    Group Classes
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section - FITEK Logo and Social Media */}
          <div className="border-t border-gray-200 pt-6 sm:pt-8">
            <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
              {/* FITEK Logo */}
              <div className="flex items-center space-x-3 sm:space-x-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center shadow-lg">
                  <img
                    src="/logo-remover.png"
                    alt="FITEK Logo"
                    className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-black text-gray-900 tracking-tight">
                    FITEK
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500 font-medium">
                    FITNESS & WELLNESS
                  </p>
                </div>
              </div>

              {/* Tagline */}
              <div className="text-center">
                <p className="text-gray-600 text-xs sm:text-sm font-medium">
                  © 2025 FITEK FITNESS. ALL RIGHTS RESERVED.
                </p>
              </div>

              {/* Social Media Icons */}
              <div className="flex space-x-2 sm:space-x-3">
                <a
                  href="#"
                  className="w-9 h-9 sm:w-11 sm:h-11 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg sm:rounded-xl flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg group"
                >
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 text-white group-hover:scale-110 transition-transform"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-9 h-9 sm:w-11 sm:h-11 bg-gradient-to-r from-pink-500 to-rose-600 rounded-lg sm:rounded-xl flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg group"
                >
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 text-white group-hover:scale-110 transition-transform"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.120.112.225.085.347-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.758-1.378l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.624 0 11.99-5.367 11.99-11.986C24.007 5.367 18.641.001 12.017.001z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-9 h-9 sm:w-11 sm:h-11 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg sm:rounded-xl flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg group"
                >
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 text-white group-hover:scale-110 transition-transform"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-9 h-9 sm:w-11 sm:h-11 bg-gradient-to-r from-red-500 to-red-600 rounded-lg sm:rounded-xl flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-lg group"
                >
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 text-white group-hover:scale-110 transition-transform"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

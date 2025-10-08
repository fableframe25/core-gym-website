export function Footer() {
  return (
    <footer className="bg-black text-white py-16 rounded-t-[100px]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Section - Let's Get Started */}
          <div className="space-y-8">
            <h2 className="text-5xl font-extrabold mb-8">
              LET'S GET{" "}
              <span className="bg-gradient-to-b from-orange-500 to-orange-900 bg-clip-text text-transparent">
                STARTED!
              </span>
            </h2>
            <p className="text-gray-300 text-2xl leading-relaxed">
              Take the first step towards your fitness goals. Contact us today
              to begin your transformation journey with our expert trainers and
              state-of-the-art facilities.
            </p>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <span className="bg-gradient-to-b from-orange-500 to-orange-900 bg-clip-text text-transparent text-3xl">
                  📧
                </span>
                <span className="text-2xl font-bold">info@fitek.com</span>
              </div>
              <div className="flex items-center space-x-4">
                <span className="bg-gradient-to-b from-orange-500 to-orange-900 bg-clip-text text-transparent text-3xl">
                  📞
                </span>
                <span className="text-2xl font-bold">
                  Phone: +1 (555) 123-4567
                </span>
              </div>
            </div>
          </div>

          {/* Middle Section - Our Gym */}
          <div className="space-y-8">
            <h3 className="text-4xl font-extrabold bg-gradient-to-b from-orange-500 to-orange-900 bg-clip-text text-transparent mb-6">
              Our Gym
            </h3>
            <p className="text-gray-300 text-2xl leading-relaxed">
              Experience the ultimate fitness destination with cutting-edge
              equipment, personalized training programs, and a supportive
              community that will help you achieve your goals.
            </p>
            <ul className="space-y-5 text-gray-300 text-2xl">
              <li className="flex items-center space-x-3">
                <span className="bg-gradient-to-b from-orange-500 to-orange-900 bg-clip-text text-transparent text-3xl">
                  •
                </span>
                <span>24/7 Access Available</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="bg-gradient-to-b from-orange-500 to-orange-900 bg-clip-text text-transparent text-3xl">
                  •
                </span>
                <span>Professional Trainers</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="bg-gradient-to-b from-orange-500 to-orange-900 bg-clip-text text-transparent text-3xl">
                  •
                </span>
                <span>Modern Equipment</span>
              </li>
              <li className="flex items-center space-x-3">
                <span className="bg-gradient-to-b from-orange-500 to-orange-900 bg-clip-text text-transparent text-3xl">
                  •
                </span>
                <span>Group Classes</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section - FITEK Logo and Social Media */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* FITEK Logo */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-b from-orange-500 to-orange-900 rounded">
                <span className="text-black font-extrabold text-4xl">💪</span>
              </div>
              <h3 className="text-3xl font-extrabold text-white">FITEK</h3>
            </div>
            {/* Tagline */}
            <div className="text-center">
              <p className="text-gray-400 text-xl">
                © 2025 FITEK FITNESS. ALL RIGHTS RESERVED.
              </p>
            </div>
            {/* Social Media Icons */}
            <div className="flex space-x-6">
              <a
                href="#"
                className="w-12 h-12 bg-gray-800 hover:bg-gradient-to-b hover:from-orange-500 hover:to-orange-900 rounded-full flex items-center justify-center transition-all duration-300"
              >
                <span className="text-white text-2xl">📘</span>
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-gray-800 hover:bg-gradient-to-b hover:from-orange-500 hover:to-orange-900 rounded-full flex items-center justify-center transition-all duration-300"
              >
                <span className="text-white text-2xl">📷</span>
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-gray-800 hover:bg-gradient-to-b hover:from-orange-500 hover:to-orange-900 rounded-full flex items-center justify-center transition-all duration-300"
              >
                <span className="text-white text-2xl">🐦</span>
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-gray-800 hover:bg-gradient-to-b hover:from-orange-500 hover:to-orange-900 rounded-full flex items-center justify-center transition-all duration-300"
              >
                <span className="text-white text-2xl">💼</span>
              </a>
              <a
                href="#"
                className="w-12 h-12 bg-gray-800 hover:bg-gradient-to-b hover:from-orange-500 hover:to-orange-900 rounded-full flex items-center justify-center transition-all duration-300"
              >
                <span className="text-white text-2xl">📺</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

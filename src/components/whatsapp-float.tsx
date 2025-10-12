export function WhatsAppFloat() {
  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50">
      {/* Floating Button */}
      <a
        href="#offers"
        className="block relative group"
        aria-label="Check New Offers"
      >
        {/* Glowing animated background */}
        <span className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 blur-lg opacity-50 group-hover:opacity-70 animate-pulse"></span>
        {/* Main Button */}
        <div className="relative flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2.5 rounded-full shadow-lg shadow-orange-500/30 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 transition-all duration-300 border border-white/10">
          {/* Star Icon */}
          <svg
            className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-300 drop-shadow-lg animate-spin-slow"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
          </svg>
          {/* Text */}
          <div className="flex flex-col leading-tight text-white">
            <span className="text-[9px] sm:text-[10px] font-bold tracking-wider uppercase drop-shadow">
              NEW
            </span>
            <span className="text-sm sm:text-base font-black tracking-wider drop-shadow">
              OFFERS
            </span>
          </div>
        </div>
      </a>
    </div>
  );
}

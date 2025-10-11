export function WhatsAppFloat() {
  return (
    <div className="fixed bottom-20 right-4 sm:bottom-24 sm:right-6 z-40">
      {/* Floating Button */}
      <a
        href="#offers"
        className="block bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-3 py-2 sm:px-6 sm:py-4 rounded-full shadow-lg shadow-orange-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/40"
        aria-label="Check New Offers"
      >
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Star Icon */}
          <svg 
            className="w-4 h-4 sm:w-5 sm:h-5"
            viewBox="0 0 24 24" 
            fill="currentColor"
          >
            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
          </svg>
          
          {/* Text */}
          <div className="flex flex-col leading-tight">
            <span className="text-[9px] sm:text-xs font-bold tracking-wider">NEW</span>
            <span className="text-sm sm:text-lg font-black tracking-wider">OFFERS</span>
          </div>
        </div>
      </a>
    </div>
  );
}

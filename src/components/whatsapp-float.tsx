import { useState, useEffect } from "react";

export function WhatsAppFloat() {
  // Timer for 12-hour offer (in seconds)
  const [offerTime, setOfferTime] = useState(12 * 60 * 60);
  // Timer for 15-minute diet chart (in seconds)
  const [dietTime, setDietTime] = useState(15 * 60);

  // Format time as HH:MM:SS or MM:SS
  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    
    if (hours > 0) {
      return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    }
    return `${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // Timer countdown effect
  useEffect(() => {
    const interval = setInterval(() => {
      setOfferTime((prev) => {
        if (prev <= 1) return 12 * 60 * 60; // Reset to 12 hours
        return prev - 1;
      });
      
      setDietTime((prev) => {
        if (prev <= 1) return 15 * 60; // Reset to 15 minutes
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed bottom-3 right-3 sm:bottom-4 sm:right-4 z-50 flex flex-col gap-1.5 sm:gap-2">
      {/* Limited Time Offer Button - 12 Hours */}
      <a
        href="#offers"
        className="block"
        aria-label="Limited Time Offer"
      >
        <div className="flex items-center gap-1.5 sm:gap-3 px-2.5 py-1.5 sm:px-4 sm:py-2.5 rounded-lg sm:rounded-xl shadow-lg bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 transition-all duration-200 border border-white/20">
          <svg className="w-4 h-4 sm:w-6 sm:h-6 text-white flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
          </svg>
          <div className="flex flex-col items-center justify-center leading-none flex-1">
            <span className="text-[8px] sm:text-[10px] font-semibold text-white/90 uppercase tracking-wide">Limited Offer</span>
            <span className="text-xs sm:text-base font-bold text-white tabular-nums mt-0.5">{formatTime(offerTime)}</span>
          </div>
        </div>
      </a>

      {/* Free Customized Diet Chart Button - 15 Minutes */}
      <a
        href="#contact"
        className="block"
        aria-label="Free Customized Diet Chart"
      >
        <div className="flex items-center gap-1.5 sm:gap-3 px-2.5 py-1.5 sm:px-4 sm:py-2.5 rounded-lg sm:rounded-xl shadow-lg bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 transition-all duration-200 border border-white/20">
          <svg className="w-4 h-4 sm:w-6 sm:h-6 text-white flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
            <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
          </svg>
          <div className="flex flex-col items-center justify-center leading-none flex-1">
            <span className="text-[8px] sm:text-[10px] font-semibold text-white/90 uppercase tracking-wide">Free Diet</span>
            <span className="text-xs sm:text-base font-bold text-white tabular-nums mt-0.5">{formatTime(dietTime)}</span>
          </div>
        </div>
      </a>
    </div>
  );
}

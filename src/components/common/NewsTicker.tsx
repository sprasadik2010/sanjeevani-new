import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface NewsItem {
  id: number;
  text: string;
  icon?: string;
  link?: string;
  isNew?: boolean;
}

const newsData: NewsItem[] = [
  {
    id: 1,
    text: "Special Free Ayurvedic Consultation & Pulse Diagnosis Camp this Sunday! Reserve your spot now.",
    icon: "fa-leaf",
    link: "/book-now",
    isNew: true,
  },
  {
    id: 2,
    text: "Experience Authentic Panchakarma Therapies for Complete Detoxification & Vitality.",
    icon: "fa-spa",
    link: "/services",
  },
  {
    id: 3,
    text: "Sanjeevani Honored with 'Best Holistic Healthcare Provider 2026' Award.",
    icon: "fa-award",
    link: "/about",
    isNew: true,
  },
  {
    id: 4,
    text: "100% Organic & Certified Herbal Formulations now available for Online Consultation.",
    icon: "fa-capsules",
    link: "/consult-now",
  },
  {
    id: 5,
    text: "New Wellness Retreat Packages Announced – Rejuvenate Body, Mind & Soul.",
    icon: "fa-calendar-check",
    link: "/media",
  },
];

const NewsTicker: React.FC = () => {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <div 
      className="relative z-30 bg-gradient-to-r from-[#2c2013] via-[#42311c] to-[#2c2013] text-amber-100 text-sm py-2.5 overflow-hidden border-y border-amber-500/30 shadow-md"
      aria-label="Latest News Announcement Ticker"
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center">
        {/* Fixed News Badge Header */}
        <div className="shrink-0 flex items-center gap-2 bg-gradient-to-r from-amber-600 to-amber-700 text-white px-3.5 py-1 rounded-full text-xs font-bold tracking-wider uppercase shadow-md z-10 border border-amber-300/30 mr-3 md:mr-6">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-300 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
          </span>
          <i className="fas fa-bullhorn text-xs"></i>
          <span className="hidden sm:inline">LATEST</span> UPDATES
        </div>

        {/* Marquee Feed Area */}
        <div 
          className="relative flex-1 overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div 
            className={`flex items-center whitespace-nowrap transition-all duration-300 ${
              isPaused ? '[animation-play-state:paused]' : ''
            } animate-marquee`}
          >
            {/* Render news items twice for seamless 100% loop */}
            {[...newsData, ...newsData].map((item, index) => (
              <div key={`${item.id}-${index}`} className="inline-flex items-center mr-10 group">
                {item.isNew && (
                  <span className="bg-red-600 text-white text-[10px] uppercase font-extrabold px-1.5 py-0.5 rounded mr-2 tracking-wider animate-pulse">
                    NEW
                  </span>
                )}
                {item.icon && (
                  <i className={`fas ${item.icon} text-amber-400 mr-2 text-xs group-hover:scale-125 transition-transform duration-300`}></i>
                )}
                {item.link ? (
                  <Link
                    to={item.link}
                    className="hover:text-amber-300 hover:underline transition-colors font-medium text-xs sm:text-sm tracking-wide"
                  >
                    {item.text}
                  </Link>
                ) : (
                  <span className="font-medium text-xs sm:text-sm tracking-wide">{item.text}</span>
                )}
                <span className="ml-10 text-amber-500/50">✦</span>
              </div>
            ))}
          </div>
        </div>

        {/* Pause/Play Hover Hint Indicator */}
        <div className="hidden lg:flex shrink-0 items-center text-[11px] text-amber-300/60 ml-4 font-mono">
          <i className={`fas ${isPaused ? 'fa-pause text-amber-400' : 'fa-play text-amber-500/40'} mr-1.5 text-[10px]`}></i>
          {isPaused ? 'PAUSED' : 'HOVER TO PAUSE'}
        </div>
      </div>
    </div>
  );
};

export default NewsTicker;

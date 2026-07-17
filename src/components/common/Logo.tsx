// import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to="/" className="group flex items-center gap-3">
      <div className="relative">
        {/* Animated lotus/flower SVG */}
        <svg 
          width="48" 
          height="48" 
          viewBox="0 0 48 48" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-12"
        >
          {/* Gradient definition */}
          <defs>
            <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f59e0b" />
              <stop offset="50%" stopColor="#d97706" />
              <stop offset="100%" stopColor="#b45309" />
            </linearGradient>
            <linearGradient id="logoGlow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#b45309" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          
          {/* Background circle */}
          <circle cx="24" cy="24" r="23" fill="url(#logoGlow)" />
          
          {/* Lotus petals */}
          <path 
            d="M24 12 L28 20 L24 18 L20 20 L24 12Z" 
            fill="url(#logoGradient)" 
            className="transition-all duration-500 group-hover:translate-y-[-2px]"
          />
          <path 
            d="M30 15 L32 24 L28 21 L26 23 L30 15Z" 
            fill="url(#logoGradient)" 
            className="transition-all duration-500 group-hover:translate-x-[2px] group-hover:translate-y-[-2px]"
          />
          <path 
            d="M18 15 L22 23 L20 21 L16 24 L18 15Z" 
            fill="url(#logoGradient)" 
            className="transition-all duration-500 group-hover:translate-x-[-2px] group-hover:translate-y-[-2px]"
          />
          <path 
            d="M33 22 L34 30 L30 27 L28 29 L33 22Z" 
            fill="url(#logoGradient)" 
            className="transition-all duration-500 group-hover:translate-x-[3px]"
          />
          <path 
            d="M15 22 L20 29 L18 27 L14 30 L15 22Z" 
            fill="url(#logoGradient)" 
            className="transition-all duration-500 group-hover:translate-x-[-3px]"
          />
          
          {/* Center dot */}
          <circle cx="24" cy="24" r="4" fill="url(#logoGradient)" />
          <circle cx="24" cy="24" r="2" fill="white" opacity="0.8" />
        </svg>

        {/* Pulsing ring effect */}
        <div className="absolute inset-0 rounded-2xl bg-amber-400/20 animate-ping-slow opacity-0 group-hover:opacity-100"></div>
      </div>

      {/* Brand Name */}
      <div className="flex flex-col leading-tight">
        <span className="font-serif-display text-2xl font-bold tracking-tight">
          <span className="bg-gradient-to-r from-amber-600 via-amber-500 to-amber-700 bg-clip-text text-transparent">
            Sanjeevani
          </span>
        </span>
        <span className="text-[10px] font-light tracking-[0.3em] text-amber-600/80 uppercase">
          Ayurveda
        </span>
      </div>
    </Link>
  );
};

export default Logo;
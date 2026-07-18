// import React from 'react';
import { Link } from 'react-router-dom';
import SanjeevaniLogo from '../../assets/sanjeevanilogo.svg';

const SanjLogo = () => {
  return (
    <Link to="/" className="group flex items-center gap-3">
      <div className="relative">
        {/* Animated lotus/flower SVG */}
         <img 
            src={SanjeevaniLogo} 
            alt="Sanjeevani Logo"
            style={{ width: '200px', height: '100px' }}
          />

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

export default SanjLogo;
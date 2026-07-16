// import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Our Service', path: '/services' },
    { name: 'Media', path: '/media' },
    { name: 'Contact', path: '/contact' },
    { name: 'Book Now', path: '/book-now' },
    { name: 'Consult Now', path: '/consult-now' },
  ];

  return (
    <nav className="flex flex-wrap items-center justify-between px-6 py-4 md:px-12 bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-50">
      <div className="flex items-center gap-2">
        <Link to="/" className="text-3xl font-serif-display font-bold gold-text">Sanjeevani</Link>
        <span className="text-sm font-light text-gray-600 hidden sm:inline">Ayurveda</span>
      </div>
      <div className="flex flex-wrap gap-3 md:gap-6 text-sm md:text-base">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`nav-link ${location.pathname === item.path ? 'text-amber-700 font-semibold' : ''}`}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './SLogo';

const Navbar = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Our Service', path: '/services' },
    { name: 'Media', path: '/media' },
    { name: 'Contact', path: '/contact' },
    { name: 'Book Now', path: '/book-now', highlight: true },
    { name: 'Consult Now', path: '/consult-now', highlight: true },
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <>
      <nav 
        className={`
          fixed top-0 left-0 right-0 z-50 transition-all duration-500
          ${isScrolled 
            ? 'bg-white/95 backdrop-blur-xl shadow-lg py-2' 
            : 'bg-white/80 backdrop-blur-md shadow-sm py-4'
          }
        `}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <Link 
              to="/" 
              className="group flex items-center gap-3 relative"
            >
              {/* Animated Lotus Icon */}
              {/* <div className="relative">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 shadow-lg shadow-amber-500/30">
                  <i className="fas fa-leaf text-white text-xl transform transition-all duration-500 group-hover:scale-110 group-hover:-rotate-12"></i>
                </div>
                {/* Pulsing ring */}
                 {/* <div className="absolute inset-0 rounded-2xl bg-amber-400/20 animate-ping-slow opacity-0 group-hover:opacity-100"></div>
              </div> */}

              {/* Brand Name */}
              {/* <div className="flex flex-col leading-tight">
                <span className="font-serif-display text-2xl font-bold tracking-tight">
                  <span className="bg-gradient-to-r from-amber-600 via-amber-500 to-amber-700 bg-clip-text text-transparent">
                    Sanjeevani
                  </span>
                </span>
                <span className="text-[10px] font-light tracking-[0.3em] text-amber-600/80 uppercase">
                  Ayurveda
                </span>
              </div> */}
            <Logo />

              {/* Decorative line */}
              <div className="hidden lg:block w-px h-8 bg-gradient-to-b from-amber-300/50 to-transparent ml-2"></div>
              {/* <span className="hidden lg:block text-[10px] font-light text-amber-500/60 tracking-wider ml-2">
                Since 2010
              </span> */}
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                const isHighlight = item.highlight;

                if (isHighlight) {
                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      className={`
                        relative px-5 py-2.5 rounded-full font-semibold text-lg transition-all duration-300 uppercase
                        ${isActive
                          ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-lg shadow-amber-500/30'
                          : 'text-amber-600 hover:text-white hover:bg-gradient-to-r hover:from-amber-500 hover:to-amber-600 hover:shadow-lg hover:shadow-amber-500/30'
                        }
                      `}
                    >
                      <span className="relative z-10">{item.name}</span>
                      {!isActive && (
                        <span className="absolute inset-0 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 opacity-0 hover:opacity-100 transition-opacity duration-300"></span>
                      )}
                    </Link>
                  );
                }

                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`
                      relative px-4 py-2 rounded-lg font-medium text-lg transition-all duration-300 uppercase
                      ${isActive
                        ? 'text-amber-600'
                        : 'text-gray-700 hover:text-amber-600'
                      }
                    `}
                  >
                    <span className="relative z-10">{item.name}</span>
                    {isActive && (
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-0.5 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full"></span>
                    )}
                    <span className={`
                      absolute inset-0 rounded-lg bg-amber-50/0 transition-all duration-300
                      ${!isActive && 'hover:bg-amber-50/80'}
                    `}></span>
                  </Link>
                );
              })}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-full hover:bg-amber-50 transition-colors group"
              aria-label="Toggle menu"
            >
              <div className="flex flex-col gap-1.5 w-5">
                <span className={`
                  block h-0.5 bg-amber-600 rounded-full transition-all duration-300
                  ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}
                `}></span>
                <span className={`
                  block h-0.5 bg-amber-600 rounded-full transition-all duration-300
                  ${isMobileMenuOpen ? 'opacity-0' : ''}
                `}></span>
                <span className={`
                  block h-0.5 bg-amber-600 rounded-full transition-all duration-300
                  ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}
                `}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`
          lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl shadow-2xl transition-all duration-500 overflow-hidden
          ${isMobileMenuOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'}
        `}>
          <div className="px-4 py-6 space-y-1">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              const isHighlight = item.highlight;

              if (isHighlight) {
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`
                      block px-5 py-3 rounded-xl font-semibold text-center transition-all duration-300 uppercase
                      ${isActive
                        ? 'bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-lg shadow-amber-500/30'
                        : 'text-amber-600 hover:text-white hover:bg-gradient-to-r hover:from-amber-500 hover:to-amber-600'
                      }
                    `}
                  >
                    {item.name}
                  </Link>
                );
              }

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`
                    block px-4 py-3 rounded-lg font-medium transition-all duration-300 uppercase
                    ${isActive
                      ? 'text-amber-600 bg-amber-50'
                      : 'text-gray-700 hover:text-amber-600 hover:bg-amber-50'
                    }
                  `}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Spacer to prevent content from hiding behind navbar */}
      <div className="h-[72px]"></div>
    </>
  );
};

export default Navbar;
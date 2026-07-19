import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { services, heroSlides } from '../../data';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [autoplay, setAutoplay] = useState(true);

  // Hero slides data
  const slides = heroSlides;

  // Next slide
  const nextSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsTransitioning(false), 600);
  }, [isTransitioning, slides.length]);

  // Previous slide
  const prevSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    setTimeout(() => setIsTransitioning(false), 600);
  }, [isTransitioning, slides.length]);

  // Go to specific slide
  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentSlide) return;
    setIsTransitioning(true);
    setCurrentSlide(index);
    setTimeout(() => setIsTransitioning(false), 600);
  };

  // Autoplay
  useEffect(() => {
    if (!autoplay) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [autoplay, nextSlide]);

  // Pause autoplay on hover
  const handleMouseEnter = () => setAutoplay(false);
  const handleMouseLeave = () => setAutoplay(true);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        prevSlide();
      } else if (e.key === 'ArrowRight') {
        nextSlide();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide]);

  return (
    <div className="w-full">
      {/* HERO SLIDER */}
      <div 
        className="relative overflow-hidden"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Slides Container */}
        <div className="relative h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-700 ease-in-out transform ${
                index === currentSlide 
                  ? 'opacity-100 scale-100 translate-x-0' 
                  : index < currentSlide 
                    ? 'opacity-0 -translate-x-full scale-95' 
                    : 'opacity-0 translate-x-full scale-95'
              }`}
            >
              {/* Background Image with Overlay */}
              <div className="absolute inset-0">
                <img 
                  src={slide.image} 
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>
              </div>

              {/* Content */}
              <div className="relative h-full flex items-center px-6 md:px-16 lg:px-24">
                <div className="max-w-2xl space-y-4 md:space-y-6 animate-slideIn">
                  <span className="inline-block px-4 py-1.5 bg-amber-600/80 text-white text-xs md:text-sm font-semibold tracking-widest uppercase rounded-full backdrop-blur-sm">
                    {slide.tag}
                  </span>
                  <h1 className="font-serif-display text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                    {slide.title}
                  </h1>
                  <p className="text-white/90 text-base md:text-lg lg:text-xl max-w-lg font-light leading-relaxed">
                    {slide.description}
                  </p>
                  <div className="flex flex-wrap gap-4 pt-4">
                    <Link to="/book-now" className="btn-gold inline-block text-base md:text-lg">
                      <i className="fas fa-calendar-check mr-2"></i> Book Now
                    </Link>
                    <Link to="/consult-now" className="btn-outline-gold-white inline-block text-base md:text-lg">
                      <i className="fas fa-user-md mr-2"></i> Consult Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-white text-3xl md:text-4xl bg-black/30 hover:bg-black/50 rounded-full p-3 transition-all duration-300 hover:scale-110 backdrop-blur-sm z-10"
          aria-label="Previous slide"
        >
          <i className="fas fa-chevron-left"></i>
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-3xl md:text-4xl bg-black/30 hover:bg-black/50 rounded-full p-3 transition-all duration-300 hover:scale-110 backdrop-blur-sm z-10"
          aria-label="Next slide"
        >
          <i className="fas fa-chevron-right"></i>
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'w-8 bg-amber-400' 
                  : 'w-2 bg-white/50 hover:bg-white/80'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Autoplay Indicator */}
        <div className="absolute bottom-6 right-6 text-white/60 text-xs hidden md:block">
          <i className={`fas ${autoplay ? 'fa-play' : 'fa-pause'} mr-1`}></i>
          {autoplay ? 'Auto' : 'Paused'}
        </div>
      </div>

      {/* Main Content Area */}
      <div className="px-6 md:px-16 py-12 max-w-7xl mx-auto">
        {/* Services Preview */}
        <div className="mt-8">
        <div className="text-center mb-12">
          <span className="text-sm font-semibold tracking-widest text-amber-600 uppercase">Our Services</span>
          <h2 className="font-serif-display text-4xl md:text-5xl font-bold gold-text mt-2">
            Holistic Healing Therapies
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mt-4">
            Discover our range of authentic Ayurvedic treatments designed to restore balance and promote wellbeing
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((s, idx) => (
            <div 
              key={idx} 
              className="group bg-white p-6 md:p-8 rounded-3xl shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-amber-50/50"
            >
              <div className="w-16 h-16 bg-amber-50 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-amber-100 transition-colors">
                <i className={`fas ${s.icon} text-3xl gold-text`}></i>
              </div>
              <h3 className="font-bold text-xl mb-2">{s.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{s.desc}</p>
              <Link 
                to="/services" 
                className="inline-block mt-4 text-amber-600 font-semibold text-sm hover:text-amber-800 transition-colors"
              >
                Learn More <i className="fas fa-arrow-right ml-1"></i>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonial / CTA Section */}
      <div className="mt-20 bg-gradient-to-r from-amber-50 to-orange-50/70 p-8 md:p-12 rounded-4xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-200/20 rounded-full -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-orange-200/20 rounded-full translate-y-1/2 -translate-x-1/2"></div>
        
        <div className="relative z-10 text-center max-w-3xl mx-auto">
          <i className="fas fa-quote-left text-4xl gold-text opacity-30 mb-4"></i>
          <p className="font-serif-display text-2xl md:text-3xl italic text-gray-700">
            “True health is harmony of body, mind, and spirit. Let Sanjeevani guide your journey to wellness.”
          </p>
          <p className="mt-4 gold-text font-semibold text-lg">— Dr. Anjali Sharma, Founder</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link to="/about" className="btn-outline-gold">
              <i className="fas fa-info-circle mr-2"></i> About Us
            </Link>
            <Link to="/contact" className="btn-gold">
              <i className="fas fa-envelope mr-2"></i> Get in Touch
            </Link>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6">
        <div className="text-center p-6 bg-white rounded-3xl shadow-sm hover:shadow-md transition-shadow">
          <div className="text-4xl md:text-5xl font-bold gold-text">12+</div>
          <p className="text-gray-600 mt-1">Years of Trust</p>
        </div>
        <div className="text-center p-6 bg-white rounded-3xl shadow-sm hover:shadow-md transition-shadow">
          <div className="text-4xl md:text-5xl font-bold gold-text">5K+</div>
          <p className="text-gray-600 mt-1">Happy Patients</p>
        </div>
        <div className="text-center p-6 bg-white rounded-3xl shadow-sm hover:shadow-md transition-shadow">
          <div className="text-4xl md:text-5xl font-bold gold-text">50+</div>
          <p className="text-gray-600 mt-1">Expert Therapists</p>
        </div>
        <div className="text-center p-6 bg-white rounded-3xl shadow-sm hover:shadow-md transition-shadow">
          <div className="text-4xl md:text-5xl font-bold gold-text">100%</div>
          <p className="text-gray-600 mt-1">Natural & Pure</p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Home;
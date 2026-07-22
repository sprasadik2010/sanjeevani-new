import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const KarkidakaModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [animateClose, setAnimateClose] = useState(false);

  useEffect(() => {
    // Check if the user has already seen the modal
    const hasSeenModal = localStorage.getItem('sanjeevani_karkidaka_modal_seen');
    
    if (!hasSeenModal) {
      // Show modal after a small delay (1 second) for a professional entrance
      const timer = setTimeout(() => {
        setIsOpen(true);
        // Add class to body to prevent scrolling when modal is open
        document.body.classList.add('no-scroll');
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setAnimateClose(true);
    // Wait for fade-out animation to complete
    setTimeout(() => {
      setIsOpen(false);
      document.body.classList.remove('no-scroll');
      // Mark as seen so it doesn't pop up again
      localStorage.setItem('sanjeevani_karkidaka_modal_seen', 'true');
    }, 300);
  };

  if (!isOpen) return null;

  return (
    <div 
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md transition-opacity duration-300 ${
        animateClose ? 'opacity-0' : 'opacity-100 animate-fadeIn'
      }`}
    >
      <div 
        className={`relative bg-white w-full max-w-lg max-h-[90vh] rounded-3xl overflow-hidden shadow-2xl border border-amber-100/50 flex flex-col transform transition-all duration-300 ${
          animateClose ? 'scale-95 opacity-0' : 'scale-100 animate-modalEnter'
        }`}
      >
        {/* Top Header Image */}
        <div className="relative h-48 md:h-56 w-full overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1603398938378-e54eab446dde?w=800&h=450&fit=crop" 
            alt="Ayurvedic Treatment" 
            className="w-full h-full object-cover"
          />
          {/* Elegant gold overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-black/30"></div>
          
          {/* Close button inside image header */}
          <button 
            onClick={handleClose}
            className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/30 hover:bg-black/60 text-white backdrop-blur-sm flex items-center justify-center transition-all duration-300 hover:rotate-90 hover:scale-105 active:scale-95 cursor-pointer border-none"
            aria-label="Close modal"
          >
            <i className="fas fa-times text-lg"></i>
          </button>

          {/* Glowing badge */}
          <span className="absolute bottom-4 left-6 px-3.5 py-1.5 bg-amber-600/90 text-white text-xs font-semibold uppercase tracking-widest rounded-full shadow-lg backdrop-blur-sm animate-pulse">
            🌧️ Monsoon Wellness
          </span>
        </div>

        {/* Modal Content */}
        <div className="p-6 md:p-8 flex-1 overflow-y-auto">
          <h2 className="font-serif-display text-2xl md:text-3xl font-bold text-gray-900 leading-tight mb-3">
            Karkidaka Chikilsa
          </h2>
          
          <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6">
            Embrace the time-tested wisdom of Ayurveda this monsoon. Karkidaka (July–August) is the perfect season for deep rejuvenation. The wet and cold atmosphere naturally opens your body's pores, making it highly receptive to treatments that detoxify, boost immunity, and relieve chronic joint stiffness.
          </p>

          {/* Benefits Bullet Points */}
          <div className="space-y-4 mb-8">
            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-50 flex items-center justify-center mr-3.5 mt-0.5">
                <i className="fas fa-shield-halved text-amber-600 text-sm"></i>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 text-sm md:text-base">Detox & Immunity Booster</h4>
                <p className="text-gray-500 text-xs md:text-sm mt-0.5">Flushes out toxins built up during summer and strengthens defense mechanisms.</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-50 flex items-center justify-center mr-3.5 mt-0.5">
                <i className="fas fa-mortar-pestle text-amber-600 text-sm"></i>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 text-sm md:text-base">Medicated Kanji Porridge</h4>
                <p className="text-gray-500 text-xs md:text-sm mt-0.5">Specialized herbal hot soup diet to restore digestive fire (Agni).</p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-50 flex items-center justify-center mr-3.5 mt-0.5">
                <i className="fas fa-spa text-amber-600 text-sm"></i>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 text-sm md:text-base">Pain & Stiffness Relief</h4>
                <p className="text-gray-500 text-xs md:text-sm mt-0.5">Rejuvenating oil therapies (Pizhichil & Kizhi) for muscles and joints.</p>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="grid grid-cols-2 gap-4">
            <Link 
              to="/book-now" 
              onClick={handleClose}
              className="btn-gold text-center py-3 text-sm md:text-base font-semibold flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <i className="fas fa-calendar-alt"></i> Book Session
            </Link>
            <Link 
              to="/consult-now" 
              onClick={handleClose}
              className="btn-outline-gold text-center py-3 text-sm md:text-base font-semibold flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <i className="fas fa-user-md"></i> Consult Doctor
            </Link>
          </div>
          
          <button 
            onClick={handleClose}
            className="w-full text-center text-xs text-gray-400 hover:text-gray-600 transition-colors mt-4 cursor-pointer underline underline-offset-2 border-none bg-transparent"
          >
            Dismiss and don't show again
          </button>
        </div>
      </div>
    </div>
  );
};

export default KarkidakaModal;

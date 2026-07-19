import React from 'react';

const StickyActions: React.FC = () => {
  return (
    <>
      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/919876543210"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-20 lg:bottom-6 right-6 z-40 bg-[#25D366] text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 hover:bg-[#20ba5a]"
        aria-label="Chat on WhatsApp"
      >
        <i className="fab fa-whatsapp text-3xl"></i>
      </a>

      {/* Sticky Bottom Bar for Mobile */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-[#f35e5e] text-white border-t border-white/10 lg:hidden shadow-[0_-4px_12px_rgba(0,0,0,0.1)]">
        <div className="grid grid-cols-3 h-14 items-center">
          <a
            href="tel:+919876543210"
            className="flex flex-col items-center justify-center h-full hover:bg-white/10 transition-colors"
            aria-label="Call Us"
          >
            <i className="fas fa-phone text-xl"></i>
          </a>
          <a
            href="mailto:info@sanjeevaniayurveda.com"
            className="flex flex-col items-center justify-center h-full border-x border-white/20 hover:bg-white/10 transition-colors"
            aria-label="Email Us"
          >
            <i className="fas fa-envelope text-xl"></i>
          </a>
          <a
            href="https://maps.google.com/?q=123+Vaidya+Marg,+Jaipur,+Rajasthan"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center h-full hover:bg-white/10 transition-colors"
            aria-label="Find Us"
          >
            <i className="fas fa-map-marker-alt text-xl"></i>
          </a>
        </div>
      </div>
    </>
  );
};

export default StickyActions;

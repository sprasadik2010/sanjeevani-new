import React, { useState } from 'react';

interface SocialLink {
  id: string;
  name: string;
  url: string;
  icon: string;
  bgColor: string;
  hoverBg: string;
  shadowColor: string;
}

const socialLinks: SocialLink[] = [
  {
    id: 'whatsapp',
    name: 'WhatsApp',
    url: 'https://wa.me/919876543210',
    icon: 'fab fa-whatsapp',
    bgColor: 'bg-[#25D366]',
    hoverBg: 'hover:bg-[#20ba5a]',
    shadowColor: 'shadow-green-500/30',
  },
  {
    id: 'facebook',
    name: 'Facebook',
    url: 'https://facebook.com',
    icon: 'fab fa-facebook-f',
    bgColor: 'bg-[#1877F2]',
    hoverBg: 'hover:bg-[#166fe5]',
    shadowColor: 'shadow-blue-500/30',
  },
  {
    id: 'instagram',
    name: 'Instagram',
    url: 'https://instagram.com',
    icon: 'fab fa-instagram',
    bgColor: 'bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888]',
    hoverBg: 'hover:opacity-90',
    shadowColor: 'shadow-pink-500/30',
  },
  {
    id: 'twitter',
    name: 'Twitter / X',
    url: 'https://twitter.com',
    icon: 'fab fa-twitter',
    bgColor: 'bg-[#0f1419]',
    hoverBg: 'hover:bg-black',
    shadowColor: 'shadow-gray-700/30',
  },

  {
    id: 'linkedin',
    name: 'LinkedIn',
    url: 'https://linkedin.com',
    icon: 'fab fa-linkedin-in',
    bgColor: 'bg-[#0A66C2]',
    hoverBg: 'hover:bg-[#08539e]',
    shadowColor: 'shadow-blue-600/30',
  },
  {
    id: 'youtube',
    name: 'YouTube',
    url: 'https://youtube.com',
    icon: 'fab fa-youtube',
    bgColor: 'bg-[#FF0000]',
    hoverBg: 'hover:bg-[#cc0000]',
    shadowColor: 'shadow-red-500/30',
  },
];

const StickyActions: React.FC = () => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <>
      {/* Floating Right Social Media Dock (Desktop & Mobile) */}
      <div 
        className="fixed right-3 sm:right-5 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-2.5 items-end select-none"
        aria-label="Social media quick links"
      >
        {socialLinks.map((social) => {
          const isHovered = hoveredId === social.id;
          return (
            <div key={social.id} className="relative flex items-center group">
              {/* Sliding Tooltip on Hover */}
              <div 
                className={`
                  absolute right-full mr-3 px-3 py-1 rounded-lg bg-gray-900/90 text-white text-xs font-semibold whitespace-nowrap backdrop-blur-md shadow-lg border border-white/10 transition-all duration-300 pointer-events-none
                  ${isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'}
                `}
              >
                {social.name}
                <div className="absolute top-1/2 -right-1 -translate-y-1/2 border-4 border-transparent border-l-gray-900/90"></div>
              </div>

              {/* Floating Social Icon Button */}
              <a
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setHoveredId(social.id)}
                onMouseLeave={() => setHoveredId(null)}
                className={`
                  w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-white shadow-lg transition-all duration-300 ease-out transform
                  ${social.bgColor} ${social.hoverBg} ${social.shadowColor}
                  hover:scale-115 hover:shadow-xl active:scale-95
                `}
                aria-label={`Visit our ${social.name}`}
              >
                {social.id === 'twitter' ? (
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 fill-current text-white transition-transform duration-300 group-hover:rotate-6" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                ) : (
                  <i className={`${social.icon} text-lg sm:text-xl transition-transform duration-300 group-hover:rotate-6`}></i>
                )}

              </a>
            </div>
          );
        })}
      </div>

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

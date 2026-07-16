import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-amber-900/5 text-center py-8 text-gray-600 border-t border-amber-200/30">
      <p className="font-serif-display text-lg gold-text">Sanjeevani Ayurveda</p>
      <p className="text-sm">© 2026 • Holistic healing for life</p>
      <div className="flex justify-center gap-6 mt-3 text-amber-700">
        <a href="#" className="hover:text-amber-900 transition"><i className="fab fa-instagram"></i></a>
        <a href="#" className="hover:text-amber-900 transition"><i className="fab fa-facebook"></i></a>
        <a href="#" className="hover:text-amber-900 transition"><i className="fab fa-youtube"></i></a>
      </div>
    </footer>
  );
};

export default Footer;
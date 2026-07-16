// import React from 'react';
import { mediaImages } from '../../data';

const Media = () => {
  return (
    <div className="px-6 md:px-16 py-12 max-w-7xl mx-auto">
      <h2 className="section-title font-serif-display gold-text text-4xl md:text-5xl">Media Gallery</h2>
      <p className="text-gray-600 mt-2 mb-8">A glimpse into our healing space, therapies, and natural environment.</p>
      <div className="media-grid columns-2 md:columns-3 gap-5 space-y-5">
        {mediaImages.map((img, idx) => (
          <div key={idx} className="break-inside-avoid">
            <img 
              src={img.src} 
              alt={img.alt} 
              className="hover:scale-[1.02] transition-all rounded-2xl shadow-md" 
            />
          </div>
        ))}
      </div>
      <div className="mt-12 text-center">
        <button className="btn-gold"><i className="fas fa-images mr-2"></i> View Full Album</button>
      </div>
    </div>
  );
};

export default Media;
import React, { useState, useEffect, useCallback } from 'react';
import { mediaImages } from '../../data';

const Media = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Open lightbox
  const openLightbox = (index: number) => {
    setSelectedImageIndex(index);
    document.body.style.overflow = 'hidden'; // Prevent scrolling
  };

  // Close lightbox
  const closeLightbox = () => {
    setSelectedImageIndex(null);
    document.body.style.overflow = 'auto';
  };

  // Navigate to previous image
  const prevImage = useCallback(() => {
    if (selectedImageIndex === null || isTransitioning) return;
    setIsTransitioning(true);
    setSelectedImageIndex((prev) => 
      prev === 0 ? mediaImages.length - 1 : (prev || 0) - 1
    );
    setTimeout(() => setIsTransitioning(false), 400);
  }, [selectedImageIndex, isTransitioning]);

  // Navigate to next image
  const nextImage = useCallback(() => {
    if (selectedImageIndex === null || isTransitioning) return;
    setIsTransitioning(true);
    setSelectedImageIndex((prev) => 
      prev === mediaImages.length - 1 ? 0 : (prev || 0) + 1
    );
    setTimeout(() => setIsTransitioning(false), 400);
  }, [selectedImageIndex, isTransitioning]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImageIndex === null) return;
      
      if (e.key === 'Escape') {
        closeLightbox();
      } else if (e.key === 'ArrowLeft') {
        prevImage();
      } else if (e.key === 'ArrowRight') {
        nextImage();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImageIndex, prevImage, nextImage]);

  // Handle touch events for mobile
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStartX - touchEndX > 50) {
      nextImage(); // Swipe left -> next
    }
    if (touchStartX - touchEndX < -50) {
      prevImage(); // Swipe right -> previous
    }
    setTouchStartX(0);
    setTouchEndX(0);
  };

  return (
    <div className="px-6 md:px-16 py-12 max-w-7xl mx-auto">
      <h2 className="section-title font-serif-display gold-text text-4xl md:text-5xl">Media Gallery</h2>
      <p className="text-gray-600 mt-2 mb-8">Click on any image to view in full screen</p>
      
      {/* Gallery Grid */}
      <div className="columns-2 md:columns-3 lg:columns-4 gap-5 space-y-5">
        {mediaImages.map((img, idx) => (
          <div 
            key={idx} 
            className="break-inside-avoid cursor-pointer relative group"
            onClick={() => openLightbox(idx)}
          >
            <img 
              src={img.src} 
              alt={img.alt} 
              className="rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 hover:scale-[1.02] w-full"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 rounded-2xl transition-all duration-300 flex items-center justify-center">
              <i className="fas fa-expand text-white text-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></i>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImageIndex !== null && (
        <div 
          className="fixed inset-0 z-[1000] bg-black/95 flex items-center justify-center p-4 animate-fadeIn"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button 
            className="absolute top-6 right-6 text-white text-4xl hover:text-amber-400 transition-colors z-10"
            onClick={closeLightbox}
            aria-label="Close gallery"
          >
            <i className="fas fa-times"></i>
          </button>

          {/* Image Counter */}
          <div className="absolute top-6 left-6 text-white text-sm bg-black/50 px-4 py-2 rounded-full">
            {selectedImageIndex + 1} / {mediaImages.length}
          </div>

          {/* Previous Button */}
          <button 
            className="absolute left-4 md:left-8 text-white text-4xl hover:text-amber-400 transition-colors z-10 p-2 bg-black/30 hover:bg-black/50 rounded-full backdrop-blur-sm"
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            aria-label="Previous image"
            disabled={isTransitioning}
          >
            <i className="fas fa-chevron-left"></i>
          </button>

          {/* Next Button */}
          <button 
            className="absolute right-4 md:right-8 text-white text-4xl hover:text-amber-400 transition-colors z-10 p-2 bg-black/30 hover:bg-black/50 rounded-full backdrop-blur-sm"
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            aria-label="Next image"
            disabled={isTransitioning}
          >
            <i className="fas fa-chevron-right"></i>
          </button>

          {/* Image Container with Slide Animation */}
          <div 
            className="relative w-full max-w-5xl max-h-[90vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div className={`w-full h-full transition-all duration-400 ease-in-out transform ${
              isTransitioning ? 'scale-95 opacity-70' : 'scale-100 opacity-100'
            }`}>
              <img 
                src={mediaImages[selectedImageIndex].src} 
                alt={mediaImages[selectedImageIndex].alt}
                className="max-w-full max-h-[85vh] object-contain mx-auto rounded-lg shadow-2xl"
              />
            </div>

            {/* Image Title/Description */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white text-center bg-black/50 px-6 py-3 rounded-full backdrop-blur-sm">
              <p className="text-sm md:text-base font-light">
                {mediaImages[selectedImageIndex].alt}
              </p>
            </div>
          </div>

          {/* Thumbnail Navigation */}
          <div className="absolute bottom-20 left-1/2 -translate-x-1/2 hidden md:flex gap-2 overflow-x-auto max-w-[80vw] px-4 py-2">
            {mediaImages.map((img, idx) => (
              <button
                key={idx}
                className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden transition-all duration-300 ${
                  idx === selectedImageIndex 
                    ? 'ring-2 ring-amber-400 scale-110' 
                    : 'opacity-60 hover:opacity-100'
                }`}
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImageIndex(idx);
                }}
              >
                <img 
                  src={img.src} 
                  alt={img.alt} 
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Media;
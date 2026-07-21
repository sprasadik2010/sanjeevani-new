import React from 'react';
import pdfLogoImg from '../../assets/pdf_logo_transparent.png';

interface PdfLogoProps {
  className?: string;
  height?: string | number;
}

const PdfLogo: React.FC<PdfLogoProps> = ({ className = "h-12 md:h-14 w-auto object-contain", height }) => {
  return (
    <div className="flex items-center select-none">
      <img
        src={pdfLogoImg}
        alt="Vaidyar M. Vishnu Patteri's Sanjeevani Group ESTD 1979"
        className={className}
        style={height ? { height } : undefined}
      />
    </div>
  );
};

export default PdfLogo;

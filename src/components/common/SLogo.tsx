import React from 'react';
import logoimg from '../../assets/sanjeevanilogo.svg';

const Logo: React.FC = () => {
    return (
        <div className="flex items-center space-x-4 font-sans">
            <div className="flex-shrink-0 animate-pulse">
                <img
                    src={logoimg}
                    alt="Logo"
                    className="w-12 h-auto"
                />
            </div>
            <div className="flex flex-col w-auto select-none">
                <div className="text-[11px] font-medium font-serif text-[#13783B] tracking-[0.25em] pl-[0.25em] border-b border-[#13783B] pb-[2px] text-center leading-none">
                    Vaidyar M.Vishnu Patteri's
                </div>
                <div className="text-[25px] font-bold font-bauhaus text-[#FF2A00] leading-none tracking-normal uppercase text-center mt-0.5">
                    SANJEEVANI GROUP
                </div>
                <div className="text-[12px] font-serif text-black text-center mt-0.5 leading-none">
                    ESTD 1979
                </div>
            </div>
        </div>
    );
};

export default Logo;
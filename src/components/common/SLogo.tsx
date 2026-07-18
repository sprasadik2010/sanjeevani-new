import React from 'react';
import logoimg from '../../assets/sanjeevanilogo.svg';

const Logo: React.FC = () => {
    return (
        <div className="flex items-center space-x-4 font-sans">
            <div className="flex-shrink-0 animate-pulse">
                <img
                    src={logoimg}
                    alt="Logo"
                    className="w-10 h-auto"
                />
            </div>
            <div className="flex flex-col w-auto select-none">
                <div className="text-[19px] font-medium font-serif text-[#13783B] tracking-wide border-b-2 border-[#13783B] pb-0.5 text-center leading-none">
                    Vaidyar M.Vishnu Patteri's
                </div>
                <div className="text-[38px] font-bold font-bauhaus text-[#FF2A00] leading-none tracking-normal uppercase text-center mt-1">
                    SANJEEVANI GROUP
                </div>
                <div className="text-[20px] font-serif text-black text-center mt-1 leading-none">
                    ESTD 1979
                </div>
            </div>
        </div>
    );
};

export default Logo;
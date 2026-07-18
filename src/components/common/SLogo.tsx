import React from 'react';
import logoimg from '../../assets/sanjeevanilogo.svg';

const Logo: React.FC = () => {
    return (
        <div className="flex items-center space-x-4">
            <div className="flex-shrink-0 animate-pulse">
                <img
                    src={logoimg}
                    alt="Logo"
                    className="w-10 h-auto"
                />
            </div>
            <div className="flex flex-col w-auto">
                <div className="text-sm text-green font-semibold text-center underline">
                    Vaidyar M. Vishnu Patteri's
                </div>
                <div className="text-xl font-bold font-bauhaus text-red-500 -mt-2">
                    SANJEEVANI GROUP
                </div>
                <div className="text-xs text-center -mt-2">
                    ESTD 1979
                </div>
            </div>
        </div>
    );
};

export default Logo;
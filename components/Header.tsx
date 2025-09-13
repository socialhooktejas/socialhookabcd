
import React from 'react';
// fix: Changed named import to default import for SkullIcon
import SkullIcon from './icons/SkullIcon';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <div className="bg-black rounded-full p-2 border-2 border-red-600">
            <SkullIcon className="w-8 h-8 text-white" />
          </div>
          <span className="text-2xl font-extrabold tracking-wider">
            SOCIAL<span className="text-red-500">HOOK</span>
          </span>
        </div>
        <a
          href="#join"
          className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-red-600/30"
        >
          Join Now
        </a>
      </div>
    </header>
  );
};

export default Header;

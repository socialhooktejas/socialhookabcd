
import React from 'react';
// fix: Changed named import to default import for SkullIcon
import SkullIcon from './icons/SkullIcon';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20 bg-[#0A0A0A]">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_rgba(239,68,68,0.15)_0%,_transparent_40%)]"></div>
      <div className="container mx-auto px-6 text-center z-10">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-4 text-gray-100">
          Debate. Win.
          <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-red-700">Get Paid.</span>
        </h1>
        <p className="text-lg md:text-xl font-semibold text-gray-300 mb-10 max-w-2xl mx-auto">
          Welcome to SocialHook, India's first revenue-sharing social media platform where your opinions have both influence and income.
        </p>

        {/* Phone Mockup with Splash Screen */}
        <div className="relative mx-auto w-[280px] h-[560px] md:w-[300px] md:h-[600px] bg-gray-900 rounded-[40px] border-[10px] border-gray-800 shadow-2xl shadow-red-900/30 overflow-hidden transform transition-transform hover:scale-105 duration-500">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-gray-800 rounded-b-xl z-10"></div>
          <div className="h-full w-full bg-black flex flex-col items-center justify-center p-4">
              <SkullIcon className="w-24 h-24 text-gray-200" />
              <div className="mt-4 text-center">
                  <span className="text-4xl font-extrabold tracking-wider text-gray-200">
                      SOCIAL<span className="text-red-500">HOOK</span>
                  </span>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

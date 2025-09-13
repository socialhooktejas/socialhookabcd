
import React from 'react';
// fix: Changed named import to default import for SkullIcon
import SkullIcon from './icons/SkullIcon';

const Footer: React.FC = () => {
  return (
    <footer id="join" className="bg-[#0A0A0A] relative overflow-hidden py-20 sm:py-24">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,_rgba(127,29,29,0.15)_0%,_transparent_50%)]"></div>
      
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-gray-900/50 border border-gray-700 rounded-2xl p-8 md:p-12 shadow-2xl shadow-red-900/10">
          
          {/* Left: Text content */}
          <div className="text-center lg:text-left">
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-4">
              <SkullIcon className="w-12 h-12 text-red-500 flex-shrink-0" />
              <h3 className="text-4xl md:text-5xl font-extrabold tracking-tight">
                Join The <span className="text-red-500">Revolution.</span>
              </h3>
            </div>
            <p className="text-lg text-gray-400 max-w-lg mx-auto lg:mx-0">
              Be the first to know when we launch. Get early access, exclusive rewards, and start earning from day one.
            </p>
          </div>

          {/* Right: Form */}
          <div>
            <form className="flex flex-col sm:flex-row gap-3 w-full max-w-md mx-auto lg:mx-0">
              <input 
                type="email" 
                placeholder="Your best email..." 
                className="flex-grow p-4 rounded-lg bg-gray-800 border border-gray-600 text-white focus:outline-none focus:ring-2 focus:ring-red-500 transition w-full"
                aria-label="Email for early access"
              />
              <button 
                type="submit"
                className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg shadow-red-600/30 w-full sm:w-auto flex-shrink-0"
              >
                  Get Notified
              </button>
            </form>
            <p className="text-xs text-gray-500 mt-3 text-center lg:text-left">No spam, ever. Unsubscribe anytime.</p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center text-gray-500">
            <div className="flex items-center space-x-2">
                <span className="text-sm">&copy; {new Date().getFullYear()} SocialHook. All rights reserved.</span>
            </div>
            <div className="mt-4 sm:mt-0 text-sm">
                <p>Contact: <a href="mailto:tejasmawale4@gmail.com" className="hover:text-red-500 transition-colors">tejasmawale4@gmail.com</a></p>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

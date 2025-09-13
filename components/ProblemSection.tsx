import React from 'react';

const SolutionStep: React.FC<{ number: number; title: string; description: string }> = ({ number, title, description }) => (
    <div className="flex items-start space-x-4">
        <div className="flex-shrink-0 w-10 h-10 bg-red-600/20 text-red-400 border-2 border-red-500 rounded-full flex items-center justify-center font-bold text-lg">
            {number}
        </div>
        <div>
            <h4 className="font-bold text-lg text-white">{title}</h4>
            <p className="text-gray-400">{description}</p>
        </div>
    </div>
);

const AboutSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#111111]">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column: The Problem */}
          <div className="lg:pr-10">
            <h2 className="text-sm font-bold uppercase tracking-widest text-red-500 mb-2">THE PROBLEM</h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
              Your Time & Effort <br/> Go <span className="text-yellow-400">Unpaid.</span>
            </h3>
            <p className="mt-6 text-lg text-gray-400">
              Current social platforms are built to capture your attention, not to reward your contribution. Millions of users generate massive revenue for these companies, but see none of the profits themselves.
            </p>
            <div className="mt-8 space-y-4">
                <div className="flex items-center space-x-3 text-lg"><span className="text-red-500 font-bold text-2xl">✗</span> <p><strong>100% of Users</strong> earn ₹0 from debates & discussions.</p></div>
                <div className="flex items-center space-x-3 text-lg"><span className="text-red-500 font-bold text-2xl">✗</span> <p><strong>2.5+ Hours a Day</strong> spent creating value for others.</p></div>
                <div className="flex items-center space-x-3 text-lg"><span className="text-red-500 font-bold text-2xl">✗</span> <p><strong>₹67,900 Cr Annual Revenue</strong> kept by platforms.</p></div>
            </div>
          </div>

          {/* Right Column: The Solution */}
          <div className="bg-gray-900 p-8 rounded-2xl border border-gray-700">
             <h2 className="text-sm font-bold uppercase tracking-widest text-yellow-400 mb-2">OUR SOLUTION</h2>
             <h3 className="text-3xl font-extrabold text-white mb-8">The Revenue-Sharing Cycle</h3>
             <div className="space-y-6">
                <SolutionStep number={1} title="Debate & Earn" description="Join engaging, time-limited debates on topics you're passionate about." />
                <SolutionStep number={2} title="Drive Engagement" description="As you defend your opinions, you create a hyper-engaged community." />
                <SolutionStep number={3} title="Fund Prize Pools" description="This engagement generates ad revenue, which directly funds the prize pools for debates." />
                <SolutionStep number={4} title="Winners Get Paid" description="Your compelling arguments get upvoted. The best ones win real money." />
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
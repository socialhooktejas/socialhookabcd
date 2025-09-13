import React from 'react';
import { MoneyIcon, AIBrainIcon, FireIcon } from './icons/FeatureIcons';

const FeatureItem: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
    <div className="flex items-start space-x-4 p-4 rounded-lg transition-colors duration-300 hover:bg-gray-900/50">
        <div className="flex-shrink-0 text-red-500 mt-1">
            {icon}
        </div>
        <div>
            <h4 className="font-bold text-lg text-white">{title}</h4>
            <p className="text-gray-400">{description}</p>
        </div>
    </div>
);

const Stat: React.FC<{ value: string; label: string }> = ({ value, label }) => (
    <div className="text-center">
        <p className="text-3xl lg:text-4xl font-extrabold text-white">{value}</p>
        <p className="text-gray-400 text-sm mt-1 uppercase tracking-wider">{label}</p>
    </div>
);

const HighlightsSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#0A0A0A]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold">Why SocialHook Wins</h2>
          <p className="text-lg text-gray-400 mt-4 max-w-3xl mx-auto">
            We're not just building another social app. We're building a platform where your social skills equal real income.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column: Feature Stack */}
            <div className="space-y-6">
                <FeatureItem
                    icon={<MoneyIcon />}
                    title="Skill-Based Earnings"
                    description="Turn your opinions into real income. Win debates, earn cash rewards, and get paid for your influence from day one."
                />
                 <FeatureItem
                    icon={<AIBrainIcon />}
                    title="AI-Powered Matchmaking"
                    description="Instantly connect with like-minded individuals for engaging debates, ending the loneliness of traditional social platforms."
                />
                 <FeatureItem
                    icon={<FireIcon />}
                    title="Addictive Retention Mechanics"
                    description="Daily usage builds your streak. Time pressure, real money, and ego create an unbeatable loop that keeps users hooked."
                />
            </div>

            {/* Right Column: Traction Dashboard */}
            <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl border border-red-500/30 relative shadow-2xl shadow-red-900/20">
                <div className="absolute -top-3 -right-3 w-16 h-16 bg-red-600 rounded-full blur-2xl opacity-50"></div>
                <h3 className="text-center text-sm font-bold uppercase tracking-widest text-yellow-400 mb-8">Proven Traction (First 29 Days)</h3>
                <div className="grid grid-cols-2 gap-8">
                    <Stat value="21K+" label="Visits" />
                    <Stat value="12K+" label="Unique Users" />
                    <Stat value="4.5min" label="Avg. Session" />
                    <Stat value="57%" label="Signup Rate" />
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default HighlightsSection;
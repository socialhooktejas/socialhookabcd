
import React from 'react';
import { MoneyIcon, AIBrainIcon, FireIcon } from './icons/FeatureIcons';

interface FeatureCardProps {
    icon: React.ReactNode;
    title: string;
    line1: string;
    line2: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, line1, line2 }) => {
    return (
        <div className="flex items-center space-x-6 p-6 bg-gray-800 rounded-lg border border-gray-700 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-red-900/30">
            <div className="flex-shrink-0">
                {icon}
            </div>
            <div className="flex-grow">
                <div className="bg-red-600 inline-block px-3 py-1 rounded-md mb-3">
                    <h3 className="text-lg font-bold text-white">{title}</h3>
                </div>
                <p className="text-xl font-semibold">{line1}</p>
                <p className="text-gray-400">{line2}</p>
            </div>
        </div>
    );
};


const FeaturesSection: React.FC = () => {
    const features: FeatureCardProps[] = [
        {
            icon: <MoneyIcon />,
            title: "Skill-based Challenges",
            line1: "Win debates → Cash rewards",
            line2: "(Turning opinions into income)",
        },
        {
            icon: <AIBrainIcon />,
            title: "AI Matchmaking",
            line1: "Connect with like-minded instantly",
            line2: "(No more loneliness)",
        },
        {
            icon: <FireIcon />,
            title: "5 min Streak",
            line1: "Use daily → Keep points & money",
            line2: "(Built-in habit + retention)",
        },
    ];

    return (
        <section className="py-20 bg-gray-900">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-sm font-bold uppercase tracking-widest text-yellow-400">The Socialhook Effect</h2>
                    <p className="text-4xl md:text-5xl font-extrabold mt-2">More Than Just a Platform</p>
                </div>
                <div className="max-w-4xl mx-auto space-y-8">
                    {features.map((feature, index) => (
                        <FeatureCard key={index} {...feature} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturesSection;

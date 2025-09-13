
import React from 'react';

interface TractionCardProps {
    value: string;
    label: string;
    subLabel: string;
    bgColor: string;
}

const TractionCard: React.FC<TractionCardProps> = ({ value, label, subLabel, bgColor }) => {
    return (
        <div className={`${bgColor} text-white p-6 rounded-xl shadow-lg transform transition-transform duration-300 hover:scale-105`}>
            <p className="text-4xl font-extrabold">{value}</p>
            <p className="text-lg font-semibold mt-1">{label}</p>
            <p className="text-sm opacity-80">{subLabel}</p>
        </div>
    );
};

const TractionSection: React.FC = () => {
    return (
        <section className="py-20 bg-black">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-sm font-bold uppercase tracking-widest text-red-500">Proven Success</h2>
                    <p className="text-4xl md:text-5xl font-extrabold mt-2">Traction in 29 days</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    <TractionCard value="21,000+" label="Visits" subLabel="(724 avg)" bgColor="bg-red-600" />
                    <TractionCard value="12,000+" label="Unique Visitors" subLabel="(explored further)" bgColor="bg-blue-600" />
                    <TractionCard value="4.5 min" label="Avg. Time/Session" subLabel="(vs ind. 2.3 avg)" bgColor="bg-yellow-500" />
                    <TractionCard value="1,900+" label="Total Signups" subLabel="(57% conversion)" bgColor="bg-green-600" />
                </div>
                 <div className="mt-12 text-center">
                    <p className="text-xl md:text-2xl font-semibold text-gray-300 bg-gray-800 p-6 rounded-lg border border-gray-700 max-w-4xl mx-auto">
                    "Users are setting phone alarms to not miss debates. That's <span className="text-red-500">addiction-level engagement.</span>"
                    </p>
                </div>
            </div>
        </section>
    );
};

export default TractionSection;

import React from 'react';

interface TeamMember {
    name: string;
    role: string;
    experience: string;
    description: string;
    imageUrl: string;
}

const team: TeamMember[] = [
    {
        name: "Tejas Mawale",
        role: "Founder & CEO",
        experience: "(Ex- spiritual bhakti & podcastfresh)",
        description: "Driving vision & strategy, Deep understanding of User psychology + monetization",
        imageUrl: "https://picsum.photos/seed/tejas/200/200"
    },
    {
        name: "Swati Srivastava",
        role: "Cofounder & CMO",
        experience: "(Ex-ShareChat)",
        description: "Scaled user growth to 100M+. Knows how to crack Indian Social media growth",
        imageUrl: "https://picsum.photos/seed/swati/200/200"
    },
    {
        name: "Anant Pandey (AI/ML)",
        role: "Cofounder & CTO",
        experience: "(Ex-Turing)",
        description: "Can build AI/ML and has experience to Scale systems to millions",
        imageUrl: "https://picsum.photos/seed/anant/200/200"
    }
];

const TeamMemberCard: React.FC<TeamMember> = ({ name, role, experience, description, imageUrl }) => {
    return (
        <div className="bg-gray-900 rounded-2xl p-6 text-center border border-gray-700 transform transition-all duration-300 hover:border-yellow-400 hover:-translate-y-2 group">
            <img src={imageUrl} alt={name} className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-gray-800 group-hover:border-yellow-400/50 transition-colors duration-300"/>
            <h3 className="text-xl font-bold text-yellow-400">{name}</h3>
            <p className="font-semibold text-white">{role}</p>
            <p className="text-sm text-gray-500 mb-4">{experience}</p>
            <p className="text-gray-300 text-sm">{description}</p>
        </div>
    );
};


const TeamSection: React.FC = () => {
    return (
        <section className="py-24 bg-[#0A0A0A]">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-extrabold">The Team Building India's First</h2>
                    <p className="text-4xl md:text-5xl font-extrabold text-red-500">Social-Earning Network</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {team.map(member => <TeamMemberCard key={member.name} {...member} />)}
                </div>
            </div>
        </section>
    );
};

export default TeamSection;
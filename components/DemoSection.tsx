import React, { useState, useEffect } from 'react';
import { LiveIcon } from './icons/LiveIcon';

const Dialog: React.FC<{ message: string; onClose: () => void }> = ({ message, onClose }) => (
    <div 
      className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="dialog-title"
    >
      <div 
        className="bg-gray-800 rounded-lg shadow-xl p-6 w-full max-w-sm text-center border border-gray-600"
        onClick={e => e.stopPropagation()}
      >
        <h3 id="dialog-title" className="text-lg font-semibold text-white mb-4">{message}</h3>
        <button
          onClick={onClose}
          className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded-lg transition-all duration-300"
          aria-label="Close dialog"
        >
          OK
        </button>
      </div>
    </div>
);

const DemoSection: React.FC = () => {
    const [messiVotes, setMessiVotes] = useState(78500);
    const [ronaldoVotes, setRonaldoVotes] = useState(82300);
    const [voted, setVoted] = useState<'messi' | 'ronaldo' | null>(null);
    const [dialogMessage, setDialogMessage] = useState<string | null>(null);

    const totalVotes = messiVotes + ronaldoVotes;
    const messiPercentage = totalVotes > 0 ? (messiVotes / totalVotes) * 100 : 50;
    const ronaldoPercentage = totalVotes > 0 ? (ronaldoVotes / totalVotes) * 100 : 50;

    useEffect(() => {
        if (voted) return; // Stop random updates after user has voted
        const interval = setInterval(() => {
            setMessiVotes(v => v + Math.floor(Math.random() * 5) + 1);
            setRonaldoVotes(v => v + Math.floor(Math.random() * 5) + 1);
        }, 2000);
        return () => clearInterval(interval);
    }, [voted]);

    const handleVote = (player: 'messi' | 'ronaldo') => {
        if (!voted) {
            if (player === 'messi') setMessiVotes(v => v + 1);
            if (player === 'ronaldo') setRonaldoVotes(v => v + 1);
            setVoted(player);
            setDialogMessage('Your response has been recorded!');
        }
    };

    const handleJoinDebate = () => {
        setDialogMessage('Your response has been recorded!');
    };

    return (
        <section className="py-24 bg-[#111111]">
            {dialogMessage && <Dialog message={dialogMessage} onClose={() => setDialogMessage(null)} />}
            <div className="container mx-auto px-6 flex flex-col items-center">
                <div className="text-center mb-12">
                    <h2 className="text-sm font-bold uppercase tracking-widest text-red-500">Experience SocialHook</h2>
                    <p className="text-4xl md:text-5xl font-extrabold mt-2">The Debate Arena</p>
                    <p className="text-lg text-gray-400 mt-4 max-w-3xl mx-auto">
                        This is a live simulation of our core debate feature. Cast your vote and watch the community decide the winner!
                    </p>
                </div>
                
                <div className="w-full max-w-md bg-gray-900 rounded-2xl border border-gray-700 shadow-2xl shadow-red-900/20 p-1">
                    <div className="bg-gray-800 rounded-[14px] p-4">
                        {/* Header */}
                        <div className="flex justify-between items-center mb-4">
                            <div>
                                <div className="bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-md inline-block">HOT DEBATE</div>
                            </div>
                            <div className="flex items-center space-x-2 text-red-400">
                               <LiveIcon />
                               <span className="font-bold text-sm">{(totalVotes / 1000).toFixed(1)}K LIVE</span>
                            </div>
                        </div>

                        <h3 className="text-xl font-bold text-center mb-4">Messi vs Ronaldo: Who is the Football GOAT?</h3>
                        
                        {/* Image */}
                        <div className="relative mb-4">
                             <img src="https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=870&auto=format&fit=crop" alt="Football on a pitch" className="w-full h-auto rounded-lg shadow-lg object-cover aspect-[16/9]"/>
                             <div className="absolute bottom-2 right-2 bg-black/50 text-white text-xs font-semibold px-2 py-1 rounded-md">
                                Closes in 3h 15m
                             </div>
                        </div>

                        {/* Voting Section */}
                        <div className="flex items-center justify-between mb-2 text-sm font-bold">
                            <div className="flex items-center space-x-2">
                                <img src="https://i.pravatar.cc/24?u=messi" alt="Lionel Messi" className="rounded-full"/>
                                <span>Lionel Messi</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <span>Cristiano Ronaldo</span>
                                <img src="https://i.pravatar.cc/24?u=ronaldo" alt="Cristiano Ronaldo" className="rounded-full"/>
                            </div>
                        </div>
                        
                        <div className="flex items-center space-x-2 mb-2">
                           <div className="w-full bg-gray-700 rounded-full h-2.5">
                                <div className="bg-gradient-to-r from-blue-600 to-blue-400 h-2.5 rounded-l-full text-right transition-all duration-500 ease-out" style={{ width: `${messiPercentage}%` }}></div>
                            </div>
                        </div>

                        <div className="flex justify-between text-xs text-gray-400 font-semibold">
                            <span>{messiPercentage.toFixed(1)}% | {(messiVotes / 1000).toFixed(1)}K votes</span>
                             <span>{ronaldoPercentage.toFixed(1)}% | {(ronaldoVotes / 1000).toFixed(1)}K votes</span>
                        </div>

                         {/* Action Buttons */}
                        <div className="flex space-x-4 mt-6">
                            <button onClick={() => handleVote('messi')} disabled={!!voted} className={`w-full py-3 rounded-lg font-bold transition-all text-sm ${!voted ? 'bg-blue-600 hover:bg-blue-700' : voted === 'messi' ? 'bg-blue-500 ring-2 ring-white' : 'bg-gray-600 cursor-not-allowed'}`}>
                                {voted === 'messi' ? 'Voted!' : 'Vote Messi'}
                            </button>
                            <button onClick={() => handleVote('ronaldo')} disabled={!!voted} className={`w-full py-3 rounded-lg font-bold transition-all text-sm ${!voted ? 'bg-red-600 hover:bg-red-700' : voted === 'ronaldo' ? 'bg-red-500 ring-2 ring-white' : 'bg-gray-600 cursor-not-allowed'}`}>
                                {voted === 'ronaldo' ? 'Voted!' : 'Vote Ronaldo'}
                            </button>
                        </div>

                        <div className="mt-4">
                             <button onClick={handleJoinDebate} className="w-full bg-yellow-500 text-black font-bold py-3 rounded-lg transition-transform hover:scale-105">Join The Full Debate</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DemoSection;
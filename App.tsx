import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutSection from './components/ProblemSection'; // Repurposed as AboutSection
import HighlightsSection from './components/SolutionSection'; // Repurposed as HighlightsSection
import DemoSection from './components/DemoSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-[#0A0A0A] text-white font-sans antialiased overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <AboutSection />
        <HighlightsSection />
        <DemoSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
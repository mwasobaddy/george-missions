import React from 'react';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import MissionOverview from './MissionOverview';
import ScriptureLoader from './ScriptureLoader';
import LatestUpdates from './LatestUpdates';
import Testimonials from './Testimonials';
import DonationHighlights from './DonationHighlights';

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <MissionOverview />
      <ScriptureLoader />
      <LatestUpdates />
      <Testimonials />
      <DonationHighlights />
    </div>
  );
};

export default HomePage;
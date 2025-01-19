import React from 'react';
import HeroSection from '../component/HeroSection';
import MissionOverview from '../component/MissionOverview';
import ScriptureLoader from '../component/ScriptureLoader';
import LatestUpdates from '../component/LatestUpdates';
import Testimonials from '../component/Testimonials';
import DonationHighlights from '../component/DonationHighlights';

const HomePage = () => {
  return (
    <div className="min-h-screen">
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
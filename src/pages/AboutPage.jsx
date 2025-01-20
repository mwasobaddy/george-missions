import React, { useEffect, useRef } from 'react';
import AboutHeroSection from '../component/AboutHeroSection';
import AboutUs from '../component/AboutUs';
import MissionVision from '../component/MissionVision';
import ContactUs from '../component/ContactUs';

const AboutPage = () => {

    return (
        <div className="bg-gray-50 overflow-x-hidden">
            <AboutHeroSection />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <AboutUs />
                <MissionVision />
                <ContactUs />
            </div>
        </div>
    );
};

export default AboutPage;
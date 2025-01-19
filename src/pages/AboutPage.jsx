import React, { useEffect, useRef } from 'react';
import AboutUs from '../component/AboutUs';
import MissionVision from '../component/MissionVision';
import ContactUs from '../component/ContactUs';

const AboutPage = () => {

    return (
        <div className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <AboutUs />
                <MissionVision />
                <ContactUs />
            </div>
        </div>
    );
};

export default AboutPage;
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

// MissionVision Section

const MissionVision = () => {

    const missionVisionRef = useRef(null);

    useEffect(() => {
        if (missionVisionRef.current) {
            gsap.fromTo(missionVisionRef.current,
                { opacity: 0, y: 50 },
                { opacity: 1, y: 0, duration: 1, delay: 0.5 }
            );
        } else {
            console.error('Scripture element not found');
        }
    }, []);

    return (
        <section ref={missionVisionRef} className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8 after">
            <span class="px-4 before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-orange-600 relative inline-block">
                <span class="relative text-white">Mission</span>
            </span>
            <span class="px-4 before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-gray-600 relative inline-block">
                <span class="relative text-white">and</span>
            </span>
            <span class="px-4 before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-orange-600 relative inline-block">
                <span class="relative text-white">Vission</span>
            </span>
        </h2>
            <p className="text-gray-600 text-center">
                Our mission is to empower individuals and communities by fostering a spirit of compassion, generosity, and service. We envision a world where everyone has the opportunity to thrive and reach their full potential.
            </p>
        </section>
    );
};

export default MissionVision;
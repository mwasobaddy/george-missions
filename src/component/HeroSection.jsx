import React, { useEffect, useRef } from 'react';
import backgroundImage from '../assets/hero-background.webp';
import gsap from 'gsap';

// Hero Section

const HeroSection = () => {

    const heroRef = useRef(null);
    
    useEffect(() => {
        if (heroRef.current) {
            gsap.fromTo(heroRef.current, 
                { opacity: 0, y: -50 }, 
                { opacity: 1, y: 0, duration: 1 }
            );
        } else {
            console.error('Scripture element not found');
        }
    }, []);

    return (
        <div
            ref={heroRef}
            className="relative overflow-hidden bg-cover bg-center"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <div className="bg-orange-200/50 pt-16 pb-32">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="relative z-10 pt-20 pb-12 sm:pt-24 lg:pt-32">
                        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                            <span className="block">Spreading Hope</span>
                            <span className="block text-orange-600">Around the World</span>
                        </h1>
                        <p className="mt-6 text-xl text-gray-800 max-w-3xl font-semibold">
                            Join us in our mission to share God's love and make a lasting impact in communities worldwide.
                        </p>
                        <div className="mt-10 flex gap-4">
                            <button className="bg-orange-600 text-white px-8 py-3 rounded-full hover:bg-orange-700">
                                Support Our Mission
                            </button>
                            <button className="text-orange-600 border-2 border-orange-600 px-8 py-3 rounded-full hover:bg-orange-50">
                                Learn More
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
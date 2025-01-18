import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Globe, Users, Heart, Book } from 'lucide-react';

// Mission Overview Section with Stats

const MissionOverview = () => {

    const missionRef = useRef(null);
    
    useEffect(() => {
        if (missionRef.current) {
            gsap.fromTo(missionRef.current, 
                { opacity: 0, x: -50 }, 
                { opacity: 1, x: 0, duration: 1, delay: 0.5 }
            );
        } else {
            console.error('Scripture element not found');
        }
    }, []);

    return (
        <div ref={missionRef} id="mission" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
                    <p className="mt-4 text-xl text-gray-500">
                        Transforming lives through faith, service, and community building
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {[
                        { icon: <Globe className="w-8 h-8 text-orange-600" />, stat: "12+", label: "Countries Served" },
                        { icon: <Users className="w-8 h-8 text-orange-600" />, stat: "10,000+", label: "Lives Impacted" },
                        { icon: <Heart className="w-8 h-8 text-orange-600" />, stat: "50+", label: "Active Projects" },
                        { icon: <Book className="w-8 h-8 text-orange-600" />, stat: "1,000+", label: "Bibles Distributed" }
                    ].map((item, index) => (
                        <div key={index} className="text-center p-6 bg-orange-50 rounded-lg">
                            <div className="flex justify-center mb-4">{item.icon}</div>
                            <div className="text-3xl font-bold text-gray-900">{item.stat}</div>
                            <div className="text-gray-500">{item.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MissionOverview;
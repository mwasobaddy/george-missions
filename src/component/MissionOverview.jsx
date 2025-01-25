import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Globe, Users, Heart, Book } from 'lucide-react';
import CountUp from 'react-countup';

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
            console.error('MissionOverview element not found');
        }
    }, []);

    return (
        <div ref={missionRef} id="mission" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-center mb-8 after">
                        <span class="px-4 before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-orange-600 relative inline-block">
                            <span class="relative text-white">Our</span>
                        </span>
                        <span class="px-4 before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-gray-600 relative inline-block">
                            <span class="relative text-white">Mission</span>
                        </span>
                    </h2>
                    <p className="mt-4 text-xl text-gray-500">
                        Transforming lives through faith, service, and community building by spreading hope around the world and locally.
                        Our mission is to reach those in need, support communities, and build lasting relationships through faith and service. We envision a world where the Gospel is accessible to everyone, fostering communities of hope and love.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {[
                        { icon: <Globe className="w-8 h-8 text-orange-600" />, stat: <><CountUp end={5} duration={15} />+</>, label: "Countries Served" },
                        { icon: <Users className="w-8 h-8 text-orange-600" />, stat: <><CountUp end={10000} duration={15} />+</>, label: "Lives Impacted" },
                        { icon: <Heart className="w-8 h-8 text-orange-600" />, stat: <><CountUp end={10} duration={15} />+</>, label: "Active Projects" },
                        { icon: <Book className="w-8 h-8 text-orange-600" />, stat: <><CountUp end={1000} duration={15} />+</>, label: "Bibles Distributed" }
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
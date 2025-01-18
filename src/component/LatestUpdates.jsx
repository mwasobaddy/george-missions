import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ChevronRight } from 'lucide-react';

// Latest Updates Section

const LatestUpdates = () => {

    const updatesRef = useRef(null);
    
    useEffect(() => {
        if (updatesRef.current) {
            gsap.fromTo(updatesRef.current, 
                { opacity: 0, x: 50 }, 
                { opacity: 1, x: 0, duration: 1, delay: 1.5 }
            );
        } else {
            console.error('Scripture element not found');
        }
    }, []);

    return (
        <div ref={updatesRef} id="updates" className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center mb-16">Latest Updates</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[1, 2, 3].map((item) => (
                        <div key={item} className="bg-white rounded-lg overflow-hidden shadow-lg">
                            <div className="h-48 bg-gray-200">
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold mb-2">Mission Update {item}</h3>
                                    <p className="text-gray-600 mb-4">
                                        Latest news and updates from our ongoing mission work...
                                    </p>
                                    <button className="text-orange-600 font-semibold flex items-center">
                                        Read More <ChevronRight className="ml-1 w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default LatestUpdates;
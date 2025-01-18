import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

// Testimonials Section

const Testimonials = () => {

    const testimonialsRef = useRef(null);

    useEffect(() => {
        if (testimonialsRef.current) {
            gsap.fromTo(testimonialsRef.current, 
                { opacity: 0, y: -50 }, 
                { opacity: 1, y: 0, duration: 1, delay: 2 }
            );
        } else {
            console.error('Scripture element not found');
        }
    }, []);

    return (
        <div ref={testimonialsRef} id="testimonials" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center mb-16">Impact Stories</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {[1, 2].map((item) => (
                        <div key={item} className="bg-orange-50 p-8 rounded-lg">
                            <p className="text-gray-600 italic mb-4">
                                "The support and guidance from George has transformed our community..."
                            </p>
                            <div className="flex items-center">
                                <div className="w-12 h-12 rounded-full bg-gray-300">
                                    <div className="ml-4">
                                        <p className="font-semibold">John Doe</p>
                                        <p className="text-gray-500">Community Leader</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

// Testimonials Section
const updates = [
    {
        content: "Witnessing George's dedication overseas inspired me to serve others in my own community.",
        position: "A Donor",
    },
    {
        content: "Thanks to the funds raised, we were able to provide food and shelter to families in need.",
        position: "Community leader",
    },
    {
        content: "Since George started praying with us, I feel a renewed sense of peace and hope.",
        position: "Local resident",
    }
];

const Testimonials = () => {
    const testimonialsRef = useRef(null);

    useEffect(() => {
        if (testimonialsRef.current) {
            gsap.fromTo(testimonialsRef.current, 
                { opacity: 0, y: -50 }, 
                { opacity: 1, y: 0, duration: 1, delay: 2 }
            );
        } else {
            console.error('Testimonials element not found');
        }
    }, []);

    return (
        <div ref={testimonialsRef} id="testimonials" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center mb-16">Impact Stories</h2>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {updates.map((update, index) => (
                        <div key={index} className="bg-orange-50 p-8 rounded-lg">
                            <p className="text-gray-600 italic mb-4">
                                "{update.content}"
                            </p>
                            <div className="flex items-center">
                                <div className="w-12 h-12 rounded-full bg-gray-300"></div>
                                <div className="ml-4">
                                    <p className="text-gray-500">{update.position}</p>
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
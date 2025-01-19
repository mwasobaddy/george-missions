import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Gift } from 'lucide-react';

// DonationHighlights Section

const DonationHighlights = () => {

    const donationRef = useRef(null);
    
    useEffect(() => {
        if (donationRef.current) {
            gsap.fromTo(donationRef.current, 
                { opacity: 0, x: -50 }, 
                { opacity: 1, x: 0, duration: 1, delay: 2.5 }
            );
        } else {
            console.error('Scripture element not found');
        }
    }, []);

    return (
        <div ref={donationRef} className="bg-orange-50 py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold">Support Our Mission</h2>
                    <p className="mt-4 text-xl text-gray-500">
                        Your generous support helps us continue our work
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { amount: "25", description: "Provides Bibles for a family" },
                        { amount: "50", description: "Supports community outreach" },
                        { amount: "100", description: "Funds missionary training" }
                    ].map((item, index) => (
                        <div key={index} className="bg-white p-8 rounded-lg text-center shadow-lg">
                            <div className="flex justify-center mb-4">
                                <Gift className="w-8 h-8 text-orange-600" />
                            </div>
                            <div className="text-3xl font-bold text-orange-600">${item.amount}</div>
                            <p className="mt-2 text-gray-600">{item.description}</p>
                            <button className="mt-6 w-fit bg-orange-600 text-white px-6 py-2 rounded-full hover:bg-orange-700">
                                Donate Now
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DonationHighlights;
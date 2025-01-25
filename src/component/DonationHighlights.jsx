import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Gift, Plus } from 'lucide-react';

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
                    <h2 className="text-3xl font-bold text-center after">
                        <span class="px-4 before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-orange-600 relative inline-block">
                            <span class="relative text-white">Support</span>
                        </span>
                        <span class="px-4 before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-gray-600 relative inline-block">
                            <span class="relative text-white">Our</span>
                        </span>
                        <span class="px-4 before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-orange-600 relative inline-block">
                            <span class="relative text-white">Mission</span>
                        </span>
                    </h2>
                    <p className="mt-4 text-xl text-gray-500">
                        Your generous support helps us continue our work
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    
                    <a href="/donate" className="bg-orange-600 p-8 rounded-lg text-center shadow-lg">
                        <div className="flex flex-col items-center mb-4">
                            <Plus className="w-12 h-12 text-gray-50 border border-dashed border-gray-50 rounded-2xl" />
                            <div className="text-3xl font-bold text-gray-50">Enter Custom Amount</div>
                        </div>
                        <div className="flex items-center justify-center">
                            <Gift className="w-8 h-8 text-gray-50 gap-4" />
                            <p className="text-gray-100">click to donate custom amount</p>
                        </div>
                        <button className="mt-6 w-fit bg-gray-50 text-orange-600 px-6 py-2 rounded-full hover:bg-gray-100">
                            Donate Now
                        </button>
                    </a>
                    {[
                        { amount: "25", description: "Provides Food and Biles for a family" },
                        { amount: "50", description: "Funds missionary training" },
                        { amount: "100", description: "Fund a medical mission trip to a remote village" },
                        { amount: "150", description: "Sponsor a child's education in a developing country" },
                        { amount: "250", description: "Support the construction of a community center" },
                    ].map((item, index) => (
                        <div key={index} className="bg-white p-8 rounded-lg text-center shadow-lg flex flex-col">
                            <div className="flex justify-center mb-4">
                                <Gift className="w-8 h-8 text-orange-600" />
                            </div>
                            <div className="text-3xl font-bold text-orange-600">${item.amount}</div>
                            <p className="mt-2 text-gray-600 flex-1">{item.description}</p>
                            <a href="/donate" className="self-center mt-6 w-fit bg-orange-600 text-white px-6 py-2 rounded-full hover:bg-orange-700">
                                Donate Now
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DonationHighlights;
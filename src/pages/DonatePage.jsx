import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import PayPalForm from '../component/PayPalForm';

const DonatePage = () => {
    const [selectedMethod, setSelectedMethod] = useState('paypal');
    const [amount, setAmount] = useState(25);
    const contentRef = useRef(null);

    useEffect(() => {
        if (contentRef.current) {
            gsap.fromTo(contentRef.current, 
                { opacity: 0, y: 50 }, 
                { opacity: 1, y: 0, duration: 1 }
            );
        }
    }, [selectedMethod]);

    const renderContent = () => {
        switch (selectedMethod) {
            case 'paypal':
                return <PayPalForm amount={amount} />;
            case 'visa':
                return <div>Visa Payment Form</div>;
            case 'mastercard':
                return <div>MasterCard Payment Form</div>;
            default:
                return <div>Select a payment method</div>;
        }
    };

    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50 py-12">
            <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-12">Donate Now</h2>
                <div className="flex justify-center space-x-4 mb-8">
                    {['paypal', 'visa', 'mastercard'].map((method) => (
                        <button 
                            key={method}
                            className={`px-6 py-3 rounded-lg font-semibold transition-colors duration-300 ${selectedMethod === method ? 'bg-orange-600 text-white' : 'bg-gray-200 text-gray-700'}`} 
                            onClick={() => setSelectedMethod(method)}
                        >
                            {method.charAt(0).toUpperCase() + method.slice(1)}
                        </button>
                    ))}
                </div>
                <div className="flex flex-col items-center gap-4 justify-center space-x-4 space-y-4 mb-8">
                    <div className="flex justify-center flex-wrap space-x-4">
                        {[25, 50, 100, 150, 250].map((amt) => (
                            <button 
                                key={amt}
                                className={`mt-4 px-6 py-3 rounded-lg font-semibold transition-colors duration-300 ${amount === amt ? 'bg-orange-600 text-white' : 'bg-gray-200 text-gray-700'}`} 
                                onClick={() => setAmount(amt)}
                            >
                                ${amt}
                            </button>
                        ))}
                    </div>
                    <div className="flex flex-col justify-center space-y-4">
                        <label className="block text-sm font-medium text-gray-700">Enter Custom Amount</label>
                        <input 
                            type="number" 
                            className="px-6 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-600 transition-colors duration-300" 
                            placeholder="Custom Amount" 
                            value={amount} 
                            onChange={(e) => setAmount(Number(e.target.value))}
                        />
                    </div>
                </div>
                <div ref={contentRef} className="bg-white p-8 rounded-lg shadow-lg transition-all duration-300">
                    {renderContent()}
                </div>
            </div>
        </div>
    );
};

export default DonatePage;

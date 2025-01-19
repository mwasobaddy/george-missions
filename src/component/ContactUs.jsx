import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

// ContactUs Section

const ContactUs = () => {

    const contactUsRef = useRef(null);
    
    useEffect(() => {
        if (contactUsRef.current) {
            gsap.fromTo(contactUsRef.current,
                { opacity: 0, y: 50 },
                { opacity: 1, y: 0, duration: 1, delay: 1 }
            );
        } else {
            console.error('Scripture element not found');
        }
    }, []);

    return (
        <section ref={contactUsRef} className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8 after">
            <span class="px-4 before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-orange-600 relative inline-block">
                <span class="relative text-white">Chat</span>
            </span>
            <span class="px-4 before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-gray-600 relative inline-block">
                <span class="relative text-white">Us</span>
            </span>
        </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                    <p className="text-gray-600 mb-2">Email: info@georgemissions.org</p>
                    <p className="text-gray-600 mb-2">Phone: (123) 456-7890</p>
                    <p className="text-gray-600 mb-2">Address: 123 Mission St, City, Country</p>
                </div>
                <div>
                    <h3 className="text-xl font-semibold mb-4">Contact Form</h3>
                    <form>
                        <div className="mb-4">
                            <label className="block text-gray-600 mb-2" htmlFor="name">Name</label>
                            <input className="w-full px-4 py-2 border rounded" type="text" id="name" name="name" required />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-600 mb-2" htmlFor="email">Email</label>
                            <input className="w-full px-4 py-2 border rounded" type="email" id="email" name="email" required />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-600 mb-2" htmlFor="message">Message</label>
                            <textarea className="w-full px-4 py-2 border rounded" id="message" name="message" rows="4" required></textarea>
                        </div>
                        <button className="px-4 py-2 bg-orange-600 text-white rounded" type="submit">Send Message</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;
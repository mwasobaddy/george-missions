import React, { useEffect, useRef } from 'react';
import gsap, { Bounce } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

// ContactUs Section

const ContactUs = () => {
    const titleRef = useRef([]);
    const paragraphRef = useRef([]);
    const uniqueMilestonesRef = useRef(null);
    const milestonesRef = useRef([]);

    useEffect(() => {
        const observerOptions = {
            root: null, // Observe within the viewport
            threshold: 0.2, // Trigger animation when 20% of element is visible
        };

        const handleIntersection = (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    gsap.to(entry.target, {
                        opacity: 1,
                        y: 0,
                        x: 0,
                        duration: 1.5,
                        ease: Bounce.easeOut,
                    });
                } else {
                    const axis = entry.target.dataset.axis;
                    gsap.to(entry.target, {
                        opacity: 0,
                        y: axis === 'y' ? 50 : 0,
                        x: axis === 'x' ? 50 : 0,
                        duration: 1.5,
                        ease: "power3.out",
                    });
                }
            });
        };

        const observer = new IntersectionObserver(handleIntersection, observerOptions);

        // Observe Title Elements
        titleRef.current.forEach((title) => {
            if (title) {
                gsap.set(title, { opacity: 0, y: 50 });
                observer.observe(title);
            }
        });

        // Observe Paragraph
        paragraphRef.current.forEach((paragraph) => {
            if (paragraph) {
                gsap.set(paragraph, { opacity: 0, x: 50 });
                observer.observe(paragraph);
            }
        });

        // Observe Unique Milestones on medium and above screens
        if (uniqueMilestonesRef.current) {
            gsap.set(uniqueMilestonesRef.current, { opacity:0, x:-50 });
            observer.observe(uniqueMilestonesRef.current);
        }

        // Observe Milestones
        milestonesRef.current.forEach((milestone) => {
            if (milestone) {
                gsap.set(milestone, { opacity: 0, x: 50 });
                observer.observe(milestone);
            }
        });

        return () => observer.disconnect(); // Cleanup observer on unmount
    }, []);

    return (
        <section className="mb-16">
            <h2 ref={el => titleRef.current[0] = el} data-axis="y" className="text-3xl font-bold text-center mb-8 after">
                <span className="px-4 before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-orange-600 relative inline-block">
                    <span className="relative text-white">Contact</span>
                </span>
                <span className="px-4 before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-gray-600 relative inline-block">
                    <span className="relative text-white">Us</span>
                </span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <h3 className="text-xl font-semibold mb-4">Contact Form</h3>
                    <form>
                        <div ref={el => titleRef.current[1] = el} data-axis="y" className="mb-4">
                            <label className="block text-gray-600 mb-2" htmlFor="name">Name</label>
                            <input className="w-full px-4 py-2 border rounded-lg border-gray-300 focus:border-orange-600 focus:ring focus:ring-orange-200 transition duration-200" type="text" id="name" name="name" required />
                        </div>
                        <div ref={el => paragraphRef.current[2] = el} data-axis="x" className="mb-4">
                            <label className="block text-gray-600 mb-2" htmlFor="email">Email</label>
                            <input className="w-full px-4 py-2 border rounded-lg border-gray-300 focus:border-orange-600 focus:ring focus:ring-orange-200 transition duration-200" type="email" id="email" name="email" required />
                        </div>
                        <div ref={el => titleRef.current[2] = el} data-axis="y" className="mb-4">
                            <label className="block text-gray-600 mb-2" htmlFor="message">Message</label>
                            <textarea className="w-full px-4 py-2 border rounded-lg border-gray-300 focus:border-orange-600 focus:ring focus:ring-orange-200 transition duration-200" id="message" name="message" rows="4" required></textarea>
                        </div>
                        <button ref={el => paragraphRef.current[3] = el} data-axis="x" className="px-4 py-2 bg-orange-600 text-white rounded-lg flex items-center justify-center hover:bg-orange-700 transition duration-200" type="submit">
                            <Send className="mr-2" /> Send Message
                        </button>
                    </form>
                </div>
                <div ref={el => paragraphRef.current[0] = el} data-axis="x">
                    <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                    <div className="flex items-center mb-2">
                        <Phone className="text-orange-600 mr-2" />
                        <a href="tel:+254721637809" className="text-gray-600">+(254) 72163-7809</a>
                    </div>
                    <div className="flex items-center mb-2">
                        <Phone className="text-orange-600 mr-2" />
                        <a href="tel:+254712510010" className="text-gray-600">+(254) 71251-0010</a>
                    </div>
                    <div className="flex items-center mb-2">
                        <Mail className="text-orange-600 mr-2" />
                        <a href="mailto:saderasenei@gmail.com" className="text-gray-600">saderasenei@gmail.com</a>
                    </div>
                    <div className="flex items-center mb-2">
                        <Phone className="text-orange-600 mr-2" />
                        <a href="https://wa.me/254721637809" className="text-gray-600">WhatsApp: +(254) 72163-7809</a>
                    </div>
                    <div className="flex items-center mb-2">
                        <Phone className="text-orange-600 mr-2" />
                        <a href="https://wa.me/254712510010" className="text-gray-600">WhatsApp: +(254) 71251-0010</a>
                    </div>
                    <div className="flex items-center mb-2">
                        <MapPin className="text-orange-600 mr-2" />
                        <p className="text-gray-600">22 -20500 Narok, Kenya</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;
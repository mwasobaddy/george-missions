import React, { useEffect, useRef } from 'react';
import gsap, { Bounce } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// MissionVision Section

const MissionVision = () => {
    const titleRef = useRef([]);
    const paragraphRef = useRef(null);

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
        if (paragraphRef.current) {
            gsap.set(paragraphRef.current, { opacity: 0, x: 50 });
            observer.observe(paragraphRef.current);
        }

        return () => observer.disconnect(); // Cleanup observer on unmount
    }, []);

    return (
        <section className="mb-16">
        <h2 ref={el => titleRef.current[0] = el} data-axis="y" className="text-3xl font-bold text-center mb-8 after">
            <span class="px-4 before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-orange-600 relative inline-block">
                <span class="relative text-white">Mission</span>
            </span>
            <span class="px-4 before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-gray-600 relative inline-block">
                <span class="relative text-white">and</span>
            </span>
            <span class="px-4 before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-orange-600 relative inline-block">
                <span class="relative text-white">Vission</span>
            </span>
        </h2>
            <p ref={paragraphRef} data-axis="x" className="text-gray-600 text-left">
                Our mission is to empower individuals and communities by fostering a spirit of compassion, generosity, and service. We envision a world where everyone has the opportunity to thrive and reach their full potential.
            </p>
        </section>
    );
};

export default MissionVision;
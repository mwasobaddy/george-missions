import React, { useEffect, useRef } from 'react';
import backgroundImage from '../assets/hero-background.webp';
import gsap from 'gsap';

// Hero Section

const GalleryHeroSection = () => {
    const titleRef = useRef(null);
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
                        ease: "power3.out",
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
        if (titleRef.current) {
            gsap.set(titleRef.current, { opacity: 0, y: 50 });
            observer.observe(titleRef.current);
        }

        // Observe Paragraph
        if (paragraphRef.current) {
            gsap.set(paragraphRef.current, { opacity: 0, y: 50 });
            observer.observe(paragraphRef.current);
        }

        return () => observer.disconnect(); // Cleanup observer on unmount
    }, []);

    return (
        <div
            className="relative overflow-hidden bg-cover bg-center mb-16"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <div className="backdrop-blur-sm bg-orange-200/50 pt-32 pb-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="relative flex flex-col items-center justify-center">
                        <h1 ref={titleRef} data-axis="y" className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                            <span className="">Our </span>
                            <span className="px-4 before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-orange-600 relative inline-block">
                                <span className="relative text-gray-900">Gallery</span>
                            </span>
                            <span className=" text-orange-600"> Collection</span>
                        </h1>
                        <p ref={paragraphRef} data-axis="y" className="mt-6 text-xl text-gray-800 font-semibold">
                            Explore our collection of memorable moments, impactful missions, and community gatherings.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GalleryHeroSection;
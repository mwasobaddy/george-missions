import React, { useEffect, useRef } from 'react';
import gsap, { Bounce } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// AboutUs Section

const AboutUs = () => {
    const titleRef = useRef([]);
    const paragraphRef = useRef(null);
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
        if (paragraphRef.current) {
            gsap.set(paragraphRef.current, { opacity: 0, x: 50 });
            observer.observe(paragraphRef.current);
        }

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
            <h2 ref={el => titleRef.current[0] = el} className="text-3xl font-bold text-center mb-8 after">
                <span className="px-4 before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-orange-600 relative inline-block">
                    <span className="relative text-white">About</span>
                </span>
                <span className="px-4 before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-gray-600 relative inline-block">
                    <span className="relative text-white">Us</span>
                </span>
            </h2>
            <p ref={paragraphRef} data-axis="x" className="text-gray-600 text-left mb-8">
                George Missionary is a dedicated team led by George and committed to making a positive impact in our community and beyond. Our mission is to provide support, guidance, and resources to those in need through various outreach programs and initiatives.
            </p>
            <div className="roadmap">
                <h3 ref={el => titleRef.current[1] = el} className="text-2xl font-semibold text-center mb-8" data-axis="y">Our Journey</h3>
                <div className="
                    flex
                    flex-col
                    relative
                    space-y-8
                    px-4
                    after:content-['']
                    after:border-r-4
                    after:border-orange-600
                    after:h-full
                    after:absolute
                    after:top-0
                    after:right-0
                    after:bottom-0
                    after:w-1
                    after:md:left-[50%]
                    after:left-[2.4%]"
                >
                    <div className="flex items-end justify-between">
                        <div className="w-[50%] hidden md:block"></div>
                        <div ref={el => milestonesRef.current[0] = el} data-axis="x" className="relative milestone bg-white p-6 rounded-lg shadow-lg w-full md:w-[50%] left-[26px]
                            before:content-['']
                            after:absolute
                            after:top-[40%]
                            after:-left-10
                            after:w-8
                            after:h-8
                            after:bg-gray-700
                            after:border-4
                            after:border-orange-600
                            after:rounded-full"
                        >
                            <h4 className="text-xl font-bold mb-2">2010 - The Beginning</h4>
                            <p className="text-gray-600">George Missionary was founded with the vision of making a positive impact in the community. Our journey began with small local outreach programs aimed at providing support and guidance to those in need.</p>
                        </div>
                    </div>
                    <div className="hidden md:block items-end justify-between">
                        <div ref={uniqueMilestonesRef} data-axis="x" className="relative milestone bg-white p-6 rounded-lg shadow-lg w-full md:w-[50%] -left-[22px]
                            before:content-['']
                            after:absolute
                            after:top-[40%]
                            after:-right-10
                            after:w-8
                            after:h-8
                            after:bg-gray-700
                            after:border-4
                            after:border-orange-600
                            after:rounded-full"
                        >
                            <h4 className="text-xl font-bold mb-2">2015 - First Mission Trip</h4>
                            <p className="text-gray-600">In 2015, we embarked on our first mission trip, extending our reach beyond the local community. This trip marked the beginning of our efforts to provide support and resources to underserved communities around the world.</p>
                        </div>
                        <div className="w-[50%] hidden md:block"></div>
                    </div>
                    <div className="block md:hidden items-end justify-between">
                        <div className="w-[50%] hidden md:block"></div>
                        <div ref={el => milestonesRef.current[1] = el} data-axis="x" className="relative milestone bg-white p-6 rounded-lg shadow-lg w-full md:w-[50%] left-[26px]
                            before:content-['']
                            after:absolute
                            after:top-[40%]
                            after:-left-10
                            after:w-8
                            after:h-8
                            after:bg-gray-700
                            after:border-4
                            after:border-orange-600
                            after:rounded-full"
                        >
                            <h4 className="text-xl font-bold mb-2">2015 - First Mission Trip</h4>
                            <p className="text-gray-600">In 2015, we embarked on our first mission trip, extending our reach beyond the local community. This trip marked the beginning of our efforts to provide support and resources to underserved communities around the world.</p>
                        </div>
                    </div>
                     <div className="flex items-end justify-between">
                        <div className="w-[50%] hidden md:block"></div>
                        <div ref={el => milestonesRef.current[3] = el} data-axis="x" className="relative milestone bg-white p-6 rounded-lg shadow-lg w-full md:w-[50%] left-[26px]
                            before:content-['']
                            after:absolute
                            after:top-[40%]
                            after:-left-10
                            after:w-8
                            after:h-8
                            after:bg-gray-700
                            after:border-4
                            after:border-orange-600
                            after:rounded-full"
                        >
                            <h4 className="text-xl font-bold mb-2">2018 - International Outreach</h4>
                            <p className="text-gray-600">By 2018, George Missionary had grown significantly, allowing us to launch international outreach programs. Our efforts have since touched the lives of countless individuals, providing hope and support to communities in need.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
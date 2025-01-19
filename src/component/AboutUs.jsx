import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Gift, Plus } from 'lucide-react';

// AboutUs Section

const AboutUs = () => {
    const aboutUsRef = useRef(null);
    const milestonesRef = useRef([]);

    useEffect(() => {
        if (aboutUsRef.current) {
            gsap.fromTo(aboutUsRef.current,
                { opacity: 0, y: 50 },
                { opacity: 1, y: 0, duration: 1 }
            );
        } else {
            console.error('AboutUs element not found');
        }

        // milestonesRef.current.forEach((milestone, index) => {
        //     gsap.fromTo(milestone,
        //         { opacity: 0, x: -50 },
        //         { opacity: 1, x: 0, duration: 1, delay: index * 0.5 }
        //     );
        // });
    }, []);

    return (
        <section ref={aboutUsRef} className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8 after">
                <span class="px-4 before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-orange-600 relative inline-block">
                    <span class="relative text-white">About</span>
                </span>
                <span class="px-4 before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-gray-600 relative inline-block">
                    <span class="relative text-white">Us</span>
                </span>
            </h2>
            <p className="text-gray-600 text-center mb-8">
                George Missionary is a dedicated team led by George and committed to making a positive impact in our community and beyond. Our mission is to provide support, guidance, and resources to those in need through various outreach programs and initiatives.
            </p>
            <div className="roadmap">
                <h3 className="text-2xl font-semibold text-center mb-8">Our Journey</h3>
                <div className="
                    flex
                    flex-col
                    relative
                    space-y-8
                    after:content-['']
                    after:border-r-4
                    after:border-orange-600
                    after:h-full
                    after:absolute
                    after:top-0
                    after:right-0
                    after:bottom-0
                    after:w-1
                    after:right-[50%]"
                >
                    <div ref={el => milestonesRef.current[0] = el} className="relative milestone bg-white p-6 rounded-lg shadow-lg w-[45%] align-self-end right-[26px]
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
                    <div ref={el => milestonesRef.current[1] = el} className="relative milestone bg-white p-6 rounded-lg shadow-lg w-[45%] -right-[22px]
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
                    <div ref={el => milestonesRef.current[2] = el} className="relative milestone bg-white p-6 rounded-lg shadow-lg w-[45%] align-self-end right-[26px]
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
        </section>
    );
};

export default AboutUs;
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ChevronRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import SwiperCore from 'swiper';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import image1 from '../assets/img/George_Dedicating_People_To_God.jpg';
import image2 from '../assets/img/George_Teaching_Children_The_Importance_Of_Virtues_And_Values.jpg';
import image3 from '../assets/img/George_Taking_Hope_To_The_Elderly.jpg';
import image4 from '../assets/img/Celebrations_After_A_Fundraising_Function_In_The_Community.jpg';
import image5 from '../assets/img/George_With_Friends.jpg';

SwiperCore.use([Autoplay, Navigation, Pagination]);

const updates = [
    {
        title: "Giving support to the community by praying and dedicating people to God",
        content: "Witness firsthand the power of prayer and dedication. Join me in supporting community outreach programs that offer spiritual guidance, uplift individuals, and strengthen faith within our local community and the world at large.",
        image: image1,
    },
    {
        title: "Teaching children the importance of virtues and values",
        content: "Invest in the future by instilling the values of compassion and generosity in our youth. Help me provide educational resources and programs that teach children the importance of sharing their time, talents, and resources with those in need.",
        image: image2,
    },
    {
        title: "Taking the hope to the elderly",
        content: "Bring comfort and hope to our seniors through the giving hope. Support my efforts to visit and minister to the elderly in our community, offering spiritual guidance, companionship, and a listening ear.",
        image: image3,
    },
    {
        title: "Celebrations after a successful fundraising",
        content: "Learn about our recent fundraising event that aimed to support individuals and families in need within our community. Discover how your contributions are making a tangible difference in the lives of others.",
        image: image4,
    },
    {
        title: "Taking the word of God abroad",
        content: "Embark on a journey of faith with me as I share the Gospel with communities abroad. Learn about my experiences, challenges, and triumphs in spreading the message of hope and love across borders.",
        image: image5,
    }
];

const LatestUpdates = () => {
    const updatesRef = useRef(null);

    useEffect(() => {
        if (updatesRef.current) {
            gsap.fromTo(updatesRef.current, 
                { opacity: 0, x: 50 }, 
                { opacity: 1, x: 0, duration: 1, delay: 1.5 }
            );
        } else {
            console.error('Updates element not found');
        }
    }, []);

    const renderSlides = () => {
        const slides = [];
        for (let i = 0; i < updates.length; i += 2) {
            slides.push(
                <SwiperSlide key={i}>
                    <div className="flex flex-col w-full mb-8 md:flex-row justify-center space-x-0 md:space-x-4 space-y-4 md:space-y-0">
                        {updates[i] && (
                            <div className="bg-white rounded-lg overflow-hidden shadow-lg w-full md:w-1/2">
                                <div className="h-[50vh]">
                                    <img src={updates[i].image} alt={updates[i].title} className="h-full w-full object-cover" />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold mb-2">{updates[i].title}</h3>
                                    <p className="text-gray-600 mb-4 text-left">{updates[i].content}</p>
                                    <a href="/about" className="text-orange-600 font-semibold flex items-center">
                                        Know More About Us <ChevronRight className="ml-1 w-4 h-4" />
                                    </a>
                                </div>
                            </div>
                        )}
                        {updates[i + 1] && (
                            <div className="bg-white rounded-lg overflow-hidden shadow-lg w-full md:w-1/2">
                                <div className="h-[50vh]">
                                    <img src={updates[i + 1].image} alt={updates[i + 1].title} className="h-full w-full object-cover" />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold mb-2">{updates[i + 1].title}</h3>
                                    <p className="text-gray-600 mb-4 text-left">{updates[i + 1].content}</p>
                                    <button className="text-orange-600 font-semibold flex items-center">
                                        Know More About Us <ChevronRight className="ml-1 w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </SwiperSlide>
            );
        }
        return slides;
    };

    return (
        <div ref={updatesRef} id="updates" className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center mb-16 after">
                    <span className="px-4 before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-orange-600 relative inline-block">
                        <span className="relative text-white">Latest</span>
                    </span>
                    <span className="px-4 before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-gray-600 relative inline-block">
                        <span className="relative text-white">Updates</span>
                    </span>
                </h2>
                <Swiper
                    modules={[Autoplay, Navigation, Pagination]}
                    spaceBetween={30}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 10000 }}
                >
                    {renderSlides()}
                </Swiper>
            </div>
        </div>
    );
};

export default LatestUpdates;
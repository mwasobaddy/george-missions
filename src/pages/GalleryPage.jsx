import React, { useState, useEffect, useRef } from 'react';
import { ZoomIn, X, Download } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import GalleryHeroSection from '../component/GalleryHeroSection';

import IMG_1 from '../assets/img/IMG_1.webp';
import IMG_2 from '../assets/img/IMG_2.webp';
import IMG_3 from '../assets/img/IMG_3.webp';
import IMG_4 from '../assets/img/IMG_4.webp';
import IMG_5 from '../assets/img/IMG_5.webp';
import IMG_6 from '../assets/img/IMG_6.webp';
import IMG_7 from '../assets/img/IMG_7.webp';
import IMG_8 from '../assets/img/IMG_8.webp';
import IMG_9 from '../assets/img/IMG_9.webp';
import IMG_10 from '../assets/img/IMG_10.webp';
import IMG_11 from '../assets/img/IMG_11.webp';
import IMG_12 from '../assets/img/IMG_12.webp';
import IMG_13 from '../assets/img/IMG_13.webp';
import IMG_14 from '../assets/img/IMG_14.webp';
import IMG_15 from '../assets/img/IMG_15.webp';
import IMG_16 from '../assets/img/IMG_16.webp';
import IMG_17 from '../assets/img/IMG_17.webp';
import IMG_18 from '../assets/img/IMG_18.webp';
import IMG_19 from '../assets/img/IMG_19.webp';
import IMG_20 from '../assets/img/IMG_20.webp';
import IMG_21 from '../assets/img/IMG_21.webp';
import IMG_22 from '../assets/img/IMG_22.webp';
import IMG_23 from '../assets/img/IMG_23.webp';
import IMG_24 from '../assets/img/IMG_24.webp';
import IMG_25 from '../assets/img/IMG_25.webp';
import IMG_26 from '../assets/img/IMG_26.webp';
import IMG_27 from '../assets/img/IMG_27.webp';
import IMG_28 from '../assets/img/IMG_28.webp';
import IMG_29 from '../assets/img/IMG_29.webp';
import IMG_30 from '../assets/img/IMG_30.webp';
import IMG_31 from '../assets/img/IMG_31.webp';
import IMG_32 from '../assets/img/IMG_32.webp';
import IMG_33 from '../assets/img/IMG_33.webp';
import IMG_34 from '../assets/img/IMG_34.webp';



gsap.registerPlugin(ScrollTrigger);

const images = [
    { src: IMG_34, alt: "Image 1", category: "events" },
    { src: IMG_33, alt: "Image 1", category: "events" },
    { src: IMG_4, alt: "Image 4", category: "events" },
    { src: IMG_12, alt: "Image 12", category: "events" },
    { src: IMG_14, alt: "Image 14", category: "events" },
    { src: IMG_15, alt: "Image 15", category: "events" },
    { src: IMG_19, alt: "Image 19", category: "events" },
    { src: IMG_1, alt: "Image 1", category: "landscapes" },
    { src: IMG_3, alt: "Image 3", category: "landscapes" },
    { src: IMG_5, alt: "Image 5", category: "landscapes" },
    { src: IMG_8, alt: "Image 8", category: "landscapes" },
    { src: IMG_13, alt: "Image 13", category: "landscapes" },
    { src: IMG_16, alt: "Image 16", category: "landscapes" },
    { src: IMG_18, alt: "Image 18", category: "landscapes" },
    { src: IMG_30, alt: "Image 30", category: "landscapes" },
    { src: IMG_32, alt: "Image 32", category: "portraits" },
    { src: IMG_2, alt: "Image 2", category: "portraits" },
    { src: IMG_6, alt: "Image 6", category: "portraits" },
    { src: IMG_7, alt: "Image 7", category: "portraits" },
    { src: IMG_9, alt: "Image 9", category: "portraits" },
    { src: IMG_10, alt: "Image 10", category: "portraits" },
    { src: IMG_11, alt: "Image 11", category: "portraits" },
    { src: IMG_17, alt: "Image 17", category: "portraits" },
    { src: IMG_20, alt: "Image 20", category: "portraits" },
    { src: IMG_21, alt: "Image 21", category: "portraits" },
    { src: IMG_22, alt: "Image 22", category: "portraits" },
    { src: IMG_23, alt: "Image 23", category: "portraits" },
    { src: IMG_24, alt: "Image 24", category: "portraits" },
    { src: IMG_25, alt: "Image 25", category: "portraits" },
    { src: IMG_26, alt: "Image 26", category: "portraits" },
    { src: IMG_27, alt: "Image 27", category: "portraits" },
    { src: IMG_28, alt: "Image 28", category: "portraits" },
    { src: IMG_29, alt: "Image 29", category: "portraits" },
    { src: IMG_31, alt: "Image 31", category: "portraits" }
];

const categories = ['all', 'events', 'portraits', 'landscapes'];

const GalleryPage = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [filter, setFilter] = useState('all');
    const galleryRef = useRef([]);
    const containerRef = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        // Initial animation for gallery items
        const galleryItems = document.querySelectorAll('.gallery-item');
        gsap.set(galleryItems, { opacity: 0, y: 50 });

        gsap.to('.gallery-header', {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power3.out'
        });

        // Stagger animation for gallery items
        gsap.to(galleryItems, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: {
                amount: 0.5,
                grid: 'auto',
                from: 'start'
            },
            scrollTrigger: {
                trigger: containerRef.current,
                start: 'top center+=100',
                end: 'bottom center',
                toggleActions: 'play none none reverse'
            }
        });

        // Random movement animation for images
        galleryRef.current.forEach((image, index) => {
            if (image) {
                const moveImage = () => {
                    const x = Math.random() * 20 - 10; // Random x movement between -10 and 10
                    const y = Math.random() * 20 - 10; // Random y movement between -10 and 10
                    gsap.to(image, {
                        x,
                        y,
                        duration: 2,
                        ease: "power1.inOut",
                        onComplete: moveImage
                    });
                };
                moveImage();
            }
        });

        // Blob animation
        const blobs = document.querySelectorAll('.blob');
        blobs.forEach(blob => {
            gsap.to(blob, {
                x: 'random(-20, 20)',
                y: 'random(-20, 20)',
                duration: 5,
                repeat: -1,
                yoyo: true,
                ease: 'sine.inOut'
            });
        });
    }, []);

    // Image modal component
    const ImageModal = ({ image, onClose }) => {
        const modalRef = useRef(null);

        useEffect(() => {
            gsap.from(modalRef.current, {
                opacity: 0,
                scale: 0.9,
                duration: 0.3,
                ease: 'power2.out'
            });
        }, []);

        return (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4">
                <div ref={modalRef} className="relative max-w-4xl w-full bg-white rounded-lg overflow-hidden">
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
                    >
                        <X className="w-8 h-8" />
                    </button>
                    <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-auto border-2 border-orange-600"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                        <p className="text-white text-lg">{image.alt}</p>
                        {/* <button className="mt-2 flex items-center text-white hover:text-orange-600">
                            <Download className="w-5 h-5 mr-2" />
                            Download Image
                        </button> */}
                    </div>
                </div>
            </div>
        );
    };

    return (
        // <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div ref={containerRef} className="bg-gray-50 overflow-hidden">
            <GalleryHeroSection />
            {/* Blobs */}
            <div className="blob bg-blue-500 opacity-20 w-64 h-64 rounded-full absolute top-10 left-10"></div>
            <div className="blob bg-pink-500 opacity-20 w-64 h-64 rounded-full absolute bottom-10 right-10"></div>
            <div className="blob bg-green-500 opacity-20 w-64 h-64 rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>

            {/* Gallery Header */}
            <div className="gallery-header opacity-0 translate-y-4 max-w-7xl mx-auto text-center mb-12">
                {/* Category Filter */}
                <div className="flex flex-wrap justify-center gap-4 mb-8">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setFilter(category)}
                            className={`px-6 py-2 rounded-full transition-all ${
                                filter === category
                                    ? 'bg-orange-600 text-gray-900'
                                    : 'bg-gray-900 text-gray-100 hover:bg-gray-600'
                            }`}
                        >
                            {category.charAt(0).toUpperCase() + category.slice(1)}
                        </button>
                    ))}
                </div>
            </div>

            <div
                className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
            >
                {images
                    .filter(img => filter === 'all' || img.category === filter)
                    .map((image, index) => (
                        <div
                            key={index}
                            ref={el => galleryRef.current[index] = el}
                            className="gallery-item relative group cursor-pointer overflow-hidden rounded-lg shadow-lg border-2 border-orange-600"
                            onClick={() => setSelectedImage(image)}
                        >
                            <img
                                src={image.src}
                                alt={image.alt}
                                className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-110"
                                loading="lazy"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-center justify-center">
                                <ZoomIn className="text-white opacity-0 group-hover:opacity-100 transform scale-0 group-hover:scale-100 transition-all duration-300" />
                            </div>
                        </div>
                    ))}
            </div>

            {selectedImage && (
                <ImageModal
                    image={selectedImage}
                    onClose={() => setSelectedImage(null)}
                />
            )}
        </div>
    );
};

export default GalleryPage;
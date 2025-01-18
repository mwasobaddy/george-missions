import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronRight, Heart, Book, Globe, Users, Gift } from 'lucide-react';
import gsap from 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js';
import ScrollTrigger from 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js';

const HomePage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentScripture, setCurrentScripture] = useState({
    verse: "Go therefore and make disciples of all nations...",
    reference: "Matthew 28:19"
  });

  // Refs for GSAP animations
  const heroRef = useRef(null);
  const statsRef = useRef(null);
  const updatesRef = useRef(null);
  const testimonialsRef = useRef(null);

  useEffect(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Hero section animation
    gsap.from(heroRef.current.querySelector('h1'), {
      duration: 1,
      y: 100,
      opacity: 0,
      ease: "power4.out"
    });

    gsap.from(heroRef.current.querySelector('p'), {
      duration: 1,
      y: 50,
      opacity: 0,
      delay: 0.3,
      ease: "power4.out"
    });

    gsap.from(heroRef.current.querySelectorAll('button'), {
      duration: 0.8,
      y: 30,
      opacity: 0,
      stagger: 0.2,
      delay: 0.5,
      ease: "power4.out"
    });

    // Stats animation on scroll
    const statItems = statsRef.current.querySelectorAll('.stat-item');
    gsap.from(statItems, {
      scrollTrigger: {
        trigger: statsRef.current,
        start: "top center",
        toggleActions: "play none none reverse"
      },
      y: 50,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "power4.out"
    });

    // Updates section animation
    const updateCards = updatesRef.current.querySelectorAll('.update-card');
    gsap.from(updateCards, {
      scrollTrigger: {
        trigger: updatesRef.current,
        start: "top center",
        toggleActions: "play none none reverse"
      },
      y: 100,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "power4.out"
    });

    // Testimonials animation
    const testimonialCards = testimonialsRef.current.querySelectorAll('.testimonial-card');
    gsap.from(testimonialCards, {
      scrollTrigger: {
        trigger: testimonialsRef.current,
        start: "top center",
        toggleActions: "play none none reverse"
      },
      x: -100,
      opacity: 0,
      duration: 0.8,
      stagger: 0.3,
      ease: "power4.out"
    });
  }, []);

  // Hero Section with background image
  const HeroSection = () => (
    <div ref={heroRef} className="relative min-h-screen pt-16 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="/api/placeholder/1920/1080" 
          alt="Mission work in action" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="text-center text-white">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            <span className="block">Spreading Hope</span>
            <span className="block text-orange-400">Around the World</span>
          </h1>
          <p className="mt-6 text-xl max-w-3xl mx-auto">
            Join us in our mission to share God's love and make a lasting impact in communities worldwide.
          </p>
          <div className="mt-10 flex gap-4 justify-center">
            <button className="bg-orange-600 text-white px-8 py-3 rounded-full hover:bg-orange-700 transform hover:scale-105 transition-transform">
              Support Our Mission
            </button>
            <button className="text-white border-2 border-white px-8 py-3 rounded-full hover:bg-white hover:text-orange-600 transform hover:scale-105 transition-transform">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  // Mission Overview with animated stats
  const MissionOverview = () => (
    <div ref={statsRef} id="mission" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
          <p className="mt-4 text-xl text-gray-500">
            Transforming lives through faith, service, and community building
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            { icon: <Globe className="w-8 h-8 text-orange-600" />, stat: "12+", label: "Countries Served" },
            { icon: <Users className="w-8 h-8 text-orange-600" />, stat: "10,000+", label: "Lives Impacted" },
            { icon: <Heart className="w-8 h-8 text-orange-600" />, stat: "50+", label: "Active Projects" },
            { icon: <Book className="w-8 h-8 text-orange-600" />, stat: "1,000+", label: "Bibles Distributed" }
          ].map((item, index) => (
            <div key={index} className="stat-item text-center p-6 bg-orange-50 rounded-lg transform hover:scale-105 transition-transform">
              <div className="flex justify-center mb-4">{item.icon}</div>
              <div className="text-3xl font-bold text-gray-900">{item.stat}</div>
              <div className="text-gray-500">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // Latest Updates with image cards
  const LatestUpdates = () => (
    <div ref={updatesRef} id="updates" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-16">Latest Updates</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <div key={item} className="update-card bg-white rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform">
              <img 
                src={`/api/placeholder/400/300`} 
                alt={`Mission update ${item}`}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Mission Update {item}</h3>
                <p className="text-gray-600 mb-4">
                  Latest news and updates from our ongoing mission work...
                </p>
                <button className="text-orange-600 font-semibold flex items-center group">
                  Read More 
                  <ChevronRight className="ml-1 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // Testimonials with images
  const Testimonials = () => (
    <div ref={testimonialsRef} id="testimonials" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-16">Impact Stories</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[1, 2].map((item) => (
            <div key={item} className="testimonial-card bg-orange-50 p-8 rounded-lg transform hover:scale-105 transition-transform">
              <p className="text-gray-600 italic mb-4">
                "The support and guidance from George has transformed our community..."
              </p>
              <div className="flex items-center">
                <img 
                  src={`/api/placeholder/48/48`} 
                  alt="Testimonial author"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="ml-4">
                  <p className="font-semibold">John Doe</p>
                  <p className="text-gray-500">Community Leader</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // Rest of the components remain the same...
  
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <MissionOverview />
      <ScriptureLoader />
      <LatestUpdates />
      <Testimonials />
      <DonationHighlights />
    </div>
  );
};

export default HomePage;
import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { motion } from 'framer-motion';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Mission Volunteer",
      image: "/images/testimonials/sarah.jpg",
      quote: "Working with George Missions has been a life-changing experience. The impact we've made in the communities is truly remarkable.",
      location: "Nairobi, Kenya"
    },
    {
      id: 2,
      name: "Michael Ochieng",
      role: "Community Leader",
      image: "/images/testimonials/michael.jpg",
      quote: "The support from George Missions has transformed our village. We now have access to clean water and better education facilities.",
      location: "Kisumu, Kenya"
    },
    // Add more testimonials as needed
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">What People Say</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-lg p-6"
            >
              <div className="flex items-center mb-4">
                <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
                  <LazyLoadImage
                    src={testimonial.image}
                    alt={testimonial.name}
                    effect="blur"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  <p className="text-gray-500 text-sm">{testimonial.location}</p>
                </div>
              </div>
              <blockquote className="text-gray-700 italic">
                "{testimonial.quote}"
              </blockquote>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 
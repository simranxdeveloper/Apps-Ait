import { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import FadeIn from './animations/FadeIn';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "CEO, HealthTech Solutions",
      company: "Healthcare Industry",
      content: "Apps AiT transformed our patient management system. Their mobile-first approach increased our user engagement by 300% within 6 months.",
      rating: 5,
      image: "bg-gradient-to-br from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "CTO, FashionForward",
      company: "Fashion Industry",
      content: "The AI-powered recommendation engine they built for us increased sales by 45%. Their team's expertise in React Native and AI is exceptional.",
      rating: 5,
      image: "bg-gradient-to-br from-purple-500 to-pink-500"
    },
    {
      id: 3,
      name: "Elena Rodriguez",
      role: "Operations Director, HotelGrand",
      company: "Hospitality Industry",
      content: "From concept to launch in just 4 months! Their PWA solution reduced our booking system load times by 70%. Outstanding service.",
      rating: 4,
      image: "bg-gradient-to-br from-green-500 to-emerald-500"
    },
    {
      id: 4,
      name: "David Park",
      role: "Founder, EduLearn",
      company: "Education Technology",
      content: "The e-learning platform they developed supports 50,000+ concurrent users seamlessly. Their QA testing was meticulous and thorough.",
      rating: 5,
      image: "bg-gradient-to-br from-orange-500 to-red-500"
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <FadeIn>
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold mb-4">
              Client Testimonials
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Trusted by <span className="text-primary">Industry Leaders</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See what our clients say about working with us to transform their digital presence.
            </p>
          </div>
        </FadeIn>

        <div className="max-w-6xl mx-auto">
          <FadeIn delay={0.2}>
            <div className="relative">
              <div className="absolute -top-6 -left-6 text-primary/10">
                <Quote size={80} />
              </div>
              
              <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 relative">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col lg:flex-row items-center gap-8"
                  >
                    {/* Client Image/Color */}
                    <div className="flex-shrink-0">
                      <div className={`w-32 h-32 rounded-full ${testimonials[currentIndex].image} flex items-center justify-center text-white text-4xl font-bold`}>
                        {testimonials[currentIndex].name.charAt(0)}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-center mb-6">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-6 h-6 ${
                              i < testimonials[currentIndex].rating
                                ? 'text-yellow-500 fill-yellow-500'
                                : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>

                      <p className="text-2xl md:text-3xl text-gray-800 mb-8 italic font-light">
                        "{testimonials[currentIndex].content}"
                      </p>

                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">
                          {testimonials[currentIndex].name}
                        </h3>
                        <p className="text-gray-600">{testimonials[currentIndex].role}</p>
                        <div className="inline-flex items-center px-4 py-1 bg-gray-100 rounded-full text-sm font-medium text-gray-700 mt-2">
                          {testimonials[currentIndex].company}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Navigation */}
                <div className="flex justify-between mt-12">
                  <div className="flex items-center space-x-4">
                    {testimonials.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-3 h-3 rounded-full transition-all ${
                          index === currentIndex
                            ? 'bg-primary w-8'
                            : 'bg-gray-300 hover:bg-gray-400'
                        }`}
                        aria-label={`Go to testimonial ${index + 1}`}
                      />
                    ))}
                  </div>

                  <div className="flex space-x-4">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={prevTestimonial}
                      className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center text-gray-700 hover:border-primary hover:text-primary"
                    >
                      <ChevronLeft size={24} />
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={nextTestimonial}
                      className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center text-gray-700 hover:border-primary hover:text-primary"
                    >
                      <ChevronRight size={24} />
                    </motion.button>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-6 -right-6 text-primary/10 rotate-180">
                <Quote size={80} />
              </div>
            </div>
          </FadeIn>

          {/* Stats */}
          <FadeIn delay={0.4}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
              {[
                { value: '98%', label: 'Client Satisfaction' },
                { value: '200+', label: 'Projects Delivered' },
                { value: '15+', label: 'Industries Served' },
                { value: '24/7', label: 'Support Available' },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-6 bg-white rounded-2xl shadow-lg border border-gray-100"
                >
                  <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
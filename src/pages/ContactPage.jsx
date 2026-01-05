import { useState } from 'react';
import { 
  Send, Mail, Phone, MapPin, Clock, MessageSquare, 
  Calendar, Video, CheckCircle, Users, Globe, Award
} from 'lucide-react';
import { motion } from 'framer-motion';
import FadeIn from '../components/animations/FadeIn';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    budget: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        budget: '',
        message: ''
      });
    }, 3000);
  };

  const services = [
    'Digital Transformation',
    'Mobile App Development',
    'Web Development',
    'UI/UX Design',
    'Digital Marketing',
    'Quality Assurance',
    'AI Solutions',
    'Other'
  ];

  const budgets = [
    'Less than $10,000',
    '$10,000 - $25,000',
    '$25,000 - $50,000',
    '$50,000 - $100,000',
    '$100,000 - $250,000',
    '$250,000+',
    'Not sure yet'
  ];

  const contactMethods = [
    {
      icon: <Mail className="w-8 h-8" />,
      title: "Email Us",
      details: "contact@appsait.com",
      subtitle: "General Inquiries",
      action: "mailto:contact@appsait.com",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: "Call Us",
      details: "+1 (555) 123-4567",
      subtitle: "Sales & Support",
      action: "tel:+15551234567",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Live Chat",
      details: "Available 24/7",
      subtitle: "Instant Support",
      action: "#chat",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Book Meeting",
      details: "Schedule a Call",
      subtitle: "Free Consultation",
      action: "https://calendly.com/appsait",
      color: "from-orange-500 to-red-500"
    }
  ];

  const whyChooseUs = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Expert Team",
      description: "51-200 skilled professionals with diverse expertise"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Presence",
      description: "Serving clients across 15+ countries worldwide"
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Proven Track Record",
      description: "200+ successful projects delivered since 2022"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Fast Response",
      description: "Guaranteed response within 24 hours"
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/5 via-white to-secondary/5 overflow-hidden">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Connect</span>
              </h1>
              <p className="text-xl text-gray-600 mb-10">
                Ready to transform your ideas into reality? Get in touch with our team of experts 
                for a free consultation and project estimate.
              </p>
            </div>
          </FadeIn>

          {/* Contact Methods */}
          <FadeIn delay={0.3}>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mt-16">
              {contactMethods.map((method, index) => (
                <motion.a
                  key={index}
                  href={method.action}
                  whileHover={{ y: -10 }}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow text-center group"
                >
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${method.color} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                    <div className="text-white">
                      {method.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{method.title}</h3>
                  <p className="text-lg text-gray-800 mb-1">{method.details}</p>
                  <p className="text-gray-600">{method.subtitle}</p>
                </motion.a>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <FadeIn>
                <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
                  {isSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-12"
                    >
                      <CheckCircle className="w-24 h-24 text-green-500 mx-auto mb-8" />
                      <h3 className="text-3xl font-bold text-gray-900 mb-4">Thank You!</h3>
                      <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                        Your message has been received. Our team will review your inquiry and contact you 
                        within 24 hours to schedule your free consultation.
                      </p>
                      <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => setIsSubmitted(false)}
                          className="bg-gradient-to-r from-primary to-secondary text-white px-8 py-3 rounded-full font-semibold"
                        >
                          Send Another Message
                        </motion.button>
                        <motion.a
                          href="https://calendly.com/appsait"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-full font-semibold"
                        >
                          Schedule Directly
                        </motion.a>
                      </div>
                    </motion.div>
                  ) : (
                    <>
                      <div className="flex items-center justify-between mb-8">
                        <div>
                          <h2 className="text-3xl font-bold text-gray-900">Send us a message</h2>
                          <p className="text-gray-600 mt-2">Fill out the form below and we'll get back to you ASAP</p>
                        </div>
                        <div className="hidden md:flex items-center space-x-2 text-primary">
                          <Video className="w-6 h-6" />
                          <span className="font-semibold">Free 30-min Consultation</span>
                        </div>
                      </div>

                      <form onSubmit={handleSubmit} className="space-y-8">
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-gray-700 font-medium mb-2">
                              Full Name *
                            </label>
                            <input
                              type="text"
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              required
                              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
                              placeholder="John Doe"
                            />
                          </div>
                          <div>
                            <label className="block text-gray-700 font-medium mb-2">
                              Email Address *
                            </label>
                            <input
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              required
                              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
                              placeholder="john@company.com"
                            />
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-gray-700 font-medium mb-2">
                              Phone Number
                            </label>
                            <input
                              type="tel"
                              name="phone"
                              value={formData.phone}
                              onChange={handleChange}
                              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
                              placeholder="+1 (555) 000-0000"
                            />
                          </div>
                          <div>
                            <label className="block text-gray-700 font-medium mb-2">
                              Company Name
                            </label>
                            <input
                              type="text"
                              name="company"
                              value={formData.company}
                              onChange={handleChange}
                              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
                              placeholder="Your Company"
                            />
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-gray-700 font-medium mb-2">
                              Service Interested In *
                            </label>
                            <select
                              name="service"
                              value={formData.service}
                              onChange={handleChange}
                              required
                              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
                            >
                              <option value="">Select a service</option>
                              {services.map((service, index) => (
                                <option key={index} value={service}>{service}</option>
                              ))}
                            </select>
                          </div>
                          <div>
                            <label className="block text-gray-700 font-medium mb-2">
                              Project Budget
                            </label>
                            <select
                              name="budget"
                              value={formData.budget}
                              onChange={handleChange}
                              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition"
                            >
                              <option value="">Select budget range</option>
                              {budgets.map((budget, index) => (
                                <option key={index} value={budget}>{budget}</option>
                              ))}
                            </select>
                          </div>
                        </div>

                        <div>
                          <label className="block text-gray-700 font-medium mb-2">
                            Project Details *
                          </label>
                          <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows="6"
                            className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition resize-none"
                            placeholder="Tell us about your project, goals, timeline, and any specific requirements..."
                          />
                        </div>

                        <div className="flex items-center space-x-4">
                          <input
                            type="checkbox"
                            id="privacy"
                            required
                            className="w-5 h-5 rounded border-gray-300 text-primary focus:ring-primary"
                          />
                          <label htmlFor="privacy" className="text-gray-600 text-sm">
                            I agree to the Privacy Policy and consent to being contacted by Apps AiT regarding my inquiry.
                          </label>
                        </div>

                        <motion.button
                          type="submit"
                          disabled={isSubmitting}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          className="w-full bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center justify-center space-x-3 disabled:opacity-70"
                        >
                          {isSubmitting ? (
                            <>
                              <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
                              <span>Submitting...</span>
                            </>
                          ) : (
                            <>
                              <Send className="w-6 h-6" />
                              <span>Send Message & Get Free Consultation</span>
                            </>
                          )}
                        </motion.button>
                      </form>
                    </>
                  )}
                </div>
              </FadeIn>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              <FadeIn delay={0.2}>
                <div className="bg-gradient-to-br from-primary to-secondary rounded-3xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-6">Why Choose Apps AiT?</h3>
                  <ul className="space-y-6">
                    {whyChooseUs.map((item, index) => (
                      <li key={index} className="flex items-start space-x-4">
                        <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                          {item.icon}
                        </div>
                        <div>
                          <h4 className="font-bold text-lg">{item.title}</h4>
                          <p className="text-white/80 text-sm">{item.description}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>

              <FadeIn delay={0.4}>
                <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                        <Mail className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900">Email</h4>
                        <a href="mailto:contact@appsait.com" className="text-primary hover:underline">
                          contact@appsait.com
                        </a>
                        <p className="text-gray-600 text-sm">For general inquiries</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                        <Phone className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900">Phone</h4>
                        <a href="tel:+15551234567" className="text-primary hover:underline">
                          +1 (555) 123-4567
                        </a>
                        <p className="text-gray-600 text-sm">Mon-Fri, 9AM-6PM EST</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                        <MapPin className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900">Global Presence</h4>
                        <p className="text-gray-800">Remote teams across</p>
                        <p className="text-gray-600 text-sm">5+ countries worldwide</p>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={0.6}>
                <div className="bg-gray-50 rounded-3xl p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Quick Links</h3>
                  <ul className="space-y-4">
                    <li>
                      <a 
                        href="https://appsait.com" 
                        className="text-primary hover:underline font-medium"
                      >
                        Visit our website
                      </a>
                    </li>
                    <li>
                      <a 
                        href="https://play.google.com/store/apps/dev?id=6756875694075191085" 
                        className="text-primary hover:underline font-medium"
                      >
                        View our portfolio
                      </a>
                    </li>
                    <li>
                      <a 
                        href="#faq" 
                        className="text-primary hover:underline font-medium"
                      >
                        Read FAQ
                      </a>
                    </li>
                    <li>
                      <a 
                        href="#process" 
                        className="text-primary hover:underline font-medium"
                      >
                        Our process
                      </a>
                    </li>
                  </ul>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Find answers to common questions about working with Apps AiT
              </p>
            </div>
          </FadeIn>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {[
                {
                  q: "What is your typical project timeline?",
                  a: "Project timelines vary based on scope and complexity. A minimum viable product (MVP) typically takes 2-4 months, while full-scale enterprise solutions may take 6-12 months. We'll provide a detailed timeline during our initial consultation."
                },
                {
                  q: "What industries do you specialize in?",
                  a: "We have extensive experience across 15+ industries including healthcare, e-commerce, fashion, hospitality, education, finance, and logistics. Our adaptable approach allows us to excel in any sector."
                },
                {
                  q: "Do you provide ongoing support and maintenance?",
                  a: "Yes, we offer comprehensive post-launch support packages including bug fixes, updates, performance optimization, security monitoring, and feature enhancements. Our support plans are tailored to your specific needs."
                },
                {
                  q: "What is your development process?",
                  a: "We follow an agile methodology with 6 key phases: Discovery, Design, Development, Testing, Deployment, and Support. We maintain transparent communication through regular updates, demos, and collaborative tools."
                },
                {
                  q: "How do you ensure project quality?",
                  a: "Quality is embedded throughout our process with code reviews, automated testing, manual QA, performance testing, and user acceptance testing (UAT). We maintain 98% client satisfaction through rigorous quality standards."
                }
              ].map((faq, index) => (
                <FadeIn key={index} delay={index * 0.1}>
                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{faq.q}</h3>
                    <p className="text-gray-600">{faq.a}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
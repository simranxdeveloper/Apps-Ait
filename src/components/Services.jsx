import { Code2, Smartphone, Megaphone, CheckCircle, Shield, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import FadeIn from './animations/FadeIn';

const Services = () => {
  const services = [
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "Digital Transformation & Product Engineering",
      description: "From product innovation to custom application development and UI/UX design.",
      color: "from-blue-500 to-cyan-500",
      features: ["Product Innovation", "Custom Development", "UI/UX Design"]
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobility Solutions",
      description: "Mobile-first design, native & hybrid apps, and Progressive Web Apps.",
      color: "from-purple-500 to-pink-500",
      features: ["Mobile First Design", "Native & Hybrid Apps", "PWA Development"]
    },
    {
      icon: <Megaphone className="w-8 h-8" />,
      title: "Digital Marketing",
      description: "Boost your visibility with SEO, PPC, and social media marketing.",
      color: "from-green-500 to-emerald-500",
      features: ["Personal Branding", "PPC Campaigns", "SEO & SMM"]
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: "Quality Assurance & Testing",
      description: "Ensure flawless performance with our comprehensive testing solutions.",
      color: "from-orange-500 to-red-500",
      features: ["Custom QA", "E-learning Testing", "Performance Testing"]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Affordable Management Services",
      description: "Dedicated team management and expert administrative support.",
      color: "from-indigo-500 to-blue-500",
      features: ["Team Management", "Admin Support", "Project Management"]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "AI-Powered Solutions",
      description: "Leverage artificial intelligence for smarter business applications.",
      color: "from-cyan-500 to-blue-500",
      features: ["AI Integration", "Machine Learning", "Automation"]
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <FadeIn>
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold mb-4">
              Our Services
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Comprehensive <span className="text-primary">Digital Solutions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We deliver end-to-end services to transform your business in the digital landscape.
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <FadeIn key={index} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow group"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <div className="text-white">
                    {service.icon}
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>

                <ul className="space-y-3">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ x: 5 }}
                  className="mt-8 text-primary font-semibold flex items-center space-x-2"
                >
                  <span>Learn More</span>
                  <div className="w-6 h-6 rounded-full border-2 border-primary flex items-center justify-center">
                    <span className="text-sm">→</span>
                  </div>
                </motion.button>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
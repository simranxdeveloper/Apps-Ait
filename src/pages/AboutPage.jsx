'use client'

import { useState } from 'react'
import { 
  Users, Globe, Trophy, Target, Zap, Shield, 
  Heart, Sparkles, CheckCircle, Award, TrendingUp, 
  Clock, Coffee, Mail, Phone, MapPin, ChevronRight
} from 'lucide-react'
import { motion } from 'framer-motion'
import FadeIn from '../components/animations/FadeIn'

const AboutPage = () => {
  const [activeTeam, setActiveTeam] = useState('leadership')

  const values = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Innovation First",
      description: "We embrace cutting-edge technologies and creative approaches to solve complex problems",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Client-Centric",
      description: "Your success is our priority. We build partnerships, not just projects",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Quality Excellence",
      description: "We deliver robust, scalable, and high-performance solutions",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Transparency",
      description: "Clear communication, honest timelines, and open collaboration",
      color: "from-purple-500 to-pink-500"
    }
  ]

  const milestones = [
    {
      year: "2022",
      title: "Foundation",
      description: "Apps AiT was founded with a vision to transform digital experiences",
      icon: "🏛️"
    },
    {
      year: "2022",
      title: "First 50 Projects",
      description: "Delivered 50+ successful projects across healthcare and e-commerce",
      icon: "🚀"
    },
    {
      year: "2023",
      title: "Team Expansion",
      description: "Grew to 100+ experts across development, design, and marketing",
      icon: "👥"
    },
    {
      year: "2023",
      title: "Global Reach",
      description: "Expanded services to clients in 15+ countries worldwide",
      icon: "🌍"
    },
    {
      year: "2024",
      title: "Awards & Recognition",
      description: "Recognized as a leading digital transformation partner",
      icon: "🏆"
    },
    {
      year: "Present",
      title: "Continuous Growth",
      description: "200+ projects delivered, serving diverse industries",
      icon: "📈"
    }
  ]

  const teamMembers = {
    leadership: [
      {
        name: "Alex Johnson",
        role: "CEO & Founder",
        bio: "15+ years in tech leadership, passionate about digital innovation",
        image: "bg-gradient-to-br from-blue-500 to-cyan-500",
        expertise: ["Strategy", "Leadership", "Innovation"]
      },
      {
        name: "Sarah Chen",
        role: "CTO",
        bio: "Expert in scalable architecture and emerging technologies",
        image: "bg-gradient-to-br from-purple-500 to-pink-500",
        expertise: ["Architecture", "AI/ML", "Cloud"]
      },
      {
        name: "Michael Rodriguez",
        role: "Head of Product",
        bio: "Product visionary with 100+ successful digital products",
        image: "bg-gradient-to-br from-green-500 to-emerald-500",
        expertise: ["Product", "UX", "Growth"]
      }
    ],
    tech: [
      {
        name: "David Kim",
        role: "Lead Mobile Developer",
        bio: "Flutter & React Native expert with 8+ years experience",
        image: "bg-gradient-to-br from-orange-500 to-red-500",
        expertise: ["Flutter", "React Native", "iOS/Android"]
      },
      {
        name: "Emma Wilson",
        role: "Senior Frontend Engineer",
        bio: "Specialized in React.js and modern web technologies",
        image: "bg-gradient-to-br from-indigo-500 to-blue-500",
        expertise: ["React.js", "TypeScript", "Next.js"]
      },
      {
        name: "Raj Patel",
        role: "Backend Architect",
        bio: "Microservices and cloud infrastructure specialist",
        image: "bg-gradient-to-br from-teal-500 to-cyan-500",
        expertise: ["Node.js", "AWS", "DevOps"]
      }
    ],
    design: [
      {
        name: "Lisa Wong",
        role: "Creative Director",
        bio: "Award-winning designer with focus on user-centered design",
        image: "bg-gradient-to-br from-pink-500 to-rose-500",
        expertise: ["UI/UX", "Branding", "Design Systems"]
      },
      {
        name: "Tom Harris",
        role: "UX Researcher",
        bio: "Human-centered design advocate with psychology background",
        image: "bg-gradient-to-br from-yellow-500 to-amber-500",
        expertise: ["Research", "Usability", "Accessibility"]
      }
    ]
  }

  const stats = [
    { icon: <Users className="w-6 h-6" />, value: "51-200", label: "Team Members" },
    { icon: <Globe className="w-6 h-6" />, value: "15+", label: "Countries Served" },
    { icon: <Trophy className="w-6 h-6" />, value: "200+", label: "Projects Delivered" },
    { icon: <Target className="w-6 h-6" />, value: "98%", label: "Client Satisfaction" },
    { icon: <Award className="w-6 h-6" />, value: "25+", label: "Industry Awards" },
    { icon: <TrendingUp className="w-6 h-6" />, value: "4.8/5", label: "Average Rating" }
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-white to-secondary/5" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
        
        <div className="container mx-auto px-4 relative z-10">
          <FadeIn>
            <div className="text-center max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold mb-6"
              >
                About Apps AiT
              </motion.div>
              
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8">
                More Than Just <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Code</span>
              </h1>
              
              <p className="text-2xl text-gray-600 mb-12">
                We're a passionate team of innovators, creators, and problem-solvers dedicated to transforming ideas into exceptional digital experiences.
              </p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-6 justify-center"
              >
                <motion.a
                  href="#our-story"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-full font-semibold text-lg"
                >
                  Explore Our Story
                </motion.a>
                <motion.a
                  href="#team"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-semibold text-lg hover:border-primary hover:text-primary"
                >
                  Meet Our Team
                </motion.a>
              </motion.div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="text-center p-6"
                >
                  <div className="text-primary mb-4 flex justify-center">
                    {stat.icon}
                  </div>
                  <div className="text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Our Story Section */}
      <section id="our-story" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our <span className="text-primary">Journey</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From a small startup to a leading digital transformation partner, our journey has been driven by passion and innovation.
              </p>
            </div>
          </FadeIn>

          {/* Timeline */}
          <div className="max-w-6xl mx-auto">
            <div className="relative">
              {/* Vertical Line */}
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary to-secondary" />
              
              {milestones.map((milestone, index) => (
                <FadeIn key={index} delay={index * 0.2}>
                  <div className={`relative mb-12 ${index % 2 === 0 ? 'md:pr-8 md:text-right md:mr-1/2' : 'md:pl-8 md:text-left md:ml-1/2'}`}>
                    <div className={`flex flex-col ${index % 2 === 0 ? 'md:items-end' : 'md:items-start'}`}>
                      <div className="flex items-center mb-4">
                        <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 rounded-full bg-white border-4 border-primary z-10" />
                        <span className="text-4xl ml-12 md:ml-0">{milestone.icon}</span>
                        <div className={`ml-4 ${index % 2 === 0 ? 'md:mr-4' : 'md:ml-4'}`}>
                          <div className="text-2xl font-bold text-gray-900">{milestone.year}</div>
                          <div className="text-sm text-primary font-semibold">{milestone.title}</div>
                        </div>
                      </div>
                      <div className={`bg-white p-6 rounded-2xl shadow-lg ml-12 md:ml-0 max-w-md ${index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'}`}>
                        <p className="text-gray-600">{milestone.description}</p>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <FadeIn direction="right">
              <div className="bg-gradient-to-br from-primary to-secondary rounded-3xl p-12 text-white">
                <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center mb-8">
                  <Target className="w-8 h-8" />
                </div>
                <h3 className="text-3xl font-bold mb-6">Our Mission</h3>
                <p className="text-xl mb-8">
                  To empower businesses with innovative digital solutions that drive growth, enhance user experiences, and create lasting value in an ever-evolving technological landscape.
                </p>
                <ul className="space-y-4">
                  {['Innovate relentlessly', 'Deliver excellence consistently', 'Empower through technology', 'Build meaningful partnerships'].map((item, i) => (
                    <li key={i} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>

            <FadeIn direction="left" delay={0.2}>
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-12 text-white">
                <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center mb-8">
                  <Sparkles className="w-8 h-8" />
                </div>
                <h3 className="text-3xl font-bold mb-6">Our Vision</h3>
                <p className="text-xl mb-8">
                  To be the world's most trusted digital transformation partner, recognized for our ability to turn visionary ideas into market-leading digital products that shape the future.
                </p>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <Clock className="w-6 h-6" />
                    <div>
                      <h4 className="font-bold">2025 Goal</h4>
                      <p>Expand to 30+ countries</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Globe className="w-6 h-6" />
                    <div>
                      <h4 className="font-bold">2030 Vision</h4>
                      <p>Lead digital transformation globally</p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our <span className="text-primary">Values</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The principles that guide every decision we make and every solution we create.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -10 }}
                  className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all"
                >
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${value.color} flex items-center justify-center mb-6`}>
                    <div className="text-white">
                      {value.icon}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section id="team" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Meet Our <span className="text-primary">Team</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Passionate experts dedicated to delivering exceptional results. Our diverse team brings together talent from around the world.
              </p>
            </div>
          </FadeIn>

          {/* Team Filter */}
          <FadeIn delay={0.2}>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {Object.keys(teamMembers).map((team) => (
                <motion.button
                  key={team}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveTeam(team)}
                  className={`px-6 py-3 rounded-full font-medium capitalize transition-all ${
                    activeTeam === team
                      ? 'bg-gradient-to-r from-primary to-secondary text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {team}
                </motion.button>
              ))}
            </div>
          </FadeIn>

          {/* Team Members */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers[activeTeam].map((member, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -10 }}
                  className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 group"
                >
                  <div className={`h-48 ${member.image} relative`}>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-6xl font-bold text-white/20">
                        {member.name.charAt(0)}
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{member.name}</h3>
                    <div className="text-primary font-semibold mb-4">{member.role}</div>
                    <p className="text-gray-600 mb-6">{member.bio}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {member.expertise.map((skill, i) => (
                        <span key={i} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <button className="text-primary font-semibold hover:underline">
                        View Profile
                      </button>
                      <div className="flex space-x-3">
                        <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                          <span className="text-sm">💼</span>
                        </div>
                        <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                          <span className="text-sm">📧</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </FadeIn>
            ))}
          </div>

          {/* Join Team CTA */}
          <FadeIn delay={0.4}>
            <div className="mt-20 text-center">
              <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-3xl p-12 max-w-4xl mx-auto">
                <h3 className="text-3xl font-bold text-gray-900 mb-6">Join Our Team</h3>
                <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                  We're always looking for passionate individuals who want to make a difference. Grow your career with us.
                </p>
                <motion.a
                  href="mailto:careers@appsait.com"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center space-x-3 bg-gradient-to-r from-primary to-secondary text-white px-8 py-4 rounded-full font-semibold text-lg"
                >
                  <span>View Open Positions</span>
                  <ChevronRight size={20} />
                </motion.a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Culture & Work Environment */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our <span className="text-primary">Culture</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We foster an environment of collaboration, innovation, and continuous learning.
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "🤝",
                title: "Collaborative",
                description: "Teamwork and open communication are at our core"
              },
              {
                icon: "💡",
                title: "Innovative",
                description: "Encouraging creative thinking and new ideas"
              },
              {
                icon: "📚",
                title: "Learning Focused",
                description: "Continuous growth and skill development"
              },
              {
                icon: "⚖️",
                title: "Balanced",
                description: "Flexible work environment for work-life harmony"
              }
            ].map((item, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="text-center p-6">
                  <div className="text-5xl mb-6">{item.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-gradient-to-r from-primary to-secondary">
        <div className="container mx-auto px-4">
          <FadeIn>
            <div className="text-center text-white max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to Work With Us?</h2>
              <p className="text-xl mb-10 opacity-90">
                Whether you have a project in mind or want to learn more about our approach, we'd love to hear from you.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <motion.a
                  href="/contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-primary px-8 py-4 rounded-full font-semibold text-lg"
                >
                  Start a Conversation
                </motion.a>
                <motion.a
                  href="tel:+15551234567"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10"
                >
                  <span className="flex items-center space-x-2">
                    <Phone size={20} />
                    <span>Call Us Now</span>
                  </span>
                </motion.a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  )
}

export default AboutPage
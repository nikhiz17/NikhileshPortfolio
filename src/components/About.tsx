import React from 'react';
import { motion } from 'framer-motion';
import { Code2, BrainCircuit, Target, RefreshCw } from 'lucide-react';

const features = [
  {
    title: 'Software Development',
    desc: 'Building clean, efficient, and scalable solutions',
    icon: <Code2 className="w-8 h-8 text-cyan-400" />
  },
  {
    title: 'AI & Data Science',
    desc: 'Leveraging data and intelligence to solve real problems',
    icon: <BrainCircuit className="w-8 h-8 text-cyan-400" />
  },
  {
    title: 'Problem Solver',
    desc: 'Turning complex challenges into elegant solutions',
    icon: <Target className="w-8 h-8 text-cyan-400" />
  },
  {
    title: 'Continuous Learning',
    desc: 'Always evolving, always improving',
    icon: <RefreshCw className="w-8 h-8 text-cyan-400" />
  }
];

const About = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="mb-16">
          <span className="text-cyan-400 font-mono text-sm tracking-wider">01 // About</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2">Who I Am</h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6 text-gray-300 leading-relaxed text-lg"
          >
            <p>
              I'm Nikhilesh Kumar R S, a Computer Science Engineering student at Sathyabama Institute of Science and Technology, specializing in Data Science. Based in Chennai, India, I'm driven by the belief that technology should create meaningful impact.
            </p>
            <p>
              My passion lies at the intersection of artificial intelligence, data science, and software development. I thrive on transforming raw data into actionable insights and building intelligent systems that solve real-world challenges.
            </p>
            <p>
              Whether it's developing anti-sleep detection systems, building AI-powered resume screening tools, or creating insightful data visualizations, I approach every project with curiosity and determination. I believe in continuous learning and constantly push myself to explore emerging technologies.
            </p>
            <p>
              I'm actively seeking opportunities to contribute to impactful tech projects and collaborate with teams that share my vision of using technology as a force for positive change.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-card p-6 flex flex-col items-start gap-4 hover:shadow-[0_0_15px_rgba(0,212,255,0.2)]"
              >
                <div className="p-3 bg-cyan-400/10 rounded-lg border border-cyan-400/20 shadow-[0_0_10px_rgba(0,212,255,0.3)]">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-400 text-sm">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;

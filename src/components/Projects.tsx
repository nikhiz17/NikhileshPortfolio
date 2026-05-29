import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Zeo Drive',
    subtitle: 'Anti Sleeping Glass',
    desc: 'An innovative wearable device system designed to detect drowsiness in drivers using sensor-based monitoring and alert mechanisms, helping prevent road accidents caused by fatigue.',
    tags: ['Arduino', 'Sensors', 'Embedded C', 'IoT'],
    status: 'Coming Soon'
  },
  {
    title: 'TalentLens AI',
    subtitle: 'Intelligent Resume Screening & ATS',
    desc: 'An AI-powered web application that automates resume screening and optimizes ATS compatibility using natural language processing and machine learning to rank candidates efficiently.',
    tags: ['Python', 'NLP', 'Flask', 'Machine Learning', 'React'],
    status: 'Coming Soon'
  },
  {
    title: 'Zomato Data Analysis',
    subtitle: 'Tableau Dashboard',
    desc: 'A comprehensive data visualization dashboard built in Tableau that analyzes Zomato restaurant data across regions, cuisines, and ratings to uncover meaningful patterns and business insights.',
    tags: ['Tableau', 'Data Analysis', 'SQL', 'Visualization'],
    link: 'https://public.tableau.com/app/profile/nikhilesh.kumar.r.s/viz/ZomatoDataset_17576538623110/GlobalMarketOverview'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="mb-16">
          <span className="text-cyan-400 font-mono text-sm tracking-wider">03 // Projects</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2">What I've Built</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="glass-card flex flex-col h-full hover:shadow-[0_0_25px_rgba(0,212,255,0.15)] group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-cyan-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="p-8 flex-grow flex flex-col relative z-10">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-sm font-mono text-cyan-400 mb-2 tracking-wider">PROJECT 0{idx + 1}</h3>
                    <h4 className="text-2xl font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">{project.title}</h4>
                    <p className="text-gray-400 text-sm font-medium">{project.subtitle}</p>
                  </div>
                </div>
                
                <p className="text-gray-300 leading-relaxed text-sm mb-8 flex-grow">
                  {project.desc}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs font-mono text-cyan-400 bg-cyan-400/10 px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-auto pt-4 border-t border-white/10">
                  {project.status ? (
                    <span className="inline-flex items-center text-sm font-medium text-gray-400 bg-white/5 px-4 py-2 rounded-full">
                      <span className="w-2 h-2 rounded-full bg-yellow-400 mr-2 animate-pulse"></span>
                      {project.status}
                    </span>
                  ) : (
                    <a href={project.link} className="inline-flex items-center text-sm font-bold text-white hover:text-cyan-400 transition-colors gap-2">
                      View Project <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;

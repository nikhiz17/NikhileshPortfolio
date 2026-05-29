import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  { name: 'Python', percent: 85 },
  { name: 'Java', percent: 80 },
  { name: 'Tableau', percent: 75 },
  { name: 'HTML/CSS', percent: 90 },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        
        <div className="mb-16 text-center">
          <span className="text-cyan-400 font-mono text-sm tracking-wider">04 // Skills</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2">Technical Arsenal</h2>
        </div>

        <div className="space-y-8 glass-card p-8 md:p-12">
          {skills.map((skill, idx) => (
            <div key={skill.name} className="relative">
              <div className="flex justify-between items-end mb-2">
                <span className="text-lg font-medium text-white">{skill.name}</span>
                <span className="text-sm font-mono text-cyan-400">{skill.percent}%</span>
              </div>
              <div className="h-3 w-full bg-white/5 rounded-full overflow-hidden border border-white/10">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.percent}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: idx * 0.2, ease: "easeOut" }}
                  className="h-full bg-gradient-to-r from-cyan-600 to-cyan-400 relative"
                >
                  <div className="absolute top-0 right-0 bottom-0 w-10 bg-gradient-to-r from-transparent to-white/50 animate-pulse" />
                </motion.div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;

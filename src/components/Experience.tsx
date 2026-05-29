import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, Globe } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        
        <div className="mb-16">
          <span className="text-cyan-400 font-mono text-sm tracking-wider">06 // Experience</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2">Professional Journey</h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass-card p-8 md:p-10 border-l-4 border-l-cyan-400 hover:shadow-[0_0_30px_rgba(0,212,255,0.15)] relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
            <Briefcase className="w-32 h-32 text-cyan-400" />
          </div>

          <div className="relative z-10">
            <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-6 gap-4">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Cisco Networking Academy</h3>
                <h4 className="text-lg text-cyan-400 font-medium">AICTE Virtual Internship</h4>
              </div>
              
              <div className="flex flex-col gap-2 text-sm text-gray-400 font-mono">
                <div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-md border border-white/10 w-fit">
                  <Calendar className="w-4 h-4 text-cyan-400" />
                  <span>May 2024 – Jul 2024</span>
                </div>
                <div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-md border border-white/10 w-fit">
                  <Globe className="w-4 h-4 text-cyan-400" />
                  <span>Remote</span>
                </div>
              </div>
            </div>

            <div className="space-y-4 mb-8 text-gray-300 leading-relaxed">
              <p className="flex items-start gap-3">
                <span className="text-cyan-400 mt-1.5">•</span>
                <span>Gained hands-on experience with Cisco networking technologies and enterprise infrastructure</span>
              </p>
              <p className="flex items-start gap-3">
                <span className="text-cyan-400 mt-1.5">•</span>
                <span>Developed practical skills in network configuration, security protocols, and troubleshooting</span>
              </p>
              <p className="flex items-start gap-3">
                <span className="text-cyan-400 mt-1.5">•</span>
                <span>Collaborated with peers on networking projects under AICTE guidelines</span>
              </p>
            </div>

            <div className="pt-6 border-t border-white/10">
              <div className="flex flex-wrap gap-2">
                {['Networking', 'Cisco', 'Security', 'Infrastructure', 'AICTE'].map(tag => (
                  <span key={tag} className="text-xs font-mono text-white bg-white/5 border border-white/10 px-3 py-1.5 rounded hover:bg-cyan-400 hover:text-[#050816] hover:border-cyan-400 transition-colors cursor-default">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Experience;

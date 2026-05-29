import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Calendar, Award } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="mb-16">
          <span className="text-cyan-400 font-mono text-sm tracking-wider">02 // Education</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2">Academic Journey</h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="glass-card p-8 md:p-12 relative overflow-hidden"
        >
          {/* Decorative glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-400/10 rounded-full blur-[80px] -z-10" />
          
          <div className="flex flex-col lg:flex-row justify-between gap-12">
            
            <div className="flex-1 space-y-6">
              <div className="inline-flex items-center justify-center p-4 bg-cyan-400/10 rounded-2xl border border-cyan-400/30 shadow-[0_0_20px_rgba(0,212,255,0.2)] mb-4">
                <GraduationCap className="w-10 h-10 text-cyan-400" />
              </div>
              
              <h3 className="text-3xl md:text-4xl font-bold text-white">
                Sathyabama Institute of Science and Technology
              </h3>
              
              <h4 className="text-xl text-cyan-400 font-semibold">
                B.E Computer Science Engineering — Data Science
              </h4>
              
              <div className="flex flex-wrap gap-6 text-gray-400 font-mono">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-cyan-400/70" />
                  <span>2023 - 2027</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-cyan-400/70" />
                  <span>Chennai, India</span>
                </div>
              </div>

              <div className="pt-6">
                <h5 className="text-sm uppercase tracking-wider text-gray-500 mb-4 font-bold">Core Focus Areas</h5>
                <div className="flex flex-wrap gap-3">
                  {['Data Science', 'Machine Learning', 'Algorithms', 'Database Systems', 'Software Engineering'].map(tag => (
                    <span key={tag} className="px-4 py-2 text-sm font-medium bg-white/5 border border-white/10 rounded-full text-gray-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:w-72 flex-shrink-0">
              <div className="h-full glass-card p-8 flex flex-col justify-center items-center text-center border-cyan-400/20 bg-gradient-to-b from-cyan-400/5 to-transparent relative">
                <div className="absolute inset-0 bg-cyan-400/5 rounded-16 animate-pulse" />
                <Award className="w-12 h-12 text-cyan-400 mb-4" />
                <span className="text-5xl font-bold text-white mb-2">7.54</span>
                <span className="text-xl text-gray-400 font-mono">/ 10 GPA</span>
                <span className="mt-4 text-xs tracking-widest uppercase text-cyan-400 font-bold">Current CGPA</span>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Education;

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Github = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
);

const Linkedin = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
);

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col items-center text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-cyan-400 font-mono text-xs md:text-sm mb-6 tracking-wider"
        >
          &lt;Hello World /&gt;
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight mb-2">
            Nikhilesh <span className="text-[#00D4FF] neon-text">Kumar</span>
          </h1>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white/90 to-white/40">
            R S
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-8"
        >
          <h2 className="text-xl md:text-2xl font-bold text-gray-200 mb-4">
            Problem Solver
          </h2>
          <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto italic">
            "Not just learning to code — learning to create impact."
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex flex-col sm:flex-row items-center gap-6 mt-12"
        >
          <a
            href="#projects"
            className="group relative px-6 py-3 bg-transparent border border-cyan-400 text-cyan-400 font-bold uppercase tracking-wider overflow-hidden rounded-md transition-all hover:bg-cyan-400 hover:text-navy hover:shadow-[0_0_20px_rgba(0,212,255,0.6)]"
          >
            <span className="relative z-10 flex items-center gap-2 text-sm md:text-base">
              View Projects <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </a>
          
          <a
            href="#contact"
            className="px-6 py-3 bg-white/5 border border-white/10 text-white text-sm md:text-base font-bold uppercase tracking-wider rounded-md hover:bg-white/10 transition-colors backdrop-blur-sm"
          >
            Contact Me
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="flex gap-6 mt-16"
        >
          <a href="https://github.com/nikhiz17" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors p-3 glass rounded-full hover:shadow-[0_0_15px_rgba(0,212,255,0.5)]">
            <Github className="w-6 h-6" />
          </a>
          <a href="https://www.linkedin.com/in/nikhilesh17" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-cyan-400 transition-colors p-3 glass rounded-full hover:shadow-[0_0_15px_rgba(0,212,255,0.5)]">
            <Linkedin className="w-6 h-6" />
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;

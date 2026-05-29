import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Code, Medal, BookOpen, Cpu } from 'lucide-react';

const achievements = [
  {
    title: 'IEEE Smartathon 2025 Hackathon',
    category: 'Hackathon',
    desc: 'Participated in IEEE Smartathon 2025, collaborating on innovative smart city solutions and demonstrating rapid prototyping skills.',
    icon: <Code className="w-5 h-5 text-cyan-400" />
  },
  {
    title: 'Cisco Networking Academy – AICTE Virtual Internship',
    category: 'Internship',
    desc: 'Completed Cisco Networking Academy virtual internship under AICTE, gaining hands-on experience in networking fundamentals and enterprise infrastructure.',
    icon: <Trophy className="w-5 h-5 text-cyan-400" />
  },
  {
    title: 'TechXcelerate 2025',
    category: 'Competition',
    desc: 'Participated in TechXcelerate 2025, engaging with emerging technologies and showcasing technical problem-solving abilities.',
    icon: <Medal className="w-5 h-5 text-cyan-400" />
  },
  {
    title: 'Tata Data Visualisation Virtual Experience',
    category: 'Certification',
    desc: 'Completed the Tata Data Visualisation virtual experience program, mastering data storytelling and visualization techniques for business insights.',
    icon: <BookOpen className="w-5 h-5 text-cyan-400" />
  },
  {
    title: 'Gen AI & LLM Training Program',
    category: 'Training',
    desc: 'Completed specialized training in Generative AI and Large Language Models, understanding cutting-edge AI architectures and applications.',
    icon: <Cpu className="w-5 h-5 text-cyan-400" />
  }
];

const Achievements = () => {
  return (
    <section id="achievements" className="py-24 relative">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        
        <div className="mb-16 text-center">
          <span className="text-cyan-400 font-mono text-sm tracking-wider">05 // Achievements</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2">Milestones & Growth</h2>
        </div>

        <div className="relative w-full">
          {/* The central vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-cyan-400/30 md:-translate-x-1/2" />

          {achievements.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="mb-12 relative flex items-center w-full justify-between"
            >
              {/* Timeline dot */}
              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full glass border border-cyan-400/50 flex items-center justify-center shadow-[0_0_10px_rgba(0,212,255,0.4)] z-10 bg-[#050816]">
                {item.icon}
              </div>

              {/* Left Spacer (Desktop only) */}
              {idx % 2 !== 0 ? <div className="hidden md:block w-[45%]" /> : null}

              {/* Content card */}
              <div className={`w-full md:w-[45%] pl-16 md:pl-0 ${idx % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 text-left'}`}>
                <div className="glass-card p-6 hover:shadow-[0_0_15px_rgba(0,212,255,0.15)] relative group overflow-hidden">
                  <div className="absolute top-0 left-0 w-1 h-full bg-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="inline-block px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-mono text-gray-300 mb-3">
                    {item.category}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>

              {/* Right Spacer (Desktop only) */}
              {idx % 2 === 0 ? <div className="hidden md:block w-[45%]" /> : null}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Achievements;

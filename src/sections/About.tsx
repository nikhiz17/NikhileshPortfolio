import React from "react";
import { motion } from "framer-motion";
import { Brain, CodeXml, Database, Terminal } from "lucide-react";

export const About: React.FC = () => {
  const pillars = [
    {
      icon: <Terminal className="w-5 h-5 text-cyber-cyan" />,
      title: "Software Development",
      description:
        "Building reliable software with clean structures and efficient algorithms. Writing robust, maintainable Java modules and modular web environments.",
      border: "hover:border-cyber-cyan/30",
    },
    {
      icon: <Brain className="w-5 h-5 text-cyber-purple" />,
      title: "Data Analytics & AI",
      description:
        "Extracting insights from data using statistical models and machine learning pipelines. Exploring predictive architectures and automated data layers.",
      border: "hover:border-cyber-purple/30",
    },
    {
      icon: <Database className="w-5 h-5 text-cyber-blue" />,
      title: "Database Engineering",
      description:
        "Designing normalized schemas and executing complex queries to ensure high data integrity, reliability, and fast transaction throughput.",
      border: "hover:border-cyber-blue/30",
    },
  ];

  return (
    <section id="about" className="py-28 relative overflow-hidden bg-[#09090b]">
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-mono text-[10px] text-cyber-cyan tracking-[0.25em] uppercase font-semibold px-3 py-1 bg-cyber-cyan/5 border border-cyber-cyan/15 rounded-full mb-4"
          >
            01 / Profile
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-display font-bold text-3xl sm:text-5xl text-white tracking-tight"
          >
            About Me
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "40px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="h-[2px] bg-gradient-to-r from-cyber-cyan to-cyber-purple rounded-full mt-4"
          />
        </div>

        {/* 2-Column Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start max-w-5xl mx-auto">
          {/* Direct Copywriting (Col Span 5) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <h3 className="font-display font-semibold text-xl sm:text-2xl text-white leading-snug">
              Specializing in Data Science and Software Engineering.
            </h3>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-sans">
              I am a **Computer Science Engineering student** specializing in **Data Science** at Sathyabama Institute of Science and Technology, Chennai (Class of 2027).
            </p>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-sans">
              My engineering path focuses on bridging standard software design with advanced data analysis. Rather than looking for quick solutions, I aim to construct clean architectures, build robust data layers, and deploy projects that solve practical problems.
            </p>
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-sans">
              I thrive on continuous technical exploration—whether it is training models, designing relational databases, visualising business trends in Tableau, or compiling Java backends.
            </p>
          </motion.div>

          {/* Pillars List (Col Span 7) */}
          <div className="lg:col-span-7 space-y-5">
            {pillars.map((p, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`glass-card p-6 rounded-2xl border border-white/3 flex items-start space-x-5 group transition-all duration-300 ${p.border}`}
              >
                <div className="p-2.5 bg-white/2 rounded-xl text-zinc-400 shrink-0 group-hover:scale-105 transition-transform duration-300">
                  {p.icon}
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm sm:text-base text-white tracking-wide mb-1.5">
                    {p.title}
                  </h4>
                  <p className="text-[12px] text-zinc-400 font-sans leading-relaxed">
                    {p.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

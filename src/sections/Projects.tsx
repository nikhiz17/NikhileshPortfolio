import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Eye, Monitor, ShieldAlert } from "lucide-react";

export const Projects: React.FC = () => {
  const projectsList = [
    {
      badge: "IOT & Hardware",
      title: "Zeo Drive – Anti Sleeping Glass",
      description:
        "A hardware-software safety device designed for drivers. Using custom facial monitoring modules, it tracks and processes blink metrics in real-time to alert operators instantly upon micro-sleep detection.",
      tech: ["Python", "OpenCV", "Arduino", "C++", "Computer Vision"],
      github: "https://github.com",
      live: "https://github.com",
      icon: <ShieldAlert className="w-5 h-5 text-cyber-pink" />,
      glowColor: "hover:border-cyber-pink/30",
    },
    {
      badge: "AI & Software",
      title: "TalentLens AI – Resume Screener",
      description:
        "An automated recruitment portal parsing resume files. Integrates LLM layers to measure candidate alignments against roles using vector embeddings, discovering critical keyword gaps.",
      tech: ["React", "FastAPI", "Gemini LLM", "Tailwind", "Vector DB"],
      github: "https://github.com",
      live: "https://github.com",
      icon: <Monitor className="w-5 h-5 text-cyber-cyan" />,
      glowColor: "hover:border-cyber-cyan/30",
    },
    {
      badge: "Data Science & BI",
      title: "Zomato Data Analysis Dashboard",
      description:
        "An end-to-end business intelligence study visualizing market patterns. Constructed clean SQL transformations and loaded operational visual maps on Tableau.",
      tech: ["Tableau", "SQL", "ETL", "Python", "Data Visualisation"],
      github: "https://github.com",
      live: "https://github.com",
      icon: <Eye className="w-5 h-5 text-cyber-purple" />,
      glowColor: "hover:border-cyber-purple/30",
    },
  ];

  return (
    <section id="projects" className="py-28 relative overflow-hidden bg-[#09090b]">
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-mono text-[10px] text-cyber-cyan tracking-[0.25em] uppercase font-semibold px-3 py-1 bg-cyber-cyan/5 border border-cyber-cyan/15 rounded-full mb-4"
          >
            03 / Works
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-display font-bold text-3xl sm:text-5xl text-white tracking-tight"
          >
            Projects
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "40px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="h-[2px] bg-gradient-to-r from-cyber-cyan to-cyber-purple rounded-full mt-4"
          />
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {projectsList.map((p, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`glass-card rounded-2xl p-6 flex flex-col justify-between group border border-white/3 relative transition-all duration-300 ${p.glowColor}`}
            >
              <div>
                {/* Header elements */}
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-[9px] tracking-wider text-zinc-400 uppercase bg-zinc-900 border border-zinc-800 rounded-md px-2 py-0.5">
                    {p.badge}
                  </span>
                  <div className="p-2 bg-zinc-900 border border-zinc-800 rounded-lg text-zinc-400">
                    {p.icon}
                  </div>
                </div>

                {/* Project Title */}
                <h3 className="font-display font-bold text-base sm:text-lg text-white tracking-wide mb-3 transition-colors duration-300">
                  {p.title}
                </h3>

                {/* Description */}
                <p className="text-[12px] text-zinc-400 leading-relaxed font-sans mb-6">
                  {p.description}
                </p>

                {/* Tech Chips */}
                <div className="flex flex-wrap gap-1.5 mb-8">
                  {p.tech.map((t, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-1 rounded bg-zinc-900 border border-zinc-850 text-[9px] font-mono text-zinc-400"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center space-x-3 mt-auto">
                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 flex items-center justify-center space-x-2 py-2 rounded-xl border border-zinc-800 bg-zinc-900 hover:bg-zinc-850 text-white font-mono text-[10px] uppercase tracking-wider transition-all duration-300"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  <span>Code</span>
                </a>
                <a
                  href={p.live}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 flex items-center justify-center space-x-2 py-2 rounded-xl bg-gradient-to-r from-cyber-cyan/10 to-cyber-purple/10 border border-cyber-cyan/20 hover:border-cyber-cyan/40 text-cyber-cyan font-mono text-[10px] uppercase tracking-wider transition-all duration-300"
                >
                  <ExternalLink className="w-3 h-3" />
                  <span>Demo</span>
                </a>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

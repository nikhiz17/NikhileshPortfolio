import React from "react";
import { motion } from "framer-motion";
import { Award, Briefcase, Calendar, CheckSquare, ShieldCheck, Trophy } from "lucide-react";

export const ExperienceAchievements: React.FC = () => {
  const experiences = [
    {
      role: "AICTE Virtual Cybersecurity Intern",
      company: "Cisco Networking Academy",
      period: "May 2024 – Jul 2024",
      icon: <Briefcase className="w-4 h-4 text-cyber-cyan" />,
      bullets: [
        "Configured secure network topologies using packet tracer models, deploying firewalls and routing protocols.",
        "Audited network parameters to detect IP spoofing, vulnerabilities, and man-in-the-middle vector channels.",
        "Mastered network security parameters, achieving certifications in system access rules and protection layers.",
      ],
    },
  ];

  const achievements = [
    {
      title: "IEEE Smartathon 2025 Hackathon",
      sub: "Finalist & Presenter",
      desc: "Developed and presented 'Zeo Drive' anti-sleeping glass, demonstrating hardware safety configurations to reduce accidents.",
      icon: <Trophy className="w-4 h-4 text-amber-400" />,
      tag: "Innovator",
    },
    {
      title: "Cisco Networking Certification",
      sub: "Professional Milestone",
      desc: "Constructed secure virtual local area networks (VLANs), testing secure protocol routing policies and port security setups.",
      icon: <ShieldCheck className="w-4 h-4 text-cyber-cyan" />,
      tag: "Security",
    },
    {
      title: "TechXcelerate 2025",
      sub: "Software Showcase Presenter",
      desc: "Pitched software engineering projects to regional academic panels, demonstrating modular, structured styling principles.",
      icon: <Award className="w-4 h-4 text-cyber-purple" />,
      tag: "Presenter",
    },
    {
      title: "Tata Data Visualisation Experience",
      sub: "Forage Visual Analyst",
      desc: "Designed and visualised analytical scenarios for corporate dashboard cohorts, resolving data preparation challenges.",
      icon: <Award className="w-4 h-4 text-cyber-pink" />,
      tag: "Analyst",
    },
    {
      title: "Gen AI & LLM Training Program",
      sub: "Cohort Certification",
      desc: "Mastered retrieval-augmented generation (RAG), vector spaces, API integrations, and developer toolkits.",
      icon: <Trophy className="w-4 h-4 text-emerald-400" />,
      tag: "AI Tech",
    },
  ];

  return (
    <section id="experience" className="py-28 relative overflow-hidden bg-[#09090b]">
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-mono text-[10px] text-cyber-cyan tracking-[0.25em] uppercase font-semibold px-3 py-1 bg-cyber-cyan/5 border border-cyber-cyan/15 rounded-full mb-4"
          >
            05 / Journey
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-display font-bold text-3xl sm:text-5xl text-white tracking-tight"
          >
            Experience &amp; Timeline
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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-5xl mx-auto items-start">
          
          {/* Experience (Col Span 5) */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="font-display font-bold text-xs sm:text-sm text-zinc-300 tracking-wider uppercase mb-6 flex items-center">
              <Briefcase className="w-4 h-4 text-cyber-cyan mr-3" />
              Professional Experience
            </h3>

            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="glass-card p-6 rounded-2xl border border-white/3 hover:border-cyber-cyan/20"
              >
                <div className="flex items-center space-x-3 mb-5">
                  <div className="p-2 bg-zinc-900 border border-zinc-850 rounded-lg text-cyber-cyan shrink-0">
                    {exp.icon}
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-sm sm:text-base text-white leading-tight">
                      {exp.role}
                    </h4>
                    <p className="font-mono text-[9px] text-cyber-cyan uppercase tracking-wider mt-0.5">
                      {exp.company}
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-1.5 px-2.5 py-1 bg-zinc-900 border border-zinc-850 rounded text-[9px] font-mono text-zinc-400 w-fit mb-5">
                  <Calendar className="w-3 h-3 text-zinc-500" />
                  <span>{exp.period}</span>
                </div>

                <ul className="space-y-3 text-[11px] text-zinc-400 leading-relaxed font-sans list-none">
                  {exp.bullets.map((b, bIdx) => (
                    <li key={bIdx} className="flex items-start">
                      <CheckSquare className="w-3.5 h-3.5 text-cyber-cyan shrink-0 mr-2.5 mt-0.5" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Achievements (Col Span 7) */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="font-display font-bold text-xs sm:text-sm text-zinc-300 tracking-wider uppercase mb-6 flex items-center">
              <Award className="w-4 h-4 text-cyber-purple mr-3" />
              Timeline Milestones
            </h3>

            <div className="space-y-4">
              {achievements.map((ach, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className="glass-card p-5 rounded-2xl border border-white/3 flex items-start space-x-4 group hover:border-cyber-purple/20 transition-all duration-300"
                >
                  <div className="p-2 bg-zinc-900 border border-zinc-850 rounded-lg text-zinc-400 shrink-0">
                    {ach.icon}
                  </div>

                  <div className="flex-1 space-y-1">
                    <div className="flex items-center justify-between">
                      <h4 className="font-display font-bold text-sm text-white tracking-wide leading-tight transition-colors duration-300">
                        {ach.title}
                      </h4>
                      <span className="font-mono text-[9px] text-cyber-purple bg-cyber-purple/5 border border-cyber-purple/15 px-2 py-0.5 rounded-full shrink-0">
                        {ach.tag}
                      </span>
                    </div>

                    <p className="font-mono text-[9px] text-cyber-cyan uppercase tracking-wider">
                      {ach.sub}
                    </p>
                    
                    <p className="text-[11px] text-zinc-400 font-sans leading-relaxed pt-1">
                      {ach.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

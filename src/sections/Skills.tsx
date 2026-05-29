import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, CodeXml, Coffee, Database, Layout, LineChart } from "lucide-react";

export const Skills: React.FC = () => {
  const coreSkills = [
    {
      name: "Python",
      percentage: 90,
      icon: <CodeXml className="w-4 h-4 text-cyber-cyan" />,
      color: "from-cyber-cyan to-cyber-blue",
      desc: "Pandas, NumPy, Scikit-Learn, Predictive ML Modeling",
    },
    {
      name: "Java",
      percentage: 85,
      icon: <Coffee className="w-4 h-4 text-cyber-purple" />,
      color: "from-cyber-purple to-cyber-pink",
      desc: "Object-Oriented Design, Core Data Structures, System Modules",
    },
    {
      name: "DBMS",
      percentage: 80,
      icon: <Database className="w-4 h-4 text-cyber-blue" />,
      color: "from-cyber-blue to-cyan-500",
      desc: "SQL Schema Design, Query Auditing, Relational Integrity",
    },
    {
      name: "Tableau",
      percentage: 75,
      icon: <LineChart className="w-4 h-4 text-amber-400" />,
      color: "from-amber-400 to-orange-500",
      desc: "Business Analytics, Cohort Visuals, Dashboards",
    },
    {
      name: "HTML/CSS",
      percentage: 85,
      icon: <Layout className="w-4 h-4 text-emerald-400" />,
      color: "from-emerald-400 to-teal-500",
      desc: "Responsive Grid Layouts, Modern Tailwind Structuring",
    },
  ];

  const technologies = [
    "Machine Learning",
    "Deep Learning",
    "SQL / PostgreSQL",
    "Git / GitHub",
    "FastAPI",
    "Tailwind CSS",
    "Framer Motion",
    "React",
    "Excel Analytics",
    "REST APIs",
    "Data Wrangling",
    "Object-Oriented Analysis",
  ];

  return (
    <section id="skills" className="py-28 relative overflow-hidden bg-[#09090b]">
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-mono text-[10px] text-cyber-cyan tracking-[0.25em] uppercase font-semibold px-3 py-1 bg-cyber-cyan/5 border border-cyber-cyan/15 rounded-full mb-4"
          >
            04 / Expertise
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-display font-bold text-3xl sm:text-5xl text-white tracking-tight"
          >
            Skills &amp; Technologies
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "40px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="h-[2px] bg-gradient-to-r from-cyber-cyan to-cyber-purple rounded-full mt-4"
          />
        </div>

        {/* Dual Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-5xl mx-auto">
          {/* Progress Bars (Col Span 7) */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="font-display font-bold text-sm text-zinc-300 tracking-wider uppercase mb-6 flex items-center">
              <span className="w-1.5 h-1.5 rounded-full bg-cyber-cyan mr-3" />
              Core Capabilities
            </h3>

            <div className="space-y-6">
              {coreSkills.map((skill, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="flex items-center justify-between text-xs sm:text-sm">
                    <div className="flex items-center space-x-2">
                      <div className="p-1 bg-zinc-900 border border-zinc-850 rounded text-zinc-400">
                        {skill.icon}
                      </div>
                      <span className="font-display font-semibold text-white tracking-wide">
                        {skill.name}
                      </span>
                    </div>
                    <span className="font-mono text-[11px] font-bold text-cyber-cyan">
                      {skill.percentage}%
                    </span>
                  </div>

                  {/* Sleek, Thin Progress Line */}
                  <div className="h-[3px] w-full bg-zinc-900 rounded-full overflow-hidden relative border border-white/2">
                    <motion.div
                      className={`h-full bg-gradient-to-r ${skill.color}`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.percentage}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      style={{
                        filter: "drop-shadow(0 0 2px rgba(0, 242, 254, 0.2))"
                      }}
                    />
                  </div>

                  <p className="text-[10px] text-zinc-500 font-mono pl-1">
                    {skill.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Glowing Skill Chips (Col Span 5) */}
          <div className="lg:col-span-5 glass-card rounded-2xl p-6 sm:p-8 space-y-6 border border-white/3">
            <h3 className="font-display font-bold text-sm text-zinc-300 tracking-wider uppercase flex items-center">
              <span className="w-1.5 h-1.5 rounded-full bg-cyber-purple mr-3" />
              Developer Tools
            </h3>

            <p className="text-[11px] text-zinc-400 leading-relaxed font-sans">
              Platforms, methodologies, and framework libraries configured inside software deployment workflows.
            </p>

            <div className="flex flex-wrap gap-2">
              {technologies.map((tech, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.02 }}
                  className="px-3 py-1.5 rounded-xl bg-zinc-900 border border-zinc-850 text-[10px] font-mono text-zinc-400 hover:text-white hover:border-cyber-cyan/30 transition-all duration-300 flex items-center space-x-1.5 cursor-default"
                >
                  <CheckCircle2 className="w-3 h-3 text-cyber-purple shrink-0" />
                  <span>{tech}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

import React from "react";
import { motion } from "framer-motion";
import { Award, BookOpen, Calendar, GraduationCap } from "lucide-react";

export const Education: React.FC = () => {
  const courses = [
    "Data Science Fundamentals",
    "Database Management Systems",
    "Machine Learning & AI",
    "Java Programming & OOP",
    "Probability & Statistics",
    "Python Analytics",
  ];

  return (
    <section id="education" className="py-28 relative overflow-hidden bg-[#09090b]">
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-mono text-[10px] text-cyber-cyan tracking-[0.25em] uppercase font-semibold px-3 py-1 bg-cyber-cyan/5 border border-cyber-cyan/15 rounded-full mb-4"
          >
            02 / Academics
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-display font-bold text-3xl sm:text-5xl text-white tracking-tight"
          >
            Education
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "40px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="h-[2px] bg-gradient-to-r from-cyber-cyan to-cyber-purple rounded-full mt-4"
          />
        </div>

        {/* Education Display Card */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-card rounded-2xl p-8 sm:p-10 relative overflow-hidden border border-white/3 shadow-2xl flex flex-col md:flex-row items-center md:items-start justify-between gap-10"
          >
            {/* University Details */}
            <div className="flex-1 space-y-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-zinc-900 border border-zinc-800 rounded-xl shrink-0 text-cyber-cyan">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-lg sm:text-xl text-white tracking-wide leading-tight">
                    Sathyabama Institute of Science and Technology
                  </h3>
                  <p className="font-mono text-[10px] text-cyber-cyan uppercase tracking-widest mt-1">
                    Chennai, India
                  </p>
                </div>
              </div>

              <div className="space-y-3.5 pl-1 border-l border-zinc-800">
                <div className="flex items-center text-xs sm:text-sm text-zinc-300 font-medium">
                  <BookOpen className="w-4 h-4 text-cyber-purple mr-2.5 shrink-0" />
                  <span>B.E. Computer Science Engineering (specializing in Data Science)</span>
                </div>
                
                <div className="flex items-center text-[11px] sm:text-xs text-cyber-muted">
                  <Calendar className="w-4 h-4 text-zinc-500 mr-2.5 shrink-0" />
                  <span>2023 – 2027 (Expected Graduation)</span>
                </div>
              </div>

              {/* Course Chips */}
              <div className="space-y-3">
                <h4 className="font-display font-bold text-[10px] uppercase tracking-wider text-zinc-400">
                  Key Curriculum:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {courses.map((course, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded bg-zinc-900 border border-zinc-850 text-[10px] font-mono text-zinc-400 hover:text-white transition-all duration-300"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Circular GPA Dial Panel */}
            <div className="flex flex-col items-center justify-center p-6 bg-zinc-905 border border-zinc-800/80 rounded-2xl min-w-[190px] relative overflow-hidden group">
              <h4 className="font-display font-semibold text-[10px] tracking-wider text-zinc-400 uppercase mb-4">
                Current Performance
              </h4>

              {/* SVG Circular Dial (Ultra Sleek) */}
              <div className="relative w-32 h-32 flex items-center justify-center">
                <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                  {/* Track ring */}
                  <circle
                    cx="50"
                    cy="50"
                    r="42"
                    className="stroke-zinc-800"
                    strokeWidth="4"
                    fill="transparent"
                  />
                  {/* Gradient Progress ring */}
                  <motion.circle
                    cx="50"
                    cy="50"
                    r="42"
                    className="stroke-cyber-cyan"
                    strokeWidth="4"
                    fill="transparent"
                    strokeDasharray="263.89"
                    initial={{ strokeDashoffset: 263.89 }}
                    whileInView={{ strokeDashoffset: 263.89 - (263.89 * 75.4) / 100 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    strokeLinecap="round"
                    style={{
                      stroke: "url(#gpaGradient)",
                      filter: "drop-shadow(0 0 4px rgba(0, 242, 254, 0.2))",
                    }}
                  />
                  {/* Gradient definitions */}
                  <defs>
                    <linearGradient id="gpaGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#00f2fe" />
                      <stop offset="100%" stopColor="#a855f7" />
                    </linearGradient>
                  </defs>
                </svg>

                {/* Dial Content */}
                <div className="absolute flex flex-col items-center justify-center text-center">
                  <span className="font-mono text-2xl font-bold text-white tracking-wide">
                    7.54
                  </span>
                  <span className="font-mono text-[9px] text-zinc-500 uppercase">
                    GPA / 10
                  </span>
                </div>
              </div>

              {/* Status Badge */}
              <div className="mt-4 flex items-center space-x-1 px-3 py-1 bg-cyber-purple/10 border border-cyber-purple/20 rounded-full">
                <Award className="w-3 h-3 text-cyber-purple" />
                <span className="font-mono text-[9px] font-semibold text-cyber-purple uppercase tracking-wider">
                  First Class
                </span>
              </div>
            </div>

          </motion.div>
        </div>

      </div>
    </section>
  );
};

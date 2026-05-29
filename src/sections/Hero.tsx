import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";

export const Hero: React.FC = () => {
  const words = ["Data Science Student", "Java Developer", "AI Enthusiast", "Problem Solver"];
  const [wordIndex, setWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer: number;
    const currentWord = words[wordIndex];
    const typeSpeed = isDeleting ? 30 : 60;
    
    const handleTyping = () => {
      if (!isDeleting) {
        setCurrentText(currentWord.substring(0, currentText.length + 1));
        if (currentText === currentWord) {
          timer = setTimeout(() => setIsDeleting(true), 2000);
          return;
        }
      } else {
        setCurrentText(currentWord.substring(0, currentText.length - 1));
        if (currentText === "") {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
          return;
        }
      }
      timer = setTimeout(handleTyping, typeSpeed);
    };

    timer = setTimeout(handleTyping, typeSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, wordIndex]);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen relative flex items-center justify-center pt-20"
    >
      {/* Background Soft Neon Light */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-radial from-[rgba(0,242,254,0.03)] to-transparent rounded-full filter blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 text-center flex flex-col items-center">
        {/* Understated Location Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center space-x-2 text-[10px] font-mono tracking-widest text-cyber-muted uppercase bg-zinc-900/60 border border-zinc-800 px-3.5 py-1.5 rounded-full mb-8"
        >
          <MapPin className="w-3 h-3 text-cyber-cyan" />
          <span>Chennai, India</span>
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
        </motion.div>

        {/* Introduction */}
        <motion.h4
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-mono text-[11px] text-cyber-cyan tracking-[0.25em] uppercase font-medium mb-4"
        >
          Computer Science Engineering Student
        </motion.h4>

        {/* Premium Metallic Gradient Header */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="font-display font-extrabold text-4xl sm:text-6xl md:text-8xl tracking-tight text-white mb-6 leading-[1.05]"
        >
          <span className="text-white">Nikhilesh Kumar</span>
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-cyan via-cyber-blue to-cyber-purple animate-text-gradient bg-[length:200%_auto] text-neon-cyan">
            R S
          </span>
        </motion.h1>

        {/* Organic Typewriter text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="h-10 flex items-center justify-center font-display text-lg sm:text-2xl text-zinc-300 font-medium mb-8"
        >
          <span>Focusing on&nbsp;</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-cyan to-cyber-purple font-semibold border-r border-cyber-cyan/60 pr-1">
            {currentText}
          </span>
        </motion.div>

        {/* Authentic Copy Quote */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="font-display italic text-sm sm:text-base text-zinc-400 max-w-xl leading-relaxed mb-12"
        >
          &ldquo;Not just learning to code &mdash; learning to create impact.&rdquo;
        </motion.p>

        {/* Minimal Vercel-like CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
        >
          <button
            onClick={() => scrollTo("projects")}
            className="w-full sm:w-auto bg-white hover:bg-zinc-200 text-black font-display font-bold text-xs uppercase tracking-widest px-8 py-4 rounded-full flex items-center justify-center space-x-2 transition-all duration-300"
          >
            <span>View Projects</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={() => scrollTo("contact")}
            className="w-full sm:w-auto bg-zinc-950 hover:bg-zinc-900 border border-zinc-800 hover:border-cyber-purple/40 text-white font-display font-bold text-xs uppercase tracking-widest px-8 py-4 rounded-full flex items-center justify-center transition-all duration-300"
          >
            <span>Contact Me</span>
          </button>
        </motion.div>
      </div>

      {/* Understated bottom marker */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-30 pointer-events-none">
        <div className="w-[1px] h-8 bg-gradient-to-b from-cyber-cyan to-transparent" />
      </div>
    </section>
  );
};

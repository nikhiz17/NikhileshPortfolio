import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Send, Sparkles, MapPin } from "lucide-react";
import confetti from "canvas-confetti";

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: "", email: "", msg: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.msg) return;

    setStatus("sending");
    setTimeout(() => {
      setStatus("success");
      
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.75 },
        colors: ["#00f2fe", "#a855f7", "#ec4899"],
      });

      setFormData({ name: "", email: "", msg: "" });
      setTimeout(() => setStatus("idle"), 4000);
    }, 1200);
  };

  return (
    <section id="contact" className="py-28 relative overflow-hidden bg-[#09090b]">
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="font-mono text-[10px] text-cyber-cyan tracking-[0.25em] uppercase font-semibold px-3 py-1 bg-cyber-cyan/5 border border-cyber-cyan/15 rounded-full mb-4"
          >
            06 / Connect
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-display font-bold text-3xl sm:text-5xl text-white tracking-tight"
          >
            Get in Touch
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "40px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="h-[2px] bg-gradient-to-r from-cyber-cyan to-cyber-purple rounded-full mt-4"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-5xl mx-auto items-stretch">
          
          {/* Info cards (Col Span 5) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="space-y-6">
              <h3 className="font-display font-semibold text-lg sm:text-xl text-white tracking-wide leading-snug">
                Let's discuss new projects and opportunities.
              </h3>
              <p className="text-[12px] text-zinc-400 leading-relaxed font-sans">
                I am open to internship positions, junior developer roles, and engineering collaborations. Fill out the contact form or connect via direct details:
              </p>
            </div>

            {/* Glowing Contacts list */}
            <div className="space-y-3">
              
              {/* Email */}
              <a
                href="mailto:nikhilesh.kumar.rs@gmail.com"
                className="glass-card p-4 rounded-xl border border-white/3 flex items-center space-x-4 group hover:border-cyber-cyan/20"
              >
                <div className="p-2.5 bg-zinc-900 border border-zinc-850 rounded-lg text-cyber-cyan">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-mono text-[9px] text-zinc-500 uppercase tracking-wider block">
                    Email
                  </span>
                  <span className="font-display text-xs sm:text-sm text-white font-medium transition-colors duration-300">
                    nikhilesh.kumar.rs@gmail.com
                  </span>
                </div>
              </a>

              {/* Phone */}
              <a
                href="tel:+919876543210"
                className="glass-card p-4 rounded-xl border border-white/3 flex items-center space-x-4 group hover:border-cyber-purple/20"
              >
                <div className="p-2.5 bg-zinc-900 border border-zinc-850 rounded-lg text-cyber-purple">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-mono text-[9px] text-zinc-500 uppercase tracking-wider block">
                    Phone
                  </span>
                  <span className="font-display text-xs sm:text-sm text-white font-medium transition-colors duration-300">
                    +91 98765 43210
                  </span>
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com/in/nikhilesh-kumar-rs"
                target="_blank"
                rel="noreferrer"
                className="glass-card p-4 rounded-xl border border-white/3 flex items-center space-x-4 group hover:border-cyber-blue/20"
              >
                <div className="p-2.5 bg-zinc-900 border border-zinc-850 rounded-lg text-cyber-blue">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </div>
                <div>
                  <span className="font-mono text-[9px] text-zinc-500 uppercase tracking-wider block">
                    LinkedIn
                  </span>
                  <span className="font-display text-xs sm:text-sm text-white font-medium transition-colors duration-300">
                    linkedin.com/in/nikhilesh-kumar-rs
                  </span>
                </div>
              </a>

            </div>

            {/* Footer location stamp */}
            <div className="text-[10px] font-mono text-zinc-500 flex items-center space-x-2 pt-6 border-t border-white/2">
              <MapPin className="w-3.5 h-3.5 text-cyber-cyan" />
              <span>Sathyabama CSE (Data Science) | Chennai, India</span>
            </div>
          </div>

          {/* Form Card (Col Span 7) */}
          <div className="lg:col-span-7 glass-card rounded-2xl p-6 sm:p-8 relative overflow-hidden border border-white/3 flex flex-col justify-between">
            <h3 className="font-display font-semibold text-base text-white tracking-wide mb-6 flex items-center">
              <Sparkles className="w-4 h-4 text-cyber-purple mr-2" />
              Send Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name Field */}
              <div className="relative">
                <input
                  type="text"
                  required
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder=" "
                  className="w-full bg-zinc-900 border border-zinc-850 rounded-xl px-4 py-3 text-xs sm:text-sm text-white focus:outline-none focus:border-cyber-cyan/50 focus:bg-zinc-850/80 transition-all duration-300 placeholder-transparent peer"
                />
                <label
                  htmlFor="name"
                  className="absolute left-4 top-3 text-[10px] sm:text-xs font-mono text-zinc-500 uppercase tracking-wider transition-all duration-300 pointer-events-none peer-placeholder-shown:text-xs peer-placeholder-shown:top-3 peer-placeholder-shown:text-zinc-500 peer-focus:-top-2.5 peer-focus:left-3 peer-focus:text-[9px] peer-focus:text-cyber-cyan peer-focus:bg-[#09090b] peer-focus:px-2"
                >
                  Your Name
                </label>
              </div>

              {/* Email Field */}
              <div className="relative">
                <input
                  type="email"
                  required
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder=" "
                  className="w-full bg-zinc-900 border border-zinc-850 rounded-xl px-4 py-3 text-xs sm:text-sm text-white focus:outline-none focus:border-cyber-cyan/50 focus:bg-zinc-850/80 transition-all duration-300 placeholder-transparent peer"
                />
                <label
                  htmlFor="email"
                  className="absolute left-4 top-3 text-[10px] sm:text-xs font-mono text-zinc-500 uppercase tracking-wider transition-all duration-300 pointer-events-none peer-placeholder-shown:text-xs peer-placeholder-shown:top-3 peer-placeholder-shown:text-zinc-500 peer-focus:-top-2.5 peer-focus:left-3 peer-focus:text-[9px] peer-focus:text-cyber-cyan peer-focus:bg-[#09090b] peer-focus:px-2"
                >
                  Your Email
                </label>
              </div>

              {/* Message Field */}
              <div className="relative">
                <textarea
                  required
                  id="msg"
                  rows={4}
                  value={formData.msg}
                  onChange={(e) => setFormData({ ...formData, msg: e.target.value })}
                  placeholder=" "
                  className="w-full bg-zinc-900 border border-zinc-850 rounded-xl px-4 py-3 text-xs sm:text-sm text-white focus:outline-none focus:border-cyber-cyan/50 focus:bg-zinc-850/80 transition-all duration-300 placeholder-transparent peer resize-none"
                />
                <label
                  htmlFor="msg"
                  className="absolute left-4 top-3 text-[10px] sm:text-xs font-mono text-zinc-500 uppercase tracking-wider transition-all duration-300 pointer-events-none peer-placeholder-shown:text-xs peer-placeholder-shown:top-3 peer-placeholder-shown:text-zinc-500 peer-focus:-top-2.5 peer-focus:left-3 peer-focus:text-[9px] peer-focus:text-cyber-cyan peer-focus:bg-[#09090b] peer-focus:px-2"
                >
                  Message
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status !== "idle"}
                className={`w-full bg-gradient-to-r from-cyber-cyan to-cyber-purple text-zinc-950 text-center font-display text-xs font-bold uppercase tracking-wider py-3.5 rounded-xl flex items-center justify-center space-x-2 transition-all duration-300 hover:scale-[1.01] ${
                  status !== "idle" ? "opacity-75 cursor-not-allowed" : "neon-glow-cyan"
                }`}
              >
                {status === "idle" && (
                  <>
                    <span>Send Message</span>
                    <Send className="w-3.5 h-3.5" />
                  </>
                )}
                {status === "sending" && (
                  <>
                    <span>Sending...</span>
                    <div className="w-3.5 h-3.5 border-2 border-zinc-950 border-t-transparent rounded-full animate-spin" />
                  </>
                )}
                {status === "success" && (
                  <>
                    <span>Message Sent!</span>
                    <Sparkles className="w-3.5 h-3.5" />
                  </>
                )}
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};

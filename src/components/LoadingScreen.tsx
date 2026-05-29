import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const duration = 1000; // 1s smooth loading
    const interval = 16;
    const step = 100 / (duration / interval);
    
    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + step + Math.random() * 6;
        if (next >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsDone(true);
            setTimeout(onComplete, 500); // Wait for transition fade
          }, 300);
          return 100;
        }
        return next;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 bg-[#09090b] z-[9999] flex flex-col items-center justify-center select-none"
        >
          {/* Subtle Ambient Glow */}
          <div className="absolute w-[400px] h-[400px] bg-gradient-radial from-[rgba(168,85,247,0.06)] to-transparent rounded-full filter blur-3xl opacity-70 pointer-events-none" />

          <div className="relative flex flex-col items-center space-y-6 max-w-xs w-full px-6">
            {/* Elegant Typography Logo */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center space-y-1.5"
            >
              <h2 className="font-display font-bold text-xl tracking-[0.25em] text-white">
                NIKHILESH
              </h2>
              <p className="text-[9px] font-mono text-cyber-cyan tracking-[0.3em] uppercase opacity-75">
                Data Science Portfolio
              </p>
            </motion.div>

            {/* Numerical Progress */}
            <div className="text-center">
              <span className="font-mono text-xl font-medium text-white/90">
                {Math.round(progress)}
                <span className="text-cyber-cyan text-sm font-light ml-0.5">%</span>
              </span>
            </div>

            {/* Ultra-Thin Modern Progress Bar */}
            <div className="w-48 h-[2px] bg-white/5 rounded-full overflow-hidden relative">
              <motion.div
                className="h-full bg-gradient-to-r from-cyber-cyan via-cyber-blue to-cyber-purple"
                style={{ width: `${progress}%` }}
                layoutId="progressBar"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

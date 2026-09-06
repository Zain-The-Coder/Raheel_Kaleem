"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function BombIntro({ onComplete, onSkip }) {
  const [phase, setPhase] = useState("walking"); // walking, placed, running, waiting, boom

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("placed"), 1000);
    const t2 = setTimeout(() => setPhase("running"), 1200);
    const t3 = setTimeout(() => setPhase("waiting"), 1700);
    const t4 = setTimeout(() => setPhase("boom"), 2700);
    const t5 = setTimeout(() => onComplete(), 3500);

    return () => {
      clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4); clearTimeout(t5);
    };
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900 overflow-hidden"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <button 
        onClick={onSkip}
        className="absolute top-6 right-6 px-4 py-2 bg-white/10 text-white rounded-full text-sm font-medium hover:bg-white/20 transition-colors z-50"
      >
        Skip Intro
      </button>

      {/* Main Scene Container */}
      <div className="relative w-full h-full max-w-4xl max-h-[600px] flex items-center justify-center">
        
        {/* Character */}
        <AnimatePresence>
          {phase !== "boom" && (
            <motion.div
              className="absolute flex flex-col items-center z-20"
              initial={{ x: "-100vw" }}
              animate={
                phase === "walking" ? { x: 0 } :
                phase === "placed" ? { x: 0 } :
                phase === "running" ? { x: -150 } :
                { x: -150 }
              }
              transition={{ duration: phase === "walking" ? 1 : phase === "running" ? 0.5 : 0 }}
            >
              {/* Simple character SVG */}
              <svg width="80" height="120" viewBox="0 0 80 120" className="drop-shadow-lg">
                {/* Head */}
                <circle cx="40" cy="20" r="15" fill="#e2e8f0" />
                {/* Body */}
                <line x1="40" y1="35" x2="40" y2="80" stroke="#e2e8f0" strokeWidth="6" strokeLinecap="round" />
                
                {/* Arms */}
                {phase === "waiting" ? (
                  <>
                    <path d="M 40 45 Q 20 40, 25 20" fill="none" stroke="#e2e8f0" strokeWidth="5" strokeLinecap="round" />
                    <path d="M 40 45 Q 60 40, 55 20" fill="none" stroke="#e2e8f0" strokeWidth="5" strokeLinecap="round" />
                  </>
                ) : (
                  <>
                    <path d="M 40 45 Q 20 60, 20 80" fill="none" stroke="#e2e8f0" strokeWidth="5" strokeLinecap="round" />
                    <path d="M 40 45 Q 60 60, 60 80" fill="none" stroke="#e2e8f0" strokeWidth="5" strokeLinecap="round" />
                  </>
                )}
                
                {/* Legs */}
                <path d="M 40 80 L 25 110" stroke="#e2e8f0" strokeWidth="6" strokeLinecap="round" />
                <path d="M 40 80 L 55 110" stroke="#e2e8f0" strokeWidth="6" strokeLinecap="round" />
              </svg>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bomb */}
        <AnimatePresence>
          {phase !== "boom" && (
            <motion.div
              className="absolute z-10"
              initial={{ x: "-100vw", y: 20 }}
              animate={phase === "walking" ? { x: 30, y: 20 } : { x: 0, y: 40 }}
              transition={{ duration: phase === "walking" ? 1 : 0.1 }}
            >
              <svg width="60" height="80" viewBox="0 0 60 80" className="drop-shadow-lg">
                {/* Fuse */}
                <motion.path
                  d="M 30 20 Q 40 5, 50 10"
                  fill="none"
                  stroke="#fb923c"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeDasharray="30"
                  strokeDashoffset={phase === "waiting" ? 30 : 0}
                  transition={{ duration: 1, ease: "linear", delay: phase === "waiting" ? 0 : 0 }}
                />
                {/* Bomb Cap */}
                <rect x="22" y="15" width="16" height="8" fill="#94a3b8" rx="2" />
                {/* Bomb Body */}
                <circle cx="30" cy="45" r="25" fill="#1e293b" stroke="#000" strokeWidth="2" />
                {/* Highlight */}
                <circle cx="22" cy="35" r="6" fill="#475569" opacity="0.6" />
              </svg>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Boom Explosion */}
        {phase === "boom" && (
          <motion.div
            className="absolute z-30 flex items-center justify-center"
            initial={{ scale: 0, opacity: 1 }}
            animate={{ scale: [1, 20], opacity: [1, 0] }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative flex items-center justify-center">
              <div className="absolute w-32 h-32 bg-orange-500 rounded-full blur-xl mix-blend-screen" />
              <div className="absolute w-64 h-64 bg-yellow-400 rounded-full mix-blend-screen opacity-80" />
              <div className="absolute w-40 h-40 bg-white rounded-full mix-blend-screen" />
              <span className="relative z-10 text-6xl font-black text-slate-900 uppercase italic tracking-tighter transform -rotate-12 drop-shadow-2xl">
                BOOM!
              </span>
            </div>
          </motion.div>
        )}

      </div>
    </motion.div>
  );
}

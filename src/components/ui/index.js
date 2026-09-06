"use client";
import { useEffect, useState, useRef } from "react";
import { motion, useInView, useSpring } from "framer-motion";
import * as Icons from "lucide-react";

export function AnimatedCounter({ value, suffix = "", label }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const spring = useSpring(0, { duration: 2000, bounce: 0 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (inView) {
      spring.set(value);
    }
  }, [inView, spring, value]);

  useEffect(() => {
    return spring.on("change", (latest) => {
      setDisplay(Math.floor(latest));
    });
  }, [spring]);

  return (
    <div ref={ref} className="flex flex-col items-center justify-center p-6 bg-white rounded-2xl shadow-sm border border-slate-100">
      <div className="text-4xl md:text-5xl font-bold text-yellow-600 mb-2">
        {display}{suffix}
      </div>
      <div className="text-sm text-slate-500 font-medium text-center uppercase tracking-wider">{label}</div>
    </div>
  );
}

export function RevealOnScroll({ children, delay = 0, className = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ y: 30, opacity: 0 }}
      animate={inView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function SectionLabel({ title, subtitle }) {
  return (
    <div className="mb-12 text-center md:text-left">
      <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{title}</h2>
      {subtitle && <p className="text-lg text-slate-600 max-w-2xl">{subtitle}</p>}
      <div className="h-1 w-20 bg-yellow-500 rounded-full mt-6 mx-auto md:mx-0"></div>
    </div>
  );
}

export function IconByName({ name, className }) {
  const IconComponent = Icons[name] || Icons.CheckCircle;
  return <IconComponent className={className} />;
}

export function SkillIconCard({ icon, name, description, accentColor = 'gold' }) {
  const isGold = accentColor === 'gold';
  const glowShadow = isGold ? 'hover:shadow-[0_8px_30px_rgba(212,175,55,0.15)]' : 'hover:shadow-[0_8px_30px_rgba(59,130,246,0.15)]';
  const iconBg = isGold ? 'bg-yellow-600/10 group-hover:bg-yellow-600/20' : 'bg-blue-500/10 group-hover:bg-blue-500/20';
  const iconColor = isGold ? 'text-yellow-600' : 'text-blue-500';

  return (
    <div className={`group flex flex-col items-start p-6 bg-white rounded-2xl border border-slate-100 shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-all duration-300 ease-out hover:-translate-y-1 ${glowShadow}`}>
      <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-colors duration-300 ${iconBg}`}>
        <IconByName name={icon} className={`w-6 h-6 transition-transform duration-300 group-hover:scale-110 ${iconColor}`} />
      </div>
      <h3 className="font-bold text-slate-900 text-lg mb-1">{name}</h3>
      {description && <p className="text-sm text-slate-500 font-medium">{description}</p>}
    </div>
  );
}

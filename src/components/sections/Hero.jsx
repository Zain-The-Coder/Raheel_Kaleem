"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { profileData } from "@/data";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-20">
          
          <motion.div 
            className="flex-1 text-center md:text-left order-2 md:order-1"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-yellow-100 text-yellow-800 text-sm font-semibold mb-6">
              {profileData.title}
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 leading-tight mb-6">
              Hi, I&apos;m <span className="text-yellow-600">{profileData.name}</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 mb-8 max-w-2xl leading-relaxed">
              {profileData.tagline}
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
              <a href="#certifications" className="w-full sm:w-auto px-8 py-4 bg-slate-900 text-white rounded-full font-medium hover:bg-slate-800 transition-colors shadow-lg hover:shadow-xl text-center">
                View Certifications
              </a>
              <a href="#contact" className="w-full sm:w-auto px-8 py-4 bg-white text-slate-900 rounded-full font-medium border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-colors text-center">
                Book a Training Session
              </a>
            </div>
          </motion.div>

          <motion.div 
            className="relative order-1 md:order-2"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full bg-slate-100 p-2 shadow-2xl">
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white bg-white">
                <Image 
                  src="/images/raheel-kaleem.jpg" 
                  alt={`${profileData.name} - ${profileData.title}`}
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-yellow-400 rounded-full mix-blend-multiply opacity-50 animate-pulse"></div>
              <div className="absolute -bottom-6 -left-4 w-20 h-20 bg-blue-400 rounded-full mix-blend-multiply opacity-20"></div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

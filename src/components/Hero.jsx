import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { heroContent, siteImages } from "../data/content";
import { ArrowRight, ChevronRight, CheckCircle2 } from "lucide-react";

export default function Hero() {
  const handleScrollToForm = (e) => {
    e.preventDefault();
    const target = document.querySelector("#callback-form");
    if (target) {
      const navOffset = 70;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  const textVariants = {
    hidden: { opacity: 0, x: -50 },
    show: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 300, damping: 30 } }
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 50 },
    show: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 300, damping: 30, delay: 0.2 } }
  };

  return (
    <section className="relative w-full min-h-[92vh] flex flex-col lg:flex-row bg-slate-950 overflow-hidden pt-[72px]">
      
      {/* LEFT SIDE: Content (60% width on Desktop) */}
      <motion.div 
        className="w-full lg:w-[60%] flex flex-col justify-center px-6 sm:px-12 lg:px-16 xl:px-24 py-16 lg:py-0 relative z-10"
        initial="hidden"
        animate="show"
        variants={{
          hidden: { opacity: 0 },
          show: { opacity: 1, transition: { staggerChildren: 0.15 } }
        }}
      >
        {/* Subtle grid background on the left side */}
        <div className="absolute inset-0 bg-dark-grid opacity-[0.15] pointer-events-none" />
        
        {/* Badge */}
        <motion.div variants={textVariants} className="flex items-center space-x-3 mb-8">
          <div className="inline-flex items-center space-x-2 bg-emerald-950/80 border border-emerald-500/40 px-3.5 py-1.5 rounded-full text-emerald-300 text-xs font-semibold tracking-wide backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Operational Excellence</span>
          </div>
          <span className="hidden sm:block text-slate-400 text-xs uppercase tracking-wider font-semibold">
            {heroContent.badge}
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1 variants={textVariants} className="font-heading font-extrabold text-4xl sm:text-5xl xl:text-[4rem] text-white tracking-tight leading-[1.05] mb-6 relative">
          Complete Industrial <br className="hidden lg:block" /> Solutions for{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-200">
            EHS Compliance
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p variants={textVariants} className="text-base sm:text-lg text-slate-300 max-w-xl leading-relaxed font-normal mb-10">
          {heroContent.subheadline}
        </motion.p>

        {/* Actions */}
        <motion.div variants={textVariants} className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-4 sm:space-y-0 sm:space-x-5 mb-12">
          <Link
            to="/book-consultation"
            className="group relative inline-flex items-center justify-center space-x-3 bg-accent hover:bg-accent-hover text-slate-950 text-base font-bold px-8 py-4 rounded-xl transition-all duration-300 overflow-hidden"
          >
            <span className="relative z-10">{heroContent.primaryCtaText}</span>
            <ArrowRight className="w-5 h-5 text-slate-950 relative z-10 group-hover:translate-x-1 transition-transform" />
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
          </Link>

          <Link
            to="/lab-testing"
            className="inline-flex items-center justify-center space-x-2 bg-transparent hover:bg-white/5 text-slate-300 hover:text-white border border-slate-700/80 hover:border-slate-500 text-base font-semibold px-6 py-4 rounded-xl transition-all duration-300"
          >
            <span>{heroContent.secondaryCtaText}</span>
            <ChevronRight className="w-4 h-4 text-slate-400" />
          </Link>
        </motion.div>

        {/* Trust Badges */}
        <motion.div variants={textVariants} className="flex flex-wrap items-center gap-y-3 gap-x-6 text-sm text-slate-400">
          <div className="flex items-center space-x-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            <span>NABL Accredited</span>
          </div>
          <div className="flex items-center space-x-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            <span>CPCB Recognized</span>
          </div>
          <div className="flex items-center space-x-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            <span>PESO Certified</span>
          </div>
        </motion.div>
      </motion.div>

      {/* RIGHT SIDE: Image (40% width on Desktop) */}
      <motion.div 
        className="w-full lg:w-[40%] h-[50vh] lg:h-auto relative"
        variants={imageVariants}
        initial="hidden"
        animate="show"
      >
        <img
          src={siteImages.heroBackground.url}
          alt={siteImages.heroBackground.alt}
          className="w-full h-full object-cover object-center"
          loading="eager"
        />
        {/* Gradients to blend the image into the dark side and add depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-transparent to-transparent opacity-80 lg:hidden" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-transparent to-transparent opacity-100 hidden lg:block w-32" />
        <div className="absolute inset-0 bg-slate-900/30 mix-blend-multiply" />
        
        {/* Floating Stat Box on Image */}
        <div className="absolute bottom-8 right-8 bg-slate-950/80 backdrop-blur-md border border-white/10 p-5 rounded-2xl shadow-2xl hidden md:block max-w-[240px]">
          <div className="text-3xl font-heading font-extrabold text-emerald-400 mb-1">{heroContent.stats[0].value}</div>
          <div className="text-sm font-semibold text-white mb-0.5">{heroContent.stats[0].label}</div>
          <div className="text-[11px] text-slate-400">{heroContent.stats[0].sub}</div>
        </div>
      </motion.div>

    </section>
  );
}

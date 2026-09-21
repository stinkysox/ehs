import React from "react";
import { motion } from "framer-motion";
import { whyChooseUsContent } from "../data/content";
import { 
  CheckCircle2, 
  ArrowRight,
  Award,
  Sparkles,
  ShieldCheck
} from "lucide-react";

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-24 bg-slate-50 relative overflow-hidden border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center space-x-2 bg-emerald-100 text-primary-dark border border-emerald-300 text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full mb-4 shadow-soft-sm">
            <Award className="w-4 h-4 text-accent" />
            <span>{whyChooseUsContent.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-slate-900 tracking-tight">
            {whyChooseUsContent.title}
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
            {whyChooseUsContent.subtitle}
          </p>
        </motion.div>

        {/* 3 Core Engineering Pillars WITH REAL PHOTOGRAPHY ON EACH */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {whyChooseUsContent.features.map((feature, idx) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-soft-sm hover:shadow-soft-xl hover:border-slate-300 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Photo Header */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={feature.image.url}
                    alt={feature.image.alt}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                  
                  <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-md border border-white/20 text-white text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-lg">
                    PILLAR 0{idx + 1}
                  </div>

                  <div className="absolute bottom-2.5 left-3 right-3 text-white text-xs font-medium">
                    {feature.image.caption}
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6">
                  <h3 className="text-xl font-heading font-extrabold text-slate-900 group-hover:text-primary transition-colors mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {feature.description}
                  </p>

                  <div className="space-y-2 pt-3 border-t border-slate-100">
                    {feature.points.map((pt, pIdx) => (
                      <div key={pIdx} className="flex items-start space-x-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span className="leading-snug">{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Advantage Strip */}
              <div className="p-6 bg-slate-50 border-t border-slate-100">
                <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                  Plant Advantage
                </div>
                <div className="text-xs font-semibold text-slate-800 leading-snug">
                  {feature.benefit}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Commitments & Trust Bar */}
        <motion.div 
          className="bg-gradient-to-r from-primary-dark via-primary to-primary-light rounded-3xl p-6 sm:p-10 text-white shadow-soft-xl relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-white/5 rounded-full blur-2xl pointer-events-none" />
          
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative z-10">
            <div className="space-y-2">
              <div className="inline-flex items-center space-x-2 text-amber-300 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>Our Uncompromising Compliance Pledge</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-white tracking-tight">
                Zero Shut-Down Policy & Total Statutory Assurance
              </h3>
              <p className="text-xs sm:text-sm text-slate-200 max-w-xl leading-relaxed">
                We take contractual responsibility for all statutory representations, environmental audit defense, and engineering warranties.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-xl">
              {whyChooseUsContent.commitments.map((comm, idx) => (
                <div key={idx} className="flex items-center space-x-2.5 text-xs text-slate-100 bg-white/10 px-4 py-3 rounded-2xl border border-white/15 backdrop-blur-md">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span className="font-medium">{comm}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

import React from "react";
import { fireProtectionContent, siteImages } from "../data/content";
import { 
  Flame, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight,
  Shield,
  Radio,
  FileBadge2
} from "lucide-react";

export default function FireProtection() {
  return (
    <section id="fire-protection" className="py-24 bg-slate-50 relative overflow-hidden border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-amber-100 border border-amber-300 text-amber-900 text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full mb-4 shadow-soft-sm">
            <Flame className="w-4 h-4 text-accent" />
            <span>{fireProtectionContent.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-slate-900 tracking-tight">
            {fireProtectionContent.title}
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
            {fireProtectionContent.intro}
          </p>
        </div>

        {/* 3 Core Cards: Statutory PESO, Fire Hydrant Grids, and Addressable Alarms - WITH REAL PHOTOGRAPHY ON EACH */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {fireProtectionContent.cards.map((card) => (
            <div
              key={card.id}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-soft-sm hover:shadow-soft-xl hover:border-slate-300 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Photo Header */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={card.image.url}
                    alt={card.image.alt}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/25 to-transparent" />
                  
                  {/* Badge Pill on Image */}
                  <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-md border border-white/20 text-amber-300 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-lg">
                    {card.badgeText}
                  </div>

                  <div className="absolute top-3 right-3 bg-primary/90 text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-lg border border-emerald-400/20">
                    {card.category}
                  </div>

                  <div className="absolute bottom-2.5 left-3 right-3 text-white text-xs font-medium">
                    {card.image.caption}
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6">
                  <h3 className="text-xl font-heading font-extrabold text-slate-900 group-hover:text-primary transition-colors mb-2">
                    {card.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                    {card.description}
                  </p>

                  <div className="space-y-2.5 pt-4 border-t border-slate-100">
                    {card.points.map((pt, pIdx) => (
                      <div key={pIdx} className="flex items-start space-x-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span className="leading-snug">{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="px-6 py-4 bg-slate-50 border-t border-slate-100">
                <a
                  href="#callback-form"
                  className="w-full inline-flex items-center justify-between text-xs font-bold text-primary group-hover:text-accent transition-colors"
                >
                  <span>Inquire for {card.title}</span>
                  <ArrowRight className="w-4 h-4 text-accent group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Heavy Industry Fire Norms & NBC Part IV Specifications Banner */}
        <div className="bg-slate-950 rounded-3xl p-6 sm:p-10 text-white border border-slate-800 shadow-soft-xl">
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            {/* Real Industrial Fire Safety Image */}
            <div className="lg:col-span-5 relative rounded-2xl overflow-hidden h-64 sm:h-72 border border-slate-700/60 group">
              <img
                src={siteImages.fire.equipment.url}
                alt={siteImages.fire.equipment.alt}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 text-white text-xs bg-slate-950/80 backdrop-blur-md p-2.5 rounded-xl border border-white/15">
                <span className="font-bold text-amber-400">Engineering Standard: </span>
                {siteImages.fire.equipment.caption}
              </div>
            </div>

            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center space-x-2 text-emerald-400 text-xs font-bold uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4" />
                <span>Heavy Industry Fire Defense & NBC Part IV Alignment</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-white tracking-tight">
                Designed for High-Hazard Chemical, Textile & Auto Plants
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                We supply and erect complete industrial fire defense envelopes: multi-stage diesel and electric jockey pump houses, ring main distribution loops, addressable optical smoke detectors, and calibrated flow nozzles rated for 7 bar minimum discharge pressures.
              </p>

              {/* Technical Specifications Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                {fireProtectionContent.specs.map((item, idx) => (
                  <div key={idx} className="bg-slate-900/90 rounded-xl p-3 border border-slate-800">
                    <div className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">{item.label}</div>
                    <div className="text-xs font-bold text-white mt-0.5">{item.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

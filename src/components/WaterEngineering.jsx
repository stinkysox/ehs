import React from "react";
import { waterEngineeringContent, siteImages } from "../data/content";
import { 
  Droplet, 
  Settings2, 
  CheckCircle2, 
  ArrowRight,
  Workflow
} from "lucide-react";

export default function WaterEngineering() {
  return (
    <section id="water-engineering" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-emerald-100 text-primary-dark border border-emerald-300 text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full mb-4 shadow-soft-sm">
            <Droplet className="w-4 h-4 text-primary" />
            <span>{waterEngineeringContent.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-slate-900 tracking-tight">
            {waterEngineeringContent.title}
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
            {waterEngineeringContent.intro}
          </p>
        </div>

        {/* Lead Clarification Banner with Verified Industrial Photography */}
        <div className="grid lg:grid-cols-12 gap-8 mb-16 items-center bg-slate-50 rounded-3xl p-5 sm:p-8 border border-slate-200 shadow-soft-sm">
          <div className="lg:col-span-7 space-y-4 px-2">
            <div className="inline-flex items-center space-x-2 text-primary font-bold text-xs uppercase tracking-wider">
              <Workflow className="w-4 h-4 text-accent" />
              <span>Turnkey Water Purification & Waste Neutralization</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-slate-900 tracking-tight">
              Custom Industrial Biological Reactors, DAF Units & Lamella Clarifiers
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              We design, build, and operate custom ETP and STP plants tailored to your factory's specific chemical oxygen demand (COD), biochemical oxygen demand (BOD), and heavy metal profile. Our engineered treatment trains allow full treated water recycling for boiler makeup, cooling towers, and industrial horticulture.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-soft-sm">
                <div className="text-xs font-bold text-slate-900">Up to 95% Water Reuse</div>
                <div className="text-[11px] text-slate-500">ZLD closed-loop circuits</div>
              </div>
              <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-soft-sm">
                <div className="text-xs font-bold text-slate-900">Low Sludge Yield</div>
                <div className="text-[11px] text-slate-500">Advanced aerobic digestion</div>
              </div>
              <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-soft-sm col-span-2 sm:col-span-1">
                <div className="text-xs font-bold text-slate-900">SCADA Automation</div>
                <div className="text-[11px] text-slate-500">Continuous online DO / pH logs</div>
              </div>
            </div>
          </div>

          {/* Facility Photo */}
          <div className="lg:col-span-5 relative rounded-2xl overflow-hidden shadow-soft-sm h-64 sm:h-72 group">
            <img
              src={siteImages.water?.etpPlant?.url || siteImages.waterClarifier?.url}
              alt={siteImages.water?.etpPlant?.alt || "Effluent treatment clarifier plant"}
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />
            <div className="absolute bottom-3 left-3 right-3 text-white text-xs bg-slate-950/80 backdrop-blur-md p-2.5 rounded-xl border border-white/10">
              <span className="font-bold text-emerald-400">Engineering Setup: </span>
              {siteImages.water?.etpPlant?.caption || "Industrial ETP Facility"}
            </div>
          </div>
        </div>

        {/* 3 Core Engineering Solution Cards WITH REAL PHOTOGRAPHY ON EACH */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {waterEngineeringContent.solutions.map((sol) => (
            <div
              key={sol.id}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-soft-sm hover:shadow-soft-xl hover:border-slate-300 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Photo Header */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={sol.image.url}
                    alt={sol.image.alt}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/25 to-transparent" />
                  
                  <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-md border border-white/20 text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-lg">
                    {sol.type}
                  </div>

                  <div className="absolute bottom-2.5 left-3 right-3 text-white text-xs font-medium">
                    {sol.image.caption}
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6">
                  <h3 className="text-xl font-heading font-extrabold text-slate-900 group-hover:text-primary transition-colors mb-2">
                    {sol.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                    {sol.description}
                  </p>

                  {/* Treatment Train Sequence */}
                  <div className="mb-5 bg-slate-50 p-3.5 rounded-2xl border border-slate-200/80">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-2">
                      Process Treatment Train:
                    </div>
                    <div className="space-y-1.5">
                      {sol.flowSteps.map((step, sIdx) => (
                        <div key={sIdx} className="flex items-center text-xs text-slate-700">
                          <span className="w-4 h-4 rounded-full bg-primary/10 text-primary text-[10px] font-bold flex items-center justify-center mr-2 flex-shrink-0">
                            {sIdx + 1}
                          </span>
                          <span className="truncate font-medium">{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="space-y-2 pt-2 border-t border-slate-100">
                    {sol.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start space-x-2 text-xs text-slate-600">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span className="leading-snug">{feat}</span>
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
                  <span>Request Engineering Proposal</span>
                  <ArrowRight className="w-4 h-4 text-accent group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

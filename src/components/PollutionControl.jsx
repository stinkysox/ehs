import React from "react";
import { Link } from "react-router-dom";
import { pollutionControlContent, siteImages } from "../data/content";
import { 
  FileCheck2, 
  ShieldAlert, 
  CheckCircle, 
  ChevronRight, 
  Clock, 
  ArrowRight,
  ClipboardList
} from "lucide-react";

export default function PollutionControl() {
  return (
    <section id="pollution-control" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-emerald-100 text-primary-dark border border-emerald-300 text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full mb-4 shadow-soft-sm">
            <ClipboardList className="w-4 h-4 text-accent" />
            <span>{pollutionControlContent.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-slate-900 tracking-tight">
            {pollutionControlContent.title}
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
            {pollutionControlContent.intro}
          </p>
        </div>

        {/* 3 Regulatory Lifecycle Cards WITH REAL PHOTOGRAPHY ON EACH STAGE */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative mb-16">
          {pollutionControlContent.stages.map((stage) => (
            <div
              key={stage.code}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-soft-sm hover:shadow-soft-xl hover:border-slate-300 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Photo Header */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={stage.image.url}
                    alt={stage.image.alt}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/25 to-transparent" />
                  
                  {/* Step Code Badge */}
                  <div className="absolute top-3 left-3 bg-primary text-white text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded-lg shadow-sm border border-emerald-400/30">
                    STAGE {stage.step} • {stage.code}
                  </div>

                  <div className="absolute top-3 right-3 bg-slate-900/80 backdrop-blur-md text-amber-300 text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-lg border border-white/20">
                    {stage.tag}
                  </div>

                  <div className="absolute bottom-2.5 left-3 right-3 text-white text-xs font-medium">
                    {stage.image.caption}
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6">
                  <h3 className="text-xl font-heading font-extrabold text-slate-900 group-hover:text-primary transition-colors mb-2">
                    {stage.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-5">
                    {stage.description}
                  </p>

                  {/* Highlights Checklist */}
                  <div className="space-y-2.5 pt-4 border-t border-slate-100">
                    <div className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                      Statutory Deliverables:
                    </div>
                    {stage.highlights.map((point, i) => (
                      <div key={i} className="flex items-start space-x-2 text-xs text-slate-600">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span className="leading-snug">{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Trigger */}
              <div className="px-6 py-4 bg-slate-50 border-t border-slate-100">
                <Link
                  to={`/book-consultation?service=pcb`}
                  className="w-full inline-flex items-center justify-between text-xs font-bold text-primary hover:text-accent transition-colors"
                >
                  <span>Inquire for {stage.code} Filing</span>
                  <ChevronRight className="w-4 h-4 text-accent group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Regulatory Audit Support Callout Box with Verified Photography */}
        <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 rounded-3xl p-6 sm:p-10 text-white overflow-hidden relative shadow-soft-xl border border-slate-800">
          <div className="grid lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center space-x-2 bg-amber-500/20 text-amber-300 border border-amber-500/40 text-xs font-bold px-3 py-1 rounded-lg">
                <ShieldAlert className="w-4 h-4 text-amber-400" />
                <span>Urgent PCB Show-Cause Notice or Board Inspection?</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-heading font-extrabold tracking-tight text-white">
                Legal & Technical Representation Before State & Central Boards
              </h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Facing technical scrutiny, non-compliance notices, or hazardous waste authorization hurdles? Our senior environmental advocates and chartered engineers draft authoritative compliance replies, present site mitigation data, and resolve notices without shutdown disruptions.
              </p>
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Link
                  to="/book-consultation?service=pcb"
                  className="inline-flex items-center space-x-2 bg-accent hover:bg-accent-hover text-slate-950 text-sm font-bold px-6 py-3.5 rounded-xl shadow-soft-md transition-all"
                >
                  <span>Request Urgent PCB Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <div className="text-xs text-slate-400 flex items-center space-x-1.5">
                  <Clock className="w-4 h-4 text-emerald-400" />
                  <span>Immediate Case Review Within 2 Hours</span>
                </div>
              </div>
            </div>

            {/* Audit inspection photography */}
            <div className="lg:col-span-5 relative rounded-2xl overflow-hidden shadow-2xl h-64 sm:h-72 border border-slate-700/80 group">
              <img
                src={siteImages.pcb.annualCompliance.url}
                alt={siteImages.pcb.annualCompliance.alt}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 text-white text-xs bg-slate-950/85 backdrop-blur-md p-2.5 rounded-xl border border-white/10">
                <span className="font-bold text-emerald-400">On-Site Compliance: </span>
                {siteImages.pcb.annualCompliance.caption}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

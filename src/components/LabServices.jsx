import React, { useState } from "react";
import { labServicesContent, siteImages } from "../data/content";
import { 
  CheckCircle2, 
  FileSpreadsheet, 
  Microscope, 
  ArrowUpRight, 
  FlaskConical, 
  Award,
  Sparkles,
  Info
} from "lucide-react";

export default function LabServices() {
  const [activeServiceId, setActiveServiceId] = useState(labServicesContent.services[0].id);

  return (
    <section id="lab-services" className="py-24 bg-slate-50 relative overflow-hidden border-t border-slate-200">
      <div className="absolute top-0 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-2 bg-emerald-100 text-primary-dark border border-emerald-300 text-xs font-bold uppercase tracking-wider px-4 py-1.5 rounded-full mb-4 shadow-soft-sm">
            <Microscope className="w-4 h-4 text-primary" />
            <span>{labServicesContent.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-slate-900 tracking-tight">
            {labServicesContent.title}
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
            {labServicesContent.intro}
          </p>
        </div>

        {/* Lead Lab Facility Photography & Assurance Feature */}
        <div className="grid lg:grid-cols-12 gap-8 mb-16 items-center bg-white rounded-3xl p-5 sm:p-8 border border-slate-200 shadow-soft-md">
          {/*
            ====================================================================
            LAB FACILITY PHOTO: Certified analytical laboratory with titration glassware
            Public Unsplash Stock Photo (Verified Live)
            To replace with your lab photography, update siteImages.lab.hero in src/data/content.js
            ====================================================================
          */}
          <div className="lg:col-span-6 relative rounded-2xl overflow-hidden shadow-soft-sm h-72 sm:h-80 group">
            <img
              src={siteImages.lab.hero.url}
              alt={siteImages.lab.hero.alt}
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-white text-xs bg-slate-950/80 backdrop-blur-md p-3 rounded-xl border border-white/15">
              <span className="font-bold text-emerald-400">Analytical Division: </span>
              {siteImages.lab.hero.caption}
            </div>
          </div>

          <div className="lg:col-span-6 space-y-4 px-2">
            <div className="inline-flex items-center space-x-2 text-primary font-bold text-xs uppercase tracking-wider">
              <FileSpreadsheet className="w-4 h-4 text-accent" />
              <span>State PCB & Factory Inspectorate Compliant</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-slate-900 tracking-tight">
              Legally Defensible Test Reports with Full Analytical Traceability
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Every sample processed in our laboratory network undergoes rigorous multi-point verification under standard CPCB and NABL protocols. We provide digitized certificates equipped with verifiable QR codes for instantaneous presentation during board renewals and sudden factory inspectorate audits.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                <div className="text-xs font-bold text-slate-900">48-Hour Turnaround</div>
                <div className="text-[11px] text-slate-500">Fast-track audit timelines</div>
              </div>
              <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                <div className="text-xs font-bold text-slate-900">Cold-Chain Field Kits</div>
                <div className="text-[11px] text-slate-500">Sterile on-site sample team</div>
              </div>
              <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200 col-span-2 sm:col-span-1">
                <div className="text-xs font-bold text-slate-900">Calibrated Sensors</div>
                <div className="text-[11px] text-slate-500">NIST traceable standards</div>
              </div>
            </div>
          </div>
        </div>

        {/* 5 Laboratory Testing Cards WITH REAL PHOTOGRAPHY ON EVERY CARD */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {labServicesContent.services.map((service) => {
            const isSelected = activeServiceId === service.id;

            return (
              <div
                key={service.id}
                onClick={() => setActiveServiceId(service.id)}
                className={`bg-white rounded-3xl overflow-hidden border transition-all duration-300 flex flex-col justify-between cursor-pointer group hover:shadow-soft-xl ${
                  isSelected
                    ? "border-primary ring-2 ring-primary/20 shadow-soft-lg"
                    : "border-slate-200 hover:border-slate-300 shadow-soft-sm"
                }`}
              >
                <div>
                  {/* Card Image Header with Real Verified Unsplash Stock Photography */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={service.image.url}
                      alt={service.image.alt}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                    
                    {/* Badge Pill on Image */}
                    <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-md border border-white/20 text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-lg">
                      {service.tag}
                    </div>

                    <div className="absolute bottom-2.5 left-3 right-3 text-white text-xs font-medium">
                      {service.image.caption}
                    </div>
                  </div>

                  {/* Card Body Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-heading font-extrabold text-slate-900 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Parameters List */}
                    <div className="mt-4 pt-4 border-t border-slate-100">
                      <div className="text-xs font-bold text-slate-700 uppercase tracking-wider mb-2 flex items-center space-x-1.5">
                        <Info className="w-3.5 h-3.5 text-accent" />
                        <span>Analyzed Parameters:</span>
                      </div>
                      <div className="grid grid-cols-2 gap-1.5">
                        {service.parameters.map((param, i) => (
                          <div key={i} className="text-xs text-slate-600 flex items-center space-x-1.5 truncate">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0" />
                            <span className="truncate">{param}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Deliverable Footer */}
                <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Deliverable</div>
                    <div className="text-xs font-semibold text-slate-800 line-clamp-1">{service.deliverable}</div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform flex-shrink-0 ml-2" />
                </div>
              </div>
            );
          })}

          {/* 6th Tile: CTA Tile with Action Hook */}
          <div className="bg-gradient-to-br from-primary-dark via-primary to-primary-light rounded-3xl p-7 text-white flex flex-col justify-between shadow-soft-lg relative overflow-hidden">
            <div className="absolute -right-10 -bottom-10 w-44 h-44 bg-white/5 rounded-full blur-2xl pointer-events-none" />
            <div>
              <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/20 text-accent flex items-center justify-center mb-5">
                <FlaskConical className="w-6 h-6" />
              </div>
              <div className="inline-flex items-center space-x-1 text-xs font-bold text-amber-300 uppercase tracking-wider mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Custom Sampling Package</span>
              </div>
              <h3 className="text-2xl font-heading font-extrabold text-white mb-2">
                Need Fast On-Site Stack or Effluent Sampling?
              </h3>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                Our accredited sampling fleet deploys to your manufacturing site with calibrated isokinetic stack samplers and cold-chain containers.
              </p>
            </div>

            <div className="pt-6">
              <a
                href="#callback-form"
                className="w-full inline-flex items-center justify-center space-x-2 bg-accent hover:bg-accent-hover text-slate-950 text-xs sm:text-sm font-bold py-3.5 px-5 rounded-xl shadow-soft-md transition-all"
              >
                <span>Book On-Site Lab Sampling</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

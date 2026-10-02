import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import certificateImg from "../assets/certificate.webp";
import { 
  Award, 
  ShieldCheck, 
  CheckCircle2, 
  ExternalLink, 
  ZoomIn, 
  X, 
  FileText, 
  Building, 
  Calendar,
  Sparkles
} from "lucide-react";

export default function CertificateSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="relative py-16 sm:py-20 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-900 text-white overflow-hidden border-y border-emerald-950/60">
        {/* Subtle background glow & grid elements */}
        <div className="absolute inset-0 bg-dark-grid opacity-[0.07] pointer-events-none" />
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/3 right-1/4 -translate-y-1/2 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Header pill & badge */}
          <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center space-x-2 bg-emerald-950/80 border border-emerald-500/30 text-emerald-300 text-xs font-semibold px-4 py-1.5 rounded-full mb-4 shadow-sm backdrop-blur-md"
            >
              <Award className="w-4 h-4 text-emerald-400" />
              <span className="uppercase tracking-wider">Accredited Quality Standard</span>
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold tracking-tight text-white max-w-3xl"
            >
              Certified by International Quality Standard{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-amber-300">
                ISO 9001:2015
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-4 text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed"
            >
              EHS PRO SERVICES is officially certified under the Quality Management System standard for comprehensive industrial environmental compliance, fire safety, water engineering, and testing services.
            </motion.p>
          </div>

          {/* Main Showcase Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left: Certificate Card Preview (Interactive Zoom) */}
            <motion.div 
              className="lg:col-span-5 flex justify-center"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div 
                onClick={() => setIsModalOpen(true)}
                className="group relative cursor-pointer rounded-2xl p-2 bg-gradient-to-b from-emerald-500/20 via-slate-800 to-amber-500/20 border border-emerald-500/30 shadow-2xl shadow-emerald-950/50 hover:shadow-emerald-500/20 transition-all duration-300 transform hover:-translate-y-1 max-w-[340px] sm:max-w-[380px] w-full"
              >
                {/* Glow ring */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-amber-500 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-500" />
                
                {/* Image Container */}
                <div className="relative rounded-xl overflow-hidden bg-slate-900 aspect-[1/1.414] flex items-center justify-center">
                  <img
                    src={certificateImg}
                    alt="ISO 9001:2015 Certification for M/s EHS PRO SERVICES"
                    className="w-full h-full object-contain transform group-hover:scale-[1.02] transition-transform duration-500"
                    loading="lazy"
                  />

                  {/* Hover Overlay with Zoom Button */}
                  <div className="absolute inset-0 bg-slate-950/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2 backdrop-blur-[2px]">
                    <div className="p-3 bg-emerald-500 text-slate-950 rounded-full shadow-lg transform scale-90 group-hover:scale-100 transition-transform duration-300">
                      <ZoomIn className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-semibold tracking-wider text-emerald-200 uppercase">
                      Click to View Full Certificate
                    </span>
                  </div>

                  {/* Corner Badge */}
                  <div className="absolute bottom-3 left-3 bg-slate-900/90 border border-emerald-500/40 backdrop-blur-md px-3 py-1 rounded-md text-[11px] font-semibold text-emerald-300 flex items-center gap-1.5 shadow-md">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Verified ISO 9001:2015</span>
                  </div>
                </div>

                <div className="mt-2.5 px-2 pb-1 flex items-center justify-between text-xs text-slate-400">
                  <span className="font-mono text-emerald-400/90 font-semibold">Reg: QSR/QM/269561329</span>
                  <span className="flex items-center gap-1 text-slate-400 hover:text-white transition-colors">
                    <span>Enlarge</span>
                    <ZoomIn className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Right: Key Accreditation Details & Scopes */}
            <motion.div 
              className="lg:col-span-7 space-y-6"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              {/* Highlight Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-4.5 hover:border-emerald-500/40 transition-colors">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="p-2 bg-emerald-950 text-emerald-400 rounded-lg border border-emerald-800/50">
                      <Building className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs uppercase tracking-wider text-slate-400 font-semibold">Certified Entity</h4>
                      <p className="text-sm font-bold text-white">M/s. EHS PRO SERVICES</p>
                    </div>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Protecting Environment. Ensuring Health & Safety. Registered at Amaravathi, AP.
                  </p>
                </div>

                <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-4.5 hover:border-amber-500/40 transition-colors">
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="p-2 bg-amber-950 text-amber-400 rounded-lg border border-amber-800/50">
                      <Calendar className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-xs uppercase tracking-wider text-slate-400 font-semibold">Validity & Accreditation</h4>
                      <p className="text-sm font-bold text-white">Valid Through 2029</p>
                    </div>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Accredited by IAF MLA & KAB (Korea Accreditation Board, KAB-QC-88).
                  </p>
                </div>
              </div>

              {/* Certified Scopes list */}
              <div className="bg-slate-900/60 border border-slate-800/90 rounded-2xl p-6 backdrop-blur-sm">
                <div className="flex items-center space-x-2 text-emerald-400 font-semibold text-sm mb-4">
                  <FileText className="w-4 h-4" />
                  <span>Approved Scope of Operations:</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {[
                    "PCB Document Works (CFE & CFO Consent Approvals)",
                    "Fire & Safety Works: Fire NOC & PESO NOC",
                    "Industrial ETP & STP Operation and Maintenance",
                    "Environmental Lab Testing: Water, Air, Soil, Noise",
                    "Fire Hydrant & Fire Alarm System Installation & AMC",
                    "Chemical & Personal Protective Equipment (PPE) Supply"
                  ].map((scope, idx) => (
                    <div key={idx} className="flex items-start space-x-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                      <span className="text-xs sm:text-sm text-slate-300 leading-snug">{scope}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Verification Note & Action */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
                <div className="flex items-center space-x-2 text-xs text-slate-400">
                  <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>
                    Verify certification online at{" "}
                    <a
                      href="https://www.qsrcerti.com" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-emerald-400 hover:text-emerald-300 underline font-medium"
                    >
                      www.qsrcerti.com
                    </a>
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => setIsModalOpen(true)}
                  className="inline-flex items-center justify-center space-x-2 bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 text-xs font-semibold px-4 py-2.5 rounded-lg transition-colors shadow-sm self-start sm:self-auto"
                >
                  <ZoomIn className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Inspect Full Certificate</span>
                </button>
              </div>

            </motion.div>

          </div>
        </div>
      </section>

      {/* Fullscreen Certificate Modal for detailed inspection */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsModalOpen(false)}
            className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-2xl w-full max-h-[90vh] bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
            >
              {/* Modal Top Bar */}
              <div className="flex items-center justify-between px-5 py-3.5 border-b border-slate-800 bg-slate-950">
                <div className="flex items-center space-x-2">
                  <ShieldCheck className="w-5 h-5 text-emerald-400" />
                  <span className="font-heading font-bold text-sm text-white">
                    ISO 9001:2015 Certificate — EHS PRO SERVICES
                  </span>
                </div>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Image Display */}
              <div className="p-4 overflow-y-auto flex items-center justify-center bg-slate-950/60 max-h-[calc(90vh-110px)]">
                <img
                  src={certificateImg}
                  alt="ISO 9001:2015 Certificate Full Size"
                  className="max-w-full h-auto rounded-lg shadow-lg object-contain max-h-[75vh]"
                />
              </div>

              {/* Modal Bottom Bar */}
              <div className="px-5 py-2.5 bg-slate-950 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                <span>Certificate No: QSR/QM/269561329</span>
                <a
                  href="https://www.qsrcerti.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-1 text-emerald-400 hover:text-emerald-300"
                >
                  <span>Verify on QSR Portal</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

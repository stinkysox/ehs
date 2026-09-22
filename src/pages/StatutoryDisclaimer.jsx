import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SEO from "../components/SEO";
import { AlertTriangle, ChevronRight, Scale, Shield, Info, FileText, Mail, Phone } from "lucide-react";
import { siteConfig } from "../data/content";

const LAST_UPDATED = "22 September 2026";
const EFFECTIVE_DATE = "1 January 2024";

const Section = ({ id, title, icon: Icon, children }) => (
  <motion.div
    id={id}
    className="mb-10"
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-40px" }}
    transition={{ duration: 0.45 }}
  >
    <div className="flex items-center gap-3 mb-4">
      <div className="w-9 h-9 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center flex-shrink-0">
        <Icon className="w-4 h-4 text-amber-700" />
      </div>
      <h2 className="text-lg font-heading font-bold text-slate-900">{title}</h2>
    </div>
    <div className="text-sm text-slate-600 leading-relaxed space-y-3 pl-12">{children}</div>
  </motion.div>
);

const TOC = [
  { href: "#general", label: "General Disclaimer" },
  { href: "#professional-advice", label: "Not Professional/Legal Advice" },
  { href: "#regulatory-outcomes", label: "No Regulatory Guarantees" },
  { href: "#accuracy", label: "Accuracy of Information" },
  { href: "#external-links", label: "External Links & References" },
  { href: "#no-liability", label: "No Liability for Website Use" },
  { href: "#whatsapp", label: "WhatsApp Communication" },
  { href: "#forward-looking", label: "Forward-Looking Statements" },
  { href: "#jurisdiction", label: "Jurisdiction" },
  { href: "#contact", label: "Contact Us" },
];

export default function StatutoryDisclaimer() {
  return (
    <>
      <SEO
        title="Statutory Disclaimer"
        description="EHS PRO SERVICES Statutory Disclaimer — important legal notices regarding the use of our website, nature of services, and limitations of information provided."
        path="/disclaimer"
      />

      <div className="min-h-screen bg-[#f8fafc] pt-[72px]">
        {/* Hero */}
        <div className="bg-gradient-to-br from-slate-900 via-amber-950 to-slate-900 text-white py-14">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <div className="inline-flex items-center gap-2 bg-amber-900/70 border border-amber-500/30 text-amber-300 text-xs font-semibold tracking-wider px-4 py-2 rounded-full mb-5">
                <AlertTriangle className="w-3.5 h-3.5" />
                Legal Document
              </div>
              <h1 className="text-3xl sm:text-4xl font-heading font-extrabold tracking-tight mb-3">Statutory Disclaimer</h1>
              <p className="text-slate-400 text-sm">
                Last Updated: <strong className="text-slate-300">{LAST_UPDATED}</strong> &nbsp;&middot;&nbsp; Effective: <strong className="text-slate-300">{EFFECTIVE_DATE}</strong>
              </p>
            </motion.div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid lg:grid-cols-4 gap-10">
            {/* Table of Contents */}
            <aside className="hidden lg:block">
              <div className="sticky top-24 bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
                <div className="text-[11px] font-bold uppercase tracking-widest text-slate-500 mb-3">Contents</div>
                <nav className="space-y-1.5">
                  {TOC.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      className="flex items-center gap-1.5 text-xs text-slate-600 hover:text-amber-700 transition-colors py-0.5"
                    >
                      <ChevronRight className="w-3 h-3 text-slate-400 flex-shrink-0" />
                      {item.label}
                    </a>
                  ))}
                </nav>
                <div className="mt-5 pt-4 border-t border-slate-200">
                  <Link to="/privacy-policy" className="text-xs text-amber-700 hover:underline flex items-center gap-1">
                    <ChevronRight className="w-3 h-3" /> Privacy Policy
                  </Link>
                  <Link to="/terms" className="mt-1.5 text-xs text-amber-700 hover:underline flex items-center gap-1">
                    <ChevronRight className="w-3 h-3" /> Terms of Service
                  </Link>
                </div>
              </div>
            </aside>

            {/* Content */}
            <main className="lg:col-span-3 bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-10">
              {/* Intro Alert */}
              <div className="mb-8 p-5 bg-amber-50 border border-amber-200 rounded-2xl text-sm text-amber-900 leading-relaxed flex gap-3">
                <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                <div>
                  <strong>Important Legal Notice:</strong> The information contained on this website (<strong>www.ehsproservices.in</strong>) is provided by <strong>EHS PRO SERVICES</strong> for general informational and marketing purposes only. Nothing on this Website constitutes legally binding professional advice, a guarantee of regulatory approval, or a commitment to provide specific services unless confirmed in a separate signed written agreement.
                </div>
              </div>

              <Section id="general" title="General Disclaimer" icon={Info}>
                <p>
                  EHS PRO SERVICES makes no representations or warranties of any kind — express or implied — about the completeness, accuracy, reliability, suitability, or availability of the information, services, products, or related graphics contained on this Website for any purpose.
                </p>
                <p>
                  Any reliance you place on such information is strictly at your own risk. We disclaim all warranties, including without limitation implied warranties of merchantability and fitness for a particular purpose, to the fullest extent permitted by applicable Indian law.
                </p>
              </Section>

              <Section id="professional-advice" title="Not Professional or Legal Advice" icon={Scale}>
                <p>
                  The content on this Website — including service descriptions, compliance process summaries, regulatory timelines, technical parameters, and cost indicators — is provided for <strong>informational and illustrative purposes only</strong> and does not constitute:
                </p>
                <ul className="list-disc pl-5 space-y-1.5 mt-2">
                  <li>Legal advice or legal opinion on any matter.</li>
                  <li>Environmental compliance advice applicable to your specific facility without a formal site assessment.</li>
                  <li>Engineering specifications suitable for construction, fabrication, or regulatory submission.</li>
                  <li>Statutory guidance that supersedes applicable Indian environmental, safety, or factory laws.</li>
                </ul>
                <p>
                  Before undertaking any regulatory compliance action, engineering project, or statutory filing, you should obtain qualified, site-specific professional advice. EHS PRO SERVICES' qualified engineers will provide formal, documented advice only within the scope of a signed service engagement.
                </p>
              </Section>

              <Section id="regulatory-outcomes" title="No Guarantee of Regulatory Outcomes" icon={AlertTriangle}>
                <p>
                  EHS PRO SERVICES serves as a professional compliance facilitator and engineering service provider. We employ all reasonable professional diligence, technical expertise, and regulatory knowledge in pursuing approvals on behalf of our clients. However:
                </p>
                <ul className="list-disc pl-5 space-y-1.5 mt-2">
                  <li>All final regulatory approvals — including Pollution Control Board consents (CFE/CFO), Fire NOC, PESO clearances, Factory Inspectorate certifications, and laboratory accreditation — are granted exclusively by the respective government authorities.</li>
                  <li>We do not guarantee the issuance, timeline, or outcome of any government approval or regulatory clearance.</li>
                  <li>Timelines indicated on this Website for obtaining approvals are general estimates based on past experience and may vary significantly depending on regulatory workload, policy changes, or client-specific factors.</li>
                </ul>
                <p>
                  Reference to "100% Regulatory Clearance" in our marketing materials reflects our professional track record and commitment to diligent application, not an absolute guarantee of regulatory outcomes in every case.
                </p>
              </Section>

              <Section id="accuracy" title="Accuracy of Information" icon={FileText}>
                <p>
                  While we endeavor to keep the information on this Website accurate and up to date, environmental regulations, statutory thresholds, government fees, and compliance requirements are subject to periodic revision by regulatory authorities.
                </p>
                <p>
                  EHS PRO SERVICES does not warrant that all content on this Website reflects the most current regulatory position at the time of your access. Users are advised to verify all regulatory requirements directly with the relevant statutory bodies or through our formal engagement process before making compliance decisions.
                </p>
              </Section>

              <Section id="external-links" title="External Links &amp; References" icon={Shield}>
                <p>
                  This Website may include hyperlinks to third-party websites, regulatory portals (e.g., CPCB, APPCB, PESO), government circulars, or technical standards (e.g., IS, NBC, NFPA). These links are provided for reference and convenience only.
                </p>
                <p>
                  EHS PRO SERVICES does not endorse, control, or take responsibility for the content, accuracy, privacy practices, or availability of any third-party website. The inclusion of a link does not imply any affiliation, partnership, or endorsement by EHS PRO SERVICES.
                </p>
              </Section>

              <Section id="no-liability" title="No Liability for Website Use" icon={Scale}>
                <p>
                  In no event shall EHS PRO SERVICES be liable for any loss or damage including, without limitation, indirect or consequential loss or damage, or any loss or damage whatsoever arising from the use of, or in connection with the use of, this Website.
                </p>
                <p>
                  We are not responsible for any interruptions, errors, delays, or inaccuracies in the operation of this Website, or for any action taken in reliance on the information provided herein. The Website may be temporarily unavailable for maintenance without prior notice.
                </p>
              </Section>

              <Section id="whatsapp" title="WhatsApp Communication Disclaimer" icon={Info}>
                <p>
                  Our Website uses WhatsApp as a lead routing mechanism. Messages sent via WhatsApp are subject to WhatsApp's own Terms of Service and Privacy Policy (Meta Platforms Inc.). EHS PRO SERVICES does not control WhatsApp's platform infrastructure, availability, data handling, or security protocols, beyond the end-to-end encryption provided by the platform.
                </p>
                <p>
                  Communications initiated through WhatsApp should not be treated as legally binding contractual agreements unless explicitly confirmed through a separate formal written document signed by an authorized representative of EHS PRO SERVICES.
                </p>
              </Section>

              <Section id="forward-looking" title="Forward-Looking Statements" icon={AlertTriangle}>
                <p>
                  Certain statements, projections, or descriptions on this Website regarding anticipated regulatory timelines, cost estimates, project durations, or performance outcomes may be considered forward-looking in nature. These are based on current assumptions and past experience but are inherently subject to uncertainty.
                </p>
                <p>
                  Actual results may differ materially from those projected due to changes in regulatory frameworks, client-specific site conditions, government authority discretion, force majeure events, or other factors beyond our reasonable control.
                </p>
              </Section>

              <Section id="jurisdiction" title="Jurisdiction" icon={Scale}>
                <p>
                  This Statutory Disclaimer is governed by the laws of the <strong>Republic of India</strong> and the state of <strong>Andhra Pradesh</strong>. By using this Website, you submit to the non-exclusive jurisdiction of the courts located in Amaravathi, Andhra Pradesh, for the resolution of any disputes relating to this disclaimer.
                </p>
              </Section>

              <Section id="contact" title="Contact Us" icon={Mail}>
                <p>
                  If you have any questions regarding this Statutory Disclaimer or require clarification on any information presented on this Website, please contact:
                </p>
                <div className="mt-3 space-y-2">
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-amber-700 flex-shrink-0" />
                    <a href={`mailto:${siteConfig.contact.email}`} className="text-amber-700 hover:underline">{siteConfig.contact.email}</a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-amber-700 flex-shrink-0" />
                    <span>{siteConfig.contact.phone}</span>
                  </div>
                  <div className="text-slate-500 text-xs mt-1 pl-6">
                    {siteConfig.contact.address}, {siteConfig.contact.cityStateZip}
                  </div>
                </div>
              </Section>

              {/* Related links */}
              <div className="pt-6 border-t border-slate-200 flex flex-wrap gap-4">
                <Link to="/privacy-policy" className="text-sm font-medium text-amber-700 hover:underline flex items-center gap-1">
                  <ChevronRight className="w-4 h-4" /> Privacy Policy
                </Link>
                <Link to="/terms" className="text-sm font-medium text-amber-700 hover:underline flex items-center gap-1">
                  <ChevronRight className="w-4 h-4" /> Terms of Service
                </Link>
                <Link to="/" className="text-sm font-medium text-slate-500 hover:text-slate-700 flex items-center gap-1 ml-auto">
                  Back to Home
                </Link>
              </div>
            </main>
          </div>
        </div>
      </div>
    </>
  );
}

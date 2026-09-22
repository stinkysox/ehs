import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SEO from "../components/SEO";
import { FileText, ChevronRight, Lock, AlertTriangle, Scale, Clock, Shield, Mail, Phone } from "lucide-react";
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
      <div className="w-9 h-9 rounded-xl bg-teal-50 border border-teal-200 flex items-center justify-center flex-shrink-0">
        <Icon className="w-4 h-4 text-teal-700" />
      </div>
      <h2 className="text-lg font-heading font-bold text-slate-900">{title}</h2>
    </div>
    <div className="text-sm text-slate-600 leading-relaxed space-y-3 pl-12">{children}</div>
  </motion.div>
);

const TOC = [
  { href: "#acceptance", label: "Acceptance of Terms" },
  { href: "#services", label: "Description of Services" },
  { href: "#use-of-website", label: "Use of Website" },
  { href: "#intellectual-property", label: "Intellectual Property" },
  { href: "#consultations", label: "Consultations & Engagements" },
  { href: "#disclaimers", label: "Disclaimers" },
  { href: "#limitation-liability", label: "Limitation of Liability" },
  { href: "#indemnification", label: "Indemnification" },
  { href: "#governing-law", label: "Governing Law" },
  { href: "#termination", label: "Termination" },
  { href: "#changes", label: "Changes to Terms" },
  { href: "#contact", label: "Contact Us" },
];

export default function TermsOfService() {
  return (
    <>
      <SEO
        title="Terms of Service"
        description="EHS PRO SERVICES Terms of Service — the terms and conditions governing your use of our website and professional EHS compliance, engineering, and laboratory services."
        path="/terms"
      />

      <div className="min-h-screen bg-[#f8fafc] pt-[72px]">
        {/* Hero */}
        <div className="bg-gradient-to-br from-slate-900 via-teal-950 to-slate-900 text-white py-14">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <div className="inline-flex items-center gap-2 bg-teal-900/70 border border-teal-500/30 text-teal-300 text-xs font-semibold tracking-wider px-4 py-2 rounded-full mb-5">
                <FileText className="w-3.5 h-3.5" />
                Legal Document
              </div>
              <h1 className="text-3xl sm:text-4xl font-heading font-extrabold tracking-tight mb-3">Terms of Service</h1>
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
                      className="flex items-center gap-1.5 text-xs text-slate-600 hover:text-teal-700 transition-colors py-0.5"
                    >
                      <ChevronRight className="w-3 h-3 text-slate-400 flex-shrink-0" />
                      {item.label}
                    </a>
                  ))}
                </nav>
                <div className="mt-5 pt-4 border-t border-slate-200">
                  <Link to="/privacy-policy" className="text-xs text-teal-700 hover:underline flex items-center gap-1">
                    <ChevronRight className="w-3 h-3" /> Privacy Policy
                  </Link>
                  <Link to="/disclaimer" className="mt-1.5 text-xs text-teal-700 hover:underline flex items-center gap-1">
                    <ChevronRight className="w-3 h-3" /> Statutory Disclaimer
                  </Link>
                </div>
              </div>
            </aside>

            {/* Content */}
            <main className="lg:col-span-3 bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-10">
              {/* Intro */}
              <div className="mb-8 p-5 bg-teal-50 border border-teal-200 rounded-2xl text-sm text-teal-900 leading-relaxed">
                Please read these Terms of Service ("Terms") carefully before using the website{" "}
                <strong>www.ehsproservices.in</strong> (the "Website") or engaging with any service offered by{" "}
                <strong>EHS PRO SERVICES</strong> ("Company", "we", "our", "us"). These Terms constitute a legally binding agreement between you ("User", "Client", "you") and EHS PRO SERVICES.
                <br /><br />
                By accessing our Website, submitting a consultation request, or engaging us for any professional service, you confirm that you have read, understood, and agree to be bound by these Terms.
              </div>

              <Section id="acceptance" title="Acceptance of Terms" icon={Shield}>
                <p>
                  Your access to and use of this Website is conditioned upon your acceptance of and compliance with these Terms. These Terms apply to all visitors, clients, prospective clients, and others who access or use the Website. If you do not agree to these Terms in full, you must immediately discontinue your use of this Website and any services offered herein.
                </p>
                <p>
                  Persons accessing this Website on behalf of a corporate entity represent and warrant that they have authority to bind that entity to these Terms.
                </p>
              </Section>

              <Section id="services" title="Description of Services" icon={FileText}>
                <p>EHS PRO SERVICES provides the following professional services to industrial and commercial clients primarily across Andhra Pradesh and India:</p>
                <ul className="list-disc pl-5 space-y-1.5 mt-2">
                  <li>Pollution Control Board (PCB) liaison and compliance — including Consent for Establishment (CFE), Consent for Operation (CFO), and annual environmental compliance filings.</li>
                  <li>Turnkey Fire Protection infrastructure design, supply, installation, and PESO NOC facilitation.</li>
                  <li>Effluent Treatment Plant (ETP) and Sewage Treatment Plant (STP) engineering, supply, installation, and Operation &amp; Maintenance.</li>
                  <li>Certified Environmental Laboratory Testing — water, air, noise, soil, and stack emission analysis.</li>
                  <li>Online consultation booking and inquiry forms for preliminary assessment and project scoping.</li>
                </ul>
                <p>Services described on this Website are subject to availability and geographic scope. Availability may vary based on client location, project complexity, and regulatory jurisdiction.</p>
              </Section>

              <Section id="use-of-website" title="Use of Website" icon={Lock}>
                <p>You agree to use this Website only for lawful purposes and in a manner consistent with these Terms. Specifically, you agree <strong>not</strong> to:</p>
                <ul className="list-disc pl-5 space-y-1.5 mt-2">
                  <li>Submit false, misleading, or fraudulent information in any consultation form or inquiry.</li>
                  <li>Attempt to gain unauthorized access to any part of our Website, servers, or data systems.</li>
                  <li>Use automated scraping tools, bots, or crawlers to extract content from this Website.</li>
                  <li>Reproduce, distribute, or commercially exploit any content from this Website without prior written consent.</li>
                  <li>Engage in conduct that restricts or inhibits any other user's use or enjoyment of the Website.</li>
                  <li>Upload or transmit any malicious code, virus, or harmful data to or through this Website.</li>
                </ul>
                <p>We reserve the right to suspend or permanently deny access to any user who violates these conditions, without prior notice.</p>
              </Section>

              <Section id="intellectual-property" title="Intellectual Property" icon={FileText}>
                <p>
                  All content on this Website — including but not limited to text, graphics, logos, photographs, videos, technical data, service descriptions, process diagrams, and the overall design — is the exclusive intellectual property of EHS PRO SERVICES and is protected under applicable Indian and international intellectual property laws.
                </p>
                <p>
                  No content from this Website may be copied, reproduced, modified, distributed, or used in any commercial manner without prior written authorization from EHS PRO SERVICES. Permission for personal, non-commercial reference use may be requested via email.
                </p>
                <p>
                  The EHS PRO SERVICES name, logo, and all associated brand elements are proprietary to the Company. Unauthorized use of these marks is strictly prohibited.
                </p>
              </Section>

              <Section id="consultations" title="Consultations &amp; Service Engagements" icon={Clock}>
                <p>
                  Submission of an inquiry form or consultation request on this Website does <strong>not</strong> constitute a binding service agreement. All professional engagements are governed exclusively by a separately executed written agreement, proposal, or work order between EHS PRO SERVICES and the client.
                </p>
                <p>Service provisions, timelines, fees, deliverables, and scope of work are defined exclusively in the signed project agreement. In the absence of a formal written agreement, no service commitment is implied by any communication on this Website or through our inquiry channels.</p>
                <p>
                  Preliminary assessments, roadmaps, and guidance provided during or after an initial consultation call are for informational purposes only and do not constitute professional advice or guaranteed regulatory outcomes.
                </p>
              </Section>

              <Section id="disclaimers" title="Disclaimers" icon={AlertTriangle}>
                <p>
                  This Website and its content are provided on an <strong>"as is" and "as available"</strong> basis without any warranties of any kind, express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, or non-infringement.
                </p>
                <p>EHS PRO SERVICES does not warrant that:</p>
                <ul className="list-disc pl-5 space-y-1.5 mt-2">
                  <li>The Website will be uninterrupted, error-free, or free from technical defects.</li>
                  <li>The information on the Website is complete, accurate, or current at all times.</li>
                  <li>Any specific regulatory approval, clearance, or compliance outcome will be achieved through our services (though we exercise all reasonable professional diligence toward such outcomes).</li>
                </ul>
                <p>
                  Regulatory decisions rest exclusively with the respective government authorities (e.g., Andhra Pradesh Pollution Control Board, Municipal Fire Departments, PESO, Factory Inspectorate). EHS PRO SERVICES acts as a professional facilitator and advocate, but cannot guarantee regulatory decisions.
                </p>
              </Section>

              <Section id="limitation-liability" title="Limitation of Liability" icon={Scale}>
                <p>
                  To the maximum extent permitted by applicable law, EHS PRO SERVICES, its directors, officers, engineers, employees, and agents shall not be liable for any indirect, incidental, consequential, special, or punitive damages arising from:
                </p>
                <ul className="list-disc pl-5 space-y-1.5 mt-2">
                  <li>Your use of, or inability to use, the Website or any service described herein.</li>
                  <li>Reliance on any information or content published on this Website.</li>
                  <li>Delays, rejections, or adverse decisions by regulatory authorities that are outside our reasonable control.</li>
                  <li>Any third-party actions, including WhatsApp platform disruptions or data handling by Meta Platforms Inc.</li>
                </ul>
                <p>
                  Our aggregate liability to any client for any claim arising under a service engagement shall be limited to the fees actually paid by that client to EHS PRO SERVICES for the specific service that is the subject of the dispute.
                </p>
              </Section>

              <Section id="indemnification" title="Indemnification" icon={Shield}>
                <p>
                  You agree to indemnify, defend, and hold harmless EHS PRO SERVICES and its directors, officers, engineers, employees, and agents from and against any claims, liabilities, damages, losses, costs, or expenses (including reasonable legal fees) arising out of or in connection with:
                </p>
                <ul className="list-disc pl-5 space-y-1.5 mt-2">
                  <li>Your violation of these Terms.</li>
                  <li>Your submission of false, inaccurate, or misleading information in any form or communication.</li>
                  <li>Your infringement of any third-party rights, including intellectual property rights.</li>
                  <li>Any regulatory penalty, action, or liability arising from your failure to comply with applicable environmental, safety, or statutory laws — unless directly caused by proven negligence on our part.</li>
                </ul>
              </Section>

              <Section id="governing-law" title="Governing Law &amp; Dispute Resolution" icon={Scale}>
                <p>
                  These Terms shall be governed by and construed in accordance with the laws of the <strong>Republic of India</strong>, specifically the laws applicable in the state of <strong>Andhra Pradesh</strong>, without regard to conflict of law principles.
                </p>
                <p>
                  Any disputes arising out of or relating to these Terms or the services of EHS PRO SERVICES shall first be subject to good-faith negotiation between the parties. If unresolved within 30 days, disputes shall be referred to binding arbitration under the Arbitration and Conciliation Act, 1996, with proceedings conducted in the English language in <strong>Amaravathi, Andhra Pradesh, India</strong>.
                </p>
              </Section>

              <Section id="termination" title="Termination" icon={AlertTriangle}>
                <p>
                  EHS PRO SERVICES reserves the right to terminate or suspend access to this Website and any associated services at its sole discretion, without notice, for any conduct that we believe violates these Terms, applicable law, or is harmful to the interests of other users, third parties, or the Company.
                </p>
              </Section>

              <Section id="changes" title="Changes to These Terms" icon={Clock}>
                <p>
                  We reserve the right to modify these Terms at any time. Updated Terms will be posted on this page with a revised "Last Updated" date. Your continued use of the Website following any update constitutes your acceptance of the revised Terms. We encourage you to review these Terms periodically.
                </p>
              </Section>

              <Section id="contact" title="Contact Us" icon={Mail}>
                <p>For any questions regarding these Terms of Service, please contact:</p>
                <div className="mt-3 space-y-2">
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-teal-700 flex-shrink-0" />
                    <a href={`mailto:${siteConfig.contact.email}`} className="text-teal-700 hover:underline">{siteConfig.contact.email}</a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-teal-700 flex-shrink-0" />
                    <span>{siteConfig.contact.phone}</span>
                  </div>
                  <div className="text-slate-500 text-xs mt-1 pl-6">
                    {siteConfig.contact.address}, {siteConfig.contact.cityStateZip}
                  </div>
                </div>
              </Section>

              {/* Related links */}
              <div className="pt-6 border-t border-slate-200 flex flex-wrap gap-4">
                <Link to="/privacy-policy" className="text-sm font-medium text-teal-700 hover:underline flex items-center gap-1">
                  <ChevronRight className="w-4 h-4" /> Privacy Policy
                </Link>
                <Link to="/disclaimer" className="text-sm font-medium text-teal-700 hover:underline flex items-center gap-1">
                  <ChevronRight className="w-4 h-4" /> Statutory Disclaimer
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

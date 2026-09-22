import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SEO from "../components/SEO";
import { Shield, ChevronRight, Lock, Eye, Database, Bell, UserCheck, Globe, Mail, Phone } from "lucide-react";
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
      <div className="w-9 h-9 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center flex-shrink-0">
        <Icon className="w-4 h-4 text-emerald-600" />
      </div>
      <h2 className="text-lg font-heading font-bold text-slate-900">{title}</h2>
    </div>
    <div className="text-sm text-slate-600 leading-relaxed space-y-3 pl-12">{children}</div>
  </motion.div>
);

const TOC = [
  { href: "#information-we-collect", label: "Information We Collect" },
  { href: "#how-we-use", label: "How We Use Your Information" },
  { href: "#whatsapp-routing", label: "WhatsApp Lead Routing" },
  { href: "#data-sharing", label: "Data Sharing & Disclosure" },
  { href: "#data-retention", label: "Data Retention" },
  { href: "#your-rights", label: "Your Rights" },
  { href: "#cookies", label: "Cookies & Tracking" },
  { href: "#third-party-links", label: "Third-Party Links" },
  { href: "#children", label: "Children's Privacy" },
  { href: "#changes", label: "Changes to This Policy" },
  { href: "#contact", label: "Contact Us" },
];

export default function PrivacyPolicy() {
  return (
    <>
      <SEO
        title="Privacy Policy"
        description="EHS PRO SERVICES Privacy Policy — how we collect, use, and protect your personal information when you use our website and consultation services."
        path="/privacy-policy"
      />

      <div className="min-h-screen bg-[#f8fafc] pt-[72px]">
        {/* Hero */}
        <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-14">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <div className="inline-flex items-center gap-2 bg-emerald-950/70 border border-emerald-500/30 text-emerald-300 text-xs font-semibold tracking-wider px-4 py-2 rounded-full mb-5">
                <Lock className="w-3.5 h-3.5" />
                Legal Document
              </div>
              <h1 className="text-3xl sm:text-4xl font-heading font-extrabold tracking-tight mb-3">Privacy Policy</h1>
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
                      className="flex items-center gap-1.5 text-xs text-slate-600 hover:text-emerald-700 transition-colors py-0.5"
                    >
                      <ChevronRight className="w-3 h-3 text-slate-400 flex-shrink-0" />
                      {item.label}
                    </a>
                  ))}
                </nav>
                <div className="mt-5 pt-4 border-t border-slate-200">
                  <Link to="/terms" className="text-xs text-emerald-700 hover:underline flex items-center gap-1">
                    <ChevronRight className="w-3 h-3" /> Terms of Service
                  </Link>
                  <Link to="/disclaimer" className="mt-1.5 text-xs text-emerald-700 hover:underline flex items-center gap-1">
                    <ChevronRight className="w-3 h-3" /> Statutory Disclaimer
                  </Link>
                </div>
              </div>
            </aside>

            {/* Content */}
            <main className="lg:col-span-3 bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-10">
              {/* Intro */}
              <div className="mb-8 p-5 bg-emerald-50 border border-emerald-200 rounded-2xl text-sm text-emerald-900 leading-relaxed">
                <strong>EHS PRO SERVICES</strong> ("we", "our", "us") is committed to protecting the privacy and confidentiality of information shared by visitors and clients on our website{" "}
                <strong>www.ehsproservices.in</strong>. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or engage with our consultation, compliance, engineering, or laboratory services.
                <br /><br />
                By using our website or submitting any inquiry form, you agree to the terms outlined in this Privacy Policy. If you do not agree, please refrain from using our website.
              </div>

              <Section id="information-we-collect" title="Information We Collect" icon={Database}>
                <p>We may collect the following categories of personal information when you voluntarily submit a form, contact us, or engage with our services:</p>
                <ul className="list-disc pl-5 space-y-1.5 mt-2">
                  <li><strong>Contact Information:</strong> Your full name, company/plant name, phone number, email address, and plant location.</li>
                  <li><strong>Service Inquiry Details:</strong> The type of compliance, engineering, or laboratory testing service you require, your urgency level, and preferred consultation time window.</li>
                  <li><strong>Technical Facility Information:</strong> Any notes or descriptions about your facility, compliance status, or specific requirements that you voluntarily share.</li>
                  <li><strong>Device &amp; Usage Data:</strong> Browser type, IP address, referring URL, pages visited, and time spent on our website, collected automatically through standard server logs and analytics.</li>
                </ul>
                <p className="mt-2">We do <strong>not</strong> collect any payment card data, government identification documents, or sensitive personal data through this website.</p>
              </Section>

              <Section id="how-we-use" title="How We Use Your Information" icon={Eye}>
                <p>We use the information collected solely for the following legitimate business purposes:</p>
                <ul className="list-disc pl-5 space-y-1.5 mt-2">
                  <li>To respond to your consultation inquiry and provide a callback from our senior engineers.</li>
                  <li>To assess your facility's compliance requirements and prepare a preliminary project roadmap.</li>
                  <li>To communicate service proposals, quotations, or updates related to your specific inquiry.</li>
                  <li>To improve our website's usability, content quality, and service delivery.</li>
                  <li>To comply with legal obligations, regulatory requirements, or professional standards as applicable under Indian law.</li>
                </ul>
                <p>We do <strong>not</strong> use your information for automated profiling, credit assessment, or any purpose not described in this policy.</p>
              </Section>

              <Section id="whatsapp-routing" title="WhatsApp Lead Routing" icon={Bell}>
                <p>
                  EHS PRO SERVICES uses WhatsApp Business as its primary inquiry routing channel. When you submit a consultation request form on our website, the information you provide is formatted into a structured message and transmitted via the WhatsApp platform (operated by Meta Platforms Inc.) to our Senior Engineering Team at{" "}
                  <strong>+91 96180 04530</strong>.
                </p>
                <p>
                  By submitting a form on our website, you expressly consent to having your inquiry details routed through WhatsApp. This transmission is protected by WhatsApp's end-to-end encryption protocols. We do not store form submission data on our servers; your data travels directly from your browser to our team via WhatsApp's secure messaging infrastructure.
                </p>
                <p>
                  WhatsApp's own Privacy Policy governs the processing of data within their platform and is accessible at{" "}
                  <a href="https://www.whatsapp.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline">whatsapp.com/legal/privacy-policy</a>.
                </p>
              </Section>

              <Section id="data-sharing" title="Data Sharing &amp; Disclosure" icon={Globe}>
                <p>We maintain strict corporate confidentiality. Your personal and facility information is:</p>
                <ul className="list-disc pl-5 space-y-1.5 mt-2">
                  <li><strong>Never sold</strong> to any third party, data broker, or marketing agency.</li>
                  <li><strong>Never shared</strong> with competing consultants, trade associations, or regulatory bodies without your explicit prior consent.</li>
                  <li>Shared only with our internal senior engineers and project managers on a strict need-to-know basis for the purpose of evaluating and responding to your inquiry.</li>
                </ul>
                <p>We may disclose information only when:</p>
                <ul className="list-disc pl-5 space-y-1.5 mt-2">
                  <li>Required by Indian law, court order, or valid legal process.</li>
                  <li>Necessary to protect the rights, safety, or property of EHS PRO SERVICES, our clients, or the public.</li>
                  <li>You have provided explicit written consent for a specific disclosure.</li>
                </ul>
              </Section>

              <Section id="data-retention" title="Data Retention" icon={Shield}>
                <p>
                  Inquiry data received through WhatsApp is retained on our business communication devices for a period of up to <strong>36 months</strong> from the date of initial contact, or until project completion and archival — whichever is longer — to facilitate ongoing statutory compliance support.
                </p>
                <p>
                  Website analytics data (anonymized) is retained for up to <strong>12 months</strong>. You may request deletion of your personal information at any time (see "Your Rights" below).
                </p>
              </Section>

              <Section id="your-rights" title="Your Rights" icon={UserCheck}>
                <p>As a data subject, you have the following rights with respect to your personal information held by us:</p>
                <ul className="list-disc pl-5 space-y-1.5 mt-2">
                  <li><strong>Right to Access:</strong> Request a copy of the personal data we hold about you.</li>
                  <li><strong>Right to Correction:</strong> Request correction of any inaccurate or incomplete personal data.</li>
                  <li><strong>Right to Deletion:</strong> Request erasure of your personal data, subject to legal retention obligations.</li>
                  <li><strong>Right to Withdraw Consent:</strong> Withdraw your consent to processing at any time; this will not affect the lawfulness of processing prior to withdrawal.</li>
                  <li><strong>Right to Grievance Redress:</strong> Lodge a complaint with the appropriate data protection authority under the Digital Personal Data Protection Act, 2023 (DPDPA) or any applicable Indian data protection regulation.</li>
                </ul>
                <p>To exercise any of these rights, please contact us at <a href={`mailto:${siteConfig.contact.email}`} className="text-emerald-700 underline">{siteConfig.contact.email}</a>.</p>
              </Section>

              <Section id="cookies" title="Cookies &amp; Tracking Technologies" icon={Eye}>
                <p>Our website may use minimal cookies and similar tracking technologies to improve your browsing experience and gather anonymous usage analytics. These include:</p>
                <ul className="list-disc pl-5 space-y-1.5 mt-2">
                  <li><strong>Essential Cookies:</strong> Required for basic website functionality such as session management.</li>
                  <li><strong>Analytics Cookies:</strong> Anonymized traffic analysis to understand page performance (e.g., Google Analytics, if applicable).</li>
                </ul>
                <p>You may disable cookies at any time through your browser settings. Disabling cookies may affect certain aspects of website functionality.</p>
              </Section>

              <Section id="third-party-links" title="Third-Party Links" icon={Globe}>
                <p>
                  Our website may contain links to third-party websites such as regulatory portals (e.g., CPCB, SPCB), WhatsApp, LinkedIn, and Google Maps. These third-party sites have their own privacy policies, and we bear no responsibility for their practices. We encourage you to review their policies before providing any personal data.
                </p>
              </Section>

              <Section id="children" title="Children's Privacy" icon={UserCheck}>
                <p>
                  Our services are directed exclusively toward industrial and commercial entities and are not intended for use by individuals under the age of 18. We do not knowingly collect personal information from minors. If you believe we have inadvertently collected such data, please contact us immediately for deletion.
                </p>
              </Section>

              <Section id="changes" title="Changes to This Policy" icon={Bell}>
                <p>
                  We reserve the right to update or modify this Privacy Policy at any time to reflect changes in our practices, services, legal requirements, or applicable regulations. When we do, we will update the "Last Updated" date at the top of this page. Your continued use of our website after any modifications constitutes your acknowledgment and acceptance of the revised policy.
                </p>
              </Section>

              <Section id="contact" title="Contact Us" icon={Mail}>
                <p>If you have any questions, concerns, or requests regarding this Privacy Policy or your personal data, please reach out to us:</p>
                <div className="mt-3 space-y-2">
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <a href={`mailto:${siteConfig.contact.email}`} className="text-emerald-700 hover:underline">{siteConfig.contact.email}</a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>{siteConfig.contact.phone}</span>
                  </div>
                  <div className="text-slate-500 text-xs mt-1 pl-6">
                    {siteConfig.contact.address}, {siteConfig.contact.cityStateZip}
                  </div>
                </div>
              </Section>

              {/* Related links */}
              <div className="pt-6 border-t border-slate-200 flex flex-wrap gap-4">
                <Link to="/terms" className="text-sm font-medium text-emerald-700 hover:underline flex items-center gap-1">
                  <ChevronRight className="w-4 h-4" /> Terms of Service
                </Link>
                <Link to="/disclaimer" className="text-sm font-medium text-emerald-700 hover:underline flex items-center gap-1">
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

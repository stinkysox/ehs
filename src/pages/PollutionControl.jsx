import React from "react";
import { motion } from "framer-motion";
import SEO from "../components/SEO";
import PollutionControl from "../components/PollutionControl";

const PCB_SERVICE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Pollution Control Board (PCB) Liaison & Compliance",
  serviceType: "Environmental Regulatory Compliance",
  provider: { "@type": "LocalBusiness", name: "EHS PRO SERVICES", url: "https://www.ehsproservices.in" },
  description: "End-to-end PCB compliance — Consent for Establishment (CFE), Consent for Operation (CFO), annual environmental audits, Form-V submission, hazardous waste authorization, and inspection defense across Andhra Pradesh.",
  areaServed: "Andhra Pradesh, India",
  url: "https://www.ehsproservices.in/pcb-compliance",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "PCB Compliance Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Consent for Establishment (CFE) — Greenfield Factory" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Consent for Operation (CFO) — Active Manufacturing" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Annual Environmental Audit & Form-V Filing" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Hazardous Waste Authorization (Rule 6)" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Surprise Inspection Defense & Show-Cause Reply" } },
    ],
  },
};

export default function PollutionControlPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="pt-24"
    >
      <SEO
        title="Pollution Control Board Compliance — CFE, CFO & Annual Audits"
        description="PCB Consent for Establishment (CFE), Consent for Operation (CFO), annual Form-V audits, hazardous waste authorization, and inspection defense across Andhra Pradesh. Expert liaison with State & Central Pollution Control Board."
        path="/pcb-compliance"
        schema={PCB_SERVICE_SCHEMA}
      />
      <PollutionControl />
    </motion.div>
  );
}


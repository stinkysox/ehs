import React from "react";
import { motion } from "framer-motion";
import SEO from "../components/SEO";
import FireProtection from "../components/FireProtection";

const FIRE_SERVICE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Turnkey Fire Protection Infrastructure & PESO NOC",
  serviceType: "Fire Safety Engineering",
  provider: { "@type": "LocalBusiness", name: "EHS PRO SERVICES", url: "https://www.ehsproservices.in" },
  description: "NBC Part IV & PESO certified fire protection services — Municipal Fire NOC issuance, PESO approvals for petroleum/chemical storage, turnkey fire hydrant ring mains, addressable fire alarm systems, and PA emergency systems for factories.",
  areaServed: "Andhra Pradesh, India",
  url: "https://www.ehsproservices.in/fire-protection",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Fire Safety Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Municipal Fire NOC — New, Renewal & Expansion" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "PESO NOC — Petroleum & Chemical Bulk Storage Clearance" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Turnkey Fire Hydrant System & Ring Main Installation" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Addressable Fire Alarm & Smoke Detection Systems" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Public Address (PA) Emergency Evacuation Systems" } },
    ],
  },
};

export default function FireProtectionPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="pt-24"
    >
      <SEO
        title="Fire NOC, PESO Approval & Fire Protection Systems"
        description="Turnkey Fire Protection engineering in Andhra Pradesh — Municipal Fire NOC, PESO NOC for petroleum/chemical storage, fire hydrant ring mains (NBC 2016/NFPA), addressable fire alarms, and PA emergency systems for factories and warehouses."
        path="/fire-protection"
        schema={FIRE_SERVICE_SCHEMA}
      />
      <FireProtection />
    </motion.div>
  );
}


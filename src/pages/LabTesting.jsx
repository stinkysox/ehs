import React from "react";
import { motion } from "framer-motion";
import SEO from "../components/SEO";
import LabServices from "../components/LabServices";

const LAB_SERVICE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Environmental Laboratory Testing Services",
  serviceType: "Environmental Testing",
  provider: { "@type": "LocalBusiness", name: "EHS PRO SERVICES", url: "https://www.ehsproservices.in" },
  description: "NABL and CPCB approved environmental lab testing — drinking water (IS 10500), effluent (BOD/COD/heavy metals), stack air quality (PM2.5/PM10/SOx/NOx), industrial noise surveys, and soil/sludge TCLP analysis.",
  areaServed: "Andhra Pradesh, India",
  url: "https://www.ehsproservices.in/lab-testing",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Lab Testing Parameters",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Drinking Water Quality Analysis (IS 10500)" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Effluent & Wastewater Testing (BOD, COD, Heavy Metals)" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Ambient & Stack Air Quality Monitoring (PM2.5, PM10, SOx, NOx)" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Industrial Noise Level Surveys (Leq Mapping)" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Soil & Sludge TCLP Evaluation" } },
    ],
  },
};

export default function LabTesting() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="pt-24"
    >
      <SEO
        title="Environmental Lab Testing"
        description="NABL & CPCB approved environmental laboratory testing in Andhra Pradesh. Drinking water (IS 10500), effluent BOD/COD/heavy metals, stack emission (PM2.5, PM10, SOx, NOx), industrial noise surveys, soil & sludge TCLP analysis. Authorized PCB compliance reports."
        path="/lab-testing"
        schema={LAB_SERVICE_SCHEMA}
      />
      <LabServices />
    </motion.div>
  );
}


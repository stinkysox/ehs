import React from "react";
import { motion } from "framer-motion";
import SEO from "../components/SEO";
import WaterEngineering from "../components/WaterEngineering";

const WATER_SERVICE_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "ETP & STP Water Engineering — Zero Liquid Discharge",
  serviceType: "Industrial Water Treatment Engineering",
  provider: { "@type": "LocalBusiness", name: "EHS PRO SERVICES", url: "https://www.ehsproservices.in" },
  description: "Turnkey Effluent Treatment Plant (ETP) and Sewage Treatment Plant (STP) engineering — design, supply, installation and O&M. Custom MBBR, SBR, MBR, DAF systems with PLC/SCADA automation for factories in Andhra Pradesh.",
  areaServed: "Andhra Pradesh, India",
  url: "https://www.ehsproservices.in/water-engineering",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Water Engineering Solutions",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Effluent Treatment Plant (ETP) Design & Installation" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Sewage Treatment Plant (STP) — MBR, MBBR, SBR" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Zero Liquid Discharge (ZLD) Systems" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Annual Operation & Maintenance (O&M) Contracts" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "P&ID Blueprinting & Civil Engineering" } },
    ],
  },
};

export default function WaterEngineeringPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="pt-24"
    >
      <SEO
        title="ETP & STP Plant Engineering — Zero Liquid Discharge"
        description="Turnkey ETP & STP water engineering in Andhra Pradesh — custom Effluent Treatment Plants, Sewage Treatment Plants, Zero Liquid Discharge (ZLD) systems using MBBR, SBR, MBR, DAF technology. Full supply, installation and O&M."
        path="/water-engineering"
        schema={WATER_SERVICE_SCHEMA}
      />
      <WaterEngineering />
    </motion.div>
  );
}


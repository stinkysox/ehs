import React from "react";
import { motion } from "framer-motion";
import SEO from "../components/SEO";
import WaterEngineering from "../components/WaterEngineering";

export default function WaterEngineeringPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="pt-24"
    >
      <SEO title="Water Engineering" description="ETP & STP Plant Engineering Solutions." path="/water-engineering" />
      <WaterEngineering />
    </motion.div>
  );
}

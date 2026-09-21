import React from "react";
import { motion } from "framer-motion";
import SEO from "../components/SEO";
import LabServices from "../components/LabServices";

export default function LabTesting() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="pt-24"
    >
      <SEO title="Environmental Lab Testing" description="NABL & CPCB Approved Protocols for accurate testing and environmental compliance." path="/lab-testing" />
      <LabServices />
    </motion.div>
  );
}

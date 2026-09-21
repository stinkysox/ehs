import React from "react";
import { motion } from "framer-motion";
import SEO from "../components/SEO";
import PollutionControl from "../components/PollutionControl";

export default function PollutionControlPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="pt-24"
    >
      <SEO title="PCB Compliance" description="State & Central PCB Representation for CFE, CFO, and Annual Compliance." path="/pcb-compliance" />
      <PollutionControl />
    </motion.div>
  );
}

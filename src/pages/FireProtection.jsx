import React from "react";
import { motion } from "framer-motion";
import SEO from "../components/SEO";
import FireProtection from "../components/FireProtection";

export default function FireProtectionPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="pt-24"
    >
      <SEO title="Fire Protection & PESO NOC" description="Turnkey Fire Protection Infrastructure & PESO NOC clearances." path="/fire-protection" />
      <FireProtection />
    </motion.div>
  );
}

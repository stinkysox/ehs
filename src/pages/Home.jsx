import React from "react";
import { motion } from "framer-motion";
import SEO from "../components/SEO";
import Hero from "../components/Hero";
import CallbackForm from "../components/CallbackForm";
import WhyChooseUs from "../components/WhyChooseUs";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <SEO
        path="/"
        description="EHS PRO SERVICES — Andhra Pradesh's leading industrial EHS compliance firm. PCB CFE/CFO consents, Fire NOC & PESO approvals, ETP/STP plant engineering, and NABL/CPCB certified environmental lab testing. 15+ years | 650+ plants. Call +91 96180 04530."
      />
      <Hero />
      <CallbackForm />
      <WhyChooseUs />
    </motion.div>
  );
}


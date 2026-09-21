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
      <SEO title="Home" />
      <Hero />
      <CallbackForm />
      <WhyChooseUs />
    </motion.div>
  );
}

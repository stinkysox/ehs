import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { AnimatePresence } from "framer-motion";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import LabTesting from "./pages/LabTesting";
import PollutionControl from "./pages/PollutionControl";
import FireProtection from "./pages/FireProtection";
import WaterEngineering from "./pages/WaterEngineering";
import BookConsultation from "./pages/BookConsultation";

function ScrollToTop() {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/lab-testing" element={<LabTesting />} />
        <Route path="/pcb-compliance" element={<PollutionControl />} />
        <Route path="/fire-protection" element={<FireProtection />} />
        <Route path="/water-engineering" element={<WaterEngineering />} />
        <Route path="/book-consultation" element={<BookConsultation />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col bg-[#f8fafc] text-slate-800 font-body selection:bg-teal-800 selection:text-white">
          <Navbar />
          
          <main className="flex-grow">
            <AnimatedRoutes />
          </main>

          <Footer />
        </div>
      </Router>
    </HelmetProvider>
  );
}

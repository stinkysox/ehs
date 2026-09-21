import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "../data/content";
import { Menu, X, Phone, ArrowRight } from "lucide-react";
import logoImg from "../assets/logo.jpeg";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    // Trigger scroll check on mount in case it's re-mounted mid-page
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const menuVariants = {
    closed: {
      opacity: 0,
      y: "-100%",
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
    open: {
      opacity: 1,
      y: "0%",
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const linkVariants = {
    closed: { opacity: 0, y: 20 },
    open: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.1 + i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    }),
  };

  // Determine styling based on route and scroll state
  const isSolid = !isHome || isScrolled || isMenuOpen;
  
  const headerBgClass = isSolid 
    ? "bg-white/95 backdrop-blur-md shadow-soft-md border-b border-slate-200/90 py-3" 
    : "bg-transparent py-5";

  const phoneBtnClass = isSolid
    ? "text-slate-700 hover:text-primary hover:bg-slate-100"
    : "text-white hover:text-accent hover:bg-white/10 backdrop-blur-sm";

  const toggleBtnClass = isSolid
    ? "text-slate-800 border-slate-300 hover:bg-slate-100 bg-white/50"
    : "text-white border-white/30 hover:bg-white/20 hover:border-white/50 backdrop-blur-sm bg-white/5";

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerBgClass}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center group focus:outline-none relative z-50"
              aria-label="EHS PRO SERVICES Home"
            >
              <div
                className={`transition-all duration-300 rounded-xl flex items-center ${
                  isSolid
                    ? "bg-white/80 p-1"
                    : "bg-white/95 backdrop-blur-md px-2.5 py-1 shadow-md shadow-black/20 border border-white/50 ring-1 ring-black/5"
                }`}
              >
                <img
                  src={logoImg}
                  alt="EHS PRO SERVICES"
                  className="h-9 sm:h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
                />
              </div>
            </Link>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-4 relative z-50">
              {/* Desktop Navigation Links */}
              <nav className="hidden lg:flex items-center space-x-7 mr-2" aria-label="Main Navigation">
                {siteConfig.navLinks.map((link) =>
                  link.href === "/book-consultation" ? (
                    <Link
                      key={link.label}
                      to={link.href}
                      className="inline-flex items-center gap-1.5 bg-accent hover:bg-accent-hover text-slate-950 text-sm font-bold px-4 py-2 rounded-lg transition-all duration-200"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <Link
                      key={link.label}
                      to={link.href}
                      className={`text-sm font-semibold transition-colors hover:text-accent focus:outline-none ${
                        isSolid ? "text-slate-700" : "text-slate-200 hover:text-white"
                      }`}
                    >
                      {link.label}
                    </Link>
                  )
                )}
              </nav>

              <a href={`tel:${siteConfig.contact.phone.replace(/\s+/g, "")}`} className={`hidden sm:flex items-center space-x-2 text-sm font-semibold px-4 py-2 rounded-lg transition-colors ${phoneBtnClass}`}>
                <Phone className="w-4 h-4 text-accent" />
                <span>{siteConfig.contact.phone}</span>
              </a>

              {/* Menu Toggle - Mobile Only */}
              <button
                type="button"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={`lg:hidden p-2.5 rounded-xl border transition-all duration-300 focus:outline-none ${toggleBtnClass}`}
                aria-expanded={isMenuOpen}
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Full Screen Overlay Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-0 z-40 bg-white/95 backdrop-blur-2xl flex flex-col justify-center items-center px-4 sm:px-6"
          >
            <nav className="flex flex-col items-center space-y-6 sm:space-y-8 w-full max-w-lg">
              {siteConfig.navLinks.map((link, i) => (
                <motion.div custom={i} variants={linkVariants} initial="closed" animate="open" exit="closed" key={link.label} className="w-full text-center overflow-hidden">
                  <Link to={link.href} className="inline-block font-heading font-extrabold text-4xl sm:text-5xl lg:text-6xl text-slate-800 hover:text-primary transition-colors tracking-tight relative group">
                    {link.label}
                    <span className="absolute -bottom-2 left-0 w-0 h-1 bg-accent group-hover:w-full transition-all duration-300 ease-out"></span>
                  </Link>
                </motion.div>
              ))}

              <motion.div custom={siteConfig.navLinks.length} variants={linkVariants} initial="closed" animate="open" exit="closed" className="pt-10 w-full">
                <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8 text-center shadow-soft-xl max-w-sm mx-auto">
                  <div className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-2">Direct Helpline</div>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-2 mb-6">
                    <a href={`tel:${siteConfig.contact.phone.replace(/\s+/g, "")}`} className="text-xl sm:text-2xl font-heading font-extrabold text-primary hover:text-accent transition-colors block">
                      {siteConfig.contact.phone}
                    </a>
                    <span className="hidden sm:block text-slate-400">·</span>
                    <a href={`tel:${siteConfig.contact.altPhone.replace(/\s+/g, "")}`} className="text-xl sm:text-2xl font-heading font-extrabold text-primary hover:text-accent transition-colors block">
                      {siteConfig.contact.altPhone}
                    </a>
                  </div>
                  <Link
                    to="/book-consultation"
                    onClick={() => setIsMenuOpen(false)}
                    className="inline-flex items-center justify-center space-x-2 bg-accent hover:bg-accent-hover text-slate-950 text-base font-bold w-full py-4 rounded-xl shadow-lg transition-colors"
                  >
                    <span>Book Consultation Now</span>
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

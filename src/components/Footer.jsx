import React from "react";
import { Link } from "react-router-dom";
import { siteConfig, footerContent } from "../data/content";
import logoImg from "../assets/logo.jpeg";
import {
  Mail,
  Phone,
  MapPin,
  ArrowUp,
  Clock,
  FlaskConical,
  Flame,
  Droplets,
  Leaf,
  ChevronRight,
} from "lucide-react";

// Inline SVG social icons (lucide-react doesn't include brand icons)
const LinkedInIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);
const TwitterIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);
const YouTubeIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58A2.78 2.78 0 0 0 3.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white" />
  </svg>
);

const serviceColumns = [
  {
    icon: Leaf,
    color: "text-emerald-400",
    bg: "bg-emerald-950/60",
    border: "border-emerald-800/50",
    label: "PCB Compliance",
    href: "#pollution-control",
  },
  {
    icon: Flame,
    color: "text-amber-400",
    bg: "bg-amber-950/60",
    border: "border-amber-800/50",
    label: "Fire & PESO NOC",
    href: "#fire-protection",
  },
  {
    icon: Droplets,
    color: "text-teal-400",
    bg: "bg-teal-950/60",
    border: "border-teal-800/50",
    label: "ETP / STP Plants",
    href: "#water-engineering",
  },
  {
    icon: FlaskConical,
    color: "text-violet-400",
    bg: "bg-violet-950/60",
    border: "border-violet-800/50",
    label: "Lab Testing",
    href: "#lab-services",
  },
];

const socialIcons = [
  { name: "LinkedIn", icon: LinkedInIcon, href: "https://linkedin.com" },
  { name: "Twitter / X", icon: TwitterIcon, href: "https://twitter.com" },
  { name: "YouTube", icon: YouTubeIcon, href: "https://youtube.com" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollTo = (e, href) => {
    e.preventDefault();
    if (href === "#top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const target = document.querySelector(href);
    if (target) {
      const offsetPosition =
        target.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <footer className="relative text-slate-400 overflow-hidden" style={{ backgroundColor: "#060d0b" }}>
      {/* Top accent line */}
      <div
        className="absolute top-0 inset-x-0 h-px pointer-events-none"
        style={{ background: "linear-gradient(to right, transparent, rgba(52,211,153,0.5), transparent)" }}
      />

      {/* Ambient glow */}
      <div
        className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[300px] rounded-full pointer-events-none"
        style={{ background: "rgba(6,78,59,0.18)", filter: "blur(100px)" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">

        {/* ── Service Pillars Strip ── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-14 pb-12 border-b border-slate-800/70">
          {serviceColumns.map(({ icon: Icon, color, bg, border, label, href }) => (
            <a
              key={label}
              href={href}
              onClick={(e) => scrollTo(e, href)}
              className={`group flex items-center space-x-3 rounded-xl px-4 py-3 border ${border} ${bg} hover:brightness-125 transition-all duration-200`}
            >
              <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 bg-black/30">
                <Icon className={`w-4 h-4 ${color}`} />
              </div>
              <span className="text-xs font-semibold text-slate-300 group-hover:text-white transition-colors">
                {label}
              </span>
              <ChevronRight className="w-3.5 h-3.5 text-slate-600 group-hover:text-slate-400 ml-auto flex-shrink-0 transition-colors" />
            </a>
          ))}
        </div>

        {/* ── Main Footer Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800/70">

          {/* Brand block */}
          <div className="lg:col-span-5 space-y-5">
            <Link to="/" className="inline-block group focus:outline-none" aria-label="EHS PRO SERVICES Home">
              <div className="bg-white px-3.5 py-2 rounded-2xl inline-flex items-center shadow-xl shadow-black/30 border border-white/20 transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-emerald-500/10">
                <img
                  src={logoImg}
                  alt="EHS PRO SERVICES - Industrial EHS Compliance & Engineering"
                  className="h-12 sm:h-14 w-auto object-contain"
                />
              </div>
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              {footerContent.missionStatement}
            </p>

            {/* 24/7 badge */}
            <div className="inline-flex items-center space-x-2.5 text-xs text-emerald-300 bg-emerald-950/60 border border-emerald-800/50 px-4 py-2 rounded-full">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
              <span>{siteConfig.contact.emergencySupport}</span>
            </div>

            {/* Socials */}
            <div className="flex items-center space-x-2 pt-1">
              {socialIcons.map(({ name, icon: SocialIcon, href }) => (
                <a
                  key={name}
                  href={href}
                  aria-label={name}
                  className="w-8 h-8 rounded-lg border border-slate-700 flex items-center justify-center text-slate-500 hover:text-white hover:border-slate-500 hover:bg-slate-800 transition-all duration-200"
                >
                  <SocialIcon className="w-3.5 h-3.5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-200">
              Quick Navigation
            </h4>
            <ul className="space-y-2">
              {footerContent.quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => scrollTo(e, link.href)}
                    className="group flex items-center space-x-2 text-sm text-slate-400 hover:text-emerald-400 transition-colors"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-slate-700 group-hover:text-emerald-500 transition-colors flex-shrink-0" />
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact block */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-slate-200">
              Corporate Contacts
            </h4>

            <div className="space-y-3">
              {/* Email */}
              <div className="flex items-start space-x-3 rounded-xl bg-slate-900/60 border border-slate-800 px-4 py-3 hover:border-slate-700 transition-colors">
                <Mail className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                <div className="min-w-0">
                  <div className="text-[10px] uppercase font-bold tracking-wider text-slate-500 mb-0.5">Official Email</div>
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="text-sm text-slate-300 hover:text-emerald-400 transition-colors truncate block"
                  >
                    {siteConfig.contact.email}
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-3 rounded-xl bg-slate-900/60 border border-slate-800 px-4 py-3 hover:border-slate-700 transition-colors">
                <Phone className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-[10px] uppercase font-bold tracking-wider text-slate-500 mb-0.5">Direct Helpline</div>
                  <a
                    href={`tel:${siteConfig.contact.phone.replace(/\s+/g, "")}`}
                    className="text-sm text-slate-300 hover:text-emerald-400 transition-colors"
                  >
                    {siteConfig.contact.phone}
                  </a>
                  <span className="text-slate-600 mx-1.5">·</span>
                  <span className="text-sm text-slate-400">{siteConfig.contact.altPhone}</span>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start space-x-3 rounded-xl bg-slate-900/60 border border-slate-800 px-4 py-3 hover:border-slate-700 transition-colors">
                <MapPin className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-[10px] uppercase font-bold tracking-wider text-slate-500 mb-0.5">Registered Office</div>
                  <p className="text-sm text-slate-300 leading-snug">
                    {siteConfig.contact.address},<br />
                    {siteConfig.contact.cityStateZip}
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-center space-x-3 rounded-xl bg-slate-900/60 border border-slate-800 px-4 py-3">
                <Clock className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                <span className="text-sm text-slate-300">{siteConfig.contact.workingHours}</span>
              </div>
            </div>
          </div>
        </div>

        {/* ── Bottom strip ── */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
            <span>© {currentYear} {siteConfig.brand.name}. All rights reserved.</span>
            <span className="hidden sm:block text-slate-700">·</span>
            <span className="text-slate-700 font-mono tracking-wider">GSTIN: <span className="text-slate-500">{siteConfig.brand.gstin}</span></span>
          </div>

          <div className="flex items-center gap-5">
            {footerContent.legalLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="hover:text-slate-400 transition-colors"
              >
                {item.label}
              </a>
            ))}
            <button
              onClick={(e) => scrollTo(e, "#top")}
              className="flex items-center space-x-1.5 text-slate-500 hover:text-emerald-400 transition-colors ml-2"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

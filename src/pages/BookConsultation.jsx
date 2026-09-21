import React, { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import SEO from "../components/SEO";
import { siteConfig } from "../data/content";
import {
  PhoneCall,
  Mail,
  Building2,
  User,
  Phone,
  MapPin,
  Clock,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  Shield,
  Microscope,
  Flame,
  Droplet,
  FileCheck2,
  ChevronRight,
  CheckCheck,
  RotateCcw,
  Send,
} from "lucide-react";

const SERVICE_MAP = {
  pcb: { id: "pcb", label: "Pollution Control Board", detail: "CFE / CFO / Annual Compliance", icon: FileCheck2 },
  fire: { id: "fire", label: "Fire Infrastructure & PESO", detail: "NOC / Hydrants / Alarms / PA Systems", icon: Flame },
  peso: { id: "peso", label: "PESO NOC Clearance", detail: "Explosives & Fuel Storage Clearance", icon: Shield },
  water: { id: "water", label: "Water Engineering (ETP/STP)", detail: "Plant Supply, Installation & O&M", icon: Droplet },
  lab: { id: "lab", label: "Environmental Lab Testing", detail: "Water / Air / Noise / Soil / Stack", icon: Microscope },
};

const ALL_SERVICES = Object.values(SERVICE_MAP);

const PREFERRED_TIMES = [
  "9:00 AM – 11:00 AM",
  "11:00 AM – 1:00 PM",
  "2:00 PM – 4:00 PM",
  "4:00 PM – 6:00 PM",
  "Anytime (Flexible)",
];

const URGENCY_OPTIONS = [
  { value: "urgent", label: "Urgent (Within 24 hrs)" },
  { value: "soon", label: "Soon (Within 3 days)" },
  { value: "planning", label: "Planning (This week)" },
  { value: "exploring", label: "Exploring Options" },
];

function FieldError({ msg }) {
  if (!msg) return null;
  return (
    <p className="mt-1.5 flex items-center gap-1.5 text-xs text-red-500">
      <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
      {msg}
    </p>
  );
}

function WhatsAppIcon({ className = "w-5 h-5" }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.978-.276-.1-.476-.15-.677.15-.2.301-.776.978-.952 1.178-.176.2-.351.226-.652.075-.301-.15-1.272-.469-2.423-1.496-.895-.798-1.5-1.784-1.676-2.085-.176-.301-.019-.464.132-.614.136-.135.301-.351.452-.527.15-.176.2-.301.301-.501.1-.2.05-.376-.025-.526-.075-.15-.677-1.63-.928-2.232-.244-.586-.492-.507-.677-.516-.176-.008-.376-.01-.577-.01-.2 0-.526.075-.802.376-.276.301-1.053 1.028-1.053 2.507 0 1.479 1.078 2.908 1.229 3.109.15.2 2.122 3.24 5.141 4.544.718.31 1.279.496 1.716.635.722.23 1.38.197 1.9.12.58-.087 1.78-.728 2.03-1.43.25-.702.25-1.303.175-1.43-.075-.126-.275-.201-.576-.351zm-5.419 7.424h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function InputField({ id, label, type = "text", placeholder, value, onChange, error, icon: Icon, required }) {
  return (
    <div>
      <label htmlFor={id} className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-2">
        {label} {required && <span className="text-red-400">*</span>}
      </label>
      <div className="relative">
        {Icon && (
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
            <Icon className="w-4 h-4" />
          </div>
        )}
        <input
          id={id}
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className={`w-full ${Icon ? "pl-11" : "pl-4"} pr-4 py-3.5 rounded-xl border text-sm text-slate-800 placeholder-slate-400 bg-white transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/30 ${
            error ? "border-red-400 bg-red-50/40" : "border-slate-300 hover:border-slate-400 focus:border-primary"
          }`}
        />
      </div>
      <FieldError msg={error} />
    </div>
  );
}

export default function BookConsultation() {
  const [searchParams] = useSearchParams();
  const preService = searchParams.get("service");

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    location: "",
    selectedServices: preService && SERVICE_MAP[preService] ? [preService] : [],
    urgency: "soon",
    preferredTime: "Anytime (Flexible)",
    notes: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [waLink, setWaLink] = useState("");
  const [submittedLead, setSubmittedLead] = useState(null);

  useEffect(() => {
    if (preService && SERVICE_MAP[preService]) {
      setFormData((prev) => ({
        ...prev,
        selectedServices: prev.selectedServices.includes(preService)
          ? prev.selectedServices
          : [preService, ...prev.selectedServices],
      }));
    }
  }, [preService]);

  const set = (field) => (val) => {
    setFormData((prev) => ({ ...prev, [field]: val }));
    if (errors[field]) setErrors((prev) => { const e = { ...prev }; delete e[field]; return e; });
  };

  const toggleService = (id) => {
    setFormData((prev) => {
      const has = prev.selectedServices.includes(id);
      const updated = has ? prev.selectedServices.filter((s) => s !== id) : [...prev.selectedServices, id];
      if (errors.services && updated.length > 0) setErrors((e) => { const c = { ...e }; delete c.services; return c; });
      return { ...prev, selectedServices: updated };
    });
  };

  const validate = () => {
    const e = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) e.name = "Full name is required (min 2 characters)";
    if (!formData.company.trim()) e.company = "Company / Plant name is required";
    const ph = formData.phone.replace(/[\s\-\(\)]/g, "");
    if (!formData.phone.trim()) e.phone = "Phone number is required";
    else if (!/^\+?[0-9]{10,14}$/.test(ph)) e.phone = "Enter a valid 10-digit phone number";
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) e.email = "Enter a valid email address";
    if (formData.selectedServices.length === 0) e.services = "Please select at least one service";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);

    const serviceNames = formData.selectedServices
      .map((s) => SERVICE_MAP[s]?.label || s)
      .join(", ");

    const urgencyLabels = {
      urgent: "Urgent (Within 24 hrs)",
      soon: "Soon (Within 3 days)",
      planning: "Planning (This week)",
      exploring: "Exploring Options",
    };

    const waLines = [
      "🚨 *NEW EHS CONSULTATION LEAD*",
      "━━━━━━━━━━━━━━━━━━━━━━",
      `👤 *Client Name:* ${formData.name}`,
      `🏢 *Company / Plant:* ${formData.company}`,
      `📞 *Phone Number:* ${formData.phone}`,
      formData.email ? `✉️ *Email:* ${formData.email}` : null,
      formData.location ? `📍 *Plant Location:* ${formData.location}` : null,
      `🛠️ *Services Needed:* ${serviceNames}`,
      `⚡ *Urgency Level:* ${urgencyLabels[formData.urgency] || formData.urgency}`,
      `🕒 *Preferred Callback Window:* ${formData.preferredTime}`,
      formData.notes ? `📝 *Requirements / Notes:* ${formData.notes}` : null,
      "━━━━━━━━━━━━━━━━━━━━━━",
      "_Lead generated via EHS PRO SERVICES Online Portal_"
    ].filter(Boolean).join("\n");

    const waNumber = "919618004530";
    const waUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(waLines)}`;

    setWaLink(waUrl);
    setSubmittedLead({ ...formData, serviceNames });

    // Open WhatsApp in new tab
    try {
      window.open(waUrl, "_blank", "noopener,noreferrer");
    } catch (err) {
      console.warn("Popup blocked, button provided", err);
    }

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 400);
  };

  const reset = () => {
    setFormData({
      name: "",
      company: "",
      phone: "",
      email: "",
      location: "",
      selectedServices: preService && SERVICE_MAP[preService] ? [preService] : [],
      urgency: "soon",
      preferredTime: "Anytime (Flexible)",
      notes: "",
    });
    setErrors({});
    setIsSuccess(false);
    setWaLink("");
    setSubmittedLead(null);
  };

  return (
    <>
      <SEO
        title="Book a Free EHS Consultation"
        description="Request a free expert consultation with EHS PRO SERVICES for Pollution Control, Fire Safety, Water Treatment, or Environmental Lab Testing. Response within 30 minutes."
        path="/book-consultation"
      />

      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 pt-[72px]">
        {/* Hero Header */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-dark-grid opacity-10 pointer-events-none" />
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute top-0 right-1/4 w-64 h-64 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

          <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="inline-flex items-center gap-2 bg-emerald-950/70 border border-emerald-500/30 text-emerald-300 text-xs font-semibold tracking-wider px-4 py-2 rounded-full mb-6">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Free Expert Assessment · Response Within 30 Minutes
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white tracking-tight leading-tight mb-4">
                Book a Free{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-200">
                  EHS Consultation
                </span>
              </h1>
              <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
                Tell us about your facility requirements. Our Senior EHS Compliance Engineer will review your case and call you back with a customized roadmap.
              </p>
            </motion.div>

            <motion.div
              className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 mt-8 text-sm text-slate-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {[
                { icon: CheckCheck, text: "100% Confidential" },
                { icon: Clock, text: "30-Min Response Guarantee" },
                { icon: Shield, text: "No Obligation Assessment" },
                { icon: PhoneCall, text: "Direct Engineer Callback" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2">
                  <Icon className="w-4 h-4 text-emerald-500" />
                  <span>{text}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <motion.div
            className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200/20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <AnimatePresence mode="wait">
              {isSuccess ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center justify-center text-center p-8 sm:p-14 min-h-[500px]"
                >
                  <div className="w-20 h-20 rounded-full bg-emerald-100 border-4 border-emerald-200 flex items-center justify-center mb-5 shadow-sm">
                    <CheckCircle2 className="w-10 h-10 text-emerald-600" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-slate-900 mb-2">
                    Consultation Lead Forwarded!
                  </h2>
                  <p className="text-slate-600 max-w-lg leading-relaxed mb-5 text-sm sm:text-base">
                    Thank you, <strong className="text-slate-900">{submittedLead?.name || formData.name}</strong>. Your inquiry has been compiled and routed directly to our Senior EHS Engineer on WhatsApp at <strong className="text-emerald-700">+91 96180 04530</strong>.
                  </p>

                  {/* Primary WhatsApp Dispatch Box */}
                  <div className="w-full max-w-lg bg-emerald-50/90 border border-emerald-200/90 rounded-2xl p-5 mb-6 text-left shadow-sm">
                    <div className="flex items-center gap-2 text-emerald-900 font-bold text-sm mb-1.5">
                      <WhatsAppIcon className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                      <span>WhatsApp Lead Dispatch</span>
                    </div>
                    <p className="text-xs text-emerald-800 leading-relaxed mb-3.5">
                      Your details are ready to send directly to <strong>+91 96180 04530</strong>. If WhatsApp did not open automatically, tap the button below:
                    </p>
                    <a
                      href={waLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2.5 w-full bg-[#25D366] hover:bg-[#20bd5a] active:scale-[0.99] text-white font-bold text-sm py-3.5 px-5 rounded-xl shadow-md transition-all duration-200"
                    >
                      <WhatsAppIcon className="w-5 h-5" />
                      <span>Open WhatsApp Chat (+91 96180 04530)</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>

                  {/* Lead Summary */}
                  <div className="w-full max-w-lg bg-slate-50 border border-slate-200 rounded-2xl p-4 text-left text-xs text-slate-600 space-y-1.5 mb-6">
                    <div className="font-bold text-slate-800 text-[11px] uppercase tracking-wider mb-1.5">Submitted Lead Summary</div>
                    <div className="flex justify-between border-b border-slate-200/60 pb-1">
                      <span className="text-slate-500">Company / Facility:</span>
                      <span className="font-semibold text-slate-800">{submittedLead?.company}</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-200/60 pb-1">
                      <span className="text-slate-500">Contact Phone:</span>
                      <span className="font-semibold text-slate-800">{submittedLead?.phone}</span>
                    </div>
                    <div className="flex justify-between border-b border-slate-200/60 pb-1">
                      <span className="text-slate-500">Services:</span>
                      <span className="font-semibold text-slate-800 text-right">{submittedLead?.serviceNames}</span>
                    </div>
                    <div className="flex justify-between pt-0.5">
                      <span className="text-slate-500">Callback Window:</span>
                      <span className="font-semibold text-slate-800">{submittedLead?.preferredTime}</span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 w-full max-w-lg">
                    <button
                      onClick={reset}
                      className="flex-1 inline-flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-700 text-sm font-semibold px-5 py-3 rounded-xl transition-colors"
                    >
                      <RotateCcw className="w-4 h-4" />
                      Submit Another
                    </button>
                    <Link
                      to="/"
                      className="flex-1 inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white text-sm font-semibold px-5 py-3 rounded-xl transition-colors"
                    >
                      Return to Home
                      <ChevronRight className="w-4 h-4" />
                    </Link>
                  </div>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  noValidate
                  className="grid lg:grid-cols-5"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  {/* LEFT: Contact Details */}
                  <div className="lg:col-span-3 p-6 sm:p-10 border-b lg:border-b-0 lg:border-r border-slate-200">
                    <div className="mb-8">
                      <h2 className="text-xl font-heading font-extrabold text-slate-900 mb-1">Your Details</h2>
                      <p className="text-sm text-slate-500">
                        We'll use these to reach you. Fields marked <span className="text-red-400">*</span> are required.
                      </p>
                    </div>

                    <div className="space-y-5">
                      <InputField id="book-name" label="Full Name" placeholder="e.g. Rajesh Kumar" value={formData.name} onChange={set("name")} error={errors.name} icon={User} required />
                      <InputField id="book-company" label="Company / Plant Name" placeholder="e.g. Srinivasa Industries Pvt. Ltd." value={formData.company} onChange={set("company")} error={errors.company} icon={Building2} required />
                      <div className="grid sm:grid-cols-2 gap-5">
                        <InputField id="book-phone" label="Phone Number" type="tel" placeholder="+91 96180 04530" value={formData.phone} onChange={set("phone")} error={errors.phone} icon={Phone} required />
                        <InputField id="book-email" label="Email Address" type="email" placeholder="you@company.com" value={formData.email} onChange={set("email")} error={errors.email} icon={Mail} />
                      </div>
                      <InputField id="book-location" label="Plant / Facility Location" placeholder="e.g. Amaravathi, Andhra Pradesh" value={formData.location} onChange={set("location")} error={errors.location} icon={MapPin} />

                      {/* Urgency */}
                      <div>
                        <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-2">
                          How Soon Do You Need This? <span className="text-red-400">*</span>
                        </label>
                        <div className="grid grid-cols-2 gap-2">
                          {URGENCY_OPTIONS.map((opt) => (
                            <button
                              key={opt.value}
                              type="button"
                              onClick={() => set("urgency")(opt.value)}
                              className={`text-left px-4 py-3 rounded-xl border text-xs font-semibold transition-all duration-200 ${
                                formData.urgency === opt.value
                                  ? "border-primary bg-emerald-50 text-primary"
                                  : "border-slate-200 bg-white text-slate-700 hover:border-slate-300"
                              }`}
                            >
                              {opt.label}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Preferred Callback Time */}
                      <div>
                        <label className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-2">
                          Preferred Callback Window
                        </label>
                        <div className="relative">
                          <Clock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
                          <select
                            value={formData.preferredTime}
                            onChange={(e) => set("preferredTime")(e.target.value)}
                            className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-slate-300 text-sm text-slate-800 bg-white focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary hover:border-slate-400 transition-all appearance-none"
                          >
                            {PREFERRED_TIMES.map((t) => (
                              <option key={t} value={t}>{t}</option>
                            ))}
                          </select>
                        </div>
                      </div>

                      {/* Notes */}
                      <div>
                        <label htmlFor="book-notes" className="block text-xs font-semibold text-slate-600 uppercase tracking-wider mb-2">
                          Additional Details / Specific Requirements
                        </label>
                        <textarea
                          id="book-notes"
                          value={formData.notes}
                          onChange={(e) => set("notes")(e.target.value)}
                          placeholder="Describe your facility, current compliance status, or any specific issue you are facing..."
                          rows={4}
                          className="w-full px-4 py-3.5 rounded-xl border border-slate-300 text-sm text-slate-800 placeholder-slate-400 bg-white focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary hover:border-slate-400 transition-all resize-none"
                        />
                      </div>
                    </div>
                  </div>

                  {/* RIGHT: Service Selection + Submit */}
                  <div className="lg:col-span-2 p-6 sm:p-10 bg-slate-50 flex flex-col">
                    <div className="mb-6">
                      <h2 className="text-xl font-heading font-extrabold text-slate-900 mb-1">Service Required</h2>
                      <p className="text-sm text-slate-500">Select all that apply.</p>
                    </div>

                    <div className="space-y-3 flex-grow">
                      {ALL_SERVICES.map((svc) => {
                        const Icon = svc.icon;
                        const selected = formData.selectedServices.includes(svc.id);
                        return (
                          <button
                            key={svc.id}
                            type="button"
                            id={`service-${svc.id}`}
                            onClick={() => toggleService(svc.id)}
                            className={`w-full text-left flex items-start gap-3.5 p-4 rounded-2xl border transition-all duration-200 ${
                              selected
                                ? "border-primary bg-emerald-50 shadow-sm"
                                : "border-slate-200 bg-white hover:border-slate-300 hover:shadow-sm"
                            }`}
                          >
                            <div className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5 transition-colors ${selected ? "bg-primary text-white" : "bg-slate-100 text-slate-500"}`}>
                              <Icon className="w-4 h-4" />
                            </div>
                            <div className="min-w-0 flex-1">
                              <div className={`text-sm font-bold leading-snug ${selected ? "text-primary" : "text-slate-800"}`}>{svc.label}</div>
                              <div className="text-[11px] text-slate-500 mt-0.5 leading-snug">{svc.detail}</div>
                            </div>
                            <div className={`ml-auto flex-shrink-0 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${selected ? "bg-primary border-primary" : "border-slate-300"}`}>
                              {selected && <CheckCircle2 className="w-3.5 h-3.5 text-white" />}
                            </div>
                          </button>
                        );
                      })}
                    </div>

                    {errors.services && (
                      <p className="mt-3 flex items-center gap-1.5 text-xs text-red-500">
                        <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                        {errors.services}
                      </p>
                    )}

                    <div className="my-6 border-t border-slate-200" />

                    {/* Direct Contact */}
                    <div className="bg-white rounded-2xl border border-slate-200 p-4 mb-6 space-y-2.5">
                      <div className="text-xs font-bold uppercase tracking-wider text-slate-500">Or Reach Us Directly</div>
                      <a href={`tel:${siteConfig.contact.phone.replace(/\s+/g, "")}`} className="flex items-center gap-2.5 text-sm text-slate-700 hover:text-primary transition-colors">
                        <Phone className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                        {siteConfig.contact.phone}
                      </a>
                      <a
                        href="https://wa.me/919618004530?text=Hello%20EHS%20PRO%20SERVICES%2C%20I%20would%20like%20to%20inquire%20about%20your%20compliance%20services."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2.5 text-sm text-slate-700 hover:text-emerald-700 transition-colors"
                      >
                        <WhatsAppIcon className="w-4 h-4 text-[#25D366] flex-shrink-0" />
                        <span>WhatsApp: +91 96180 04530</span>
                      </a>
                      <a href={`tel:${siteConfig.contact.altPhone.replace(/\s+/g, "")}`} className="flex items-center gap-2.5 text-sm text-slate-700 hover:text-primary transition-colors">
                        <Phone className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                        {siteConfig.contact.altPhone}
                      </a>
                      <a href={`mailto:${siteConfig.contact.email}`} className="flex items-center gap-2.5 text-sm text-slate-700 hover:text-primary transition-colors truncate">
                        <Mail className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                        {siteConfig.contact.email}
                      </a>
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      id="submit-consultation-btn"
                      className="w-full inline-flex items-center justify-center gap-2.5 bg-accent hover:bg-accent-hover disabled:opacity-60 disabled:cursor-not-allowed text-slate-950 text-base font-bold py-4 px-6 rounded-xl shadow-md transition-all duration-200 active:scale-[0.98]"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="w-5 h-5 animate-spin" viewBox="0 0 24 24" fill="none">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                          </svg>
                          Connecting to WhatsApp...
                        </>
                      ) : (
                        <>
                          <WhatsAppIcon className="w-5 h-5 text-emerald-950" />
                          <span>Send Lead to WhatsApp (+91 96180 04530)</span>
                          <ArrowRight className="w-5 h-5" />
                        </>
                      )}
                    </button>

                    <p className="text-center text-[11px] text-slate-400 mt-3 leading-relaxed">
                      Lead details are automatically formatted and routed directly to our Senior Engineer at <strong>+91 96180 04530</strong> on WhatsApp.
                    </p>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </>
  );
}

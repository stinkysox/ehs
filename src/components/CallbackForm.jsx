import React, { useState } from "react";
import { Link } from "react-router-dom";
import { callbackFormContent } from "../data/content";
import { 
  PhoneCall, 
  CheckCircle, 
  Building2, 
  User, 
  Phone, 
  AlertCircle, 
  ShieldAlert, 
  ArrowRight,
  Clock,
  Lock,
  RotateCcw,
  Sparkles
} from "lucide-react";

function WhatsAppIcon({ className = "w-5 h-5" }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M17.472 14.382c-.301-.15-1.78-.878-2.056-.978-.276-.1-.476-.15-.677.15-.2.301-.776.978-.952 1.178-.176.2-.351.226-.652.075-.301-.15-1.272-.469-2.423-1.496-.895-.798-1.5-1.784-1.676-2.085-.176-.301-.019-.464.132-.614.136-.135.301-.351.452-.527.15-.176.2-.301.301-.501.1-.2.05-.376-.025-.526-.075-.15-.677-1.63-.928-2.232-.244-.586-.492-.507-.677-.516-.176-.008-.376-.01-.577-.01-.2 0-.526.075-.802.376-.276.301-1.053 1.028-1.053 2.507 0 1.479 1.078 2.908 1.229 3.109.15.2 2.122 3.24 5.141 4.544.718.31 1.279.496 1.716.635.722.23 1.38.197 1.9.12.58-.087 1.78-.728 2.03-1.43.25-.702.25-1.303.175-1.43-.075-.126-.275-.201-.576-.351zm-5.419 7.424h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export default function CallbackForm() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    selectedServices: ["pcb"], // default selection
    notes: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);
  const [waLink, setWaLink] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Full name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    if (!formData.company.trim()) {
      newErrors.company = "Company / Plant name is required";
    }

    const phoneClean = formData.phone.replace(/[\s\-\(\)]/g, "");
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\+?[0-9]{10,14}$/.test(phoneClean)) {
      newErrors.phone = "Please enter a valid 10-digit phone number (e.g. 9876543210)";
    }

    if (formData.selectedServices.length === 0) {
      newErrors.services = "Please select at least one service needed";
    }

    if (!termsAccepted) {
      newErrors.terms = "Please accept the Terms & Privacy Policy to proceed";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const updated = { ...prev };
        delete updated[field];
        return updated;
      });
    }
  };

  const handleServiceToggle = (serviceId) => {
    setFormData((prev) => {
      const exists = prev.selectedServices.includes(serviceId);
      const updated = exists
        ? prev.selectedServices.filter((id) => id !== serviceId)
        : [...prev.selectedServices, serviceId];
      
      if (errors.services && updated.length > 0) {
        setErrors((prevErr) => {
          const errs = { ...prevErr };
          delete errs.services;
          return errs;
        });
      }
      return { ...prev, selectedServices: updated };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    const servicesList = formData.selectedServices
      .map((id) => callbackFormContent.serviceOptions.find((opt) => opt.id === id)?.label || id)
      .join(", ");

    const waLines = [
      "🚨 *NEW QUICK CALLBACK INQUIRY*",
      "━━━━━━━━━━━━━━━━━━━━━━",
      `👤 *Client Name:* ${formData.name}`,
      `🏢 *Company / Plant:* ${formData.company}`,
      `📞 *Phone Number:* ${formData.phone}`,
      `🛠️ *Services Needed:* ${servicesList}`,
      formData.notes ? `📝 *Requirements:* ${formData.notes}` : null,
      "━━━━━━━━━━━━━━━━━━━━━━",
      "_Lead sent via EHS PRO SERVICES Website_"
    ].filter(Boolean).join("\n");

    const waNumber = "919618004530";
    const waUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(waLines)}`;
    setWaLink(waUrl);

    try {
      window.open(waUrl, "_blank", "noopener,noreferrer");
    } catch (err) {
      console.warn("Popup blocked, fallback provided", err);
    }

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setSubmittedData({ ...formData, servicesList });
    }, 400);
  };

  const handleReset = () => {
    setIsSuccess(false);
    setFormData({
      name: "",
      company: "",
      phone: "",
      selectedServices: ["pcb"],
      notes: "",
    });
    setErrors({});
    setWaLink("");
    setTermsAccepted(false);
  };

  return (
    <section
      id="callback-form"
      className="relative -mt-10 sm:-mt-14 z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-20"
    >
      <div className="bg-white rounded-3xl shadow-soft-xl border border-slate-200/90 overflow-hidden">
        {/* Card Header Strip */}
        <div className="bg-gradient-to-r from-primary-dark via-primary to-primary-light px-6 sm:px-10 py-7 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4 relative overflow-hidden">
          <div className="absolute -right-10 -top-10 w-48 h-48 bg-white/5 rounded-full blur-2xl pointer-events-none" />
          
          <div>
            <div className="inline-flex items-center space-x-2 text-amber-300 text-xs font-bold uppercase tracking-wider mb-1.5">
              <Clock className="w-3.5 h-3.5 text-amber-400" />
              <span>{callbackFormContent.badge}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-white tracking-tight">
              {callbackFormContent.title}
            </h2>
            <p className="text-xs sm:text-sm text-slate-200/90 mt-1 max-w-2xl leading-relaxed">
              {callbackFormContent.subtitle}
            </p>
          </div>

          <div className="flex items-center space-x-2.5 bg-white/10 border border-white/20 px-4 py-2.5 rounded-xl text-xs text-white flex-shrink-0 backdrop-blur-md">
            <Lock className="w-4 h-4 text-emerald-300" />
            <div className="text-left">
              <div className="font-semibold text-white leading-tight">Strict NDA Assured</div>
              <div className="text-[10px] text-slate-300">Confidential statutory filing</div>
            </div>
          </div>
        </div>

        {/* Card Form Body */}
        <div className="p-6 sm:p-10">
          {isSuccess ? (
            /* Success Confirmation State */
            <div className="py-10 text-center space-y-5 animate-fadeIn">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle className="w-10 h-10" />
              </div>
              <div className="max-w-lg mx-auto space-y-2">
                <h3 className="text-2xl font-heading font-extrabold text-slate-900">
                  Lead Forwarded to WhatsApp!
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Thank you, <strong className="text-slate-900">{submittedData?.name}</strong> from{" "}
                  <strong className="text-slate-900">{submittedData?.company}</strong>. Your callback request has been compiled and routed directly to our Senior Engineer on WhatsApp at{" "}
                  <strong className="text-emerald-700 font-bold">+91 96180 04530</strong>.
                </p>
              </div>

              {/* WhatsApp Lead Dispatch Card */}
              <div className="max-w-xl mx-auto bg-emerald-50/90 border border-emerald-200/90 rounded-2xl p-5 text-left shadow-sm">
                <div className="flex items-center gap-2 text-emerald-900 font-bold text-sm mb-1.5">
                  <WhatsAppIcon className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                  <span>WhatsApp Lead Dispatch</span>
                </div>
                <p className="text-xs text-emerald-800 leading-relaxed mb-3.5">
                  Your lead inquiry is prepared for <strong>+91 96180 04530</strong>. If WhatsApp didn't launch automatically on your browser or device, tap below:
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

              {/* Summary of Selected Services */}
              <div className="max-w-xl mx-auto bg-slate-50 border border-slate-200 rounded-2xl p-5 text-left">
                <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2.5">
                  Selected Statutory Requirements:
                </div>
                <div className="flex flex-wrap gap-2">
                  {submittedData?.selectedServices.map((id) => {
                    const matched = callbackFormContent.serviceOptions.find((opt) => opt.id === id);
                    return (
                      <span
                        key={id}
                        className="inline-flex items-center text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200 px-3 py-1.5 rounded-lg"
                      >
                        ✓ {matched?.label || id}
                      </span>
                    );
                  })}
                </div>
              </div>

              <div className="pt-4">
                <button
                  type="button"
                  onClick={handleReset}
                  className="inline-flex items-center space-x-2 text-xs font-bold text-slate-600 hover:text-primary transition-colors py-2 px-4 rounded-lg hover:bg-slate-100"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Submit Another Request</span>
                </button>
              </div>
            </div>
          ) : (
            /* Interactive Consultation Form */
            <form onSubmit={handleSubmit} noValidate className="space-y-7">
              {/* Controlled Input Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                {/* Name */}
                <div>
                  <label
                    htmlFor="client-name"
                    className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5"
                  >
                    Your Name <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <User className="w-4 h-4" />
                    </div>
                    <input
                      id="client-name"
                      type="text"
                      placeholder="e.g. Rajesh Sharma"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      className={`w-full pl-10 pr-3.5 py-3 bg-slate-50/80 text-sm text-slate-900 rounded-xl border transition-all duration-200 ${
                        errors.name
                          ? "border-rose-400 bg-rose-50/30 focus:border-rose-500 focus:ring-1 focus:ring-rose-400"
                          : "border-slate-300 focus:border-primary focus:bg-white focus:ring-1 focus:ring-primary"
                      }`}
                    />
                  </div>
                  {errors.name && (
                    <p className="mt-1.5 text-xs text-rose-600 flex items-center space-x-1">
                      <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                      <span>{errors.name}</span>
                    </p>
                  )}
                </div>

                {/* Company Name */}
                <div>
                  <label
                    htmlFor="company-name"
                    className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5"
                  >
                    Company / Plant Name <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <Building2 className="w-4 h-4" />
                    </div>
                    <input
                      id="company-name"
                      type="text"
                      placeholder="e.g. Apex Pharma Chemical Ltd"
                      value={formData.company}
                      onChange={(e) => handleInputChange("company", e.target.value)}
                      className={`w-full pl-10 pr-3.5 py-3 bg-slate-50/80 text-sm text-slate-900 rounded-xl border transition-all duration-200 ${
                        errors.company
                          ? "border-rose-400 bg-rose-50/30 focus:border-rose-500 focus:ring-1 focus:ring-rose-400"
                          : "border-slate-300 focus:border-primary focus:bg-white focus:ring-1 focus:ring-primary"
                      }`}
                    />
                  </div>
                  {errors.company && (
                    <p className="mt-1.5 text-xs text-rose-600 flex items-center space-x-1">
                      <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                      <span>{errors.company}</span>
                    </p>
                  )}
                </div>

                {/* Phone Number */}
                <div>
                  <label
                    htmlFor="phone-number"
                    className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5"
                  >
                    Direct Phone Number <span className="text-rose-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                      <Phone className="w-4 h-4" />
                    </div>
                    <input
                      id="phone-number"
                      type="tel"
                      placeholder="e.g. +91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      className={`w-full pl-10 pr-3.5 py-3 bg-slate-50/80 text-sm text-slate-900 rounded-xl border transition-all duration-200 ${
                        errors.phone
                          ? "border-rose-400 bg-rose-50/30 focus:border-rose-500 focus:ring-1 focus:ring-rose-400"
                          : "border-slate-300 focus:border-primary focus:bg-white focus:ring-1 focus:ring-primary"
                      }`}
                    />
                  </div>
                  {errors.phone && (
                    <p className="mt-1.5 text-xs text-rose-600 flex items-center space-x-1">
                      <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                      <span>{errors.phone}</span>
                    </p>
                  )}
                </div>
              </div>

              {/* Service Selection Checkbox Group */}
              <div>
                <div className="flex items-center justify-between mb-2.5">
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                    Select Service Needed <span className="text-rose-500">*</span>
                    <span className="text-slate-400 font-normal lowercase ml-1.5">(multi-select allowed)</span>
                  </label>
                  {errors.services && (
                    <span className="text-xs text-rose-600 flex items-center space-x-1 font-medium">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.services}</span>
                    </span>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
                  {callbackFormContent.serviceOptions.map((opt) => {
                    const isChecked = formData.selectedServices.includes(opt.id);
                    return (
                      <label
                        key={opt.id}
                        className={`flex items-start p-3.5 rounded-2xl border cursor-pointer transition-all duration-200 select-none ${
                          isChecked
                            ? "bg-emerald-50/80 border-primary text-slate-900 shadow-soft-sm ring-2 ring-primary/25"
                            : "bg-slate-50/60 border-slate-200 hover:border-slate-300 text-slate-700 hover:bg-slate-50"
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={isChecked}
                          onChange={() => handleServiceToggle(opt.id)}
                          className="mt-0.5 h-4 w-4 text-primary rounded border-slate-300 focus:ring-primary cursor-pointer accent-primary"
                        />
                        <div className="ml-3 text-left">
                          <span className="block text-xs font-bold text-slate-900 leading-snug">
                            {opt.label}
                          </span>
                          <span className="block text-[11px] text-slate-500 leading-tight mt-0.5">
                            {opt.detail}
                          </span>
                        </div>
                      </label>
                    );
                  })}
                </div>
              </div>

              {/* Terms & Privacy Consent + Submit Strip */}
              <div className="pt-2 space-y-3">
                {/* Consent Checkbox */}
                <div className="flex items-start gap-3">
                  <input
                    id="callback-terms"
                    type="checkbox"
                    checked={termsAccepted}
                    onChange={(e) => {
                      setTermsAccepted(e.target.checked);
                      if (errors.terms) setErrors((prev) => { const u = { ...prev }; delete u.terms; return u; });
                    }}
                    className="mt-0.5 h-4 w-4 rounded border-slate-300 text-primary accent-primary cursor-pointer flex-shrink-0"
                  />
                  <label htmlFor="callback-terms" className="text-[11px] text-slate-600 leading-relaxed cursor-pointer">
                    I agree to the{" "}
                    <Link to="/terms" target="_blank" rel="noopener noreferrer" className="text-emerald-700 hover:underline font-semibold">Terms of Service</Link>
                    {" "}&amp;{" "}
                    <Link to="/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-emerald-700 hover:underline font-semibold">Privacy Policy</Link>
                    . I consent to my inquiry details being routed to EHS PRO SERVICES via WhatsApp.
                  </label>
                </div>
                {errors.terms && (
                  <p className="text-xs text-rose-600 flex items-center gap-1.5">
                    <AlertCircle className="w-3.5 h-3.5 flex-shrink-0" />
                    {errors.terms}
                  </p>
                )}

                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                  <p className="text-[11px] text-slate-500 flex items-center space-x-2 order-2 sm:order-1">
                    <ShieldAlert className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>Lead routed directly to +91 96180 04530 · NDA protected</span>
                  </p>

                  <button
                    type="submit"
                    disabled={isSubmitting || !termsAccepted}
                    className="w-full sm:w-auto inline-flex items-center justify-center space-x-2.5 bg-accent hover:bg-accent-hover text-slate-950 text-sm font-bold px-8 py-3.5 rounded-xl shadow-soft-md hover:shadow-accent-glow transition-all duration-200 transform hover:-translate-y-0.5 disabled:opacity-75 disabled:cursor-not-allowed order-1 sm:order-2"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        <span>Connecting WhatsApp...</span>
                      </>
                    ) : (
                      <>
                        <WhatsAppIcon className="w-4 h-4 text-emerald-950" />
                        <span>Send Lead to WhatsApp (+91 96180 04530)</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

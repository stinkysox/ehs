import React, { useState } from "react";
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

    /* ==========================================================================
       API INTEGRATION HOOK:
       Connect directly to your backend or CRM API endpoint:
       ========================================================================== */
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setSubmittedData({ ...formData });
    }, 700);
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
                  {callbackFormContent.successHeading}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Thank you, <strong className="text-slate-900">{submittedData?.name}</strong> from{" "}
                  <strong className="text-slate-900">{submittedData?.company}</strong>. Our Senior Compliance Engineer will review your plant profile and call you on{" "}
                  <strong className="text-primary font-bold">{submittedData?.phone}</strong> within 30 minutes.
                </p>
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

              {/* Submit & Disclaimer Strip */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-[11px] text-slate-500 flex items-center space-x-2 order-2 sm:order-1">
                  <ShieldAlert className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                  <span>{callbackFormContent.privacyNote}</span>
                </p>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center space-x-2.5 bg-accent hover:bg-accent-hover text-slate-950 text-sm font-bold px-9 py-3.5 rounded-xl shadow-soft-md hover:shadow-accent-glow transition-all duration-200 transform hover:-translate-y-0.5 disabled:opacity-75 disabled:cursor-not-allowed order-1 sm:order-2"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>
                    {isSubmitting
                      ? callbackFormContent.submittingText
                      : callbackFormContent.submitButtonText}
                  </span>
                  {!isSubmitting && <ArrowRight className="w-4 h-4" />}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

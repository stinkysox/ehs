/**
 * ==============================================================================
 * EHS PRO SERVICES - CENTRAL CONTENT CONFIGURATION
 * ==============================================================================
 * All marketing copy, headlines, descriptions, features, contact information,
 * and stock image links are centralized here.
 * 
 * To update text or swap photography, edit the respective fields below.
 * ==============================================================================
 */

export const siteConfig = {
  brand: {
    name: "EHS PRO SERVICES",
    tagline: "Protecting Environment. Ensuring Health & Safety.",
    shortDescription: "Industrial EHS compliance, turnkey fire safety engineering, water treatment plant engineering, and certified environmental laboratory testing — serving factories across Andhra Pradesh.",
    gstin: "37CDQPJ6561C1ZB",
  },
  
  navLinks: [
    { label: "Home", href: "/" },
    { label: "Lab Testing", href: "/lab-testing" },
    { label: "PCB Compliance", href: "/pcb-compliance" },
    { label: "Fire & PESO", href: "/fire-protection" },
    { label: "Water Engineering", href: "/water-engineering" },
    { label: "Book Consultation", href: "/book-consultation" },
  ],

  contact: {
    email: "ehsproservices23@gmail.com",
    phone: "+91 96180 04530",
    altPhone: "+91 96032 90270",
    whatsapp: "919618004530",
    whatsappDisplay: "+91 96180 04530",
    address: "Near Sub Registrar Office, Amaravathi(P)",
    cityStateZip: "Andhra Pradesh - 522020, India",
    workingHours: "Mon - Sat: 08:30 AM - 07:00 PM",
    emergencySupport: "24/7 Rapid Response for Statutory Audits & Inspections",
  },

  socials: [
    { name: "LinkedIn", href: "#" },
    { name: "Twitter", href: "#" },
    { name: "YouTube", href: "#" },
  ],
};

/**
 * ==============================================================================
 * VERIFIED PUBLIC STOCK PHOTOGRAPHY (Unsplash Live URLs)
 * ==============================================================================
 * 100% verified HTTP 200 URLs. Every section and every card has real photography.
 * To use your own photos, swap the URLs below.
 * ==============================================================================
 */
export const siteImages = {
  // Hero Background: Twilight heavy petrochemical manufacturing plant with lit piping
  heroBackground: {
    url: "/images/hero-plant.jpg",
    alt: "Heavy manufacturing refinery with industrial chemical piping and processing towers at dusk",
    caption: "Heavy Industrial Turnkey Infrastructure",
  },

  // Environmental Lab Cards Photography
  lab: {
    hero: {
      url: "/images/lab-hero.jpg",
      alt: "Certified analytical laboratory testing equipment with titration glassware",
      caption: "ISO/IEC 17025 Accredited Laboratory Facility",
    },
    drinkingWater: {
      url: "/images/lab-water.jpg",
      alt: "Laboratory beaker analyzing crystal clear potable drinking water",
      caption: "Potable Water Quality Testing (IS 10500)",
    },
    effluent: {
      url: "/images/lab-effluent.jpg",
      alt: "Industrial wastewater chemical assay and turbidity testing vials",
      caption: "BOD/COD Heavy Metal Effluent Testing",
    },
    airQuality: {
      url: "/images/lab-air.jpg",
      alt: "Industrial factory chimney stack releasing flue gas into sky during emission audit",
      caption: "Isokinetic Stack & Ambient Air Sampling",
    },
    noiseSurvey: {
      url: "/images/lab-noise.jpg",
      alt: "Industrial manufacturing plant floor with high-decibel motors and production machinery",
      caption: "Factory Act Decibel Mapping & Noise Surveys",
    },
    soilSludge: {
      url: "/images/lab-soil.jpg",
      alt: "Soil testing sample petri dish and earth sediment analysis in lab",
      caption: "ETP Sludge Categorization & TCLP Analysis",
    },
  },

  // Pollution Control Board Cards Photography
  pcb: {
    cfe: {
      url: "/images/pcb-cfe.jpg",
      alt: "Greenfield industrial construction site and structural steel framework",
      caption: "Consent for Establishment (CFE)",
    },
    cfo: {
      url: "/images/pcb-cfo.jpg",
      alt: "Active manufacturing facility operational line with robotic and automated machinery",
      caption: "Consent for Operation (CFO)",
    },
    annualCompliance: {
      url: "/images/pcb-audit.jpg",
      alt: "Environmental compliance engineer with digital tablet auditing factory compliance registers",
      caption: "Annual Environmental Audits & Form-V Filings",
    },
  },

  // Fire Protection & PESO Cards Photography
  fire: {
    hydrantGrid: {
      url: "/images/fire-hydrant.jpg",
      alt: "Heavy duty red industrial fire hydrant with high-pressure pressurized valve manifold",
      caption: "Turnkey Fire Hydrant Systems & Ring Mains",
    },
    alarmsPanels: {
      url: "/images/fire-alarm.jpg",
      alt: "Addressable industrial safety control console and electrical emergency panels",
      caption: "Addressable Fire Alarm & Smoke Detection",
    },
    pesoStorage: {
      url: "/images/fire-peso.jpg",
      alt: "Industrial bulk petroleum and chemical fuel storage vessels with safety valves",
      caption: "PESO Statutory Approvals & Fuel Clearances",
    },
    equipment: {
      url: "/images/fire-equipment.jpg",
      alt: "Industrial fire safety extinguishers, pressure regulators, and sprinkler risers",
      caption: "Suppression Networks & Code Auditing",
    },
  },

  // Water Engineering (ETP / STP) Photography
  water: {
    etpPlant: {
      url: "/images/water-etp.jpg",
      alt: "Effluent treatment plant circular aeration clarifier tank for manufacturing chemical waste",
      caption: "Industrial Effluent Treatment Plants (ETP)",
    },
    stpPlant: {
      url: "/images/water-stp.jpg",
      alt: "Clear treated water reservoir flowing from biological membrane bioreactor STP",
      caption: "Sewage Treatment Plants (STP) & Water Reuse",
    },
    lifecycle: {
      url: "/images/water-pumps.jpg",
      alt: "Industrial high-capacity stainless steel centrifugal pumps and valve piping gallery",
      caption: "Comprehensive Turnkey Supply, Setup & O&M",
    },
  },

  // Why Choose Us Photography
  whyUs: {
    team: {
      url: "/images/why-team.jpg",
      alt: "Senior industrial engineering consultants reviewing technical plant blueprints",
      caption: "Single-Window Engineering Accountability",
    },
    standards: {
      url: "/images/why-standards.jpg",
      alt: "Precision pipe fabrication and industrial mechanical engineering installation",
      caption: "Absolute Code Mastery & NBC Alignment",
    },
    heavyPlant: {
      url: "/images/why-plant.jpg",
      alt: "Heavy industrial manufacturing plant with complex piping and machinery",
      caption: "Elite Engineering Standards",
    },
  },

  // Alias for backward compatibility
  waterClarifier: {
    url: "/images/water-etp.jpg",
    alt: "Effluent treatment plant circular aeration clarifier tank for manufacturing chemical waste",
    caption: "Industrial Effluent Treatment Plants (ETP)",
  },
};

/**
 * ==============================================================================
 * SECTION 1: HERO COPY & METRICS
 * ==============================================================================
 */
export const heroContent = {
  badge: "Turnkey Industrial Compliance • Engineering • Laboratory",
  headline: "Complete Industrial Turnkey Solutions for EHS Compliance, Engineering & Testing",
  subheadline: "Your trusted single-window partner for Pollution Control Board consents, Fire Protection infrastructure, Water treatment setups, and certified Environmental Laboratory testing.",
  primaryCtaText: "Book a Consultation Now",
  secondaryCtaText: "Explore Engineering Services",
  stats: [
    { value: "100%", label: "Regulatory Clearance", sub: "Strict PCB & NBC adherence" },
    { value: "650+", label: "Plants Commissioned", sub: "Heavy chemical & manufacturing" },
    { value: "12,000+", label: "Certified Lab Samples", sub: "NABL / CPCB protocol testing" },
    { value: "24/7", label: "Statutory Emergency Support", sub: "Rapid audit defense" },
  ],
};

/**
 * ==============================================================================
 * SECTION 2: CALLBACK FORM OPTIONS
 * ==============================================================================
 */
export const callbackFormContent = {
  badge: "Priority Statutory Assessment",
  title: "Get a Free Expert Call Back",
  subtitle: "Connect directly with our Lead EHS Compliance Engineers within 30 minutes for a preliminary statutory assessment and customized turnkey roadmap.",
  serviceOptions: [
    {
      id: "pcb",
      label: "Pollution Control Board",
      detail: "CFE / CFO / Annual Compliance",
    },
    {
      id: "fire",
      label: "Fire Infrastructure",
      detail: "NOC / Hydrants / Alarms / PA Systems",
    },
    {
      id: "peso",
      label: "PESO NOC",
      detail: "Explosives & Fuel Storage Clearance",
    },
    {
      id: "water",
      label: "Water Engineering",
      detail: "ETP / STP Plant Supply & Installation",
    },
    {
      id: "lab",
      label: "Environmental Lab Testing",
      detail: "Water / Air / Noise / Soil",
    },
  ],
  submitButtonText: "Submit Request",
  submittingText: "Dispatching Request...",
  successHeading: "Consultation Request Dispatched!",
  successMessage: "Our Senior EHS Compliance Engineer will review your facility requirements and call you back on your registered phone number shortly.",
  privacyNote: "Strict corporate confidentiality guaranteed. Your plant layout and compliance status are never shared with third parties.",
};

/**
 * ==============================================================================
 * SECTION 3: ENVIRONMENTAL LABORATORY & TESTING SERVICES
 * ==============================================================================
 */
export const labServicesContent = {
  badge: "NABL & CPCB Approved Protocols",
  title: "Environmental Laboratory & Testing Services",
  intro: "Accurate testing is the absolute foundation of corporate environmental compliance. Our laboratory operations help your facility monitor emissions, verify waste treatment efficiency, and generate authorized analytical reports for audits.",
  services: [
    {
      id: "drinking-water",
      title: "Drinking Water Quality Analysis",
      description: "Complete chemical, physical, and microbiological profiles to ensure pure drinking water for employees.",
      image: siteImages.lab.drinkingWater,
      parameters: ["IS 10500 Standards", "TDS, Hardness, pH", "Pathogenic E. Coli & Coliforms", "Trace Heavy Metals"],
      deliverable: "Authorized potable water certificate valid for Factory Inspectorate checks",
      tag: "Employee Safety",
    },
    {
      id: "effluent-testing",
      title: "Effluent & Wastewater Testing",
      description: "Precision analysis of BOD, COD, heavy metals, suspended solids, and pH levels.",
      image: siteImages.lab.effluent,
      parameters: ["BOD 3-day at 27°C", "COD Dichromate Digestion", "TSS & Oil / Grease", "Hexavalent Chromium & Lead"],
      deliverable: "State PCB monthly compliance log & discharge verification",
      tag: "ETP Efficiency",
    },
    {
      id: "air-monitoring",
      title: "Ambient & Stack Air Quality Monitoring",
      description: "Sampling of chimney/stack emissions and ambient air for PM2.5, PM10, SOx, and NOx.",
      image: siteImages.lab.airQuality,
      parameters: ["Stack Isokinetic Sampling", "PM2.5 & PM10 Dust Levels", "SO2 & NOx Flue Gases", "Flue Gas Velocity & Temp"],
      deliverable: "Authorized isokinetic emission survey for CPCB online portal",
      tag: "Emission Audits",
    },
    {
      id: "noise-surveys",
      title: "Industrial Noise Level Surveys",
      description: "Structural noise charting across operational bays for compliance with factory acts.",
      image: siteImages.lab.noiseSurvey,
      parameters: ["Leq (Equivalent Sound Level)", "Day/Night Ambient Mapping", "High-Decibel Bay Zoning", "Audiometric Safety Baseline"],
      deliverable: "Precision decibel contour map and auditory hazard safety zoning",
      tag: "Factory Act Norms",
    },
    {
      id: "soil-sludge",
      title: "Soil & Sludge Evaluation",
      description: "Soil testing and chemical categorization of ETP sludge for non-hazardous classification.",
      image: siteImages.lab.soilSludge,
      parameters: ["TCLP (Leachate Testing)", "Organic Carbon & Moisture", "Heavy Metal Leachability", "Hazardous Rule Category"],
      deliverable: "State PCB authorized sludge toxicity classification certificate",
      tag: "Waste Clearance",
    },
  ],
};

/**
 * ==============================================================================
 * SECTION 4: POLLUTION CONTROL BOARD LIAISON & COMPLIANCE
 * ==============================================================================
 */
export const pollutionControlContent = {
  badge: "State & Central PCB Representation",
  title: "Pollution Control Board Liaison & Compliance",
  intro: "We manage regulatory interface complexities so your team can focus entirely on core business outputs. Eliminate compliance delays and penalty notices with our professional documentation handling.",
  stages: [
    {
      step: "01",
      code: "CFE",
      title: "Consent for Establishment",
      description: "Technical application filing, site layout approvals, and pollution hazard profiling for greenfield factories.",
      image: siteImages.pcb.cfe,
      highlights: [
        "Pre-construction industrial categorization (Red / Orange / Green)",
        "Raw material balance & mass flow engineering",
        "Environmental Management Plan (EMP) submission",
        "Zoning clearance and local body NOC facilitation",
      ],
      tag: "Greenfield & Expansions",
    },
    {
      step: "02",
      code: "CFO",
      title: "Consent for Operation",
      description: "Site verification audits, technical filing compliance, and legal representation for active manufacturing authorization.",
      image: siteImages.pcb.cfo,
      highlights: [
        "Post-commissioning pollution control efficiency proofs",
        "Stack height & sampling port structural approvals",
        "Hazardous waste authorization under Rule 6",
        "Full representation before PCB Member Secretaries",
      ],
      tag: "Commercial Production Launch",
    },
    {
      step: "03",
      code: "ACC",
      title: "Regular Annual Compliance",
      description: "Continuous environmental dashboard maintenance, annual audit compilation, and representation before central/state boards.",
      image: siteImages.pcb.annualCompliance,
      highlights: [
        "Form-V Environmental Statement submission",
        "Hazardous waste annual returns (Form-4)",
        "E-waste & Plastic waste EPR statutory documentation",
        "Surprise inspection defense & show-cause reply drafting",
      ],
      tag: "Ongoing Plant Operation",
    },
  ],
};

/**
 * ==============================================================================
 * SECTION 5: TURNKEY FIRE PROTECTION INFRASTRUCTURE & PESO NOC
 * ==============================================================================
 */
export const fireProtectionContent = {
  badge: "NBC Part IV & PESO Certified",
  title: "Turnkey Fire Protection Infrastructure & PESO NOC",
  intro: "Protect your staff and physical industrial assets with heavily armored, code-compliant structural fire defense layouts built to national fire guidelines.",
  cards: [
    {
      id: "statutory-clearances",
      badgeText: "Statutory Defense",
      category: "Statutory Clearances",
      title: "Municipal Fire NOC & PESO Approvals",
      description: "Municipal Fire NOC renewals and PESO approvals (Petroleum and Explosives Safety Organization) for chemical warehouses and bulk fuel setups.",
      image: siteImages.fire.pesoStorage,
      points: [
        "Municipal Fire NOC new issuances, expansions, and periodic renewals",
        "PESO approvals for chemical warehouses and bulk fuel setups",
        "Class A, B, and C petroleum bulk storage farm layout certifications",
        "Explosive magazine and solvent storage vessel clearances",
      ],
    },
    {
      id: "hydrant-infrastructure",
      badgeText: "Pressurized Defense",
      category: "Supply & Installation",
      title: "Fire Hydrant Networks & Ring Mains",
      description: "End-to-end deployment of heavy-gauge Fire Hydrant Systems, jockey pump rooms, and code-compliant perimeter ring loops.",
      image: siteImages.fire.hydrantGrid,
      points: [
        "Class C Heavy seamless carbon steel piping fabrication",
        "Multi-stage electric, diesel engine & jockey pump automation",
        "Internal landing valves, hose reels & instantaneous branch pipes",
        "Hydrostatically tested ring mains verified at 1.5x working pressure",
      ],
    },
    {
      id: "detection-alarms",
      badgeText: "Early Warning",
      category: "Supply & Installation",
      title: "Addressable Alarms, Smoke & PA Systems",
      description: "Addressable Fire Alarm Systems, smoke networks, and Public Address (PA) Systems integrated with emergency evacuation.",
      image: siteImages.fire.alarmsPanels,
      points: [
        "Microprocessor-based addressable Fire Alarm control panels",
        "Multi-criteria optical smoke and thermal detectors",
        "Zonal Public Address (PA) emergency evacuation audio consoles",
        "Integration with automatic deluge foam pourers & sprinkler valves",
      ],
    },
  ],
  specs: [
    { label: "Design Codes", value: "NBC 2016 Part IV, NFPA 13/20/72, TAC" },
    { label: "Piping Rigor", value: "Heavy Seamless ERW Carbon Steel" },
    { label: "Pressure Testing", value: "Hydrostatic test at 1.5x operating pressure" },
    { label: "Clearance Guarantee", value: "End-to-end liaison through final NOC issuance" },
  ],
};

/**
 * ==============================================================================
 * SECTION 6: ETP & STP PLANT ENGINEERING SOLUTIONS
 * ==============================================================================
 */
export const waterEngineeringContent = {
  badge: "Zero Liquid Discharge (ZLD) Engineering",
  title: "ETP & STP Plant Engineering Solutions",
  intro: "Achieve targeted environmental standards and execute zero liquid discharge (ZLD) milestones with custom-engineered water purification networks.",
  solutions: [
    {
      id: "etp",
      type: "Industrial Waste",
      title: "Effluent Treatment Plants (ETP)",
      description: "Chemical neutralizers, clarifying systems, and biological reactors for manufacturing waste.",
      image: siteImages.water.etpPlant,
      features: [
        "Chemical flash mixers, flocculators, and primary lamella clarifiers",
        "Dissolved Air Flotation (DAF) for oil, grease, and suspended solids",
        "Extended aeration MBBR and SBR aerobic digestion reactors",
        "Tertiary filtration: Dual Media & Activated Carbon columns",
      ],
      flowSteps: ["Primary Equalization", "Chemical Coagulation", "Biological Digestion", "Tertiary Filtration"],
    },
    {
      id: "stp",
      type: "Sanitary & Graywater",
      title: "Sewage Treatment Plants (STP)",
      description: "Infrastructure for commercial/factory domestic graywater, minimizing biological organic loads.",
      image: siteImages.water.stpPlant,
      features: [
        "Membrane Bioreactor (MBR) for ultra-clear recycled toilet/cooling water",
        "Moving Bed Biofilm Reactor (MBBR) for low footprint and zero odor",
        "Sequential Batch Reactor (SBR) automation with PLC/SCADA control",
        "Automatic chlorine dosing, ozonation, and inline UV sterilizers",
      ],
      flowSteps: ["Bar Screening", "Anoxic/Aerobic Treatment", "Clarification", "UV Disinfection"],
    },
    {
      id: "lifecycle",
      type: "Turnkey Execution",
      title: "Comprehensive Project Lifecycle",
      description: "Site mapping, plant design, supply, installation, and ongoing O&M contracts.",
      image: siteImages.water.lifecycle,
      features: [
        "Peak flow hydraulic surveys & chemical load characterization",
        "P&ID schematic blueprints, civil engineering & structural design",
        "Heavy-duty chemical dosing pump skids and submersible pumps",
        "Annual Operation & Maintenance (O&M) with dedicated plant operators",
      ],
      flowSteps: ["Site Assessment", "Process Blueprinting", "Fabrication & Setup", "Lifetime O&M Operations"],
    },
  ],
};

/**
 * ==============================================================================
 * SECTION 7: WHY CHOOSE EHS PRO SERVICES?
 * ==============================================================================
 */
export const whyChooseUsContent = {
  badge: "Engineering Precision & Code Assurance",
  title: "Why Choose EHS PRO SERVICES?",
  subtitle: "We combine deep statutory regulatory mastery with uncompromising industrial engineering rigor to provide complete peace of mind for plant managers.",
  features: [
    {
      id: "single-window",
      title: "Single-Window System",
      description: "Skip multiple vendors; we handle everything from lab sampling to firefighting grid construction to government NOC clearances.",
      image: siteImages.whyUs.team,
      benefit: "One dedicated project manager, zero inter-vendor friction, unified accountability.",
      points: [
        "Direct interface with regulatory boards and municipal fire offices",
        "Eliminate finger-pointing between equipment vendors and liaison agents",
        "Unified compliance timeline and guaranteed handover dates",
      ],
    },
    {
      id: "code-mastery",
      title: "Absolute Code Mastery",
      description: "Every blueprint, installation, and analysis aligns with state pollution control norms, National Building Codes (NBC), and chemical safety parameters.",
      image: siteImages.whyUs.standards,
      benefit: "100% statutory clearance guarantee with legal representation before regulatory authorities.",
      points: [
        "Direct alignment with NBC 2016 Part IV, NFPA standards, and PESO norms",
        "Continuous regulatory tracking for amended CPCB/SPCB discharge thresholds",
        "Pre-audit mock inspections included with every compliance contract",
      ],
    },
    {
      id: "engineering-rigor",
      title: "Elite Engineering Standards",
      description: "Certified, heavy-gauge piping, high-efficiency treatment pumps, and industrial panels built for intense plant life cycles.",
      image: siteImages.whyUs.heavyPlant,
      benefit: "Industrial-grade assets that exceed minimum code specifications and reduce long-term OPEX.",
      points: [
        "Certified Class C heavy carbon steel and 316L stainless steel fabrication",
        "Energy-efficient IE3/IE4 motors and premium chemical dosing skids",
        "Full warranty coverage and 24/7 emergency response protocols",
      ],
    },
  ],
  commitments: [
    "Over 15 years of factory compliance track record",
    "Zero penalty notices for active client plants",
    "Pre-audit mock inspections included with every contract",
    "Emergency response protocols for statutory inspections",
  ],
};

/**
 * ==============================================================================
 * SECTION 8: FOOTER CONTENT
 * ==============================================================================
 */
export const footerContent = {
  tagline: "Protecting Environment. Ensuring Health & Safety.",
  missionStatement: "Empowering Indian industrial manufacturers and processing plants with turnkey environmental compliance, structural fire engineering, wastewater purification, and analytical laboratory accuracy.",
  quickLinks: [
    { label: "Environmental Lab Testing", href: "/lab-testing" },
    { label: "Pollution Control Board Liaison", href: "/pcb-compliance" },
    { label: "Fire Protection & PESO NOC", href: "/fire-protection" },
    { label: "ETP & STP Water Engineering", href: "/water-engineering" },
    { label: "Why Choose Us", href: "/" },
    { label: "Request a Free Consultation", href: "/book-consultation" },
  ],
  legalLinks: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Statutory Disclaimer", href: "/disclaimer" },
  ],
};

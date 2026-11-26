export interface ProductModule {
  title: string;
  description: string;
  bullets: string[];
}

export interface ProductFaq {
  question: string;
  answer: string;
}

export interface Product {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  badge: string;
  targetAudience: string;
  iconName: "BookOpen" | "Laptop" | "Users" | "Zap";
  monthlyPrice: number;
  yearlyPrice: number;
  overview: string;
  whatsappMessage: string;
  highlights: string[];
  modules: ProductModule[];
  benefits: { title: string; desc: string }[];
  faqs: ProductFaq[];
  metaTitle: string;
  metaDescription: string;
}

export const productsData: Product[] = [
  {
    id: "prod-library",
    slug: "library-management",
    title: "Smart Library Management System",
    tagline: "Seat booking, shift management, fee dues & automated WhatsApp reminders for reading rooms.",
    badge: "Most Popular",
    targetAudience: "Self-study reading rooms, coaching libraries & private study halls",
    iconName: "BookOpen",
    monthlyPrice: 149,
    yearlyPrice: 1499,
    overview:
      "A complete cloud operating system designed specifically for private study library owners and reading room managers. Manage morning, evening, and 24/7 seat reservations, track student fees, collect payments via UPI, and send automatic WhatsApp reminder alerts before due dates.",
    whatsappMessage:
      "Hi DEVGRONIX, I want to book a free live demo for the Smart Library Management System (₹149/mo). Please share available slots.",
    highlights: [
      "Dynamic visual seat map with real-time seat availability",
      "Shift-wise seat allocation (Morning, Evening, Night & 24x7)",
      "Automated WhatsApp fee dues reminder notifications",
      "Digital student admission form with photo & ID upload",
      "Locker allocation & security deposit tracking",
      "Instant daily & monthly collection reports (PDF / Excel)",
      "Zero manual register work — access from mobile & laptop",
      "100% cloud secure with automated daily backup",
    ],
    modules: [
      {
        title: "Visual Seat & Shift Grid",
        description: "Interactive visual map of your library seats with color-coded shift status.",
        bullets: [
          "Color-coded seats (Green = vacant, Red = occupied, Yellow = due renewal)",
          "Manage multiple shifts: Morning (6 AM - 2 PM), Evening (2 PM - 10 PM), Full Day, or Custom",
          "One-click seat swap and shift upgrade without data re-entry",
          "Reserved desk locks for long-term premium students",
        ],
      },
      {
        title: "Student Admissions & KYC",
        description: "Paperless digital onboarding for all student members.",
        bullets: [
          "Digital student profile with contact, address and ID proof",
          "Emergency guardian contact and exam preparation stream tracking",
          "Automated digital student ID card generator with QR code",
          "Attendance log history per student",
        ],
      },
      {
        title: "Automated Fee Engine & WhatsApp Alerts",
        description: "Never lose money to forgotten fee dues or late student renewals.",
        bullets: [
          "Automated payment reminders sent 3 days before and on due date",
          "Integrated UPI QR code link in WhatsApp message for instant payment",
          "Digital payment receipts sent directly to student WhatsApp",
          "Partial payment, discount coupon, and security deposit management",
        ],
      },
      {
        title: "Locker & Amenity Management",
        description: "Monetize and monitor lockers, WiFi access, and personal desk amenities.",
        bullets: [
          "Numbered locker allocation linked directly to student ID",
          "Refundable security deposit ledger and handover checklist",
          "Prevent double-booking of premium locker units",
          "Automated locker release alert upon subscription expiry",
        ],
      },
      {
        title: "Financial Reports & Daily Expense Tally",
        description: "Know your exact daily profit, fee collection, and operating overheads.",
        bullets: [
          "Daily Cash vs Online UPI collection summary",
          "Electricity, rent, water, and maintenance expense ledger",
          "Monthly revenue trend and renewal retention rate",
          "One-click export to CSV / Excel for accounting",
        ],
      },
      {
        title: "Staff & Branch Access Control",
        description: "Run multiple library branches with designated receptionist logins.",
        bullets: [
          "Role-based permissions (Receptionist can collect fees, but cannot delete records)",
          "Multi-branch switching from a single owner super-admin portal",
          "Activity audit log tracking every receipt generation and seat change",
          "Works smoothly on any smartphone, tablet, or PC browser",
        ],
      },
    ],
    benefits: [
      {
        title: "Save 3+ Hours Daily",
        desc: "Eliminate paper registers, manual receipt books, and endless WhatsApp follow-up calls.",
      },
      {
        title: "100% Fee Collection",
        desc: "Automated reminders ensure students pay on time before their seat gets released.",
      },
      {
        title: "Zero Double-Booking",
        desc: "Color-coded seat availability grid prevents embarrassing seat clash issues forever.",
      },
      {
        title: "Cloud Backup",
        desc: "Even if your phone is lost or damaged, your entire student data remains completely safe.",
      },
    ],
    faqs: [
      {
        question: "How does the free live demo work?",
        answer:
          "When you click 'Book Free Live Demo', our specialist will connect with you on WhatsApp to schedule a quick 10-15 minute live screen share or video demo showing how easily it fits your library.",
      },
      {
        question: "Is there any software installation required?",
        answer:
          "No installation needed! It is a modern cloud web app that works seamlessly in Google Chrome or Safari on any mobile phone, tablet, laptop, or desktop.",
      },
      {
        question: "Can I manage multiple shifts for the same seat?",
        answer:
          "Yes! The system is built specifically for shift-based libraries. You can allocate Seat #12 to Student A in the morning shift and to Student B in the evening shift without any conflict.",
      },
      {
        question: "Are WhatsApp messages sent from my number or DEVGRONIX?",
        answer:
          "The system supports quick 1-click WhatsApp web/app dispatch directly using your own WhatsApp, or automated system alerts with your library name.",
      },
    ],
    metaTitle: "Smart Library Management Software | ₹149/mo | DEVGRONIX",
    metaDescription:
      "Automate your study library and reading room. Visual seat map, shift management, automated WhatsApp fee dues reminders, and locker tracking for ₹149/mo.",
  },
  {
    id: "prod-ledger",
    slug: "ledger-management",
    title: "Digital Ledger & Khata Book",
    tagline: "Track customer credit, send 1-click WhatsApp balance alerts, and collect payments faster.",
    badge: "Lowest Price in India",
    targetAudience: "Retail shops, kirana stores, wholesalers, distributors, service vendors & freelancers",
    iconName: "Laptop",
    monthlyPrice: 99,
    yearlyPrice: 999,
    overview:
      "Replace traditional red Khata registers and clunky paperwork with DEVGRONIX Digital Ledger. Keep an accurate real-time record of all customer and supplier credits (Udhar & Jama), send automated WhatsApp payment reminders with UPI pay links, and collect your money 3x faster.",
    whatsappMessage:
      "Hi DEVGRONIX, I want to book a free live demo for the Digital Ledger & Khata Book Software (₹99/mo). Please share available slots.",
    highlights: [
      "100% digital Udhar / Jama balance tracker for customers & suppliers",
      "1-Click WhatsApp payment reminders with UPI QR code link",
      "Instant PDF ledger statement export (Share on WhatsApp or print)",
      "Daily Cash In / Cash Out balance calculation",
      "Multi-staff counter permission control (Restrict sensitive totals)",
      "100% Cloud backup — your accounts are safe even if phone is lost",
      "Offline-capable entry with auto-sync when online",
      "Zero hidden transaction charges or commission cuts",
    ],
    modules: [
      {
        title: "Customer Credit (Udhar) Tracking",
        description: "Maintain accurate, dispute-free credit accounts for every buyer.",
        bullets: [
          "Add customer in seconds with phone number and name",
          "Enter Udhar (Given) and Jama (Received) with bill notes and photo attachments",
          "Real-time outstanding balance calculation updated instantly",
          "Set credit limits per customer to prevent bad debt exposure",
        ],
      },
      {
        title: "WhatsApp Payment Reminders",
        description: "Get paid on time without making uncomfortable phone calls.",
        bullets: [
          "Professional pre-formatted WhatsApp reminder messages in Hindi, English & Hinglish",
          "Includes exact balance due and dynamic UPI payment QR link",
          "Automated reminder scheduling for pending dues older than X days",
          "Delivery status tracking to confirm customer received notification",
        ],
      },
      {
        title: "Supplier & Vendor Payable Ledger",
        description: "Keep track of wholesale bills, stock purchases, and supplier balances.",
        bullets: [
          "Record distributor purchases and payment due dates",
          "Avoid supplier disputes with timestamped digital transaction proofs",
          "Calculate total vendor liabilities in one glance",
          "Attach supplier GST invoices for GST filing and tax audit",
        ],
      },
      {
        title: "Daily Cashbook & Counter Tally",
        description: "Match your physical cash drawer with digital transactions at closing time.",
        bullets: [
          "Daily Cash In vs Cash Out recording",
          "Categorized expenses: Tea/snacks, transport, rent, petty cash",
          "Instant evening closing balance report",
          "Discrepancy warnings when cash drawer doesn't balance",
        ],
      },
      {
        title: "One-Click PDF Statements & Invoices",
        description: "Professional accounting statements for customers and bank loan requirements.",
        bullets: [
          "Generate professional branded PDF ledger account statements",
          "Custom date-range filter (Today, This Week, This Month, Financial Year)",
          "Print or share directly to customer WhatsApp in 1 tap",
          "Summary sheet with total debits, credits, and net balance",
        ],
      },
      {
        title: "Multi-Device & Security Lock",
        description: "Control what your shop staff can see and protect your sensitive data.",
        bullets: [
          "App PIN / Fingerprint lock protection",
          "Staff role: Allow counter staff to enter sales, but hide profit totals",
          "Encrypted cloud database with zero risk of physical notebook damage or theft",
          "Instant data restoration on any new phone or computer",
        ],
      },
    ],
    benefits: [
      {
        title: "Collect Money 3x Faster",
        desc: "Polite automated WhatsApp reminders prompt customers to clear pending balance quickly.",
      },
      {
        title: "Zero Accounting Errors",
        desc: "Eliminates calculation mistakes, lost paper slips, and messy overwriting.",
      },
      {
        title: "Permanent Record Safety",
        desc: "Fire, water, or a broken phone can never destroy your precious customer balance records.",
      },
      {
        title: "Only ₹99 / month",
        desc: "Less than the price of a cup of tea per day for total peace of mind.",
      },
    ],
    faqs: [
      {
        question: "Can I use it on both my mobile phone and PC?",
        answer:
          "Yes! You can use it simultaneously on your Android phone, iPhone, tablet, and shop desktop/laptop.",
      },
      {
        question: "Does it work without internet?",
        answer:
          "Yes! You can enter transactions offline. As soon as your internet reconnects, data syncs safely to the cloud.",
      },
      {
        question: "Can I send reminders in Hindi or regional languages?",
        answer:
          "Yes, reminder templates are customizable in Hindi, English, and regional formats.",
      },
      {
        question: "How do I take a free demo?",
        answer:
          "Click the WhatsApp Live Demo button. We will show you the software live on WhatsApp and help you create your first account in 2 minutes.",
      },
    ],
    metaTitle: "Digital Ledger & Khata Book Software | ₹99/mo | DEVGRONIX",
    metaDescription:
      "Manage customer Udhar & Jama, send 1-click WhatsApp balance reminders with UPI payment links, and export PDF statements. Just ₹99/month.",
  },
  {
    id: "prod-staff",
    slug: "staff-management",
    title: "Staff Attendance & Payroll Management",
    tagline: "Track staff check-ins, manage leaves & generate 1-click monthly salary slips.",
    badge: "Essential for Business",
    targetAudience: "Offices, retail showrooms, restaurants, clinics, coaching centers & manufacturing units",
    iconName: "Users",
    monthlyPrice: 99,
    yearlyPrice: 999,
    overview:
      "Stop wasting hours at the end of every month calculating staff attendance, overtime, half-days, and salary deductions on paper registers. DEVGRONIX Staff Attendance & Payroll software gives you automated daily check-ins, leave approvals, salary advance tracking, and 1-click WhatsApp salary slips for just ₹99/month.",
    whatsappMessage:
      "Hi DEVGRONIX, I want to book a free live demo for the Staff Attendance & Payroll Software (₹99/mo). Please share available slots.",
    highlights: [
      "Daily Staff Attendance recording (Mobile QR / Biometric / Selfie / Manual)",
      "Late-mark, Half-day & Overtime calculation rules",
      "Automated 1-click monthly salary slip & payroll generation",
      "Salary advance, loans, bonuses & deductions ledger",
      "1-Click salary slip dispatch directly to employee WhatsApp",
      "Shift scheduling: Day, Night, Rotational & Flexible hours",
      "Leave application & manager approval workflow",
      "Export payroll summary for bank salary disbursement",
    ],
    modules: [
      {
        title: "Smart Attendance Tracking",
        description: "Multiple frictionless modes for daily staff attendance.",
        bullets: [
          "Office QR code scan from employee phone",
          "Selfie attendance with geo-location verification",
          "Admin manual punch-in for front desk or manager",
          "Real-time daily presence dashboard (Present, Absent, On-Leave, Half-Day)",
        ],
      },
      {
        title: "Automated Payroll & Salary Calculator",
        description: "Generate error-free monthly salary in 60 seconds.",
        bullets: [
          "Support for Monthly Fixed, Daily Wage, and Hourly pay structures",
          "Automatic deductions for unauthorized leaves and late punches",
          "Automated calculation for overtime pay based on approved hours",
          "Professional PDF salary slip formatted with your business name and logo",
        ],
      },
      {
        title: "Advance Salary & Loan Ledger",
        description: "Track money lent to staff without messy notebooks.",
        bullets: [
          "Record salary advances, festival bonuses, and emergency loans",
          "Automatic monthly EMI deduction from salary",
          "Clear employee-wise advance balance summary",
          "Prevents paying double salary or over-advances",
        ],
      },
      {
        title: "Leave Management & Approvals",
        description: "Organized leave requests without repeated phone calls.",
        bullets: [
          "Staff can submit leave requests with reason and dates",
          "Manager instant Approve / Reject with 1 tap",
          "Configurable Paid Leaves (PL), Casual Leaves (CL), and Sick Leaves (SL)",
          "Automated leave balance update per employee",
        ],
      },
      {
        title: "WhatsApp Salary Slip Delivery",
        description: "Send professional digital salary slips directly to staff phones.",
        bullets: [
          "1-Click WhatsApp delivery of encrypted PDF salary slips",
          "Staff can view their total days worked, overtime, deductions, and net pay",
          "Builds tremendous trust and professional pride among your team",
          "Zero paper printing or manual signature hassle",
        ],
      },
      {
        title: "Shift Scheduling & Department Roster",
        description: "Manage multiple shifts, off days, and store departments.",
        bullets: [
          "Create custom shifts (Morning, General, Evening, Night)",
          "Assign staff to branches, departments, or specific store counters",
          "Weekly off-day scheduling and festival holiday calendar",
          "Monthly attendance muster roll export ready for audits",
        ],
      },
    ],
    benefits: [
      {
        title: "End Month-End Salary Headaches",
        desc: "Calculate full company payroll in under 2 minutes instead of 2 exhausting days.",
      },
      {
        title: "Stop Proxy & Fake Attendance",
        desc: "Geo-location and selfie verification ensures staff are physically present at work.",
      },
      {
        title: "Professional Salary Slips",
        desc: "Empower your employees with bank-valid monthly pay slips delivered on WhatsApp.",
      },
      {
        title: "Incredible Value at ₹99/mo",
        desc: "Full enterprise-grade HRMS features at an unbeatable local business subscription rate.",
      },
    ],
    faqs: [
      {
        question: "How many employees can I manage?",
        answer:
          "The starter plan supports up to 25 staff members, which is ideal for almost all small businesses, retail shops, and clinics. Higher team sizes are supported seamlessly.",
      },
      {
        question: "Can I track daily-wage workers?",
        answer:
          "Yes! The system supports monthly salaried employees, daily-wage workers, and hourly contractor calculations.",
      },
      {
        question: "Can my staff see each other's salaries?",
        answer:
          "Never. Staff only have access to their own attendance and private salary slips. All financial data is strictly confidential to the admin.",
      },
      {
        question: "Can I book a live demonstration?",
        answer:
          "Yes! Click 'Book Free Live Demo' on WhatsApp and our team will guide you through a live walkthrough.",
      },
    ],
    metaTitle: "Staff Attendance & Payroll Software | ₹99/mo | DEVGRONIX",
    metaDescription:
      "Automate employee attendance, shift scheduling, salary advance tracking, and 1-click WhatsApp pay slips. Starting at just ₹99/month.",
  },
  {
    id: "prod-crm",
    slug: "crm-leads",
    title: "CRM & WhatsApp Leads Automation",
    tagline: "Capture every lead, automate WhatsApp follow-ups, and close deals faster.",
    badge: "Revenue Booster",
    targetAudience: "Service agencies, real estate brokers, consultants, financial advisors & B2B vendors",
    iconName: "Zap",
    monthlyPrice: 199,
    yearlyPrice: 1999,
    overview:
      "Never let an interested customer slip through the cracks. DEVGRONIX CRM & WhatsApp Leads Automation captures leads from your website, Google, Facebook ads, and WhatsApp into one centralized pipeline. Assign follow-ups, send personalized WhatsApp messages with 1 tap, and track deal closures from lead to cash.",
    whatsappMessage:
      "Hi DEVGRONIX, I want to book a free live demo for the CRM & WhatsApp Leads Automation Software (₹199/mo). Please share available slots.",
    highlights: [
      "Centralized Lead Inbox (Website, WhatsApp, Google Ads & Meta)",
      "Visual Kanban Deal Pipeline (New, Contacted, Proposal, Closed)",
      "1-Click Direct WhatsApp Messaging with custom templates",
      "Automated Follow-up Reminders — never forget a hot lead",
      "Lead Source ROI tracking (Know which ads generate real money)",
      "Team lead assignment with round-robin or manual allocation",
      "Quotation & Proposal builder with shareable link",
      "Daily evening WhatsApp executive summary for business owners",
    ],
    modules: [
      {
        title: "Omnichannel Lead Capture",
        description: "Collect every inquiry into one unified dashboard automatically.",
        bullets: [
          "Connect website contact forms, WhatsApp clicks, and landing pages",
          "Instant notification to your phone whenever a new lead arrives",
          "Automated duplicate detection to avoid calling the same person twice",
          "Custom lead tags: High Budget, Urgent, Local, Corporate, UAE/Overseas",
        ],
      },
      {
        title: "Visual Kanban Sales Pipeline",
        description: "Track your sales pipeline from initial contact to successful closure.",
        bullets: [
          "Drag-and-drop deal stages: New Lead -> Contacted -> Needs Analysis -> Quote Sent -> Won / Lost",
          "Total deal value visible in real-time across every stage",
          "Reason-for-loss analytics to improve sales strategy over time",
          "Filters by sales rep, lead value, and creation date",
        ],
      },
      {
        title: "1-Click WhatsApp Quick Replies",
        description: "Engage prospects within seconds with tested high-converting scripts.",
        bullets: [
          "Pre-saved WhatsApp message templates for pricing, brochures, and portfolio links",
          "Dynamic customer name insertion with zero manual copy-pasting",
          "Click to chat directly without saving phone number to mobile contacts",
          "Log conversation notes and customer requirements with date stamps",
        ],
      },
      {
        title: "Smart Follow-Up Scheduling",
        description: "80% of sales happen after the 3rd follow-up — never miss one.",
        bullets: [
          "Set exact date & time reminders for client callbacks",
          "WhatsApp notification alerts to sales rep when follow-up is due",
          "Overdue follow-up alert badges to keep sales teams accountable",
          "Calendar view of all upcoming client demos and appointments",
        ],
      },
      {
        title: "Quotation & Deal Value Tracker",
        description: "Send clean, professional estimates and monitor project values.",
        bullets: [
          "Generate instant estimates and service proposals",
          "Attach PDF portfolios, rate cards, and delivery timelines",
          "Record advance token payments and balance pending on completion",
          "Revenue forecasting to predict monthly cash collections",
        ],
      },
      {
        title: "Team Performance & Conversion Analytics",
        description: "Manage your sales agents and see who closes the most deals.",
        bullets: [
          "Assign leads automatically via round-robin or manual delegation",
          "Agent scorecards: Response time, calls made, deals closed, total revenue",
          "Daily executive summary sent directly to owner's WhatsApp at 8 PM",
          "Role permissions: Sales agents see only their leads, owner sees everything",
        ],
      },
    ],
    benefits: [
      {
        title: "Zero Lost Leads",
        desc: "Instant capture and automated reminders ensure every lead receives a prompt response.",
      },
      {
        title: "35%+ Higher Closing Rate",
        desc: "Fast WhatsApp engagement when the customer is actively browsing converts 3x better.",
      },
      {
        title: "Team Accountability",
        desc: "Track exactly which sales rep contacted which client and when without micro-management.",
      },
      {
        title: "Unbeatable Price at ₹199/mo",
        desc: "Why pay ₹2,000–₹5,000/month for complex foreign CRMs when you get this for ₹199?",
      },
    ],
    faqs: [
      {
        question: "Can I connect my website or Facebook lead forms?",
        answer:
          "Yes! Our system supports webhooks and direct form integrations so leads land immediately on your dashboard.",
      },
      {
        question: "Do I need to save customer phone numbers to WhatsApp them?",
        answer:
          "No! You can chat with prospects directly with 1 tap from the CRM dashboard without saving their numbers to your personal phonebook.",
      },
      {
        question: "Can multiple team members use it together?",
        answer:
          "Yes! You can add multiple sales reps with their own logins and distribute leads between them.",
      },
      {
        question: "How do I start with a live demo?",
        answer:
          "Click 'Book Free Live Demo' on WhatsApp. We will show you the lead capture and WhatsApp automation live in action.",
      },
    ],
    metaTitle: "CRM & WhatsApp Leads Automation | ₹199/mo | DEVGRONIX",
    metaDescription:
      "Capture leads, automate WhatsApp follow-up reminders, and manage your visual sales pipeline for just ₹199/month.",
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return productsData.find((p) => p.slug === slug);
}

export function getAllProducts(): Product[] {
  return productsData;
}

export const publishedProducts = productsData;

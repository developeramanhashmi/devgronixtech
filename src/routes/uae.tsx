import { createFileRoute } from "@tanstack/react-router";
import {
  CheckCircle2,
  Clock,
  CreditCard,
  ExternalLink,
  Globe,
  Languages,
  MessageCircle,
  Send,
  Smartphone,
  Sparkles,
  Zap,
  ArrowUpRight,
  ShieldCheck,
  Check,
} from "lucide-react";
import { useState } from "react";

import { breadcrumbSchema, jsonLdScript, organizationSchema, seoHead, SITE_URL } from "@/lib/seo";
import { Container, Section, SectionHeading } from "@/components/site/Section";
import { HeroNodeNetwork } from "@/components/home/HeroNodeNetwork";

export const Route = createFileRoute("/uae")({
  staticData: { sitemap: true },
  head: () => ({
    ...seoHead({
      title: "تصميم وتطوير مواقع إلكترونية في الإمارات والسعودية | Web Design Agency Dubai, UAE & Saudi | DEVGRONIX",
      description:
        "High-speed websites, custom admin portals, video editing & branding for businesses across Dubai, Abu Dhabi, Sharjah & Riyadh. Bilingual Arabic & English. Packages from AED 249 / SAR 255.",
      path: "/uae",
    }),
    scripts: [
      jsonLdScript([
        breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "UAE & Gulf Services", path: "/uae" },
        ]),
        {
          "@type": "Service",
          "@id": `${SITE_URL}/uae#service`,
          name: "Web Development & Digital Growth Services UAE & Gulf",
          serviceType: "Web Design, Software Engineering, Branding & Video Editing",
          provider: organizationSchema,
          areaServed: [
            { "@type": "City", name: "Dubai" },
            { "@type": "City", name: "Abu Dhabi" },
            { "@type": "City", name: "Sharjah" },
            { "@type": "City", name: "Riyadh" },
            { "@type": "City", name: "Jeddah" },
            { "@type": "Country", name: "United Arab Emirates" },
            { "@type": "Country", name: "Saudi Arabia" },
          ],
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Gulf Web & Digital Packages",
            itemListElement: [
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Starter Presence Website",
                  description: "High-impact single-page mobile website with WhatsApp lead capture.",
                },
                price: "249",
                priceCurrency: "AED",
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Business Growth Corporate Web",
                  description: "Complete 5-page custom business website with speed optimization & email notifications.",
                },
                price: "599",
                priceCurrency: "AED",
              },
            ],
          },
        },
        {
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "How fast can DEVGRONIX launch a website for a UAE business?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Our Starter Presence websites launch in 48 to 72 hours, while complete 5-page corporate websites are delivered within 4 to 7 business days.",
              },
            },
            {
              "@type": "Question",
              name: "Do you accept payment in UAE Dirhams (AED) or Saudi Riyals (SAR)?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, we bill transparently in AED, SAR, and USD with milestone-based invoicing (50% advance, 50% upon final launch).",
              },
            },
            {
              "@type": "Question",
              name: "Can our website support both Arabic and English?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, we build fully responsive bilingual websites with native RTL (Right-to-Left) Arabic support and instant language toggling.",
              },
            },
          ],
        },
      ]),
    ],
  }),
  component: UaeLandingPage,
});

interface ClientProject {
  title: string;
  titleAr: string;
  category: string;
  categoryAr: string;
  market: string;
  marketAr: string;
  url: string;
  metrics: string;
  metricsAr: string;
  summary: string;
  summaryAr: string;
  tags: string[];
}

const recentProjects: ClientProject[] = [
  {
    title: "Lightngear",
    titleAr: "لايتن جير للتجهيزات (الإمارات)",
    category: "B2B E-Commerce & Catalog",
    categoryAr: "متجر B2B وكتالوج معدات رقمي",
    market: "Dubai / UAE & GCC",
    marketAr: "دبي / الإمارات ودول الخليج",
    url: "https://www.devgronix.in",
    metrics: "Amazon-grade UX / 500+ items",
    metricsAr: "تجربة تصفح سريعة / +500 منتج",
    summary:
      "Enterprise industrial & film equipment B2B catalog engineered for fast multi-category browsing, real-time quote generation and instant WhatsApp inquiry.",
    summaryAr:
      "منصة كتالوج B2B متطورة لمعدات وتجهيزات الإضاءة والتصوير، تدعم التصفح السريع لمئات الفئات وتوليد عروض أسعار وربط فوري عبر واتساب.",
    tags: ["Product Filtering", "Instant Quote", "Sub-second Search", "Zero Lag"],
  },
  {
    title: "SIAAN Total Services",
    titleAr: "سيان لخدمات الصيانة والتشغيل",
    category: "Facility & Technical Services",
    categoryAr: "خدمات المنشآت والصيانة الفنية",
    market: "Commercial Facilities",
    marketAr: "المباني والمنشآت التجارية",
    url: "https://www.siaantotalservices.com/",
    metrics: "1-Tap Booking / 100% Mobile",
    metricsAr: "حجز بلمسة واحدة / متوافق 100% مع الجوال",
    summary:
      "High-conversion corporate portal for facility management, HVAC, and building maintenance with direct service requests, team verification and instant emergency dispatch.",
    summaryAr:
      "موقع شركات متكامل لإدارة المرافق والصيانة والتكييف، يوفر طلب الخدمة بلمسة واحدة والتحقق من المشرفين وتوجيه بلاغات الطوارئ فوراً.",
    tags: ["Direct WhatsApp Lead", "Emergency Hotline", "SEO Schema", "Speed A+"],
  },
  {
    title: "ScholarHope Corp",
    titleAr: "سكولار هوب للمنح والتعليم الدولي",
    category: "EdTech & Scholarship Portal",
    categoryAr: "منصة تعليمية وبوابة منح دراسية",
    market: "Global Higher Ed",
    marketAr: "التعليم العالي والدولي",
    url: "https://www.scholar.devgronix.com",
    metrics: "Full Eligibility Engine",
    metricsAr: "محرك فحص الأهلية المسبق للطلاب",
    summary:
      "Interactive scholarship and academic advisory platform with multi-step student evaluation, dynamic program filters and streamlined lead qualification.",
    summaryAr:
      "منصة تفاعلية للمنح والاستشارات الأكاديمية توفر فحص الأهلية للطلاب، فلترة ديناميكية للبرامج الدولية، وتجميع طلبات التقديم بسلاسة.",
    tags: ["Multi-Step Form", "Document Checklist", "Dynamic Programs", "Fast Intake"],
  },
  {
    title: "Karnataka Bearing Agency",
    titleAr: "وكالة المحامل الهندسية والمعدات",
    category: "Industrial Wholesale & Admin",
    categoryAr: "توريدات صناعية مع لوحة تحكم حية",
    market: "Industrial Supply Chain",
    marketAr: "سلاسل التوريد والتجارة المباشرة",
    url: "https://www.bearingshop.in",
    metrics: "Live Custom Admin Panel",
    metricsAr: "لوحة تحكم إدارية حية مخصصة",
    summary:
      "Heavy-duty industrial catalog with integrated custom admin panel for managing stock, supplier inquiries and direct quote requests without third-party SaaS fees.",
    summaryAr:
      "كتالوج صناعي للمعدات والقطع الميكانيكية مدعوم بلوحة تحكم خاصة لإدارة المخزون وعروض الأسعار والتواصل مع المشترين دون اشتراكات شهرية.",
    tags: ["Admin Dashboard", "SKU Catalog", "Instant RFQ", "Zero Recurring Fees"],
  },
  {
    title: "Periyapalayam Rooms",
    titleAr: "بوابة حجز الغرف والضيافة الفندقية",
    category: "Hospitality & Room Booking",
    categoryAr: "ضيافة وحجوزات فندقية مباشرة",
    market: "Tourism & Accommodation",
    marketAr: "الضيافة والسياحة",
    url: "https://www.periyapalayamrooms.in/",
    metrics: "Direct Booking Engine",
    metricsAr: "محرك حجز مباشر بدون عمولات وسطاء",
    summary:
      "Full accommodation showcase and booking reservation system featuring room availability calendars, transparent tariffs, amenity tours and zero-commission direct bookings.",
    summaryAr:
      "موقع متكامل للضيافة وحجز الغرف يشمل جدول التوفر اليومي، جولات استعراض المرافق، وحجز مباشر بدون اقتطاع عمولات وسطاء.",
    tags: ["Room Showcase", "WhatsApp Reservation", "Tariff Matrix", "Local Maps"],
  },
  {
    title: "DEVGRONIX Custom Printing",
    titleAr: "حلول الطباعة التجارية والهوية المؤسسية",
    category: "Corporate Branding & Merchandise",
    categoryAr: "طباعة فاخرة وهدايا دعائية للشركات",
    market: "GCC & India Merch",
    marketAr: "مطبوعات وهدايا الشركات والمؤتمرات",
    url: "https://devgronix.com/services/custom-printing-branding",
    metrics: "Corporate Bulk Ordering",
    metricsAr: "طلبات الجملة للمؤتمرات والفعاليات",
    summary:
      "High-finish merchandise, employee onboarding kits, apparel, brochures and luxury packaging with rapid turnaround for exhibitions, corporate gifting and marketing campaigns.",
    summaryAr:
      "طباعة هدايا الشركات، أطقم الموظفين، البروشورات، والعلب الفاخرة المخصصة للمعارض والمؤتمرات والفعاليات في دول الخليج.",
    tags: ["Custom Apparel", "Packaging", "Bulk Invoicing", "Fast Turnaround"],
  },
  {
    title: "SS Fashion Photography",
    titleAr: "إس إس فاشن للتصوير الفني والإعلاني",
    category: "High-End Visual Portfolio",
    categoryAr: "معرض أعمال وفوتوغرافيا إبداعية",
    market: "Fashion & Commercial Studios",
    marketAr: "استوديوهات الأزياء والإعلانات التجارية",
    url: "https://devgronix.com/works",
    metrics: "Curated 4K Showcase",
    metricsAr: "معرض أعمال عالي الدقة وسريع التحميل",
    summary:
      "Editorial fashion and commercial photography portfolio optimized for lightning-fast visual delivery, image protection, and high-value brand collaboration inquiries.",
    summaryAr:
      "معرض رقمي فوتوغرافي لعروض الأزياء والحملات الدعائية، مصمم لتحميل فائق السرعة للصور وحماية الحقوق مع جذب العملاء الراغبين بجلسات تصوير مميزة.",
    tags: ["Editorial Layout", "Image Protection", "Fluid Gallery", "Lead Handoff"],
  },
  {
    title: "JobsScope",
    titleAr: "جوبز سكوب للتوظيف واستقطاب الكفاءات",
    category: "Recruitment & Job Search Portal",
    categoryAr: "منصة التوظيف وإدارة المرشحين",
    market: "Talent Acquisition",
    marketAr: "سوق العمل والتوظيف الخليجي",
    url: "https://devgronix.com/works",
    metrics: "Dynamic Career Listings",
    metricsAr: "إعلانات وظائف تفاعلية مع تصفية سريعة",
    summary:
      "Interactive hiring and career discovery portal featuring dynamic job filtering, CV intake pipelines, applicant tracking, and recruiter coordination.",
    summaryAr:
      "منصة للتوظيف والوظائف تدعم الفلترة المتقدمة للمرشحين، رفع السير الذاتية، ومتابعة طلبات التوظيف بكفاءة وسهولة.",
    tags: ["Search & Filter", "CV Upload", "Category Tags", "Recruiter Leads"],
  },
];

function UaeLandingPage() {
  const [lang, setLang] = useState<"ar" | "en">("ar");
  const isAr = lang === "ar";

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [service, setService] = useState(
    isAr ? "باقة الحضور الرقمي السريع (AED 249 / SAR 255)" : "Starter Presence (AED 249 / SAR 255)"
  );
  const [details, setDetails] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const waText = isAr
      ? `*طلب استفسار مشروع جديد من الخليج - ديفجرونيكس*%0A%0A*الاسم / المؤسسة:* ${encodeURIComponent(name)}%0A*رقم الواتساب:* ${encodeURIComponent(phone)}%0A*المدينة / الدولة:* ${encodeURIComponent(city || "دبي / الإمارات / السعودية")}%0A*الباقة المختارة:* ${encodeURIComponent(service)}%0A*متطلبات المشروع:* ${encodeURIComponent(details || "طلب استشارة وبدء العمل")}`
      : `*New Gulf Project Inquiry - DEVGRONIX UAE*%0A%0A*Name:* ${encodeURIComponent(name)}%0A*WhatsApp:* ${encodeURIComponent(phone)}%0A*Location/City:* ${encodeURIComponent(city || "Dubai / UAE / Saudi")}%0A*Selected Package:* ${encodeURIComponent(service)}%0A*Project Notes:* ${encodeURIComponent(details || "Looking for consultation")}`;

    try {
      await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email: `${phone.replace(/[^0-9]/g, "")}@gulf-inquiry.devgronix.com`,
          company: `${city || "Gulf Client"}`,
          service: `UAE Package: ${service}`,
          details: `Phone: ${phone} | City: ${city} | Lang: ${lang} | Notes: ${details}`,
        }),
      });
    } catch {
      // Continue to WhatsApp even if email route fails
    } finally {
      setLoading(false);
      setSubmitted(true);
      window.open(`https://wa.me/917070519128?text=${waText}`, "_blank");
    }
  };

  const defaultWaUrl = isAr
    ? "https://wa.me/917070519128?text=" +
      encodeURIComponent("مرحباً فريق ديفجرونيكس، أود الاستفسار بخصوص تصميم وتطوير موقع إلكتروني لشركتي في الخليج")
    : "https://wa.me/917070519128?text=" +
      encodeURIComponent("Hello DEVGRONIX Team, I am reaching out from UAE/Saudi for a web development project");

  return (
    <div
      className={`min-h-screen bg-background text-foreground transition-colors duration-200 ${
        isAr ? "font-sans selection:bg-brand/20" : "selection:bg-brand/20"
      }`}
      dir={isAr ? "rtl" : "ltr"}
    >
      {/* Dynamic Gulf Hero Section with Integrated Animated Node Network & Comfortable Navbar Clearance */}
      <section className="relative isolate overflow-hidden border-b border-border bg-gradient-to-b from-surface/90 via-background to-background pt-28 pb-16 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-28">
        {/* Living Node Network Canvas in Background */}
        <HeroNodeNetwork />

        {/* Ambient Gulf Light Beams & Glow Gradients */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 size-[32rem] sm:size-[45rem] rounded-full bg-brand/15 blur-3xl opacity-70" />
          <div className="absolute top-1/3 -right-28 size-[22rem] rounded-full bg-amber-500/10 blur-3xl opacity-50" />
          <div className="absolute top-1/2 -left-28 size-[24rem] rounded-full bg-cyan-500/10 blur-3xl opacity-40" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:28px_28px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)]" />
        </div>

        <Container className="relative z-10">
          {/* Top Floating Control Bar: Ample spacing below the fixed header */}
          <div className="mx-auto max-w-4xl mb-8 flex flex-col sm:flex-row items-center justify-between gap-3.5 rounded-2xl border border-border/80 bg-surface/75 px-4 py-2.5 shadow-sm backdrop-blur-md">
            <div className="flex items-center gap-2 text-xs font-semibold text-muted-foreground">
              <span className="relative flex size-2 shrink-0">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-500 opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
              </span>
              <span>
                {isAr
                  ? "متاح لتنفيذ المشاريع فوراً • الإمارات (دبي، أبوظبي) والمملكة العربية السعودية (الرياض، جدة)"
                  : "Live for projects · Serving Dubai, Abu Dhabi, Sharjah, Riyadh & Jeddah"}
              </span>
            </div>

            {/* Language Switcher Button with Clear Active Styling */}
            <div className="inline-flex items-center rounded-xl border border-border bg-background/90 p-1 shadow-xs">
              <button
                type="button"
                onClick={() => setLang("ar")}
                className={`flex items-center gap-1.5 rounded-lg px-3.5 py-1 text-xs font-bold transition-all duration-150 ${
                  isAr
                    ? "bg-brand text-brand-foreground shadow-xs scale-[1.02]"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <span>العربية</span>
                <span className="text-[10px] font-normal opacity-85">(الخليج)</span>
              </button>
              <button
                type="button"
                onClick={() => setLang("en")}
                className={`flex items-center gap-1.5 rounded-lg px-3.5 py-1 text-xs font-bold transition-all duration-150 ${
                  !isAr
                    ? "bg-brand text-brand-foreground shadow-xs scale-[1.02]"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <span>English</span>
                <span className="text-[10px] font-normal opacity-85">(Global)</span>
              </button>
            </div>
          </div>

          <div className="mx-auto max-w-4xl text-center">
            {/* Top Badges */}
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-brand/40 bg-brand/10 px-3.5 py-1 text-xs font-bold text-brand shadow-2xs backdrop-blur-xs">
                <Sparkles className="size-3.5" />
                {isAr ? "وكالة الحلول الرقمية الذكية لدول مجلس التعاون" : "GCC Digital Engineering Agency"}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface/90 px-3.5 py-1 text-xs font-semibold text-foreground shadow-2xs">
                <CreditCard className="size-3.5 text-brand" />
                {isAr ? "تبدأ الأسعار من 249 درهم / 255 ريال" : "Packages from AED 249 / SAR 255"}
              </span>
            </div>

            {/* Main Title with Elegant Typography */}
            <h1 className="mt-6 text-3xl font-extrabold tracking-tight sm:text-5xl lg:text-[3.5rem] leading-[1.2] sm:leading-[1.18]">
              {isAr ? (
                <>
                  تصميم وتطوير مواقع إلكترونية{" "}
                  <span className="bg-gradient-to-r from-brand via-amber-500 to-brand bg-clip-text text-transparent">
                    فائقة السرعة والأداء
                  </span>{" "}
                  لشركات ومؤسسات الخليج
                </>
              ) : (
                <>
                  High-Performance Web Design &{" "}
                  <span className="bg-gradient-to-r from-brand via-amber-500 to-brand bg-clip-text text-transparent">
                    Digital Growth
                  </span>{" "}
                  for Gulf Businesses
                </>
              )}
            </h1>

            {/* Subtitle with High-Trust Tone */}
            <p className="mx-auto mt-5 max-w-2xl text-base text-muted-foreground sm:text-lg leading-relaxed">
              {isAr
                ? "مواقع وتطبيقات مخصصة تفتح في أجزاء من الثانية دون بطء القوالب الجاهزة. نوفر لوحات تحكم إدارية حية، وتكاملاً مباشراً مع محادثات واتساب لتحويل كل زائر لعميل حقيقي، مع التوافق التام مع ساعات عمل الإمارات والسعودية (GMT+4)."
                : "Custom-coded websites, mobile web applications, and creative visual content engineered for companies across UAE & Saudi Arabia. Direct Gulf timezone collaboration (GMT+4), sub-second loading, and transparent pricing in AED & SAR."}
            </p>

            {/* Four Dynamic Interactive Highlight Cards */}
            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-3.5 text-left rtl:text-right">
              <div className="group rounded-2xl border border-border bg-surface/80 p-3.5 shadow-sm backdrop-blur-md transition-all duration-300 hover:border-brand/50 hover:shadow-md hover:-translate-y-0.5">
                <div className="flex items-center gap-2">
                  <div className="flex size-7 items-center justify-center rounded-lg bg-brand/10 text-brand group-hover:bg-brand group-hover:text-brand-foreground transition">
                    <Clock className="size-4" />
                  </div>
                  <span className="text-xs font-bold text-foreground">
                    {isAr ? "إطلاق خلال 48-72h" : "48-72h Sprint Delivery"}
                  </span>
                </div>
                <p className="mt-1.5 text-[11px] leading-snug text-muted-foreground">
                  {isAr ? "جاهزية وسرعة قياسية للانطلاق بالسوق" : "Fast turnaround for rapid market launch"}
                </p>
              </div>

              <div className="group rounded-2xl border border-border bg-surface/80 p-3.5 shadow-sm backdrop-blur-md transition-all duration-300 hover:border-brand/50 hover:shadow-md hover:-translate-y-0.5">
                <div className="flex items-center gap-2">
                  <div className="flex size-7 items-center justify-center rounded-lg bg-brand/10 text-brand group-hover:bg-brand group-hover:text-brand-foreground transition">
                    <MessageCircle className="size-4" />
                  </div>
                  <span className="text-xs font-bold text-foreground">
                    {isAr ? "ربط فوري بواتساب" : "1-Tap WhatsApp Lead"}
                  </span>
                </div>
                <p className="mt-1.5 text-[11px] leading-snug text-muted-foreground">
                  {isAr ? "كل زائر يتواصل معك بنقرة واحدة" : "Direct customer chats without friction"}
                </p>
              </div>

              <div className="group rounded-2xl border border-border bg-surface/80 p-3.5 shadow-sm backdrop-blur-md transition-all duration-300 hover:border-brand/50 hover:shadow-md hover:-translate-y-0.5">
                <div className="flex items-center gap-2">
                  <div className="flex size-7 items-center justify-center rounded-lg bg-brand/10 text-brand group-hover:bg-brand group-hover:text-brand-foreground transition">
                    <Languages className="size-4" />
                  </div>
                  <span className="text-xs font-bold text-foreground">
                    {isAr ? "عربي وإنجليزي متقن" : "Full RTL + LTR Bilingual"}
                  </span>
                </div>
                <p className="mt-1.5 text-[11px] leading-snug text-muted-foreground">
                  {isAr ? "خطوط عربية عصرية وتصميم متقن 100%" : "Flawless Arabic typography & layout"}
                </p>
              </div>

              <div className="group rounded-2xl border border-border bg-surface/80 p-3.5 shadow-sm backdrop-blur-md transition-all duration-300 hover:border-brand/50 hover:shadow-md hover:-translate-y-0.5">
                <div className="flex items-center gap-2">
                  <div className="flex size-7 items-center justify-center rounded-lg bg-brand/10 text-brand group-hover:bg-brand group-hover:text-brand-foreground transition">
                    <ShieldCheck className="size-4" />
                  </div>
                  <span className="text-xs font-bold text-foreground">
                    {isAr ? "دفع مرحلي آمن" : "Milestone Billing (50/50)"}
                  </span>
                </div>
                <p className="mt-1.5 text-[11px] leading-snug text-muted-foreground">
                  {isAr ? "50% عند البدء و50% بعد الاعتماد" : "50% advance, 50% on final approval"}
                </p>
              </div>
            </div>

            {/* CTAs */}
            <div className="mt-9 flex flex-wrap items-center justify-center gap-3.5">
              <a
                href={defaultWaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-brand px-6 py-3.5 text-sm font-bold text-brand-foreground shadow-md transition-all duration-200 hover:bg-brand/90 hover:scale-[1.02] active:scale-[0.98]"
              >
                <MessageCircle className="size-4" />
                {isAr ? "تواصل مباشر عبر واتساب (+91 7070519128)" : "Chat on WhatsApp (+91 7070519128)"}
              </a>
              <a
                href="#packages"
                className="inline-flex items-center gap-2 rounded-xl border border-border bg-surface/90 px-5 py-3.5 text-sm font-semibold text-foreground transition-all duration-200 hover:border-brand/50 hover:bg-surface"
              >
                {isAr ? "استعراض الباقات والأسعار" : "View Packages & Pricing"}
              </a>
              <a
                href="#work"
                className="inline-flex items-center gap-2 rounded-xl border border-border bg-surface/90 px-5 py-3.5 text-sm font-semibold text-foreground transition-all duration-200 hover:border-brand/50 hover:bg-surface"
              >
                {isAr ? "استعراض المشاريع الحية" : "Explore Live Work"}
              </a>
            </div>
          </div>
        </Container>
      </section>

      {/* Trust Metrics Strip */}
      <div className="border-b border-border bg-surface/50 py-5">
        <Container>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 text-center">
            <div className="rounded-xl border border-border/60 bg-background/60 p-3">
              <div className="text-2xl sm:text-3xl font-extrabold text-foreground">48h – 72h</div>
              <div className="mt-0.5 text-xs text-muted-foreground">
                {isAr ? "متوسط سرعة الإطلاق" : "Average Launch Time"}
              </div>
            </div>
            <div className="rounded-xl border border-border/60 bg-background/60 p-3">
              <div className="text-2xl sm:text-3xl font-extrabold text-foreground">0.4s</div>
              <div className="mt-0.5 text-xs text-muted-foreground">
                {isAr ? "سرعة تحميل الصفحات" : "Sub-second Page Load"}
              </div>
            </div>
            <div className="rounded-xl border border-border/60 bg-background/60 p-3">
              <div className="text-2xl sm:text-3xl font-extrabold text-brand">AED 249</div>
              <div className="mt-0.5 text-xs text-muted-foreground">
                {isAr ? "باقة الحضور الرقمي" : "Starter Web Presence"}
              </div>
            </div>
            <div className="rounded-xl border border-border/60 bg-background/60 p-3">
              <div className="text-2xl sm:text-3xl font-extrabold text-foreground">100%</div>
              <div className="mt-0.5 text-xs text-muted-foreground">
                {isAr ? "ملكية كاملة للكود والمحتوى" : "Code & Asset Ownership"}
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Gulf Advantages / Why DEVGRONIX */}
      <Section className="border-b border-border">
        <SectionHeading
          index="01"
          label={isAr ? "المزايا المخصصة للخليج" : "Gulf Advantage"}
          title={isAr ? "لماذا تثق شركات ومؤسسات الخليج في ديفجرونيكس؟" : "Why Gulf Businesses Partner With DEVGRONIX"}
        />
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="group rounded-2xl border border-border bg-surface p-6 shadow-xs transition-all duration-300 hover:border-brand/50 hover:shadow-md hover:-translate-y-1">
            <div className="flex size-11 items-center justify-center rounded-xl bg-brand/10 text-brand group-hover:bg-brand group-hover:text-brand-foreground transition">
              <Clock className="size-5" />
            </div>
            <h4 className="mt-4 font-display text-base font-bold text-foreground">
              {isAr ? "تنسيق متوافق مع توقيت الخليج (GMT+4)" : "Gulf Timezone Aligned (GMT+4)"}
            </h4>
            <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
              {isAr
                ? "تواصل مباشر ومستمر خلال ساعات العمل الرسمية في الإمارات والسعودية عبر واتساب واجتماعات جوجل ميت دون أي فوارق زمنية."
                : "Zero communication delay. We work directly with your schedule across UAE and Saudi Arabia business hours via WhatsApp and Google Meet."}
            </p>
          </div>

          <div className="group rounded-2xl border border-border bg-surface p-6 shadow-xs transition-all duration-300 hover:border-brand/50 hover:shadow-md hover:-translate-y-1">
            <div className="flex size-11 items-center justify-center rounded-xl bg-brand/10 text-brand group-hover:bg-brand group-hover:text-brand-foreground transition">
              <CreditCard className="size-5" />
            </div>
            <h4 className="mt-4 font-display text-base font-bold text-foreground">
              {isAr ? "فوترة واضحة بالدرهم والريال والدولار" : "Transparent Invoicing in AED, SAR & USD"}
            </h4>
            <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
              {isAr
                ? "أسعار ثابتة بدون أي رسوم اشتراك خفية. نظام دفع ميسر على مرحلتين (50% عند البدء و50% بعد الاعتماد الكامل للموقع)."
                : "Predictable milestone payments (50% upfront, 50% on approval). No hidden hosting markups or surprise maintenance charges."}
            </p>
          </div>

          <div className="group rounded-2xl border border-border bg-surface p-6 shadow-xs transition-all duration-300 hover:border-brand/50 hover:shadow-md hover:-translate-y-1">
            <div className="flex size-11 items-center justify-center rounded-xl bg-brand/10 text-brand group-hover:bg-brand group-hover:text-brand-foreground transition">
              <Smartphone className="size-5" />
            </div>
            <h4 className="mt-4 font-display text-base font-bold text-foreground">
              {isAr ? "تصميم متكامل للجوال وواتساب أولاً" : "Mobile & WhatsApp-First Architecture"}
            </h4>
            <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
              {isAr
                ? "أكثر من 85% من عملاء الخليج يتصفحون عبر الجوال. نضمن تجربة تصفح سريعة وزر تواصل واتساب فوري يرفع معدل التحويل."
                : "Over 85% of Gulf web traffic is mobile. Every page is built mobile-first with click-to-WhatsApp actions for instant customer capture."}
            </p>
          </div>

          <div className="group rounded-2xl border border-border bg-surface p-6 shadow-xs transition-all duration-300 hover:border-brand/50 hover:shadow-md hover:-translate-y-1">
            <div className="flex size-11 items-center justify-center rounded-xl bg-brand/10 text-brand group-hover:bg-brand group-hover:text-brand-foreground transition">
              <Globe className="size-5" />
            </div>
            <h4 className="mt-4 font-display text-base font-bold text-foreground">
              {isAr ? "دعم كامل للغتين (عربي وإنجليزي)" : "Bilingual Ready (Arabic + English)"}
            </h4>
            <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
              {isAr
                ? "تصميم متقن يدعم الكتابة من اليمين إلى اليسار (RTL) مع خطوط عربية فاخرة وسهلة القراءة لجذب العملاء المواطنين والمقيمين."
                : "Reach both local Arab audiences and international expats with clean Right-to-Left (RTL) Arabic typography and instant toggles."}
            </p>
          </div>

          <div className="group rounded-2xl border border-border bg-surface p-6 shadow-xs transition-all duration-300 hover:border-brand/50 hover:shadow-md hover:-translate-y-1">
            <div className="flex size-11 items-center justify-center rounded-xl bg-brand/10 text-brand group-hover:bg-brand group-hover:text-brand-foreground transition">
              <Zap className="size-5" />
            </div>
            <h4 className="mt-4 font-display text-base font-bold text-foreground">
              {isAr ? "كود حديث بدون بطء ووردبريس" : "Clean Code, Zero WordPress Bloat"}
            </h4>
            <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
              {isAr
                ? "مواقع مبنية بأحدث تقنيات React وTypeScript العالمية، سرعة تحميل في أجزاء من الثانية مع حماية وأمان عالي بدون إضافات مخترقة."
                : "Built with modern React and TypeScript. Sub-second loading speeds, grade-A Google Core Web Vitals, and zero vulnerable plugins."}
            </p>
          </div>

          <div className="group rounded-2xl border border-border bg-surface p-6 shadow-xs transition-all duration-300 hover:border-brand/50 hover:shadow-md hover:-translate-y-1">
            <div className="flex size-11 items-center justify-center rounded-xl bg-brand/10 text-brand group-hover:bg-brand group-hover:text-brand-foreground transition">
              <Sparkles className="size-5" />
            </div>
            <h4 className="mt-4 font-display text-base font-bold text-foreground">
              {isAr ? "تواصل مباشر مع مهندسي البرمجة" : "Direct Engineering Contact"}
            </h4>
            <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
              {isAr
                ? "تحدث مباشرة مع الفريق الهندسي المنفذ لمشروعك، بدون وسطاء مبيعات أو تأخير، مع تنفيذ التعديلات بكل مرونة."
                : "No layers of account managers. Speak directly with the engineers executing your design, code, and growth setup."}
            </p>
          </div>
        </div>
      </Section>

      {/* Packages Section with Dynamic Cards */}
      <Section id="packages" className="border-b border-border bg-surface/20">
        <SectionHeading
          index="02"
          label={isAr ? "الباقات والأسعار" : "Gulf Packages"}
          title={isAr ? "باقات واضحة ومناسبة تضمن أعلى عائد لاستثمارك" : "Transparent Packages Engineered for High ROI"}
        />
        <p className="mt-3 max-w-xl text-sm text-muted-foreground">
          {isAr
            ? "تشمل جميع الباقات التصميم للجوال، الربط المباشر مع واتساب، تهيئة محركات البحث Google SEO، وملكية الكود بالكامل."
            : "All packages include responsive mobile design, direct WhatsApp conversion, SEO meta tags, and complete asset ownership."}
        </p>

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {/* Card 1 */}
          <div className="group rounded-2xl border border-border bg-surface p-7 shadow-sm transition-all duration-300 hover:border-brand/50 hover:shadow-lg flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  {isAr ? "للبداية السريعة" : "Fast Presence"}
                </span>
                <span className="rounded-full bg-surface border border-border px-2.5 py-0.5 text-[11px] font-semibold text-muted-foreground">
                  {isAr ? "48-72 ساعة" : "48-72h"}
                </span>
              </div>
              <h3 className="mt-3 font-display text-xl font-bold text-foreground group-hover:text-brand transition">
                {isAr ? "باقة الحضور الرقمي السريع" : "Starter Presence"}
              </h3>
              <p className="mt-1 text-xs text-muted-foreground">
                {isAr
                  ? "مثالية للمؤسسات، المكاتب، ومقدمي الخدمات لبناء واجهة احترافية سريعة لجذب العملاء."
                  : "Ideal for new businesses, consultants, and service providers launching fast."}
              </p>
              <div className="mt-5 flex items-baseline gap-1.5">
                <span className="text-3xl font-extrabold text-foreground">AED 249</span>
                <span className="text-xs font-medium text-muted-foreground">/ SAR 255</span>
              </div>

              <ul className="mt-6 space-y-2.5 text-xs text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Check className="size-4 text-brand shrink-0" />
                  <span>{isAr ? "صفحة رئيسية عصرية سريعة التحميل" : "Single-page high-converting website"}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="size-4 text-brand shrink-0" />
                  <span>{isAr ? "زر تواصل وطلب فوري عبر واتساب" : "WhatsApp click-to-chat integration"}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="size-4 text-brand shrink-0" />
                  <span>{isAr ? "استعراض الخدمات ومعرض الصور" : "Service catalog & visual showcase"}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="size-4 text-brand shrink-0" />
                  <span>{isAr ? "تهيئة أولية لمحرك بحث Google SEO" : "Google Search Console & Meta setup"}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="size-4 text-brand shrink-0" />
                  <span>{isAr ? "ملكية كاملة للكود ومصدر البيانات" : "100% Code & domain ownership"}</span>
                </li>
              </ul>
            </div>

            <a
              href={`https://wa.me/917070519128?text=${encodeURIComponent(
                isAr
                  ? "مرحباً ديفجرونيكس، أود حجز باقة الحضور الرقمي السريع (AED 249 / SAR 255)"
                  : "Hello DEVGRONIX, I am interested in the Starter Presence package (AED 249 / SAR 255)"
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 flex w-full items-center justify-center gap-2 rounded-xl border border-border bg-surface py-3 text-xs font-bold text-foreground transition-all duration-200 hover:border-brand hover:text-brand hover:bg-brand/5"
            >
              <MessageCircle className="size-4" />
              {isAr ? "طلب الباقة عبر واتساب" : "Order via WhatsApp"}
            </a>
          </div>

          {/* Card 2 - Featured */}
          <div className="relative rounded-2xl border-2 border-brand bg-surface p-7 shadow-xl flex flex-col justify-between transition-all duration-300 hover:shadow-2xl">
            <span className="absolute -top-3.5 right-6 rounded-full bg-brand px-3.5 py-0.5 text-[11px] font-bold text-brand-foreground shadow-md">
              {isAr ? "الأكثر طلباً للشركات" : "Most Popular"}
            </span>
            <div>
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-brand">
                  {isAr ? "باقة الأعمال الشاملة" : "Corporate Growth"}
                </span>
                <span className="rounded-full bg-brand/10 border border-brand/30 px-2.5 py-0.5 text-[11px] font-semibold text-brand">
                  {isAr ? "4-7 أيام" : "4-7 Days"}
                </span>
              </div>
              <h3 className="mt-3 font-display text-xl font-bold text-foreground">
                {isAr ? "باقة نمو الأعمال المتكاملة" : "Business Growth"}
              </h3>
              <p className="mt-1 text-xs text-muted-foreground">
                {isAr
                  ? "موقع رسمي متعدد الصفحات للشركات والمصانع ومقدمي الخدمات والمقاولات في الخليج."
                  : "Full 5-page corporate website for established businesses, traders & contractors."}
              </p>
              <div className="mt-5 flex items-baseline gap-1.5">
                <span className="text-3xl font-extrabold text-foreground">AED 599</span>
                <span className="text-xs font-medium text-muted-foreground">/ SAR 615</span>
              </div>

              <ul className="mt-6 space-y-2.5 text-xs text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Check className="size-4 text-brand shrink-0" />
                  <span>{isAr ? "موقع متكامل يصل إلى 5 صفحات مخصصة" : "Up to 5 custom-designed pages"}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="size-4 text-brand shrink-0" />
                  <span>{isAr ? "نموذج اتصال مربوط بالإيميل وواتساب" : "Lead capture form with Email alerts"}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="size-4 text-brand shrink-0" />
                  <span>{isAr ? "تهيئة سيو محلية وخرائط جوجل Google Schema" : "Local Gulf SEO & Google Map integration"}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="size-4 text-brand shrink-0" />
                  <span>{isAr ? "إمكانية دعم اللغتين (عربي + إنجليزي)" : "Optional Arabic + English dual language"}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="size-4 text-brand shrink-0" />
                  <span>{isAr ? "دعم وصيانة مجانية لمدة 30 يوماً" : "30-Day priority support & revisions"}</span>
                </li>
              </ul>
            </div>

            <a
              href={`https://wa.me/917070519128?text=${encodeURIComponent(
                isAr
                  ? "مرحباً ديفجرونيكس، أود حجز باقة نمو الأعمال المتكاملة (AED 599 / SAR 615)"
                  : "Hello DEVGRONIX, I am interested in the Business Growth package (AED 599 / SAR 615)"
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 flex w-full items-center justify-center gap-2 rounded-xl bg-brand py-3 text-xs font-bold text-brand-foreground shadow-md transition-all duration-200 hover:bg-brand/90 hover:scale-[1.01]"
            >
              <MessageCircle className="size-4" />
              {isAr ? "طلب الباقة عبر واتساب" : "Start Project on WhatsApp"}
            </a>
          </div>

          {/* Card 3 */}
          <div className="group rounded-2xl border border-border bg-surface p-7 shadow-sm transition-all duration-300 hover:border-brand/50 hover:shadow-lg flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  {isAr ? "أنظمة برمجية مخصصة" : "Enterprise"}
                </span>
                <span className="rounded-full bg-surface border border-border px-2.5 py-0.5 text-[11px] font-semibold text-muted-foreground">
                  {isAr ? "حسب النطاق" : "Custom Scope"}
                </span>
              </div>
              <h3 className="mt-3 font-display text-xl font-bold text-foreground group-hover:text-brand transition">
                {isAr ? "تطبيقات ومنصات ويب مخصصة" : "Custom Web App / Portal"}
              </h3>
              <p className="mt-1 text-xs text-muted-foreground">
                {isAr
                  ? "بوابات عملاء، لوحات تحكم إدارية خاصة، ومتاجر متقدمة بدون اشتراكات شهرية متكررة."
                  : "Custom client portals, inventory dashboards, and custom web applications."}
              </p>
              <div className="mt-5 flex items-baseline gap-1.5">
                <span className="text-3xl font-extrabold text-foreground">AED 1,999+</span>
                <span className="text-xs font-medium text-muted-foreground">/ SAR 2,050+</span>
              </div>

              <ul className="mt-6 space-y-2.5 text-xs text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Check className="size-4 text-brand shrink-0" />
                  <span>{isAr ? "لوحة تحكم إدارية حية لإدارة المحتوى والطلبات" : "Dedicated Admin Dashboard for records"}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="size-4 text-brand shrink-0" />
                  <span>{isAr ? "قواعد بيانات سحابية وتوثيق مستخدمين آمن" : "Cloud database & secure authentication"}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="size-4 text-brand shrink-0" />
                  <span>{isAr ? "ربط بوابات دفع إلكترونية (Stripe / Telr / Tap)" : "Payment gateways & API integrations"}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="size-4 text-brand shrink-0" />
                  <span>{isAr ? "معمارية هندسية قابلة للتوسع بملايين الزوار" : "Scalable serverless React architecture"}</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="size-4 text-brand shrink-0" />
                  <span>{isAr ? "ملكية 100% لكود المشروع دون رسوم شهرية" : "Zero recurring platform subscription fees"}</span>
                </li>
              </ul>
            </div>

            <a
              href={`https://wa.me/917070519128?text=${encodeURIComponent(
                isAr
                  ? "مرحباً ديفجرونيكس، أود استشارة حول تطبيق ومنصة ويب مخصصة للخليج"
                  : "Hello DEVGRONIX, I want a consultation for a Custom Web App / Portal in the Gulf"
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 flex w-full items-center justify-center gap-2 rounded-xl border border-border bg-surface py-3 text-xs font-bold text-foreground transition-all duration-200 hover:border-brand hover:text-brand hover:bg-brand/5"
            >
              <MessageCircle className="size-4" />
              {isAr ? "استشارة مخصصة عبر واتساب" : "Discuss Custom Scope"}
            </a>
          </div>
        </div>
      </Section>

      {/* Selected Work Showcase with Dynamic Cards */}
      <Section id="work" className="border-b border-border">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <SectionHeading
              index="03"
              label={isAr ? "أعمالنا الحية" : "Selected Work"}
              title={isAr ? "مشاريع وأنظمة أطلقناها وتعمل بكفاءة الآن" : "Live Projects Built & Deployed"}
            />
            <p className="mt-3 max-w-xl text-sm text-muted-foreground">
              {isAr
                ? "نماذج واقعية من مواقع وتطبيقات ولوحات تحكم قمنا بتطويرها لشركات في الإمارات والهند والأسواق الدولية."
                : "Real systems and high-speed portals built for real businesses across GCC, India and international markets."}
            </p>
          </div>
          <a
            href="https://devgronix.com/works"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-brand hover:underline"
          >
            {isAr ? "عرض جميع الأعمال في معرض المشاريع" : "View Full Portfolio Showcase"}
            <ArrowUpRight className="size-4" />
          </a>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {recentProjects.map((p) => (
            <div
              key={p.title}
              className="group relative flex flex-col justify-between rounded-2xl border border-border bg-surface p-6 shadow-xs transition-all duration-300 hover:border-brand/50 hover:shadow-md hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-brand">
                    {isAr ? p.categoryAr : p.category}
                  </span>
                  <span className="rounded-full bg-background border border-border px-2.5 py-0.5 text-[10px] font-semibold text-muted-foreground">
                    {isAr ? p.marketAr : p.market}
                  </span>
                </div>

                <h3 className="mt-3 font-display text-lg font-bold text-foreground group-hover:text-brand transition">
                  {isAr ? p.titleAr : p.title}
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
                  {isAr ? p.summaryAr : p.summary}
                </p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-background/80 border border-border/80 px-2 py-0.5 text-[10px] text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 flex items-center justify-between border-t border-border/60 pt-4 text-xs">
                <span className="font-semibold text-foreground/80">
                  {isAr ? p.metricsAr : p.metrics}
                </span>
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-bold text-brand hover:underline"
                >
                  {isAr ? "زيارة الموقع الحي" : "Visit Live Site"}
                  <ExternalLink className="size-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Direct Gulf Inquiry Form */}
      <Section id="contact" className="border-b border-border bg-surface/30">
        <div className="mx-auto max-w-2xl rounded-2xl border border-border bg-surface p-8 sm:p-12 shadow-sm">
          <SectionHeading
            index="04"
            label={isAr ? "طلب سريع ومباشر" : "Fast Direct Inquiry"}
            title={isAr ? "احصل على عرض سعر مخصص لشركتك خلال دقائق" : "Get a personalized Gulf quote in minutes"}
          />
          <p className="mt-3 text-sm text-muted-foreground">
            {isAr
              ? "املأ تفاصيل مشروعك أدناه، وسنقوم بالرد عليك مباشرة عبر واتساب مع تقدير التكلفة وخطة الإنجاز."
              : "Fill out your project requirement below. We reply directly via WhatsApp within minutes with scope & milestone options."}
          </p>

          {submitted ? (
            <div className="mt-8 rounded-xl border border-brand/40 bg-brand/10 p-6 text-center">
              <CheckCircle2 className="mx-auto size-10 text-brand" />
              <h3 className="mt-3 text-lg font-bold text-foreground">
                {isAr ? "تم إرسال طلبك بنجاح!" : "Inquiry Sent Successfully!"}
              </h3>
              <p className="mt-2 text-xs text-muted-foreground">
                {isAr
                  ? "تم فتح محادثة واتساب بتفاصيل مشروعك. فريقنا متواجد للرد عليك فوراً."
                  : "WhatsApp has opened with your project specifications. Our team will reply to you immediately."}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8 space-y-4">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  {isAr ? "الاسم أو اسم المؤسسة / الشركة *" : "Your Name or Business *"}
                </label>
                <input
                  type="text"
                  required
                  placeholder={isAr ? "مثال: طارق المنصور / شركة الفن المعماري" : "e.g. Tariq Al-Mansoor / Studio Luxe"}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-1.5 w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground focus:border-brand focus:outline-none"
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    {isAr ? "رقم الواتساب (مع رمز الدولة) *" : "WhatsApp Number (with country code) *"}
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder={isAr ? "مثال: 4567 123 50 971+" : "e.g. +971 50 123 4567"}
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="mt-1.5 w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground focus:border-brand focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    {isAr ? "المدينة / الدولة" : "City / Location"}
                  </label>
                  <input
                    type="text"
                    placeholder={isAr ? "مثال: دبي، أبوظبي، الرياض، جدة" : "e.g. Dubai, Abu Dhabi, Riyadh"}
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="mt-1.5 w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground focus:border-brand focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  {isAr ? "الباقة أو الخدمة المطلوبة" : "Interested Package"}
                </label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="mt-1.5 w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground focus:border-brand focus:outline-none"
                >
                  <option value={isAr ? "باقة الحضور الرقمي السريع (AED 249 / SAR 255)" : "Starter Presence (AED 249 / SAR 255)"}>
                    {isAr ? "باقة الحضور الرقمي السريع (AED 249 / SAR 255)" : "Starter Presence (AED 249 / SAR 255)"}
                  </option>
                  <option value={isAr ? "باقة نمو الأعمال المتكاملة (AED 599 / SAR 615)" : "Business Growth Web (AED 599 / SAR 615)"}>
                    {isAr ? "باقة نمو الأعمال المتكاملة (AED 599 / SAR 615)" : "Business Growth Web (AED 599 / SAR 615)"}
                  </option>
                  <option value={isAr ? "تطبيقات ومنصات ويب مخصصة (AED 1,999+ / SAR 2,050+)" : "Custom Web App / E-commerce (AED 1,999+)"}>
                    {isAr ? "تطبيقات ومنصات ويب مخصصة (AED 1,999+ / SAR 2,050+)" : "Custom Web App / E-commerce (AED 1,999+)"}
                  </option>
                  <option value={isAr ? "مونتاج فيديوهات ريلز وإعلانات (ابتداءً من 29 درهم/فيديو)" : "Reels & Short Video Editing (From AED 29/video)"}>
                    {isAr ? "مونتاج فيديوهات ريلز وإعلانات (ابتداءً من 29 درهم/فيديو)" : "Reels & Short Video Editing (From AED 29/video)"}
                  </option>
                  <option value={isAr ? "تصميم هوية بصرية ومطبوعات تجارية (ابتداءً من 99 درهم)" : "Branding & Social Visuals (From AED 99)"}>
                    {isAr ? "تصميم هوية بصرية ومطبوعات تجارية (ابتداءً من 99 درهم)" : "Branding & Social Visuals (From AED 99)"}
                  </option>
                  <option value={isAr ? "استشارة مخصصة لمشروع جديد" : "Custom Consultation"}>
                    {isAr ? "استشارة مخصصة لمشروع جديد" : "Custom Consultation"}
                  </option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  {isAr ? "ملاحظات أو نبذة مختصرة عن المشروع" : "Brief Project Requirements"}
                </label>
                <textarea
                  rows={3}
                  placeholder={
                    isAr
                      ? "أخبرنا عن مجال عملك، رابط موقعك الحالي إن وجد، أو أي أفكار ترغب بتنفيذها..."
                      : "Tell us about your brand, current website link, or goals..."
                  }
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                  className="mt-1.5 w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground focus:border-brand focus:outline-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-brand py-3.5 text-sm font-bold text-brand-foreground shadow-sm transition hover:bg-brand/90 disabled:opacity-50"
              >
                {loading ? (
                  isAr ? "جاري الإرسال..." : "Sending..."
                ) : (
                  <>
                    <Send className="size-4" />
                    {isAr ? "إرسال الطلب والتواصل الفوري عبر واتساب" : "Send Inquiry & Connect on WhatsApp"}
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </Section>

      {/* UAE & Gulf FAQs */}
      <Section className="border-b border-border">
        <SectionHeading
          index="05"
          label={isAr ? "الأسئلة الشائعة" : "Common Questions"}
          title={isAr ? "الأسئلة الأكثر شيوعاً لعملاء الإمارات والخليج" : "Frequently Asked Questions (UAE & Gulf)"}
        />
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <div className="rounded-xl border border-border bg-surface p-6 shadow-xs">
            <h4 className="font-display text-sm font-bold text-foreground">
              {isAr ? "كم يستغرق تسليم وإطلاق الموقع لشركة في الخليج؟" : "How fast can DEVGRONIX launch a website for a UAE business?"}
            </h4>
            <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
              {isAr
                ? "باقة الحضور السريع تُطلق خلال 48 إلى 72 ساعة، بينما المواقع المتكاملة للشركات تُسلم بالكامل خلال 4 إلى 7 أيام عمل فقط مع التعديلات."
                : "Our Starter Presence websites launch in 48 to 72 hours, while complete 5-page corporate websites are delivered within 4 to 7 business days."}
            </p>
          </div>

          <div className="rounded-xl border border-border bg-surface p-6 shadow-xs">
            <h4 className="font-display text-sm font-bold text-foreground">
              {isAr ? "هل تقبلون الدفع بالدرهم الإماراتي أو الريال السعودي؟" : "Do you accept payment in UAE Dirhams (AED) or Saudi Riyals (SAR)?"}
            </h4>
            <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
              {isAr
                ? "نعم، الفوترة واضحة ومباشرة بالدرهم الإماراتي (AED) أو الريال السعودي (SAR) أو الدولار (USD) مع نظام سداد على مرحلتين (50% مقدماً و50% بعد الاعتماد النهائي)."
                : "Yes, we bill transparently in AED, SAR, and USD with milestone-based invoicing (50% advance, 50% upon final launch)."}
            </p>
          </div>

          <div className="rounded-xl border border-border bg-surface p-6 shadow-xs">
            <h4 className="font-display text-sm font-bold text-foreground">
              {isAr ? "هل تدعم المواقع اللغتين العربية والإنجليزية؟" : "Can our website support both Arabic and English?"}
            </h4>
            <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
              {isAr
                ? "بالتأكيد. نبني مواقع ثنائية اللغة متكاملة تدعم التصفح السلس من اليمين لليسار (RTL) مع خطوط عربية فاخرة وأزرار تبديل فورية بين اللغات."
                : "Yes, we build fully responsive bilingual websites with native RTL (Right-to-Left) Arabic support and instant language toggling."}
            </p>
          </div>

          <div className="rounded-xl border border-border bg-surface p-6 shadow-xs">
            <h4 className="font-display text-sm font-bold text-foreground">
              {isAr ? "كيف يتم التواصل وإدارة التعديلات أثناء العمل؟" : "How do Gulf clients communicate during project delivery?"}
            </h4>
            <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
              {isAr
                ? "نعمل وفق ساعات عمل الخليج الرسمية (GMT+4)، ويكون التواصل مباشراً ومستمراً عبر مجموعة واتساب خاصة واجتماعات جوجل ميت السريعة دون أي حواجز."
                : "We operate aligned with Gulf business hours (GMT+4) with direct WhatsApp and Google Meet support throughout development."}
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
}

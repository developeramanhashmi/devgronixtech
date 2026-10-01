// ============= Lines 41-79 of 487 total lines =============

const seeds: ServicePricingSeed[] = [
  {
    serviceId: "svc-web",
    billingType: "per project",
    plans: [
      {
        name: "Basic",
        description: "Perfect for Individuals & Small Businesses",
        price: "₹999",
        originalPrice: "₹1,999",
        features: [
          "1–4 Pages Website",
          "Free Domain (1 Year)",
          "Free Hosting (1 Year)",
          "Mobile Responsive",
          "Basic Design",
          "Contact Form",
          "Free Advice & Support",
        ],
      },
      {
        name: "Professional",
        description: "Best for Businesses & Startups",
        price: "₹1,999",
        originalPrice: "₹3,999",
        popular: true,
        features: [
          "5–7 Pages Website",
          "Free Domain (1 Year)",
          "Free Hosting (1 Year)",
          "Modern & Attractive Design",
          "Mobile Responsive",
          "Contact Form + WhatsApp",
          "Basic SEO Setup",
          "Free Advice & Support",
        ],
      },
      {
        name: "Business",
        description: "Ideal for Growing Businesses",
        price: "₹2,499",
        originalPrice: "₹4,999",
        features: [
          "Up to 10 Pages Website",
          "Free Domain (1 Year)",
          "Free Hosting (1 Year)",
          "Premium & Custom Design",
          "Mobile Responsive",
          "Contact Form + WhatsApp",
          "Basic SEO Setup",
          "Blog / News Section",
          "Free Advice & Support",
        ],
      },
      customPlan("per project"),
    ],
  },
  {

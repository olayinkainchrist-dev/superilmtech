import {
  BarChart3,
  Bot,
  Cloud,
  Code2,
  Database,
  Globe2,
  Lock,
  Rocket,
  Server,
  ShieldCheck,
  ShoppingCart,
} from "lucide-react"

export const navLinks = [
  { label: "Solutions", href: "/solutions" },
  { label: "Products", href: "/products" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Pricing", href: "/pricing" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
]

export const stats = [
  { value: "99.9%", label: "Cloud-ready uptime architecture" },
  { value: "24/7", label: "Scalable digital business systems" },
  { value: "AI", label: "Automation-first product strategy" },
  { value: "SaaS", label: "Built for recurring revenue models" },
]

export const solutions = [
  {
    icon: Code2,
    title: "Custom Software Development",
    description:
      "We design and build scalable web, mobile, desktop, and enterprise applications tailored to real business operations.",
    impact: "Enterprise-ready systems built for long-term scalability.",
  },

  {
    icon: ShoppingCart,
    title: "Retail & POS Systems",
    description:
      "Professional point-of-sale systems for supermarkets, stores, inventory control, offline sales, receipts, and multi-branch operations.",
    impact: "Offline-first POS architecture with cloud synchronization.",
  },

  {
    icon: Bot,
    title: "AI & Automation Tools",
    description:
      "AI-powered workflows, analytics, prediction systems, chatbots, recommendation engines, and automation platforms.",
    impact: "Automation that reduces manual work and improves decisions.",
  },

  {
    icon: Cloud,
    title: "Cloud & SaaS Platforms",
    description:
      "Cloud-native platforms with subscriptions, dashboards, APIs, authentication, analytics, and business scalability.",
    impact: "Recurring revenue SaaS infrastructure for modern businesses.",
  },

  {
    icon: Database,
    title: "Data Systems & Analytics",
    description:
      "Dashboards, reporting systems, ETL pipelines, databases, KPIs, machine learning, and decision intelligence.",
    impact: "Business intelligence systems powered by actionable data.",
  },

  {
    icon: ShieldCheck,
    title: "Secure Enterprise Systems",
    description:
      "Role-based access, secure APIs, audit-ready architecture, authentication, backups, and production deployment support.",
    impact: "Security-focused software engineering and deployment workflows.",
  },
]

export const products = [
  {
    title: "SuperILM POS",
    category: "Retail SaaS",

    description:
      "A professional supermarket POS system with sales, stock control, receipt printing, offline mode, sync, user roles, and cloud expansion.",

    features: [
      "Offline sales",
      "Inventory",
      "Receipts",
      "Multi-user roles",
      "Cloud sync",
      "Barcode workflow",
    ],

    cta: "View Product",

    href: "https://superilm.gumroad.com/l/superilm-pos",
  },

  {
    title: "SuperILM AI Tools",
    category: "AI Platform",

    description:
      "Business automation and AI-powered tools for customer insights, predictive analytics, smart workflows, and reporting.",

    features: [
      "Prediction",
      "Automation",
      "Dashboards",
      "AI assistants",
    ],

    cta: "Explore AI",

    href: "/contact",
  },

  {
    title: "SuperILM Cloud Suite",
    category: "Enterprise Cloud",

    description:
      "Cloud-ready business management tools for operations, reporting, client portals, billing, and scalable company workflows.",

    features: [
      "Cloud apps",
      "APIs",
      "Reports",
      "Secure access",
    ],

    cta: "Request Demo",

    href: "/contact",
  },
]

export const capabilities = [
  {
    icon: Server,
    title: "Backend APIs",
    text: "FastAPI, Node.js, REST APIs, authentication, role-based access.",
  },

  {
    icon: Globe2,
    title: "Frontend Systems",
    text: "React, Next.js, dashboards, responsive apps, admin portals.",
  },

  {
    icon: Database,
    title: "Databases",
    text: "PostgreSQL, SQLite, SQLAlchemy, data modeling, reporting.",
  },

  {
    icon: Cloud,
    title: "Cloud Deployment",
    text: "Vercel, Render, Docker-ready architecture, SaaS deployment.",
  },

  {
    icon: BarChart3,
    title: "Analytics",
    text: "KPIs, charts, insights, business intelligence, forecasting.",
  },

  {
    icon: Lock,
    title: "Security",
    text: "JWT, permissions, secure flows, audit-friendly structure.",
  },
]

export const portfolio = [
  {
    title: "Supermarket POS System",

    description:
      "A desktop and cloud-ready POS solution for retail businesses with inventory, offline mode, syncing, receipts, users, and store management.",

    tags: [
      "FastAPI",
      "React",
      "Tauri",
      "SQLite",
      "PostgreSQL",
      "Cloud Sync",
    ],

    // LIVE DEMO VIDEO
    video: "/videos/superilm-pos-demo.mp4",

    // PRODUCT LINK
    productUrl: "https://superilm.gumroad.com/l/superilm-pos",

    metrics: [
      "Offline-first architecture",
      "Cloud synchronization",
      "Multi-store ready",
    ],
  },

  {
    title: "Customer Churn Prediction Platform",

    description:
      "A machine learning system that predicts customer churn using product usage, demographics, and sentiment data.",

    tags: [
      "Python",
      "Scikit-learn",
      "Streamlit",
      "ML",
      "Analytics",
    ],

    metrics: [
      "Predictive analytics",
      "AI-powered insights",
      "Customer retention intelligence",
    ],
  },

  {
    title: "Business Intelligence Dashboards",

    description:
      "Modern dashboards that convert raw business data into useful KPIs, trends, and executive decisions.",

    tags: [
      "React",
      "Charts",
      "SQL",
      "Analytics",
      "Cloud",
    ],

    metrics: [
      "Executive reporting",
      "Live KPI dashboards",
      "Data-driven decision systems",
    ],
  },
]

export const pricing = [
  {
    name: "Starter",

    price: "Custom",

    description:
      "For small businesses that need a professional digital system.",

    features: [
      "Company website",
      "Basic dashboard",
      "Contact forms",
      "Deployment support",
    ],
  },

  {
    name: "Growth",

    price: "Custom",

    description:
      "For growing businesses that need automation and scalable software.",

    features: [
      "Web app",
      "Admin panel",
      "Database",
      "Authentication",
      "Cloud deployment",
    ],

    highlighted: true,
  },

  {
    name: "Enterprise",

    price: "Custom",

    description:
      "For companies that need advanced systems, integrations, and SaaS platforms.",

    features: [
      "SaaS platform",
      "APIs",
      "AI tools",
      "Multi-tenant system",
      "Priority support",
    ],
  },
]

export const blogPosts = [
  {
    title:
      "Best POS System Features for Retail Businesses in Nigeria",

    description:
      "Essential POS features for supermarkets, stores, and retail businesses that need sales tracking, inventory control, receipts, and reports.",

    category: "POS Systems",

    href: "/blog",
  },

  {
    title:
      "How SaaS Platforms Help Businesses Scale Faster",

    description:
      "How SaaS products help businesses reduce manual work, improve access, automate workflows, and build recurring digital revenue models.",

    category: "SaaS",

    href: "/blog",
  },

  {
    title:
      "How AI Can Improve Business Operations",

    description:
      "Practical ways AI tools can support automation, customer insights, forecasting, reporting, and better decision making.",

    category: "AI",

    href: "/blog",
  },
]

export const company = {
  name: "SuperILM Tech",

  legalName: "SuperILM Technologies",

  tagline: "Software • SaaS • AI",

  email: "admin@superilmtech.com",

  phone: "+2348052480026",

  location: "Lagos, Nigeria — serving global clients",

  website: "https://superilmtech.com",

  founder: "Yinks",

  focus:
    "Enterprise software, SaaS systems, AI products, POS infrastructure, and scalable digital business platforms.",
}
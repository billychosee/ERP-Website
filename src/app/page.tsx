import Link from "next/link";
import Image from "next/image";
import {
  DollarSign, // Finance
  Settings, // Customizable
  LayoutGrid, // Modules/Unified
  ArrowRight,
  Database, // Integrations
  Factory, // Industries
  UserCheck, // FIX: Added the missing icon
} from "lucide-react";

// The default export must be a function that returns JSX.
// The syntax 'export default function Home()' ensures this.
export default function Home() {
  // --- Data for Services/Modules Section (ERP Focus) ---
  const erpModules = [
    {
      title: "Unified Finance & Accounting",
      description:
        "Automate invoices, track expenses, handle multi-currency, and close books effortlessly, with built-in fiscalization.",
      icon: DollarSign,
      link: "/modules/finance",
      color: "border-blue-600",
    },
    {
      title: "Inventory & Supply Chain",
      description:
        "Keep stock, assets, and resources under control, from warehouses to retail, with real-time visibility.",
      icon: LayoutGrid,
      link: "/modules/inventory",
      color: "border-[#8DC440]",
    },
    {
      title: "HR & Payroll Management",
      description:
        "Streamline recruitment, attendance, performance, and localized payroll using industry-tailored workflows.",
      icon: Settings, // Using Settings for management/configuration
      link: "/modules/hr",
      color: "border-[#64AC6F]",
    },
  ];

  // --- Data for Stats/About Section (ERP Focus) ---
  const erpStats = [
    { count: "10+", label: "Local Market Compliance", color: "text-blue-600" },
    { count: "1000+", label: "Users Worldwide", color: "text-[#8DC440]" },
    { count: "99.9%", label: "Uptime Reliability", color: "text-[#64AC6F]" },
  ];

  // --- Data for Work Process Section (ERP Implementation Focus) ---
  const implementationSteps = [
    {
      step: "01",
      title: "Discovery & Fit",
      description:
        "Analyze your current processes and define the required ZERP365 configuration.",
    },
    {
      step: "02",
      title: "Setup & Customization",
      description:
        "Configure modules, workflows, and integrations tailored to your local needs.",
    },
    {
      step: "03",
      title: "Training & Go-Live",
      description:
        "Comprehensive staff training followed by a seamless transition to the live system.",
    },
    {
      step: "04",
      title: "Support & Optimization",
      description:
        "Ongoing local support, performance monitoring, and strategic system upgrades.",
    },
  ];

  // --- Utility Component for Module Cards (Reusable sleek design) ---
  const ModuleCard = ({
    title,
    description,
    icon: Icon,
    color,
    link,
  }: {
    title: string;
    description: string;
    icon: React.ComponentType<{ className?: string }>;
    color: string;
    link: string;
  }) => (
    <div
      className={`bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border-t-4 ${color}`}
    >
      <div className="mb-6">
        <Icon className={`w-10 h-10 text-gray-900`} />
      </div>
      <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      <Link
        href={link}
        className="text-[#8DC440] font-medium flex items-center hover:text-[#64AC6F] transition-colors"
      >
        Explore Module <ArrowRight className="w-4 h-4 ml-2" />
      </Link>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* -------------------------------------------------
        1. SLEEK HERO SECTION (ERP Focus)
        -------------------------------------------------
      */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gray-900">
        {/* Background Image Overlay: Abstract/Tech Grid for sleek look */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/home-hero.png" // Local hero image
            alt="Abstract data network and connectivity pattern"
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-black/10"></div>
        </div>

        {/* Content Overlay */}
        <div className="container mx-auto px-6 relative z-10 text-center py-20">
          <div className="max-w-5xl mx-auto">
            <p className="text-[#8DC440] text-base font-medium uppercase tracking-widest mb-3 animate-fade-in-up">
              The Unified Business Platform
            </p>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight animate-slide-in-left">
              Run Your <span className="text-[#64AC6F]">Entire Business</span>{" "}
              on One Platform
            </h1>
            <p className="text-lg text-gray-300 mb-8 max-w-4xl mx-auto animate-slide-in-right">
              ZERP365 is a single, powerful platform built specifically to
              handle African compliance (ZIMRA, fiscalization, multi-currency),
              uniting Finance, Operations, HR, and CRM.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up">
              <Link
                href="/demo"
                className="bg-[#64AC6F] text-white px-8 py-3 rounded-full hover:bg-[#8DC440] transition-colors text-base font-semibold shadow-xl hover:shadow-[#8DC440] transform hover:scale-105"
              >
                Get a Personalized Demo
              </Link>
              <Link
                href="/pricing"
                className="text-white border-2 border-gray-500 px-8 py-3 rounded-full hover:bg-gray-700 transition-colors text-base font-semibold transform hover:scale-105"
              >
                Start Free Trial
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------
        2. MODULES SNAPSHOT (Sleek Service Card Look)
        -------------------------------------------------
      */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[#8DC440] font-semibold mb-2 uppercase text-sm tracking-widest">
              End-to-End Control
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
              Key Capabilities
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {erpModules.map((module, index) => (
              <div key={index} className="animate-fade-in-up" style={{animationDelay: `${index * 0.2}s`}}>
                <ModuleCard
                  title={module.title}
                  description={module.description}
                  icon={module.icon}
                  link={module.link}
                  color={module.color}
                />
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/modules"
              className="text-[#8DC440] font-semibold flex items-center justify-center hover:text-[#64AC6F] transition-colors"
            >
              Explore All 15+ Integrated Modules{" "}
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------
        3. ABOUT US / STATS (ERP Focus & African Compliance)
        * Sleek design with integrated stats bar
        -------------------------------------------------
      */}
      {/* Assume erpStats is defined elsewhere, e.g.:
const erpStats = [
  { count: "100+", label: "Features", color: "text-red-400" },
  { count: "10x", label: "Faster Rollout", color: "text-yellow-400" },
  { count: "7+", label: "Tax Models", color: "text-blue-400" ],
};
*/}

      <section className="py-24 bg-gray-900 text-white">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Right Side: Image with 'african-business-collaboration.png' */}
          <div className="lg:col-span-6 relative h-[450px] overflow-hidden rounded-xl shadow-2xl">
            {/* Replaced Placeholder with Image */}
            <Image
              src="/african-business-collaboration.png"
              alt="ZERP365 Dashboard showing African business collaboration and data"
              className="w-full h-full object-cover"
              layout="fill"
              fill={true}
            />
          </div>

          {/* Left Side: Text & Stats */}
          <div className="lg:col-span-6">
            <p className="text-[#8DC440] font-semibold mb-2 uppercase text-sm tracking-widest">
              The ZERP365 Advantage
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
              Built for African Business Realities
            </h2>
            <p className="text-lg text-gray-300 mb-10">
              Forget expensive integrations and non-compliant global software.
              ZERP365 is designed locally to handle complexities like
              multi-currency, ZIMRA regulations, and unique regional supply
              chains, right out of the box.
            </p>

            {/* Stats Row (Similar to UI Image stats bar) */}
            <div className="grid grid-cols-3 gap-6 py-4 border-t border-b border-gray-700">
               {erpStats.map((stat, index) => (
                 <div key={index} className="text-left animate-fade-in-up" style={{animationDelay: `${index * 0.3}s`}}>
                   <p className={`text-4xl font-bold ${stat.color}`}>
                     {stat.count}
                   </p>
                   <p className="text-sm text-gray-400 mt-1">{stat.label}</p>
                 </div>
               ))}
             </div>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------
        4. INTEGRATIONS & INDUSTRIES (Combined and Sleek)
        -------------------------------------------------
      */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Integrations Column */}
            <div>
              <Database className="w-10 h-10 text-[#8DC440] mb-4" />
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Seamless, Localized Integrations
              </h3>
              <p className="text-lg text-gray-600 mb-8">
                Connect effortlessly with key local payment gateways (EcoCash,
                OneMoney), ZIMRA/Tax APIs, and your favorite external tools
                (POS, eCommerce, WhatsApp).
              </p>

              <div className="grid grid-cols-2 gap-4">
                {[
                  "ZIMRA Fiscalization",
                  "EcoCash/OneMoney",
                  "POS Systems Sync",
                  "WhatsApp & SMS Alerts",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-2 bg-white p-3 rounded-lg shadow-sm border border-gray-100"
                  >
                    <UserCheck className="w-4 h-4 text-[#8DC440]" />
                    <span className="text-sm font-medium text-gray-700">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
              <Link
                href="/integrations"
                className="text-[#8DC440] font-semibold flex items-center mt-6 hover:text-[#64AC6F] transition-colors"
              >
                View All Integration Partners{" "}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>

            {/* Industries Column */}
            <div>
              <Factory className="w-10 h-10 text-[#8DC440] mb-4" />
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Industry-Specific Workflows
              </h3>
              <p className="text-lg text-gray-600 mb-8">
                The platform adapts to your industry&apos;s unique demands, from
                complex manufacturing supply chains to grant management for
                NGOs.
              </p>

              <div className="flex flex-wrap gap-2">
                {[
                  "Retail & E-commerce",
                  "Manufacturing",
                  "NGOs & Non-Profits",
                  "Construction & Projects",
                  "Education",
                  "Agriculture",
                  "Logistics & Distribution",
                ].map((industry, index) => (
                  <span
                    key={index}
                    className="bg-gray-200 text-gray-700 text-sm px-4 py-2 rounded-full font-medium hover:bg-blue-100 transition-colors"
                  >
                    {industry}
                  </span>
                ))}
              </div>
              <Link
                href="/industries"
                className="text-[#8DC440] font-semibold flex items-center mt-6 hover:text-[#64AC6F] transition-colors"
              >
                See All Supported Industries{" "}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------
        5. WORK PROCESS (Sleek Implementation Timeline)
        * Adapted from UI image but for ERP implementation
        -------------------------------------------------
      */}

      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <p className="text-[#8DC440] font-semibold mb-2 uppercase text-sm tracking-widest">
              Step-by-Step
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
              Our Implementation <span className="text-[#64AC6F]">Path</span>
            </h2>
          </div>

          <div className="relative">
            {/* Horizontal Line Connector */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-[#8DC440] transform -translate-y-1/2 z-0"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
               {implementationSteps.map((step, index) => (
                 <div
                   key={index}
                   className="relative z-10 p-8 bg-white rounded-xl shadow-xl transition transform duration-300 hover:scale-[1.03] flex flex-col items-center text-center animate-fade-in-up"
                   style={{animationDelay: `${index * 0.4}s`}}
                 >
                  {/* Icon Circle - Using step number instead of icon */}
                  <div className="w-20 h-20 flex items-center justify-center rounded-full bg-gradient-to-br from-[#8DC440] to-[#64AC6F] text-white text-3xl font-bold mb-4 border-4 border-white shadow-inner">
                    {step.step}
                  </div>

                  {/* Step Number Badge */}
                  <div className="absolute top-0 right-0 bg-gradient-to-br from-[#20356A] to-blue-700 text-white text-xs font-bold py-1 px-3 rounded-tr-xl rounded-bl-xl shadow-md">
                    STEP {step.step}
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm flex-grow">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------
        6. FINAL CALL TO ACTION (CTA) - Sleek Glass Design
        -------------------------------------------------
      */}
      <section className="relative py-32 overflow-hidden">
        {/* Background with gradient and glass effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#20356A] via-[#64AC6F] to-[#8DC440] opacity-90"></div>
        <div className="absolute inset-0 bg-black/20"></div>

        {/* Glass morphism overlay */}
        <div className="absolute inset-0 glass"></div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-8 leading-tight">
              Stop Juggling Apps.{" "}
              <span className="text-[#8DC440]">Start Unifying.</span>
            </h2>
            <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
              Get the only ERP solution built for growth and compliance in the
              modern African market.
            </p>

            {/* Sleek CTA buttons with glass effect */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/demo"
                className="group relative bg-white/10 backdrop-blur-md border border-white/20 text-white px-12 py-5 rounded-full hover:bg-white/20 transition-all duration-300 text-lg font-semibold shadow-2xl hover:shadow-white/20 hover:scale-105"
              >
                <span className="relative z-10">Book a Demo</span>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#8DC440] to-[#64AC6F] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
              <Link
                href="/pricing"
                className="group relative bg-transparent border-2 border-white/30 text-white px-12 py-5 rounded-full hover:bg-white/10 hover:border-white/50 transition-all duration-300 text-lg font-semibold backdrop-blur-sm hover:scale-105"
              >
                See Pricing
              </Link>
            </div>

            {/* Additional sleek elements */}
            <div className="mt-16 flex justify-center">
              <div className="flex items-center space-x-8 text-white/70">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-[#8DC440] rounded-full animate-pulse"></div>
                  <span className="text-sm">Free Setup</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-[#20356A] rounded-full animate-pulse"></div>
                  <span className="text-sm">Local Support</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-[#64AC6F] rounded-full animate-pulse"></div>
                  <span className="text-sm">30-Day Trial</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
 
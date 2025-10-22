import Link from 'next/link';

export const metadata = {
  title: 'Tailored for your Industry',
  description: 'Retail, Manufacturing, Services, Construction, Finance, Agriculture, Education, NGOs — ZERP263 adapts to your workflows, not the other way around.',
};

export default function Industries() {
  const industries = [
    {
      name: 'Manufacturing & Production',
      icon: '🏭',
      description: 'BOMs, production tracking, and cost control',
      subIndustries: ['Automotive', 'Electronics', 'Food & Beverage', 'Chemicals & Pharmaceuticals', 'Textiles & Apparel', 'Machinery & Equipment', 'Furniture']
    },
    {
      name: 'Retail & E-Commerce',
      icon: '🛒',
      description: 'POS, stock, and customer loyalty in one dashboard',
      subIndustries: ['Brick-and-Mortar Retail', 'Online Stores / eCommerce', 'Wholesale & Distribution', 'Supermarkets & Hypermarkets', 'Specialty Stores']
    },
    {
      name: 'Services',
      icon: '💼',
      description: 'CRM, invoicing, timesheets, and project billing',
      subIndustries: ['Professional Services (Consulting, Law, Accounting)', 'IT & Software Services', 'Marketing & Advertising', 'Event Management', 'Hospitality & Tourism']
    },
    {
      name: 'Construction & Engineering',
      icon: '🏗️',
      description: 'Job costing, procurement, and asset tracking',
      subIndustries: ['Residential & Commercial Construction', 'Civil Engineering', 'Infrastructure Projects', 'Real Estate Development', 'Architecture & Design Firms']
    },
    {
      name: 'Healthcare & Life Sciences',
      icon: '🏥',
      description: 'Patient management, billing, and compliance',
      subIndustries: ['Hospitals & Clinics', 'Pharmacies', 'Laboratories', 'Medical Equipment Suppliers', 'Health & Wellness Centers']
    },
    {
      name: 'Finance & Insurance',
      icon: '💰',
      description: 'Compliance, reporting, and automation at scale',
      subIndustries: ['Banks', 'Microfinance & Lending Institutions', 'Insurance Companies', 'Investment Firms', 'Accounting Firms']
    },
    {
      name: 'Agriculture & Agribusiness',
      icon: '🌾',
      description: 'Crop management, livestock tracking, and supply chain',
      subIndustries: ['Crop Farming', 'Livestock & Poultry', 'Fisheries & Aquaculture', 'Agro-Processing', 'Equipment & Fertilizer Suppliers']
    },
    {
      name: 'Education',
      icon: '🎓',
      description: 'Student management, fee collection, and administration',
      subIndustries: ['Schools (Primary, Secondary, Tertiary)', 'Training Centers & Colleges', 'Online Learning Platforms', 'Vocational Institutions']
    },
    {
      name: 'Non-Profits & NGOs',
      icon: '🤝',
      description: 'Grants, fund tracking, and multi-branch coordination',
      subIndustries: ['Charitable Organizations', 'Foundations & Trusts', 'International Aid Organizations', 'Community Development Programs']
    },
    {
      name: 'Logistics & Transportation',
      icon: '🚚',
      description: 'Fleet management, route optimization, and delivery tracking',
      subIndustries: ['Freight & Shipping Companies', 'Courier Services', 'Warehousing & Distribution', 'Fleet Management', 'Public Transport Operators']
    },
    {
      name: 'Energy & Utilities',
      icon: '⚡',
      description: 'Resource management, billing, and regulatory compliance',
      subIndustries: ['Power Generation & Distribution', 'Renewable Energy Companies', 'Water & Waste Management', 'Oil & Gas', 'Utility Service Providers']
    },
    {
      name: 'Telecommunications & IT',
      icon: '📡',
      description: 'Service management, billing, and network operations',
      subIndustries: ['Telecom Operators', 'Internet Service Providers', 'Cloud & Hosting Providers', 'IT Hardware Suppliers']
    },
    {
      name: 'Hospitality & Leisure',
      icon: '🏨',
      description: 'Reservation management, guest services, and operations',
      subIndustries: ['Hotels & Resorts', 'Restaurants & Cafes', 'Bars & Nightclubs', 'Travel Agencies', 'Sports & Fitness Centers']
    },
    {
      name: 'Government & Public Sector',
      icon: '🏛️',
      description: 'Citizen services, procurement, and regulatory compliance',
      subIndustries: ['Municipalities', 'Ministries & Departments', 'Public Hospitals', 'Education Boards', 'Regulatory Agencies']
    },
    {
      name: 'Media & Entertainment',
      icon: '🎬',
      description: 'Content management, distribution, and audience analytics',
      subIndustries: ['TV, Radio, and Streaming', 'Film & Video Production', 'Gaming Companies', 'Publishing Houses', 'Event Production']
    },
    {
      name: 'Chemicals & Pharmaceuticals',
      icon: '🧪',
      description: 'Quality control, regulatory compliance, and supply chain',
      subIndustries: ['Industrial Chemicals', 'Cosmetic Products', 'Pharmaceuticals', 'Personal Care Products', 'Laboratory Supplies']
    },
    {
      name: 'Real Estate & Property Management',
      icon: '🏢',
      description: 'Property management, tenant services, and maintenance',
      subIndustries: ['Real Estate Agencies', 'Property Developers', 'Facility Management Firms', 'Co-working Spaces']
    },
    {
      name: 'Wholesale & Distribution',
      icon: '📦',
      description: 'Inventory management, order processing, and logistics',
      subIndustries: ['Industrial Supplies', 'Consumer Goods', 'Pharmaceuticals & Healthcare Products', 'Electronics & Appliances']
    },
    {
      name: 'Transportation & Fleet Management',
      icon: '🚗',
      description: 'Vehicle tracking, maintenance scheduling, and route optimization',
      subIndustries: ['Logistics Companies', 'Fleet Leasing & Rentals', 'Passenger Transport', 'Shipping & Ports']
    },
    {
      name: 'Miscellaneous / Others',
      icon: '🔧',
      description: 'Custom solutions for specialized business needs',
      subIndustries: ['Research & Development Labs', 'Aerospace & Defense', 'Artisans & Crafts', 'Franchises & Chains', 'Startups across sectors']
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url(/hero_built_for_your_industry_black_team.png)",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
        </div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#8DC440]/20 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute top-1/2 -left-10 w-60 h-60 bg-blue-500/10 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute bottom-0 right-1/4 w-52 h-52 bg-purple-500/10 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="relative container mx-auto px-4 text-white z-10">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
            {/* Left Section - About Industries */}
            <div className="animate-fade-in-up">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="text-[#8DC440]">Built</span> for Your Industry
              </h1>
              <p className="text-xl mb-4 max-w-3xl">
                Retail, Manufacturing, Services, Construction, Finance,
                Agriculture, Education, NGOs — ZERP263 adapts to your workflows,
                not the other way around.
              </p>
            </div>

            {/* Right Section - Need Our Services */}
            <div
              className="bg-white/10 backdrop-blur-md rounded-xl p-8 text-center animate-fade-in-up"
              style={{ animationDelay: "0.3s" }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Industry-Specific Solutions?
              </h2>
              <p className="text-lg mb-8">
                Let&apos;s discuss how ZERP263 can be tailored to your
                industry&apos;s unique requirements.
              </p>
              <Link
                href="/demo"
                className="bg-[#8DC440] text-white px-8 py-3 rounded-full hover:bg-[#64AC6F] transition-all duration-300 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 inline-block"
              >
                Schedule Discovery Call
              </Link>
              <p className="mt-4 text-sm">Or explore our industries below</p>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------
        INDUSTRIES GRID (Sleek Design)
        -------------------------------------------------
      */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Industry Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              ZERP263 adapts to your industry&apos;s unique workflows and
              requirements, providing tailored solutions for every sector
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => {
              const colors = [
                { bg: "from-blue-500/20", text: "group-hover:text-blue-600" },
                { bg: "from-green-500/20", text: "group-hover:text-green-600" },
                {
                  bg: "from-purple-500/20",
                  text: "group-hover:text-purple-600",
                },
                { bg: "from-red-500/20", text: "group-hover:text-red-600" },
                {
                  bg: "from-yellow-500/20",
                  text: "group-hover:text-yellow-600",
                },
                { bg: "from-pink-500/20", text: "group-hover:text-pink-600" },
                {
                  bg: "from-indigo-500/20",
                  text: "group-hover:text-indigo-600",
                },
                { bg: "from-teal-500/20", text: "group-hover:text-teal-600" },
                {
                  bg: "from-orange-500/20",
                  text: "group-hover:text-orange-600",
                },
                { bg: "from-cyan-500/20", text: "group-hover:text-cyan-600" },
                { bg: "from-lime-500/20", text: "group-hover:text-lime-600" },
                {
                  bg: "from-emerald-500/20",
                  text: "group-hover:text-emerald-600",
                },
                {
                  bg: "from-violet-500/20",
                  text: "group-hover:text-violet-600",
                },
                { bg: "from-rose-500/20", text: "group-hover:text-rose-600" },
                { bg: "from-amber-500/20", text: "group-hover:text-amber-600" },
                { bg: "from-sky-500/20", text: "group-hover:text-sky-600" },
                { bg: "from-slate-500/20", text: "group-hover:text-slate-600" },
                { bg: "from-stone-500/20", text: "group-hover:text-stone-600" },
                {
                  bg: "from-neutral-500/20",
                  text: "group-hover:text-neutral-600",
                },
                { bg: "from-gray-500/20", text: "group-hover:text-gray-600" },
                { bg: "from-zinc-500/20", text: "group-hover:text-zinc-600" },
              ];
              const colorIndex = index % colors.length;
              const colorScheme = colors[colorIndex];

              return (
                <div
                  key={index}
                  className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4 hover:rotate-1 overflow-hidden border border-gray-100"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div
                    className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-br ${colorScheme.bg} to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-all duration-700 rotate-12 group-hover:rotate-0`}
                  ></div>
                  <div className="absolute -top-2 -right-2 w-20 h-20 bg-gradient-to-br from-[#8DC440]/30 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200"></div>

                  <div className="relative p-8">
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-6xl group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 ease-out">
                        {industry.icon}
                      </div>
                      <div className="w-3 h-3 bg-[#8DC440] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-300"></div>
                    </div>

                    <h3
                      className={`text-xl font-bold text-gray-900 mb-2 transition-colors duration-300 ${colorScheme.text}`}
                    >
                      {industry.name}
                    </h3>

                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {industry.description}
                    </p>

                    <div className="space-y-2">
                      {industry.subIndustries
                        .slice(0, 3)
                        .map((sub, subIndex) => (
                          <div
                            key={subIndex}
                            className="flex items-center text-sm text-gray-500 group-hover:text-gray-700 transition-colors duration-300"
                          >
                            <div className="w-1.5 h-1.5 bg-[#8DC440] rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200"></div>
                            {sub}
                          </div>
                        ))}
                      {industry.subIndustries.length > 3 && (
                        <div className="text-sm text-[#8DC440] font-semibold group-hover:text-[#64AC6F] transition-colors duration-300 flex items-center">
                          <svg
                            className="w-4 h-4 mr-1 group-hover:rotate-180 transition-transform duration-300"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 9l-7 7-7-7"
                            />
                          </svg>
                          +{industry.subIndustries.length - 3} more industries
                        </div>
                      )}
                    </div>

                    <div className="mt-6 pt-4 border-t border-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-500">
                      <div className="flex items-center text-[#8DC440] font-medium">
                        <span className="text-sm">Explore solutions</span>
                        <svg
                          className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/demo"
              className="bg-[#8DC440] text-white px-8 py-3 rounded-full hover:bg-[#64AC6F] transition-colors text-lg font-semibold"
            >
              See All Industries →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
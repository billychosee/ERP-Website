import Link from 'next/link';

export const metadata = {
  title: 'Tailored for your Industry',
  description: 'Retail, Manufacturing, Services, Construction, Finance, Agriculture, Education, NGOs — ZERP365 adapts to your workflows, not the other way around.',
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
            backgroundImage: "url(/hero_built_for_your_industry_black_team.png)",
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
                Agriculture, Education, NGOs — ZERP365 adapts to your workflows,
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
                Let&apos;s discuss how ZERP365 can be tailored to your
                industry&apos;s unique requirements.
              </p>
              <Link
                href="/demo"
                className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-all duration-300 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 inline-block"
              >
                Schedule Discovery Call
              </Link>
              <p className="mt-4 text-sm">Or explore our industries below</p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-4">{industry.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {industry.name}
                </h3>
                <p className="text-gray-600 mb-4">{industry.description}</p>
                <div className="space-y-1">
                  {industry.subIndustries.slice(0, 3).map((sub, subIndex) => (
                    <div key={subIndex} className="text-sm text-gray-500">
                      • {sub}
                    </div>
                  ))}
                  {industry.subIndustries.length > 3 && (
                    <div className="text-sm text-blue-600 font-medium">
                      +{industry.subIndustries.length - 3} more
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/demo"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors text-lg font-semibold"
            >
              See All Industries →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
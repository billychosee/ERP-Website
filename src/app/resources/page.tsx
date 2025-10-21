import Link from 'next/link';

export const metadata = {
  title: 'ZERP365 Resources — Business Growth & Automation Insights',
  description: 'Discover insights on ERP, automation, compliance, and business growth strategies for SMEs and enterprises.',
};

export default function Resources() {
  const articles = [
    {
      title: "5 Signs It's Time to Upgrade to an ERP System",
      excerpt: "Learn the key indicators that your current business processes are ready for a comprehensive ERP solution.",
      category: "ERP Strategy",
      readTime: "5 min read"
    },
    {
      title: "ERP vs Multiple Apps: The Real Cost of Inefficiency",
      excerpt: "Discover how disconnected systems cost your business more than you think in time, money, and opportunities.",
      category: "Cost Analysis",
      readTime: "7 min read"
    },
    {
      title: "How Automation Improves Profit Margins",
      excerpt: "Explore practical ways automation can boost your bottom line through reduced errors and increased efficiency.",
      category: "Automation",
      readTime: "6 min read"
    },
    {
      title: "Migrating from Legacy Systems — What to Expect",
      excerpt: "A comprehensive guide to planning and executing a successful transition from outdated business software.",
      category: "Implementation",
      readTime: "10 min read"
    },
    {
      title: "Building Scalable Business Processes",
      excerpt: "Learn how to design workflows that grow with your business and adapt to changing market conditions.",
      category: "Business Strategy",
      readTime: "8 min read"
    },
    {
      title: "Data Security in the Cloud Era",
      excerpt: "Understanding modern security practices and how to protect your business data in cloud-based systems.",
      category: "Security",
      readTime: "6 min read"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url(/hero_learn_grow_automate_black_team.png)",
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
            {/* Left Section - About Resources */}
            <div className="animate-fade-in-up">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="text-[#8DC440]">Learn</span>, Grow, Automate
              </h1>
              <p className="text-xl mb-4 max-w-3xl">
                Discover insights on ERP, automation, compliance, and business
                growth strategies for SMEs and enterprises.
              </p>
            </div>

            {/* Right Section - Need Our Services */}
            <div
              className="bg-white/10 backdrop-blur-md rounded-xl p-8 text-center animate-fade-in-up"
              style={{ animationDelay: "0.3s" }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Need Expert Guidance?
              </h2>
              <p className="text-lg mb-8">
                Let&apos;s discuss how ZERP365 can help optimize your business
                processes and drive growth.
              </p>
              <Link
                href="/demo"
                className="bg-[#8DC440] text-white px-8 py-3 rounded-full hover:bg-[#64AC6F] transition-all duration-300 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 inline-block"
              >
                Schedule Discovery Call
              </Link>
              <p className="mt-4 text-sm">Or explore our resources below</p>
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <article
                key={index}
                className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium text-blue-600 bg-blue-100 px-2 py-1 rounded">
                    {article.category}
                  </span>
                  <span className="text-sm text-gray-500">
                    {article.readTime}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors cursor-pointer">
                  {article.title}
                </h3>
                <p className="text-gray-600 mb-4">{article.excerpt}</p>
                <Link
                  href="#"
                  className="text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                >
                  Read More →
                </Link>
              </article>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/contact"
              className="bg-[#8DC440] text-white px-8 py-3 rounded-full hover:bg-[#64AC6F] transition-colors text-lg font-semibold"
            >
              Explore All Resources →
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Resource Categories
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                ERP Guides
              </h3>
              <p className="text-gray-600 text-sm">
                Step-by-step guides for implementing and optimizing ERP systems
              </p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Automation
              </h3>
              <p className="text-gray-600 text-sm">
                Best practices for automating business processes and workflows
              </p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-purple-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Compliance
              </h3>
              <p className="text-gray-600 text-sm">
                Understanding regulatory requirements and compliance standards
              </p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-orange-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Case Studies
              </h3>
              <p className="text-gray-600 text-sm">
                Real-world examples of successful business transformations
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
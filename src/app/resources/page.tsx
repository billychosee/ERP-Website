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
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Learn, Grow, Automate
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Discover insights on ERP, automation, compliance, and business growth strategies for SMEs and enterprises.
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article, index) => (
              <article key={index} className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium text-blue-600 bg-blue-100 px-2 py-1 rounded">
                    {article.category}
                  </span>
                  <span className="text-sm text-gray-500">{article.readTime}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors cursor-pointer">
                  {article.title}
                </h3>
                <p className="text-gray-600 mb-4">{article.excerpt}</p>
                <Link href="#" className="text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                  Read More →
                </Link>
              </article>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/contact" className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors text-lg font-semibold">
              Explore All Resources →
            </Link>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Resource Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">ERP Guides</h3>
              <p className="text-gray-600 text-sm">Step-by-step guides for implementing and optimizing ERP systems</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Automation</h3>
              <p className="text-gray-600 text-sm">Best practices for automating business processes and workflows</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Compliance</h3>
              <p className="text-gray-600 text-sm">Understanding regulatory requirements and compliance standards</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Case Studies</h3>
              <p className="text-gray-600 text-sm">Real-world examples of successful business transformations</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
import Link from 'next/link';

export const metadata = {
  title: 'About ZERP365 — The Future of Business Management',
  description: 'ZERP365 is a next-generation business management system that unifies operations, finance, and teams under one platform.',
};

export default function About() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url(/hero_about_zerp365_black_team.png)",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
        </div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#8DC440]/20 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute top-1/2 -left-10 w-60 h-60 bg-[#8DC440]/10 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute bottom-0 right-1/4 w-52 h-52 bg-[#64AC6F]/10 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="relative container mx-auto px-4 text-white z-10">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
            {/* Left Section - About ZERP365 */}
            <div className="animate-fade-in-up">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="text-[#8DC440]">About</span> ZERP365
              </h1>
              <p className="text-xl mb-4 max-w-3xl">
                ZERP365 was built to solve one problem — scattered systems that
                slow down business. Our platform unites accounting, HR, sales,
                and operations in a single, intelligent workspace.
              </p>
              <p className="text-lg mb-8 max-w-2xl">
                Designed with scalability, compliance, and real-time insight at
                its core, ZERP365 gives businesses full control and clarity from
                anywhere, on any device.
              </p>
              <p className="text-lg">
                A product of Smatech Group, a leader in enterprise technology
                and digital transformation.
              </p>
            </div>

            {/* Right Section - Need Our Services */}
            <div
              className="bg-white/10 backdrop-blur-md rounded-xl p-8 text-center animate-fade-in-up"
              style={{ animationDelay: "0.3s" }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Learn More About Us?
              </h2>
              <p className="text-lg mb-8">
                Let&apos;s discuss how ZERP365 can transform your business
                operations and help you achieve your goals.
              </p>
              <Link
                href="/demo"
                className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-all duration-300 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 inline-block"
              >
                Schedule Discovery Call
              </Link>
              <p className="mt-4 text-sm">Or explore our story below</p>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Our Story
            </h2>
            <div className="prose prose-lg mx-auto text-gray-600">
              <p className="mb-6">
                In today&apos;s fast-paced business environment, companies
                struggle with disconnected systems that create inefficiencies,
                data silos, and missed opportunities. Traditional ERP systems
                are often too rigid, expensive, and complex for growing
                businesses.
              </p>
              <p className="mb-6">
                ZERP365 was born from this frustration. Our founders,
                experienced entrepreneurs and technology leaders, recognized
                that businesses needed a modern solution that could adapt to
                their unique workflows rather than forcing them to adapt to the
                software.
              </p>
              <p className="mb-6">
                Built specifically for African businesses, ZERP365 understands
                local market dynamics, regulatory requirements, and the unique
                challenges of operating in diverse industries. From retail
                stores in urban centers to NGOs in rural communities, our
                platform scales and adapts to meet every business where they
                are.
              </p>
              <p>
                Today, ZERP365 serves thousands of businesses across Africa,
                helping them streamline operations, improve decision-making, and
                accelerate growth. We&apos;re not just software — we&apos;re
                your growth partner.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why ZERP365 Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why ZERP365?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Built for African Businesses
              </h3>
              <p className="text-gray-600">
                Handles local tax, currency, and regulatory requirements across
                industries.
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
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Scalable
              </h3>
              <p className="text-gray-600">
                From small teams to large enterprises, workflows grow with you.
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
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Customizable
              </h3>
              <p className="text-gray-600">
                Dashboards, reports, and processes shaped for your sector.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-red-600"
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
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Secure
              </h3>
              <p className="text-gray-600">
                Enterprise-grade data protection with role-based access.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-yellow-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Supported
              </h3>
              <p className="text-gray-600">
                Local implementation, real humans, no ticket queues and
                industry-focused expertise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#8DC440] to-[#64AC6F] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-6">
            Stop Switching Between Systems. Everything your business needs — in
            one screen, built for your industry.
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/demo"
              className="bg-white text-[#8DC440] px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors text-lg font-semibold"
            >
              Book a Demo
            </Link>
            <Link
              href="/pricing"
              className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-[#8DC440] transition-colors text-lg font-semibold"
            >
              Start Free Trial
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
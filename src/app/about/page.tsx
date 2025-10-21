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
                its core, ZERP365 gives businesses full control and clarity.
              </p>
              {/* <p className="text-lg">
                A product of Smatech Group, a leader in enterprise technology
                and digital transformation.
              </p> */}
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
                className="bg-[#8DC440] text-white px-8 py-3 rounded-full hover:bg-[#64AC6F] transition-all duration-300 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 inline-block"
              >
                Schedule Discovery Call
              </Link>
              <p className="mt-4 text-sm">Or explore our story below</p>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------
        2. OUR STORY (Enhanced with Timeline Design)
        -------------------------------------------------
      */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[#8DC440] font-semibold mb-2 uppercase text-sm tracking-widest">
              Our Journey
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
              The ZERP365 <span className="text-[#64AC6F]">Story</span>
            </h2>
            <p className="text-xl text-gray-600 mt-4 max-w-3xl mx-auto">
              From identifying a critical need to building Africa&apos;s most
              comprehensive business platform
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            {/* Timeline Container */}
            <div className="relative">
              {/* Vertical Line */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-[#8DC440] via-[#64AC6F] to-[#8DC440]"></div>

              {/* Timeline Items */}
              <div className="space-y-16">
                {/* The Problem */}
                <div className="relative flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-12 md:text-right">
                    <div className="bg-red-50 p-8 rounded-2xl shadow-lg border-l-4 border-red-400 animate-fade-in-up">
                      <div className="flex items-center justify-center md:justify-end mb-4">
                        <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center">
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
                              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"
                            />
                          </svg>
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        The Problem
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        In today&apos;s fast-paced business environment,
                        companies struggle with disconnected systems that create
                        inefficiencies, data silos, and missed opportunities.
                        Traditional ERP systems are often too rigid, expensive,
                        and complex for growing businesses.
                      </p>
                    </div>
                  </div>

                  {/* Timeline Dot */}
                  <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#8DC440] rounded-full border-4 border-white shadow-lg z-10"></div>

                  <div className="md:w-1/2 md:pl-12 mt-8 md:mt-0">
                    <div className="text-6xl text-red-400 opacity-20">⚠️</div>
                  </div>
                </div>

                {/* The Solution */}
                <div className="relative flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-12 mt-8 md:mt-0 order-2 md:order-1">
                    <div className="text-6xl text-blue-400 opacity-20">💡</div>
                  </div>

                  <div className="md:w-1/2 md:pl-12 order-1 md:order-2">
                    <div
                      className="bg-blue-50 p-8 rounded-2xl shadow-lg border-l-4 border-blue-400 animate-fade-in-up"
                      style={{ animationDelay: "0.3s" }}
                    >
                      <div className="flex items-center justify-start mb-4">
                        <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center">
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
                              d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                            />
                          </svg>
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        The Solution
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        ZERP365 was born from this frustration. Our founders,
                        experienced entrepreneurs and technology leaders,
                        recognized that businesses needed a modern solution that
                        could adapt to their unique workflows rather than
                        forcing them to adapt to the software.
                      </p>
                    </div>
                  </div>

                  {/* Timeline Dot */}
                  <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#8DC440] rounded-full border-4 border-white shadow-lg z-10"></div>
                </div>

                {/* African Focus */}
                <div className="relative flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-12 md:text-right">
                    <div
                      className="bg-[#8DC440]/10 p-8 rounded-2xl shadow-lg border-l-4 border-[#8DC440] animate-fade-in-up"
                      style={{ animationDelay: "0.6s" }}
                    >
                      <div className="flex items-center justify-center md:justify-end mb-4">
                        <div className="bg-[#8DC440]/20 w-16 h-16 rounded-full flex items-center justify-center">
                          <svg
                            className="w-8 h-8 text-[#8DC440]"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M12 9l4 4-4 4m0-4h8"
                            />
                          </svg>
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        African Focus
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        Built specifically for African businesses, ZERP365
                        understands local market dynamics, regulatory
                        requirements, and the unique challenges of operating in
                        diverse industries. From retail stores in urban centers
                        to NGOs in rural communities, our platform scales and
                        adapts to meet every business where they are.
                      </p>
                    </div>
                  </div>

                  {/* Timeline Dot */}
                  <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#8DC440] rounded-full border-4 border-white shadow-lg z-10"></div>

                  <div className="md:w-1/2 md:pl-12 mt-8 md:mt-0">
                    <div className="text-6xl text-[#8DC440] opacity-20">🌍</div>
                  </div>
                </div>

                {/* Today */}
                <div className="relative flex flex-col md:flex-row items-center">
                  <div className="md:w-1/2 md:pr-12 mt-8 md:mt-0 order-2 md:order-1">
                    <div className="text-6xl text-green-400 opacity-20">🚀</div>
                  </div>

                  <div className="md:w-1/2 md:pl-12 order-1 md:order-2">
                    <div
                      className="bg-green-50 p-8 rounded-2xl shadow-lg border-l-4 border-green-400 animate-fade-in-up"
                      style={{ animationDelay: "0.9s" }}
                    >
                      <div className="flex items-center justify-start mb-4">
                        <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center">
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
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        Today & Beyond
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        Today, ZERP365 serves thousands of businesses across
                        Africa, helping them streamline operations, improve
                        decision-making, and accelerate growth. We&apos;re not
                        just software — we&apos;re your growth partner,
                        committed to empowering African businesses for the
                        digital age.
                      </p>
                    </div>
                  </div>

                  {/* Timeline Dot */}
                  <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#8DC440] rounded-full border-4 border-white shadow-lg z-10"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------
        3. WHY ZERP365 (Enhanced with Interactive Cards)
        -------------------------------------------------
      */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[#8DC440] font-semibold mb-2 uppercase text-sm tracking-widest">
              Why Choose Us
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
              What Makes ZERP365{" "}
              <span className="text-[#64AC6F]">Different</span>
            </h2>
            <p className="text-xl text-gray-600 mt-4 max-w-3xl mx-auto">
              Six core principles that drive our platform and empower African
              businesses
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {/* Built for African Businesses */}
            <div className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden border border-gray-100 hover:border-[#8DC440]">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
              <div className="relative">
                <div className="bg-blue-100 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-10 h-10 text-blue-600"
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
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center group-hover:text-[#8DC440] transition-colors duration-300">
                  Built for African Businesses
                </h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  Handles local tax, currency, and regulatory requirements
                  across industries with deep understanding of African market
                  dynamics.
                </p>
                <div className="mt-6 pt-4 border-t border-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
                  <div className="flex items-center justify-center text-[#8DC440] font-medium">
                    <span className="text-sm">
                      ZIMRA • Multi-Currency • Local Compliance
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Scalable */}
            <div className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden border border-gray-100 hover:border-[#8DC440]">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-500/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
              <div className="relative">
                <div className="bg-green-100 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-10 h-10 text-green-600"
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
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center group-hover:text-[#8DC440] transition-colors duration-300">
                  Infinitely Scalable
                </h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  From startups to enterprises, our cloud-native architecture
                  grows with your business without performance degradation.
                </p>
                <div className="mt-6 pt-4 border-t border-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
                  <div className="flex items-center justify-center text-[#8DC440] font-medium">
                    <span className="text-sm">
                      Cloud-Native • Auto-Scaling • 99.9% Uptime
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Customizable */}
            <div className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden border border-gray-100 hover:border-[#8DC440]">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
              <div className="relative">
                <div className="bg-purple-100 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-10 h-10 text-purple-600"
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
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center group-hover:text-[#8DC440] transition-colors duration-300">
                  Deeply Customizable
                </h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  Tailored dashboards, workflows, and reports designed
                  specifically for your industry and business processes.
                </p>
                <div className="mt-6 pt-4 border-t border-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
                  <div className="flex items-center justify-center text-[#8DC440] font-medium">
                    <span className="text-sm">
                      Industry-Specific • Workflow Designer • Custom Reports
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Secure */}
            <div className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden border border-gray-100 hover:border-[#8DC440]">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-red-500/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
              <div className="relative">
                <div className="bg-red-100 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-10 h-10 text-red-600"
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
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center group-hover:text-[#8DC440] transition-colors duration-300">
                  Enterprise Security
                </h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  Bank-level encryption, role-based access control, and
                  comprehensive audit trails protect your business data.
                </p>
                <div className="mt-6 pt-4 border-t border-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
                  <div className="flex items-center justify-center text-[#8DC440] font-medium">
                    <span className="text-sm">
                      256-bit SSL • SOC 2 • GDPR Compliant
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Real-Time */}
            <div className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden border border-gray-100 hover:border-[#8DC440]">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-yellow-500/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
              <div className="relative">
                <div className="bg-yellow-100 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-10 h-10 text-yellow-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center group-hover:text-[#8DC440] transition-colors duration-300">
                  Real-Time Intelligence
                </h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  Live dashboards, instant notifications, and AI-powered
                  insights keep you ahead of business changes.
                </p>
                <div className="mt-6 pt-4 border-t border-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
                  <div className="flex items-center justify-center text-[#8DC440] font-medium">
                    <span className="text-sm">
                      Live Dashboards • AI Insights • Instant Alerts
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Supported */}
            <div className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden border border-gray-100 hover:border-[#8DC440]">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-indigo-500/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
              <div className="relative">
                <div className="bg-indigo-100 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-10 h-10 text-indigo-600"
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
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center group-hover:text-[#8DC440] transition-colors duration-300">
                  World-Class Support
                </h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  Local implementation teams, 24/7 technical support, and
                  dedicated success managers ensure your success.
                </p>
                <div className="mt-6 pt-4 border-t border-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
                  <div className="flex items-center justify-center text-[#8DC440] font-medium">
                    <span className="text-sm">
                      Local Teams • 24/7 Support • Success Managers
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------
        5. SLEEK CTA SECTION (Enhanced Design)
        -------------------------------------------------
      */}
      <section className="relative py-32 overflow-hidden">
        {/* Background with gradient and glass effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#20356A] via-[#64AC6F] to-[#8DC440] opacity-90"></div>
        <div className="absolute inset-0 bg-black/20"></div>

        {/* Glass morphism overlay */}
        <div className="absolute inset-0 glass"></div>

        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-[#8DC440]/20 rounded-full blur-xl animate-pulse" style={{animationDelay: "1s"}}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-white/5 rounded-full blur-lg animate-ping" style={{animationDelay: "2s"}}></div>
        </div>

        <div className="relative container mx-auto px-6 text-center z-10">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <div className="inline-block bg-white/10 backdrop-blur-md px-6 py-3 rounded-full mb-6">
                <span className="text-white font-semibold">Ready to Transform Your Business?</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
                Experience ZERP365 <span className="text-[#8DC440]">Today</span>
              </h2>
              <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
                Join thousands of African businesses already using ZERP365 to streamline operations,
                boost productivity, and accelerate growth.
              </p>
            </div>

            {/* Sleek CTA buttons with glass effect */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
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
                Start Free Trial
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="flex justify-center">
              <div className="flex items-center space-x-8 text-white/70">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-[#8DC440] rounded-full animate-pulse"></div>
                  <span className="text-sm">Free Setup</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-[#20356A] rounded-full animate-pulse"></div>
                  <span className="text-sm">30-Day Trial</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-[#64AC6F] rounded-full animate-pulse"></div>
                  <span className="text-sm">Cancel Anytime</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
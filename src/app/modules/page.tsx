import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "ZERP365 Modules — Accounting, Sales, HR, Projects & More",
  description:
    "Explore ZERP365 modules covering accounting, HR, inventory, sales, and more — all integrated and scalable.",
};

export default function Modules() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url(/hero_integrate_without_limits_black_team.png)",
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
            {/* Left Section - About Modules */}
            <div className="animate-fade-in-up">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="text-[#8DC440]">Module</span> Solutions for
                Your Business
              </h1>
              <p className="text-xl mb-4 max-w-3xl">
                Powerful, integrated modules designed to streamline every aspect
                of your operations.
              </p>
              <p className="text-lg mb-8 max-w-3xl">
                Every module in ZERP365 connects seamlessly — giving you
                real-time visibility across teams, departments, and locations.
                From accounting to HR, sales to inventory, we&apos;ve got you
                covered.
              </p>
            </div>

            {/* Right Section - Need Our Services */}
            <div
              className="bg-white/10 backdrop-blur-md rounded-xl p-8 text-center animate-fade-in-up"
              style={{ animationDelay: "0.3s" }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Need Our Services?
              </h2>
              <p className="text-lg mb-8">
                Let&apos;s discuss how ZERP365 modules can transform your business
                operations.
              </p>
              <Link
                href="/demo"
                className="bg-[#8DC440] text-white px-8 py-3 rounded-full hover:bg-[#64AC6F] transition-all duration-300 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 inline-block"
              >
                Schedule Discovery Call
              </Link>
              <p className="mt-4 text-sm">Or explore our features below</p>
            </div>
          </div>
        </div>
      </section>

      {/* Modules Section */}
      <section className="py-20 bg-gray-50 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Powerful Modules for Your Business
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive solutions designed to streamline your operations and
              drive growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Accounting & Finance */}
            <div className="group relative bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#8DC440]/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div
                className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-blue-500/10 to-transparent rounded-tr-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ animationDelay: "0.2s" }}
              ></div>

              <div className="relative p-8">
                <div className="mb-6 overflow-hidden rounded-lg">
                  <Image
                    src="/accounting_finance_dashboard_black_team.png"
                    alt="Accounting & Finance"
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-[#8DC440]/20 rounded-lg flex items-center justify-center mr-3">
                    <svg
                      className="w-6 h-6 text-[#8DC440]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 group-hover:text-[#8DC440] transition-colors">
                    Accounting & Finance
                  </h2>
                </div>
                <p className="text-gray-600 mb-4">
                  Automated journal entries, tax compliance, multi-currency
                  support, expense management, and fiscal reporting.
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-1 mb-6">
                  <li>Automated invoicing and billing</li>
                  <li>Multi-currency transactions</li>
                  <li>Tax compliance and reporting</li>
                  <li>Expense tracking and approval workflows</li>
                  <li>Fiscalization for regulatory compliance</li>
                </ul>
                <Link
                  href="/modules/accounting"
                  className="inline-flex items-center text-[#8DC440] font-semibold hover:text-[#64AC6F] transition-colors"
                >
                  Learn more{" "}
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                </Link>
              </div>
            </div>

            {/* Sales & CRM */}
            <div className="group relative bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#8DC440]/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div
                className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-blue-500/10 to-transparent rounded-tr-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ animationDelay: "0.2s" }}
              ></div>

              <div className="relative p-8">
                <div className="mb-6 overflow-hidden rounded-lg">
                  <Image
                    src="/sales_crm_dashboard_black_team.png"
                    alt="Sales & CRM"
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-[#8DC440]/20 rounded-lg flex items-center justify-center mr-3">
                    <svg
                      className="w-6 h-6 text-[#8DC440]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      ></path>
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 group-hover:text-[#8DC440] transition-colors">
                    Sales & CRM
                  </h2>
                </div>
                <p className="text-gray-600 mb-4">
                  Lead tracking, pipeline automation, quotations, and digital
                  invoicing. See every customer interaction in one place.
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-1 mb-6">
                  <li>Lead management and conversion</li>
                  <li>Sales pipeline automation</li>
                  <li>Customer communication tracking</li>
                  <li>Quotation and contract management</li>
                  <li>Customer relationship analytics</li>
                </ul>
                <Link
                  href="/modules/sales"
                  className="inline-flex items-center text-[#8DC440] font-semibold hover:text-[#64AC6F] transition-colors"
                >
                  Learn more{" "}
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                </Link>
              </div>
            </div>

            {/* Inventory & Supply Chain */}
            <div className="group relative bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#8DC440]/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div
                className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-blue-500/10 to-transparent rounded-tr-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ animationDelay: "0.2s" }}
              ></div>

              <div className="relative p-8">
                <div className="mb-6 overflow-hidden rounded-lg">
                  <Image
                    src="/inventory_supply_chain_dashboard_black_team.png"
                    alt="Inventory & Supply Chain"
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-[#8DC440]/20 rounded-lg flex items-center justify-center mr-3">
                    <svg
                      className="w-6 h-6 text-[#8DC440]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                      ></path>
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 group-hover:text-[#8DC440] transition-colors">
                    Inventory & Supply Chain
                  </h2>
                </div>
                <p className="text-gray-600 mb-4">
                  Warehouse tracking, purchase orders, reorder rules, and
                  product traceability.
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-1 mb-6">
                  <li>Real-time inventory management</li>
                  <li>Automated reorder alerts</li>
                  <li>Purchase order processing</li>
                  <li>Product traceability and batch tracking</li>
                  <li>Warehouse optimization</li>
                </ul>
                <Link
                  href="/modules/inventory"
                  className="inline-flex items-center text-[#8DC440] font-semibold hover:text-[#64AC6F] transition-colors"
                >
                  Learn more{" "}
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                </Link>
              </div>
            </div>

            {/* HR & Payroll */}
            <div className="group relative bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#8DC440]/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div
                className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-blue-500/10 to-transparent rounded-tr-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ animationDelay: "0.2s" }}
              ></div>

              <div className="relative p-8">
                <div className="mb-6 overflow-hidden rounded-lg">
                  <Image
                    src="/hr_payroll_dashboard_black_team.png"
                    alt="HR & Payroll"
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-[#8DC440]/20 rounded-lg flex items-center justify-center mr-3">
                    <svg
                      className="w-6 h-6 text-[#8DC440]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                      ></path>
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 group-hover:text-[#8DC440] transition-colors">
                    HR & Payroll
                  </h2>
                </div>
                <p className="text-gray-600 mb-4">
                  Employee management, attendance, leave tracking, performance
                  reviews, and payroll automation.
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-1 mb-6">
                  <li>Employee onboarding and management</li>
                  <li>Attendance and time tracking</li>
                  <li>Leave management and approvals</li>
                  <li>Performance reviews and appraisals</li>
                  <li>Automated payroll processing</li>
                </ul>
                <Link
                  href="/modules/hr"
                  className="inline-flex items-center text-[#8DC440] font-semibold hover:text-[#64AC6F] transition-colors"
                >
                  Learn more{" "}
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                </Link>
              </div>
            </div>

            {/* Projects & Tasks */}
            <div className="group relative bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#8DC440]/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div
                className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-blue-500/10 to-transparent rounded-tr-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ animationDelay: "0.2s" }}
              ></div>

              <div className="relative p-8">
                <div className="mb-6 overflow-hidden rounded-lg">
                  <Image
                    src="/projects_tasks_dashboard_black_team.png"
                    alt="Projects & Tasks"
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-[#8DC440]/20 rounded-lg flex items-center justify-center mr-3">
                    <svg
                      className="w-6 h-6 text-[#8DC440]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                      ></path>
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 group-hover:text-[#8DC440] transition-colors">
                    Projects & Tasks
                  </h2>
                </div>
                <p className="text-gray-600 mb-4">
                  Agile boards, milestones, and project cost tracking with
                  real-time updates.
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-1 mb-6">
                  <li>Project planning and scheduling</li>
                  <li>Task management and assignment</li>
                  <li>Milestone tracking</li>
                  <li>Resource allocation</li>
                  <li>Project cost and budget management</li>
                </ul>
                <Link
                  href="/modules/projects"
                  className="inline-flex items-center text-[#8DC440] font-semibold hover:text-[#64AC6F] transition-colors"
                >
                  Learn more{" "}
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                </Link>
              </div>
            </div>

            {/* Procurement & Vendors */}
            <div className="group relative bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#8DC440]/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div
                className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-blue-500/10 to-transparent rounded-tr-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ animationDelay: "0.2s" }}
              ></div>

              <div className="relative p-8">
                <div className="mb-6 overflow-hidden rounded-lg">
                  <Image
                    src="/procurement_vendors_dashboard_black_team.png"
                    alt="Procurement & Vendors"
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-[#8DC440]/20 rounded-lg flex items-center justify-center mr-3">
                    <svg
                      className="w-6 h-6 text-[#8DC440]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                      ></path>
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 group-hover:text-[#8DC440] transition-colors">
                    Procurement & Vendors
                  </h2>
                </div>
                <p className="text-gray-600 mb-4">
                  RFQs, approvals, purchase automation, and supplier scoring.
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-1 mb-6">
                  <li>Request for quotation (RFQ) management</li>
                  <li>Vendor evaluation and scoring</li>
                  <li>Purchase order automation</li>
                  <li>Supplier relationship management</li>
                  <li>Procurement analytics</li>
                </ul>
                <Link
                  href="/modules/procurement"
                  className="inline-flex items-center text-[#8DC440] font-semibold hover:text-[#64AC6F] transition-colors"
                >
                  Learn more{" "}
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 5l7 7-7 7"
                    ></path>
                  </svg>
                </Link>
              </div>
            </div>

            {/* Analytics & Reporting */}
            <div className="group relative bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 overflow-hidden md:col-span-2 lg:col-span-3">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#8DC440]/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div
                className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-blue-500/10 to-transparent rounded-tr-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ animationDelay: "0.2s" }}
              ></div>

              <div className="relative p-8 lg:p-12">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="order-2 md:order-1">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-[#8DC440]/20 rounded-lg flex items-center justify-center mr-3">
                        <svg
                          className="w-6 h-6 text-[#8DC440]"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                          ></path>
                        </svg>
                      </div>
                      <h2 className="text-2xl font-bold text-gray-900 group-hover:text-[#8DC440] transition-colors">
                        Analytics & Reporting
                      </h2>
                    </div>
                    <p className="text-gray-600 mb-4">
                      Custom dashboards, visual KPIs, and exportable reports for
                      quick decisions.
                    </p>
                    <ul className="list-disc list-inside text-gray-600 space-y-1 mb-6">
                      <li>Real-time dashboards</li>
                      <li>Custom report builder</li>
                      <li>KPI tracking and visualization</li>
                      <li>Data export and integration</li>
                      <li>Business intelligence insights</li>
                    </ul>
                    <Link
                      href="/modules/analytics"
                      className="inline-flex items-center text-[#8DC440] font-semibold hover:text-[#64AC6F] transition-colors"
                    >
                      Learn more{" "}
                      <svg
                        className="w-4 h-4 ml-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 5l7 7-7 7"
                        ></path>
                      </svg>
                    </Link>
                  </div>
                  <div className="order-1 md:order-2 overflow-hidden rounded-lg">
                    <Image
                      src="/analytics_reporting_dashboard_black_team.png"
                      alt="Analytics & Reporting"
                      width={800}
                      height={300}
                      className="w-full h-48 md:h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <Link
              href="/demo"
              className="bg-[#8DC440] text-white px-8 py-3 rounded-full hover:bg-[#64AC6F] transition-all duration-300 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              See All Features →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#8DC440] to-[#64AC6F] relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div
            className="absolute top-1/2 -left-10 w-60 h-60 bg-white/10 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        <div className="container mx-auto px-4 text-center text-white relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Get started with ZERP365 today and see how our integrated modules
            can streamline your operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/demo"
              className="bg-white text-[#8DC440] px-8 py-3 rounded-full hover:bg-gray-100 transition-all duration-300 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Request Demo
            </Link>
            <Link
              href="/pricing"
              className="border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-[#8DC440] transition-all duration-300 text-lg font-semibold"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

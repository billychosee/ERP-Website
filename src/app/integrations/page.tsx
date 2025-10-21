import Link from 'next/link';

export const metadata = {
  title: 'ZERP365 Integrations — Payment, Tax, and Custom APIs',
  description: 'ZERP365 integrates with your existing tools — payment gateways, ZIMRA tax APIs, WhatsApp notifications, and POS systems.',
};

export default function Integrations() {
  return (
    <div className="min-h-screen">
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
            {/* Left Section - About Integrations */}
            <div className="animate-fade-in-up">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="text-[#8DC440]">Integrate</span> Without
                Limits.
              </h1>
              <p className="text-xl mb-4 max-w-3xl">
                Connect ZERP365 with your ecosystem — payment platforms,
                government tax systems, communication tools, analytics
                dashboards and more.
              </p>
            </div>

            {/* Right Section - Need Our Services */}
            <div
              className="bg-white/10 backdrop-blur-md rounded-xl p-8 text-center animate-fade-in-up"
              style={{ animationDelay: "0.3s" }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Need Custom Integration?
              </h2>
              <p className="text-lg mb-8">
                Let&apos;s discuss how ZERP365 integrations can connect your
                systems seamlessly.
              </p>
              <Link
                href="/demo"
                className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-all duration-300 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 inline-block"
              >
                Schedule Discovery Call
              </Link>
              <p className="mt-4 text-sm">Or explore our integrations below</p>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Types */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
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
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Payments</h3>
              <p className="text-gray-600 mb-4">
                Visa, EcoCash, OneMoney, ZimSwitch, InnBucks, SmatPay
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Secure payment processing</li>
                <li>• Multi-gateway support</li>
                <li>• Real-time transaction sync</li>
                <li>• Automated reconciliation</li>
              </ul>
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
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Compliance
              </h3>
              <p className="text-gray-600 mb-4">Built-in ZIMRA fiscalisation</p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Automatic tax filing</li>
                <li>• Regulatory compliance</li>
                <li>• Fiscal receipt generation</li>
                <li>• Audit trail maintenance</li>
              </ul>
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
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Communication
              </h3>
              <p className="text-gray-600 mb-4">
                WhatsApp & Email notifications
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Automated notifications</li>
                <li>• Customer communication</li>
                <li>• Multi-channel messaging</li>
                <li>• Template management</li>
              </ul>
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
                    d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                POS / eCommerce
              </h3>
              <p className="text-gray-600 mb-4">
                Real-time sync with POS and online stores
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Point of sale integration</li>
                <li>• Online store sync</li>
                <li>• Inventory management</li>
                <li>• Sales data consolidation</li>
              </ul>
            </div>
          </div>

          {/* API Section */}
          <div className="bg-gray-50 p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">
              APIs & Custom Integrations
            </h2>
            <p className="text-xl text-gray-600 text-center mb-8 max-w-3xl mx-auto">
              REST API for custom integrations and third-party extensions.
              Connect with any system that supports standard APIs.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  REST API
                </h4>
                <p className="text-gray-600">
                  Full REST API access to all ZERP365 data and functions
                </p>
              </div>
              <div className="text-center">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  Webhooks
                </h4>
                <p className="text-gray-600">
                  Real-time event notifications for seamless integrations
                </p>
              </div>
              <div className="text-center">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  OAuth 2.0
                </h4>
                <p className="text-gray-600">
                  Secure authentication for third-party applications
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/contact"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors text-lg font-semibold"
            >
              Talk to Us About Integration →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
import Link from 'next/link';

export const metadata = {
  title: 'ZERP365 Modules — Accounting, Sales, HR, Projects & More',
  description: 'Explore ZERP365 modules covering accounting, HR, inventory, sales, and more — all integrated and scalable.',
};

export default function Modules() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            All Your Business Functions. One Platform.
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Every module in ZERP365 connects seamlessly — giving you real-time visibility across teams, departments, and locations.
          </p>
        </div>
      </section>

      {/* Modules Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-gray-50 p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Accounting & Finance</h2>
              <p className="text-gray-600 mb-4">
                Automated journal entries, tax compliance, multi-currency support, expense management, and fiscal reporting.
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Automated invoicing and billing</li>
                <li>Multi-currency transactions</li>
                <li>Tax compliance and reporting</li>
                <li>Expense tracking and approval workflows</li>
                <li>Fiscalization for regulatory compliance</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Sales & CRM</h2>
              <p className="text-gray-600 mb-4">
                Lead tracking, pipeline automation, quotations, and digital invoicing. See every customer interaction in one place.
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Lead management and conversion</li>
                <li>Sales pipeline automation</li>
                <li>Customer communication tracking</li>
                <li>Quotation and contract management</li>
                <li>Customer relationship analytics</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Inventory & Supply Chain</h2>
              <p className="text-gray-600 mb-4">
                Warehouse tracking, purchase orders, reorder rules, and product traceability.
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Real-time inventory management</li>
                <li>Automated reorder alerts</li>
                <li>Purchase order processing</li>
                <li>Product traceability and batch tracking</li>
                <li>Warehouse optimization</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">HR & Payroll</h2>
              <p className="text-gray-600 mb-4">
                Employee management, attendance, leave tracking, performance reviews, and payroll automation.
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Employee onboarding and management</li>
                <li>Attendance and time tracking</li>
                <li>Leave management and approvals</li>
                <li>Performance reviews and appraisals</li>
                <li>Automated payroll processing</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Projects & Tasks</h2>
              <p className="text-gray-600 mb-4">
                Agile boards, milestones, and project cost tracking with real-time updates.
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Project planning and scheduling</li>
                <li>Task management and assignment</li>
                <li>Milestone tracking</li>
                <li>Resource allocation</li>
                <li>Project cost and budget management</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Procurement & Vendors</h2>
              <p className="text-gray-600 mb-4">
                RFQs, approvals, purchase automation, and supplier scoring.
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Request for quotation (RFQ) management</li>
                <li>Vendor evaluation and scoring</li>
                <li>Purchase order automation</li>
                <li>Supplier relationship management</li>
                <li>Procurement analytics</li>
              </ul>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg shadow-md md:col-span-2">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Analytics & Reporting</h2>
              <p className="text-gray-600 mb-4">
                Custom dashboards, visual KPIs, and exportable reports for quick decisions.
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Real-time dashboards</li>
                <li>Custom report builder</li>
                <li>KPI tracking and visualization</li>
                <li>Data export and integration</li>
                <li>Business intelligence insights</li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link href="/demo" className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors text-lg font-semibold">
              See All Features →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
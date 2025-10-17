'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Is ZERP365 cloud-based or on-premise?",
      answer: "ZERP365 is a cloud-based ERP solution, accessible from anywhere with an internet connection. We also offer hybrid deployment options for organizations with specific security or compliance requirements."
    },
    {
      question: "Can I integrate ZERP365 with my existing accounting software?",
      answer: "Yes, ZERP365 offers extensive integration capabilities. We support integration with popular accounting software, payment gateways, POS systems, and custom APIs. Our integration team can help you connect with virtually any system."
    },
    {
      question: "How secure is our business data?",
      answer: "Security is our top priority. ZERP365 uses enterprise-grade encryption, regular security audits, and complies with international data protection standards. We implement role-based access control, regular backups, and secure data centers."
    },
    {
      question: "Do you offer training and implementation support?",
      answer: "Absolutely. We provide comprehensive implementation support including data migration, system configuration, user training, and ongoing support. Our implementation specialists work closely with your team to ensure a smooth transition."
    },
    {
      question: "Can ZERP365 work offline?",
      answer: "While ZERP365 is primarily a cloud-based solution, we offer limited offline capabilities for critical functions. However, full synchronization requires an internet connection for optimal performance and data integrity."
    },
    {
      question: "What industries is ZERP365 best suited for?",
      answer: "ZERP365 is designed to adapt to any industry. We have specific configurations and features optimized for retail, manufacturing, services, construction, finance, agriculture, education, NGOs, and many more sectors."
    },
    {
      question: "How does pricing work?",
      answer: "We offer flexible pricing with a free tier for getting started, a $5/month starter plan, and custom enterprise pricing. All plans include core features with additional modules available as add-ons."
    },
    {
      question: "Can I customize ZERP365 for my specific business needs?",
      answer: "Yes, ZERP365 is highly customizable. You can configure workflows, dashboards, reports, and processes to match your business requirements. For advanced customizations, our development team can assist."
    },
    {
      question: "What kind of support do you provide?",
      answer: "We offer multiple support channels including email, phone, live chat, and a comprehensive knowledge base. Enterprise customers receive priority support with dedicated account managers."
    },
    {
      question: "How long does implementation typically take?",
      answer: "Implementation time varies based on business size and complexity, but most small to medium businesses can go live within 2-4 weeks. Larger implementations may take 1-3 months with full customization."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Find answers to common questions about ZERP365. Can&apos;t find what you&apos;re looking for? Contact our support team.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg">
                <button
                  className="w-full text-left p-6 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  onClick={() => toggleFAQ(index)}
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</h3>
                    <svg
                      className={`w-6 h-6 text-gray-500 transform transition-transform ${
                        openIndex === index ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-6">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Didn&apos;t find your answer?</h3>
              <p className="text-gray-600 mb-6">
                Our support team is here to help. Get in touch with us for personalized assistance.
              </p>
              <Link href="/contact" className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors text-lg font-semibold">
                Contact Support →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
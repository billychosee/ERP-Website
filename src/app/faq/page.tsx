'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Is ZERP263 cloud-based or on-premise?",
      answer: "ZERP263 is a cloud-based ERP solution, accessible from anywhere with an internet connection. We also offer hybrid deployment options for organizations with specific security or compliance requirements."
    },
    {
      question: "Can I integrate ZERP263 with my existing accounting software?",
      answer: "Yes, ZERP263 offers extensive integration capabilities. We support integration with popular accounting software, payment gateways, POS systems, and custom APIs. Our integration team can help you connect with virtually any system."
    },
    {
      question: "How secure is our business data?",
      answer: "Security is our top priority. ZERP263 uses enterprise-grade encryption, regular security audits, and complies with international data protection standards. We implement role-based access control, regular backups, and secure data centers."
    },
    {
      question: "Do you offer training and implementation support?",
      answer: "Absolutely. We provide comprehensive implementation support including data migration, system configuration, user training, and ongoing support. Our implementation specialists work closely with your team to ensure a smooth transition."
    },
    {
      question: "Can ZERP263 work offline?",
      answer: "While ZERP263 is primarily a cloud-based solution, we offer limited offline capabilities for critical functions. However, full synchronization requires an internet connection for optimal performance and data integrity."
    },
    {
      question: "What industries is ZERP263 best suited for?",
      answer: "ZERP263 is designed to adapt to any industry. We have specific configurations and features optimized for retail, manufacturing, services, construction, finance, agriculture, education, NGOs, and many more sectors."
    },
    {
      question: "How does pricing work?",
      answer: "We offer flexible pricing with a free tier for getting started, a $5/month starter plan, and custom enterprise pricing. All plans include core features with additional modules available as add-ons."
    },
    {
      question: "Can I customize ZERP263 for my specific business needs?",
      answer: "Yes, ZERP263 is highly customizable. You can configure workflows, dashboards, reports, and processes to match your business requirements. For advanced customizations, our development team can assist."
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
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* -------------------------------------------------
        SLEEK HERO SECTION (FAQ Focus)
        -------------------------------------------------
      */}
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
            {/* Left Section - About FAQ */}
            <div className="animate-fade-in-up">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="text-[#8DC440]">Frequently</span> Asked
                Questions
              </h1>
              <p className="text-xl mb-4 max-w-3xl">
                Find answers to common questions about ZERP263.
              </p>
              <p className="text-lg mb-8 max-w-2xl">
                Can&apos;t find what you&apos;re looking for? Our support team
                is here to help.
              </p>
            </div>

            {/* Right Section - Quick Help */}
            <div
              className="bg-white/10 backdrop-blur-md rounded-xl p-8 text-center animate-fade-in-up"
              style={{ animationDelay: "0.3s" }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Need Help?
              </h2>
              <p className="text-lg mb-8">
                Get personalized assistance from our expert support team.
              </p>
              <a
                href="#faq-section"
                className="bg-[#8DC440] text-white px-8 py-3 rounded-full hover:bg-[#64AC6F] transition-all duration-300 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 inline-block"
              >
                Browse FAQs
              </a>
              <p className="mt-4 text-sm">Or contact us directly</p>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------
        FAQ ACCORDION SECTION (Sleek Design)
        -------------------------------------------------
      */}
      <section id="faq-section" className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Common Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to know about ZERP263
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1 overflow-hidden border border-gray-100"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#8DC440]/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative">
                  <button
                    className="w-full text-left p-8 focus:outline-none focus:ring-2 focus:ring-[#8DC440] focus:ring-opacity-50 cursor-pointer"
                    onClick={() => toggleFAQ(index)}
                  >
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg font-bold text-gray-900 pr-4 group-hover:text-[#8DC440] transition-colors duration-300">
                        {faq.question}
                      </h3>
                      <div className="flex-shrink-0 w-8 h-8 bg-[#8DC440]/10 rounded-full flex items-center justify-center group-hover:bg-[#8DC440]/20 transition-colors duration-300">
                        <svg
                          className={`w-5 h-5 text-[#8DC440] transform transition-transform duration-300 ${
                            openIndex === index ? "rotate-180" : ""
                          }`}
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
                      </div>
                    </div>
                  </button>

                  {/* Invisible overlay for the icon area to make it clickable */}
                  <button
                    className="absolute top-8 right-8 w-8 h-8 cursor-pointer opacity-0"
                    onClick={() => toggleFAQ(index)}
                    aria-label={`Toggle ${faq.question}`}
                  />
                </div>

                {openIndex === index && (
                  <div className="px-8 pb-8 animate-fade-in-up">
                    <div className="border-t border-gray-100 pt-6">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <div className="bg-gray-50 p-12 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Didn&apos;t find your answer?
              </h3>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Our support team is here to help. Get in touch with us for
                personalized assistance.
              </p>
              <Link
                href="/contact"
                className="bg-[#8DC440] text-white px-10 py-4 rounded-full hover:bg-[#64AC6F] transition-all duration-300 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 inline-block"
              >
                Contact Support →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
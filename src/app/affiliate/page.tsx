"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import {
  DollarSign,
  Settings,
  LayoutGrid,
  ArrowRight,
} from "lucide-react";

export default function Affiliate() {
  const [calculatorData, setCalculatorData] = useState({
    referrals: 5,
    conversionRate: 20,
    avgDealSize: 500,
  });

  const calculateEarnings = () => {
    const convertedReferrals =
      (calculatorData.referrals * calculatorData.conversionRate) / 100;
    const monthlyEarnings =
      convertedReferrals * calculatorData.avgDealSize * 0.15; // 15% commission
    const annualEarnings = monthlyEarnings * 12;
    return { monthlyEarnings, annualEarnings, convertedReferrals };
  };

  const earnings = calculateEarnings();

  // --- Data for Benefits Section ---
  const affiliateBenefits = [
    {
      title: "High Demand, Proven Product",
      description:
        "ZERP263 is an end-to-end business management platform designed for African enterprises from finance and inventory to HR, CRM, and beyond.",
      icon: DollarSign,
      color: "border-blue-600",
    },
    {
      title: "Attractive Commission Structure",
      description:
        "Earn a generous percentage for every referred sale. The more clients you bring, the higher your earnings with no cap on commissions.",
      icon: Settings,
      color: "border-[#8DC440]",
    },
    {
      title: "Dedicated Affiliate Dashboard",
      description:
        "Track leads, conversions, and payouts in real time with your personalized affiliate dashboard. Transparent reporting, instant updates.",
      icon: LayoutGrid,
      color: "border-[#64AC6F]",
    },
  ];

  // --- Data for Stats/About Section ---
  const affiliateStats = [
    { count: "15%", label: "Commission Rate", color: "text-blue-600" },
    { count: "1000+", label: "Active Affiliates", color: "text-[#8DC440]" },
    { count: "99.9%", label: "Payment Reliability", color: "text-[#64AC6F]" },
  ];

  // --- Data for Work Process Section ---
  const affiliateSteps = [
    {
      step: "01",
      title: "Sign Up",
      description:
        "Join the program by completing a quick online registration, IT'S TOTALLY FREE",
    },
    {
      step: "02",
      title: "Share Your Link",
      description:
        "Promote ZERP263 using your unique referral link — through your network, social media, or website.",
    },
    {
      step: "03",
      title: "Earn Commission",
      description:
        "When a business signs up and subscribes, you earn a commission. Payments are made monthly.",
    },
  ];


  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* -------------------------------------------------
        1. AFFILIATE HERO SECTION (Unique Design)
        -------------------------------------------------
      */}
      <section className="relative py-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url(/hero_partner_today_affiliate_black_team.png)",
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
            {/* Left Section - Affiliate Info */}
            <div className="animate-fade-in-up">
              <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
                <span className="text-[#8DC440] animate-pulse">Partner</span>{" "}
                Today!
              </h1>
              <h2 className="text-2xl md:text-4xl font-bold mb-6 text-white/90">
                Turn Connections into Commissions
              </h2>
              <p className="text-lg md:text-xl mb-10 leading-relaxed max-w-2xl">
                Empower businesses to go digital and get rewarded for it. Join
                the ZERP263 Affiliate Program and earn competitive commissions
                for every business you bring onboard to Africa&apos;s
                fastest-growing business ERP.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="#signup"
                  className="bg-[#8DC440] text-black px-8 py-4 rounded-full hover:bg-[#64AC6F] transition-all duration-300 text-lg font-bold shadow-2xl hover:shadow-[#8DC440]/50 transform hover:scale-105"
                >
                  Register Now 🚀
                </Link>
                <Link
                  href="/contact"
                  className="border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-black transition-all duration-300 text-lg font-bold transform hover:scale-105"
                >
                  {" "}
                  Contact Us
                </Link>
              </div>
            </div>

            {/* Right Section - Earnings Calculator */}
            <div
              className="bg-white/10 backdrop-blur-md rounded-xl p-8 text-center animate-fade-in-up border border-white/20"
              style={{ animationDelay: "0.3s" }}
            >
              <h3 className="text-3xl font-bold mb-6 text-[#8DC440]">
                💰 Earnings Calculator
              </h3>
              <p className="text-lg mb-8 text-white/90">
                See your potential earnings based on a 15% commission rate
              </p>
              <div className="space-y-6 mb-8">
                {/* Referrals */}
                <div>
                  <label className="text-lg font-medium mb-3 text-white flex justify-between items-center">
                    <span>Monthly Referrals</span>
                    <span className="text-2xl font-bold text-[#8DC440]">
                      {calculatorData.referrals}
                    </span>
                  </label>
                  <input
                    type="range"
                    min="1"
                    max="50"
                    value={calculatorData.referrals}
                    onChange={(e) =>
                      setCalculatorData({
                        ...calculatorData,
                        referrals: parseInt(e.target.value),
                      })
                    }
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                </div>
                {/* Conversion Rate */}
                <div>
                  <label className="text-lg font-medium mb-3 text-white flex justify-between items-center">
                    <span>Conversion Rate (%)</span>
                    <span className="text-2xl font-bold text-[#8DC440]">
                      {calculatorData.conversionRate}%
                    </span>
                  </label>
                  <input
                    type="range"
                    min="5"
                    max="50"
                    value={calculatorData.conversionRate}
                    onChange={(e) =>
                      setCalculatorData({
                        ...calculatorData,
                        conversionRate: parseInt(e.target.value),
                      })
                    }
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                </div>
                {/* Avg Deal Size */}
                <div>
                  <label className="text-lg font-medium mb-3 text-white flex justify-between items-center">
                    <span>Avg Deal Size ($)</span>
                    <span className="text-2xl font-bold text-[#8DC440]">
                      ${calculatorData.avgDealSize}
                    </span>
                  </label>
                  <input
                    type="range"
                    min="100"
                    max="2000"
                    step="100"
                    value={calculatorData.avgDealSize}
                    onChange={(e) =>
                      setCalculatorData({
                        ...calculatorData,
                        avgDealSize: parseInt(e.target.value),
                      })
                    }
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                </div>
              </div>
              <div className="bg-[#8DC440] rounded-xl p-6 text-black">
                <p className="text-sm mb-2">Potential Monthly Earnings</p>
                <p className="text-3xl font-black animate-pulse">
                  ${earnings.monthlyEarnings.toFixed(0)}
                </p>
                <p className="text-sm mt-2">
                  Annual: ${earnings.annualEarnings.toFixed(0)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------
        2. AFFILIATE BENEFITS (Unique Content - Different Layout)
        -------------------------------------------------
      */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[#8DC440] font-semibold mb-2 uppercase text-sm tracking-widest">
              Why Partner With Us
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
              Your Success is Our Success
            </h2>
            <p className="text-xl text-gray-600 mt-4 max-w-3xl mx-auto">
              Join a program designed specifically for African business growth
              and digital transformation
            </p>
          </div>

          {/* Different Layout: Horizontal Cards */}
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {affiliateBenefits.map((benefit, index) => (
                <div
                  key={index}
                  className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-l-4 border-[#8DC440] hover:border-[#64AC6F]"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="flex items-start space-x-4">
                    <div
                      className={`p-3 rounded-xl bg-gradient-to-br ${benefit.color
                        ?.replace("border-", "from-")
                        .replace("-600", "-100 to-")
                        .replace(
                          "-600",
                          "-200"
                        )} group-hover:scale-110 transition-transform duration-300`}
                    >
                      <benefit.icon className="w-8 h-8 text-gray-900" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#8DC440] transition-colors duration-300">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {benefit.description}
                      </p>
                      <Link
                        href="#signup"
                        className="inline-flex items-center text-[#8DC440] font-medium hover:text-[#64AC6F] transition-colors group-hover:translate-x-1 transform duration-300"
                      >
                        Learn More <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center mt-16">
            <div className="inline-flex items-center space-x-4 bg-[#8DC440] text-white px-8 py-4 rounded-full hover:bg-[#64AC6F] transition-colors cursor-pointer shadow-lg hover:shadow-xl transform hover:scale-105">
              <span className="font-semibold">
                Start Your Affiliate Journey
              </span>
              <ArrowRight className="w-5 h-5" />
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------
        3. AFFILIATE SUCCESS STORIES (Unique Section)
        -------------------------------------------------
      */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Right Side: Image */}
          <div className="lg:col-span-6 relative h-[450px] overflow-hidden rounded-xl shadow-2xl">
            <Image
              src="/african-business-collaboration.png"
              alt="Successful ZERP263 Affiliates"
              className="w-full h-full object-cover"
              fill={true}
            />
          </div>

          {/* Left Side: Success Stats */}
          <div className="lg:col-span-6">
            <p className="text-[#8DC440] font-semibold mb-2 uppercase text-sm tracking-widest">
              Real Results
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
              Join Successful Affiliates Across Africa
            </h2>
            <p className="text-lg text-gray-300 mb-10">
              Our affiliates are earning substantial commissions while helping
              businesses transform digitally. See what our program delivers.
            </p>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-6 py-4 border-t border-b border-gray-700">
              {affiliateStats.map((stat, index) => (
                <div
                  key={index}
                  className="text-left animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.3}s` }}
                >
                  <p className={`text-4xl font-bold ${stat.color}`}>
                    {stat.count}
                  </p>
                  <p className="text-sm text-gray-400 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------
        4. AFFILIATE TESTIMONIALS & SUCCESS STORIES (Different from Home)
        -------------------------------------------------
      */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-[#8DC440] font-semibold mb-2 uppercase text-sm tracking-widest">
              Success Stories
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
              Real Affiliates, Real Earnings
            </h2>
            <p className="text-xl text-gray-600 mt-4 max-w-3xl mx-auto">
              Hear from successful affiliates who are building their income
              while helping businesses transform
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Testimonial 1 */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-[#8DC440] rounded-full flex items-center justify-center text-white font-bold text-lg">
                  J
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-gray-900">James Ndlovu</h4>
                  <p className="text-gray-600 text-sm">
                    Business Consultant, Johannesburg
                  </p>
                </div>
              </div>
              <p className="text-gray-700 mb-6 italic">
                &quot;I&apos;ve earned over $12,000 in commissions this year
                alone. ZERP263&apos;s platform is exactly what African
                businesses need, and the affiliate program makes it easy to
                share this solution.&quot;
              </p>
              <div className="flex text-[#8DC440]">{"★".repeat(5)}</div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-[#64AC6F] rounded-full flex items-center justify-center text-white font-bold text-lg">
                  A
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-gray-900">Amara Okafor</h4>
                  <p className="text-gray-600 text-sm">
                    Digital Marketing Agency, Lagos
                  </p>
                </div>
              </div>
              <p className="text-gray-700 mb-6 italic">
                &quot;The marketing toolkit provided is incredible. I&apos;ve
                converted 45 clients in 6 months, earning $8,500 in commissions.
                The support team is always there when needed.&quot;
              </p>
              <div className="flex text-[#8DC440]">{"★".repeat(5)}</div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-[#20356A] rounded-full flex items-center justify-center text-white font-bold text-lg">
                  K
                </div>
                <div className="ml-4">
                  <h4 className="font-bold text-gray-900">Kofi Mensah</h4>
                  <p className="text-gray-600 text-sm">
                    IT Solutions Provider, Accra
                  </p>
                </div>
              </div>
              <p className="text-gray-700 mb-6 italic">
                &quot;Started with just 5 referrals and now have 23 active
                clients. The 15% commission rate and monthly payouts have become
                a significant part of my business income.&quot;
              </p>
              <div className="flex text-[#8DC440]">{"★".repeat(5)}</div>
            </div>
          </div>

          <div className="text-center mt-16">
            <Link
              href="#signup"
              className="inline-flex items-center bg-[#8DC440] text-white px-8 py-4 rounded-full hover:bg-[#64AC6F] transition-colors font-semibold shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Join These Success Stories <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------
        5. AFFILIATE PROCESS (Unique Timeline)
        -------------------------------------------------
      */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <p className="text-[#8DC440] font-semibold mb-2 uppercase text-sm tracking-widest">
              Simple Process
            </p>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
              Start Earning in{" "}
              <span className="text-[#64AC6F]">3 Easy Steps</span>
            </h2>
            <p className="text-xl text-gray-600 mt-4 max-w-3xl mx-auto">
              Our streamlined process gets you up and running quickly with
              minimal effort
            </p>
          </div>

          <div className="relative">
            {/* Horizontal Line Connector */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-[#8DC440] transform -translate-y-1/2 z-0"></div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-8">
              {affiliateSteps.map((step, index) => (
                <div
                  key={index}
                  className="relative z-10 p-8 bg-white rounded-xl shadow-xl transition transform duration-300 hover:scale-[1.03] flex flex-col items-center text-center animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.4}s` }}
                >
                  {/* Icon Circle */}
                  <div className="w-20 h-20 flex items-center justify-center rounded-full bg-gradient-to-br from-[#8DC440] to-[#64AC6F] text-white text-3xl font-bold mb-4 border-4 border-white shadow-inner">
                    {step.step}
                  </div>

                  {/* Step Number Badge */}
                  <div className="absolute top-0 right-0 bg-gradient-to-br from-[#20356A] to-blue-700 text-white text-xs font-bold py-1 px-3 rounded-tr-xl rounded-bl-xl shadow-md">
                    STEP {step.step}
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm flex-grow">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------
        6. AFFILIATE CTA (Unique Final Section)
        -------------------------------------------------
      */}
      <section className="relative py-32 overflow-hidden">
        {/* Background with gradient and glass effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#20356A] via-[#64AC6F] to-[#8DC440] opacity-90"></div>
        <div className="absolute inset-0 bg-black/20"></div>

        {/* Glass morphism overlay */}
        <div className="absolute inset-0 glass"></div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-8 leading-tight">
              Ready to Start Your{" "}
              <span className="text-[#8DC440]">Affiliate Journey?</span>
            </h2>
            <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
              Join thousands of successful affiliates earning commissions while
              helping African businesses thrive digitally.
            </p>

            {/* Sleek CTA buttons with glass effect */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="#signup"
                className="group relative bg-white/10 backdrop-blur-md border border-white/20 text-white px-12 py-5 rounded-full hover:bg-white/20 transition-all duration-300 text-lg font-semibold shadow-2xl hover:shadow-white/20 hover:scale-105"
              >
                <span className="relative z-10">Become an Affiliate</span>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#8DC440] to-[#64AC6F] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>
              <Link
                href="/contact"
                className="group relative bg-transparent border-2 border-white/30 text-white px-12 py-5 rounded-full hover:bg-white/10 hover:border-white/50 transition-all duration-300 text-lg font-semibold backdrop-blur-sm hover:scale-105"
              >
                Learn More
              </Link>
            </div>

            {/* Additional sleek elements */}
            <div className="mt-16 flex justify-center">
              <div className="flex items-center space-x-8 text-white/70">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-[#8DC440] rounded-full animate-pulse"></div>
                  <span className="text-sm">Zero Setup Costs</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-[#20356A] rounded-full animate-pulse"></div>
                  <span className="text-sm">Monthly Payments</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-[#64AC6F] rounded-full animate-pulse"></div>
                  <span className="text-sm">Dedicated Support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

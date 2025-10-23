'use client';

'use client';

import { useState } from 'react';

export default function Demo() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    preferredDate: '',
    preferredTime: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Demo request submitted:', formData);
    alert('Thank you for your demo request! We\'ll contact you soon to schedule your personalized demo.');
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* -------------------------------------------------
        SLEEK HERO SECTION (Demo Focus)
        -------------------------------------------------
      */}
      <section className="relative py-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url(/hero_live_demo_black_team.png)",
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
            {/* Left Section - About Demo */}
            <div className="animate-fade-in-up">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="text-[#8DC440]">Experience</span> ZERP263 in Action
              </h1>
              <p className="text-xl mb-4 max-w-3xl">
                Schedule your live demo and see how ZERP263 transforms your business operations in real time.
              </p>
              <p className="text-lg mb-8 max-w-2xl">
                Get a personalized walkthrough of our platform, tailored to your industry and business needs.
              </p>
            </div>

            {/* Right Section - Quick Demo */}
            <div
              className="bg-white/10 backdrop-blur-md rounded-xl p-8 text-center animate-fade-in-up"
              style={{ animationDelay: "0.3s" }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-lg mb-8">
                Fill out the form below and our team will contact you to schedule your personalized demo.
              </p>
              <a
                href="#demo-form"
                className="bg-[#8DC440] text-white px-8 py-3 rounded-full hover:bg-[#64AC6F] transition-all duration-300 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 inline-block"
              >
                Book Your Demo Now
              </a>
              <p className="mt-4 text-sm">Or explore what to expect below</p>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------
        DEMO FORM & BENEFITS SECTION (Sleek Design)
        -------------------------------------------------
      */}
      <section id="demo-form" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
            {/* Demo Form */}
            <div className="animate-fade-in-up">
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">Book Your Demo</h2>
              <p className="text-lg text-gray-600 mb-8">
                Fill out the form below and our team will contact you to schedule a personalized demo tailored to your business needs.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-700 bg-white text-black rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Company *
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      required
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-700 bg-white text-black rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Your company name"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-700 bg-white text-black rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="your.email@company.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-700 bg-white text-black rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="+263 XX XXX XXXX"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="preferredDate" className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      id="preferredDate"
                      name="preferredDate"
                      value={formData.preferredDate}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-700 bg-white text-black rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label htmlFor="preferredTime" className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Time
                    </label>
                    <select
                      id="preferredTime"
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-700 bg-white text-black rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select time</option>
                      <option value="09:00">9:00 AM</option>
                      <option value="10:00">10:00 AM</option>
                      <option value="11:00">11:00 AM</option>
                      <option value="14:00">2:00 PM</option>
                      <option value="15:00">3:00 PM</option>
                      <option value="16:00">4:00 PM</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Tell us about your business
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-700 bg-white text-black rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Briefly describe your business, current challenges, and what you'd like to see in the demo..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#8DC440] text-white px-8 py-3 rounded-full hover:bg-[#64AC6F] transition-colors text-lg font-semibold"
                >
                  Book Your Demo
                </button>
              </form>
            </div>

            {/* Benefits & What to Expect */}
            <div className="animate-fade-in-up" style={{animationDelay: "0.3s"}}>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">What to Expect</h2>

              <div className="space-y-8">
                <div className="group relative bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden p-6">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-500/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative flex items-start space-x-4">
                    <div className="bg-blue-100 p-3 rounded-lg group-hover:bg-blue-200 transition-colors duration-300">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">Live Interactive Demo</h3>
                      <p className="text-gray-600">See ZERP263 in action with your real data and scenarios</p>
                    </div>
                  </div>
                </div>

                <div className="group relative bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden p-6">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-green-500/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative flex items-start space-x-4">
                    <div className="bg-green-100 p-3 rounded-lg group-hover:bg-green-200 transition-colors duration-300">
                      <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-green-600 transition-colors">Customized to Your Industry</h3>
                      <p className="text-gray-600">Demo tailored to your specific business type and needs</p>
                    </div>
                  </div>
                </div>

                <div className="group relative bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden p-6">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-purple-500/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative flex items-start space-x-4">
                    <div className="bg-purple-100 p-3 rounded-lg group-hover:bg-purple-200 transition-colors duration-300">
                      <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-purple-600 transition-colors">Q&A Session</h3>
                      <p className="text-gray-600">Ask questions and get answers from our product experts</p>
                    </div>
                  </div>
                </div>

                <div className="group relative bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden p-6">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-orange-500/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative flex items-start space-x-4">
                    <div className="bg-orange-100 p-3 rounded-lg group-hover:bg-orange-200 transition-colors duration-300">
                      <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-orange-600 transition-colors">45-Minute Session</h3>
                      <p className="text-gray-600">Comprehensive overview without wasting your time</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Demo Benefits */}
              <div className="mt-12 p-8 bg-gray-50 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Why Book a Demo?</h3>
                <ul className="space-y-4 text-gray-600">
                  <li className="flex items-start group">
                    <div className="flex-shrink-0 w-6 h-6 bg-[#8DC440] rounded-full flex items-center justify-center mr-4 mt-0.5 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="group-hover:text-gray-900 transition-colors duration-300">See how ZERP263 solves your specific challenges</span>
                  </li>
                  <li className="flex items-start group">
                    <div className="flex-shrink-0 w-6 h-6 bg-[#8DC440] rounded-full flex items-center justify-center mr-4 mt-0.5 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="group-hover:text-gray-900 transition-colors duration-300">Understand implementation timeline and costs</span>
                  </li>
                  <li className="flex items-start group">
                    <div className="flex-shrink-0 w-6 h-6 bg-[#8DC440] rounded-full flex items-center justify-center mr-4 mt-0.5 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="group-hover:text-gray-900 transition-colors duration-300">Get answers to your technical questions</span>
                  </li>
                  <li className="flex items-start group">
                    <div className="flex-shrink-0 w-6 h-6 bg-[#8DC440] rounded-full flex items-center justify-center mr-4 mt-0.5 group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="group-hover:text-gray-900 transition-colors duration-300">Learn about training and support options</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
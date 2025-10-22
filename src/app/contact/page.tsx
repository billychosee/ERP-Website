"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const response = await fetch('/contact/api', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: 'Thank you for your message! We\'ll get back to you soon.',
        });
        // Reset form data after successful submission
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          company: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        setSubmitStatus({
          type: 'error',
          message: data.error || 'Failed to send message. Please try again.',
        });
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus({
        type: 'error',
        message: 'Network error. Please check your connection and try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  // Define a reusable input class string
  const inputClasses =
    "w-full px-4 py-3 border border-gray-400 rounded-lg focus:ring-4 focus:ring-[#8DC440]/50 focus:border-[#8DC440] transition duration-300 text-gray-900 placeholder-gray-500"; // Key changes here

  return (
    <div className="min-h-screen bg-gray-900 font-sans">
      {/* Hero Section */}
      <section className="relative py-32 md:py-48 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60"
          style={{
            backgroundImage: "url(/hero_about_zerp365_black_team.png)",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-black/40 to-black/30"></div>
        </div>

        {/* Animated Background Elements (Subtler Glow) */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#8DC440]/30 rounded-full blur-3xl opacity-30 animate-slow-pulse"></div>
          <div
            className="absolute top-1/3 -left-10 w-72 h-72 bg-[#8DC440]/20 rounded-full blur-3xl opacity-20 animate-slow-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute bottom-0 right-1/4 w-64 h-64 bg-[#64AC6F]/20 rounded-full blur-3xl opacity-20 animate-slow-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="relative container mx-auto px-4 text-white z-10">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            {/* Left Section - About Contact */}
            <div className="lg:pr-12">
              <h1 className="text-4xl md:text-7xl font-extrabold mb-6 tracking-tight">
                <span className="text-[#8DC440]">Connect</span> with Our Team
              </h1>
              <p className="text-xl mb-4 max-w-3xl text-gray-300">
                Ready to transform your business? Get in touch with our experts
                today.
              </p>
              <p className="text-lg mb-8 max-w-2xl text-gray-400">
                Have questions about ZERP263? Need a tailored demo? We&apos;re
                here to help you unlock the full potential of our platform for
                your African business.
              </p>
            </div>

            {/* Right Section - Quick Contact (Card Style) */}
            <div
              className="bg-gray-800/60 backdrop-blur-lg rounded-2xl p-10 text-center shadow-2xl border border-[#8DC440]/20"
              style={{ animationDelay: "0.3s" }}
            >
              <h2 className="text-3xl font-bold mb-4 text-[#8DC440]">
                Let&apos;s Talk Growth 🚀
              </h2>
              <p className="text-lg mb-8 text-gray-300">
                Discuss your business challenges and see how ZERP263 can provide
                African-centric solutions.
              </p>
              <a
                href="#contact-form"
                className="bg-[#8DC440] text-gray-900 px-10 py-4 rounded-full hover:bg-[#64AC6F] transition-all duration-500 text-lg font-bold shadow-green-glow transform hover:scale-[1.03] inline-block"
              >
                Start a Conversation
              </a>
              <p className="mt-6 text-sm text-gray-400">
                Or proceed to the detailed form below.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------
        CONTACT FORM & INFO SECTION (Sleek Design)
        -------------------------------------------------
      */}
      <section
        id="contact-form"
        className="py-24 bg-gray-50 border-t border-gray-200"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Contact Form */}
              <div>
                <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
                  Send Us a Message
                </h2>
                <p className="text-lg text-gray-600 mb-10">
                  Fill out the form below, and we&apos;ll connect you with the
                  right expert immediately.
                </p>

                <form
                  onSubmit={handleSubmit}
                  className="space-y-6 p-8 bg-white rounded-xl shadow-xl border border-gray-100"
                >
                  {/* Name Fields */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="firstName"
                        className="block text-sm font-semibold text-gray-700 mb-2"
                      >
                        First Name *
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        required
                        value={formData.firstName}
                        onChange={handleChange}
                        className={inputClasses} // Use the predefined class
                        placeholder="Your first name"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="lastName"
                        className="block text-sm font-semibold text-gray-700 mb-2"
                      >
                        Last Name *
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        required
                        value={formData.lastName}
                        onChange={handleChange}
                        className={inputClasses} // Use the predefined class
                        placeholder="Your last name"
                      />
                    </div>
                  </div>

                  {/* Email Field */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className={inputClasses} // Use the predefined class
                      placeholder="your.email@company.com"
                    />
                  </div>

                  {/* Company & Phone Fields */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="company"
                        className="block text-sm font-semibold text-gray-700 mb-2"
                      >
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className={inputClasses} // Use the predefined class
                        placeholder="Your company name"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-semibold text-gray-700 mb-2"
                      >
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={inputClasses} // Use the predefined class
                        placeholder="+263 XX XXX XXXX"
                      />
                    </div>
                  </div>

                  {/* Subject Field (Slightly modified to handle the select box) */}
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Subject *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className={`appearance-none bg-white ${inputClasses}`} // Apply the core styles, but ensure bg-white is present and remove 'border-gray-300'
                    >
                      <option value="" disabled>
                        Select a subject...
                      </option>
                      <option value="demo">Request a Demo</option>
                      <option value="support">Technical Support</option>
                      <option value="sales">Sales Inquiry</option>
                      <option value="partnership">Partnership</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  {/* Message Field (Textarea) */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold text-gray-700 mb-2"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className={inputClasses} // Use the predefined class
                      placeholder="Tell us how we can help you..."
                    />
                  </div>

                  {/* Status Message */}
                  {submitStatus.type && (
                    <div
                      className={`p-4 rounded-lg ${
                        submitStatus.type === 'success'
                          ? 'bg-green-50 border border-green-200 text-green-800'
                          : 'bg-red-50 border border-red-200 text-red-800'
                      }`}
                    >
                      {submitStatus.message}
                    </div>
                  )}

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#8DC440] text-white px-8 py-4 rounded-full hover:bg-[#64AC6F] transition-all duration-300 text-lg font-bold shadow-lg hover:shadow-xl hover:shadow-[#8DC440]/50 transform hover:scale-[1.01] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {isSubmitting ? 'Sending...' : 'Submit Request'}
                  </button>
                </form>
              </div>

              {/* Contact Information */}
              <div className="lg:pt-16">
                <h2 className="text-4xl font-extrabold text-gray-900 mb-10">
                  Our Details
                </h2>

                <div className="space-y-10">
                  {/* Email */}
                  <div className="flex items-start space-x-4 p-4 border-l-4 border-[#8DC440] bg-white rounded-r-lg shadow-sm hover:shadow-md transition duration-300">
                    <div className="bg-[#8DC440] p-3 rounded-full flex-shrink-0">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">
                        Email Us
                      </h3>
                      <p className="text-gray-600 mb-1 text-sm">
                        General inquiries:
                      </p>
                      <a
                        href="mailto:info@smatechgroup.com"
                        className="text-[#8DC440] font-semibold hover:text-[#64AC6F] transition-colors"
                      >
                        info@smatechgroup.com
                      </a>
                      <p className="text-gray-600 mb-1 mt-2 text-sm">
                        Support:
                      </p>
                      <a
                        href="mailto:support@zerp365.com"
                        className="text-[#8DC440] font-semibold hover:text-[#64AC6F] transition-colors"
                      >
                        support@zerp365.com
                      </a>
                    </div>
                  </div>

                  {/* Phone/WhatsApp */}
                  <div className="flex items-start space-x-4 p-4 border-l-4 border-[#8DC440] bg-white rounded-r-lg shadow-sm hover:shadow-md transition duration-300">
                    <div className="bg-[#8DC440] p-3 rounded-full flex-shrink-0">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">
                        Call Us
                      </h3>
                      <p className="text-gray-600 mb-1 text-sm">Phone:</p>
                      <a
                        href="tel:+263 86 8800 8361"
                        className="text-[#8DC440] font-semibold hover:text-[#64AC6F] transition-colors"
                      >
                        +263 86 8800 8361
                      </a>
                      <p className="text-gray-600 mb-1 mt-2 text-sm">
                        WhatsApp:
                      </p>
                      <a
                        href="https://wa.me/+263789566427"
                        className="text-[#8DC440] font-semibold hover:text-[#64AC6F] transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        +263 789 566 427
                      </a>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-start space-x-4 p-4 border-l-4 border-[#8DC440] bg-white rounded-r-lg shadow-sm hover:shadow-md transition duration-300">
                    <div className="bg-[#8DC440] p-3 rounded-full flex-shrink-0">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">
                        Visit Us
                      </h3>
                      <p className="text-gray-600">
                        13 Brentwood Avenue, Mount Pleasant,
                      </p>
                      <p className="text-gray-600">Harare, Zimbabwe</p>
                      <p className="text-gray-600 font-semibold mt-1">
                        Africa Headquarters
                      </p>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start space-x-4 p-4 border-l-4 border-[#8DC440] bg-white rounded-r-lg shadow-sm hover:shadow-md transition duration-300">
                    <div className="bg-[#8DC440] p-3 rounded-full flex-shrink-0">
                      <svg
                        className="w-6 h-6 text-white"
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
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">
                        Business Hours
                      </h3>
                      <p className="text-gray-600">
                        Monday - Friday:{" "}
                        <span className="font-semibold">8:00 AM - 6:00 PM</span>
                      </p>
                      <p className="text-gray-600">
                        Saturday:{" "}
                        <span className="font-semibold">9:00 AM - 2:00 PM</span>
                      </p>
                      <p className="text-gray-600">
                        Sunday:{" "}
                        <span className="font-semibold text-red-500">
                          Closed
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

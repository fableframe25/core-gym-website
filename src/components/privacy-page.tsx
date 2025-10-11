"use client";

import { Button } from "./ui/button";
import { Header } from "./header";
import { Footer } from "./footer";

export function PrivacyPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />

      {/* Background Effects - Matching About section style */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(251,146,60,0.08)_0%,transparent_50%)]"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"></div>
      </div>

      <section className="relative bg-black font-sans px-4 py-16 md:py-24">
        <div className="container mx-auto relative z-10">
          {/* Header - Matching About section style */}
          <div className="text-center mb-16">
            <div className="mb-6">
              <div className="inline-block bg-orange-500 rounded-lg px-4 py-2 mb-2">
                <h3 className="text-sm font-bold text-white">
                  LEGAL INFORMATION
                </h3>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight uppercase">
              YOUR PRIVACY
              <br />
              <span className="bg-gradient-to-b from-orange-400 to-orange-600 bg-clip-text text-transparent text-5xl md:text-6xl lg:text-7xl drop-shadow-lg">
                MATTERS TO US
              </span>
            </h1>

            <p className="text-gray-400 text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
              At CoreGym, we are committed to protecting your personal
              information and privacy. This comprehensive policy explains how we
              collect, use, and safeguard your data to provide you with the best
              fitness experience while respecting your privacy rights.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Side - Quick Navigation */}
            <div className="lg:col-span-1">
              <div className="bg-gradient-to-br from-gray-900 to-gray-950 rounded-2xl p-6 border border-gray-700 sticky top-8">
                <h3 className="text-xl font-bold text-orange-500 mb-4">
                  Quick Navigation
                </h3>
                <nav className="space-y-2">
                  {[
                    "Information We Collect",
                    "How We Use Your Information",
                    "Information Sharing",
                    "Data Security",
                    "Your Rights",
                    "Contact Us",
                  ].map((item, index) => (
                    <a
                      key={index}
                      href={`#section-${index + 1}`}
                      className="block text-gray-300 hover:text-orange-500 transition-colors py-1 text-sm"
                    >
                      {index + 1}. {item}
                    </a>
                  ))}
                </nav>

                {/* Last Updated */}
                <div className="mt-6 pt-4 border-t border-gray-700">
                  <p className="text-gray-400 text-sm">
                    <strong className="text-white">Last updated:</strong>
                    <br />
                    October 11, 2025
                  </p>
                </div>
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="lg:col-span-2 space-y-12">
              {/* Information We Collect */}
              <section
                id="section-1"
                className="bg-gradient-to-br from-gray-900 to-gray-950 rounded-2xl p-8 border border-gray-700"
              >
                <h2 className="text-3xl font-bold text-orange-500 mb-6 flex items-center gap-3">
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                    1
                  </div>
                  Information We Collect
                </h2>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      Personal Information
                    </h4>
                    <ul className="text-gray-300 space-y-2 text-sm">
                      <li>• Full name and contact details</li>
                      <li>• Date of birth and emergency contacts</li>
                      <li>• Membership preferences</li>
                      <li>• Payment and billing information</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3 flex items-center gap-2">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      Health & Fitness Data
                    </h4>
                    <ul className="text-gray-300 space-y-2 text-sm">
                      <li>• Fitness goals and assessments</li>
                      <li>• Workout history and progress</li>
                      <li>• Health conditions (if disclosed)</li>
                      <li>• Class attendance records</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* How We Use Your Information */}
              <section
                id="section-2"
                className="bg-gradient-to-br from-gray-900 to-gray-950 rounded-2xl p-8 border border-gray-700"
              >
                <h2 className="text-3xl font-bold text-orange-500 mb-6 flex items-center gap-3">
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                    2
                  </div>
                  How We Use Your Information
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {[
                    {
                      icon: "🏋️",
                      title: "Personalized Training",
                      desc: "Create custom workout plans and track your fitness journey",
                    },
                    {
                      icon: "💳",
                      title: "Account Management",
                      desc: "Process payments and manage your membership account",
                    },
                    {
                      icon: "📱",
                      title: "Communication",
                      desc: "Send important updates about classes and facility changes",
                    },
                    {
                      icon: "🛡️",
                      title: "Safety & Security",
                      desc: "Ensure safe access and maintain facility security",
                    },
                    {
                      icon: "📊",
                      title: "Service Improvement",
                      desc: "Analyze usage patterns to enhance our services",
                    },
                    {
                      icon: "⚖️",
                      title: "Legal Compliance",
                      desc: "Meet regulatory requirements and protect our rights",
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="bg-gray-800 rounded-lg p-4 border border-gray-600"
                    >
                      <div className="text-2xl mb-2">{item.icon}</div>
                      <h4 className="text-white font-semibold mb-2 text-sm">
                        {item.title}
                      </h4>
                      <p className="text-gray-400 text-xs">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Information Sharing */}
              <section
                id="section-3"
                className="bg-gradient-to-br from-gray-900 to-gray-950 rounded-2xl p-8 border border-gray-700"
              >
                <h2 className="text-3xl font-bold text-orange-500 mb-6 flex items-center gap-3">
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                    3
                  </div>
                  Information Sharing
                </h2>

                <div className="bg-gray-800 rounded-lg p-6 border border-gray-600 mb-6">
                  <h4 className="text-xl font-semibold text-white mb-4">
                    🔒 We Never Sell Your Data
                  </h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    CoreGym does not sell, trade, or rent your personal
                    information to third parties. Your privacy is sacred to us,
                    and we only share information in specific, necessary
                    circumstances outlined below.
                  </p>
                </div>

                <div className="space-y-4">
                  {[
                    {
                      title: "Service Providers",
                      desc: "Trusted vendors who help operate our facilities and services",
                    },
                    {
                      title: "Legal Requirements",
                      desc: "When required by law or to protect safety and rights",
                    },
                    {
                      title: "Emergency Situations",
                      desc: "With emergency contacts or medical professionals when necessary",
                    },
                    {
                      title: "Business Transfers",
                      desc: "In the event of merger, acquisition, or asset sale",
                    },
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center shrink-0 mt-0.5">
                        <svg
                          className="w-4 h-4 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <div>
                        <h4 className="text-white font-semibold text-sm">
                          {item.title}
                        </h4>
                        <p className="text-gray-400 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* Data Security */}
              <section
                id="section-4"
                className="bg-gradient-to-br from-gray-900 to-gray-950 rounded-2xl p-8 border border-gray-700"
              >
                <h2 className="text-3xl font-bold text-orange-500 mb-6 flex items-center gap-3">
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                    4
                  </div>
                  Data Security
                </h2>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-white">
                      🔐 Technical Measures
                    </h4>
                    <ul className="text-gray-300 space-y-2 text-sm">
                      <li>• End-to-end encryption</li>
                      <li>• Secure data transmission</li>
                      <li>• Regular security audits</li>
                      <li>• Firewall protection</li>
                    </ul>
                  </div>

                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-white">
                      👥 Organizational Measures
                    </h4>
                    <ul className="text-gray-300 space-y-2 text-sm">
                      <li>• Staff privacy training</li>
                      <li>• Limited data access</li>
                      <li>• Regular policy updates</li>
                      <li>• Incident response plan</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Your Rights */}
              <section
                id="section-5"
                className="bg-gradient-to-br from-gray-900 to-gray-950 rounded-2xl p-8 border border-gray-700"
              >
                <h2 className="text-3xl font-bold text-orange-500 mb-6 flex items-center gap-3">
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                    5
                  </div>
                  Your Rights
                </h2>

                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    {
                      icon: "👁️",
                      title: "Access",
                      desc: "View your personal data",
                    },
                    {
                      icon: "✏️",
                      title: "Correct",
                      desc: "Update inaccurate information",
                    },
                    {
                      icon: "🗑️",
                      title: "Delete",
                      desc: "Request data removal",
                    },
                    {
                      icon: "📱",
                      title: "Portability",
                      desc: "Get a copy of your data",
                    },
                    {
                      icon: "🚫",
                      title: "Opt-out",
                      desc: "Stop marketing communications",
                    },
                    {
                      icon: "⚠️",
                      title: "Object",
                      desc: "Limit data processing",
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="bg-gray-800 rounded-lg p-4 border border-gray-600 text-center"
                    >
                      <div className="text-2xl mb-2">{item.icon}</div>
                      <h4 className="text-white font-semibold mb-1 text-sm">
                        {item.title}
                      </h4>
                      <p className="text-gray-400 text-xs">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Contact Information */}
              <section
                id="section-6"
                className="bg-gradient-to-br from-gray-900 to-gray-950 rounded-2xl p-8 border border-gray-700"
              >
                <h2 className="text-3xl font-bold text-orange-500 mb-6 flex items-center gap-3">
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                    6
                  </div>
                  Contact Us
                </h2>

                <div className="bg-gray-800 rounded-lg p-6 border border-gray-600">
                  <h4 className="text-xl font-semibold text-white mb-4">
                    Privacy Team
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-gray-300 mb-2">
                        <strong className="text-white">Email:</strong>{" "}
                        privacy@coregym.com
                      </p>
                      <p className="text-gray-300">
                        <strong className="text-white">Phone:</strong> +1 (555)
                        123-4567
                      </p>
                    </div>
                    <div>
                      <p className="text-gray-300">
                        <strong className="text-white">Address:</strong>
                        <br />
                        123 Fitness Street
                        <br />
                        Gym City, GC 12345
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Back Button */}
              <div className="text-center pt-8">
                <Button
                  onClick={() => window.history.back()}
                  className="bg-orange-500 hover:bg-orange-600 text-white font-bold uppercase tracking-wide px-8 py-4 rounded-xl flex items-center gap-2 transition-all duration-300 transform hover:scale-105 shadow-lg mx-auto"
                >
                  BACK TO WEBSITE
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 19l-7-7m0 0l7-7m-7 7h18"
                    />
                  </svg>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

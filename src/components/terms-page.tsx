"use client";

import { Button } from "./ui/button";

export function TermsPage() {
  return (
    <div className="min-h-screen bg-[#1a120e] text-white">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(251,146,60,0.08)_0%,transparent_50%)]"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <span
              className="text-black px-6 py-2 text-xs font-black uppercase tracking-widest"
              style={{
                backgroundColor: "#F97316",
                borderRadius: "12px 12px 15px 5px / 10px 10px 15px 8px",
                display: "inline-block",
                lineHeight: "1.5",
                clipPath:
                  "polygon(0% 0%, 95% 0%, 100% 30%, 100% 100%, 5% 100%, 0% 70%)",
              }}
            >
              Legal Information
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-white tracking-wide">
            <span className="relative inline-block">
              <span className="border-b-4 border-white pb-1">Terms</span>
            </span>{" "}
            <span>
              <span className="text-orange-500">&</span> Conditions
            </span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Please read these terms and conditions carefully before using
            CoreGym facilities and services.
          </p>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-gray-900 to-gray-950 rounded-2xl p-8 border border-gray-700 space-y-8">
            {/* Last Updated */}
            <div className="text-center">
              <p className="text-gray-400 text-sm">
                Last updated: October 11, 2025
              </p>
            </div>

            {/* Acceptance of Terms */}
            <section>
              <h2 className="text-2xl font-bold text-orange-500 mb-4">
                1. Acceptance of Terms
              </h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  By accessing and using CoreGym facilities, services, or
                  website, you accept and agree to be bound by the terms and
                  provision of this agreement. If you do not agree to abide by
                  the above, please do not use this service.
                </p>
              </div>
            </section>

            {/* Membership and Access */}
            <section>
              <h2 className="text-2xl font-bold text-orange-500 mb-4">
                2. Membership and Access
              </h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  <strong className="text-white">
                    Membership Requirements:
                  </strong>{" "}
                  You must be at least 16 years old to join CoreGym. Members
                  under 18 require parental consent.
                </p>
                <p>
                  <strong className="text-white">Access Hours:</strong> Facility
                  access is subject to posted operating hours and may vary
                  during holidays or special events.
                </p>
                <p>
                  <strong className="text-white">Membership Cards:</strong> You
                  must present a valid membership card or digital pass for
                  facility access. Lost cards may incur replacement fees.
                </p>
                <p>
                  <strong className="text-white">Guest Policy:</strong> Guests
                  must be accompanied by a member and may be subject to
                  additional fees and restrictions.
                </p>
              </div>
            </section>

            {/* Payment and Fees */}
            <section>
              <h2 className="text-2xl font-bold text-orange-500 mb-4">
                3. Payment and Fees
              </h2>
              <div className="space-y-4 text-gray-300">
                <ul className="space-y-2 list-disc list-inside">
                  <li>
                    Membership fees are due in advance and are non-refundable
                  </li>
                  <li>Late payment fees may apply for overdue accounts</li>
                  <li>
                    We reserve the right to change membership fees with 30 days
                    notice
                  </li>
                  <li>
                    Automatic renewal applies unless cancelled according to our
                    cancellation policy
                  </li>
                  <li>
                    Personal training and additional services require separate
                    payment
                  </li>
                </ul>
              </div>
            </section>

            {/* Cancellation Policy */}
            <section>
              <h2 className="text-2xl font-bold text-orange-500 mb-4">
                4. Cancellation Policy
              </h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  <strong className="text-white">Notice Period:</strong>{" "}
                  Membership cancellations require 30 days written notice.
                </p>
                <p>
                  <strong className="text-white">Cancellation Fee:</strong>{" "}
                  Early termination of annual memberships may incur cancellation
                  fees.
                </p>
                <p>
                  <strong className="text-white">Freezing Membership:</strong>{" "}
                  Members may freeze their membership for medical reasons or
                  extended travel with proper documentation.
                </p>
              </div>
            </section>

            {/* Health and Safety */}
            <section>
              <h2 className="text-2xl font-bold text-orange-500 mb-4">
                5. Health and Safety
              </h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  <strong className="text-white">Medical Clearance:</strong> You
                  warrant that you are physically fit to use gym facilities.
                  Consult your physician before beginning any exercise program.
                </p>
                <p>
                  <strong className="text-white">Equipment Use:</strong> Use all
                  equipment at your own risk and according to posted
                  instructions. Report any damaged equipment immediately.
                </p>
                <p>
                  <strong className="text-white">Personal Belongings:</strong>{" "}
                  CoreGym is not responsible for lost, stolen, or damaged
                  personal items. Use lockers and don't leave valuables
                  unattended.
                </p>
                <p>
                  <strong className="text-white">Emergency Procedures:</strong>{" "}
                  Follow all posted emergency procedures and staff instructions
                  during emergencies.
                </p>
              </div>
            </section>

            {/* Code of Conduct */}
            <section>
              <h2 className="text-2xl font-bold text-orange-500 mb-4">
                6. Code of Conduct
              </h2>
              <div className="space-y-4 text-gray-300">
                <p>Members agree to:</p>
                <ul className="space-y-2 list-disc list-inside">
                  <li>Respect other members and staff at all times</li>
                  <li>Maintain appropriate hygiene and dress code</li>
                  <li>
                    Clean equipment after use and return weights to proper
                    locations
                  </li>
                  <li>
                    Refrain from loud, disruptive, or inappropriate behavior
                  </li>
                  <li>
                    Not use facilities under the influence of alcohol or drugs
                  </li>
                  <li>Follow all posted rules and staff instructions</li>
                  <li>
                    Not engage in harassment, discrimination, or intimidation
                  </li>
                </ul>
              </div>
            </section>

            {/* Liability and Assumption of Risk */}
            <section>
              <h2 className="text-2xl font-bold text-orange-500 mb-4">
                7. Liability and Assumption of Risk
              </h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  <strong className="text-white">Assumption of Risk:</strong>{" "}
                  You acknowledge that physical exercise and use of gym
                  equipment involves inherent risks of injury.
                </p>
                <p>
                  <strong className="text-white">Release of Claims:</strong> You
                  agree to release CoreGym from liability for injuries or
                  damages arising from your use of our facilities, except where
                  prohibited by law.
                </p>
                <p>
                  <strong className="text-white">Insurance:</strong> You are
                  responsible for maintaining adequate health and accident
                  insurance coverage.
                </p>
              </div>
            </section>

            {/* Termination */}
            <section>
              <h2 className="text-2xl font-bold text-orange-500 mb-4">
                8. Termination
              </h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  CoreGym reserves the right to terminate membership immediately
                  for violation of these terms, inappropriate behavior,
                  non-payment, or any actions that compromise the safety and
                  comfort of other members or staff.
                </p>
              </div>
            </section>

            {/* Contact Information */}
            <section>
              <h2 className="text-2xl font-bold text-orange-500 mb-4">
                9. Contact Information
              </h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  For questions about these Terms and Conditions, please contact
                  us:
                </p>
                <div className="bg-gray-800 rounded-lg p-4">
                  <p>
                    <strong className="text-white">CoreGym Management</strong>
                  </p>
                  <p>Email: info@coregym.com</p>
                  <p>Phone: +1 (555) 123-4567</p>
                  <p>Address: 123 Fitness Street, Gym City, GC 12345</p>
                </div>
              </div>
            </section>

            {/* Back Button */}
            <div className="text-center pt-8">
              <Button
                onClick={() => window.history.back()}
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold uppercase tracking-wide px-8 py-3 rounded-lg transition-colors"
              >
                Back to Website
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

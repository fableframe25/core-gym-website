"use client";

import React from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

export function ContactSection() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
  };

  const handleMapClick = () => {
    // Redirect to Google Maps with gym location
    window.open("https://share.google/aq0R4AD80VAJMOZgB", "_blank");
  };

  return (
    <section
      id="contact"
      className="py-16 px-10 bg-[#1a120e] relative overflow-hidden"
    >
      {/* Background Effects - Matching other components */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(251,146,60,0.08)_0%,transparent_50%)]"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header - Matching other components */}
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
              Contact Us
            </span>
          </div>
          <h2 className="text-4xl font-bold text-center mb-12 text-white tracking-wide">
            <span className="relative inline-block">
              <span className="border-b-4 border-white pb-1">Get</span>
            </span>{" "}
            <span>
              <span className="text-orange-500">In</span> Touch
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Section - Contact Info & Map */}
          <div className="space-y-8">
            {/* Header */}
            <div>
              
              <p className="text-gray-400 text-lg leading-relaxed">
                We are always looking for ways to improve our products and
                services. Contact us and let us know how we can help you.
              </p>
            </div>

            {/* Contact Details */}
            <div className="flex flex-wrap items-center gap-4 text-white">
              <span>📧 gym.coregym@gmail.com</span>
              <span className="text-gray-600">•</span>
              <span>📞 093300 59709</span>
              <span className="text-gray-600">•</span>
             
            </div>

            {/* Clickable Map */}
            <div
              className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl h-80 cursor-pointer overflow-hidden group border border-gray-700"
              onClick={handleMapClick}
            >
              {/* Map Background */}
              <div className="absolute inset-0">
                {/* Map Image */}
                <div className="absolute inset-0">
                  <img
                    src="/map.png"
                    alt="Gym location map"
                    className="w-full h-full object-cover hover:grayscale-0 transition-all duration-300"
                  />
                  {/* Light overlay for better contrast */}
                  <div className="absolute inset-0 bg-[#1a120e]/20"></div>
                </div>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                  <p className="text-white text-sm font-medium">
                    Click to view on Google Maps
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Contact Form */}
          <div className="bg-gradient-to-br from-gray-8900 to-gray-950 rounded-2xl p-8 border border-gray-700">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Full Name */}
              <div>
                <label className="block text-white text-sm font-medium mb-2">
                  Full name
                </label>
                <Input
                  type="text"
                  defaultValue="Your Name"
                  className="w-full p-4 bg-gray-700/50 border-gray-600 text-white rounded-lg focus:border-orange-500 focus:ring-orange-500"
                />
              </div>

              {/* Email Address */}
              <div>
                <label className="block text-white text-sm font-medium mb-2">
                  Email Address
                </label>
                <Input
                  type="email"
                  defaultValue=""
                  className="w-full p-4 bg-gray-700/50 border-gray-600 text-white rounded-lg focus:border-orange-500 focus:ring-orange-500"
                />
              </div>

              {/* Company */}
              <div>
                
              </div>

              {/* Message */}
              <div>
                <label className="block text-white text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea
                  placeholder="Type your message here"
                  rows={5}
                  className="w-full p-4 bg-gray-700/50 border-gray-600 text-white rounded-lg focus:border-orange-500 focus:ring-orange-500 resize-none"
                />
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold uppercase tracking-wide py-4 rounded-lg transition-colors"
              >
                Submit
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

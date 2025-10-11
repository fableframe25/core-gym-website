"use client";

import React from "react";
import { MapPin, Phone, Mail } from "lucide-react";
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
    window.open(
      "https://maps.google.com/?q=123+Fitness+Street,+Gym+City,+GC+12345",
      "_blank"
    );
  };

  return (
    <section id="contact" className="py-16 bg-black relative overflow-hidden">
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
          <h2
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-2 tracking-tight leading-[0.95] uppercase"
            style={{
              fontFamily: 'Impact, "Arial Black", sans-serif',
              fontWeight: 900,
              letterSpacing: "0.02em",
            }}
          >
            GET IN{" "}
            <span className="text-orange-500" style={{ fontWeight: 900 }}>
              TOUCH
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Section - Contact Info & Map */}
          <div className="space-y-8">
            {/* Header */}
            <div>
              <h3 className="text-3xl font-bold text-white mb-6">Contact us</h3>
              <p className="text-gray-400 text-lg leading-relaxed">
                We are always looking for ways to improve our products and
                services. Contact us and let us know how we can help you.
              </p>
            </div>

            {/* Contact Details */}
            <div className="flex flex-wrap items-center gap-4 text-white">
              <span>info@fitgym.com</span>
              <span className="text-gray-600">•</span>
              <span>+1 (555) 123-4567</span>
              <span className="text-gray-600">•</span>
              <span>support@fitgym.com</span>
            </div>

            {/* Clickable Map */}
            <div
              className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl h-80 cursor-pointer overflow-hidden group border border-gray-700"
              onClick={handleMapClick}
            >
              {/* Map Background */}
              <div className="absolute inset-0">
                {/* Simple Map Pattern */}
                <div className="absolute inset-0 opacity-20">
                  <svg viewBox="0 0 400 320" className="w-full h-full">
                    {/* Simplified world map shapes */}
                    <path
                      d="M50 100 Q80 80 110 100 T170 100 Q200 90 230 100 T290 100 Q320 110 350 100 L350 120 Q320 130 290 120 T230 120 Q200 130 170 120 T110 120 Q80 130 50 120 Z"
                      fill="currentColor"
                      className="text-gray-600"
                    />
                    <path
                      d="M80 180 Q110 160 140 180 T200 180 Q230 170 260 180 T320 180 Q350 190 380 180 L380 200 Q350 210 320 200 T260 200 Q230 210 200 200 T140 200 Q110 210 80 200 Z"
                      fill="currentColor"
                      className="text-gray-600"
                    />
                    <path
                      d="M60 250 Q90 230 120 250 T180 250 Q210 240 240 250 T300 250 Q330 260 360 250 L360 270 Q330 280 300 270 T240 270 Q210 280 180 270 T120 270 Q90 280 60 270 Z"
                      fill="currentColor"
                      className="text-gray-600"
                    />
                  </svg>
                </div>

                {/* Location Pin */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="relative">
                    {/* Pin */}
                    <div className="w-6 h-6 bg-orange-500 rounded-full shadow-lg animate-pulse"></div>
                    <div className="w-8 h-8 bg-orange-500/30 rounded-full absolute -inset-1 animate-ping"></div>
                  </div>
                </div>

                {/* Location Label */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-16">
                  <div className="bg-gray-800 rounded-lg px-3 py-2 shadow-lg border border-gray-700">
                    <p className="text-white text-sm font-medium">
                      We are here
                    </p>
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full">
                      <div className="w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
                    </div>
                  </div>
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
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 border border-gray-700">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Full Name */}
              <div>
                <label className="block text-white text-sm font-medium mb-2">
                  Full name
                </label>
                <Input
                  type="text"
                  defaultValue="John Doe"
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
                  defaultValue="john@example.com"
                  className="w-full p-4 bg-gray-700/50 border-gray-600 text-white rounded-lg focus:border-orange-500 focus:ring-orange-500"
                />
              </div>

              {/* Company */}
              <div>
                <label className="block text-white text-sm font-medium mb-2">
                  Company
                </label>
                <Input
                  type="text"
                  defaultValue="FitGym Member"
                  className="w-full p-4 bg-gray-700/50 border-gray-600 text-white rounded-lg focus:border-orange-500 focus:ring-orange-500"
                />
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

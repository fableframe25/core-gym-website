"use client"

import { MessageCircle, Phone, Mail, MapPin, Instagram, Facebook, Youtube } from "lucide-react"
import { Button } from "./ui/button"

export function Footer() {
  const handleWhatsApp = () => {
    window.open("https://wa.me/1234567890?text=Hi! I want to know more about FitGym", "_blank")
  }

  const handleCall = () => {
    window.open("tel:+1234567890", "_self")
  }

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl">FG</span>
              </div>
              <span className="text-xl font-bold">FitGym</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Transform your life with our state-of-the-art equipment, expert trainers, and personalized fitness
              programs.
            </p>
            <div className="flex space-x-2">
              <Button
                variant="outline"
                size="icon"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
              >
                <Instagram className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
              >
                <Facebook className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
              >
                <Youtube className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Quick Links</h4>
            <div className="space-y-2 text-sm">
              <a href="#home" className="block text-muted-foreground hover:text-primary transition-colors">
                Home
              </a>
              <a href="#about" className="block text-muted-foreground hover:text-primary transition-colors">
                About Us
              </a>
              <a href="#trainers" className="block text-muted-foreground hover:text-primary transition-colors">
                Our Trainers
              </a>
              <a href="#offers" className="block text-muted-foreground hover:text-primary transition-colors">
                Membership
              </a>
              <a href="#media" className="block text-muted-foreground hover:text-primary transition-colors">
                Gallery
              </a>
              <a href="#contact" className="block text-muted-foreground hover:text-primary transition-colors">
                Contact
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-semibold">Our Services</h4>
            <div className="space-y-2 text-sm">
              <p className="text-muted-foreground">Personal Training</p>
              <p className="text-muted-foreground">Group Classes</p>
              <p className="text-muted-foreground">Nutrition Coaching</p>
              <p className="text-muted-foreground">Weight Loss Programs</p>
              <p className="text-muted-foreground">Strength Training</p>
              <p className="text-muted-foreground">Functional Fitness</p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold">Contact Info</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">123 Fitness Street, Gym City, GC 12345</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-muted-foreground">info@fitgym.com</span>
              </div>
            </div>
            <div className="flex flex-col space-y-2">
              <Button
                size="sm"
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
                onClick={handleWhatsApp}
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp Us
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                onClick={handleCall}
              >
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © 2025 FitGym. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  )
}

"use client"

import { MessageCircle, Phone, Users, Trophy, Dumbbell } from "lucide-react"
import { Card } from "./ui/card"
import { Button } from "./ui/button"

export function HeroSection() {
  const handleWhatsApp = () => {
    window.open("https://wa.me/1234567890?text=Hi! I want to join FitGym", "_blank")
  }

  const handleCall = () => {
    window.open("tel:+1234567890", "_self")
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img src="/muscular-man-working-out-in-modern-gym-with-weight.jpg" alt="Gym Background" className="w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold text-balance leading-tight">
                SCULPT YOUR <span className="text-primary">BODY</span>,
                <br />
                ELEVATE YOUR <span className="text-primary">SPIRIT</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg text-pretty">
                Transform your life with our state-of-the-art equipment, expert trainers, and personalized fitness
                programs designed for your success.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 animate-pulse-glow"
                onClick={handleWhatsApp}
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Join via WhatsApp
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 py-6 bg-transparent"
                onClick={handleCall}
              >
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </Button>
            </div>

            {/* Stats */}
            <div className="flex items-center space-x-8 pt-8">
              <div className="flex items-center space-x-2">
                <div className="flex -space-x-2">
                  <img
                    src="/fitness-member-1.jpg"
                    alt="Member"
                    className="w-10 h-10 rounded-full border-2 border-primary"
                  />
                  <img
                    src="/fitness-member-2.jpg"
                    alt="Member"
                    className="w-10 h-10 rounded-full border-2 border-primary"
                  />
                  <img
                    src="/fitness-member-3.jpg"
                    alt="Member"
                    className="w-10 h-10 rounded-full border-2 border-primary"
                  />
                  <img
                    src="/fitness-member-4.jpg"
                    alt="Member"
                    className="w-10 h-10 rounded-full border-2 border-primary"
                  />
                </div>
                <div>
                  <p className="text-primary font-bold text-lg">2,500+</p>
                  <p className="text-sm text-muted-foreground">Active Members</p>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Card className="p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary transition-colors">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-primary">98%</p>
                  <p className="text-sm text-muted-foreground">Happy Customers</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary transition-colors">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                  <Dumbbell className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-primary">100%</p>
                  <p className="text-sm text-muted-foreground">Advanced Equipment</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary transition-colors">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                  <Trophy className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-primary">95%</p>
                  <p className="text-sm text-muted-foreground">Qualified Trainers</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary transition-colors">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-primary">24/7</p>
                  <p className="text-sm text-muted-foreground">Gym Access</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

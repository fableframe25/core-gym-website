"use client"

import { MessageCircle, Target, Heart, Award, Zap } from "lucide-react"
import { Button } from "./ui/button"
import { Card } from "./ui/card"

export function AboutSection() {
  const handleWhatsApp = () => {
    window.open("https://wa.me/1234567890?text=Hi! I want to know more about FitGym", "_blank")
  }

  return (
    <section id="about" className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-block">
                <span className="text-primary font-semibold text-sm uppercase tracking-wider bg-primary/10 px-3 py-1 rounded-full">
                  About FitGym
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-balance">
                DEDICATED TO <span className="text-primary">IGNITING</span> YOUR FITNESS{" "}
                <span className="text-primary">JOURNEY</span>
              </h2>
              <p className="text-lg text-muted-foreground text-pretty">
                At FitGym, we believe fitness is more than just physical transformation. It's about building confidence,
                creating healthy habits, and unlocking your full potential. Our state-of-the-art facility and expert
                team are here to guide you every step of the way.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-3 p-4 bg-primary/5 rounded-lg border border-primary/20">
                <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
                  <Target className="w-4 h-4 text-primary" />
                </div>
                <span className="font-medium">Modern Facilities</span>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-primary/5 rounded-lg border border-primary/20">
                <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
                  <Award className="w-4 h-4 text-primary" />
                </div>
                <span className="font-medium">Expert Team</span>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-primary/5 rounded-lg border border-primary/20">
                <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
                  <Heart className="w-4 h-4 text-primary" />
                </div>
                <span className="font-medium">Diverse Offerings</span>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-primary/5 rounded-lg border border-primary/20">
                <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center">
                  <Zap className="w-4 h-4 text-primary" />
                </div>
                <span className="font-medium">Fitness Focus</span>
              </div>
            </div>

            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Our Mission</h3>
                <p className="text-muted-foreground">
                  To empower individuals to achieve their fitness goals through personalized training, cutting-edge
                  equipment, and a supportive community that celebrates every victory, big or small.
                </p>
              </div>

              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
                onClick={handleWhatsApp}
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Learn More via WhatsApp
              </Button>
            </div>
          </div>

          {/* Image Grid */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img
                  src="/modern-gym-equipment-and-weights.jpg"
                  alt="Gym Equipment"
                  className="w-full h-64 object-cover rounded-lg"
                />
                <Card className="p-6 bg-primary/10 border-primary/20">
                  <div className="text-center">
                    <p className="text-3xl font-bold text-primary">15+</p>
                    <p className="text-sm text-muted-foreground">Years of Experience</p>
                  </div>
                </Card>
              </div>
              <div className="space-y-4 pt-8">
                <Card className="p-6 bg-primary/10 border-primary/20">
                  <div className="text-center">
                    <p className="text-3xl font-bold text-primary">500+</p>
                    <p className="text-sm text-muted-foreground">Success Stories</p>
                  </div>
                </Card>
                <img
                  src="/people-working-out-in-gym-group-fitness-class.jpg"
                  alt="Group Fitness"
                  className="w-full h-64 object-cover rounded-lg"
                />
              </div>
            </div>

            {/* Floating Element */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/20 rounded-full animate-float"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

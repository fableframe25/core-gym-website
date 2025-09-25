"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MessageCircle, Star, Award, Clock } from "lucide-react"

const trainers = [
  {
    id: 1,
    name: "Alex Thompson",
    title: "Head Trainer & Strength Coach",
    shift: "Morning (6 AM - 2 PM)",
    experience: "8 years",
    specialization: ["Strength Training", "Powerlifting", "Muscle Building"],
    image: "/professional-male-fitness-trainer-muscular.jpg",
    bio: "Certified strength and conditioning specialist with a passion for helping clients achieve their maximum potential.",
    achievements: ["NASM Certified", "Powerlifting Champion", "500+ Success Stories"],
    rating: 4.9,
  },
  {
    id: 2,
    name: "Sarah Martinez",
    title: "Fitness Coach & Nutritionist",
    shift: "Evening (2 PM - 10 PM)",
    experience: "6 years",
    specialization: ["Weight Loss", "HIIT Training", "Nutrition Coaching"],
    image: "/professional-female-fitness-trainer-athletic.jpg",
    bio: "Holistic approach to fitness combining effective workouts with personalized nutrition plans.",
    achievements: ["ACE Certified", "Nutrition Specialist", "300+ Transformations"],
    rating: 4.8,
  },
  {
    id: 3,
    name: "Marcus Johnson",
    title: "Functional Training Expert",
    shift: "Morning (7 AM - 3 PM)",
    experience: "10 years",
    specialization: ["Functional Training", "Injury Recovery", "Senior Fitness"],
    image: "/professional-black-male-fitness-trainer-experience.jpg",
    bio: "Former physical therapist specializing in functional movement and injury prevention.",
    achievements: ["DPT Degree", "FMS Certified", "1000+ Clients Helped"],
    rating: 5.0,
  },
  {
    id: 4,
    name: "Emma Wilson",
    title: "Group Fitness Instructor",
    shift: "Evening (3 PM - 9 PM)",
    experience: "5 years",
    specialization: ["Group Classes", "Yoga", "Dance Fitness"],
    image: "/professional-female-yoga-fitness-instructor.jpg",
    bio: "Energetic instructor who makes fitness fun and accessible for everyone.",
    achievements: ["RYT-500 Certified", "Zumba Instructor", "200+ Class Hours/Month"],
    rating: 4.9,
  },
]

export function TrainersSection() {
  const handleWhatsApp = (trainerName: string) => {
    window.open(`https://wa.me/1234567890?text=Hi! I want to train with ${trainerName}`, "_blank")
  }

  return (
    <section id="trainers" className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-block">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider bg-primary/10 px-3 py-1 rounded-full">
              Our Team
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-balance">
            MEET OUR <span className="text-primary">PROFESSIONAL</span> FITNESS TRAINERS
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Our certified trainers bring years of experience and passion to help you achieve your fitness goals safely
            and effectively.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trainers.map((trainer) => (
            <Card
              key={trainer.id}
              className="overflow-hidden bg-card border-border hover:border-primary transition-all duration-300 group"
            >
              <div className="relative">
                <img
                  src={trainer.image || "/placeholder.svg"}
                  alt={trainer.name}
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-primary/90 text-primary-foreground">
                    <Clock className="w-3 h-3 mr-1" />
                    {trainer.shift.includes("Morning") ? "Morning" : "Evening"}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="flex items-center space-x-1 bg-background/90 backdrop-blur-sm px-2 py-1 rounded-full">
                    <Star className="w-3 h-3 text-primary fill-primary" />
                    <span className="text-xs font-medium">{trainer.rating}</span>
                  </div>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold">{trainer.name}</h3>
                  <p className="text-primary font-medium">{trainer.title}</p>
                  <p className="text-sm text-muted-foreground">{trainer.shift}</p>
                </div>

                <p className="text-sm text-muted-foreground">{trainer.bio}</p>

                <div className="space-y-3">
                  <div>
                    <p className="text-sm font-medium mb-2">Specializations:</p>
                    <div className="flex flex-wrap gap-1">
                      {trainer.specialization.map((spec, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {spec}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <p className="text-sm font-medium mb-2">Achievements:</p>
                    <div className="space-y-1">
                      {trainer.achievements.map((achievement, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <Award className="w-3 h-3 text-primary" />
                          <span className="text-xs text-muted-foreground">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-border">
                  <Button
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                    onClick={() => handleWhatsApp(trainer.name)}
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Train with {trainer.name.split(" ")[0]}
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
            onClick={() => handleWhatsApp("our team")}
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Contact Our Training Team
          </Button>
        </div>
      </div>
    </section>
  )
}

"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, MessageCircle } from "lucide-react"

const transformations = [
  {
    id: 1,
    name: "Sarah Johnson",
    age: 28,
    program: "Weight Loss Program",
    duration: "6 months",
    beforeImage: "/before-transformation-overweight-woman.jpg",
    afterImage: "/after-transformation-fit-athletic-woman.jpg",
    results: "Lost 35 lbs, Gained confidence",
    testimonial: "FitGym changed my life completely. The trainers were amazing and the community was so supportive!",
  },
  {
    id: 2,
    name: "Mike Chen",
    age: 35,
    program: "Muscle Building",
    duration: "8 months",
    beforeImage: "/before-transformation-skinny-man.jpg",
    afterImage: "/after-transformation-muscular-athletic-man.jpg",
    results: "Gained 25 lbs muscle, Increased strength 200%",
    testimonial: "The personal training program here is incredible. I've never been stronger or more confident.",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    age: 42,
    program: "Total Body Transformation",
    duration: "12 months",
    beforeImage: "/before-transformation-middle-aged-woman.jpg",
    afterImage: "/after-transformation-fit-strong-middle-aged-woman.jpg",
    results: "Lost 40 lbs, Improved health markers",
    testimonial: "At 42, I thought it was too late to get in shape. FitGym proved me wrong!",
  },
]

export function TransformationSection() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % transformations.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + transformations.length) % transformations.length)
  }

  const handleWhatsApp = () => {
    window.open("https://wa.me/1234567890?text=Hi! I want to start my transformation journey", "_blank")
  }

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-block">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider bg-primary/10 px-3 py-1 rounded-full">
              Success Stories
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-balance">
            REAL <span className="text-primary">TRANSFORMATIONS</span>, REAL RESULTS
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            See how our members have transformed their lives with dedication, expert guidance, and the right support
            system.
          </p>
        </div>

        {/* Transformation Slider */}
        <div className="relative max-w-6xl mx-auto">
          <div className="overflow-hidden rounded-2xl">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {transformations.map((transformation) => (
                <div key={transformation.id} className="w-full flex-shrink-0">
                  <Card className="p-8 bg-card border-border">
                    <div className="grid lg:grid-cols-2 gap-8 items-center">
                      {/* Before/After Images */}
                      <div className="space-y-6">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <img
                              src={transformation.beforeImage || "/placeholder.svg"}
                              alt={`${transformation.name} before`}
                              className="w-full h-80 object-cover rounded-lg"
                            />
                            <div className="text-center">
                              <span className="text-sm font-medium text-muted-foreground bg-muted px-3 py-1 rounded-full">
                                BEFORE
                              </span>
                            </div>
                          </div>
                          <div className="space-y-2">
                            <img
                              src={transformation.afterImage || "/placeholder.svg"}
                              alt={`${transformation.name} after`}
                              className="w-full h-80 object-cover rounded-lg"
                            />
                            <div className="text-center">
                              <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                                AFTER
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Transformation Details */}
                      <div className="space-y-6">
                        <div className="space-y-4">
                          <h3 className="text-3xl font-bold">{transformation.name}</h3>
                          <div className="space-y-2">
                            <p className="text-muted-foreground">
                              <span className="font-medium">Age:</span> {transformation.age}
                            </p>
                            <p className="text-muted-foreground">
                              <span className="font-medium">Program:</span> {transformation.program}
                            </p>
                            <p className="text-muted-foreground">
                              <span className="font-medium">Duration:</span> {transformation.duration}
                            </p>
                          </div>
                        </div>

                        <div className="p-4 bg-primary/10 rounded-lg border border-primary/20">
                          <h4 className="font-semibold text-primary mb-2">Results Achieved:</h4>
                          <p className="text-foreground">{transformation.results}</p>
                        </div>

                        <blockquote className="text-lg italic text-muted-foreground border-l-4 border-primary pl-4">
                          "{transformation.testimonial}"
                        </blockquote>

                        <Button
                          size="lg"
                          className="bg-primary hover:bg-primary/90 text-primary-foreground w-full sm:w-auto"
                          onClick={handleWhatsApp}
                        >
                          <MessageCircle className="w-5 h-5 mr-2" />
                          Start Your Transformation
                        </Button>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm border-primary hover:bg-primary hover:text-primary-foreground"
            onClick={prevSlide}
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/80 backdrop-blur-sm border-primary hover:bg-primary hover:text-primary-foreground"
            onClick={nextSlide}
          >
            <ChevronRight className="w-4 h-4" />
          </Button>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {transformations.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? "bg-primary" : "bg-muted"
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

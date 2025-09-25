"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MessageCircle, Phone, Check, Zap, Crown, Star } from "lucide-react"

const offers = [
  {
    id: 1,
    title: "New Member Special",
    subtitle: "Perfect for beginners",
    price: "$49",
    originalPrice: "$99",
    period: "First Month",
    discount: "50% OFF",
    icon: Zap,
    popular: false,
    features: [
      "Unlimited gym access",
      "1 personal training session",
      "Fitness assessment",
      "Nutrition consultation",
      "Group classes included",
      "Locker room access",
    ],
    cta: "Start Your Journey",
  },
  {
    id: 2,
    title: "Premium Membership",
    subtitle: "Most popular choice",
    price: "$89",
    originalPrice: "$129",
    period: "Per Month",
    discount: "31% OFF",
    icon: Crown,
    popular: true,
    features: [
      "24/7 gym access",
      "4 personal training sessions",
      "All group classes",
      "Nutrition coaching",
      "Guest passes (2/month)",
      "Premium locker",
      "Massage therapy discount",
      "Supplement consultation",
    ],
    cta: "Go Premium",
  },
  {
    id: 3,
    title: "Elite Package",
    subtitle: "For serious athletes",
    price: "$149",
    originalPrice: "$199",
    period: "Per Month",
    discount: "25% OFF",
    icon: Star,
    popular: false,
    features: [
      "Everything in Premium",
      "Unlimited personal training",
      "Custom meal plans",
      "Body composition analysis",
      "Recovery sessions",
      "Priority booking",
      "Exclusive member events",
      "Supplement package included",
    ],
    cta: "Train Elite",
  },
]

export function OffersSection() {
  const handleWhatsApp = (offerTitle: string) => {
    window.open(`https://wa.me/1234567890?text=Hi! I'm interested in the ${offerTitle} offer`, "_blank")
  }

  const handleCall = () => {
    window.open("tel:+1234567890", "_self")
  }

  return (
    <section id="offers" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-block">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider bg-primary/10 px-3 py-1 rounded-full">
              Special Offers
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-balance">
            EXCLUSIVE <span className="text-primary">MEMBERSHIP</span> PACKAGES
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Choose the perfect membership plan that fits your fitness goals and budget. Limited time offers available!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {offers.map((offer) => {
            const IconComponent = offer.icon
            return (
              <Card
                key={offer.id}
                className={`relative overflow-hidden bg-card border-border hover:border-primary transition-all duration-300 ${
                  offer.popular ? "ring-2 ring-primary scale-105" : ""
                }`}
              >
                {offer.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-primary text-primary-foreground text-center py-2 text-sm font-medium">
                    Most Popular Choice
                  </div>
                )}

                <div className={`p-8 space-y-6 ${offer.popular ? "pt-12" : ""}`}>
                  {/* Header */}
                  <div className="text-center space-y-4">
                    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                      <IconComponent className="w-8 h-8 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">{offer.title}</h3>
                      <p className="text-muted-foreground">{offer.subtitle}</p>
                    </div>
                  </div>

                  {/* Pricing */}
                  <div className="text-center space-y-2">
                    <div className="flex items-center justify-center space-x-2">
                      <span className="text-4xl font-bold text-primary">{offer.price}</span>
                      <div className="text-left">
                        <p className="text-sm text-muted-foreground line-through">{offer.originalPrice}</p>
                        <p className="text-sm text-muted-foreground">/{offer.period}</p>
                      </div>
                    </div>
                    <Badge className="bg-primary/10 text-primary border-primary/20">{offer.discount}</Badge>
                  </div>

                  {/* Features */}
                  <div className="space-y-3">
                    {offer.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-5 h-5 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                          <Check className="w-3 h-3 text-primary" />
                        </div>
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Buttons */}
                  <div className="space-y-3 pt-4">
                    <Button
                      className={`w-full ${
                        offer.popular
                          ? "bg-primary hover:bg-primary/90 text-primary-foreground"
                          : "bg-primary hover:bg-primary/90 text-primary-foreground"
                      }`}
                      onClick={() => handleWhatsApp(offer.title)}
                    >
                      <MessageCircle className="w-4 h-4 mr-2" />
                      {offer.cta} via WhatsApp
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                      onClick={handleCall}
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      Call to Book
                    </Button>
                  </div>
                </div>
              </Card>
            )
          })}
        </div>

        {/* Special Offer Banner */}
        <div className="mt-16">
          <Card className="bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20 p-8 text-center">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">🔥 Limited Time Offer - Join This Week!</h3>
              <p className="text-lg text-muted-foreground">
                Get an additional 20% off any membership package when you sign up via WhatsApp this week.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground animate-pulse-glow"
                  onClick={() => handleWhatsApp("Limited Time Offer")}
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Claim Special Discount
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
                  onClick={handleCall}
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call for Details
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}

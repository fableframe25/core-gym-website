"use client"

import { useState } from "react"
import { Play, Instagram, Facebook, Youtube, ExternalLink, Badge } from "lucide-react"
import { Button } from "./ui/button"
import { Card } from "./ui/card"

const mediaItems = [
  {
    id: 1,
    type: "image",
    src: "/placeholder.svg?height=400&width=600",
    alt: "Gym Interior",
    category: "Facilities",
  },
  {
    id: 2,
    type: "image",
    src: "/placeholder.svg?height=400&width=600",
    alt: "Group Fitness Class",
    category: "Classes",
  },
  {
    id: 3,
    type: "video",
    src: "/placeholder.svg?height=400&width=600",
    alt: "Workout Video",
    category: "Workouts",
  },
  {
    id: 4,
    type: "image",
    src: "/placeholder.svg?height=400&width=600",
    alt: "Personal Training",
    category: "Training",
  },
  {
    id: 5,
    type: "image",
    src: "/placeholder.svg?height=400&width=600",
    alt: "Community",
    category: "Community",
  },
  {
    id: 6,
    type: "video",
    src: "/placeholder.svg?height=400&width=600",
    alt: "Success Story",
    category: "Success Stories",
  },
  {
    id: 7,
    type: "image",
    src: "/placeholder.svg?height=400&width=600",
    alt: "Cardio Area",
    category: "Facilities",
  },
  {
    id: 8,
    type: "image",
    src: "/placeholder.svg?height=400&width=600",
    alt: "Weight Training",
    category: "Facilities",
  },
]

const socialPosts = [
  {
    id: 1,
    platform: "instagram",
    content: "New week, new goals! 💪 #MondayMotivation #FitGym",
    image: "/placeholder.svg?height=300&width=300",
    likes: 245,
    comments: 18,
  },
  {
    id: 2,
    platform: "facebook",
    content: "Congratulations to Sarah on her amazing transformation! 🎉",
    image: "/placeholder.svg?height=300&width=300",
    likes: 189,
    comments: 32,
  },
  {
    id: 3,
    platform: "instagram",
    content: "New equipment alert! Come try our latest additions 🔥",
    image: "/placeholder.svg?height=300&width=300",
    likes: 156,
    comments: 12,
  },
]

export function MediaSection() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const categories = ["All", "Facilities", "Classes", "Training", "Community", "Success Stories", "Workouts"]

  const filteredMedia =
    selectedCategory === "All" ? mediaItems : mediaItems.filter((item) => item.category === selectedCategory)

  return (
    <section id="media" className="py-20 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-block">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider bg-primary/10 px-3 py-1 rounded-full">
              Gallery & Social
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-balance">
            EXPERIENCE <span className="text-primary">FITGYM</span> IN ACTION
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Take a look inside our world-class facility and see our community in action. Follow us on social media for
            daily motivation!
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              className={
                selectedCategory === category
                  ? "bg-primary hover:bg-primary/90 text-primary-foreground"
                  : "border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              }
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Media Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {filteredMedia.map((item) => (
            <Card
              key={item.id}
              className="overflow-hidden bg-card border-border hover:border-primary transition-all duration-300 group cursor-pointer"
            >
              <div className="relative">
                <img
                  src={item.src || "/placeholder.svg"}
                  alt={item.alt}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {item.type === "video" && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/20 transition-colors">
                    <div className="w-16 h-16 bg-primary/90 rounded-full flex items-center justify-center">
                      <Play className="w-6 h-6 text-primary-foreground ml-1" />
                    </div>
                  </div>
                )}
                <div className="absolute top-4 left-4">
                  <Badge className="bg-background/90 text-foreground">{item.category}</Badge>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Social Media Feed */}
        <div className="space-y-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Follow Us on Social Media</h3>
            <div className="flex justify-center space-x-4">
              <Button
                variant="outline"
                size="sm"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
              >
                <Instagram className="w-4 h-4 mr-2" />
                @fitgym_official
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
              >
                <Facebook className="w-4 h-4 mr-2" />
                FitGym
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
              >
                <Youtube className="w-4 h-4 mr-2" />
                FitGym TV
              </Button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {socialPosts.map((post) => (
              <Card key={post.id} className="p-6 bg-card border-border hover:border-primary transition-colors">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                      {post.platform === "instagram" ? (
                        <Instagram className="w-5 h-5 text-primary" />
                      ) : (
                        <Facebook className="w-5 h-5 text-primary" />
                      )}
                    </div>
                    <div>
                      <p className="font-medium">FitGym</p>
                      <p className="text-sm text-muted-foreground">@fitgym_official</p>
                    </div>
                  </div>

                  <img
                    src={post.image || "/placeholder.svg"}
                    alt="Social post"
                    className="w-full h-48 object-cover rounded-lg"
                  />

                  <p className="text-sm">{post.content}</p>

                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <span>{post.likes} likes</span>
                    <span>{post.comments} comments</span>
                    <Button variant="ghost" size="sm">
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

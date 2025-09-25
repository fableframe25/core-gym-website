"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { MessageCircle, X } from "lucide-react"

export function WhatsAppFloat() {
  const [isVisible, setIsVisible] = useState(false)
  const [showTooltip, setShowTooltip] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
      // Show tooltip after 3 seconds
      setTimeout(() => setShowTooltip(true), 3000)
      // Hide tooltip after 8 seconds
      setTimeout(() => setShowTooltip(false), 8000)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  const handleWhatsApp = () => {
    window.open("https://wa.me/1234567890?text=Hi! I want to join FitGym", "_blank")
    setShowTooltip(false)
  }

  const hideTooltip = () => {
    setShowTooltip(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Tooltip */}
      {showTooltip && (
        <div className="absolute bottom-16 right-0 mb-2 w-64 bg-card border border-border rounded-lg shadow-lg p-4 animate-in slide-in-from-bottom-2">
          <button onClick={hideTooltip} className="absolute top-2 right-2 text-muted-foreground hover:text-foreground">
            <X className="w-4 h-4" />
          </button>
          <div className="space-y-2">
            <p className="font-medium text-sm">💪 Ready to transform your life?</p>
            <p className="text-xs text-muted-foreground">
              Chat with us on WhatsApp for instant support and exclusive offers!
            </p>
          </div>
          <div className="absolute bottom-0 right-6 transform translate-y-1/2 rotate-45 w-2 h-2 bg-card border-r border-b border-border"></div>
        </div>
      )}

      {/* WhatsApp Button */}
      <Button
        size="lg"
        className="w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg animate-pulse-glow"
        onClick={handleWhatsApp}
      >
        <MessageCircle className="w-6 h-6" />
      </Button>
    </div>
  )
}
    
"use client";

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative h-screen bg-black text-white overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video className="w-full h-full object-cover" autoPlay muted loop playsInline>
          <source src="/reel-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="absolute bottom-8 px-10 -translate-y-1/2 z-10 w-full">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-medium leading-tight mb-6 sm:mb-8">
          VFX Artist          
        </h1>
        
        <div className="flex flex-col lg:flex-row gap-8 sm:gap-6 justify-between lg\:items-end">
          <p className="text-base sm:text-lg md:text-xl text-gray-200 max-w-4xl">
            I’m a VFX artist crafting dynamic visuals that merge creativity with technology. <br />
            The art challenges the technology, and the technology inspires the art.
          </p>
          <Button
            size="lg"
            className="bg-white text-black hover:bg-gray-200 text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 h-auto max-w-42"
            onClick={() => window.open("https://youtu.be/l6YXdGkScRY", "_blank")}
          >
            ShowReel
            <ArrowRight className="w-5 h-5 ml-3" />
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  )
}

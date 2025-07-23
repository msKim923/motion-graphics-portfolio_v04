import { Mail, Phone, MapPin, Linkedin, Twitter, Instagram } from "lucide-react"

export function About() {
  return (
    <>
      {/* Contact Section - Black Background */}
      <section className="relative h-screen text-white overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full">
          <video className="w-full h-full object-cover" autoPlay muted loop playsInline>
            <source src="/Terrain.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/50" />
        </div>

        {/* Content Positioned Lower on Screen */}
        <div className="absolute bottom-10 px-10 z-10 w-full">
          <div className="mb-12">
            <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-8xl font-medium leading-tight mb-4">Get in Touch</h2>
            <p className="lg:text-lg text-sm text-gray-300">
              I’ll get back to you within 24 hours of your message.
            </p>
          </div>

          <div className="grid gap-16 md:grid-cols-2 text-white text-base">
            <div>
              <h4 className="text-2xl font-semibold mb-4">CONTACT</h4>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="w-6 h-6 text-gray-400" />
                  <span className="lg:text-lg text-sm">motiongeostar@gmail.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-6 h-6 text-gray-400" />
                  <span className="lg:text-lg text-sm">+82 (10) 4853-9485</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-6 h-6 text-gray-400" />
                  <span className="lg:text-lg text-sm">Seoul, Korea</span>
                </div>
              </div>
            </div>

            {/* Tools Section */}
            <div>
              <h4 className="text-2xl font-semibold mb-4">TOOL</h4>
              <div className="flex flex-wrap gap-3 sm:gap-6">
                <img src="/tools/c4d.png" alt="Cinema 4D" className="h-8 md:h-12 w-auto" />
                <img src="/tools/redshift.png" alt="Redshift" className="h-8 md:h-12 w-auto" />
                <img src="/tools/octane.png" alt="Octane" className="h-8 md:h-12 w-auto" />
                <img src="/tools/houdini.png" alt="Houdini" className="h-8 md:h-12 w-auto" />
                <img src="/tools/karma.png" alt="Karma" className="h-8 md:h-12 w-auto" />
                <img src="/tools/ae.png" alt="After Effects" className="h-8 md:h-12 w-auto" />
              </div>
            </div>
          </div>
          
        </div>
      </section>
    </>
  )
}

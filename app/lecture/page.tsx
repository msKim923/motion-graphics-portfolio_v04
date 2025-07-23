import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Play, Users, Clock } from "lucide-react"

const lectures = [
  {
    title: "Motion Graphics Fundamentals",
    description: "Master the core principles of motion design from concept to execution",
    duration: "4 hours",
    students: "500+",
    price: "$299",
    features: ["12 comprehensive modules", "Project files included", "Lifetime access", "Certificate of completion"],
  },
  {
    title: "Advanced After Effects Techniques",
    description: "Professional workflows and advanced animation techniques",
    duration: "6 hours",
    students: "300+",
    price: "$399",
    features: ["Advanced expressions", "Custom plugin development", "Industry workflows", "1-on-1 mentorship session"],
  },
  {
    title: "AI in Motion Graphics",
    description: "Integrating AI tools into your motion design workflow",
    duration: "3 hours",
    students: "200+",
    price: "$199",
    features: ["AI tool integration", "Workflow optimization", "Future-proofing skills", "Community access"],
  },
]

export default function LecturePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <main className="pt-20">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-light mb-4 text-white">Lectures & Courses</h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Learn motion graphics from industry professionals. Master the tools and techniques used in top studios
              worldwide.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {lectures.map((lecture, index) => (
              <Card key={index} className="border-gray-800 bg-gray-900">
                <CardHeader>
                  <CardTitle className="text-xl font-medium text-white">{lecture.title}</CardTitle>
                  <CardDescription className="text-gray-400">{lecture.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-4 mb-4 text-sm text-gray-400">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {lecture.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {lecture.students}
                    </div>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {lecture.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-2 text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-light text-white">{lecture.price}</span>
                    <Button className="bg-white text-black hover:bg-gray-200">
                      <Play className="w-4 h-4 mr-2" />
                      Enroll Now
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <h2 className="text-2xl font-light mb-4 text-white">Custom Workshops</h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Need a custom workshop for your team or organization? I offer tailored training sessions for studios and
              agencies.
            </p>
            <Button variant="outline" size="lg" className="border-gray-600 text-white hover:bg-gray-800">
              Contact for Custom Training
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}

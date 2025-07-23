import { Navigation } from "@/components/navigation"
import { ProjectGrid } from "@/components/project-grid"

const aiProjects = [
  {
    id: 1,
    title: "AI-Generated Visuals",
    thumbnail: "/placeholder.svg?height=300&width=400",
    videoUrl: "https://youtube.com/watch?v=ai1",
    description: "Motion graphics enhanced with AI tools",
  },
  {
    id: 2,
    title: "Machine Learning Art",
    thumbnail: "/placeholder.svg?height=300&width=400",
    videoUrl: "https://youtube.com/watch?v=ai2",
    description: "Collaborative work between human and AI",
  },
  {
    id: 3,
    title: "Neural Network Visualization",
    thumbnail: "/placeholder.svg?height=300&width=400",
    videoUrl: "https://youtube.com/watch?v=ai3",
    description: "Visualizing AI processes through motion",
  },
  {
    id: 4,
    title: "Generative Animation",
    thumbnail: "/placeholder.svg?height=300&width=400",
    videoUrl: "https://youtube.com/watch?v=ai4",
    description: "AI-assisted procedural animation",
  },
]

export default function AIPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <main className="pt-20">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <h1 className="text-4xl md:text-5xl font-light mb-4 text-white">AI</h1>
          <p className="text-lg text-gray-300 mb-12 max-w-2xl">
            Exploring the intersection of artificial intelligence and motion design.
          </p>
          <ProjectGrid projects={aiProjects} />
        </div>
      </main>
    </div>
  )
}

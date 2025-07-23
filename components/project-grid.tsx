import { ExternalLink } from "lucide-react"

interface Project {
  id: number
  title: string
  thumbnail: string
  videoUrl: string
  description: string
}

interface ProjectGridProps {
  projects: Project[]
}

export function ProjectGrid({ projects }: ProjectGridProps) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project) => (
        <a key={project.id} href={project.videoUrl} target="_blank" rel="noopener noreferrer" className="group block">
          <div className="relative overflow-hidden rounded-lg bg-gray-800 aspect-[4/3] mb-4">
            <img
              src={project.thumbnail || "/placeholder.svg"}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
              <ExternalLink className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>
          <h3 className="text-lg font-medium mb-2 text-white group-hover:text-gray-300 transition-colors">
            {project.title}
          </h3>
          <p className="text-gray-400 text-sm">{project.description}</p>
        </a>
      ))}
    </div>
  )
}

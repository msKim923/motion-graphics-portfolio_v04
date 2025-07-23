import { Navigation } from "@/components/navigation"
import { ProjectGrid } from "@/components/project-grid"

const artworkProjects = [
  {
    id: 1,
    title: "HoudiniKarmaTest",
    thumbnail: "/thumbnails/meteor.jpg",
    videoUrl: "https://youtu.be/D1xgilvbAB8",
    description: "Houdini Pyro & Karma",
  },
  {
    id: 2,
    title: "Cham's call render challenge",
    thumbnail: "/thumbnails/Cham's call render challenge.jpg",
    videoUrl: "https://youtu.be/aZBePEFoxX4",
    description: "Cham's call render challenge",
  },
  {
    id: 3,
    title: "VolumeDeform",
    thumbnail: "/thumbnails/VolumeDeform.jpg",
    videoUrl: "https://youtu.be/aH0itb_TiMY",
    description: "Houdini Pyro Fx & Particle Sim",
  },
  {
    id: 4,
    title: "VSL",
    thumbnail: "/thumbnails/Vsl.jpg",
    videoUrl: "https://www.youtube.com/watch?v=cmgeoZEbLHo",
    description: "MotionGraphic",
  },
  {
    id: 5,
    title: "HoudiniOceanTest",
    thumbnail: "/thumbnails/HoudiniOceanTest.jpg",
    videoUrl: "https://youtu.be/LMD2DRNCvVs",
    description: "Redshift_Render",
  },
  {
    id: 6,
    title: "XpOceanTest",
    thumbnail: "/thumbnails/XpWaterfall.jpg",
    videoUrl: "https://youtu.be/X86rWwQ1NO4",
    description: "Xparticle & Octane",
  },
  {
    id: 7,
    title: "HoudiniCondensation",
    thumbnail: "/thumbnails/houdini_condensation.jpg",
    videoUrl: "https://youtu.be/mlMfH__Zd8s",
    description: "Houdini Particle Sim",
  },
  {
    id: 8,
    title: "XpFlipSim",
    thumbnail: "/thumbnails/xparticle_flip.jpg",
    videoUrl: "https://youtu.be/99ua7VPc1no",
    description: "XparticleFlipSim",
  },
]

export default function ArtworkPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <main className="pt-20">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <h1 className="text-4xl md:text-5xl font-light mb-4 text-white">Artwork</h1>
          <p className="text-lg text-gray-300 mb-12 max-w-2xl">
            Indivisual Art Work & RnD.
          </p>
          <ProjectGrid projects={artworkProjects} />
        </div>
      </main>
    </div>
  )
}

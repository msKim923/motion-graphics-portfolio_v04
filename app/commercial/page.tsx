import { Navigation } from "@/components/navigation"
import { ProjectGrid } from "@/components/project-grid"

const commercialProjects = [
  {
    id: 1,
    title: "S-Oil",
    thumbnail: "/thumbnails/S-Oil.jpg",
    videoUrl: "https://www.youtube.com/watch?v=c2_7kBfbcLQ&list=RDc2_7kBfbcLQ&start_radio=1",
    description: "LookDev, Prop Ainmation",
  },
  {
    id: 2,
    title: "LG-Signature",
    thumbnail: "/thumbnails/LG-Signature.jpg",
    videoUrl: "https://www.youtube.com/watch?v=oiEdPl2677E",
    description: "LookDev, Fx",
  },
  {
    id: 3,
    title: "LG-Puricare",
    thumbnail: "/thumbnails/LG-Puricare.jpg",
    videoUrl: "https://www.youtube.com/watch?v=wgCGBG-Re1U",
    description: "Fx",
  },
  {
    id: 4,
    title: "Posco",
    thumbnail: "/thumbnails/Posco.jpg",
    videoUrl: "https://www.youtube.com/watch?v=aYQRC175HoI",
    description: "Fx",
  },
  {
    id: 5,
    title: "국립중앙박물관",
    thumbnail: "/thumbnails/국립중앙박물관.jpg",
    videoUrl: "https://www.youtube.com/watch?v=LqNbvHozS1E",
    description: "All Parts",
  },
  {
    id: 6,
    title: "KT-OOH",
    thumbnail: "/thumbnails/KT-OOH.jpg",
    videoUrl: "https://youtu.be/lYk-szrsYdA",
    description: "Ainmation & Fx",
  },
  {
    id: 7,
    title: "LG-Roboking",
    thumbnail: "/thumbnails/LG-Roboking.jpg",
    videoUrl: "https://www.youtube.com/watch?v=XxouZdCxcH8",
    description: "Fx",
  },
  {
    id: 8,
    title: "KT",
    thumbnail: "/thumbnails/KT.jpg",
    videoUrl: "https://www.youtube.com/watch?v=TzPD1qLAg4E",
    description: "Ainmation & Fx & LookDev",
  },
  {
    id: 9,
    title: "Ceragem",
    thumbnail: "/thumbnails/Ceragem.jpg",
    videoUrl: "https://www.youtube.com/watch?v=cKzxWtlabnM",
    description: "Fx",
  },
  {
    id: 10,
    title: "Gelfos",
    thumbnail: "/thumbnails/Gelfos.jpg",
    videoUrl: "https://www.youtube.com/watch?v=wKB-EjVlK9s",
    description: "Fx",
  },
  {
    id: 11,
    title: "Kiwoom",
    thumbnail: "/thumbnails/Kiwoom.jpg",
    videoUrl: "https://www.youtube.com/watch?v=Ib6KePWM648",
    description: "Animation & LookDev",
  },
  {
    id: 12,
    title: "Sunggle",
    thumbnail: "/thumbnails/sunggle.jpg",
    videoUrl: "https://youtu.be/PH1JPyh86-g",
    description: "Cloth & Petal Sim",
  },
  {
    id: 13,
    title: "Imagine Your Korea",
    thumbnail: "/thumbnails/ImaginYourKorea_Behine.jpg",
    videoUrl: "https://youtu.be/Dkzzr3xnTmM",
    description: "Fx_BehindCut",
  },
]

export default function CommercialPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <main className="pt-20">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <h1 className="text-4xl md:text-5xl font-light mb-4 text-white">Commercial</h1>
          <p className="text-lg text-gray-300 mb-12 max-w-2xl">
            Commercial Video.
          </p>
          <ProjectGrid projects={commercialProjects} />
        </div>
      </main>
    </div>
  )
}

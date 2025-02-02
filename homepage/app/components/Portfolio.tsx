import Image from "next/image"

export default function Portfolio() {
  const projects = [
    {
      image: "/placeholder.svg?height=300&width=400",
      title: "RetroCommerce",
      description: "An e-commerce platform with a 90s aesthetic",
    },
    {
      image: "/placeholder.svg?height=300&width=400",
      title: "VintageBoard",
      description: "A bulletin board system inspired dashboard",
    },
    {
      image: "/placeholder.svg?height=300&width=400",
      title: "PixelFit",
      description: "8-bit style fitness tracking application",
    },
  ]

  return (
    <section id="portfolio" className="py-20">
      <h2 className="text-3xl font-bold text-center mb-12 text-green-400">&lt;Our_Portfolio&gt;</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="border border-green-400 overflow-hidden">
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              width={400}
              height={300}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-green-300">{project.title}</h3>
              <p className="text-green-200">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
      <h2 className="text-3xl font-bold text-center mt-12 text-green-400">&lt;/Our_Portfolio&gt;</h2>
    </section>
  )
}


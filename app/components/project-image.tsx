interface ProjectImageProps {
  title: string
  type: "ml" | "web" | "cli" | "game" | "ai" | "system"
}

export default function ProjectImage({ title, type }: ProjectImageProps) {
  const getGradientAndIcon = () => {
    switch (type) {
      case "ml":
        return {
          gradient: "from-purple-600 via-blue-600 to-indigo-700",
          icon: "🤖",
          pattern: "ML",
        }
      case "web":
        return {
          gradient: "from-orange-500 via-red-500 to-pink-600",
          icon: "🌐",
          pattern: "WEB",
        }
      case "cli":
        return {
          gradient: "from-green-500 via-teal-500 to-cyan-600",
          icon: "⚡",
          pattern: "CLI",
        }
      case "game":
        return {
          gradient: "from-indigo-600 via-purple-600 to-pink-700",
          icon: "🚀",
          pattern: "GAME",
        }
      case "ai":
        return {
          gradient: "from-cyan-500 via-blue-500 to-indigo-600",
          icon: "🧠",
          pattern: "AI",
        }
      case "system":
        return {
          gradient: "from-gray-700 via-gray-800 to-black",
          icon: "⚙️",
          pattern: "SYS",
        }
      default:
        return {
          gradient: "from-blue-500 to-purple-600",
          icon: "💻",
          pattern: "CODE",
        }
    }
  }

  const { gradient, icon, pattern } = getGradientAndIcon()

  return (
    <div className={`relative aspect-video bg-gradient-to-br ${gradient} overflow-hidden`}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-4 left-4 text-6xl font-bold text-white/20 transform -rotate-12">{pattern}</div>
        <div className="absolute bottom-4 right-4 text-4xl font-bold text-white/20 transform rotate-12">{pattern}</div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="grid grid-cols-8 grid-rows-6 h-full w-full">
          {Array.from({ length: 48 }).map((_, i) => (
            <div key={i} className="border border-white/10"></div>
          ))}
        </div>
      </div>

      {/* Main Icon */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-8xl mb-4 transform hover:scale-110 transition-transform duration-300">{icon}</div>
      </div>

      {/* Title Overlay */}
      <div className="absolute bottom-0 left-0 right-0 bg-black/30 backdrop-blur-sm p-4">
        <h3 className="text-white font-semibold text-lg truncate">{title}</h3>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-2 right-2 w-3 h-3 bg-white/30 rounded-full"></div>
      <div className="absolute top-6 right-6 w-2 h-2 bg-white/20 rounded-full"></div>
      <div className="absolute bottom-6 left-2 w-4 h-4 bg-white/25 rounded-full"></div>
    </div>
  )
}

import { Card } from "@/components/ui/card"

const technologies = [
  {
    category: "Frontend",
    skills: ["JavaScript", "HTML", "CSS", "React.js", "Next.js", "TypeScript"],
  },
  {
    category: "Backend",
    skills: ["Python", "Java", "C", "Node.js", "API Routes", "Next.js"],
  },
  {
    category: "Machine Learning & Data Science",
    skills: [
      "Python",
      "Scikit-learn",
      "Decision Trees",
      "Data Visualization",
      "Statistical Analysis",
      "Model Evaluation",
    ],
  },
  {
    category: "Estruturas de Dados & Algoritmos",
    skills: [
      "Lista Duplamente Encadeada",
      "Algoritmos de Busca",
      "Gerenciamento de Memória",
      "Complexidade Computacional",
    ],
  },
  {
    category: "IA & APIs",
    skills: ["OpenAI API", "AI SDK", "Integração de IA", "Streaming"],
  },
  {
    category: "Banco de Dados",
    skills: ["MySQL", "PostgreSQL"],
  },
  {
    category: "Ferramentas & UI",
    skills: ["Tailwind CSS", "shadcn/ui", "Git", "GitHub", "VS Code", "GCC"],
  },
]

export default function TechStack() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {technologies.map((tech) => (
        <Card key={tech.category} className="p-6">
          <h3 className="text-lg font-semibold mb-4">{tech.category}</h3>
          <div className="flex flex-wrap gap-2">
            {tech.skills.map((skill) => (
              <span
                key={skill}
                className="inline-flex items-center rounded-md bg-primary/10 px-2 py-1 text-sm font-medium text-primary ring-1 ring-inset ring-primary/20"
              >
                {skill}
              </span>
            ))}
          </div>
        </Card>
      ))}
    </div>
  )
}

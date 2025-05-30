import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import ContactForm from "./components/contact-form"
import ProjectCard from "./components/project-card"
import TechStack from "./components/tech-stack"

export default function Page() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 flex flex-col items-center">
        <div className="container flex flex-col items-center h-14 justify-center">
          <div className="mr-4 hidden md:flex flex-col items-center">
            <Link className="mr-6 flex items-center space-x-2" href="/">
              <span className="hidden font-bold sm:inline-block">João Pedro</span>
            </Link>
            <nav className="flex items-center space-x-6 text-sm font-medium justify-center">
              <Link href="#about" className="transition-colors hover:text-foreground/80">
                Sobre
              </Link>
              <Link href="#projects" className="transition-colors hover:text-foreground/80">
                Projetos
              </Link>
              <Link href="#skills" className="transition-colors hover:text-foreground/80">
                Habilidades
              </Link>
              <Link href="#education" className="transition-colors hover:text-foreground/80">
                Educação
              </Link>
              <Link href="#contact" className="transition-colors hover:text-foreground/80">
                Contato
              </Link>
            </nav>
          </div>
        </div>
      </header>

      <main className="flex flex-col items-center w-full px-4 md:px-6">
        <section
          id="about"
          className="flex flex-col items-center justify-center min-h-screen py-12 md:py-24 lg:py-32 w-full"
        >
          <div className="container flex flex-col items-center px-4 md:px-6">
            <div className="space-y-4 text-center">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                João Pedro De Sousa Coelho
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                Desenvolvedor Front-end & Back-end | Estudante de Engenharia de Software
              </p>
            </div>
            <div className="max-w-[700px] text-center">
              <p className="text-gray-500 dark:text-gray-400 mb-4">
                Atualmente curso Engenharia de Software e estou em busca de uma oportunidade profissional como
                Desenvolvedor Front-end ou Back-end. Tenho interesse em aplicar e expandir meus conhecimentos práticos
                em tecnologias como JavaScript, React, HTML e CSS. No back-end, possuo familiaridade com Python e
                Java, além de experiência com bancos de dados relacionais, como MySQL e PostgreSQL.
              </p>
              <p className="text-gray-500 dark:text-gray-400">
                Atuei anteriormente como Auxiliar de Programação, desenvolvendo habilidades como proatividade,
                aprendizado ágil e foco em resultados. Destaco-me pela boa comunicação, facilidade no trabalho em
                equipe e raciocínio lógico voltado à resolução de problemas.
              </p>
            </div>
            <div className="space-x-4 mt-6 flex justify-center">
              <Link href="https://github.com/sousadrip" target="_blank">
                <Button variant="outline" size="icon">
                  <Github className="h-4 w-4" />
                  <span className="sr-only">GitHub</span>
                </Button>
              </Link>
              <Link href="https://www.linkedin.com/in/joaopedro03s" target="_blank">
                <Button variant="outline" size="icon">
                  <Linkedin className="h-4 w-4" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </Link>
              <Link href="mailto:desousacoelhojoaopedro@gmail.com">
                <Button variant="outline" size="icon">
                  <Mail className="h-4 w-4" />
                  <span className="sr-only">Email</span>
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section id="projects" className="py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900 w-full flex flex-col items-center">
          <div className="container flex flex-col items-center px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">Projetos</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 justify-center">
              <ProjectCard
                title="Iris ML Dashboard"
                description="Dashboard interativo para classificação de flores Iris usando Machine Learning. Implementa árvore de decisão com 97.5% de acurácia, visualizações de dados e interface responsiva."
                imageType="ml"
                link="https://github.com/sousadrip"
                tags={["Python", "Scikit-learn", "Next.js", "TypeScript", "Machine Learning", "Data Visualization"]}
              />
              <ProjectCard
                title="Aplicação de Lista de Tarefas"
                description="Aplicação CLI interativa para gerenciamento de tarefas pessoais com persistência de dados em JSON, desenvolvida em Python."
                imageType="cli"
                link="https://github.com/sousadrip"
                tags={["Python", "JSON", "CLI", "DateTime"]}
              />
              <ProjectCard
                title="Web Scraper de Notícias"
                description="Script automatizado para extrair manchetes de portais de notícias e exportar dados estruturados em CSV usando BeautifulSoup4 e Pandas."
                imageType="web"
                link="https://github.com/sousadrip"
                tags={["Python", "BeautifulSoup4", "Pandas", "Web Scraping"]}
              />
              <ProjectCard
                title="Jogo Fazenda Cósmica"
                description="Simulação de gerenciamento de recursos com robôs concorrentes usando threads e semáforos para controle de acesso a recursos compartilhados."
                imageType="game"
                link="https://github.com/sousadrip"
                tags={["Python", "Threading", "Concorrência", "Semáforos"]}
              />
              <ProjectCard
                title="Assistente de Conteúdo com IA"
                description="Plataforma web completa que integra três ferramentas de IA: chatbot inteligente, gerador de conteúdo personalizado e assistente de código com suporte a múltiplas linguagens."
                imageType="ai"
                link="https://github.com/sousadrip"
                tags={["Next.js", "React", "TypeScript", "OpenAI API", "AI SDK", "Tailwind CSS"]}
              />
              <ProjectCard
                title="Gerenciador de Tarefas em C"
                description="Sistema completo de gerenciamento de tarefas implementado com lista duplamente encadeada em C, incluindo operações avançadas como movimentação por prioridade e inversão de intervalos."
                imageType="system"
                link="https://github.com/sousadrip"
                tags={[
                  "C",
                  "Estruturas de Dados",
                  "Lista Duplamente Encadeada",
                  "Algoritmos",
                  "Gerenciamento de Memória",
                ]}
              />
            </div>
          </div>
        </section>

        <section id="skills" className="py-12 md:py-24 lg:py-32 w-full flex flex-col items-center">
          <div className="container flex flex-col items-center px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
              Habilidades Técnicas
            </h2>
            <TechStack />
          </div>
        </section>

        <section id="education" className="py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900 w-full flex flex-col items-center">
          <div className="container flex flex-col items-center px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">Educação</h2>
            <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-1 max-w-3xl mx-auto">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center">
                <h3 className="text-xl font-bold mb-2">Graduação em Engenharia de Software</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-2">Universidade Católica de Brasília</p>
                <p className="text-gray-500 dark:text-gray-400">Conclusão prevista: 2028 | Cursando</p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center">
                <h3 className="text-xl font-bold mb-2">Ensino Médio</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-2">Colégio Ideal de Taguatinga</p>
                <p className="text-gray-500 dark:text-gray-400">Conclusão: 2023</p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center">
                <h3 className="text-xl font-bold mb-2">Ensino Fundamental</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-2">Colégio Marista Champagnat</p>
                <p className="text-gray-500 dark:text-gray-400">Conclusão: 2019</p>
              </div>
            </div>
          </div>
        </section>

        <section id="experience" className="py-12 md:py-24 lg:py-32 w-full flex flex-col items-center">
          <div className="container flex flex-col items-center px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
              Experiência Profissional
            </h2>
            <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-1 max-w-3xl mx-auto">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center">
                <h3 className="text-xl font-bold mb-2">Desenvolvedor Frontend</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-2">Freelancer, Brasília</p>
                <p className="text-gray-500 dark:text-gray-400 mb-4">Fevereiro 2024 – Presente</p>
                <ul className="list-disc pl-5 text-gray-500 dark:text-gray-400 text-left inline-block">
                  <li>Desenvolvimento de interfaces web responsivas</li>
                  <li>Implementação de funcionalidades usando JavaScript e React</li>
                  <li>Colaboração com clientes para atender requisitos específicos</li>
                </ul>
              </div>
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center">
                <h3 className="text-xl font-bold mb-2">Auxiliar de Programação</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-2">CONCRECON CONCRETO E CONSTRUÇÕES</p>
                <p className="text-gray-500 dark:text-gray-400 mb-4">Novembro 2022 – Outubro 2024</p>
                <ul className="list-disc pl-5 text-gray-500 dark:text-gray-400 text-left inline-block">
                  <li>Suporte ao desenvolvimento de sistemas internos</li>
                  <li>Manutenção e atualização de bases de dados</li>
                  <li>Documentação de processos e sistemas</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="languages" className="py-12 md:py-24 lg:py-32 bg-gray-50 dark:bg-gray-900 w-full flex flex-col items-center">
          <div className="container flex flex-col items-center px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">Idiomas</h2>
            <div className="max-w-md mx-auto">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md text-center">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-bold">Inglês</h3>
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                    Avançado
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                  <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: "85%" }}></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-12 md:py-24 lg:py-32 w-full flex flex-col items-center">
          <div className="container flex flex-col items-center px-4 md:px-6">
            <div className="mx-auto max-w-2xl flex flex-col items-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
                Entre em Contato
              </h2>
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/2 flex flex-col items-center">
                  <h3 className="text-xl font-bold mb-4">Informações de Contato</h3>
                  <div className="space-y-4">
                    <div className="flex items-center justify-center">
                      <Mail className="h-5 w-5 mr-2" />
                      <a href="mailto:desousacoelhojoaopedro@gmail.com" className="hover:underline">
                        desousacoelhojoaopedro@gmail.com
                      </a>
                    </div>
                    <div className="flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-2"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                      </svg>
                      <span>+55 61 98195-9111</span>
                    </div>
                    <div className="flex items-center justify-center">
                      <Github className="h-5 w-5 mr-2" />
                      <a
                        href="https://github.com/sousadrip"
                        target="_blank"
                        className="hover:underline"
                        rel="noreferrer"
                      >
                        github.com/sousadrip
                      </a>
                    </div>
                    <div className="flex items-center justify-center">
                      <Linkedin className="h-5 w-5 mr-2" />
                      <a
                        href="https://www.linkedin.com/in/joaopedro03s"
                        target="_blank"
                        className="hover:underline"
                        rel="noreferrer"
                      >
                        linkedin.com/in/joaopedro03s
                      </a>
                    </div>
                  </div>
                </div>
                <div className="md:w-1/2 flex flex-col items-center">
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t w-full flex flex-col items-center">
        <div className="container flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 justify-center">
          <p className="text-xs text-gray-500 dark:text-gray-400 text-center w-full">
            © 2024 João Pedro De Sousa Coelho. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  )
}
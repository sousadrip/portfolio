import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import ContactForm from "./components/contact-form"
import ProjectCard from "./components/project-card"
import TechStack from "./components/tech-stack"

export default function Page() {
  return (
    <div className="bg-[#181818] min-h-screen w-full">
      {/* HEADER */}
      <header className="w-full border-b border-white bg-[#181818]">
        <nav className="container mx-auto flex items-center h-14 px-4 md:px-0">
          <Link href="/" className="font-bold text-white text-lg mr-8">
            João Pedro
          </Link>
          <ul className="flex space-x-6 text-white font-medium text-base">
            <li><Link href="#about" className="hover:underline">Sobre</Link></li>
            <li><Link href="#projects" className="hover:underline">Projetos</Link></li>
            <li><Link href="#skills" className="hover:underline">Habilidades</Link></li>
            <li><Link href="#education" className="hover:underline">Educação</Link></li>
            <li><Link href="#contact" className="hover:underline">Contato</Link></li>
          </ul>
        </nav>
      </header>

      <main>
        {/* SOBRE */}
        <section
          id="about"
          className="flex flex-col items-center justify-center pt-24 pb-36 px-4"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white text-center mb-3 leading-tight">
            João Pedro De Sousa Coelho
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-200 text-center mb-8 font-medium leading-tight">
            Desenvolvedor Front-end &amp; Back-end | Estudante de Engenharia de Software
          </h2>
          <div className="max-w-[900px] text-center mx-auto">
            <p className="text-gray-200 text-base md:text-lg mb-2">
              Atualmente curso Engenharia de Software e estou em busca de uma oportunidade profissional como Desenvolvedor Front-end ou Back-end. Tenho interesse em aplicar e expandir meus conhecimentos práticos em tecnologias como JavaScript, React, HTML e CSS. No back-end, possuo familiaridade com Python e Java, além de experiência com bancos de dados relacionais, como MySQL e PostgreSQL.
            </p>
            <p className="text-gray-200 text-base md:text-lg mb-8">
              Atuei anteriormente como Auxiliar de Programação, desenvolvendo habilidades como proatividade, aprendizado ágil e foco em resultados. Destaco-me pela boa comunicação, facilidade no trabalho em equipe e raciocínio lógico voltado à resolução de problemas.
            </p>
          </div>
          <div className="flex space-x-4 mt-1">
            <Link href="https://github.com/sousadrip" target="_blank">
              <Button variant="outline" size="icon" className="border-white text-white hover:bg-[#222]">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link href="https://www.linkedin.com/in/joaopedro03s" target="_blank">
              <Button variant="outline" size="icon" className="border-white text-white hover:bg-[#222]">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
            <Link href="mailto:desousacoelhojoaopedro@gmail.com">
              <Button variant="outline" size="icon" className="border-white text-white hover:bg-[#222]">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Button>
            </Link>
          </div>
        </section>

        {/* PROJETOS */}
        <section id="projects" className="py-24 px-4 bg-[#181f27] flex flex-col items-center w-full">
          <div className="max-w-[1350px] w-full mx-auto">
            <h2 className="text-5xl md:text-6xl font-extrabold text-white text-center mb-12">
              Projetos
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 justify-center">
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

        {/* HABILIDADES */}
        <section id="skills" className="py-24 px-4 bg-[#181818] flex flex-col items-center w-full">
          <div className="max-w-[900px] w-full mx-auto">
            <h2 className="text-5xl md:text-6xl font-extrabold text-white text-center mb-12">
              Habilidades Técnicas
            </h2>
            <TechStack />
          </div>
        </section>

        {/* EDUCAÇÃO */}
        <section id="education" className="py-24 px-4 bg-[#181f27] flex flex-col items-center w-full">
          <div className="max-w-[900px] w-full mx-auto">
            <h2 className="text-5xl md:text-6xl font-extrabold text-white text-center mb-12">
              Educação
            </h2>
            <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-1 max-w-3xl mx-auto">
              <div className="bg-[#181818] p-6 rounded-lg shadow-md text-center">
                <h3 className="text-xl font-bold mb-2 text-white">Graduação em Engenharia de Software</h3>
                <p className="text-gray-300 mb-2">Universidade Católica de Brasília</p>
                <p className="text-gray-400">Conclusão prevista: 2028 | Cursando</p>
              </div>
              <div className="bg-[#181818] p-6 rounded-lg shadow-md text-center">
                <h3 className="text-xl font-bold mb-2 text-white">Ensino Médio</h3>
                <p className="text-gray-300 mb-2">Colégio Ideal de Taguatinga</p>
                <p className="text-gray-400">Conclusão: 2023</p>
              </div>
              <div className="bg-[#181818] p-6 rounded-lg shadow-md text-center">
                <h3 className="text-xl font-bold mb-2 text-white">Ensino Fundamental</h3>
                <p className="text-gray-300 mb-2">Colégio Marista Champagnat</p>
                <p className="text-gray-400">Conclusão: 2019</p>
              </div>
            </div>
          </div>
        </section>

        {/* EXPERIÊNCIA */}
        <section id="experience" className="py-24 px-4 bg-[#181818] flex flex-col items-center w-full">
          <div className="max-w-[900px] w-full mx-auto">
            <h2 className="text-5xl md:text-6xl font-extrabold text-white text-center mb-12">
              Experiência Profissional
            </h2>
            <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-1 max-w-3xl mx-auto">
              <div className="bg-[#181f27] p-6 rounded-lg shadow-md text-center">
                <h3 className="text-xl font-bold mb-2 text-white">Desenvolvedor Frontend</h3>
                <p className="text-gray-300 mb-2">Freelancer, Brasília</p>
                <p className="text-gray-400 mb-4">Fevereiro 2024 – Presente</p>
                <ul className="list-disc pl-5 text-gray-300 text-left inline-block">
                  <li>Desenvolvimento de interfaces web responsivas</li>
                  <li>Implementação de funcionalidades usando JavaScript e React</li>
                  <li>Colaboração com clientes para atender requisitos específicos</li>
                </ul>
              </div>
              <div className="bg-[#181f27] p-6 rounded-lg shadow-md text-center">
                <h3 className="text-xl font-bold mb-2 text-white">Auxiliar de Programação</h3>
                <p className="text-gray-300 mb-2">CONCRECON CONCRETO E CONSTRUÇÕES</p>
                <p className="text-gray-400 mb-4">Novembro 2022 – Outubro 2024</p>
                <ul className="list-disc pl-5 text-gray-300 text-left inline-block">
                  <li>Suporte ao desenvolvimento de sistemas internos</li>
                  <li>Manutenção e atualização de bases de dados</li>
                  <li>Documentação de processos e sistemas</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* IDIOMAS */}
        <section id="languages" className="py-24 px-4 bg-[#181f27] flex flex-col items-center w-full">
          <div className="max-w-md mx-auto w-full">
            <h2 className="text-5xl md:text-6xl font-extrabold text-white text-center mb-12">Idiomas</h2>
            <div className="bg-[#181818] p-6 rounded-lg shadow-md text-center">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-xl font-bold text-white">Inglês</h3>
                <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                  Avançado
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: "85%" }}></div>
              </div>
            </div>
          </div>
        </section>

        {/* CONTATO */}
        <section id="contact" className="py-24 px-4 bg-[#181818] flex flex-col items-center w-full">
          <div className="max-w-2xl mx-auto w-full flex flex-col items-center">
            <h2 className="text-5xl md:text-6xl font-extrabold text-white text-center mb-12">
              Entre em Contato
            </h2>
            <div className="flex flex-col md:flex-row gap-8 items-center w-full">
              <div className="md:w-1/2 flex flex-col items-center">
                <h3 className="text-xl font-bold mb-4 text-white">Informações de Contato</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-center text-gray-200">
                    <Mail className="h-5 w-5 mr-2" />
                    <a href="mailto:desousacoelhojoaopedro@gmail.com" className="hover:underline">
                      desousacoelhojoaopedro@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center justify-center text-gray-200">
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
                  <div className="flex items-center justify-center text-gray-200">
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
                  <div className="flex items-center justify-center text-gray-200">
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
              <div className="md:w-1/2 flex flex-col items-center w-full">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
import { Braces, Code2, GitBranch, TerminalSquare } from 'lucide-react'

const developerItems = [
  {
    icon: Code2,
    title: 'AI-Native SDKs',
    text: 'Build programmable workflows and intelligent execution systems on top of Fancyber.',
  },
  {
    icon: GitBranch,
    title: 'Repository Integrations',
    text: 'Connect engineering systems, repositories, CI/CD pipelines, and operational tooling.',
  },
  {
    icon: TerminalSquare,
    title: 'Command Infrastructure',
    text: 'Enable AI-assisted execution directly inside developer workflows and tooling.',
  },
  {
    icon: Braces,
    title: 'Composable APIs',
    text: 'Integrate orchestration, agent execution, and operational intelligence through APIs.',
  },
]

function DevelopersPage() {
  return (
    <>
      <section className="page-hero">
        <span className="section-label">Developers</span>
        <h1>Programmable infrastructure for intelligent engineering systems.</h1>
        <p>
          Build AI-native software workflows with orchestration primitives, execution systems, and enterprise integrations.
        </p>
      </section>

      <section className="developer-banner">
        <div>
          <span className="section-label">Developer Infrastructure</span>
          <h2>Build intelligent systems on top of programmable execution primitives.</h2>
        </div>

        <p>
          Fancyber exposes orchestration systems, workflow automation, execution runtimes, and integration layers for enterprise development teams.
        </p>
      </section>

      <section className="feature-grid">
        {developerItems.map((item) => {
          const Icon = item.icon

          return (
            <article className="feature-card" key={item.title}>
              <Icon className="feature-icon" />
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          )
        })}
      </section>

      <section className="content-section two-column-layout">
        <div>
          <span className="section-label">Developer Experience</span>
          <h2>Built to integrate into modern engineering workflows.</h2>
        </div>

        <div className="text-column">
          <p>
            Fancyber supports AI-assisted execution directly inside repositories, infrastructure pipelines, operational tooling, and developer systems.
          </p>

          <p>
            Engineering teams can compose automation workflows, orchestration layers, and execution primitives using programmable APIs.
          </p>
        </div>
      </section>

    </>
  )
}

export default DevelopersPage

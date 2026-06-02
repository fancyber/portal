import { BrainCircuit, Cpu, Orbit, Sparkles } from 'lucide-react'

const research = [
  {
    icon: BrainCircuit,
    title: 'AI-Native Engineering Systems',
    text: 'Researching how autonomous systems transform software engineering execution.',
  },
  {
    icon: Cpu,
    title: 'Multi-Agent Coordination',
    text: 'Developing orchestration layers for intelligent distributed execution.',
  },
  {
    icon: Orbit,
    title: 'Operational Intelligence',
    text: 'Building systems that continuously optimize software delivery workflows.',
  },
]

function ResearchPage() {
  return (
    <>
      <section className="page-hero">
        <span className="section-label">Research</span>
        <h1>Exploring the future of intelligent software engineering.</h1>
        <p>
          Fancyber Research investigates how AI systems reshape engineering productivity, infrastructure, and operational execution.
        </p>
      </section>

      <section className="content-section">
        <div className="section-heading-block">
          <span className="section-label">Research Areas</span>
          <h2>Investigating the next generation of intelligent operational systems.</h2>
        </div>
      </section>

      <section className="feature-grid">
        {research.map((item) => {
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

      <section className="quote-panel">
        <Sparkles size={24} />
        <h2>
          The future belongs to organizations where intelligence becomes infrastructure.
        </h2>
      </section>

      <section className="editorial-grid">
        <article className="editorial-card">
          <h3>Autonomous Coordination</h3>
          <p>
            Exploring how intelligent systems coordinate engineering tasks across distributed operational environments.
          </p>
        </article>

        <article className="editorial-card">
          <h3>Operational Intelligence</h3>
          <p>
            Investigating continuous optimization across engineering execution and infrastructure systems.
          </p>
        </article>

        <article className="editorial-card">
          <h3>AI Systems Architecture</h3>
          <p>
            Designing scalable orchestration models for enterprise AI infrastructure and workflow execution.
          </p>
        </article>
      </section>

    </>
  )
}

export default ResearchPage

import {
  ArrowRight,
  BrainCircuit,
  CheckCircle2,
  ShieldCheck,
  Sparkles,
  Workflow,
} from 'lucide-react'
import { Link } from 'react-router-dom'

const cards = [
  {
    icon: BrainCircuit,
    title: 'AI Engineering Harness',
    text: 'Transform engineering organizations with intelligent execution systems.',
  },
  {
    icon: Workflow,
    title: 'Autonomous Delivery',
    text: 'Coordinate planning, implementation, testing, and deployment workflows.',
  },
  {
    icon: ShieldCheck,
    title: 'Enterprise Governance',
    text: 'Operate securely with observability, controls, and scalable orchestration.',
  },
]

const enterpriseStats = [
  'Unified execution across engineering systems',
  'AI-native orchestration infrastructure',
  'Continuous operational intelligence',
  'Enterprise workflow governance',
]

const lifecycle = [
  {
    title: 'Discover',
    text: 'Analyze repositories, infrastructure, systems, and operational context.',
  },
  {
    title: 'Coordinate',
    text: 'Route intelligent workflows across AI agents and enterprise systems.',
  },
  {
    title: 'Execute',
    text: 'Automate implementation, operations, testing, and infrastructure delivery.',
  },
  {
    title: 'Continuously Improve',
    text: 'Optimize engineering performance through operational intelligence.',
  },
]

function HomePage() {
  return (
    <>
      <section className="hero compact-hero">
        <div className="hero-copy">
          <div className="eyebrow">
            <Sparkles size={16} />
            Enterprise AI Engineering Platform
          </div>

          <h1>The operating system for AI-native software engineering.</h1>

          <p className="hero-text">
            Fancyber enables organizations to harness AI agents, orchestrate workflows,
            and accelerate engineering execution across the enterprise.
          </p>

          <div className="hero-actions">
            <Link className="primary-btn" to="/platform">
              Explore Platform
              <ArrowRight size={18} />
            </Link>

            <Link className="secondary-btn" to="/solutions">
              View Solutions
            </Link>
          </div>
        </div>

        <div className="hero-dashboard">
          <div className="dashboard-panel">
            <div className="dashboard-header">
              <span>Fancyber Command Layer</span>
              <div className="live-pill">Live</div>
            </div>

            <div className="dashboard-grid">
              <div className="dashboard-card large-card">
                <strong>Autonomous Execution</strong>
                <p>143 workflows currently orchestrated across enterprise systems.</p>
              </div>

              <div className="dashboard-card">
                <span>Repositories</span>
                <strong>248</strong>
              </div>

              <div className="dashboard-card">
                <span>AI Agents</span>
                <strong>61</strong>
              </div>

              <div className="dashboard-card wide-card">
                <span>Operational Health</span>
                <div className="health-bar">
                  <div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="metrics-ribbon">
        <div>
          <strong>AI-Native</strong>
          <span>Engineering Infrastructure</span>
        </div>

        <div>
          <strong>Enterprise</strong>
          <span>Governance & Execution</span>
        </div>

        <div>
          <strong>Autonomous</strong>
          <span>Operational Workflows</span>
        </div>
      </section>

      <section className="pillars">
        {cards.map((card) => {
          const Icon = card.icon

          return (
            <article className="pillar-card" key={card.title}>
              <div className="pillar-icon">
                <Icon />
              </div>

              <h2>{card.title}</h2>
              <p>{card.text}</p>
            </article>
          )
        })}
      </section>

      <section className="content-section two-column-layout">
        <div>
          <span className="section-label">Enterprise Platform</span>
          <h2>Built for organizations operating at engineering scale.</h2>

          <p>
            Fancyber connects engineering workflows, AI systems, infrastructure,
            deployment pipelines, observability tooling, and operational intelligence
            into one coordinated execution environment.
          </p>
        </div>

        <div className="text-column">
          {enterpriseStats.map((item) => (
            <div className="bullet-line" key={item}>
              <CheckCircle2 size={18} />
              <span>{item}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="system-section">
        <div className="system-copy">
          <span className="section-label">How Fancyber Works</span>
          <h2>One intelligent execution layer across the software lifecycle.</h2>
          <p>
            Fancyber orchestrates AI agents, engineering workflows, enterprise systems,
            and operational infrastructure into a unified execution platform.
          </p>
        </div>

        <div className="system-visual">
          <div className="node-grid">
            <div className="system-node active-node">AI Agents</div>
            <div className="system-node">Repositories</div>
            <div className="system-node">CI/CD</div>
            <div className="system-node">Infrastructure</div>
            <div className="system-node core-node">Fancyber Core</div>
            <div className="system-node">Observability</div>
            <div className="system-node">Security</div>
            <div className="system-node">Enterprise APIs</div>
            <div className="system-node">Workflows</div>
          </div>
        </div>
      </section>

      <section className="timeline-section four-columns">
        {lifecycle.map((item) => (
          <div className="timeline-card" key={item.title}>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        ))}
      </section>

      <section className="editorial-grid">
        <article className="editorial-card">
          <h3>AI Agent Orchestration</h3>
          <p>
            Coordinate specialized AI systems across implementation, review,
            infrastructure operations, and software delivery workflows.
          </p>
        </article>

        <article className="editorial-card">
          <h3>Enterprise Intelligence</h3>
          <p>
            Continuously analyze operational telemetry, engineering activity,
            workflow execution, and deployment infrastructure.
          </p>
        </article>

        <article className="editorial-card">
          <h3>Operational Reliability</h3>
          <p>
            Maintain governance, visibility, and resilience across AI-native
            engineering operations.
          </p>
        </article>
      </section>

      <section className="cta-section">
        <div>
          <span className="section-label">Vision</span>
          <h2>Redefine software engineering to accelerate everyone’s success.</h2>
        </div>

        <Link className="primary-btn" to="/company">
          About Fancyber
          <ArrowRight size={18} />
        </Link>
      </section>
    </>
  )
}

export default HomePage

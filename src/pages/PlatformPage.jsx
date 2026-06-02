import {
  Bot,
  Cloud,
  Code2,
  Cpu,
  Database,
  GitBranch,
  Layers3,
  LockKeyhole,
  Network,
  Workflow,
} from 'lucide-react'

const features = [
  ['AI Co-Workers', 'Deploy intelligent agents for coding, QA, debugging, and operations.', Bot],
  ['Workflow Orchestration', 'Coordinate autonomous execution across engineering systems.', Workflow],
  ['Model Infrastructure', 'Run multi-model execution with routing and observability.', Cpu],
  ['Enterprise Knowledge', 'Connect repositories, APIs, docs, and enterprise systems.', Database],
  ['Secure Runtime', 'Policy-aware execution with enterprise-grade governance.', LockKeyhole],
  ['Hybrid Infrastructure', 'Deploy across cloud, private, and on-premise environments.', Cloud],
]

const architecture = [
  {
    title: 'Agent Execution Layer',
    text: 'Coordinates specialized AI systems responsible for planning, implementation, operations, testing, and continuous optimization.',
  },
  {
    title: 'Workflow Intelligence Engine',
    text: 'Routes engineering tasks across repositories, CI/CD pipelines, infrastructure systems, and operational environments.',
  },
  {
    title: 'Enterprise Governance System',
    text: 'Provides observability, execution controls, auditability, and policy enforcement across AI-assisted workflows.',
  },
  {
    title: 'Operational Intelligence Network',
    text: 'Continuously analyzes telemetry, execution traces, delivery metrics, and system health signals.',
  },
]

const faq = [
  {
    q: 'How does Fancyber integrate into enterprise environments?',
    a: 'Fancyber connects to repositories, CI/CD systems, infrastructure tooling, observability platforms, enterprise APIs, and operational workflows through programmable orchestration layers.',
  },
  {
    q: 'Does Fancyber support human-in-the-loop execution?',
    a: 'Yes. Organizations can configure approval workflows, execution policies, operational boundaries, and governance controls for autonomous systems.',
  },
  {
    q: 'Can organizations deploy Fancyber in private infrastructure?',
    a: 'Fancyber is designed for hybrid, cloud, and enterprise deployment architectures with support for isolated operational environments.',
  },
]

function PlatformPage() {
  return (
    <>
      <section className="page-hero">
        <span className="section-label">Platform</span>
        <h1>Intelligent infrastructure for enterprise engineering teams.</h1>
        <p>
          Fancyber combines orchestration, AI execution, governance, automation,
          and operational intelligence into one unified engineering platform.
        </p>
      </section>

      <section className="feature-grid">
        {features.map(([title, text, Icon]) => (
          <article className="feature-card" key={title}>
            <Icon className="feature-icon" />
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </section>

      <section className="content-section two-column-layout">
        <div>
          <span className="section-label">Execution Architecture</span>
          <h2>Built to operate across the full software lifecycle.</h2>
          <p>
            Fancyber provides an execution layer that connects engineering systems,
            AI agents, infrastructure, repositories, deployment environments, and
            operational tooling into one coordinated platform.
          </p>

          <p>
            The platform continuously analyzes engineering context, operational
            telemetry, workflow execution, infrastructure state, and delivery
            performance to optimize software execution at scale.
          </p>

          <div className="inline-points">
            <div><GitBranch size={18} /> Repository orchestration</div>
            <div><Layers3 size={18} /> Workflow composition</div>
            <div><Code2 size={18} /> AI-assisted implementation</div>
            <div><Network size={18} /> Distributed operational coordination</div>
          </div>
        </div>

        <div className="stack-panel">
          <div className="stack-item">Application Layer</div>
          <div className="stack-item">AI Workflow Engine</div>
          <div className="stack-item highlight-stack">Fancyber Core Runtime</div>
          <div className="stack-item">Infrastructure Orchestration</div>
          <div className="stack-item">Operational Intelligence Systems</div>
          <div className="stack-item">Enterprise Data Networks</div>
        </div>
      </section>

      <section className="content-section">
        <div className="section-heading-block">
          <span className="section-label">Platform Architecture</span>
          <h2>Designed as an enterprise execution system, not a standalone assistant.</h2>
        </div>

        <div className="editorial-grid expanded-grid">
          {architecture.map((item) => (
            <article className="editorial-card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="deep-panel">
        <div>
          <span className="section-label">Operational Model</span>
          <h2>Continuous orchestration across engineering and infrastructure systems.</h2>
        </div>

        <div className="operations-table">
          <div className="ops-row ops-header">
            <span>System</span>
            <span>Capability</span>
            <span>Outcome</span>
          </div>

          <div className="ops-row">
            <span>AI Agents</span>
            <span>Execution automation</span>
            <span>Accelerated delivery</span>
          </div>

          <div className="ops-row">
            <span>Workflow Engine</span>
            <span>Operational coordination</span>
            <span>Unified execution</span>
          </div>

          <div className="ops-row">
            <span>Governance Layer</span>
            <span>Policy enforcement</span>
            <span>Enterprise control</span>
          </div>

          <div className="ops-row">
            <span>Observability Systems</span>
            <span>Telemetry analysis</span>
            <span>Operational intelligence</span>
          </div>
        </div>
      </section>

      <section className="content-section faq-section">
        <div className="section-heading-block">
          <span className="section-label">FAQ</span>
          <h2>Common questions about the Fancyber platform.</h2>
        </div>

        <div className="faq-grid">
          {faq.map((item) => (
            <article className="faq-card" key={item.q}>
              <h3>{item.q}</h3>
              <p>{item.a}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}

export default PlatformPage

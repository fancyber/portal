import { Eye, LockKeyhole, Shield, ShieldCheck, Workflow } from 'lucide-react'

const items = [
  {
    icon: ShieldCheck,
    title: 'Enterprise Governance',
    text: 'Policy-aware execution and operational controls across engineering workflows.',
  },
  {
    icon: LockKeyhole,
    title: 'Secure AI Runtime',
    text: 'Protected execution environments with permission boundaries and encrypted operations.',
  },
  {
    icon: Eye,
    title: 'Observability',
    text: 'Centralized visibility into AI actions, workflows, and autonomous execution traces.',
  },
  {
    icon: Workflow,
    title: 'Operational Control',
    text: 'Human-in-the-loop approvals and configurable execution pipelines.',
  },
]

function SecurityPage() {
  return (
    <>
      <section className="page-hero">
        <span className="section-label">Security</span>
        <h1>Enterprise-grade governance for intelligent engineering systems.</h1>
        <p>
          Fancyber is designed for organizations operating mission-critical software infrastructure at global scale.
        </p>
      </section>

      <section className="feature-grid two-columns">
        {items.map((item) => {
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

      <section className="deep-panel">
        <div>
          <span className="section-label">Trust Architecture</span>
          <h2>Designed to align AI execution with enterprise operational standards.</h2>
        </div>

        <div className="deep-grid">
          <div className="deep-card">
            <Shield size={28} />
            <strong>Execution Governance</strong>
            <p>Role-aware workflows and policy enforcement layers.</p>
          </div>

          <div className="deep-card">
            <Eye size={28} />
            <strong>Audit Visibility</strong>
            <p>Execution traceability across AI-assisted engineering workflows.</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default SecurityPage

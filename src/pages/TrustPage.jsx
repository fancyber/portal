import { Activity, Eye, LockKeyhole, ShieldCheck } from 'lucide-react'

const trustItems = [
  {
    icon: ShieldCheck,
    title: 'Operational Governance',
    text: 'Enterprise controls for intelligent execution workflows and AI systems.',
  },
  {
    icon: LockKeyhole,
    title: 'Security Architecture',
    text: 'Secure-by-design infrastructure with permission-aware orchestration.',
  },
  {
    icon: Activity,
    title: 'Execution Monitoring',
    text: 'Observe workflow execution, system behavior, and operational health in real time.',
  },
  {
    icon: Eye,
    title: 'Transparent Operations',
    text: 'Traceability and auditability across intelligent engineering systems.',
  },
]

function TrustPage() {
  return (
    <>
      <section className="page-hero">
        <span className="section-label">Trust</span>
        <h1>Reliable infrastructure for enterprise AI operations.</h1>
        <p>
          Fancyber is designed to help organizations operate intelligent systems with confidence, visibility, and control.
        </p>
      </section>

      <section className="content-section two-column-layout">
        <div>
          <span className="section-label">Trust Principles</span>
          <h2>Operational reliability, visibility, and governance by default.</h2>
        </div>

        <div className="text-column">
          <p>
            Enterprise AI systems require robust governance and operational transparency. Fancyber is designed to align intelligent execution with enterprise standards.
          </p>
        </div>
      </section>

      <section className="feature-grid two-columns">
        {trustItems.map((item) => {
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
    </>
  )
}

export default TrustPage

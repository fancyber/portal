const solutions = [
  {
    title: 'Software Engineering',
    text: 'Accelerate implementation, refactoring, testing, and delivery operations.',
  },
  {
    title: 'Enterprise Operations',
    text: 'Automate operational diagnostics, incident remediation, and infrastructure workflows.',
  },
  {
    title: 'Developer Productivity',
    text: 'Empower engineering organizations with intelligent AI-native tooling.',
  },
  {
    title: 'AI Transformation',
    text: 'Modernize legacy engineering systems into scalable AI execution platforms.',
  },
]

const industries = [
  'Technology Platforms',
  'Financial Infrastructure',
  'Cloud Operations',
  'Enterprise SaaS',
  'Cybersecurity',
  'AI Infrastructure',
]

function SolutionsPage() {
  return (
    <>
      <section className="page-hero">
        <span className="section-label">Solutions</span>
        <h1>Purpose-built AI systems for modern enterprises.</h1>
        <p>
          Fancyber enables organizations to scale engineering excellence through
          intelligent orchestration and autonomous execution.
        </p>
      </section>

      <section className="feature-grid two-columns">
        {solutions.map((item) => (
          <article className="feature-card" key={item.title}>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </section>

      <section className="content-section">
        <div className="section-heading-block">
          <span className="section-label">Industry Focus</span>
          <h2>Built for organizations operating at engineering scale.</h2>
        </div>

        <div className="industry-grid">
          {industries.map((industry) => (
            <div className="industry-card" key={industry}>
              {industry}
            </div>
          ))}
        </div>
      </section>

      <section className="quote-panel">
        <h2>
          AI should not just assist engineering teams. It should elevate the
          operational capability of the entire organization.
        </h2>
      </section>
    </>
  )
}

export default SolutionsPage

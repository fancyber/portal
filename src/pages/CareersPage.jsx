const openings = [
  'AI Infrastructure Engineer',
  'Distributed Systems Engineer',
  'AI Product Designer',
  'Enterprise Platform Architect',
]

function CareersPage() {
  return (
    <>
      <section className="page-hero">
        <span className="section-label">Careers</span>
        <h1>Build the future of AI-native engineering.</h1>
        <p>
          We are building intelligent infrastructure that transforms how software is engineered across the world.
        </p>
      </section>

      <section className="content-section">
        <div className="section-heading-block">
          <span className="section-label">Careers</span>
          <h2>Join a team building foundational AI infrastructure.</h2>
          <p>
            We are looking for engineers, researchers, designers, and operators who want to shape the future of intelligent software systems.
          </p>
        </div>
      </section>

      <section className="jobs-grid">
        {openings.map((job) => (
          <article className="job-card" key={job}>
            <strong>{job}</strong>
            <span>Full Time · Global</span>
          </article>
        ))}
      </section>

      <section className="vision-section">
        <div>
          <span className="section-label">Culture</span>
          <h2>High agency. Deep systems thinking. Long-term vision.</h2>
        </div>

        <p>
          Fancyber brings together engineers, researchers, and operators building foundational systems for the next era of computing.
        </p>
      </section>

      <section className="editorial-grid">
        <article className="editorial-card">
          <h3>High Ownership</h3>
          <p>
            Teams operate with deep autonomy, fast execution, and long-term product thinking.
          </p>
        </article>

        <article className="editorial-card">
          <h3>Systems Culture</h3>
          <p>
            We value engineers who think across infrastructure, execution, operations, and product systems.
          </p>
        </article>

        <article className="editorial-card">
          <h3>Frontier Engineering</h3>
          <p>
            Fancyber is building foundational infrastructure for the next generation of intelligent software organizations.
          </p>
        </article>
      </section>

    </>
  )
}

export default CareersPage

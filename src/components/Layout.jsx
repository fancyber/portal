import { NavLink } from 'react-router-dom'

function Layout({ children }) {
  return (
    <main className="page-shell">
      <div className="ambient ambient-left"></div>
      <div className="ambient ambient-right"></div>

      <header className="topbar">
        <NavLink to="/" className="brand brand-link">
          <div className="brand-mark">F</div>

          <div>
            <strong>Fancyber</strong>
            <span>Simply Harness.</span>
          </div>
        </NavLink>

        <nav>
          <NavLink to="/platform">Platform</NavLink>
          <NavLink to="/solutions">Solutions</NavLink>
          <NavLink to="/company">Company</NavLink>
          <NavLink to="/security">Security</NavLink>
          <NavLink to="/research">Research</NavLink>
          <NavLink to="/developers">Developers</NavLink>
          <NavLink to="/careers">Careers</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
      </header>

      {children}

      <footer className="footer">
        <div>
          <strong>Fancyber</strong>
          <p>
            AI harness infrastructure for modern software engineering organizations.
          </p>
        </div>

        <div className="footer-links">
          <NavLink to="/platform">Platform</NavLink>
          <NavLink to="/solutions">Solutions</NavLink>
          <NavLink to="/company">Company</NavLink>
          <NavLink to="/security">Security</NavLink>
          <NavLink to="/research">Research</NavLink>
          <NavLink to="/developers">Developers</NavLink>
          <NavLink to="/careers">Careers</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>
      </footer>
    </main>
  )
}

export default Layout

import './App.css'
import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import PlatformPage from './pages/PlatformPage'
import SolutionsPage from './pages/SolutionsPage'
import CompanyPage from './pages/CompanyPage'
import ContactPage from './pages/ContactPage'
import SecurityPage from './pages/SecurityPage'
import ResearchPage from './pages/ResearchPage'
import CareersPage from './pages/CareersPage'
import DevelopersPage from './pages/DevelopersPage'
import TrustPage from './pages/TrustPage'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/platform" element={<PlatformPage />} />
        <Route path="/solutions" element={<SolutionsPage />} />
        <Route path="/company" element={<CompanyPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/security" element={<SecurityPage />} />
        <Route path="/research" element={<ResearchPage />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/developers" element={<DevelopersPage />} />
        <Route path="/trust" element={<TrustPage />} />
      </Routes>
    </Layout>
  )
}

export default App

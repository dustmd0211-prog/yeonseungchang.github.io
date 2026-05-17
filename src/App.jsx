import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar        from './components/Navbar/Navbar'
import Home          from './pages/Home'
import ProjectDetail from './pages/ProjectDetail'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/"                  element={<Home />} />
        <Route path="/projects/:slug"    element={<ProjectDetail />} />
      </Routes>
      <footer className="footer">
        <div className="container footer-inner">
          <div className="footer-left">
            <p className="footer-name">Yeonseung Chang</p>
            <p className="footer-tagline">
              Economics &amp; Automotive IT student — open to U.S. internships in
              marketing, finance, and product.
            </p>
          </div>
          <div className="footer-links">
            <a href="mailto:changyeonseung@gmail.com" className="footer-link">
              changyeonseung@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/yeonseung-chang-6b7a283ba"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              LinkedIn
            </a>
          </div>
        </div>
        <div className="container footer-bottom">
          <p>© 2025 Yeonseung Chang. All rights reserved.</p>
          <p>Built with React + Vite</p>
        </div>
      </footer>
    </BrowserRouter>
  )
}

export default App

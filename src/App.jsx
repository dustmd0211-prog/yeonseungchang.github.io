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
      <footer style={{
        borderTop: '1px solid var(--border)',
        padding: '2rem 0',
      }}>
        <div
          className="container"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: '0.82rem',
            color: 'var(--text-muted)',
            flexWrap: 'wrap',
            gap: '0.5rem',
          }}
        >
          <p>© 2025 Yeonseung Chang. All rights reserved.</p>
          <p>Built with React + Vite</p>
        </div>
      </footer>
    </BrowserRouter>
  )
}

export default App

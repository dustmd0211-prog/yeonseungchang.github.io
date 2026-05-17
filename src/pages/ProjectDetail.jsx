import { useParams, Link } from 'react-router-dom'
import { projects } from '../data/projects'
import ProjectPage from '../components/ProjectPage/ProjectPage'

import ClirContent    from '../projects/ClirContent'
import PlinkContent   from '../projects/PlinkContent'
import SynergyContent from '../projects/SynergyContent'
import ScalecarContent from '../projects/ScalecarContent'
// Add new projects here as you build them out
const contentMap = {
  clir:     ClirContent,
  plink:    PlinkContent,
  synergy:  SynergyContent,
  scalecar: ScalecarContent,
}

export default function ProjectDetail() {
  const { slug } = useParams()
  const project = projects.find(p => p.slug === slug)
  const Content = contentMap[slug]

  if (!project || !Content) {
    return (
      <main style={{ paddingTop: 'calc(var(--nav-height) + 4rem)', textAlign: 'center' }}>
        <p style={{ color: 'var(--text-secondary)' }}>Project not found.</p>
        <Link to="/" style={{ color: 'var(--accent)', marginTop: '1rem', display: 'inline-block' }}>
          ← Back to Home
        </Link>
      </main>
    )
  }

  return (
    <ProjectPage project={project}>
      <Content />
    </ProjectPage>
  )
}

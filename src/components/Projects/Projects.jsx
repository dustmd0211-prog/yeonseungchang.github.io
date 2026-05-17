import { Link } from 'react-router-dom'
import { projects } from '../../data/projects'
import styles from './Projects.module.css'

export default function Projects() {
  return (
    <section id="projects" className="section section-alt">
      <div className="container">
        <p className="section-label">Featured Projects</p>
        <h2 className="section-title">What I've worked on</h2>
        <p className="section-subtitle">
          A selection of product, strategy, and finance projects from academic and independent work.
        </p>

        <div className={styles.grid}>
          {projects.map(project => (
            <Link
              key={project.slug}
              to={`/projects/${project.slug}`}
              className={styles.card}
            >
              <div className={styles.cardTop}>
                <span className={styles.category}>{project.category}</span>
                <span className={styles.arrow}>↗</span>
              </div>
              <h3 className={styles.title}>{project.title}</h3>
              <p className={styles.description}>{project.description}</p>
              <div className={styles.cardBottom}>
                <div className={styles.tags}>
                  {project.tags.map(tag => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
                <span className={styles.caseLink}>View Case Study →</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

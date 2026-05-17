import { Link } from 'react-router-dom'
import styles from './ProjectPage.module.css'

// ── Shared layout primitives exported for content files ──

export function Row({ label, children }) {
  return (
    <div className={styles.row}>
      <div className={styles.rowLabel}>
        <p className={styles.rowLabelText}>{label}</p>
      </div>
      <div className={styles.rowContent}>{children}</div>
    </div>
  )
}

export function Divider() {
  return <div className={styles.divider} />
}

export function Placeholder({ label, ratio = '56.25%' }) {
  return (
    <div className={styles.placeholder} style={{ paddingBottom: ratio }}>
      <span className={styles.placeholderLabel}>{label}</span>
    </div>
  )
}

// ── Page shell ──

export default function ProjectPage({ project, children }) {
  return (
    <main className={styles.page}>

      {/* Hero */}
      <div className={styles.heroWrap}>
        <div className="container">
          <Link to="/#projects" className={styles.backLink}>← All Projects</Link>
          <p className="section-label" style={{ marginBottom: '1rem' }}>Case Study</p>
          <h1 className={styles.projectTitle}>{project.title}</h1>
          <p className={styles.tagline}>{project.tagline}</p>

          {project.meta && (
            <div className={styles.metaBar}>
              {project.meta.map((m, i) => (
                <div key={m.label} className={styles.metaItem}>
                  {i !== 0 && <span className={styles.metaSep} aria-hidden="true" />}
                  <p className={styles.metaLabel}>{m.label}</p>
                  <p className={styles.metaValue}>{m.value}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Content body */}
      <div className={`container ${styles.body}`}>
        {children}
      </div>

    </main>
  )
}

export { styles }

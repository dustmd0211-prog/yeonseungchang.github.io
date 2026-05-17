import styles from './Resume.module.css'

export default function Resume() {
  return (
    <section id="resume" className="section section-alt">
      <div className="container">
        <div className={styles.card}>
          <div>
            <p className="section-label">Resume</p>
            <h2 className={styles.title}>See my full background</h2>
            <p className={styles.subtitle}>
              My resume includes full work history, education, certifications, and skills.
            </p>
          </div>
          <div className={styles.actions}>
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Download PDF
            </a>
            <a
              href="https://www.linkedin.com/in/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              View LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

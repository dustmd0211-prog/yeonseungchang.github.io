import styles from './About.module.css'

const focuses = [
  { area: 'Market Research & Strategy' },
  { area: 'Financial Analysis' },
  { area: 'Product & Go-to-Market' },
]

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className={styles.grid}>

          <div>
            <p className="section-label">About</p>
            <h2 className="section-title">A bit about me</h2>
            <p className={styles.text}>
              Economics student at Kookmin University, double-majoring in Automotive IT
              Convergence. Based in Irvine, CA — looking for U.S. internships in marketing,
              financial analysis, and product.
            </p>
            <p className={styles.text}>
              I turn ambiguous business problems into structured, actionable plans.
            </p>
          </div>

          <div className={styles.focuses}>
            {focuses.map(f => (
              <div key={f.area} className={styles.focusCard}>
                <p className={styles.focusArea}>{f.area}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}

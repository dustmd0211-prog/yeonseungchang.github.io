import styles from './About.module.css'

const focuses = [
  {
    area: 'Market Research & Strategy',
    desc: 'Consumer insight, competitive analysis, and go-to-market planning.',
  },
  {
    area: 'Financial Analysis',
    desc: 'Investment research, valuation, and data-driven business decision making.',
  },
  {
    area: 'Product & Go-to-Market',
    desc: 'User-centered product thinking, feature prioritization, and launch strategy.',
  },
]

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className={styles.grid}>

          {/* Left — bio */}
          <div>
            <p className="section-label">About</p>
            <h2 className="section-title">A bit about me</h2>

            <p className={styles.text}>
              I'm an Economics student with a double major in Automotive IT Convergence
              at Kookmin University. My academic background spans business strategy,
              financial markets, and technology — giving me a cross-functional perspective
              that I apply to real-world projects in marketing, investment analysis, and
              product strategy.
            </p>
            <p className={styles.text}>
              Currently based in Irvine, CA, I'm actively looking for U.S. internship
              opportunities where I can contribute to teams working on business growth,
              market expansion, or product development. I enjoy turning ambiguous problems
              into structured, actionable plans.
            </p>
          </div>

          {/* Right — focus areas */}
          <div className={styles.focuses}>
            {focuses.map(f => (
              <div key={f.area} className={styles.focusCard}>
                <p className={styles.focusArea}>{f.area}</p>
                <p className={styles.focusDesc}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

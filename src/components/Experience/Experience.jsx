import styles from './Experience.module.css'

const experiences = [
  {
    id: 1,
    org: 'WYVERN Financial Investment Club',
    role: 'Research Analyst',
    period: '2023 – 2024',
    type: 'Investment Research',
    bullets: [
      'Produced equity research memos with buy/hold/sell recommendations using DCF and comparable company analysis.',
      'Tracked macro trends and contributed to monthly portfolio positioning discussions.',
    ],
  },
  {
    id: 2,
    org: 'HANA Securities',
    role: 'Equity Market Researcher',
    period: '2023',
    type: 'Financial Research',
    bullets: [
      'Summarized equity market movements and sector rotations for internal analyst reporting.',
      'Compiled data from Bloomberg and KRX to support client-facing research materials.',
    ],
  },
  {
    id: 3,
    org: 'EO School Startup Methodology Program',
    role: 'Startup Planner',
    period: '2023',
    type: 'Startup Strategy',
    bullets: [
      'Developed a business concept through problem discovery, MVP scoping, and GTM planning.',
      'Presented to a panel of entrepreneurs and received structured feedback on positioning.',
    ],
  },
  {
    id: 4,
    org: 'Junior Core Role Expert Program',
    role: 'Finance Track',
    period: '2022 – 2023',
    type: 'Finance & Strategy',
    bullets: [
      'Studied financial statement analysis, corporate valuation, and investment decision-making.',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="section section-alt">
      <div className="container">
        <p className="section-label">Experience</p>
        <h2 className="section-title">Where I've been</h2>

        <div className={styles.list}>
          {experiences.map((exp, i) => (
            <div key={exp.id} className={styles.item}>
              <div className={styles.left}>
                <p className={styles.type}>{exp.type}</p>
                <p className={styles.period}>{exp.period}</p>
              </div>

              <div className={styles.connector}>
                <div className={styles.dot} />
                {i < experiences.length - 1 && <div className={styles.line} />}
              </div>

              <div className={styles.right}>
                <h3 className={styles.org}>{exp.org}</h3>
                <p className={styles.role}>{exp.role}</p>
                <ul className={styles.bullets}>
                  {exp.bullets.map((b, idx) => (
                    <li key={idx} className={styles.bullet}>{b}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

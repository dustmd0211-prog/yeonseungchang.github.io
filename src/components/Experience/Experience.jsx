import styles from './Experience.module.css'

const experiences = [
  {
    id: 1,
    org: 'WYVERN Financial Investment Club',
    role: 'Research Analyst',
    period: '2023 – 2024',
    type: 'Investment Research',
    summary:
      'Conducted equity research and investment analysis as part of a student-led financial club focused on real market portfolios and investment strategy.',
    bullets: [
      'Analyzed equity candidates using fundamental analysis frameworks including DCF valuation, comparable company analysis, and earnings quality assessment.',
      'Produced written investment memos with buy/hold/sell recommendations presented to the investment committee.',
      'Tracked sector-level macro trends to inform portfolio positioning and contributed to monthly market outlook discussions.',
    ],
  },
  {
    id: 2,
    org: 'HANA Securities',
    role: 'Equity Market Researcher',
    period: '2023',
    type: 'Financial Research',
    summary:
      'Supported equity market research at a leading Korean securities firm, gaining exposure to institutional-grade analysis and financial data workflows.',
    bullets: [
      'Researched and summarized equity market movements, sector rotations, and macroeconomic indicators for internal reporting.',
      'Compiled data from Bloomberg and KRX market feeds to support analyst workflows and client-facing research materials.',
      'Developed proficiency in financial modeling and report structuring aligned with institutional standards.',
    ],
  },
  {
    id: 3,
    org: 'EO School Startup Methodology Program',
    role: 'Startup Planner',
    period: '2023',
    type: 'Startup Strategy',
    summary:
      'Completed an intensive startup methodology program focused on lean validation, business model design, and go-to-market strategy — applying frameworks from global entrepreneurship education.',
    bullets: [
      'Developed a business concept from problem discovery through MVP definition using lean startup and design thinking methodologies.',
      'Built go-to-market frameworks covering user persona development, channel strategy, and early-stage monetization.',
      'Presented business model to a panel of entrepreneurs and investors, receiving structured feedback on viability and positioning.',
    ],
  },
  {
    id: 4,
    org: 'Junior Core Role Expert Program',
    role: 'Finance Track Participant',
    period: '2022 – 2023',
    type: 'Finance & Strategy',
    summary:
      'Participated in a structured finance career development program designed to build core competencies in financial analysis, corporate strategy, and professional business communication.',
    bullets: [
      'Studied financial statement analysis, ratio interpretation, and corporate valuation across structured learning modules.',
      'Completed case-based exercises in capital budgeting, investment decision-making, and risk assessment.',
      'Strengthened Excel-based modeling skills and practiced presenting financial insights in professional report formats.',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="section section-alt">
      <div className="container">
        <p className="section-label">Experience</p>
        <h2 className="section-title">Where I've been</h2>
        <p className="section-subtitle">
          Research, analysis, and strategy work across finance, investment, and startup contexts.
        </p>

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

              <div className={styles.right} data-period={exp.period}>
                <div className={styles.header}>
                  <div>
                    <h3 className={styles.org}>{exp.org}</h3>
                    <p className={styles.role}>{exp.role}</p>
                  </div>
                </div>
                <p className={styles.summary}>{exp.summary}</p>
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

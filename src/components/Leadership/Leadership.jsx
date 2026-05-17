import styles from './Leadership.module.css'

const activities = [
  {
    id: 1,
    org: 'Global Peers',
    role: 'Exchange Student Buddy Program',
    period: '2023 – 2024',
    summary: 'Planned and promoted cross-cultural exchange programs, connecting international students with local peers. Awarded a full scholarship to the UH Manoa English Language Program and recognized as a top performer.',
    highlights: [
      'Designed and facilitated cross-cultural exchange events and community activities',
      'Awarded full scholarship — UH Manoa English Language Program',
      'Recognized as a top-performing program coordinator',
    ],
  },
  {
    id: 2,
    org: 'Economic Forum Society',
    role: 'Chief Academic Officer',
    period: '2022 – 2023',
    summary: 'Organized and led university-level economics seminars, bringing together students and faculty to discuss real-world economic issues and academic research.',
    highlights: [
      'Planned and moderated economics seminar series for student and faculty audiences',
      'Managed academic programming calendar and speaker coordination',
    ],
  },
]

export default function Leadership() {
  return (
    <section id="leadership" className="section">
      <div className="container">
        <p className="section-label">Leadership & Activities</p>
        <h2 className="section-title">Beyond the classroom</h2>

        <div className={styles.list}>
          {activities.map(a => (
            <div key={a.id} className={styles.item}>
              <div className={styles.left}>
                <h3 className={styles.org}>{a.org}</h3>
                <p className={styles.role}>{a.role}</p>
                <p className={styles.period}>{a.period}</p>
              </div>
              <div className={styles.right}>
                <p className={styles.summary}>{a.summary}</p>
                <ul className={styles.highlights}>
                  {a.highlights.map((h, i) => (
                    <li key={i} className={styles.highlight}>{h}</li>
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

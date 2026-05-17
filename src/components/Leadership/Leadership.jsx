import styles from './Leadership.module.css'

const activities = [
  {
    id: 1,
    org: 'Global Peers',
    role: 'Exchange Student Buddy Program',
    period: '2023 – 2024',
    note: 'Full scholarship — UH Manoa English Language Program · Top performer',
  },
  {
    id: 2,
    org: 'Economic Forum Society',
    role: 'Chief Academic Officer',
    period: '2022 – 2023',
    note: 'Organized and led university economics seminar series',
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
              </div>
              <div className={styles.right}>
                <p className={styles.period}>{a.period}</p>
                <p className={styles.note}>{a.note}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

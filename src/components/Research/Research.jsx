import styles from './Research.module.css'

const insights = [
  {
    id: 1,
    title: 'Why Decision Fatigue Matters More Than Productivity',
    desc: 'Insights from building AI-assisted scheduling and shopping products — reducing choices often creates more value than adding features.',
  },
  {
    id: 2,
    title: 'Trust Is the Most Important UX in Allergy Shopping',
    desc: 'Consumer trust and clarity strongly influence food purchasing behavior. Safety-first products need a different design language than convenience tools.',
  },
  {
    id: 3,
    title: 'Small Communication Frictions Create Bigger Problems',
    desc: 'Daily coordination failures between people are rarely technical — they are emotional. The best products reduce friction without removing warmth.',
  },
  {
    id: 4,
    title: 'Why B2B Often Feels More Sustainable Than B2C',
    desc: 'Lessons from startup programs and market research: B2B products can grow through structured relationships rather than mass acquisition.',
  },
  {
    id: 5,
    title: 'Positioning Is a Strategic Choice, Not a Marketing Decision',
    desc: 'How you define your product shapes everything — from features to pricing to the channels you use. Getting positioning wrong is expensive.',
  },
]

export default function Research() {
  return (
    <section id="research" className="section">
      <div className="container">
        <p className="section-label">Insights</p>
        <h2 className="section-title">What I think about</h2>
        <p className="section-subtitle">
          Short observations on consumer behavior, product strategy, and startup positioning.
        </p>

        <div className={styles.list}>
          {insights.map((item, i) => (
            <div key={item.id} className={styles.item}>
              <span className={styles.num}>0{i + 1}</span>
              <div className={styles.content}>
                <h3 className={styles.title}>{item.title}</h3>
                <p className={styles.desc}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

import styles from './Research.module.css'

const articles = [
  {
    id: 1,
    topic: 'Marketing Strategy',
    date: 'March 2024',
    title: 'How AI is Reshaping Digital Marketing Attribution',
    excerpt:
      'An analysis of how machine learning models are improving multi-touch attribution in performance marketing, and what it means for CMOs.',
    link: '#',
  },
  {
    id: 2,
    topic: 'Financial Analysis',
    date: 'January 2024',
    title: 'Interest Rate Sensitivity in Consumer Lending Markets',
    excerpt:
      'Examining how recent Fed rate decisions have rippled through consumer credit markets, with data from 2020–2023.',
    link: '#',
  },
  {
    id: 3,
    topic: 'Product Management',
    date: 'November 2023',
    title: 'Retention Over Acquisition: A Framework for Early-Stage SaaS',
    excerpt:
      'A framework for prioritizing user retention strategies over paid acquisition during a product\'s first 12 months.',
    link: '#',
  },
]

export default function Research() {
  return (
    <section id="research" className="section section-alt">
      <div className="container">
        <p className="section-label">Research & Insights</p>
        <h2 className="section-title">What I'm thinking about</h2>
        <p className="section-subtitle">
          Articles and analyses on business strategy, marketing, and product.
        </p>

        <div className={styles.grid}>
          {articles.map(article => (
            <a key={article.id} href={article.link} className={styles.card}>
              <div className={styles.cardMeta}>
                <span className={styles.topic}>{article.topic}</span>
                <span className={styles.date}>{article.date}</span>
              </div>
              <h3 className={styles.title}>{article.title}</h3>
              <p className={styles.excerpt}>{article.excerpt}</p>
              <span className={styles.readMore}>Read more →</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

import styles from './Contact.module.css'

export default function Contact() {
  return (
    <section id="contact" className={`section ${styles.section}`}>
      <div className="container">
        <div className={styles.inner}>

          <div className={styles.textBlock}>
            <p className="section-label">Contact</p>
            <h2 className={styles.heading}>Let's connect.</h2>
            <p className={styles.body}>
              I'm currently open to internship opportunities in marketing, financial
              analysis, business analysis, and product management. If you're working
              on something interesting or just want to connect — feel free to reach out.
            </p>
          </div>

          <div className={styles.linksBlock}>
            <a
              href="mailto:changyeonseung@gmail.com"
              className={styles.contactCard}
            >
              <span className={styles.cardIcon}>✉</span>
              <div>
                <p className={styles.cardLabel}>Email</p>
                <p className={styles.cardValue}>changyeonseung@gmail.com</p>
              </div>
              <span className={styles.cardArrow}>→</span>
            </a>

            <a
              href="https://www.linkedin.com/in/yeonseung-chang-6b7a283ba"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contactCard}
            >
              <span className={styles.cardIcon}>in</span>
              <div>
                <p className={styles.cardLabel}>LinkedIn</p>
                <p className={styles.cardValue}>Connect with me</p>
              </div>
              <span className={styles.cardArrow}>→</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  )
}

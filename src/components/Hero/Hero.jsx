import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={`container ${styles.content}`}>

        {/* Headline */}
        <h1 className={styles.headline}>
          Hi :) I'm<br />
          <span className={styles.name}>Yeonseung Chang</span>
        </h1>

        {/* Role */}
        <p className={styles.role}>
          Marketing &amp; Financial Analysis Student with Product Strategy Experience
        </p>

        {/* Subtitle */}
        <p className={styles.subtitle}>
          I combine market research, investment analysis, and user-centered product thinking<br className={styles.br} />
          to support business decisions and build go-to-market strategies.
        </p>

        {/* CTAs */}
        <div className={styles.ctas}>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-primary">View Resume</a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="btn-secondary">LinkedIn</a>
          <a href="#contact" className="btn-secondary">Contact Me</a>
        </div>

        {/* Scroll hint */}
        <div className={styles.scrollHint} aria-hidden="true">
          <span className={styles.scrollDot} />
        </div>
      </div>
    </section>
  )
}

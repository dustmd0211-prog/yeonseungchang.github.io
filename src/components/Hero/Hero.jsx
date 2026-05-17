import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={`container ${styles.content}`}>
        <div className={styles.inner}>

          {/* Left — text */}
          <div className={styles.textCol}>
            <h1 className={styles.headline}>
              Hi :) I'm<br />
              <span className={styles.name}>Yeonseung Chang</span>
            </h1>

            <p className={styles.role}>
              Marketing &amp; Financial Analysis
            </p>

            <p className={styles.subtitle}>
              I combine market research, investment analysis, and user-centered product thinking
              to support business decisions and build go-to-market strategies.
            </p>

            <div className={styles.ctas}>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="btn-primary">View Resume</a>
              <a href="https://www.linkedin.com/in/yeonseung-chang-6b7a283ba" target="_blank" rel="noopener noreferrer" className="btn-secondary">LinkedIn</a>
              <a href="#contact" className="btn-secondary">Contact Me</a>
            </div>
          </div>

          {/* Right — profile photo */}
          <div className={styles.photoCol}>
            <img
              src="/profile.jpg"
              alt="Yeonseung Chang"
              className={styles.photo}
            />
          </div>

        </div>

        <div className={styles.scrollHint} aria-hidden="true">
          <span className={styles.scrollDot} />
        </div>
      </div>
    </section>
  )
}

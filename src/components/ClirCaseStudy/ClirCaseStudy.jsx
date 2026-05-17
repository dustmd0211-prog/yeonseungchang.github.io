import styles from './ClirCaseStudy.module.css'

const meta = [
  { label: 'Type',   value: 'Product Strategy & GTM' },
  { label: 'Focus',  value: 'Consumer AI · Health Tech' },
  { label: 'Role',   value: 'Product Planner' },
  { label: 'Status', value: 'Concept / In Progress' },
]

const stats = [
  { value: '32M+', desc: 'Americans with diagnosed food allergies' },
  { value: '200K', desc: 'ER visits per year from allergic reactions to food' },
  { value: '78%',  desc: 'of allergy patients report anxiety while grocery shopping' },
]

const roles = [
  'Product planning and feature scoping',
  'Go-to-market strategy development',
  'User interviews and pain point analysis',
  'FDA & MFDS regulation research',
  'Competitive market positioning',
]

const strategy = [
  { label: 'Core Value Prop',  text: 'Instant, accurate, personalized allergy screening at the point of purchase' },
  { label: 'Target Segment',  text: 'Allergy patients, parents of children with allergies, immunocompromised individuals' },
  { label: 'GTM Phase 1',     text: 'Community-led growth via allergy forums, parent networks, and healthcare providers' },
  { label: 'GTM Phase 2',     text: 'B2B partnerships with grocery retailers and food brands for in-store integration' },
]

const process = [
  { step: '01', title: 'Problem Discovery',         body: 'Identified a critical gap — allergy sufferers lack a fast, reliable way to verify product safety at the point of purchase. Conducted interviews with allergy patients to validate the pain.' },
  { step: '02', title: 'Market & Regulation Research', body: 'Analyzed FDA and MFDS labeling requirements, studied existing allergen apps, and mapped the competitive landscape to find differentiation opportunities.' },
  { step: '03', title: 'Product Strategy',          body: 'Defined core features around barcode scanning and personalized allergy profiles. Prioritized safety accuracy over feature breadth to build trust as the #1 value proposition.' },
  { step: '04', title: 'Go-to-Market Planning',     body: 'Developed a phased GTM approach targeting allergy communities and parenting groups as early adopters, with partnerships with grocery chains as a growth lever.' },
]

function Placeholder({ label, ratio = '56.25%' }) {
  return (
    <div className={styles.placeholder} style={{ paddingBottom: ratio }}>
      <span className={styles.placeholderLabel}>{label}</span>
    </div>
  )
}

function Row({ label, children }) {
  return (
    <div className={styles.row}>
      <div className={styles.rowLabel}>
        <p className={styles.rowLabelText}>{label}</p>
      </div>
      <div className={styles.rowContent}>{children}</div>
    </div>
  )
}

export default function ClirCaseStudy() {
  return (
    <section id="clir" className={styles.caseStudy}>

      {/* ── Hero ── */}
      <div className={styles.heroWrap}>
        <div className="container">
          <a href="#projects" className={styles.backLink}>← Back to Projects</a>
          <p className={`section-label ${styles.heroLabel}`}>Case Study</p>
          <h1 className={styles.projectTitle}>Clir</h1>
          <p className={styles.tagline}>AI-powered allergy-safe shopping assistant</p>

          <div className={styles.metaBar}>
            {meta.map((m, i) => (
              <div key={m.label} className={styles.metaItem}>
                {i !== 0 && <span className={styles.metaSep} />}
                <p className={styles.metaLabel}>{m.label}</p>
                <p className={styles.metaValue}>{m.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Body ── */}
      <div className={`container ${styles.body}`}>

        {/* Overview */}
        <Row label="Overview">
          <p className={styles.bodyText}>
            Clir is a mobile application that allows users with allergies and dietary
            restrictions to instantly verify whether a product is safe to consume — simply
            by scanning a barcode. Users register their allergy profile once, and Clir
            handles the rest: cross-referencing ingredients against FDA and MFDS labeling
            data and surfacing a clear safe / unsafe result in seconds.
          </p>
          <p className={styles.bodyText}>
            The project sits at the intersection of consumer health, AI, and retail —
            addressing a problem that affects over 32 million Americans with food allergies
            and remains largely unsolved at the point of purchase.
          </p>
        </Row>

        <div className={styles.divider} />

        {/* Problem */}
        <Row label="Problem">
          <blockquote className={styles.quote}>
            "Allergy sufferers spend 2–5 minutes reading ingredient labels per product
            — and still make mistakes that send them to the ER."
          </blockquote>
          <p className={styles.bodyText}>
            Current solutions are fragmented. Label reading is slow and error-prone.
            Existing apps lack real-time barcode integration, personalized allergy profiles,
            and cross-border regulation coverage. The result: a daily friction point with
            real safety consequences.
          </p>
        </Row>

        <div className={styles.divider} />

        {/* User Insight */}
        <Row label="User Insight">
          <div className={styles.statsRow}>
            {stats.map(s => (
              <div key={s.value} className={styles.statCard}>
                <p className={styles.statValue}>{s.value}</p>
                <p className={styles.statDesc}>{s.desc}</p>
              </div>
            ))}
          </div>
          <p className={styles.bodyText} style={{ marginTop: '1.75rem' }}>
            User interviews revealed that the core emotional driver is not convenience —
            it is <strong>peace of mind</strong>. Allergy shoppers are not looking for a
            faster checkout; they want to feel confident that what they buy will not hurt
            them or their family.
          </p>
        </Row>

        <div className={styles.divider} />

        {/* Research */}
        <Row label="Research">
          <p className={styles.bodyText}>
            I conducted a cross-regulatory analysis of FDA (U.S.) and MFDS (South Korea)
            allergen labeling standards to understand the data infrastructure needed to
            power accurate, real-time ingredient checks. Key findings:
          </p>
          <ul className={styles.list}>
            <li>Both agencies mandate labeling of the top allergens, but definitions and thresholds differ — requiring country-specific logic in the AI model.</li>
            <li>Existing barcode databases (Open Food Facts, USDA FoodData) cover broad SKU ranges but have inconsistent allergen data quality.</li>
            <li>Competitive apps (e.g., Yummly, Fig) focus on diet preference, not allergy safety — leaving a clear positioning gap for a safety-first product.</li>
          </ul>
          <div style={{ marginTop: '1.5rem' }}>
            <Placeholder label="Competitive Landscape Map" ratio="40%" />
          </div>
        </Row>

        <div className={styles.divider} />

        {/* Product Strategy */}
        <Row label="Product Strategy">
          <p className={styles.bodyText}>
            The core strategic decision was to position Clir as a{' '}
            <strong>safety tool, not a diet app</strong>. This distinction shapes every
            product decision:
          </p>
          <div className={styles.strategyGrid}>
            {strategy.map(s => (
              <div key={s.label} className={styles.strategyCard}>
                <p className={styles.strategyLabel}>{s.label}</p>
                <p className={styles.strategyText}>{s.text}</p>
              </div>
            ))}
          </div>
        </Row>

        <div className={styles.divider} />

        {/* My Role */}
        <Row label="My Role">
          <ul className={styles.roleList}>
            {roles.map(r => (
              <li key={r} className={styles.roleItem}>
                <span className={styles.roleDot} aria-hidden="true" />
                {r}
              </li>
            ))}
          </ul>
        </Row>

        <div className={styles.divider} />

        {/* Process */}
        <Row label="Process">
          <div className={styles.processGrid}>
            {process.map(p => (
              <div key={p.step} className={styles.processCard}>
                <p className={styles.processStep}>{p.step}</p>
                <p className={styles.processTitle}>{p.title}</p>
                <p className={styles.processBody}>{p.body}</p>
              </div>
            ))}
          </div>
        </Row>

        <div className={styles.divider} />

        {/* Key Learning */}
        <Row label="Key Learning">
          <div className={styles.learningBox}>
            <p className={styles.bodyText}>
              Building Clir reinforced that the best product strategy starts with a
              deeply understood user problem — not a technology. The AI component of Clir
              is only valuable because the underlying problem (fast, reliable allergen
              screening) is both real and underserved.
            </p>
            <p className={styles.bodyText} style={{ marginTop: '1rem' }}>
              I also learned that regulatory research is a competitive moat in
              health-adjacent products. Understanding FDA and MFDS requirements early
              prevented costly pivots later and became a key element of our pitch to
              potential B2B partners.
            </p>
          </div>
        </Row>

      </div>
    </section>
  )
}

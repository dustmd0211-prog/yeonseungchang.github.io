import { Row, Divider, Placeholder } from '../components/ProjectPage/ProjectPage'
import styles from '../components/ProjectPage/ProjectPage.module.css'

const stats = [
  { value: '70%',  desc: 'of couples report daily scheduling friction as a source of recurring conflict' },
  { value: '3.2B', desc: 'global relationship app market projected by 2027' },
  { value: 'Gen Z', desc: 'largest growing segment seeking emotionally intelligent digital tools' },
]

const roles = [
  'Market research — Korean and U.S. couple app landscape',
  'User persona development and behavioral mapping',
  'Marketing strategy and messaging framework',
  'Positioning strategy vs. existing competitors',
  'Acquisition channel research and GTM planning',
]

const strategy = [
  { label: 'Core Value Prop',  text: 'Reduce daily coordination friction between couples through shared AI-assisted planning' },
  { label: 'Emotional UX',    text: 'Design interactions that feel warm and relational, not transactional — the app should feel like a partner, not a tool' },
  { label: 'GTM Phase 1',     text: 'Organic community growth via relationship-focused platforms (Reddit, TikTok couples content, Korean KakaoTalk communities)' },
  { label: 'GTM Phase 2',     text: 'Partnership with dating apps (Bumble, Hinge) to serve established couples transitioning out of early dating stages' },
]

const process = [
  { step: '01', title: 'Market Landscape Analysis',  body: 'Mapped the existing couple and calendar app ecosystem. Identified that most apps focus on scheduling efficiency — not on emotional connection or communication quality.' },
  { step: '02', title: 'Persona Development',        body: 'Defined two core user archetypes: the Organized Partner (driven by logistics) and the Emotional Partner (driven by connection). Both need to be served simultaneously.' },
  { step: '03', title: 'Korea vs. U.S. Market Gap',  body: 'Analyzed behavioral differences between Korean couples (high KakaoTalk penetration, gift culture, anniversaries) and U.S. couples (privacy-first, utility-first). Positioning language differs significantly.' },
  { step: '04', title: 'Positioning & Messaging',    body: 'Crafted positioning around "the calendar that cares" — differentiating Plink from productivity tools by leading with emotional benefit rather than feature count.' },
]

export default function PlinkContent() {
  return (
    <>
      <Row label="Overview">
        <p className={styles.bodyText}>
          Plink is an AI-powered shared calendar and planning app built specifically
          for couples. Unlike general-purpose scheduling tools, Plink is designed around
          the rhythms of relationships — shared milestones, spontaneous plans, meaningful
          dates, and the small everyday decisions that shape how two people spend their time
          together.
        </p>
        <p className={styles.bodyText}>
          The project was approached as a consumer product strategy exercise, focused on
          understanding why existing tools fail couples emotionally — and what a better
          alternative would need to do differently.
        </p>
        <div style={{ marginTop: '1.5rem' }}>
          <Placeholder label="App Overview / Hero Mockup" ratio="40%" />
        </div>
      </Row>

      <Divider />

      <Row label="Problem">
        <blockquote className={styles.quote}>
          "We don't have big relationship problems. We just never agree on what to do
          this weekend — and somehow that turns into an argument."
        </blockquote>
        <p className={styles.bodyText}>
          Most couples don't struggle with major relationship crises. They struggle with
          <strong> micro-coordination failures</strong> — mismatched expectations about
          plans, forgotten anniversaries, last-minute schedule conflicts, and the emotional
          weight of always being the one who remembers.
        </p>
        <p className={styles.bodyText}>
          Current solutions treat this as a productivity problem. Google Calendar lets
          you share events. KakaoTalk lets you message. But none of these tools are
          designed to make the coordination process feel good — to reduce the friction
          without removing the warmth.
        </p>
      </Row>

      <Divider />

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
          Through user research and behavioral analysis, a consistent pattern emerged:
          couples want shared digital spaces that feel <strong>personal and warm</strong>,
          not efficient and sterile. The emotional tone of the tool matters as much as
          its functionality.
        </p>
        <p className={styles.bodyText}>
          Two user archetypes consistently appeared: the <strong>Organized Partner</strong>
          — who drives logistics but feels unappreciated — and the{' '}
          <strong>Emotional Partner</strong> — who wants spontaneity but struggles with
          last-minute coordination. Plink needs to serve both simultaneously.
        </p>
      </Row>

      <Divider />

      <Row label="Market Research">
        <p className={styles.bodyText}>
          The couple app market is fragmented. Most existing players fall into one of
          two categories: <strong>productivity tools</strong> (shared calendars, task
          managers) or <strong>sentiment tools</strong> (love journals, anniversary
          counters). No dominant product effectively bridges both.
        </p>
        <ul className={styles.list}>
          <li><strong>Couple (app)</strong> — strong in sentiment features, weak in scheduling and AI integration.</li>
          <li><strong>Between</strong> — popular in Korea; focuses on messaging and milestones, lacks planning depth.</li>
          <li><strong>Google Calendar (shared)</strong> — functional but emotionally cold; not built for relationships.</li>
          <li><strong>Notion (shared docs)</strong> — used by some couples but requires too much setup; not accessible to general users.</li>
        </ul>

        <p className={styles.bodyText} style={{ marginTop: '1.25rem' }}>
          <strong>Korea vs. U.S. market differences</strong> were significant. Korean
          couple culture places high value on anniversaries (100-day milestones, 1-year
          anniversaries), gift-giving occasions, and shared social media presence.
          U.S. couples tend to prioritize utility, privacy, and individual autonomy within
          shared plans. Messaging and positioning must be localized accordingly.
        </p>
        <div style={{ marginTop: '1.5rem' }}>
          <Placeholder label="Competitive Landscape Map" ratio="36%" />
        </div>
      </Row>

      <Divider />

      <Row label="Product Strategy">
        <p className={styles.bodyText}>
          The strategic framing for Plink is <strong>"the calendar that cares."</strong>{' '}
          Rather than competing on features (more calendar views, more integrations),
          Plink wins by making the planning experience emotionally rewarding:
        </p>
        <div className={styles.strategyGrid}>
          {strategy.map(s => (
            <div key={s.label} className={styles.strategyCard}>
              <p className={styles.strategyLabel}>{s.label}</p>
              <p className={styles.strategyText}>{s.text}</p>
            </div>
          ))}
        </div>
        <p className={styles.bodyText} style={{ marginTop: '1.5rem' }}>
          AI features — smart reminders, gift nudges, mood-aware suggestions — are
          positioned not as tech novelties but as tools that reduce the mental load of
          relationship maintenance. The goal is for users to feel like Plink is{' '}
          <strong>looking out for them</strong>, not just tracking their schedule.
        </p>
      </Row>

      <Divider />

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

      <Divider />

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

      <Divider />

      <Row label="Key Learning">
        <div className={styles.learningBox}>
          <p className={styles.bodyText}>
            The biggest lesson from Plink was that <strong>emotional UX is a product
            strategy decision, not a design decision.</strong> The choice to lead with
            warmth over utility shapes everything — the feature set, the copy, the
            onboarding flow, the marketing channels, and the monetization model.
          </p>
          <p className={styles.bodyText} style={{ marginTop: '1rem' }}>
            I also learned that market research must account for cultural context.
            A product positioning that works in Korea — where couple culture is highly
            ritualized and publicly expressed — may need to be substantially reframed for
            U.S. audiences, who favor individual autonomy and practical benefit even in
            relationship tools.
          </p>
          <p className={styles.bodyText} style={{ marginTop: '1rem' }}>
            Lastly, the competitive analysis revealed a clear whitespace: no existing app
            effectively combines <strong>emotional intelligence with practical
            scheduling</strong>. That gap is Plink's opportunity — and its greatest
            product design challenge.
          </p>
        </div>
      </Row>
    </>
  )
}

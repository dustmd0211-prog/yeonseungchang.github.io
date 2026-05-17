import { Row, Divider, Placeholder } from '../components/ProjectPage/ProjectPage'
import styles from '../components/ProjectPage/ProjectPage.module.css'

const stats = [
  { value: '39%',  desc: 'of Korean households are single-person — the fastest-growing household type' },
  { value: '↓42%', desc: 'decline in traditional market foot traffic over the past decade' },
  { value: '2x',   desc: 'higher per-unit cost for solo buyers purchasing traditional market staples vs. families' },
]

const roles = [
  'Team leader — coordinated 4-member cross-functional team',
  'Market opportunity analysis and market sizing',
  'Business model design and two-sided platform strategy',
  'Competitive positioning vs. existing delivery platforms',
  'Revenue model and pricing strategy development',
  'Business plan development and national finals presentation',
]

const businessModel = [
  { label: 'Consumer Side',    text: 'Single-person households buy into group orders to access traditional market goods at family-sized prices without overbuying' },
  { label: 'Seller Side',      text: 'Traditional market vendors gain digital access to a younger demographic and move inventory more efficiently with predictable demand' },
  { label: 'Revenue Model',    text: 'Platform takes a small transaction fee per fulfilled group order; premium merchant listings available for high-volume sellers' },
  { label: 'Network Effect',   text: 'More buyers per order reduces per-unit cost → attracts more buyers → more vendors join → stronger product selection → repeat cycle' },
]

const gtm = [
  { step: '01', title: 'Hyperlocal Launch',       body: 'Start with one traditional market district in Seoul. Build dense supply and demand within a single geographic cluster before expanding — proven by DoorDash\'s city-by-city model.' },
  { step: '02', title: 'Community-Led Acquisition', body: 'Target apartment complex community boards, local SNS groups, and neighborhood KakaoTalk channels where single-person households already coordinate shared purchases informally.' },
  { step: '03', title: 'Merchant Onboarding',     body: 'Onboard vendors with zero upfront cost. Revenue share only activates on completed group orders — reducing adoption friction for sellers unfamiliar with digital platforms.' },
  { step: '04', title: 'Pricing Validation',      body: 'Piloted pricing tiers using willingness-to-pay research. Found that consumers accepted a 5–8% platform fee when framed as "group coordination cost" rather than a service charge.' },
]

export default function SynergyContent() {
  return (
    <>
      <Row label="Overview">
        <p className={styles.bodyText}>
          Synergy was a national entrepreneurship competition project in which our team
          developed a <strong>group-purchasing platform</strong> designed to bridge the
          gap between South Korea's declining traditional markets and its rapidly growing
          single-person household demographic.
        </p>
        <p className={styles.bodyText}>
          As team leader, I led the end-to-end business strategy — from market opportunity
          analysis and business model design to pricing strategy and the national finals
          presentation. The project advanced to the national finals of the competition.
        </p>
        <div style={{ marginTop: '1.5rem' }}>
          <Placeholder label="Platform Overview / Business Model Diagram" ratio="40%" />
        </div>
      </Row>

      <Divider />

      <Row label="Market Problem">
        <blockquote className={styles.quote}>
          "Traditional markets offer fresher produce at lower prices — but they sell in
          quantities that single-person households simply cannot use."
        </blockquote>
        <p className={styles.bodyText}>
          South Korea's traditional markets (재래시장) are facing an existential crisis.
          Foot traffic has fallen sharply as consumers migrate to large supermarkets and
          quick-commerce delivery apps. Yet many vendors still offer superior product
          quality — fresh produce, artisan goods, local specialties — at prices that
          should be competitive.
        </p>
        <p className={styles.bodyText}>
          The core mismatch is <strong>quantity</strong>. Traditional vendors typically
          sell in bulk — designed for multi-person family households. Single-person buyers
          either overbuy (leading to waste) or avoid the market entirely. Neither outcome
          serves the vendor or the consumer.
        </p>
        <div style={{ marginTop: '1.5rem' }}>
          <Placeholder label="Market Decline Chart / Traditional Market Foot Traffic" ratio="34%" />
        </div>
      </Row>

      <Divider />

      <Row label="User & Market Insight">
        <div className={styles.statsRow}>
          {stats.map(s => (
            <div key={s.value} className={styles.statCard}>
              <p className={styles.statValue}>{s.value}</p>
              <p className={styles.statDesc}>{s.desc}</p>
            </div>
          ))}
        </div>
        <p className={styles.bodyText} style={{ marginTop: '1.75rem' }}>
          The single-person household segment is the fastest-growing and most
          underserved demographic in Korean consumer commerce. These consumers are
          digitally native, convenience-oriented, and cost-conscious — but they are
          systematically excluded from the economics of traditional market purchasing,
          which is sized for families.
        </p>
        <p className={styles.bodyText}>
          Competitive analysis showed that existing delivery platforms (Coupang, Baemin)
          serve convenience but not <strong>community sourcing</strong>. No platform had
          targeted the traditional market revitalization angle — creating a clear whitespace.
        </p>
      </Row>

      <Divider />

      <Row label="Business Model">
        <p className={styles.bodyText}>
          The Synergy platform operates as a <strong>two-sided marketplace</strong>:
          aggregating demand from single-person households and connecting it to traditional
          market vendors through group-purchase orders. Both sides benefit only when a
          group order is fulfilled — aligning incentives across the platform.
        </p>
        <div className={styles.strategyGrid}>
          {businessModel.map(b => (
            <div key={b.label} className={styles.strategyCard}>
              <p className={styles.strategyLabel}>{b.label}</p>
              <p className={styles.strategyText}>{b.text}</p>
            </div>
          ))}
        </div>
        <div style={{ marginTop: '1.5rem' }}>
          <Placeholder label="Two-Sided Platform Flow / User Journey Diagram" ratio="36%" />
        </div>
      </Row>

      <Divider />

      <Row label="Go-to-Market Strategy">
        <p className={styles.bodyText}>
          The GTM strategy followed a <strong>hyperlocal-first, community-led</strong>
          approach — prioritizing depth over breadth in the early stage to build
          the density required for group orders to fill reliably.
        </p>
        <div className={styles.processGrid}>
          {gtm.map(g => (
            <div key={g.step} className={styles.processCard}>
              <p className={styles.processStep}>{g.step}</p>
              <p className={styles.processTitle}>{g.title}</p>
              <p className={styles.processBody}>{g.body}</p>
            </div>
          ))}
        </div>
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

      <Row label="Outcome">
        <div className={styles.statCard} style={{ maxWidth: '480px' }}>
          <p className={styles.statValue}>National Finals</p>
          <p className={styles.statDesc}>
            The Synergy project advanced to the national finals of the Synergy Joint
            Entrepreneurship Conference — competing against university teams from
            across South Korea.
          </p>
        </div>
        <p className={styles.bodyText} style={{ marginTop: '1.25rem' }}>
          The judges recognized the market research depth, the clarity of the two-sided
          platform model, and the realism of the pricing and GTM strategy. The project
          validated that traditional market revitalization is a commercially viable
          problem space when approached with the right business architecture.
        </p>
      </Row>

      <Divider />

      <Row label="Key Learning">
        <div className={styles.learningBox}>
          <p className={styles.bodyText}>
            Building Synergy taught me that <strong>two-sided platform businesses
            require a "which side first" decision</strong> — and getting it wrong
            stalls growth permanently. We chose to seed the consumer side first
            (easier to recruit, faster feedback loops) and used committed consumer
            demand as leverage to onboard skeptical vendors.
          </p>
          <p className={styles.bodyText} style={{ marginTop: '1rem' }}>
            Pricing strategy was more nuanced than expected. The same fee, framed
            differently, produced dramatically different consumer acceptance rates.
            This reinforced that <strong>pricing is a communication problem as much
            as a math problem</strong> — how you describe the cost matters as much
            as the number itself.
          </p>
          <p className={styles.bodyText} style={{ marginTop: '1rem' }}>
            Finally, I learned that market validation for local commerce requires
            ground-level research — not just data. Visiting traditional markets,
            speaking with vendors, and observing real purchasing behavior revealed
            insights that no secondary research source could provide.
          </p>
        </div>
      </Row>
    </>
  )
}

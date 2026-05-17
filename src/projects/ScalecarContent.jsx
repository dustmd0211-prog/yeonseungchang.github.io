import { Row, Divider, Placeholder } from '../components/ProjectPage/ProjectPage'
import styles from '../components/ProjectPage/ProjectPage.module.css'

const stats = [
  { value: 'National', desc: 'Finals held in Busan — competing against university teams from across South Korea' },
  { value: '5+',       desc: 'Distinct driving scenarios including roundabouts, tunnels, parking, and dynamic routing' },
  { value: 'Real-Time', desc: 'Decision-making required under live competition conditions with no retry options' },
]

const roles = [
  'Navigation strategy analysis and course requirement breakdown',
  'Competition scenario research and preparation planning',
  'Team coordination across technical and operational workstreams',
  'Timeline management leading up to and during national finals',
  'Operational support and real-time coordination during competition day',
]

const challenges = [
  { label: 'Roundabout Navigation',  text: 'Required precise entry and exit timing logic — one of the highest-failure scenarios in the competition format' },
  { label: 'Tunnel Environments',    text: 'Loss of GPS signal inside tunnels demanded pre-mapped fallback routing and sensor-dependent navigation' },
  { label: 'Dynamic Parking Zones',  text: 'Parking scenarios introduced unpredictable spatial constraints that varied between qualifying rounds' },
  { label: 'Real-Time Route Handling', text: 'Course conditions changed between runs — requiring the team to adapt strategy on-site rather than rely solely on pre-planned routes' },
]

const process = [
  { step: '01', title: 'Course Requirement Analysis',  body: 'Broke down each competition scenario into discrete strategic requirements. Identified the highest-risk segments (roundabouts, tunnels) and allocated preparation time accordingly.' },
  { step: '02', title: 'Navigation Strategy Design',   body: 'Analyzed course maps and scenario rules to define optimal approach paths, speed profiles, and contingency logic for each driving zone.' },
  { step: '03', title: 'Preparation & Rehearsal',      body: 'Coordinated team rehearsal sessions against simulated course conditions. Built a shared preparation timeline to ensure all technical and operational tasks were sequenced correctly before competition day.' },
  { step: '04', title: 'Finals Operations (Busan)',    body: 'Managed real-time coordination during the national finals. Monitored performance between runs, supported rapid strategy adjustments, and kept team focus under competitive pressure.' },
]

export default function ScalecarContent() {
  return (
    <>
      <Row label="Overview">
        <p className={styles.bodyText}>
          Scalecar was a national autonomous driving competition in which our team
          designed and operated a scale-model vehicle through a series of complex
          real-world driving scenarios — including roundabout navigation, tunnel
          traversal, dynamic parking, and real-time route adaptation.
        </p>
        <p className={styles.bodyText}>
          My contribution was not in hardware engineering but in{' '}
          <strong>strategy, preparation, and operations</strong> — analyzing
          competition requirements, coordinating the team across workstreams, and
          managing execution during the national finals in Busan.
        </p>
        <div style={{ marginTop: '1.5rem' }}>
          <Placeholder label="Competition Overview / Vehicle & Course Photo" ratio="40%" />
        </div>
      </Row>

      <Divider />

      <Row label="Competition Challenge">
        <blockquote className={styles.quote}>
          "Autonomous driving competitions test not just technical performance — they
          test how well a team can prepare for the unexpected."
        </blockquote>
        <p className={styles.bodyText}>
          The Scalecar competition format required teams to navigate a scale-model
          vehicle through a multi-stage course replicating real urban driving conditions.
          Each stage introduced a distinct set of constraints — and failure in any
          single segment could disqualify the run.
        </p>
        <div className={styles.strategyGrid}>
          {challenges.map(c => (
            <div key={c.label} className={styles.strategyCard}>
              <p className={styles.strategyLabel}>{c.label}</p>
              <p className={styles.strategyText}>{c.text}</p>
            </div>
          ))}
        </div>
        <div style={{ marginTop: '1.5rem' }}>
          <Placeholder label="Course Map / Scenario Breakdown Diagram" ratio="36%" />
        </div>
      </Row>

      <Divider />

      <Row label="Strategy & Analysis">
        <div className={styles.statsRow}>
          {stats.map(s => (
            <div key={s.value} className={styles.statCard}>
              <p className={styles.statValue}>{s.value}</p>
              <p className={styles.statDesc}>{s.desc}</p>
            </div>
          ))}
        </div>
        <p className={styles.bodyText} style={{ marginTop: '1.75rem' }}>
          The strategic approach was built around <strong>risk prioritization</strong>.
          Rather than preparing equally for all scenarios, we identified the
          highest-failure-rate segments — roundabouts and tunnel navigation — and
          front-loaded preparation time toward those areas.
        </p>
        <p className={styles.bodyText}>
          Course requirement analysis revealed that the competition rewarded
          <strong> consistency over speed</strong>. A vehicle that completed all
          segments reliably outscored a faster vehicle that failed any single
          checkpoint. This shaped our entire preparation philosophy: minimize failure
          modes before optimizing performance.
        </p>
      </Row>

      <Divider />

      <Row label="Team Coordination">
        <p className={styles.bodyText}>
          Coordinating a cross-functional team — spanning hardware configuration,
          software tuning, and operational logistics — required structured
          communication and clear ownership of each workstream.
        </p>
        <div className={styles.processGrid}>
          {process.map(p => (
            <div key={p.step} className={styles.processCard}>
              <p className={styles.processStep}>{p.step}</p>
              <p className={styles.processTitle}>{p.title}</p>
              <p className={styles.processBody}>{p.body}</p>
            </div>
          ))}
        </div>
        <div style={{ marginTop: '1.5rem' }}>
          <Placeholder label="Team Preparation Timeline / Workflow" ratio="30%" />
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
          <p className={styles.statValue}>National Finals — Busan</p>
          <p className={styles.statDesc}>
            The team advanced to the national finals of the Scalecar Autonomous
            Driving Competition, competing against university teams from across
            South Korea at the national venue in Busan.
          </p>
        </div>
        <p className={styles.bodyText} style={{ marginTop: '1.25rem' }}>
          Advancing to the national finals validated the team's preparation strategy.
          The structured approach to scenario analysis and the discipline of the
          preparation timeline contributed directly to qualifying past the regional rounds.
        </p>
      </Row>

      <Divider />

      <Row label="Key Learning">
        <div className={styles.learningBox}>
          <p className={styles.bodyText}>
            Scalecar reinforced that <strong>operational excellence is a competitive
            advantage</strong> — not just in business, but in any high-stakes, time-constrained
            environment. The teams that performed most consistently were not necessarily
            the ones with the most sophisticated technology; they were the ones with the
            most disciplined preparation and clearest decision-making under pressure.
          </p>
          <p className={styles.bodyText} style={{ marginTop: '1rem' }}>
            I also learned the value of <strong>risk-weighted preparation</strong>. In
            complex, multi-stage challenges, equal effort across all components is
            rarely the right strategy. Identifying the highest-failure scenarios and
            allocating disproportionate preparation time toward them is a more effective
            use of limited resources — a principle that applies directly to product
            launches, go-to-market planning, and business operations.
          </p>
          <p className={styles.bodyText} style={{ marginTop: '1rem' }}>
            Finally, managing a technical team in a competitive environment taught me
            how to keep cross-functional groups aligned when time pressure is high and
            stakes are real — a skill I apply directly to team leadership and project
            management contexts.
          </p>
        </div>
      </Row>
    </>
  )
}

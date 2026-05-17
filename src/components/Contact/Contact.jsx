import { useState } from 'react'
import styles from './Contact.module.css'

const socialLinks = [
  { icon: '✉',  label: 'your@email.com',              href: 'mailto:your@email.com' },
  { icon: 'in', label: 'linkedin.com/in/your-profile', href: 'https://linkedin.com/in/your-profile' },
  { icon: '⌥',  label: 'github.com/dustmd0211-prog',  href: 'https://github.com/dustmd0211-prog' },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleChange = e =>
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = e => {
    e.preventDefault()
    // TODO: Connect to Formspree or EmailJS for real email delivery
    alert('Thanks! Connect a form service (e.g. Formspree) to receive messages.')
  }

  return (
    <section id="contact" className="section">
      <div className="container">
        <div className={styles.inner}>

          {/* Left — info */}
          <div>
            <p className="section-label">Contact</p>
            <h2 className="section-title">Let's connect</h2>
            <p className={styles.text}>
              I'm open to internship opportunities, project collaborations, and
              conversations about business, marketing, and product. Feel free to reach out.
            </p>

            <div className={styles.links}>
              {socialLinks.map(({ icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className={styles.contactLink}
                >
                  <span className={styles.icon}>{icon}</span>
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.field}>
              <label className={styles.label} htmlFor="name">Name</label>
              <input
                id="name" name="name" type="text"
                className={styles.input}
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className={styles.field}>
              <label className={styles.label} htmlFor="email">Email</label>
              <input
                id="email" name="email" type="email"
                className={styles.input}
                placeholder="your@email.com"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className={styles.field}>
              <label className={styles.label} htmlFor="message">Message</label>
              <textarea
                id="message" name="message"
                className={`${styles.input} ${styles.textarea}`}
                placeholder="Tell me about the opportunity..."
                rows={5}
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className={`btn-primary ${styles.submit}`}>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

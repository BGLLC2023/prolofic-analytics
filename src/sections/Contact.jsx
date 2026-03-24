import { useState } from 'react'
import './Contact.css'

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = e => {
    e.preventDefault()
    setSent(true)
    setForm({ name: '', email: '', subject: '', message: '' })
  }

  return (
    <section id="contact" className="contact">
      <div className="container">
        <span className="section-tag center">// let&apos;s connect</span>
        <h2 className="section-title center">Start a <span className="accent">Project</span></h2>
        <p className="contact-sub">Ready to turn your data into your biggest competitive advantage?</p>

        <div className="contact-grid">
          <div className="contact-info">
            <div className="contact-item">
              <div className="contact-icon">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M3 8l7.9 5.3a2 2 0 002.2 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
              <div>
                <span className="contact-label">Email</span>
                <span className="contact-value">hello@prolificad.com</span>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M12 2C8.1 2 5 5.1 5 9c0 5.2 7 13 7 13s7-7.8 7-13c0-3.9-3.1-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" stroke="currentColor" strokeWidth="1.5"/>
                </svg>
              </div>
              <div>
                <span className="contact-label">Location</span>
                <span className="contact-value">Available Remotely</span>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">
                <svg viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </div>
              <div>
                <span className="contact-label">Response Time</span>
                <span className="contact-value">Within 24 hours</span>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input id="name" name="name" type="text" placeholder="Your name" value={form.name} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" placeholder="your@email.com" value={form.email} onChange={handleChange} required />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input id="subject" name="subject" type="text" placeholder="Project type or question" value={form.subject} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows={5} placeholder="Tell me about your data challenge..." value={form.message} onChange={handleChange} required />
            </div>
            <button type="submit" className="btn btn-primary full">
              <span>{sent ? 'Message Sent!' : 'Send Message'}</span>
              <svg viewBox="0 0 24 24" fill="none" width="18" height="18">
                <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            {sent && <p className="form-success">Thanks! I&apos;ll be in touch soon.</p>}
          </form>
        </div>
      </div>
    </section>
  )
}

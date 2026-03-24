import './Footer.css'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="footer-inner">
        <span className="footer-logo">
          <span className="bracket">&lt;</span>PAD<span className="bracket">/&gt;</span>
        </span>
        <p className="footer-copy">
          © {year} Prolific Analytics &amp; Development. Built with data in mind.
        </p>
        <div className="footer-links">
          {['hero', 'skills', 'services', 'contact'].map(id => (
            <a
              key={id}
              href={`#${id}`}
              onClick={e => {
                e.preventDefault()
                document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              {id === 'hero' ? 'Home' : id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}

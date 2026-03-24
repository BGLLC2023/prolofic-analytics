import './Services.css'

const services = [
  {
    num: '01',
    title: 'Data Analysis',
    desc: 'Deep-dive exploration of your data to uncover trends, outliers, and actionable patterns using Python and SQL.',
    icon: (
      <svg viewBox="0 0 40 40" fill="none">
        <circle cx="20" cy="20" r="14" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M14 20l4 4 8-8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    num: '02',
    title: 'Dashboard Design',
    desc: 'Intuitive, real-time Tableau dashboards that make complex data instantly understandable for any audience.',
    icon: (
      <svg viewBox="0 0 40 40" fill="none">
        <rect x="6" y="6" width="28" height="28" rx="3" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M12 26l6-8 5 6 4-5 5 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Database Engineering',
    desc: 'Schema design, query optimization, indexing strategies, and ETL pipelines for scalable data infrastructure.',
    icon: (
      <svg viewBox="0 0 40 40" fill="none">
        <ellipse cx="20" cy="12" rx="12" ry="5" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M8 12v8c0 2.8 5.4 5 12 5s12-2.2 12-5V12" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M8 20v8c0 2.8 5.4 5 12 5s12-2.2 12-5V20" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    num: '04',
    title: 'Predictive Analytics',
    desc: 'Forecasting models and statistical analysis that give your business the ability to plan ahead with confidence.',
    icon: (
      <svg viewBox="0 0 40 40" fill="none">
        <path d="M8 32l8-12 6 8 5-6 5 4 6-10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M34 14l-6 1 1-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    num: '05',
    title: 'Reporting Automation',
    desc: 'Eliminate manual reporting with Python-powered scripts that generate, format, and distribute reports automatically.',
    icon: (
      <svg viewBox="0 0 40 40" fill="none">
        <path d="M10 20h4l4-10 4 20 4-14 4 8 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    num: '06',
    title: 'Data Consulting',
    desc: 'Strategic guidance on data architecture, tool selection, and analytics roadmap for teams at any stage.',
    icon: (
      <svg viewBox="0 0 40 40" fill="none">
        <rect x="6" y="14" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="22" y="14" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M18 20h4M20 8v6M20 26v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
]

export default function Services() {
  return (
    <section id="services" className="services">
      <div className="container">
        <span className="section-tag center">// what i do</span>
        <h2 className="section-title center">Services <span className="accent">Offered</span></h2>
        <div className="services-grid">
          {services.map(s => (
            <div key={s.num} className="service-card">
              <span className="service-num">{s.num}</span>
              <div className="service-icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

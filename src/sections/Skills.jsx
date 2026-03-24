import { useEffect, useRef, useState } from 'react'
import './Skills.css'

const skills = [
  {
    id: 'sql',
    title: 'SQL',
    pct: 92,
    desc: 'Advanced querying, database design, stored procedures, performance tuning, and complex joins across relational databases.',
    tags: ['PostgreSQL', 'MySQL', 'BigQuery'],
    icon: (
      <svg viewBox="0 0 60 60" fill="none">
        <ellipse cx="30" cy="15" rx="22" ry="8" stroke="currentColor" strokeWidth="2"/>
        <path d="M8 15v15c0 4.4 9.8 8 22 8s22-3.6 22-8V15" stroke="currentColor" strokeWidth="2"/>
        <path d="M8 30v15c0 4.4 9.8 8 22 8s22-3.6 22-8V30" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
  },
  {
    id: 'python',
    title: 'Python',
    pct: 95,
    desc: 'Data wrangling with Pandas, statistical modeling, machine learning with Scikit-learn, and workflow automation.',
    tags: ['Pandas', 'NumPy', 'Scikit-learn'],
    featured: true,
    icon: (
      <svg viewBox="0 0 60 60" fill="none">
        <path d="M30 6c-8 0-13 3-13 8v6h13v2H12c-5 0-9 4-9 12s4 12 9 12h4v-7c0-5 4-9 9-9h12c4 0 7-3 7-7V14c0-4-5-8-14-8zm-2 6a2 2 0 110 4 2 2 0 010-4z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
        <path d="M30 54c8 0 13-3 13-8v-6H30v-2h18c5 0 9-4 9-12s-4-12-9-12h-4v7c0 5-4 9-9 9H23c-4 0-7 3-7 7v10c0 4 5 8 14 8zm2-6a2 2 0 110-4 2 2 0 010 4z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    id: 'tableau',
    title: 'Tableau',
    pct: 88,
    desc: 'Interactive dashboards, LOD expressions, data blending, and storytelling through compelling visual analytics.',
    tags: ['Dashboards', 'LOD', 'Storytelling'],
    icon: (
      <svg viewBox="0 0 60 60" fill="none">
        <rect x="8" y="28" width="8" height="20" rx="1" stroke="currentColor" strokeWidth="2"/>
        <rect x="22" y="18" width="8" height="30" rx="1" stroke="currentColor" strokeWidth="2"/>
        <rect x="36" y="10" width="8" height="38" rx="1" stroke="currentColor" strokeWidth="2"/>
        <path d="M8 20L22 14L36 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
]

function SkillCard({ skill }) {
  const barRef = useRef(null)
  const [animated, setAnimated] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setAnimated(true); obs.disconnect() } },
      { threshold: 0.3 }
    )
    if (barRef.current) obs.observe(barRef.current)
    return () => obs.disconnect()
  }, [])

  return (
    <div className={`skill-card ${skill.featured ? 'featured' : ''}`}>
      {skill.featured && <span className="skill-badge">PRIMARY</span>}
      <div className="skill-icon">{skill.icon}</div>
      <h3 className="skill-title">{skill.title}</h3>
      <p className="skill-desc">{skill.desc}</p>
      <div className="skill-bar-row" ref={barRef}>
        <div className="skill-bar">
          <div
            className="skill-fill"
            style={{ width: animated ? `${skill.pct}%` : '0%' }}
          />
        </div>
        <span className="skill-pct">{skill.pct}%</span>
      </div>
      <div className="skill-tags">
        {skill.tags.map(t => <span key={t}>{t}</span>)}
      </div>
    </div>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <span className="section-tag center">// tech stack</span>
        <h2 className="section-title center">Core <span className="accent">Skills</span></h2>
        <div className="skills-grid">
          {skills.map(s => <SkillCard key={s.id} skill={s} />)}
        </div>
      </div>
    </section>
  )
}

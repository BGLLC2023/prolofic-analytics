import './About.css'

export default function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-text">
            <span className="section-tag">// about</span>
            <h2 className="section-title">
              Turning Data Into <span className="accent">Decisions</span>
            </h2>
            <p className="about-body">
              Prolific Analytics &amp; Development specializes in extracting meaningful
              intelligence from complex datasets. We combine technical precision with
              strategic thinking to deliver analytics solutions that move the needle.
            </p>
            <p className="about-body">
              From database architecture to interactive dashboards, every deliverable
              is built with clarity, performance, and impact in mind.
            </p>
            <div className="about-tags">
              {['Data Analysis', 'Business Intelligence', 'Automation', 'Visualization'].map(t => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
          </div>

          <div className="about-visual">
            <div className="code-block">
              <div className="code-header">
                <span className="dot red" /><span className="dot yellow" /><span className="dot green" />
                <span className="code-filename">analysis.py</span>
              </div>
              <pre className="code-body">
                <span className="ck">import</span> pandas <span className="ck">as</span> pd{'\n'}
                <span className="ck">import</span> numpy <span className="ck">as</span> np{'\n\n'}
                <span className="cc"># Load &amp; clean data</span>{'\n'}
                df = pd.<span className="cf">read_sql</span>(query, conn){'\n'}
                df = df.<span className="cf">dropna</span>().<span className="cf">reset_index</span>(){'\n\n'}
                <span className="cc"># Compute KPIs</span>{'\n'}
                kpis = {'{'}{'\n'}
                {'  '}<span className="cs">"revenue"</span>: df[<span className="cs">"sales"</span>].<span className="cf">sum</span>(),{'\n'}
                {'  '}<span className="cs">"growth"</span>: <span className="cf">calc_growth</span>(df),{'\n'}
                {'  '}<span className="cs">"forecast"</span>: model.<span className="cf">predict</span>(X){'\n'}
                {'}'}{'\n\n'}
                <span className="ck">return</span> kpis  <span className="cc"># ✓ Insight delivered</span>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

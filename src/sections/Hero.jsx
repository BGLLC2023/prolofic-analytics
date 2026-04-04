import { useEffect, useRef, useState } from 'react'
import './Hero.css'

const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&'

function MatrixCanvas() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animId

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const fontSize = 13
    const cols = () => Math.floor(canvas.width / fontSize)
    let drops = Array(cols()).fill(1)

    const draw = () => {
      ctx.fillStyle = 'rgba(0,0,0,0.05)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      ctx.fillStyle = '#00ff88'
      ctx.font = `${fontSize}px JetBrains Mono, monospace`

      const c = cols()
      if (drops.length !== c) drops = Array(c).fill(1)

      for (let i = 0; i < c; i++) {
        const char = CHARS[Math.floor(Math.random() * CHARS.length)]
        ctx.globalAlpha = Math.random() * 0.5 + 0.1
        ctx.fillText(char, i * fontSize, drops[i] * fontSize)
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) drops[i] = 0
        drops[i]++
      }
      ctx.globalAlpha = 1
      animId = requestAnimationFrame(draw)
    }

    draw()
    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return <canvas ref={canvasRef} className="matrix-canvas" />
}

function useCountUp(target, duration = 1800, start = false) {
  const [val, setVal] = useState(0)
  useEffect(() => {
    if (!start) return
    let startTime = null
    const step = ts => {
      if (!startTime) startTime = ts
      const progress = Math.min((ts - startTime) / duration, 1)
      setVal(Math.floor(progress * target))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [target, duration, start])
  return val
}

function StatItem({ target, suffix, label, active }) {
  const val = useCountUp(target, 1600, active)
  return (
    <div className="stat">
      <span className="stat-num">{val}<span className="stat-suffix">{suffix}</span></span>
      <span className="stat-label">{label}</span>
    </div>
  )
}

export default function Hero() {
  const [statsVisible, setStatsVisible] = useState(false)
  const statsRef = useRef(null)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setStatsVisible(true); obs.disconnect() } },
      { threshold: 0.4 }
    )
    if (statsRef.current) obs.observe(statsRef.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="hero" className="hero">
      <MatrixCanvas />
      <div className="hero-overlay" />
      <div className="hero-content">
        <p className="hero-tag">// Data &bull; Analysis &bull; Innovation</p>
        <h1 className="hero-title">
          Prolific<br />
          <span className="accent">Analytics</span><br />
          &amp; Development
        </h1>
        <p className="hero-subtitle">
          Transforming raw data into powerful insights.<br />
          Building solutions that drive real decisions.
        </p>
        <div className="hero-btns">
          <a
            href="#services"
            className="btn btn-primary"
            onClick={e => { e.preventDefault(); document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' }) }}
          >
            Explore Services
          </a>
          <a
            href="#contact"
            className="btn btn-outline"
            onClick={e => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }) }}
          >
            Get In Touch
          </a>
        </div>
      </div>
      <div className="scroll-hint">
        <span>Scroll</span>
        <div className="scroll-line" />
      </div>
    </section>
  )
}

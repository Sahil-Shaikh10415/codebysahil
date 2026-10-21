'use client'

import { useState } from 'react'
import {
  ArrowUpRight, Braces, Check, Code2, Copy, Database, GitBranch,
  Layout, Mail, Menu, Server, Wrench, X,
} from 'lucide-react'
import { portfolio } from '@/data/portfolio'

const iconMap = { code: Code2, layout: Layout, server: Server, database: Database, wrench: Wrench, braces: Braces }

function ExternalLink({ href, children, className = '' }: { href: string; children: React.ReactNode; className?: string }) {
  return <a href={href} target="_blank" rel="noreferrer" className={className}>{children}</a>
}

export function Navbar() {
  const [open, setOpen] = useState(false)
  const links = [['Skills', '#skills'], ['Profiles', '#profiles'], ['Projects', '#projects'], ['Resume', '#resume'], ['Contact', '#contact']]
  return <header className="site-header"><div className="container nav-wrap">
    <a href="#home" className="brand"><span className="brand-mark">SS</span><span>Sahil<span className="accent">.dev</span></span></a>
    <button className="mobile-menu" aria-label={open ? 'Close menu' : 'Open menu'} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
    <nav className={open ? 'nav-links open' : 'nav-links'} aria-label="Primary navigation">
      <a href="#home" onClick={() => setOpen(false)}>Home</a>{links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}
      <a href="#contact" className="nav-cta" onClick={() => setOpen(false)}>Get in touch <ArrowUpRight /></a>
    </nav>
  </div></header>
}

function SectionHeading({ eyebrow, title, copy }: { eyebrow: string; title: string; copy?: string }) {
  return <div className="section-heading"><span className="eyebrow">{eyebrow}</span><h2>{title}</h2>{copy && <p>{copy}</p>}</div>
}

export function Terminal() {
  const [lines, setLines] = useState<string[]>(['$ whoami', 'Sahil Shaikh', 'Computer Science Undergraduate @ NIT Raipur', 'Software Engineer Intern Candidate · 2027', '', 'Welcome — type a command to explore.'])
  const [input, setInput] = useState('')
  const commands = ['whoami', 'about', 'skills', 'projects', 'contact', 'help']
  const run = (raw: string) => {
    const command = raw.trim().toLowerCase()
    if (!command) return
    let output: string[] = [`$ ${command}`]
    if (command === 'whoami') output.push('Sahil Shaikh', portfolio.education, 'Software engineering · backend · algorithms')
    else if (command === 'about') output.push(portfolio.intro)
    else if (command === 'skills') output.push('C++ · JavaScript · Python · SQL', 'React · Node.js · Express · MongoDB', 'DSA · OOP · OS · DBMS · Networks')
    else if (command === 'projects') output.push(...portfolio.projects.map((p) => `${p.number}  ${p.name}  →  ${p.repo}`))
    else if (command === 'contact') output.push(`Email → ${portfolio.email}`, `GitHub → ${portfolio.github}`)
    else if (command === 'help') output.push('Available: whoami, about, skills, projects, contact, clear')
    else if (command === 'clear') { setLines([]); setInput(''); return }
    else output.push(`Command not found: ${command}. Type help to see available commands.`)
    setLines((current) => [...current, ...output]); setInput('')
  }
  return <div className="terminal" aria-label="Interactive developer terminal"><div className="terminal-bar"><span className="window-dots"><i /><i /><i /></span><span>sahil@portfolio: ~</span><span className="terminal-status">● online</span></div><div className="terminal-body" role="log" aria-live="polite">{lines.map((line, i) => <div key={`${line}-${i}`} className={line.startsWith('$') ? 'terminal-command' : i === 1 ? 'terminal-name' : 'terminal-line'}>{line || ' '}</div>)}<form onSubmit={(e) => { e.preventDefault(); if (!e.nativeEvent.isComposing) run(input) }} className="terminal-prompt"><span>$</span><input aria-label="Terminal command" value={input} onChange={(e) => setInput(e.target.value)} autoComplete="off" spellCheck="false" /><span className="cursor" /></form></div><div className="command-list">{commands.map((command) => <button key={command} onClick={() => run(command)}>{command}</button>)}</div></div>
}

export function PortfolioPage() {
  const [copied, setCopied] = useState(false)
  const copyEmail = async () => { await navigator.clipboard.writeText(portfolio.email); setCopied(true); setTimeout(() => setCopied(false), 1800) }
  return <div className="portfolio-shell"><Navbar /><main>
    <section id="home" className="hero container"><div className="hero-copy"><div className="availability"><span /> Open to Software Engineering Internships</div><h1>Hi, I&apos;m <span className="accent">Sahil Shaikh.</span></h1><h2>{portfolio.title}</h2><p className="education">{portfolio.education}</p><p className="hero-intro">{portfolio.intro}</p><div className="hero-actions"><ExternalLink href={portfolio.resume.preview} className="button button-primary">View Resume <ArrowUpRight /></ExternalLink><ExternalLink href={portfolio.github} className="button button-secondary"><GitBranch /> GitHub</ExternalLink><a href="#contact" className="button button-ghost">Get in Touch <ArrowUpRight /></a></div><div className="hero-meta"><span><GitBranch /> Building with intent</span><span><Code2 /> Solving one problem at a time</span></div></div><Terminal /></section>
    <section id="skills" className="section container"><SectionHeading eyebrow="01 / TOOLKIT" title="Technical Skills" copy="Technologies I use to build, debug, and engineer software." /><div className="skills-grid">{portfolio.skills.map((skill) => { const Icon = iconMap[skill.icon]; return <article className={skill.featured ? 'skill-card featured' : 'skill-card'} key={skill.title}><div className="card-icon"><Icon /></div><h3>{skill.title}</h3><div className="chip-row">{skill.items.map((item) => <span key={item}>{item}</span>)}</div></article> })}</div></section>
    <section id="profiles" className="section section-alt"><div className="container"><SectionHeading eyebrow="02 / PRACTICE" title="Where I sharpen the craft — one problem at a time." copy="Consistent practice in algorithms, data structures, and competitive programming." /><div className="profiles-grid">{portfolio.profiles.map((profile) => <article className="profile-card" key={profile.name} style={{ '--profile-accent': profile.accent } as React.CSSProperties}><div className="profile-top"><div className="platform-logo">{profile.name.slice(0, 1)}</div><span className="profile-arrow"><ArrowUpRight /></span></div><h3>{profile.name}</h3><p className="username">@{profile.username}</p><div className="profile-stat"><span className="stat-value">{profile.solved ?? '—'}</span><span className="stat-label">Problems solved</span></div><div className="profile-details">{profile.rating && <span>{profile.rating}</span>}<span className="profile-badge">{profile.badge}</span></div><div className="profile-bottom"><small>{profile.verified}</small><ExternalLink href={profile.url} className="text-link">View Profile <ArrowUpRight /></ExternalLink></div></article>)}</div></div></section>
    <section id="projects" className="section container"><SectionHeading eyebrow="03 / SELECTED WORK" title="Selected work, shipped end-to-end." copy="Practical projects built through experimentation, problem-solving, and software engineering." /><div className="projects-grid">{portfolio.projects.map((project) => <article className={`project-card ${project.tone}`} key={project.name}><div className="project-visual"><span className="project-number">{project.number}</span><div className="visual-lines"><i /><i /><i /></div><span className="visual-bracket">&lt;/&gt;</span></div><div className="project-content"><span className="project-kicker">{project.kicker}</span><h3>{project.name}</h3><p>{project.description}</p><div className="chip-row">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div><ExternalLink href={project.repo} className="text-link">Repository <ArrowUpRight /></ExternalLink></div></article>)}</div></section>
    <section id="resume" className="resume-section"><div className="container resume-panel"><div><span className="eyebrow">04 / NEXT CHAPTER</span><h2>Have a role in mind?<br /><span className="accent">Take the full picture with you.</span></h2><p>Explore my technical skills, projects, and problem-solving achievements.</p></div><div className="resume-actions"><ExternalLink href={portfolio.resume.preview} className="button button-primary">View Resume <ArrowUpRight /></ExternalLink><ExternalLink href={portfolio.resume.download} className="button button-secondary">Download PDF <ArrowUpRight /></ExternalLink></div></div></section>
    <section id="contact" className="section container contact-section"><div className="contact-card"><div><span className="eyebrow">05 / SAY HELLO</span><h2>Let&apos;s build something meaningful.</h2><p>I&apos;m open to discussing software engineering internships, technical projects, and opportunities to build useful software.</p></div><div className="contact-actions"><a href={`mailto:${portfolio.email}`} className="contact-email"><Mail /> {portfolio.email}</a><div className="contact-buttons"><button className="button button-secondary" onClick={copyEmail}>{copied ? <Check /> : <Copy />} {copied ? 'Copied' : 'Copy email'}</button><ExternalLink href={portfolio.github} className="button button-ghost"><GitBranch /> GitHub</ExternalLink></div></div></div></section>
  </main><Footer /></div>
}

function Footer() { return <footer className="footer"><div className="container footer-grid"><div><a href="#home" className="brand"><span className="brand-mark">SS</span><span>Sahil<span className="accent">.dev</span></span></a><p>Software engineer in progress.<br />NIT Raipur · B.Tech CSE · 2027</p></div><div><span className="footer-label">Explore</span><div className="footer-links"><a href="#skills">Skills</a><a href="#projects">Projects</a><a href="#resume">Resume</a></div></div><div><span className="footer-label">Connect</span><div className="footer-links"><ExternalLink href={portfolio.github}>GitHub</ExternalLink><a href={`mailto:${portfolio.email}`}>Email</a><a href="#profiles">Coding profiles</a></div></div></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} Sahil Shaikh</span><span>Designed & built with curiosity.</span></div></footer>}

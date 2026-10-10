import { achievements, exploring, learningJourney, profile, projects, skillGroups } from '../data/portfolio'
import ProjectCard from './ProjectCard'
import { Icon } from './Icons'

export function Hero() {
  return <section className="hero section" id="home"><div className="shell hero-grid"><div className="hero-copy">
    <div className="eyebrow"><span className="status-dot"/> {profile.tagline}</div>
    <h1>Building My Future in <span>Artificial Intelligence.</span></h1>
    <p className="hero-intro">Hi, I'm {profile.name}, a first-year Data Science student at Hanoi University of Science and Technology. I'm passionate about AI, machine learning, and building technology that solves real-world problems.</p>
    <div className="hero-actions"><a className="button button-primary" href="#projects">Explore my projects <Icon name="arrow" /></a><a className="button button-quiet" href="#about">About me</a></div>
    <div className="hero-socials"><a href={profile.github || '#contact'} aria-disabled={!profile.github} onClick={!profile.github ? (event) => event.preventDefault() : undefined}><Icon name="github"/> GitHub</a><span className="social-divider"/><a href={profile.linkedin || '#contact'} aria-disabled={!profile.linkedin} onClick={!profile.linkedin ? (event) => event.preventDefault() : undefined}><Icon name="linkedin"/> LinkedIn</a><span className="hero-location"><Icon name="location"/> {profile.location}</span></div>
  </div><HeroArtwork/></div><a className="scroll-cue" href="#about"><span/> Scroll to explore</a></section>
}

function HeroArtwork() {
  return <div className="hero-visual" aria-label="Abstract illustration of connected data nodes"><div className="visual-glow"/><div className="visual-ring ring-outer"/><div className="visual-ring ring-middle"/><div className="visual-ring ring-inner"/><div className="visual-cross cross-one"/><div className="visual-cross cross-two"/><svg className="network-lines" viewBox="0 0 500 500" aria-hidden="true"><path d="M91 211 184 126 287 174 382 109M91 211l59 122 137 74 95-68 0-165M184 126l-34 207 232-98M287 174l-42 193M150 333l137-159 95 94"/></svg><span className="network-node n1"/><span className="network-node n2"/><span className="network-node n3"/><span className="network-node n4"/><span className="network-node n5"/><span className="network-node n6"/><div className="hero-monogram">QM<span>.</span><small>DATA / AI</small></div><span className="orbit-label label-one">01&nbsp; / &nbsp;LEARN</span><span className="orbit-label label-two">IDEAS → MODELS</span><span className="orbit-label label-three">HANOI · VN</span></div>
}

export function About() {
  return <section className="section about-section" id="about"><div className="shell about-grid"><div><p className="section-kicker">01 / A little about me</p><h2>Curious by nature.<br/><span>Grounded in fundamentals.</span></h2></div><div className="about-copy"><p>{profile.about}</p><div className="about-facts"><div className="fact"><span className="fact-label">Currently</span><strong>{profile.year} · {profile.major}</strong></div><div className="fact"><span className="fact-label">Studying at</span><strong>{profile.university}</strong></div><div className="fact"><span className="fact-label">Based in</span><strong>{profile.location}</strong></div></div><div className="value-list">{profile.values.map((value) => <span key={value}><i/>{value}</span>)}</div></div></div></section>
}

export function Achievements() {
  return <section className="section achievements-section" id="achievements"><div className="shell"><div className="section-heading"><div><p className="section-kicker">02 / Academic milestones</p><h2>Achievements <span>&amp; Awards</span></h2></div><p className="section-summary">A record of dedication, mathematical thinking, and academic excellence.</p></div><p className="achievement-context">These milestones reflect discipline, mathematical thinking, and problem-solving—foundations I bring to my Data Science studies.</p><div className="achievement-grid">{achievements.map((item, index) => <article className={`achievement-card distinction-${item.distinction}`} key={item.id}><div className="achievement-card-top"><span className="achievement-index">0{index + 1}</span><span className="achievement-icon"><Icon name="trophy"/></span></div><p className="achievement-original" lang="vi">{item.title}</p><h3>{item.englishTitle}</h3><div className="achievement-footer"><span>{item.academicYear}</span><span className="achievement-dot"/><span lang="vi">{item.competition}</span></div></article>)}</div><p className="language-note">Original award titles are preserved in Vietnamese.</p></div></section>
}

export function Skills() {
  return <section className="section skills-section" id="skills"><div className="shell"><div className="section-heading"><div><p className="section-kicker">03 / Tools I'm learning</p><h2>Technical <span>Skills</span></h2></div><p className="section-summary">An honest snapshot of the tools and concepts I'm exploring. This list grows as I do.</p></div><div className="skill-grid">{skillGroups.map((group) => <article className="skill-card" key={group.name}><div className="skill-card-heading"><span className="skill-icon">{group.icon}</span><h3>{group.name}</h3></div><div className="skill-list">{group.skills.map((skill) => <div className="skill-row" key={skill.name}><span>{skill.name}</span><span className="skill-level">{skill.level}</span></div>)}</div></article>)}</div><p className="skills-note"><span className="status-dot"/> Skill levels are intentionally described without percentages.</p></div></section>
}

export function Projects() {
  return <section className="section projects-section" id="projects"><div className="shell"><div className="section-heading"><div><p className="section-kicker">04 / Learning by building</p><h2>Featured <span>Projects</span></h2></div><p className="section-summary">Ideas I'm shaping into practical experiments. Project links will appear here when repositories or demos are ready.</p></div><div className="projects-grid">{projects.map((project) => <ProjectCard key={project.id} project={project}/>)}</div><div className="projects-end"><p>All current projects are shown here. More experiments will be added as they take shape.</p></div></div></section>
}

export function Journey() {
  return <section className="section journey-section" id="journey"><div className="shell journey-grid"><div className="journey-intro"><p className="section-kicker">05 / Learning journey</p><h2>One step at a time,<br/><span>one concept at a time.</span></h2><p>These are learning stages and goals, not a list of completed achievements. Progress can be updated as I move forward.</p><a className="text-link" href="#contact">Let's connect <Icon name="arrow"/></a></div><ol className="journey-list">{learningJourney.map((step, index) => <li className="journey-step" key={step.title}><span className="journey-number">0{index + 1}</span><div className="journey-step-copy"><h3>{step.title}</h3><p>{step.detail}</p></div><span className="journey-status">{step.status}</span></li>)}</ol></div></section>
}

export function Exploring() {
  return <section className="section exploring-section"><div className="shell"><div className="exploring-heading"><div><p className="section-kicker">06 / Curiosity in motion</p><h2>Currently <span>exploring</span></h2></div><p>Topics I'm spending time with right now.</p></div><div className="exploring-grid">{exploring.map((topic) => <article className={`explore-card explore-${topic.color}`} key={topic.title}><span className="explore-symbol">{topic.icon}</span><div><h3>{topic.title}</h3><p>{topic.detail}</p></div><span className="explore-arrow"><Icon name="arrow"/></span></article>)}</div></div></section>
}

export function Contact() {
  return <section className="section contact-section" id="contact"><div className="shell contact-card"><div className="contact-orb orb-a"/><div className="contact-orb orb-b"/><div className="contact-content"><p className="section-kicker">07 / Get in touch</p><h2>Good ideas start<br/>with a <span>conversation.</span></h2><p>Interested in technology, learning, or building something together? I'd be glad to connect with fellow students, mentors, and curious minds.</p><div className="contact-actions"><a className="button button-primary" href={`mailto:${profile.email}`}><Icon name="mail"/> Email me <Icon name="arrow"/></a><a className="button button-quiet" href={`tel:+84${profile.phone.slice(1)}`}><Icon name="phone"/> {profile.phone}</a><span className="contact-note">No contact form is shown until a working service is configured.</span></div></div><div className="contact-monogram" aria-hidden="true">QM<span>.</span></div></div></section>
}

export function Footer() {
  return <footer className="site-footer"><div className="shell footer-inner"><div className="footer-brand"><span className="brand-mark">QM<span>.</span></span><span>Built with curiosity and a passion for technology.</span></div><div className="footer-links"><a href={profile.github || '#contact'} aria-disabled={!profile.github} onClick={!profile.github ? (event) => event.preventDefault() : undefined}>GitHub</a><a href={profile.linkedin || '#contact'} aria-disabled={!profile.linkedin} onClick={!profile.linkedin ? (event) => event.preventDefault() : undefined}>LinkedIn</a><a href="#home" className="back-top">Back to top <Icon name="arrowUp"/></a></div><p className="copyright">© {new Date().getFullYear()} {profile.name}</p></div></footer>
}

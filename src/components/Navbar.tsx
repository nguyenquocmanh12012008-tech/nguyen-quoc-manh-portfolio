import { useState } from 'react'
import { profile } from '../data/portfolio'
import { Icon } from './Icons'

const links = [
  ['About', '#about'], ['Achievements', '#achievements'], ['Skills', '#skills'], ['Projects', '#projects'], ['Journey', '#journey'], ['Contact', '#contact'],
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="site-header">
      <nav className="nav shell" aria-label="Main navigation">
        <a className="brand" href="#home" aria-label={`${profile.name}, home`} onClick={() => setOpen(false)}><span className="brand-mark">QM<span>.</span></span></a>
        <button className="menu-toggle" type="button" aria-label={open ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={open} aria-controls="primary-navigation" onClick={() => setOpen(!open)}><Icon name={open ? 'close' : 'menu'} /></button>
        <div className={`nav-content${open ? ' is-open' : ''}`} id="primary-navigation">
          <div className="nav-links">{links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}</div>
          <a className="nav-cta" href="#projects" onClick={() => setOpen(false)}>Explore projects <Icon name="arrow" /></a>
        </div>
      </nav>
    </header>
  )
}

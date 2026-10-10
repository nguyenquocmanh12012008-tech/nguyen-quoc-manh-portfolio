import { useState } from 'react'
import { profile } from '../data/portfolio'
import { Icon } from './Icons'
import { tr, useLanguage } from '../LanguageContext'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { language, setLanguage } = useLanguage()
  const links = [
    [tr(language, 'About', 'Giới thiệu'), '#about'], [tr(language, 'Achievements', 'Thành tích'), '#achievements'], [tr(language, 'Skills', 'Kỹ năng'), '#skills'], [tr(language, 'Projects', 'Dự án'), '#projects'], [tr(language, 'Journey', 'Hành trình'), '#journey'], [tr(language, 'Contact', 'Liên hệ'), '#contact'],
  ]
  return (
    <header className="site-header">
      <nav className="nav shell" aria-label={tr(language, 'Main navigation', 'Điều hướng chính')}>
        <a className="brand" href="#home" aria-label={`${profile.name}, ${tr(language, 'home', 'trang chủ')}`} onClick={() => setOpen(false)}><span className="brand-mark">QM<span>.</span></span></a>
        <button className="menu-toggle" type="button" aria-label={open ? tr(language, 'Close navigation menu', 'Đóng menu') : tr(language, 'Open navigation menu', 'Mở menu')} aria-expanded={open} aria-controls="primary-navigation" onClick={() => setOpen(!open)}><Icon name={open ? 'close' : 'menu'} /></button>
        <div className={`nav-content${open ? ' is-open' : ''}`} id="primary-navigation">
          <div className="nav-links">{links.map(([label, href]) => <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>)}</div>
          <a className="nav-cta" href="#projects" onClick={() => setOpen(false)}>{tr(language, 'Explore projects', 'Xem dự án')} <Icon name="arrow" /></a>
        </div>
        <div className="language-switch" aria-label={tr(language, 'Choose language', 'Chọn ngôn ngữ')}>
          {(['en', 'vi'] as const).map((choice) => <button key={choice} type="button" lang={choice} aria-pressed={language === choice} className={language === choice ? 'is-active' : ''} onClick={() => setLanguage(choice)}>{choice.toUpperCase()}</button>)}
        </div>
      </nav>
    </header>
  )
}

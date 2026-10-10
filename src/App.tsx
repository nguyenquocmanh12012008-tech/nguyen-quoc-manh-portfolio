import Navbar from './components/Navbar'
import { About, Achievements, Contact, Exploring, Footer, Hero, Journey, Projects, Skills } from './components/PortfolioSections'
import { LanguageProvider, tr, useLanguage } from './LanguageContext'

function SkipLink() {
  const { language } = useLanguage()
  return <a className="skip-link" href="#main">{tr(language, 'Skip to content', 'Chuyển đến nội dung')}</a>
}

export default function App() {
  return <LanguageProvider><SkipLink/><Navbar/><main id="main"><Hero/><About/><Achievements/><Skills/><Projects/><Journey/><Exploring/><Contact/></main><Footer/></LanguageProvider>
}

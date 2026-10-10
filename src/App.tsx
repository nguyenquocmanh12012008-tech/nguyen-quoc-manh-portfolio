import Navbar from './components/Navbar'
import { About, Achievements, Contact, Exploring, Footer, Hero, Journey, Projects, Skills } from './components/PortfolioSections'

export default function App() {
  return <><a className="skip-link" href="#main">Skip to content</a><Navbar/><main id="main"><Hero/><About/><Achievements/><Skills/><Projects/><Journey/><Exploring/><Contact/></main><Footer/></>
}

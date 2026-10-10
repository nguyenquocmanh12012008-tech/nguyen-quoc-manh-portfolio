import { achievements, exploring, learningJourney, profile, projects, skillGroups } from '../data/portfolio'
import ProjectCard from './ProjectCard'
import { Icon } from './Icons'
import { tr, useLanguage } from '../LanguageContext'

export function Hero() {
  const { language } = useLanguage()
  return <section className="hero section" id="home"><div className="shell hero-grid"><div className="hero-copy">
    <div className="eyebrow"><span className="status-dot"/> {tr(language, 'Data Science Student · AI Enthusiast', 'Sinh viên Khoa học Dữ liệu · Đam mê AI')}</div>
    <h1>{profile.name}</h1>
    <p className="hero-role">{tr(language, 'Building my future in', 'Từng bước xây dựng tương lai trong')} <span>{tr(language, 'Artificial Intelligence.', 'Trí tuệ nhân tạo.')}</span></p>
    <p className="hero-intro">{tr(language, "I'm a first-year Data Science student at Hanoi University of Science and Technology. I'm passionate about AI, machine learning, and building technology that solves real-world problems.", 'Mình là sinh viên năm nhất ngành Khoa học Dữ liệu tại Đại học Bách khoa Hà Nội. Mình yêu thích AI, học máy và phát triển công nghệ giúp giải quyết các vấn đề thực tế.')}</p>
    <div className="hero-actions"><a className="button button-primary" href="#projects">{tr(language, 'Explore my projects', 'Khám phá dự án')} <Icon name="arrow" /></a><a className="button button-quiet" href="#contact">{tr(language, "Let's connect", 'Kết nối với mình')}</a></div>
    <div className="hero-socials"><a href={profile.github}><Icon name="github"/> GitHub</a><span className="social-divider"/><a href={profile.linkedin || '#contact'} aria-disabled={!profile.linkedin} onClick={!profile.linkedin ? (event) => event.preventDefault() : undefined}><Icon name="linkedin"/> LinkedIn</a><span className="hero-location"><Icon name="location"/> {tr(language, 'Hanoi, Vietnam', 'Hà Nội, Việt Nam')}</span></div>
  </div><HeroArtwork language={language}/></div><a className="scroll-cue" href="#about"><span/> {tr(language, 'Scroll to explore', 'Cuộn để khám phá')}</a></section>
}

function HeroArtwork({ language }: { language: 'en' | 'vi' }) {
  return <div className="hero-visual"><div className="visual-glow"/><div className="visual-ring ring-outer"/><div className="visual-ring ring-middle"/><div className="visual-ring ring-inner"/><div className="visual-cross cross-one"/><div className="visual-cross cross-two"/><svg className="network-lines" viewBox="0 0 500 500" aria-hidden="true"><path d="M91 211 184 126 287 174 382 109M91 211l59 122 137 74 95-68 0-165M184 126l-34 207 232-98M287 174l-42 193M150 333l137-159 95 94"/></svg><span className="network-node n1"/><span className="network-node n2"/><span className="network-node n3"/><span className="network-node n4"/><span className="network-node n5"/><span className="network-node n6"/><div className="hero-avatar-frame"><img className="hero-avatar" src="/avatar.jpg" alt={tr(language, `Portrait of ${profile.name}`, `Ảnh chân dung của ${profile.name}`)} /></div><span className="orbit-label label-one">01&nbsp; / &nbsp;{tr(language, 'LEARN', 'HỌC HỎI')}</span><span className="orbit-label label-two">IDEAS → MODELS</span><span className="orbit-label label-three">HANOI · VN</span></div>
}

export function About() {
  const { language } = useLanguage()
  const values = language === 'vi' ? ['Không ngừng học hỏi', 'Tư duy logic', 'Tinh thần ham học', 'Học từ sai lầm'] : profile.values
  return <section className="section about-section" id="about"><div className="shell about-grid"><div><p className="section-kicker">01 / {tr(language, 'A little about me', 'Đôi nét về mình')}</p><h2>{tr(language, 'Curious by nature.', 'Tò mò khám phá.')}<br/><span>{tr(language, 'Grounded in fundamentals.', 'Vững vàng từ nền tảng.')}</span></h2></div><div className="about-copy"><p>{tr(language, profile.about, 'Mình là sinh viên năm nhất ngành Khoa học Dữ liệu tại HUST, quan tâm đến trí tuệ nhân tạo, học máy và phát triển phần mềm. Mình thích tìm hiểu cách các thuật toán và mô hình hoạt động thay vì chỉ sao chép mã nguồn; đồng thời coi trọng nền tảng toán học, tư duy logic và sự kiên trì khi giải quyết vấn đề. Mục tiêu của mình là học chắc lý thuyết, thử nghiệm cẩn thận và xây dựng các dự án thực tế trên hành trình trở thành Kỹ sư AI.')}</p><div className="about-facts"><div className="fact"><span className="fact-label">{tr(language, 'Currently', 'Hiện tại')}</span><strong>{tr(language, 'First-year student', 'Sinh viên năm nhất')} · {tr(language, 'Data Science', 'Khoa học Dữ liệu')}</strong></div><div className="fact"><span className="fact-label">{tr(language, 'Studying at', 'Trường')}</span><strong>{tr(language, profile.university, 'Đại học Bách khoa Hà Nội (HUST)')}</strong></div><div className="fact"><span className="fact-label">{tr(language, 'Based in', 'Địa điểm')}</span><strong>{tr(language, 'Hanoi, Vietnam', 'Hà Nội, Việt Nam')}</strong></div></div><div className="value-list">{values.map((value) => <span key={value}><i/>{value}</span>)}</div></div></div></section>
}

const awardTitlesVi: Record<string, string> = {
  'national-math-2024': 'Giải Ba Học sinh giỏi Quốc gia môn Toán',
  'national-math-2025': 'Giải Khuyến khích Học sinh giỏi Quốc gia môn Toán',
  'student-olympiad-2024': 'Huy chương Vàng Olympic Toán học học sinh, sinh viên toàn quốc',
  'vinh-math-2024': 'Giải Nhất môn Toán cấp Đại học Vinh',
  'vinh-math-2025': 'Giải Nhất môn Toán cấp Đại học Vinh',
}
const awardCompetitionsVi: Record<string, string> = {
  'national-math-2024': 'Kỳ thi Học sinh giỏi Quốc gia môn Toán',
  'national-math-2025': 'Kỳ thi Học sinh giỏi Quốc gia môn Toán',
  'student-olympiad-2024': 'Olympic Toán học học sinh và sinh viên toàn quốc',
  'vinh-math-2024': 'Cuộc thi môn Toán cấp Đại học Vinh',
  'vinh-math-2025': 'Cuộc thi môn Toán cấp Đại học Vinh',
}
const awardCompetitionsEn: Record<string, string> = {
  'national-math-2024': 'National Excellent Student Competition in Mathematics',
  'national-math-2025': 'National Excellent Student Competition in Mathematics',
  'student-olympiad-2024': 'National Student Mathematics Olympiad',
  'vinh-math-2024': 'Mathematics Competition at Vinh University',
  'vinh-math-2025': 'Mathematics Competition at Vinh University',
}

export function Achievements() {
  const { language } = useLanguage()
  return <section className="section achievements-section" id="achievements"><div className="shell"><div className="section-heading"><div><p className="section-kicker">02 / {tr(language, 'Academic milestones', 'Dấu mốc học tập')}</p><h2>{tr(language, 'Achievements', 'Thành tích')} <span>&amp; {tr(language, 'Awards', 'Giải thưởng')}</span></h2></div><p className="section-summary">{tr(language, 'A record of dedication, mathematical thinking, and academic excellence.', 'Dấu ấn của sự nỗ lực, tư duy toán học và thành tích học tập.')}</p></div><p className="achievement-context">{tr(language, 'These milestones reflect discipline, mathematical thinking, and problem-solving—foundations I bring to my Data Science studies.', 'Những dấu mốc này thể hiện sự kỷ luật, tư duy toán học và khả năng giải quyết vấn đề — nền tảng mình mang theo trong hành trình Khoa học Dữ liệu.')}</p><div className="achievement-grid">{achievements.map((item, index) => <article className={`achievement-card distinction-${item.distinction}`} key={item.id}><div className="achievement-card-top"><span className="achievement-index">0{index + 1}</span><span className="achievement-icon"><Icon name="trophy"/></span></div><p className="achievement-original" lang={language}>{tr(language, 'Academic distinction', awardCompetitionsVi[item.id])}</p><h3>{tr(language, item.englishTitle, awardTitlesVi[item.id])}</h3><div className="achievement-footer"><span>{item.academicYear}</span><span className="achievement-dot"/><span lang={language}>{tr(language, awardCompetitionsEn[item.id], awardCompetitionsVi[item.id])}</span></div></article>)}</div><p className="language-note">{tr(language, 'Award titles are shown in their original Vietnamese and English.', 'Tên các giải thưởng được trình bày bằng tiếng Việt.')}</p></div></section>
}

const groupNamesVi: Record<string, string> = { Programming: 'Lập trình', 'Data Science': 'Khoa học Dữ liệu', 'Machine Learning': 'Học máy', 'Deep Learning & AI': 'Học sâu & AI', Tools: 'Công cụ' }
const skillNamesVi: Record<string, string> = { Learning: 'Đang học', Familiar: 'Đã làm quen', Exploring: 'Đang tìm hiểu', 'Exploratory Data Analysis': 'Phân tích dữ liệu khám phá', 'Data preprocessing': 'Tiền xử lý dữ liệu', 'Model training & evaluation': 'Huấn luyện & đánh giá mô hình', 'Classical ML algorithms': 'Thuật toán học máy cơ bản', 'Neural Networks': 'Mạng nơ-ron', 'Computer Vision': 'Thị giác máy tính', 'Natural Language Processing': 'Xử lý ngôn ngữ tự nhiên' }

export function Skills() {
  const { language } = useLanguage()
  return <section className="section skills-section" id="skills"><div className="shell"><div className="section-heading"><div><p className="section-kicker">03 / {tr(language, "Tools I'm learning", 'Công cụ mình đang học')}</p><h2>{tr(language, 'Technical', 'Kỹ năng')} <span>{tr(language, 'Skills', 'chuyên môn')}</span></h2></div><p className="section-summary">{tr(language, "An honest snapshot of the tools and concepts I'm exploring. This list grows as I do.", 'Tổng quan về các công cụ và khái niệm mình đang tìm hiểu. Danh sách này sẽ phát triển cùng quá trình học tập.')}</p></div><div className="skill-grid">{skillGroups.map((group) => <article className="skill-card" key={group.name}><div className="skill-card-heading"><span className="skill-icon">{group.icon}</span><h3>{language === 'vi' ? groupNamesVi[group.name] ?? group.name : group.name}</h3></div><div className="skill-list">{group.skills.map((skill) => <div className="skill-row" key={skill.name}><span>{language === 'vi' ? skillNamesVi[skill.name] ?? skill.name : skill.name}</span><span className="skill-level">{language === 'vi' ? skillNamesVi[skill.level] ?? skill.level : skill.level}</span></div>)}</div></article>)}</div><p className="skills-note"><span className="status-dot"/> {tr(language, 'Skill levels are intentionally described without percentages.', 'Mức độ kỹ năng được mô tả bằng lời, không dùng phần trăm.')}</p></div></section>
}

export function Projects() {
  const { language } = useLanguage()
  return <section className="section projects-section" id="projects"><div className="shell"><div className="section-heading"><div><p className="section-kicker">04 / {tr(language, 'Learning by building', 'Học qua thực hành')}</p><h2>{tr(language, 'Featured', 'Dự án')} <span>{tr(language, 'Projects', 'tiêu biểu')}</span></h2></div><p className="section-summary">{tr(language, "Ideas I'm shaping into practical experiments. Project links will appear here when repositories or demos are ready.", 'Những ý tưởng mình đang phát triển thành thử nghiệm thực tế. Liên kết dự án sẽ được cập nhật khi mã nguồn hoặc bản demo sẵn sàng.')}</p></div><div className="projects-grid">{projects.map((project) => <ProjectCard key={project.id} project={project}/>)}</div><div className="projects-end"><p>{tr(language, 'All current projects are shown here. More experiments will be added as they take shape.', 'Các dự án hiện tại được liệt kê tại đây. Mình sẽ bổ sung thêm khi các thử nghiệm hoàn thiện.')}</p></div></div></section>
}

const journeyVi = [
  ['Nền tảng lập trình', 'Python, giải quyết vấn đề và Git', 'Đang xây nền tảng'],
  ['Nền tảng Khoa học Dữ liệu', 'NumPy, Pandas, trực quan hóa và SQL', 'Đang học'],
  ['Học máy', 'Tiền xử lý, thuật toán học máy và đánh giá', 'Sắp học'],
  ['Học sâu', 'Mạng nơ-ron, CNN và PyTorch', 'Dự kiến'],
  ['Dự án AI', 'Xây dựng dự án thực tế, có thể tái lập', 'Dự kiến'],
  ['Triển khai & kỹ thuật', 'API, kiểm thử, Docker và triển khai mô hình', 'Mục tiêu dài hạn'],
]

export function Journey() {
  const { language } = useLanguage()
  return <section className="section journey-section" id="journey"><div className="shell journey-grid"><div className="journey-intro"><p className="section-kicker">05 / {tr(language, 'Learning journey', 'Hành trình học tập')}</p><h2>{tr(language, 'One step at a time,', 'Từng bước một,')}<br/><span>{tr(language, 'one concept at a time.', 'từng khái niệm một.')}</span></h2><p>{tr(language, 'These are learning stages and goals, not a list of completed achievements. Progress can be updated as I move forward.', 'Đây là các chặng học tập và mục tiêu, không phải danh sách thành tích đã hoàn thành. Mình sẽ cập nhật tiến độ theo thời gian.')}</p><a className="text-link" href="#contact">{tr(language, "Let's connect", 'Kết nối với mình')} <Icon name="arrow"/></a></div><ol className="journey-list">{learningJourney.map((step, index) => <li className="journey-step" key={step.title}><span className="journey-number">0{index + 1}</span><div className="journey-step-copy"><h3>{language === 'vi' ? journeyVi[index][0] : step.title}</h3><p>{language === 'vi' ? journeyVi[index][1] : step.detail}</p></div><span className="journey-status">{language === 'vi' ? journeyVi[index][2] : step.status}</span></li>)}</ol></div></section>
}

const exploringVi: Record<string, [string, string]> = { 'Computer Vision': ['Thị giác máy tính', 'CNN và YOLO'], 'NLP & Text': ['NLP & Văn bản', 'Phân loại văn bản'], 'Large Language Models': ['Mô hình ngôn ngữ lớn', 'Nền tảng tinh chỉnh mô hình'], 'Model Evaluation': ['Đánh giá mô hình', 'Thử nghiệm cẩn trọng'], 'Clean Python': ['Python rõ ràng', 'Mã nguồn dễ bảo trì, tái lập'] }

export function Exploring() {
  const { language } = useLanguage()
  return <section className="section exploring-section"><div className="shell"><div className="exploring-heading"><div><p className="section-kicker">06 / {tr(language, 'Curiosity in motion', 'Không ngừng khám phá')}</p><h2>{tr(language, 'Currently', 'Đang')} <span>{tr(language, 'exploring', 'tìm hiểu')}</span></h2></div><p>{tr(language, "Topics I'm spending time with right now.", 'Những chủ đề mình đang tập trung tìm hiểu.')}</p></div><div className="exploring-grid">{exploring.map((topic) => <article className={`explore-card explore-${topic.color}`} key={topic.title}><span className="explore-symbol">{topic.icon}</span><div><h3>{language === 'vi' ? exploringVi[topic.title][0] : topic.title}</h3><p>{language === 'vi' ? exploringVi[topic.title][1] : topic.detail}</p></div><span className="explore-arrow"><Icon name="arrow"/></span></article>)}</div></div></section>
}

export function Contact() {
  const { language } = useLanguage()
  return <section className="section contact-section" id="contact"><div className="shell contact-card"><div className="contact-orb orb-a"/><div className="contact-orb orb-b"/><div className="contact-content"><p className="section-kicker">07 / {tr(language, 'Get in touch', 'Liên hệ')}</p><h2>{tr(language, 'Good ideas start', 'Ý tưởng hay bắt đầu')}<br/>{tr(language, 'with a', 'từ một')} <span>{tr(language, 'conversation.', 'cuộc trò chuyện.')}</span></h2><p>{tr(language, "Interested in technology, learning, or building something together? I'd be glad to connect with fellow students, mentors, and curious minds.", 'Bạn quan tâm đến công nghệ, học tập hay muốn cùng xây dựng điều gì đó? Mình rất vui được kết nối với các bạn sinh viên, người hướng dẫn và những người ham học hỏi.')}</p><div className="contact-actions"><a className="button button-primary" href={`mailto:${profile.email}`}><Icon name="mail"/> {tr(language, 'Email me', 'Gửi email')} <Icon name="arrow"/></a><a className="button button-quiet" href={`tel:+84${profile.phone.slice(1)}`}><Icon name="phone"/> {profile.phone}</a><a className="button button-quiet" href={profile.facebook} target="_blank" rel="noreferrer"><span aria-hidden="true">f</span> Facebook <Icon name="external"/></a><span className="contact-note">{tr(language, 'No contact form is shown until a working service is configured.', 'Biểu mẫu liên hệ sẽ được thêm khi có dịch vụ phù hợp.')}</span></div></div><div className="contact-monogram" aria-hidden="true">QM<span>.</span></div></div></section>
}

export function Footer() {
  const { language } = useLanguage()
  return <footer className="site-footer"><div className="shell footer-inner"><div className="footer-brand"><span className="brand-mark">QM<span>.</span></span><span>{tr(language, 'Built with curiosity and a passion for technology.', 'Xây dựng bằng sự tò mò và niềm đam mê công nghệ.')}</span></div><div className="footer-links"><a href={profile.github}>GitHub</a><a href={profile.facebook} target="_blank" rel="noreferrer">Facebook</a><a href="#home" className="back-top">{tr(language, 'Back to top', 'Về đầu trang')} <Icon name="arrowUp"/></a></div><p className="copyright">© {new Date().getFullYear()} {profile.name}</p></div></footer>
}

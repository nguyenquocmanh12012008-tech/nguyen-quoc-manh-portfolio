import type { projects } from '../data/portfolio'
import { Icon } from './Icons'
import { tr, useLanguage } from '../LanguageContext'

type Project = (typeof projects)[number]

export default function ProjectCard({ project }: { project: Project }) {
  const { language } = useLanguage()
  const detailsVi: Record<string, { title: string; category: string; description: string; status: string }> = {
    'rice-disease': { title: 'Phân loại bệnh trên cây lúa', category: 'Thị giác máy tính', description: 'Dự án phân loại hình ảnh nhằm tìm hiểu cách nhận diện bệnh trên cây lúa và phân biệt cây khỏe với cây bị bệnh.', status: 'Đang học / Phát triển' },
    'nlp-text': { title: 'Phân loại văn bản NLP', category: 'Xử lý ngôn ngữ tự nhiên', description: 'Thử nghiệm xử lý văn bản, Bag of Words, TF-IDF và các mô hình học máy cho bài toán phân loại văn bản.', status: 'Đang học / Thử nghiệm' },
    'experimentation-lab': { title: 'Phòng thí nghiệm AI', category: 'AI / Học máy', description: 'Tập hợp các thử nghiệm đang phát triển để tìm hiểu thuật toán, quy trình huấn luyện, đánh giá mô hình và kỹ thuật AI thực tế.', status: 'Dự kiến / Đang phát triển' },
  }
  const details = language === 'vi' ? detailsVi[project.id] : project
  return (
    <article className={`project-card accent-${project.accent}`}>
      <div className="project-art" aria-hidden="true"><div className="art-grid"/><div className="art-orbit orbit-one"/><div className="art-orbit orbit-two"/><div className="art-core"><Icon name="code" /></div><span className="art-node node-one"/><span className="art-node node-two"/><span className="art-node node-three"/><span className="art-caption">{details.category}</span></div>
      <div className="project-body">
        <div className="project-topline"><span className="project-category">{details.category}</span><span className="project-status"><i/> {details.status}</span></div>
        <h3>{details.title}</h3><p>{details.description}</p>
        <div className="tag-list">{project.technologies.map((technology) => <span className="tag" key={technology}>{technology}</span>)}</div>
        {project.id === 'rice-disease' && <p className="dataset-note">{tr(language, 'Possible dataset:', 'Bộ dữ liệu tham khảo:')} {project.dataset}</p>}
        <div className="project-bottom"><span className="coming-soon">{tr(language, project.availability, 'Sắp ra mắt')}</span><span className="project-unavailable" aria-label={tr(language, 'Repository and demo links have not been configured', 'Chưa thiết lập liên kết mã nguồn và bản demo')}>{tr(language, 'Repository', 'Mã nguồn')} <Icon name="external" /></span></div>
      </div>
    </article>
  )
}

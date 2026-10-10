import type { projects } from '../data/portfolio'
import { Icon } from './Icons'

type Project = (typeof projects)[number]

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className={`project-card accent-${project.accent}`}>
      <div className="project-art" aria-hidden="true"><div className="art-grid"/><div className="art-orbit orbit-one"/><div className="art-orbit orbit-two"/><div className="art-core"><Icon name="code" /></div><span className="art-node node-one"/><span className="art-node node-two"/><span className="art-node node-three"/><span className="art-caption">{project.category}</span></div>
      <div className="project-body">
        <div className="project-topline"><span className="project-category">{project.category}</span><span className="project-status"><i/> {project.status}</span></div>
        <h3>{project.title}</h3><p>{project.description}</p>
        <div className="tag-list">{project.technologies.map((technology) => <span className="tag" key={technology}>{technology}</span>)}</div>
        {project.id === 'rice-disease' && <p className="dataset-note">Possible dataset: {project.dataset}</p>}
        <div className="project-bottom"><span className="coming-soon">{project.availability}</span><span className="project-unavailable" aria-label="Repository and demo links have not been configured">Repository <Icon name="external" /></span></div>
      </div>
    </article>
  )
}

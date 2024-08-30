import { Project } from './Project';

interface ProjectListProps {
  projects: Project[];
}
export default function ProjectList({ projects }: ProjectListProps) {
  return (
    <div className='container'>
      {projects.map(project => (
        <div key={project.id} className='cols-sm'>
          <div className='card'>
            <img src={project.imageUrl} alt={project.name} />
            <section className='section dark'>
              <h5 className='strong'>
                <strong>{project.name}</strong>
              </h5>
              <p>{project.description}</p>
              <p>Budget : {project.budget.toLocaleString('TH', { style: 'currency', currency: 'THB' })}</p>
            </section>
          </div>
        </div>
      ))}
    </div>
  );
}

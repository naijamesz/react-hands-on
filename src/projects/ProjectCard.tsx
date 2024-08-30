import { Project } from './Project';

function formatDescription(description: string): string {
  return description.substring(0, 60) + '...';
}

interface ProjectCardProps {
  project: Project;
  onEdit: (project: Project) => void; // method for editing
}

export default function ProjectCard(props: ProjectCardProps) {
  const { project, onEdit } = props;

  const handleEditClick = (projectBeingEdited: Project) => {
    onEdit(projectBeingEdited);
  };

  return (
    <div className='card'>
      <img src={project.imageUrl} alt={project.name} />
      <section className='section dark'>
        <h5 className='strong'>
          <strong>{project.name}</strong>
        </h5>
        <p>{formatDescription(project.description)}</p>
        <p>Budget : {project.budget.toLocaleString('TH', { style: 'currency', currency: 'THB' })}</p>
        <button onClick={() => handleEditClick(project)} className='bordered'>
          <span className='icon-edit '></span>
          Edit
        </button>
      </section>
    </div>
  );
}

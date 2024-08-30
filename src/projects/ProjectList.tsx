import { Project } from './Project';
import ProjectCard from './ProjectCard';

interface ProjectListProps {
  projects: Project[];
}
export default function ProjectList({ projects }: ProjectListProps) {
  const items = projects.map(project => (
    <div key={project.id} className='cols-sm'>
      <ProjectCard project={project}></ProjectCard>
    </div>
  ));
  return (
    <>
      <div className='row'>{items}</div>;
    </>
  );
}

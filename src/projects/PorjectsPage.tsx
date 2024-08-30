import { Fragment } from 'react/jsx-runtime';
import { MOCK_PROJECTS } from './MockProject';
import { Project } from './Project';
import ProjectList from './ProjectList';

export default function PorjectsPage() {
  const saveProject = (project: Project) => {
    console.log('Saving project: ', project);
  };
  return (
    <Fragment>
      {/* pre = preformatted */}
      <h1>Projects</h1>
      <ProjectList onSave={saveProject} projects={MOCK_PROJECTS} />
    </Fragment>
  );
}

import { useState } from 'react';
import { Fragment } from 'react/jsx-runtime';
import { MOCK_PROJECTS } from './MockProject';
import { Project } from './Project';
import ProjectList from './ProjectList';

export default function PorjectsPage() {
  const [projects, setProjects] = useState<Project[]>(MOCK_PROJECTS);
  const saveProject = (project: Project) => {
    // console.log('Saving project: ', project);
    let updatedProjects = projects.map((p: Project) => {
      return p.id === project.id ? project : p;
    });
    setProjects(updatedProjects);
  };
  return (
    <Fragment>
      {/* pre = preformatted */}
      <h1>Projects</h1>
      <ProjectList onSave={saveProject} projects={projects} />
      {/* <ProjectList onSave={saveProject} projects={MOCK_PROJECTS} /> */}
    </Fragment>
  );
}

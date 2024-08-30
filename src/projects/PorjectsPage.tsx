import { MOCK_PROJECTS } from './MockProject';
import ProjectList from './ProjectList';
export default function PorjectsPage() {
  return (
    <>
      {/* pre = preformatted */}
      <h1>Projects</h1>
      <ProjectList projects={MOCK_PROJECTS} />
    </>
  );
}

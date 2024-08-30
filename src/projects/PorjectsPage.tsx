import { MOCK_PROJECTS } from './MockProject';
export default function PorjectsPage() {
  return (
    <>
      {/* pre = preformatted */}
      <h1>Projects</h1>
      <pre>{JSON.stringify(MOCK_PROJECTS, null, '')}</pre>
    </>
  );
}

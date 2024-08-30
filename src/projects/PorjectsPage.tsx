import { useEffect, useState } from 'react';
import { Fragment } from 'react/jsx-runtime';
import { Project } from './Project';
import ProjectList from './ProjectList';
import { projectAPI } from './projectAPI';

export default function PorjectsPage() {
  // const [projects, setProjects] = useState<Project[]>(MOCK_PROJECTS); // old mock
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | undefined>(undefined);
  const [currentPage, setCurrentPage] = useState(1);

  const handleMoreClick = () => {
    setCurrentPage(currentPage => currentPage + 1);
  };

  // !Approach 1: using promise then hard to read
  //  useEffect(() => {
  //    setLoading(true);
  //    projectAPI
  //      .get(1)
  //      .then((data) => {
  //        setError(null);
  //        setLoading(false);
  //        setProjects(data);
  //      })
  //      .catch((e) => {
  //        setLoading(false);
  //        setError(e.message);
  //        if (e instanceof Error) {
  //           setError(e.message);
  //        }
  //      });
  //  }, []);

  // !Approach 2: using async/await
  useEffect(() => {
    async function loadProjects() {
      setLoading(true);
      try {
        // const data = await projectAPI.get(1);
        const data = await projectAPI.get(currentPage);
        if (currentPage === 1) {
          setProjects(data);
        } else {
          setProjects(projects => [...projects, ...data]);
        }
        // setError('');
      } catch (e) {
        if (e instanceof Error) {
          setError(e.message);
        }
      } finally {
        setLoading(false);
      }
    }
    loadProjects();
  }, [currentPage]);

  const saveProject = (project: Project) => {
    // console.log('Saving project: ', project);

    projectAPI
      .put(project)
      .then(updatedProject => {
        let updatedProjects = projects.map((p: Project) => {
          return p.id === project.id ? project : p;
        });
        setProjects(updatedProjects);
      })
      .catch(e => {
        if (e instanceof Error) {
          setError(e.message);
        }
      });
  };
  return (
    <Fragment>
      {/* pre = preformatted */}
      <h1>Projects</h1>

      {error && (
        <div className='row'>
          <div className='card large error'>
            <section>
              <p>
                <span className='icon-alert inverse'></span>
                {error}
              </p>
            </section>
          </div>
        </div>
      )}
      <ProjectList onSave={saveProject} projects={projects} />

      {!loading && !error && (
        <div className='row'>
          <div className='col-sm-12'>
            <div className='button-group fluid'>
              <button className='button default' onClick={handleMoreClick}>
                More...
              </button>
            </div>
          </div>
        </div>
      )}

      {loading && (
        <div className='center-page'>
          <span className='spinner primary'></span>
          <p>Loading...</p>
        </div>
      )}
      {/* <ProjectList onSave={saveProject} projects={MOCK_PROJECTS} /> */}
    </Fragment>
  );
}

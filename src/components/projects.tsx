import { faGithub } from '@fortawesome/free-brands-svg-icons';
import resume from '../resume.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Projects = () => {
  return (
    <section className="flex-1">
      <header>
        <h2>Side Projects</h2>
      </header>
      {resume.projects.map(({ url, name, description }) => (
        <article key={name}>
          <header className="whitespace-nowrap">
            <h3>{name}</h3>
            <a className="text-sm " href={url.toString()}>
              {url.toString().includes('github') && (
                <FontAwesomeIcon icon={faGithub} />
              )}
              {' ' + url}
            </a>
          </header>
          <p>{description}</p>
        </article>
      ))}
    </section>
  );
};

export default Projects;

import { Component, h } from "preact";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { flow } from "lodash-es";
import { extractorComponent } from "./hoc/resume-data-extractor";
import { resumeSection } from "./hoc/resume-section";
import { ResumeSchema } from "../types/resume";


type ProjectType = 'volunteering' | 'presentation' | 'talk' | 'application' | 'conference';

interface ProjectProps {
  name: string;
  description: string;
  url: URL;
  type: ProjectType;
  highlights: string[];
}

class Project extends Component<ProjectProps> {

  render({ name, description, url }: ProjectProps) {
    return (
      <article>
        <header>
          <h3>{name}</h3>
          <small>
            {url.toString().includes('github') && <FontAwesomeIcon icon={faGithub} />}&nbsp;
            <a href={url.toString()}>{url.toString()}</a>
          </small>
        </header>
        <p>{description}</p>
      </article>
    );
  }

}

function extractProjects(resume: ResumeSchema): ProjectProps[] {
  return resume.projects.map(p => ({
    name: p.name,
    description: p.description,
    type: p.type as ProjectType,
    url: new URL(p.url),
    highlights: p.highlights
  }));
}

export const ProjectSection = flow(
  extractorComponent(extractProjects),
  resumeSection('Open Source Projects')
)(Project);

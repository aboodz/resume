import { Component, h } from "preact";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";


export type ProjectType = 'volunteering' | 'presentation' | 'talk' | 'application' | 'conference';

export interface ProjectData {
  name: string;
  description: string;
  url: URL;
  type: ProjectType;
  highlights: string[];
}

export class Project extends Component<ProjectData> {

  render({ name, description, url }: ProjectData) {
    return (
      <section>
        <h3>
          {name}
          <br />
          <small>
            {url.toString().includes('github') && <FontAwesomeIcon icon={faGithub} />}&nbsp;
            <a href={url.toString()}>{url.toString()}</a>
          </small>
        </h3>

        <p>{description}</p>
      </section>
    );
  }

}

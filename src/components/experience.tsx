import { Component, h } from "preact";
import { cvDateFormat } from "../util/date-format";
import { companyImageMap } from "../mappers/companyImage";


export interface WorkExperienceData {
  company: string;
  location: string;
  position: string[];
  website: URL;
  startDate: Date;
  endDate?: Date;
  summary: string;
  highlights: string[];
}

export class WorkExperience extends Component<WorkExperienceData> {
  render({ company, location, highlights, position, startDate, summary, website, endDate }: WorkExperienceData) {
    return (
      <article class="work-experience">
        <h3>{company}</h3>
        <aside class="logo">
          <a href={website.toString()}><img src={companyImageMap[company]} /></a>
        </aside>
        <section class="timeline">
          <header>
            <h4>{position}</h4>
            <small>
              <span>{cvDateFormat(startDate)} - {cvDateFormat(endDate)}</span>
              <br />
              <span>{location}</span>
            </small>
          </header>
          <p>
            {summary}
            <ul>
              {highlights.map(hilight => (<li>{hilight}</li>))}
            </ul>
          </p>
        </section>
      </article>
    );
  }
}

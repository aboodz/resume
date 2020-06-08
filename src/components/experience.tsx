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
      <section class="work-experience">
        <h3>{company} </h3>
        <a class="logo" href={website.toString()}><img src={companyImageMap[company]} /></a>
        <div class="timeline">
          <h4>
            {position}
            <br />
            <small>
              <span>{cvDateFormat(startDate)} - {cvDateFormat(endDate)}</span>
              <br />
              <span>{location}</span>
            </small>
          </h4>
          <p>{summary}</p>
          <ul>
            {highlights.map(hilight => (<li>{hilight}</li>))}
          </ul>
        </div>
      </section>
    );
  }
}

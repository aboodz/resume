import { Component, h } from "preact";
import { cvDateFormat } from "../util/date-format";
import { companyImageMap } from "../mappers/companyImage";
import { flow } from "lodash-es";
import { resumeSection } from "./hoc/resume-section";
import { ResumeSchema } from "../types/resume";
import { extractorComponent } from "./hoc/resume-data-extractor";


interface WorkExperienceProps {
  company: string;
  location: string;
  position: string[];
  website: URL;
  startDate: Date;
  endDate?: Date;
  summary: string;
  highlights: string[];
}

class WorkExperience extends Component<WorkExperienceProps> {
  render({ company, location, highlights, position, startDate, summary, website, endDate }: WorkExperienceProps) {
    return (
      <article class="work-experience">
        <h3>{company}</h3>
        <figure class="logo">
          <a href={website.toString()}><img alt={`${company} logo`} src={companyImageMap[company]} /></a>
        </figure>
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

function extractWorkExperience(resume: ResumeSchema): WorkExperienceProps[] {
  return resume.work.map(w => ({
    company: w.name,
    location: w.location,
    position: [w.position],
    startDate: new Date(w.startDate),
    endDate: w.endDate ? new Date(w.endDate) : null,
    website: new URL(w.website),
    summary: w.summary,
    highlights: w.highlights,
  }));
}

export const WorkExperienceSection = flow(
  extractorComponent(extractWorkExperience),
  resumeSection('Work Experience'),
)(WorkExperience)


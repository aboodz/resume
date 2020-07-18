import { Component, h } from "preact";
import { cvDateFormat } from "../util/date-format";
import { flow } from "lodash-es";
import { ResumeSchema } from "../types/resume";
import { resumeSection } from "./hoc/resume-section";
import { extractorComponent } from "./hoc/resume-data-extractor";

interface EducationProps {
  institution: string;
  major: string;
  degree: string;
  startDate: Date;
  endDate: Date;
  gpa: number;
  courses: string[]
}


class Education extends Component<EducationProps> {
  render({ institution, major, courses, degree, endDate, gpa, startDate }: EducationProps) {
    return (
      <article class="education">
        <hgroup>
          <h3>{institution.split('|')[0]} <br /></h3>
          <address>{institution.split('|')[1]} <br /></address>
        </hgroup>
        <p>
          <em>{degree} in {major} {gpa > 3 ? `, with ${gpa}/4.00 GPA` : ''}</em> <br />
          <small>Graduated in {cvDateFormat(endDate)}<br /></small>
        </p>
      </article>
    );
  }
}

function extractEducation(resume: ResumeSchema): EducationProps[] {
  return resume.education.map(e => ({
    institution: e.institution,
    courses: e.courses,
    degree: e.studyType,
    startDate: new Date(e.startDate),
    endDate: e.endDate ? new Date(e.endDate) : null,
    gpa: parseInt(e.gpa, 10),
    major: e.area
  }));
}

export const EducationSection = flow(
  extractorComponent(extractEducation),
  resumeSection('Education')
)(Education);

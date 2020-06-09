import { Component, h } from "preact";
import { cvDateFormat } from "../util/date-format";


export interface EducationData {
  institution: string;
  major: string;
  degree: string;
  startDate: Date;
  endDate: Date;
  gpa: number;
  courses: string[]
}


export class Education extends Component<EducationData> {
  render({ institution, major, courses, degree, endDate, gpa, startDate }: EducationData) {
    return (
      <section>
        <header>
          <h3>{institution.split('|')[0]} <br /></h3>
          <span>{institution.split('|')[1]} <br /></span>
          <em>{degree} in {major} {gpa > 3 ? `, with ${gpa}/4.00 GPA` : ''}</em> <br />
          <small>Graduated in {cvDateFormat(endDate)}  <br /></small>
        </header>
        <p>
          notable courses:
          <ul class="courses">
            {courses.map(course => (<li>{course}</li>))}
          </ul>
        </p>
      </section>
    );
  }
}

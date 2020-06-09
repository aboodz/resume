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
      <li>
        <h3>
          {institution.split('|')[0]} <br />
          <small>{institution.split('|')[1]}</small>
        </h3>
        <h4>
          Graduated in {cvDateFormat(endDate)}  <br />
          <small>{degree} in {major} {gpa > 3 ? `, with ${gpa}/4.00 GPA` : ''}</small>
        </h4>
        <ul class="courses">
          {courses.map(course => (<li>{course}</li>))}
        </ul>
      </li>
    );
  }
}

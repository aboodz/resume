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
        {cvDateFormat(startDate)} - {cvDateFormat(endDate)}: <br />
        {degree} in {major}, {institution} {gpa > 3 ? `with ${gpa}/4.00 GPA` : ''}
      </li>
    );
  }
}

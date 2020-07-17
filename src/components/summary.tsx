import { Component, h, ComponentType, ComponentClass } from "preact";
import { resumeSection } from "./hoc/resume-section";
import { resumeComponent } from "./hoc/resume-data-extractor";
import { flowRight } from "lodash-es"


interface SummaryProps {
  summary: string;
}

class Summary extends Component<SummaryProps> {
  render({summary}: SummaryProps) {
    return (
      <p>{summary}</p>
    )
  }
}

export const SummarySection = flowRight(
  resumeComponent((resume) => ({summary: resume.basics.summary})),
  resumeSection('Summary', 'summary')
)(Summary)

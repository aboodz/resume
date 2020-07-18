import { Component, h, ComponentType, ComponentClass } from "preact";
import { resumeSection } from "./hoc/resume-section";
import { extractorComponent } from "./hoc/resume-data-extractor";
import { flow } from "lodash-es"


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

export const SummarySection = flow(
  extractorComponent((resume) => ({summary: resume.basics.summary})),
  resumeSection('Summary'),
)(Summary)

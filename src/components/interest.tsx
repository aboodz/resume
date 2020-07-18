import { Component, h } from "preact";
import { flow } from "lodash-es";
import { extractorComponent } from "./hoc/resume-data-extractor";
import { ResumeSchema } from "../types/resume";
import { resumeSection } from "./hoc/resume-section";


interface IntresetData {
  name: string;
  keywords: string[];
}

interface IntresetProps {
  intrests: IntresetData[];
};

class Interest extends Component<IntresetProps> {
  render({ intrests }: IntresetProps) {
    return (
      <p>{intrests.map(i => i.name).join(', ')}</p>
    );
  }
}

function extractInterests(resume: ResumeSchema): IntresetProps {
  return {
    intrests: resume.interests.map(i => ({ name: i.name, keywords: i.keywords }))
  }
}

export const InterestSection = flow(
  extractorComponent(extractInterests),
  resumeSection('Interests')
)(Interest)

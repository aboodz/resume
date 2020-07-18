import { Component, h } from "preact";
import { flow } from "lodash-es";
import { extractorComponent } from "./hoc/resume-data-extractor";
import { ResumeSchema } from "../types/resume";
import { resumeSection } from "./hoc/resume-section";

type Fluency = 'native' | 'fluent' | 'advanced' | 'intermediate' | 'beginner'

interface LanguageData {
  langauge: string;
  fluency: Fluency;
}

class Language extends Component<LanguageData> {
  render({ langauge, fluency }: LanguageData) {
    return (
      <div>{langauge}: {fluency}</div>
    );
  }

}

function extractLanguages(resume: ResumeSchema): LanguageData[] {
  return resume.languages.map(l => ({
    langauge: l.language,
    fluency: l.fluency as Fluency
  }));
}


export const LanguageSection = flow(
  extractorComponent(extractLanguages),
  resumeSection
)(Language);

import { Component, h } from "preact";
import { flow } from "lodash-es";
import { extractorComponent } from "./hoc/resume-data-extractor";
import { ResumeSchema } from "../types/resume";
import { resumeSection } from "./hoc/resume-section";

type Fluency = 'native' | 'fluent' | 'advanced' | 'intermediate' | 'beginner'

interface LanguageData {
  language: string;
  fluency: Fluency;
}

class Language extends Component<LanguageData> {
  render({ language, fluency }: LanguageData) {
    return (
      <div>{language}: {fluency}</div>
    );
  }

}

function extractLanguages(resume: ResumeSchema): LanguageData[] {
  return resume.languages.map(l => ({
    language: l.language,
    fluency: l.fluency as Fluency
  }));
}


export const LanguageSection = flow(
  extractorComponent(extractLanguages),
  resumeSection('Languages')
)(Language);

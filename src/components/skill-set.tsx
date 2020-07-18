import { Component, h } from "preact";
import { flow } from "lodash-es";
import { extractorComponent } from "./hoc/resume-data-extractor";
import { ResumeSchema } from "../types/resume";
import { resumeSection } from "./hoc/resume-section";

export interface SkillSetProps {
  name: string;
  level: string;
  keywords: string[];
}

export class SkillSet extends Component<SkillSetProps> {
  render({ name, level, keywords }: SkillSetProps) {
    return (
      <article class="skill-set">
        <h4>{name} {level ? <span class="level">{level}</span> : ''}</h4>
        <p class="keywords">{keywords.join(', ')}</p>
      </article>
    );
  }

}

function extractSkills(resume: ResumeSchema): SkillSetProps[] {
  return resume.skills.map(s => ({
    name: s.name,
    level: s.level,
    keywords: s.keywords
  }));
}

export const SkillsSection = flow(
  extractorComponent(extractSkills),
  resumeSection('Technologies and Skills', {cssClass: 'skills'})
)(SkillSet)

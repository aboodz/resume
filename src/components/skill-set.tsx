import { Component, h } from "preact";

export interface SkillSetData {
  name: string;
  level: string;
  keywords: string[];
}

export class SkillSet extends Component<SkillSetData> {
  render({ name, level, keywords }: SkillSetData) {
    return (
      <article class="skill-set">
        <h4>{name} {level ? <span class="level">{level}</span> : ''}</h4>
        <p class="keywords">{keywords.join(', ')}</p>
      </article>
    );
  }

}

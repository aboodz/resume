import { Component, h } from "preact";

export type Fluency = 'native' | 'fluent' | 'advanced' | 'intermediate' | 'beginner'

export interface LanguageData {
  langauge: string;
  fluency: Fluency;
}

export class Language extends Component<LanguageData> {
  render({langauge, fluency} :LanguageData) {
    return (
    <div>{langauge}: {fluency}</div>
    );
  }

}

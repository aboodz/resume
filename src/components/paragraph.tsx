import { Component, h } from 'preact';

export class ParagraphData {
  title: string;
  text: string;
}

export class Paragraph extends Component<ParagraphData> {
  render({ title, text }: ParagraphData) {
    return (
      <article class="paragraph" aria-label={title}>
        <h2>{title}</h2>
        <p>{text}</p>
      </article>
    );
  }
}

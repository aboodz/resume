import { Component, h } from 'preact';

export class ParagraphData {
  title: string;
  text: string;
}

export class Paragraph extends Component<ParagraphData> {
  render({ title, text }: ParagraphData) {
    return (
      <div>
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
    );
  }
}

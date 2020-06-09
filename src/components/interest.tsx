import { Component, h } from "preact";


export interface IntresetData {
  name: string;
  keywords: string[];
}

export interface Interests {
  intrests: IntresetData[];
};

export class Interest extends Component<Interests> {
  render({ intrests }: Interests) {
    return (
      <section>
        <h2>Interests</h2>
        <p>{intrests.map(i => i.name).join(', ')}</p>
      </section>
    );
  }
}

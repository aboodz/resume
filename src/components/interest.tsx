import { Component, h } from "preact";


export interface IntresetData {
  name: string;
  keywords: string[];
}


export class Interest extends Component<IntresetData> {
  render({ name }: IntresetData) {
    return (
      <li>{name}</li>
    );
  }
}

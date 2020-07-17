import { Component, h, ComponentType } from "preact";


export const resumeSection = <PROPS extends object>(title: string, role: string) => (WrappedComponent: ComponentType<PROPS>): ComponentType<PROPS> => {
  return class SectionComponent extends Component<PROPS> {

    render(props: PROPS) {
      return (
        <section role={role} aria-label={title}>
          <h2>{title}</h2>
          <WrappedComponent {...props} />
        </section>
      )
    }

  };
}



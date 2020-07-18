import { Component, h, ComponentType } from "preact";
import { CurryRight } from "lodash";

export const resumeSection = (title: string, config: {role?: string, cssClass?: string} = {}) => <T extends object>(WrappedComponent: ComponentType<T>): ComponentType<T> => {
  return class extends Component<T> {

    render(props: T) {
      return (
        <section class={config.cssClass} role={config.role} aria-label={title}>
          <h2>{title}</h2>
          <WrappedComponent {...props} />
        </section>
      )
    }

  };

}



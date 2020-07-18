import { Component, h, ComponentType } from "preact";

type SemanticType = 'section' | 'aside' | 'article';
interface SectionConfig {
  role?: string,
  cssClass?: string,
  semanticType?: SemanticType
}

export const resumeSection = (title: string, config: SectionConfig = {}) => <T extends object>(WrappedComponent: ComponentType<T>): ComponentType<T> => {

  return class extends Component<T> {

    private innerThings(props: T) {
      return [
        <h2>{title}</h2>,
        <WrappedComponent {...props} />
      ]
    }

    render(props: T) {
      switch (config.semanticType ?? 'section') {
        case 'article':
          return (
            <article class={config.cssClass} role={config.role} aria-label={title}>
              {this.innerThings(props)}
            </article>
          );
        case 'section':
          return (
            <section class={config.cssClass} role={config.role} aria-label={title}>
              {this.innerThings(props)}
            </section>
          );
        case 'aside':
          return (
            <aside class={config.cssClass} role={config.role} aria-label={title}>
              {this.innerThings(props)}
            </aside>
          );
      }
    }

  };

}



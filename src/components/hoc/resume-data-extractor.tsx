import { ComponentType, Component, h, ComponentProps } from "preact";
import { ResumeSchema } from "../../types/resume";
import { isArray } from "lodash-es";

type extractFunction<T> = (resume: ResumeSchema) => T[] | T
interface ExtractorProps {
  resume: ResumeSchema;
}

export const extractorComponent = <PROPS extends object>(extractFunction: extractFunction<PROPS>) => (WrappedComponent: ComponentType<PROPS>): ComponentType<ExtractorProps> => {

  return class extends Component<ExtractorProps> {
    render({ resume }: ExtractorProps) {
      const extractorResult = extractFunction(resume);
      if (isArray(extractorResult)) {
        return extractorResult.map(props => (<WrappedComponent {...props} />));
      } else {
        return <WrappedComponent {...extractorResult} />
      }
    }
  }

}

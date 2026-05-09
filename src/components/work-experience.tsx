import resume from '../resume-slim.json';
import Company from './company';

const WorkExperienece = () => {
  return (
    <section>
      <h2>Work Experience</h2>
      {(resume.work as unknown as Array<Record<string, unknown>>).map(
        (company) => (
          <Company
            key={company.name as string}
            {...(company as Parameters<typeof Company>[0])}
          />
        ),
      )}
    </section>
  );
};

export default WorkExperienece;

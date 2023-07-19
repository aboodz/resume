import resume from '../resume.json';
import Company from './company';

const WorkExperienece = () => {
  return (
    <section>
      <h2>Work Experience</h2>
      {resume.work.map((company) => (
        <Company key={company.name} {...company} />
      ))}
    </section>
  );
};

export default WorkExperienece;

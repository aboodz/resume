import cvDateFormat from '../formatters/cv-date-format';
import resume from '../resume.json';

const Education = () => {
  return (
    <section>
      <h2>Education</h2>
      {resume.education.map(
        ({ studyType, area: major, endDate, institution, gpa }) => {
          return (
            <article>
              <header className="whitespace-nowrap">
                <h3>{institution.split('|')[0]}</h3>
                <span>{institution.split('|')[1]}</span>
              </header>
              <p>
                <em>
                  {studyType} in {major}{' '}
                  {parseFloat(gpa) > 3 ? `, with ${gpa}/4.00 GPA` : ''}
                </em>{' '}
                <br />
                <small>
                  Graduated in {cvDateFormat(new Date(endDate))}
                  <br />
                </small>
              </p>
            </article>
          );
        }
      )}
    </section>
  );
};

export default Education;

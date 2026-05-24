import resume from '../resume.json';

const Education = () => {
  return (
    <section>
      <h2>Education</h2>
      {resume.education.map(({ studyType, area, endDate, institution }) => {
        const [school, place] = institution.split('|').map((s) => s.trim());
        const year = new Date(endDate).getFullYear();
        return (
          <article key={institution}>
            <h3>
              {studyType} in {area}
            </h3>
            <p className="text-sm leading-snug mb-0">
              {school}
              {place ? ` · ${place}` : ''} · {year}
            </p>
          </article>
        );
      })}
    </section>
  );
};

export default Education;

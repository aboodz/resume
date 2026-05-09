import resume from '../resume-slim.json';

const Education = () => {
  return (
    <section>
      <h2>Education</h2>
      {resume.education.map(({ studyType, area, endDate, institution }) => {
        const [school, place] = institution.split('|').map((s) => s.trim());
        const year = new Date(endDate).getFullYear();
        return (
          <p key={institution} className="leading-snug mb-0">
            <strong>{studyType}</strong> in {area} — {school}
            {place ? `, ${place}` : ''} ({year})
          </p>
        );
      })}
    </section>
  );
};

export default Education;

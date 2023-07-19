import resume from '../resume.json';

const Interests = () => {
  return (
    <article>
      <h2>Interests</h2>
      <p>{resume.interests.map((i) => i.name).join(', ')}</p>
    </article>
  );
};

export default Interests;

import resume from '../resume.json';

const Languages = () => {
  return (
    <article>
      <h2>Languages</h2>
      <ul>
        {resume.languages.map(({ language, fluency }) => (
            <li key={language}>
                {language}: {fluency}
            </li>
        ))}
      </ul>
    </article>
  );
};

export default Languages;

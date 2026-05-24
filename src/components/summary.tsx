import resume from '../resume.json';

const Summary = () => {
  const { summary } = resume.basics;

  return (
    <article>
      <h2>Summary</h2>
      <p className="leading-snug">{summary}</p>
    </article>
  );
};

export default Summary;

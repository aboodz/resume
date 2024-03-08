import resume from '../resume.json';

const Skills = () => {
  return (
    <aside className="flex-2 p-4 bg-gray-100">
      <h2>Technologies and Skills</h2>
      {resume.skills.map(({ name, keywords }) => (
        <article key={name}>
          <header>
            <h3 className="mb-2">{name}</h3>
          </header>
          <p className="ps-4 mb-4">{keywords.join(', ')}</p>
        </article>
      ))}
    </aside>
  );
};

export default Skills;

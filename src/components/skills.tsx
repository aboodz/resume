import { FC, ReactNode } from 'react';
import resume from '../resume.json';

const SkillLevel: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <span className="bg-gray-500 rounded-md text-white text-xs font-semibold px-1 py-0.5 text-center no-underline uppercase whitespace-nowrap float-right">
      {children}
    </span>
  );
};

const Skills = () => {
  return (
    <aside className="flex-2 p-4 bg-gray-100">
      <h2>Technologies and Skills</h2>
      {resume.skills.map(({ name, level, keywords }) => (
        <article>
          <header>
            <h3 className="mb-2">{name}</h3>
            {level ? <SkillLevel>{level}</SkillLevel> : null}
          </header>
          <p className="ps-4 mb-4">{keywords.join(', ')}</p>
        </article>
      ))}
    </aside>
  );
};

export default Skills;

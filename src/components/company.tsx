import { FC } from 'react';
import resume from '../resume.json';
import cvDateFormat from '../formatters/cv-date-format';

type CompanyProps = (typeof resume)['work'][0];

const Company: FC<CompanyProps> = (props) => {
  const { name, position, location, website, highlights, summary } = props;

  const startDate = cvDateFormat(new Date(props.startDate));
  const endDate = props.endDate
    ? cvDateFormat(new Date(props.endDate))
    : 'present';

  return (
    <article className="flex flex-col">
      <header className="flex flex-row my-2 items-center justify-between">
        <h3>{name}</h3>
        <a href={website.toString()}>
          <img
            className="m-0 block"
            height="64"
            width="150"
            alt={`${name} logo`}
            src={companyImageMap[name]}
          />
        </a>
      </header>

      {/* maybe this should be on its own component: Position */}
      <section className="flex flex-col ps-4 border-l-4 border-l-solid border-l-gray-400">
        <header className="flex flex-row justify-between">
          <hgroup>
            <h4>{position}</h4>
            <p className="text-sm leading-snug">
              {startDate} - {endDate}
              <br />
              {location}
            </p>
          </hgroup>
        </header>
        <p>{summary}</p>
        <ul className="list-disc ps-4 leading-snug">
          {highlights.map((hilight, index) => (
            <li key={index}>{hilight}</li>
          ))}
        </ul>
      </section>
    </article>
  );
};

export const companyImageMap: { [key: string]: string } = {
  'Majid Al Futtaim': ' /mafh.png',
  Mondia: '/mondia.svg',
  'Fujitsu Consulting': '/fujitsu.png',
};

export default Company;

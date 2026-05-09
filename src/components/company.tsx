import { FC } from 'react';
import cvDateFormat from '../formatters/cv-date-format';
import { companyImageMap } from './logos';

type Position = {
  position: string;
  startDate: string;
  endDate?: string;
  summary?: string;
  highlights?: string[];
};

type CompanyProps = {
  name: string;
  website: string;
  location: string;
  position?: string;
  startDate?: string;
  endDate?: string;
  summary?: string;
  highlights?: string[];
  positions?: Position[];
};

const formatRange = (startDate: string, endDate?: string) => {
  const start = cvDateFormat(new Date(startDate));
  const end = endDate ? cvDateFormat(new Date(endDate)) : 'Present';
  return `${start} - ${end}`;
};

const PositionBlock: FC<Position & { location: string }> = ({
  position,
  startDate,
  endDate,
  highlights,
  location,
}) => (
  <section className="flex flex-col ps-4 border-l-4 border-l-solid border-l-gray-400 mb-1">
    <header>
      <hgroup>
        <h4>{position}</h4>
        <p className="text-sm leading-snug mb-0">
          {formatRange(startDate, endDate)} · {location}
        </p>
      </hgroup>
    </header>
    {highlights && highlights.length > 0 && (
      <ul className="list-disc ps-4 leading-snug mb-1">
        {highlights.map((h, i) => (
          <li key={i}>{h}</li>
        ))}
      </ul>
    )}
  </section>
);

const Company: FC<CompanyProps> = (props) => {
  const { name, website, location, positions } = props;

  const positionList: Position[] =
    positions ??
    (props.position
      ? [
          {
            position: props.position,
            startDate: props.startDate!,
            endDate: props.endDate,
            summary: props.summary,
            highlights: props.highlights,
          },
        ]
      : []);

  return (
    <article className="flex flex-col mb-2">
      <header className="flex flex-row items-center justify-between">
        <h3>{name}</h3>
        <a
          href={website.toString()}
          className="flex items-center justify-end"
          style={{ height: 32, width: 110 }}
        >
          <img
            className="m-0 block"
            alt={`${name} logo`}
            src={companyImageMap[name]}
            style={{
              maxHeight: '100%',
              maxWidth: '100%',
              objectFit: 'contain',
            }}
          />
        </a>
      </header>

      {positionList.map((p, i) => (
        <PositionBlock key={i} {...p} location={location} />
      ))}
    </article>
  );
};

export default Company;

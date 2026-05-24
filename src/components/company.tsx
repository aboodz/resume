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
  return `${start} – ${end}`;
};

const PositionBlock: FC<Position> = ({
  position,
  startDate,
  endDate,
  highlights,
}) => (
  <div className="flex flex-col ps-4 border-l-4 border-l-solid border-l-gray-400 mb-1">
    <header>
      <h4>{position}</h4>
      <p className="text-xs leading-snug text-gray-600 mb-0">
        {formatRange(startDate, endDate)}
      </p>
    </header>
    {highlights && highlights.length > 0 && (
      <ul className="list-disc ps-4 leading-snug mb-1">
        {highlights.map((h, i) => (
          <li key={i}>{h}</li>
        ))}
      </ul>
    )}
  </div>
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
      <header className="flex flex-row items-center justify-between mb-2">
        <hgroup>
          <h3>{name}</h3>
          <p className="text-sm text-gray-700 mb-0 leading-snug">{location}</p>
        </hgroup>
        <a
          href={website.toString()}
          aria-label={`${name} website`}
          className="flex items-center justify-end"
          style={{ height: 32, width: 110 }}
        >
          <img
            className="m-0 block"
            alt={`${name} logo`}
            src={companyImageMap[name]}
            style={{
              height: '100%',
              width: 'auto',
              maxWidth: '100%',
              objectFit: 'contain',
              objectPosition: 'right center',
            }}
          />
        </a>
      </header>

      {positionList.map((p, i) => (
        <PositionBlock key={i} {...p} />
      ))}
    </article>
  );
};

export default Company;

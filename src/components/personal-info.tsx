import { FC, Fragment } from 'react';

import resume from '../resume.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  IconDefinition,
  faAt,
  faLocationDot,
  faPhoneSquareAlt,
} from '@fortawesome/free-solid-svg-icons';
import {
  faGithub,
  faLinkedin,
  faStackOverflow,
} from '@fortawesome/free-brands-svg-icons';

const PersonalInfo: FC = () => {
  const { name, label, email, phone, location } = resume.basics;

  const profiles = extractProfiles(resume.basics.profiles);
  const locationText = [location?.city, location?.countryCode]
    .filter(Boolean)
    .join(', ');

  return (
    <div className="flex items-center">
      <hgroup className="flex-1">
        <h1>{name}</h1>
        <p>{label}</p>
        <p className="text-sm text-gray-700 mb-0 leading-snug">
          TypeScript · React · Node.js · Microfrontends · LLM tooling
        </p>
      </hgroup>
      <address className="text-center leading-tight">
        {locationText && (
          <Fragment>
            <span>
              <FontAwesomeIcon icon={faLocationDot} /> {locationText}
            </span>
            <br />
          </Fragment>
        )}
        {phone && (
          <Fragment>
            <a href={`tel:${phone}`}>
              <FontAwesomeIcon icon={faPhoneSquareAlt} /> {phone}
            </a>
            <br />
          </Fragment>
        )}
        {email && (
          <Fragment>
            <a href={`mailto:${email}`}>
              <FontAwesomeIcon icon={faAt} /> {email}
            </a>
            <br />
          </Fragment>
        )}
        {profiles.map((p) => (
          <Fragment key={p.network}>
            <a href={p.url.href} aria-label={`${p.network} profile`}>
              <FontAwesomeIcon icon={networkMapping[p.network]} /> {p.url.host}
              {p.url.pathname}
            </a>
            <br />
          </Fragment>
        ))}
      </address>
    </div>
  );
};

type Profiles = (typeof resume)['basics']['profiles'];
export function extractProfiles(profiles: Profiles) {
  return profiles.map((p) => ({
    network: p.network,
    url: new URL(p.url),
    username: p.username,
  }));
}

export const networkMapping: { [key: string]: IconDefinition } = {
  Stackoverflow: faStackOverflow,
  GitHub: faGithub,
  LinkedIn: faLinkedin,
};

export default PersonalInfo;

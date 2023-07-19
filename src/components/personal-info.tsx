import { FC, Fragment } from 'react';

import resume from '../resume.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  IconDefinition,
  faAt,
  faMapMarkedAlt,
  faPhoneSquareAlt,
} from '@fortawesome/free-solid-svg-icons';
import localizeCountryCode from '../formatters/localize-country-code';
import {
  faGithub,
  faLinkedin,
  faStackOverflow,
} from '@fortawesome/free-brands-svg-icons';

const PersonalInfo: FC = () => {
  const { name, label, email, phone, location } = resume.basics;

  const country = localizeCountryCode(location.countryCode);
  const address = `${location.city}, ${country}`;

  const profiles = extractProfiles(resume.basics.profiles);

  return (
    <div className="flex items-center">
      <hgroup className="flex-1">
        <h1>{name}</h1>
        <span>{label}</span>
      </hgroup>
      <address className="text-center leading-tight">
        {phone && (
          <Fragment>
            <a>
              <FontAwesomeIcon icon={faPhoneSquareAlt} /> {phone}
            </a>
            <br />
          </Fragment>
        )}
        <a href={`http://maps.google.com/?q=${address}`}>
          <FontAwesomeIcon icon={faMapMarkedAlt} /> {address}
        </a>
        <br />
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
            <a href={p.url.href}>
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

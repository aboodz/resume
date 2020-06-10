import { Component, h } from 'preact';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileAlt, faPhoneSquareAlt, faMapMarkedAlt, faAt } from '@fortawesome/free-solid-svg-icons';
import { map, groupBy } from 'lodash-es';
import { networkMapping } from '../mappers/networkIcon';

export interface ProfileData {
  network: string;
  username: string;
  url: URL;
}

export interface PersonaInfoData {
  name: string
  label: string;
  email: string;
  mobile: string;
  telephone: string;
  address: string;
  profiles: ProfileData[];
}

export class PersonalInfo extends Component<PersonaInfoData> {

  groupByUsername(profiles: ProfileData[]) {
    return map(groupBy(profiles, 'username'), (p, username) => {
      return { username, profiles: p };
    });
  }

  render({ name, label, email, mobile, telephone, address, profiles }: PersonaInfoData) {
    return (
      <section style="display: flex;">
        <header style="flex: 2">
          <h1>{name}</h1>
          <span>{label}</span>
        </header>
        <address style="flex: 1; text-align: center;">
          {mobile && [<a href={`tel:${mobile}`}><FontAwesomeIcon icon={faMobileAlt} /> {mobile}</a>, <br />]}
          {telephone && [<a><FontAwesomeIcon icon={faPhoneSquareAlt} /> {telephone}</a>, <br />]}
          <a href={`http://maps.google.com/?q=${address}`}><FontAwesomeIcon icon={faMapMarkedAlt} /> {address}</a><br />
          {email && [<a href={`mailto:${email}`}><FontAwesomeIcon icon={faAt} /> {email}</a>, <br />]}
          {
            profiles.map(p =>
              (
                [
                <a href={p.url.href}><FontAwesomeIcon icon={networkMapping[p.network]} />&nbsp;{p.url.host}{p.url.pathname}</a>,
                  <br />
                ]
              )
            )
          }
        </address>
      </section>
    )
  }
}

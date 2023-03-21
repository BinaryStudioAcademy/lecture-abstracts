import { ContactIcon } from '~/enums/enums';
import { faGlobe } from '@fortawesome/pro-solid-svg-icons';
import {
  faGithub,
  faStackOverflow,
  faFacebook,
  faLinkedin,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';

const nameToIcon = {
  [ContactIcon.FACEBOOK]: faFacebook,
  [ContactIcon.GITHUB]: faGithub,
  [ContactIcon.GLOBE]: faGlobe,
  [ContactIcon.STACK_OVERFLOW]: faStackOverflow,
  [ContactIcon.LINKEDIN]: faLinkedin,
  [ContactIcon.INSTAGRAM]: faInstagram,
};

export { nameToIcon };

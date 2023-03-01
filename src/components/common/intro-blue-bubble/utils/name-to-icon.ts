import { ContactIcon } from '~/enums';
import { faGlobe } from '@fortawesome/pro-solid-svg-icons';
import {
  faGithub,
  faStackOverflow,
  faFacebook,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

const nameToIcon = {
  [ContactIcon.FACEBOOK]: faFacebook,
  [ContactIcon.GITHUB]: faGithub,
  [ContactIcon.GLOBE]: faGlobe,
  [ContactIcon.STACK_OVERFLOW]: faStackOverflow,
  [ContactIcon.LINKEDIN]: faLinkedin,
};

export { nameToIcon };

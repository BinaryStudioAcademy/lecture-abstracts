import { IconName } from '~/common/enums/enums';
import { faGlobe } from '@fortawesome/pro-solid-svg-icons';
import {
  faGithub,
  faStackOverflow,
  faFacebook,
  faLinkedin,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';

const nameToIcon = {
  [IconName.FACEBOOK]: faFacebook,
  [IconName.GITHUB]: faGithub,
  [IconName.GLOBE]: faGlobe,
  [IconName.STACK_OVERFLOW]: faStackOverflow,
  [IconName.LINKEDIN]: faLinkedin,
  [IconName.INSTAGRAM]: faInstagram,
};

export { nameToIcon };

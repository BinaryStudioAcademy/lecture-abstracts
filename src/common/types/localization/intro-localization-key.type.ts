import { AuthorName, IconName } from '~/common/enums/enums';

type Contacts = {
  ref: string;
  iconColor?: 'darkBlue' | 'blue';
  title: string;
  iconName: IconName;
};

type IntroLocalizationKey = {
  author: AuthorName;
  about: string;
  title: string;
  subtitle: string;
  listItems?: string[];
  contacts?: Contacts[];
  footer?: string;
};

export { IntroLocalizationKey };

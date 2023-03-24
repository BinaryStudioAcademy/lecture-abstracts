import { Author } from '~/common/types/types';
import { ContactIcon } from '~/common/enums/enums';

type Contacts = {
  ref: string;
  iconColor?: 'darkBlue' | 'blue';
  title: string;
  iconName: ContactIcon;
};

type IntroBlueBubbleProps = {
  author: Author;
  about: string;
  title: string;
  subtitle: string;
  listItems?: string[];
  contacts?: Contacts[];
  footer?: string;
};

export { IntroBlueBubbleProps };

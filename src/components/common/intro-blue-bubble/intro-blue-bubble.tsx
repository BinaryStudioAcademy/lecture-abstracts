import React from 'react';
import { Avatar } from '~/components';
import { Author } from '~/types';
import { ContactIcon } from '~/enums';

import * as styles from './intro-blue-bubble.module.scss';
import { nameToIcon } from './utils/name-to-icon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type Contacts = {
  ref: string;
  className?: 'darkBlueIcon' | 'blueIcon';
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

const IntroBlueBubble: React.FC<IntroBlueBubbleProps> = ({
  about,
  author,
  subtitle,
  title,
  contacts,
  footer,
  listItems,
}) => {
  return (
    <div className={styles.introWrapper}>
      <div className={styles.author}>
        <Avatar name={author} />
        <div>
          <h3 className={styles.name}>{author}</h3>
          {contacts && (
            <ul className={styles.contacts}>
              {contacts.map(
                ({ ref, title, className = 'defaultIcon', iconName }) => (
                  <li key={title} className={styles.contact}>
                    <a href={ref} rel="author" className={styles[className]}>
                      <FontAwesomeIcon
                        icon={nameToIcon[iconName]}
                        className={styles.icon}
                      />
                      <span>{title}</span>
                    </a>
                  </li>
                ),
              )}
            </ul>
          )}
          <p
            className={styles.about}
            dangerouslySetInnerHTML={{ __html: about }}
          />
        </div>
      </div>
      <div className={styles.bubble}>
        <strong>{title}</strong> 👋 <br />
        <span dangerouslySetInnerHTML={{ __html: subtitle }} />
        {listItems && (
          <ol>
            {listItems.map((item, index) => (
              <li
                key={index}
                dangerouslySetInnerHTML={{ __html: item }}
                className={styles.bubbleListItem}
              />
            ))}
          </ol>
        )}
        {footer && (
          <span
            className={styles.introFooter}
            dangerouslySetInnerHTML={{ __html: footer }}
          />
        )}
      </div>
    </div>
  );
};

export { IntroBlueBubble, type IntroBlueBubbleProps };

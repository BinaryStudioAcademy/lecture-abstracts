import React from 'react';
import { Avatar } from '~/components';
import { Author } from '~/types';

import * as styles from './intro-blue-bubble.module.scss';

type Contacts = {
  ref: string;
  className?: 'darkBlueIcon' | 'blueIcon';
  title: string;
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
              {contacts.map(({ ref, title, className = 'defaultIcon' }) => (
                <li key={title}>
                  <a href={ref} rel="author" className={styles[className]}>
                    {/* <FontAwesomeIcon icon={faLinkedin} className={styles.icon} /> */}
                    <span>{title}</span>
                  </a>
                </li>
              ))}
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
              <li key={index} dangerouslySetInnerHTML={{ __html: item }} />
            ))}
          </ol>
        )}
        {footer && (
          <span
            style={{ display: 'inline-block' }}
            dangerouslySetInnerHTML={{ __html: footer }}
          />
        )}
      </div>
    </div>
  );
};

export { IntroBlueBubble, type IntroBlueBubbleProps };

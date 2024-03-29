import React from 'react';
import { Avatar } from '~/components/common/common';
import { nameToIcon } from '~/common/maps/maps';
import { IntroLocalizationKey as Props } from '~/common/types/types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import * as styles from './intro-blue-bubble.module.scss';

const IntroBlueBubble: React.FC<Props> = ({
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
                ({ ref, title, iconColor = 'defaultIcon', iconName }) => (
                  <li key={title} className={styles.contact}>
                    <a href={ref} rel="author" className={styles[iconColor]}>
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
          <ol className="bubble-list">
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

export { IntroBlueBubble };

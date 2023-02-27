import React from 'react';
import { Avatar } from '~/components';
import { Author } from '~/types';

import * as styles from './intro-blue-bubble.module.scss';

type IntroBlueBubbleProps = {
  author: Author;
  about: string;
  title: string;
  subtitle: string;
  listItems?: string[];
  footer?: string;
};

const IntroBlueBubble: React.FC<IntroBlueBubbleProps> = ({
  about,
  author,
  subtitle,
  title,
  footer,
  listItems,
}) => {
  return (
    <div>
      <div className={styles.author}>
        <Avatar name={author} />
        <div>
          <h3 className={styles.name}>{author}</h3>
          <p className={styles.about}>{about}</p>
        </div>
      </div>
      <div className={styles.bubble}>
        <strong>{title}</strong> 👋 <br />
        {subtitle}
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

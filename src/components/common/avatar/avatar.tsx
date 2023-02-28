import React from 'react';
import { nameToImage } from './utils/name-to-image';
import { Author } from '~/types';

import * as styles from './avatar.module.scss';

type Props = {
  name: Author;
  size?: 'small' | 'medium';
};

const Avatar: React.FC<Props> = ({ name, size = 'medium' }) => {
  const Avatar = nameToImage[name];
  return (
    <div className={`${styles.avatarWrapper} ${styles[size]}`}>
      <object
        className={styles.avatarObject}
        role="img"
        data={Avatar}
        aria-label={name}
      />
    </div>
  );
};

export { Avatar };

import React from 'react';
import { nameToImage } from './utils/name-to-image';
import { Author } from '~/types';

import * as styles from './avatar.module.scss';

type Props = {
  name: Author;
  className?: string;
};

const Avatar: React.FC<Props> = ({ name, className }) => {
  const Avatar = nameToImage[name];
  return (
    <div className={styles.avatarWrapper}>
      <object
        className={`${styles.avatarObject} ${className}`}
        role="img"
        data={Avatar}
        aria-label={name}
      />
    </div>
  );
};

export { Avatar };

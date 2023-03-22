import React from 'react';
import { nameToImage } from './utils/name-to-image';
import { Author } from '~/types/types';
import { getValidClasses } from '~/helpers/helpers';

import * as styles from './avatar.module.scss';

type Props = {
  name: Author;
  size?: 'small' | 'medium';
};

const Avatar: React.FC<Props> = ({ name, size = 'medium' }) => {
  const Avatar = nameToImage[name];
  return (
    <div className={getValidClasses(styles.wrapper, styles[size])}>
      <object
        className={styles.avatar}
        role="img"
        data={Avatar}
        aria-label={name}
      />
    </div>
  );
};

export { Avatar };

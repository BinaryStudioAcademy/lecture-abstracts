import React from 'react';
import { AuthorName } from '~/common/enums/enums';
import { getValidClasses } from '~/helpers/helpers';
import { nameToImage } from '~/common/maps/maps';

import * as styles from './avatar.module.scss';

type Props = {
  name: AuthorName;
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

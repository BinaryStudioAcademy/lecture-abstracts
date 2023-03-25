import * as React from 'react';
import * as styles from './panels.module.scss';
import { getValidClasses } from '~/helpers/helpers';
import { PanelsLocalizationKey as Props } from '~/common/types/types';

const Panels: React.FC<Props> = ({
  panels,
  columns = 2,
  bodySize = 'regular',
}) => {
  return (
    <div className={styles.wrapper} data-columns={columns}>
      {panels.map(({ body, head }, index) => (
        <div key={index} className={styles.panel}>
          <div
            className={styles.head}
            dangerouslySetInnerHTML={{ __html: head }}
          />
          <div
            className={getValidClasses(styles.body, styles[bodySize])}
            dangerouslySetInnerHTML={{ __html: body }}
          />
        </div>
      ))}
    </div>
  );
};

export { Panels };

import classNames from 'classnames';
import * as React from 'react';
import * as styles from './panels.module.scss';

type Panel = {
  head: string;
  body: string;
};
type Props = {
  panels: Panel[];
  columns?: number;
  bodySize?: 'small' | 'regular';
};

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
            className={classNames(styles.body, styles[bodySize])}
            dangerouslySetInnerHTML={{ __html: body }}
          />
        </div>
      ))}
    </div>
  );
};

export { Panels, type Props as PanelsProps };

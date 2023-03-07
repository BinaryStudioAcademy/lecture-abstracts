import * as React from 'react';
import classNames from 'classnames';
import * as styles from './details-card.module.scss';

type Props = {
  children: [React.ReactNode, React.ReactNode];
  isReversed?: boolean;
};

const DetailsCard: React.FC<Props> = ({ children, isReversed = false }) => {
  const [header, body] = children;
  return (
    <details className={styles.wrapper}>
      <summary
        className={classNames(styles.summary, {
          [styles.reversed]: isReversed,
        })}
      >
        <span className="details-card__header">{header}</span>
      </summary>

      <div
        className={classNames(styles.description, {
          [styles.reversed]: isReversed,
        })}
      >
        {body}
      </div>
    </details>
  );
};

export { DetailsCard };

import React from 'react';
import classNames from 'classnames';
import { TimelineProps as Props } from '~/types/types';
import * as styles from './timeline-of-contents.module.scss';

const TimelineOfContents: React.FC<Props> = ({
  timeline = [],
  headerTitle,
  ...rest
}) => (
  <div id="table-of-contents" className={styles.wrapper}>
    {headerTitle && (
      <h2>
        <strong>{headerTitle}</strong>
      </h2>
    )}
    <ul className={classNames(styles.step, 'timeline')} {...rest}>
      {timeline.map(({ linkTo, title, time }, index) => (
        <li key={`timeline-item-${index}`} className={styles.stepItem}>
          {time && (
            <div>
              <small>{time}</small>
            </div>
          )}
          <a
            href={linkTo}
            className={styles.stepLevel}
            dangerouslySetInnerHTML={{ __html: title }}
          />
        </li>
      ))}
    </ul>
  </div>
);

export { TimelineOfContents };

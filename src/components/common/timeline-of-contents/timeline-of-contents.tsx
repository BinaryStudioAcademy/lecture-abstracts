import React from 'react';
// import './styles.css';

import * as styles from './timeline-of-contents.module.scss';

type Timeline = {
  linkTo: string;
  title: string;
  time?: string;
};

type Props = {
  headerTitle?: string;
  headerClass?: string;
  timeline: Timeline[];
};

const TimelineOfContents: React.FC<Props> = ({
  timeline = [],
  headerTitle,
  ...rest
}) => (
  <div id="table-of-contents" className={styles.timelineWrapper}>
    {headerTitle && (
      <h2>
        <strong>{headerTitle}</strong>
      </h2>
    )}
    <ul className={`${styles.step} timeline`} {...rest}>
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

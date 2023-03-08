import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo } from '@fortawesome/pro-solid-svg-icons';
import { faAngleRight } from '@fortawesome/pro-regular-svg-icons';

import * as styles from './video-wrapper.module.scss';

type VideoWrapperProps = {
  children: React.ReactNode;
  duration?: string;
};
const VideoWrapper: React.FC<VideoWrapperProps> = ({
  children,
  duration = '00:00',
}) => {
  return (
    <div className={styles.wrapper}>
      <details className={styles.details}>
        <summary className={styles.header}>
          <FontAwesomeIcon icon={faVideo} fixedWidth />
          <span className={styles.title}>
            <strong>{duration}</strong>
          </span>
          <span className="icon">
            <FontAwesomeIcon icon={faAngleRight} fixedWidth />
          </span>
        </summary>
        <div className={styles.body}>
          {' '}
          <div className={styles.iframeWrapper}>{children}</div>
        </div>
      </details>
    </div>
  );
};

export { VideoWrapper };

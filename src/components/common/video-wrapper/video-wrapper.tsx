import React from 'react';
import { Accordion } from '../accordion/accordion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo } from '@fortawesome/pro-solid-svg-icons';
import { faAngleRight } from '@fortawesome/pro-regular-svg-icons';

import './video-wrapper.css';

type VideoWrapperProps = {
  children: React.ReactNode;
  duration?: string;
};
const VideoWrapper: React.FC<VideoWrapperProps> = ({
  children,
  duration = '00:00',
}) => {
  return (
    <div className="video-wrapper">
      <Accordion>
        <React.Fragment>
          <FontAwesomeIcon icon={faVideo} fixedWidth />
          <span className="title">
            <strong>{duration}</strong>
          </span>
          <span className="icon">
            <FontAwesomeIcon icon={faAngleRight} fixedWidth />
          </span>
        </React.Fragment>
        <React.Fragment>
          <div className="iframe-wrapper">{children}</div>
        </React.Fragment>
      </Accordion>
    </div>
  );
};

export { VideoWrapper };

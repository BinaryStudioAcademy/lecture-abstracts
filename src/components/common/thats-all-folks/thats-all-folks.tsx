import React, { useRef } from 'react';
import thatsAllFolksAudio from '~/assets/audio/thats-all-folks.mp3';

import * as styles from './thats-all-folks.module.scss';

type Props = {
  source?: string;
  children?: React.ReactNode;
};

const ThatsAllFolks: React.FC<Props> = ({ source, children }) => {
  const audio = useRef<HTMLAudioElement | null>(null);
  const play = (): Promise<void> | undefined => audio?.current?.play();
  const pause = (): void => audio?.current?.pause();

  return (
    <h4 className={styles.thatsAllFolks}>
      <span onMouseEnter={play} onMouseLeave={pause}>
        {children || (
          <>
            <strong>
              <em>― That&apos;s all, folks!</em>
            </strong>{' '}
            🐷
          </>
        )}
      </span>
      <audio ref={audio} preload="auto">
        <source src={source || thatsAllFolksAudio} type="audio/mpeg" />
      </audio>
    </h4>
  );
};

export { ThatsAllFolks };

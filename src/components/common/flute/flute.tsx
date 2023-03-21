import React, { useRef } from 'react';
import rodrigoRodriguezShakuhachiFluteAudio from '~/assets/audio/rodrigo-rodriguez-shakuhachi-flute.mp3';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolume } from '@fortawesome/pro-regular-svg-icons';
import * as styles from './flute.module.scss';

const Flute: React.FC = () => {
  const audio = useRef<HTMLAudioElement | null>(null);
  const play = (): Promise<void> | undefined => audio?.current?.play();
  const pause = (): void => audio?.current?.pause();
  return (
    <div className={styles.wrapper} onMouseEnter={play} onMouseLeave={pause}>
      <em>(in the distance, a Japanese flute plays a gentle melody)</em>
      <audio ref={audio} preload="auto">
        <source src={rodrigoRodriguezShakuhachiFluteAudio} type="audio/mpeg" />
      </audio>{' '}
      <FontAwesomeIcon icon={faVolume} />
    </div>
  );
};

export { Flute };

import React, { ReactNode } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowUp } from '@fortawesome/pro-regular-svg-icons';

import * as styles from './level.module.scss';

type Labels = {
  level: string;
  difficulty: string;
  objectives: string;
  backToTop: string;
};

type Props = {
  number: string;
  name: string | ReactNode;
  id?: string;
  difficulty?: string | ReactNode;
  objectives: string | ReactNode;
  labels?: Labels;
};

const Level: React.FC<Props> = ({
  number = '',
  name = '',
  difficulty = '',
  objectives = '',
  id = '',
  labels,
  ...rest
}) => {
  const levelLabel = labels?.level || 'Level';
  const difficultyLabel = labels?.difficulty || 'Difficulty:';
  const objectivesLabel = labels?.objectives || 'Objectives:';
  const backToTopLabel = labels?.backToTop || 'back to top';

  return (
    <div className={styles.level} id={id} {...rest}>
      <small className={styles.info}>
        <em className={styles.number}>
          {levelLabel} {number}
        </em>
        <a className={styles.backToTop} href="#table-of-contents">
          <FontAwesomeIcon icon={faLongArrowUp} /> {backToTopLabel}
        </a>
      </small>
      <h3 className={styles.name}>{name}</h3>
      <small className={styles.meta}>
        <strong>{difficultyLabel}</strong> {difficulty}{' '}
        <strong>{objectivesLabel}</strong> {objectives}
      </small>
    </div>
  );
};

export { Level };

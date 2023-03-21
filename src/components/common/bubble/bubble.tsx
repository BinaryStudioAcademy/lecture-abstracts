import * as React from 'react';
import * as styles from './bubble.module.scss';
import { getValidClasses } from '~/helpers/helpers';

type Props = {
  size?: 'small' | 'regular';
  children: React.ReactNode;
};
const Bubble: React.FC<Props> = ({ children, size = 'regular' }) => (
  <div className={getValidClasses(styles.bubble, styles[size])}>{children}</div>
);

export { Bubble };

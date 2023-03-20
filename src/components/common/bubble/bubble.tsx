import * as React from 'react';
import * as styles from './bubble.module.scss';
import classNames from 'classnames';

type Props = {
  size?: 'small' | 'regular';
  children: React.ReactNode;
};
const Bubble: React.FC<Props> = ({ children, size = 'regular' }) => {
  const classes = classNames(styles.bubble, styles[size]);
  return <div className={classes}>{children}</div>;
};

export { Bubble };

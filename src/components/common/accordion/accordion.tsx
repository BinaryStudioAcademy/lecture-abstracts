import React from 'react';
import * as styles from './accordion.module.scss';

type Props = {
  children: [React.ReactNode, React.ReactNode];
  className?: string;
};

const Accordion: React.FC<Props> = ({ children, className }) => {
  const [heading, content] = children;

  return (
    <details className={`${styles.accordion} ${className}`}>
      <summary className={styles.accordionHeader}>{heading}</summary>
      <div className={styles.accordionBody}>{content}</div>
    </details>
  );
};

export { Accordion };

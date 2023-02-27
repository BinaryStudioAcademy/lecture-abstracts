import React from 'react';
import * as styles from './accordion.module.scss';

type Props = {
  children: [React.ReactNode, React.ReactNode];
};

const Accordion: React.FC<Props> = ({ children }) => {
  const [heading, content] = children;

  return (
    <details className={styles.accordion}>
      <summary className={styles.accordionHeader}>{heading}</summary>
      <div className={styles.accordionBody}>{content}</div>
    </details>
  );
};

export { Accordion };

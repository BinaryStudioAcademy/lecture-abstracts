import React from 'react';
import * as styles from './accordion.module.scss';

type Props = {
  children: [React.ReactNode, React.ReactNode];
  grading?: boolean;
};

const Accordion: React.FC<Props> = ({ children, grading = false }) => {
  const [heading, content] = children;

  return (
    <details
      className={`${styles.accordion} ${
        grading ? styles.gradingHometask : null
      }`}
    >
      <summary className={styles.accordionHeader}>{heading}</summary>
      <div className={styles.accordionBody}>{content}</div>
    </details>
  );
};

export { Accordion };

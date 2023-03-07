import * as React from 'react';
import * as styles from './details-card.module.scss';

type Props = {
  children: [React.ReactNode, React.ReactNode];
  type?: 'reversed';
};

const DetailsCard: React.FC<Props> = ({ children, type = '' }) => {
  const [header, body] = children;
  const reversed = type === 'reversed' ? styles.reversed : '';
  return (
    <details className={styles.testimonialsDetails}>
      <summary className={`${styles.testimonialsSummary} ${reversed}`}>
        <span className="details-card__header">{header}</span>
      </summary>

      <div className={`${styles.testimonialsDescription} ${reversed}`}>
        {body}
      </div>
    </details>
  );
};

export { DetailsCard };

import * as React from 'react';
import * as styles from './details-card.module.scss';

type Props = {
  children: [React.ReactNode, React.ReactNode];
  type?: 'inverted';
};

const DetailsCard: React.FC<Props> = ({ children, type = '' }) => {
  const [header, body] = children;
  const inverted = type === 'inverted' ? styles.inverted : '';
  return (
    <details className={styles.testimonialsDetails}>
      <summary className={`${styles.testimonialsSummary} ${inverted}`}>
        <span className="details-card__header">{header}</span>
      </summary>

      <div className={`${styles.testimonialsDescription} ${inverted}`}>
        {body}
      </div>
    </details>
  );
};

export { DetailsCard };

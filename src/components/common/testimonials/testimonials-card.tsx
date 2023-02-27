import * as React from 'react';
import * as styles from './testimonials-card.module.scss';

const TestimonialsCard: React.FC = () => {
  return (
    <details className={styles.testimonialsDetails}>
      <summary className={styles.testimonialsSummary}>
        <span className="testimonials-card__description-wrap">Test header</span>
      </summary>

      <div className={styles.testimonialsDescription}>Test body</div>
    </details>
  );
};

export { TestimonialsCard };

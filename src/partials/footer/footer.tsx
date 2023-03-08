import React from 'react';

import * as styles from './footer.module.scss';

const Footer: React.FC = () => (
  <footer className={styles.footerWrapper}>
    <div className={styles.footerNav}>
      <div>
        Copyright © {new Date().getFullYear()} <strong>Binary Studio</strong>.
        All rights reserved.
      </div>
      <div>Made with 🧠🤲💻❤️</div>
    </div>
  </footer>
);

export { Footer };

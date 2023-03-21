import React from 'react';
import * as styles from './header.module.scss';

const Header: React.FC = () => (
  <header className={styles.hero}>
    <nav className={styles.navbar}>
      <strong>Binary Studio Academy {new Date().getFullYear()}</strong>
    </nav>
  </header>
);

export { Header };

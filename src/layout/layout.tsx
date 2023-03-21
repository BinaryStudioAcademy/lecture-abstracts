import * as React from 'react';
import { Footer, Header } from '~/partials/partials';

import * as styles from './layout.module.scss';

type Props = {
  children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }) => (
  <>
    <div className={styles.container}>
      <Header />
      <main className={styles.content}>{children}</main>
      <Footer />
    </div>
  </>
);
export { Layout };

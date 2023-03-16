import React, { PropsWithChildren } from 'react';
import { Footer, Header } from '~/partials';

import * as styles from './layout.module.scss';

const Layout: React.FC<PropsWithChildren> = ({ children }) => (
  <>
    <div className={styles.container}>
      <Header />
      <main className={styles.content}>{children}</main>
      <Footer />
    </div>
  </>
);
export { Layout };

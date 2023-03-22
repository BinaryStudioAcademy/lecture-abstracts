import * as React from 'react';
import { Layout } from '~/layout/layout';
import { LecturesGrid, LogoLink } from './components/components';

import * as styles from './main-page.module.scss';

import { lectures } from './data/lectures-list';

const MainPage: React.FC = () => {
  return (
    <Layout>
      <div className={styles.welcomeText}>
        <div>
          <strong>
            — Hey, привіт, привет <span className={styles.wavingHand}>👋</span>!
          </strong>{' '}
          Це — лекції другого етапу для
        </div>
        <LogoLink />
        <p>
          — щорічного літнього безкоштовного онлайн-інтенсиву з розробки
          веб-додатків.
        </p>
      </div>
      <LecturesGrid lectures={lectures} />
    </Layout>
  );
};

export { MainPage };

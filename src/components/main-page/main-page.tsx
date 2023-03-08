import * as React from 'react';
import { LecturesGrid, LogoLink } from './components/components';
import { Footer, Header } from '~/partials';
import { MainPageContext } from '~/types';

import * as styles from './main-page.module.scss';

type Props = {
  pageContext: MainPageContext;
};

const MainPage: React.FC<Props> = ({ pageContext: { lectures } }) => {
  return (
    <div className="container grid-lg">
      <div className="columns">
        <div className="column">
          <Header />
          <article>
            <div className={styles.welcomeText}>
              <div className="hero-body text-center">
                <div>
                  <strong>
                    — Hey, привіт, привет{' '}
                    <span className={styles.wavingHand}>👋</span>!
                  </strong>{' '}
                  Це — лекції другого етапу для
                </div>
                <LogoLink />
                <p>
                  — щорічного літнього безкоштовного онлайн-інтенсиву з розробки
                  веб-додатків.
                </p>
              </div>
            </div>
            <LecturesGrid lectures={lectures} />
          </article>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export { MainPage };

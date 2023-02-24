import * as React from 'react';
import { LecturesGrid, LogoLink } from './components/components';
import { Footer, Header } from '~/partials';
import { MainPageContext } from '~/types';

import '~/assets/stylesheets/index.css';

type Props = {
  pageContext: MainPageContext;
};

const MainPage: React.FC<Props> = ({
  pageContext: {
    allMdx: { edges },
  },
}) => {
  return (
    <div className="container grid-lg">
      <div className="columns">
        <div className="column">
          <Header />
          <article>
            <div className="hero">
              <div className="hero-body text-center">
                <div>
                  <strong>
                    — Hey, привіт, привет{' '}
                    <span className="waving-hand">👋</span>!
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
            <LecturesGrid edges={edges} />
          </article>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export { MainPage };

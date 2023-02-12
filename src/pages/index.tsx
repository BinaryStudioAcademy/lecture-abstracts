import * as React from 'react';
import { HeadFC, PageProps } from 'gatsby';
import { LecturesGrid, LogoLink } from '~/components';
import { Footer, Header, SEO } from '~/partials';

import '~/assets/stylesheets/index.css';

const IndexPage: React.FC<PageProps> = () => {
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
            <LecturesGrid />
          </article>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default IndexPage;
export const Head: HeadFC = () => <SEO />;

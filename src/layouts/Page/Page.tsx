import React from 'react';
import { Footer, Header } from '~/partials';

type Meta = {
  title: string;
  description: string;
  keywords: string[];
};
type Props = {
  children: React.ReactNode;
  metadata: Meta;
};
const Page: React.FC<Props> = ({ children }) => (
  <>
    <div className="container grid-lg">
      <div className="columns">
        <div className="column">
          <Header />
          <article className="content">{children}</article>
          <Footer />
        </div>
      </div>
    </div>
  </>
);

export default Page;

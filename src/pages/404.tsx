import * as React from 'react';
import { Link, PageProps } from 'gatsby';
import { ShrugMessage } from '~/components/common';
import { SEO } from '~/partials';

const pageStyles = {
  color: '#232129',
  padding: '96px',
  fontFamily: '-apple-system, Roboto, sans-serif, serif',
};

const codeStyles = {
  color: '#8A6534',
  padding: 4,
  backgroundColor: '#FFF4DB',
  fontSize: '1.25rem',
  borderRadius: 4,
};

const NotFoundPage: React.FC<PageProps> = () => {
  return (
    <main style={pageStyles}>
      <div style={{ marginBottom: 48 }}>
        <ShrugMessage>
          <h4>— Sorry, this page hasn’t hatched yet.</h4>
          <p>
            There’s a behind-the-scenes story (and 🎬bloopers!) we are yet to
            publish about people who made these lectures for you, how they did
            it, and why we thought it is a good idea to create them in the first
            place.
          </p>
          <p>We humbly ask you to check it out later!</p>
          <br />
          <Link to="/">Go home</Link>
        </ShrugMessage>
        <br />
        {process.env.NODE_ENV === 'development' ? (
          <>
            <br />
            Try creating a page in <code style={codeStyles}>src/pages/</code>
            .
            <br />
          </>
        ) : null}
      </div>
    </main>
  );
};

export default NotFoundPage;
export { SEO as Head };

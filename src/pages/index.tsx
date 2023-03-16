import * as React from 'react';
import { PageProps } from 'gatsby';
import { MainPage } from '~/components/main-page/main-page';
import { SEO } from '~/partials';

const Homepage: React.FC<PageProps> = () => <MainPage />;

export default Homepage;
export { SEO as Head };

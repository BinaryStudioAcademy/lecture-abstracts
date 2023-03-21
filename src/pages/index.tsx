import * as React from 'react';
import { PageProps } from 'gatsby';
import { MainPage as Page } from '~/components/main-page/main-page';
import { SEO } from '~/partials/partials';

const MainPage: React.FC<PageProps> = () => <Page />;

export default MainPage;
export { SEO as Head };

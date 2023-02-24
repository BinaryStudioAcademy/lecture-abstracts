import * as React from 'react';
import { PageProps } from 'gatsby';
import { MainPageContext } from '~/types';
import { MainPage } from '~/components/main-page/main-page';
import { SEO } from '~/partials';

const Template: React.FC<PageProps<null, MainPageContext>> = ({
  pageContext,
}) => <MainPage pageContext={pageContext} />;

export default Template;
export { SEO as Head };

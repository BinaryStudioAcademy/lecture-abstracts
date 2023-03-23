import * as React from 'react';
import { PageProps } from 'gatsby';
import { SEO } from '~/components/common/common';
import { NotFoundPage as ErrorPage } from '~/components/not-found-page/not-found-page';

const NotFoundPage: React.FC<PageProps> = () => <ErrorPage />;

export default NotFoundPage;
export { SEO as Head };

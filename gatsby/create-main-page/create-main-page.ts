import path from 'path';
import { Actions, CreatePagesArgs } from 'gatsby';
import { pagesGraphQLRequest } from '../helpers/pages-graphql-request/pages-graphql-request';

const mainPageTemplate = path.resolve('src/templates/main-page.tsx');

const createMainPage = async (
  createPage: Actions['createPage'],
  graphql: CreatePagesArgs['graphql'],
): Promise<void> => {
  const pages = await graphql(pagesGraphQLRequest());
  createPage({
    path: '/',
    component: mainPageTemplate,
    context: pages.data,
  });
};

export { createMainPage };

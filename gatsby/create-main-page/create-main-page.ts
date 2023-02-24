import path from 'path';
import { Actions, CreatePagesArgs, Reporter } from 'gatsby';
import { lecturesGraphQLRequest } from '../helpers/helpers';
import { LectureItem, LecturesQuery } from '~/types';

const mainPageTemplate = path.resolve('src/templates/main-page.tsx');

const createMainPage = async (
  createPage: Actions['createPage'],
  graphql: CreatePagesArgs['graphql'],
  reporter: Reporter,
): Promise<void> => {
  const pages = await graphql(lecturesGraphQLRequest());

  if (pages.errors && !pages.data) {
    reporter.panicOnBuild('Error while running GraphQL query.');
  }

  const mainPageContext = pages.data as LecturesQuery;

  const lectures: LectureItem[] = mainPageContext.allMdx.edges.map((node) => {
    const {
      node: {
        fields: { slug },
        frontmatter: { author, description, duration, publishedAt, title },
      },
    } = node;
    return {
      slug,
      author,
      description,
      duration,
      publishedAt,
      title,
    };
  });

  createPage({
    path: '/',
    component: mainPageTemplate,
    context: { lectures },
  });
};

export { createMainPage };

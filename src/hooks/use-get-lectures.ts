import { useStaticQuery, graphql } from 'gatsby';
import { LectureEdge, LecturesQuery } from '~/types';

const useGetLectures = (): Array<LectureEdge> => {
  const {
    allMdx: { edges },
  } = useStaticQuery<LecturesQuery>(
    graphql`
      query MyQuery {
        allMdx(
          sort: { frontmatter: { orderId: ASC } }
          filter: { frontmatter: { hiddenFromMainPage: { eq: false } } }
        ) {
          edges {
            node {
              id
              fields {
                slug
              }
              frontmatter {
                author
                description
                duration
                title
                publishedAt
              }
            }
          }
        }
      }
    `,
  );
  return edges;
};

export { useGetLectures };

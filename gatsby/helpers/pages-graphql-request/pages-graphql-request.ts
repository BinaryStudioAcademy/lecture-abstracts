const pagesGraphQLRequest = (): string => `
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
`;

export { pagesGraphQLRequest };

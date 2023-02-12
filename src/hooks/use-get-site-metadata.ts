import { useStaticQuery, graphql } from 'gatsby';
import { SiteMetaQuery, SiteMetadata } from '~/types';

const useGetSiteMetadata = (): SiteMetadata => {
  const {
    site: { siteMetadata },
  } = useStaticQuery<SiteMetaQuery>(
    graphql`
      query Metadata {
        site(siteMetadata: {}) {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `,
  );
  return siteMetadata;
};

export { useGetSiteMetadata };

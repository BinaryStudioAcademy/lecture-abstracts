type SiteMetadata = {
  title: string;
  description: string;
  author: string;
};

type SiteMetaQuery = {
  site: {
    siteMetadata: SiteMetadata;
  };
};

export { SiteMetaQuery, SiteMetadata };

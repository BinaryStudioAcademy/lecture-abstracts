import React from 'react';
import { SeoProps } from '~/types';
import { siteMetadata } from './meta/default-meta';

type Props = {
  pageContext?: SeoProps;
};

const SEO: React.FC<React.PropsWithChildren<Props>> = ({
  pageContext,
  children,
}) => {
  const {
    description: defaultDescription,
    title: defaultTitle,
    author: defaultAuthor,
  } = siteMetadata;

  const seo = {
    title: pageContext?.title || defaultTitle,
    description: pageContext?.description || defaultDescription,
    author: pageContext?.author || defaultAuthor,
    keywords: pageContext?.keywords || [],
  };

  return (
    <>
      <html lang="en" />
      <title>
        {seo.title} • {defaultTitle}
      </title>
      <meta name="description" content={seo.description} />
      <meta name="og:title" content={seo.title} />
      <meta name="og:description" content={seo.description} />
      <meta name="og:type" content="website" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content={seo.author} />
      <meta name="twitter:tittle" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta
        name="keywords"
        content={seo.keywords.length ? seo.keywords.join(', ') : ''}
      />
      {children}
    </>
  );
};

export { SEO };

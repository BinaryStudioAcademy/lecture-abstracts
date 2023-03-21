import { Author } from '../lectures/author/author';

type SeoProps = {
  author: Author;
  title: string;
  slug: string;
  description: string;
  keywords: string[];
  duration: string;
  publishedAt: string;
  hiddenFromMainPage: boolean;
};

export { SeoProps };

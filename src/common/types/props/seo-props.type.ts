import { Author } from '~/common/types/types';

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

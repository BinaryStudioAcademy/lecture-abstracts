import { AuthorName } from '~/common/enums/enums';

type SeoProps = {
  author: AuthorName;
  title: string;
  slug: string;
  description: string;
  keywords: string[];
  duration: string;
  publishedAt: string;
  hiddenFromMainPage: boolean;
};

export { SeoProps };

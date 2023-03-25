import { AuthorName } from '~/common/enums/enums';

type SeoLocalizationKey = {
  author: AuthorName;
  title: string;
  slug: string;
  description: string;
  keywords: string[];
  duration: string;
  publishedAt: string;
  hiddenFromMainPage: boolean;
};

export { SeoLocalizationKey };

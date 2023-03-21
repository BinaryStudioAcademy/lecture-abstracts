import { seoPayload as nodejsSeo } from '~/components/lectures/express-yourself-with-nodejs/data/seo-payload';
import { seoPayload as csharpSeo } from '~/components/lectures/dotnet-ecosystem-and-csharp-best-practices/data/seo-payload';
import { seoPayload as dotnetSeo } from '~/components/lectures/getting-started-with-aspdotnet-core/data/seo-payload';
import { seoPayload as gitSeo } from '~/components/lectures/git/data/seo-payload';
import { seoPayload as howToGitSeo } from '~/components/lectures/how-to-work-with-git/data/seo-payload';
import { seoPayload as jsSeo } from '~/components/lectures/javascript-for-everyone/data/seo-payload';
import { LectureItem, SeoPayload } from '~/types/types';
import { seoToLectureItem } from '../utils/seo-to-lecture-item';

const seoList: SeoPayload[] = [
  howToGitSeo,
  jsSeo,
  nodejsSeo,
  csharpSeo,
  dotnetSeo,
  gitSeo,
];

const lectures = seoList.reduce((total, { en, ua }) => {
  !en.hiddenFromMainPage && total.push(seoToLectureItem(en));
  !ua.hiddenFromMainPage && total.push(seoToLectureItem(ua));
  return total;
}, [] as LectureItem[]);

export { lectures };

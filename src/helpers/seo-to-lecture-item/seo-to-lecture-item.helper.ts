import { SeoLocalizationKey, LectureItem } from '~/common/types/types';

const seoToLectureItem = ({
  author,
  description,
  duration,
  publishedAt,
  title,
  slug,
}: SeoLocalizationKey): LectureItem => {
  return {
    slug,
    author,
    description,
    duration,
    publishedAt,
    title,
  };
};

export { seoToLectureItem };

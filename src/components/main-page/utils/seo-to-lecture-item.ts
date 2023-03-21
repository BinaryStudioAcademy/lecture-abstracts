import { SeoProps, LectureItem } from '~/types/types';

const seoToLectureItem = ({
  author,
  description,
  duration,
  publishedAt,
  title,
  slug,
}: SeoProps): LectureItem => {
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

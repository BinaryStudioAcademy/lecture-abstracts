import { Author } from '../author/author';

type Lecture = {
  title: string;
  description: string;
  duration: string;
  author: Author;
  avatar: string;
  link: string;
  hiddenFromMainPage: boolean;
  publishedAt: string;
};

export { Lecture };

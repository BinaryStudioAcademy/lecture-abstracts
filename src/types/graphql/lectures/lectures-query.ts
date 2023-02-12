import { Author } from '../../lectures/author/author';

type LectureEdge = {
  node: {
    id: string;
    fields: { slug: string };
    frontmatter: {
      author: Author;
      description: string;
      duration: string;
      title: string;
      publishedAt: string;
    };
  };
};

type LecturesQuery = {
  allMdx: {
    edges: Array<LectureEdge>;
  };
};

export { LectureEdge, LecturesQuery };

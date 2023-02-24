import { LectureEdge } from '../graphql/lectures/lectures-query';

interface MainPageContext {
  allMdx: {
    edges: LectureEdge[];
  };
}

export { MainPageContext };

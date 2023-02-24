import { LectureEdge } from '../graphql/lectures/lectures-query';

type MainPageContext = {
  lectures: LectureEdge[];
};

export { MainPageContext };

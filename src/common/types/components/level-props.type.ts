import { ReactNode } from 'react';

type Labels = {
  level: string;
  difficulty: string;
  objectives: string;
  backToTop: string;
};

type LevelProps = {
  number: string;
  name: string | ReactNode;
  id?: string;
  difficulty?: string | ReactNode;
  objectives: string | ReactNode;
  labels?: Labels;
};

export { LevelProps };

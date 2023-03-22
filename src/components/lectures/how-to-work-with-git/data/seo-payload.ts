import { SeoPayload, SeoProps } from '~/types/types';
import { AuthorName } from '~/enums/enums';
import { slugPayload } from './slug-payload';

const en: SeoProps = {
  author: AuthorName.VIKTORIIA_VASYLENKO_EN,
  slug: slugPayload.en,
  title: 'How to work with Git',
  description:
    'Viktoriia is telling about <strong>Git</strong> basics and common Git commands. She also shows the whole process of working with Git: from cloning the repository to creating pull requests.',
  keywords: ['hola', 'guapa'],
  duration: '38 min',
  publishedAt: '2021-12-08T10:00:00',
  hiddenFromMainPage: true,
};
const ua: SeoProps = {
  author: AuthorName.VIKTORIIA_VASYLENKO_UA,
  title: 'How to work with Git',
  description:
    'Вікторія розповідає про основи <strong>Git</strong> та найбільш поширені команди. А також показує весь процес роботи з Git: від клонування репозиторію до створення пул-реквестів.',
  keywords: ['hola', 'guapa'],
  duration: '38 min',
  slug: slugPayload.ua,
  publishedAt: '2021-12-08T10:00:00',
  hiddenFromMainPage: false,
};

const seoPayload: SeoPayload = { en, ua };

export { seoPayload };

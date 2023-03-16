import { SeoPayload, SeoProps } from '~/types';
import { slugPayload } from './slug-payload';
import { AuthorName } from '~/enums';

const ua: SeoProps = {
  author: AuthorName.VIKTORIIA_VASYLENKO_UA,
  title: 'Git Homework',
  description:
    'Вікторія розповідає про основи Git та найбільш поширені команди. А також показує весь процес роботи з Git: від клонування репозиторію до створення пул-реквестів.',
  keywords: ['hola', 'guapa'],
  duration: '31 min',
  slug: slugPayload.ua,
  publishedAt: '2021-11-18T10:00:00',
  hiddenFromMainPage: true,
};
const en: SeoProps = {
  author: AuthorName.VIKTORIIA_VASYLENKO_EN,
  title: 'Git Homework',
  description: '',
  slug: slugPayload.en,
  keywords: ['hola', 'guapa'],
  duration: '31 min',
  publishedAt: '2021-11-18T10:00:00',
  hiddenFromMainPage: true,
};

const seoPayload: SeoPayload = { en, ua };

export { seoPayload };

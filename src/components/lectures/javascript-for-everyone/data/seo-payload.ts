import { SeoPayload, SeoProps } from '~/types';
import { AuthorName } from '~/enums';
import { slugPayload } from './slug-payload';

const ua: SeoProps = {
  author: AuthorName.OLEKSANDR_DANYLCHENKO_UA,
  title: 'Javascript for everyone',
  slug: slugPayload.ua,
  description:
    'Олександр розповідає про основні концепції <strong>JavaScript</strong>, а потім пише фронтенд для простої інтерактивної веб-сторінки, використовуючи <strong>DOM API</strong> для створення елементів та найпопулярніші функції <strong>ES6+</strong> для обробки даних, а також пояснює що таке <strong>модулі</strong>, <strong>транспайлери</strong>, та <strong>бандлери</strong>.',
  keywords: ['JS', 'Javascript', 'async'],
  duration: '1 год 19 хв',
  publishedAt: '2021-12-17T01:00:00',
  hiddenFromMainPage: false,
};
const en: SeoProps = {
  author: AuthorName.OLEKSANDR_DANYLCHENKO_UA,
  title: 'Javascript for everyone',
  slug: slugPayload.en,
  description:
    'Oleksandr talks about the basic concepts of <strong>JavaScript</strong>, then writes a frontend for a simple interactive web page, using the <strong>DOM API</strong> to create elements and the most popular <strong>ES6+</strong> functions for data processing, as well as explains about <strong>modules</strong>, <strong>transpilers</strong>, and <strong>bundlers</strong>.',
  keywords: ['JS', 'Javascript', 'async'],
  duration: '1 h 19 min',
  publishedAt: '2021-12-17T01:00:00',
  hiddenFromMainPage: true,
};

const seoPayload: SeoPayload = { en, ua };

export { seoPayload };

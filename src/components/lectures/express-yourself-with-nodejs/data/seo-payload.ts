import { AuthorName } from '~/enums/enums';
import { SeoPayload, SeoProps } from '~/types/types';
import { slugPayload } from './slug-payload';

const ua: SeoProps = {
  author: AuthorName.ALEXANDR_TOVMACH_UA,
  title: 'Express yourself with Node.js',
  slug: slugPayload.ua,
  description:
    'Олександр розповість, що таке веб-сервер, як працювати з бекендом за допомогою <strong>Node.js</strong>, покаже як налаштувати необхідні інструменти і на <strong>Express.js</strong> підніме сервер, здатний опрацьовувати запити і дані.',
  keywords: ['nodejs', 'alexandrtovmach', 'lecture-3'],
  duration: '31 мин',
  publishedAt: '2021-12-20T00:00:00',
  hiddenFromMainPage: false,
};
const en: SeoProps = {
  author: AuthorName.ULIANA_LOBANOVA,
  title: 'Express yourself with Node.js',
  slug: slugPayload.en,
  description:
    'Alexander will explain what a web server is, how to work with the backend using <strong>Node.js</strong>, show how to configure the necessary tools, and will set up a server capable of processing requests and data using <strong> Express.js </strong>.',
  keywords: ['nodejs', 'ulianalobanova', 'lecture-3'],
  duration: '36 min',
  publishedAt: '2021-12-20T00:00:00',
  hiddenFromMainPage: true,
};

const seoPayload: SeoPayload = { en, ua };

export { seoPayload };

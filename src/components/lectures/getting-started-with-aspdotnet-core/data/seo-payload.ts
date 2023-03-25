import { AuthorName } from '~/common/enums/enums';
import { SeoPayload, SeoLocalizationKey } from '~/common/types/types';
import { slugPayload } from './slug-payload';

const ua: SeoLocalizationKey = {
  author: AuthorName.SERHII_YANCHUK_UA,
  title: 'Getting started with ASP.NET Core',
  slug: slugPayload.ua,
  description:
    'Після невеликого вступу, де мова піде про переваги <strong>.NET</strong>, Сергій продемонструє, як створити додаток на <strong>ASP.NET Core</strong> з використанням <strong>ASP.NET Core Web API</strong>, закодить сервіси та контроллери, а потім пояснить, що таке dependency injection, маршрутизацію, middleware та minimal API.',
  keywords: ['hola', 'guapa'],
  duration: '30 хв',
  publishedAt: '2022-01-02T00:00:00',
  hiddenFromMainPage: false,
};
const en: SeoLocalizationKey = {
  author: AuthorName.SERHII_YANCHUK_EN,
  title: 'Getting started with ASP.NET Core',
  slug: slugPayload.en,
  description:
    'After a short introduction about the advantages of <strong>.NET</strong>, Serhii will demonstrate how to create an application on <strong>ASP.NET Core</strong> using <strong>ASP.NET Core Web API</strong>, will code services and controllers, and then explain what dependency injection, routing, middleware and minimal API.',
  keywords: ['hola', 'guapa'],
  duration: '30 хв',
  publishedAt: '2022-01-02T00:00:00',
  hiddenFromMainPage: true,
};

const seoPayload: SeoPayload = { en, ua };

export { seoPayload };

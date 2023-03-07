import { IntroBlueBubbleProps } from '~/components/common/intro-blue-bubble/intro-blue-bubble';
import { AuthorName, ContactIcon } from '~/enums';

type IntroBubble = {
  ua: IntroBlueBubbleProps;
  en: IntroBlueBubbleProps;
};

const introEN: IntroBlueBubbleProps = {
  author: AuthorName.SERHII_YANCHUK_EN,
  about:
    'Serhii works at <a href="https://binary-studio.com"><strong>Binary Studio</strong></a> as backend developer. He enjoys coding and making three-point shots in basketball. Therefore, if you are from Kyiv and want to combine a conversation about code with a game in basketball, contact him :D',
  contacts: [
    {
      ref: 'https://www.linkedin.com/in/serhii-yanchuk-b304331a6/',
      title: 'serhii-yanchuk',
      iconName: ContactIcon.LINKEDIN,
      iconColor: 'blue',
    },
    {
      ref: 'https://www.instagram.com/serhii._.yanchuk/',
      title: 'serhii._.yanchuk',
      iconName: ContactIcon.INSTAGRAM,
    },
  ],
  title: 'Hello!',
  subtitle:
    "I'll give you tips and tricks to better understand how our tech stack works. You'll have an ASP.NET Core web application by the end of this lesson. This is an introductory lecture, so:",
  listItems: [
    'some things may have to be googled yourself;',
    "maybe you already know all this (repetition won't hurt anyway).",
  ],
  footer: "Let's go!",
};
const introUA: IntroBlueBubbleProps = {
  author: AuthorName.SERHII_YANCHUK_UA,
  about:
    'Сергій працює в <a href="https://binary-studio.com"><strong>Binary Studio</strong></a> backend розробником. Він полюбляє кодити та закидувати триочкові в баскетболі. Тому, якщо ти з Києва та хочеш поєднати розмову про програмування з грою у баскетбол, звертайся до нього :D',
  contacts: [
    {
      ref: 'https://www.linkedin.com/in/serhii-yanchuk-b304331a6/',
      title: 'serhii-yanchuk',
      iconName: ContactIcon.LINKEDIN,
      iconColor: 'blue',
    },
    {
      ref: 'https://www.instagram.com/serhii._.yanchuk/',
      title: 'serhii._.yanchuk',
      iconName: ContactIcon.INSTAGRAM,
    },
  ],
  title: 'Привіт!',
  subtitle:
    'Під час розповіді я дам вам поради та рекомендації, щоб ви краще розуміли як працює наш технічний стек, і до кінця цього уроку у вас буде веб-додаток на ASP.NET Core. Це - ознайомча лекція, тому:',
  listItems: [
    'деякі речі потрібно буде загуглити власноруч;',
    'можливо ви вже все це знаєте (повторити все одно не завадить).',
  ],
  footer: 'Поїхали!',
};

const introBubble: IntroBubble = { ua: introUA, en: introEN };

export { introBubble };

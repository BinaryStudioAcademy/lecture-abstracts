import { IntroBlueBubbleProps } from '~/components/common/intro-blue-bubble/intro-blue-bubble';
import { AuthorName, ContactIcon } from '~/enums';

type IntroBubble = {
  ua: IntroBlueBubbleProps;
  ru: IntroBlueBubbleProps;
};

const introRu: IntroBlueBubbleProps = {
  author: AuthorName.VOLODYMYR_LENCH_RU,
  about:
    'Вова закончил курс Академии по РНР в 2017 году и с тех пор кодит в <a href="https://binary-studio.com"><strong>Binary Studio</strong></a>. Знает о <a href="https://martinfowler.com/bliki/CQRS.html"><strong>CQRS</strong></a> и <a href="https://www.martinfowler.com/eaaDev/EventSourcing.html"><strong>event sourcing</strong></a>, умеет пилить фронтенд на <a href="https://vuejs.org/"><strong>Vue</strong></a>, но разрабатывает приложение для моделирования баз данных на <a href="https://reactjs.org/"><strong>React</strong></a>. Любит посещать технические митапы, пить кофе и разбираться в новых технологиях по выходным.',
  contacts: [
    {
      ref: 'https://www.facebook.com/people/%D0%92%D0%BB%D0%B0%D0%B4%D0%B8%D0%BC%D0%B8%D1%80-%D0%9B%D0%B5%D0%BD%D1%87/100000740939113/',
      title: 'Владимир Ленч',
      iconName: ContactIcon.FACEBOOK,
    },
    {
      ref: 'https://github.com/lenchv',
      title: 'lenchv',
      iconName: ContactIcon.GITHUB,
    },
    {
      ref: 'https://www.instagram.com/vladimirlench/',
      title: 'vladimirlench',
      iconName: ContactIcon.INSTAGRAM,
    },
  ],
  title: 'Всем привет!',
  subtitle:
    'Вашему вниманию первая профильная лекция «Modern PHP features and ecosystem» или «Make PHP great again»! Рассмотрим что нового в PHP и что будущее готовит. Но вначале дисклеймер:',
  listItems: [
    'часть материала вам уже знакома и это гуд 😊;',
    'лекция обещает быть интересной и познавательной <em>(за употребление слов-паразитов, жаргона и нецензурной брани простите)</em>.',
  ],
  footer:
    'Да, кстати... с собой: терминал (командная строка), <a href="https://git-scm.com/"><strong>Git</strong></a>, <a href="https://code.visualstudio.com/"><strong>PHPStorm</strong></a> или <a href="https://code.visualstudio.com/"><strong>Visual Studio Code</strong></a>. Начнём?',
};

const introUA: IntroBlueBubbleProps = {
  author: AuthorName.VOLODYMYR_LENCH_UA,
  about:
    'Вова закінчив курс академії по РНР у 2017 році та з тих пір пише код в <a href="https://binary-studio.com"><strong>Binary Studio</strong></a>. Знає про <a href="https://martinfowler.com/bliki/CQRS.html"><strong>CQRS</strong></a> та <a href="https://www.martinfowler.com/eaaDev/EventSourcing.html"><strong>event sourcing</strong></a>, вміє пилити фронтенд на <a href="https://vuejs.org/"><strong>Vue</strong></a>, але розробляє додаток для моделюання баз даних на <a href="https://reactjs.org/"><strong>React</strong></a>. Любить відвідувати технічні мітапи, пити каву, та розбиратися у нових технологіях по вихідним.',
  contacts: [
    {
      ref: 'https://www.facebook.com/people/%D0%92%D0%BB%D0%B0%D0%B4%D0%B8%D0%BC%D0%B8%D1%80-%D0%9B%D0%B5%D0%BD%D1%87/100000740939113/',
      title: 'Володимир Лєнч',
      iconName: ContactIcon.FACEBOOK,
    },
    {
      ref: 'https://github.com/lenchv',
      title: 'lenchv',
      iconName: ContactIcon.GITHUB,
    },
    {
      ref: 'https://www.instagram.com/vladimirlench/',
      title: 'vladimirlench',
      iconName: ContactIcon.INSTAGRAM,
    },
  ],
  title: 'Усім привіт!',
  subtitle:
    'Вашій увазі перша профільна лекція «Modern PHP features and ecosystem» або ж «Make PHP great again»! Розглянемо що нового у PHP та що майбутнє готує. Але зпочатку дізклеймер:',
  listItems: [
    'частина матеріалу вам вже знайома і це гуд 😊;',
    'лекція обіцяє бути цікавою та познавальною <em>(за використання слів-паразитів, жаргону та нецензурної лайки вибачайте)</em>.',
  ],
  footer:
    'Так, до речі... з собою: термінал (командний рядок), <a href="https://git-scm.com/"><strong>Git</strong></a>, <a href="https://code.visualstudio.com/"><strong>PHPStorm</strong></a> або <a href="https://code.visualstudio.com/"><strong>Visual Studio Code</strong></a>. Почнемо?',
};

const introBubble: IntroBubble = { ua: introUA, ru: introRu };

export { introBubble };

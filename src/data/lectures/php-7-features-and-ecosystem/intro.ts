import { IntroBlueBubbleProps } from '~/components/common/intro-blue-bubble/intro-blue-bubble';
import { AuthorName, ContactIcon } from '~/enums';

type IntroBubble = {
  ru: IntroBlueBubbleProps;
};

const introRu: IntroBlueBubbleProps = {
  author: AuthorName.PAVEL_NEMCHENKO,
  about:
    'Паша Немченко закончил курс Академии по РНР и с тех пор кодит в <a href="https://binary-studio.com"><strong>Binary Studio</strong></a> с юмором и удовольствием. Знает о <a href="https://martinfowler.com/bliki/CQRS.html"><strong>CQRS</strong></a> и <a href="https://www.martinfowler.com/eaaDev/EventSourcing.html"><strong>event sourcing</strong></a>, а также пилит фронтенд на <a href="https://vuejs.org/"><strong>Vue</strong></a>. Любит ходить на технические митапы, читать мемы, смотреть Марвел, пить кофе и разбираться в новых технологиях по выходным.',
  contacts: [
    {
      ref: 'https://www.facebook.com/nempavel',
      title: 'nempavel',
      iconName: ContactIcon.FACEBOOK,
    },
    {
      ref: 'https://github.com/nemoipaha',
      title: 'nemoipaha',
      iconName: ContactIcon.GITHUB,
    },
  ],
  title: 'Привет, академисты!',
  subtitle:
    'Вашему вниманию первая профильная лекция «PHP 7 features and ecosystem» или «Make PHP great again»! Рассмотрим что нового в PHP и что будущее готовит. Но вначале дисклеймер:',
  listItems: [
    'часть материала вам уже знакома и это гуд 😊;',
    'лекция обещает быть информативной <em>(за употребление слов-паразитов и терминов - простите)</em>;',
  ],
  footer:
    'Да, кстати... С собой: терминал (командная строка), <a href="https://git-scm.com/"><strong>Git</strong></a>, <a href="https://code.visualstudio.com/"><strong>PHPStorm</strong></a> или <a href="https://code.visualstudio.com/"><strong>Visual Studio Code</strong></a>. Начнём?',
};

const introBubble: IntroBubble = { ru: introRu };

export { introBubble };

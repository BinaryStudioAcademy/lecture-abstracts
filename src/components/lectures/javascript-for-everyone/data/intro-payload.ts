import { AuthorName, ContactIcon } from '~/common/enums/enums';
import { IntroPayload, IntroBlueBubbleProps } from '~/common/types/types';

const introEN: IntroBlueBubbleProps = {
  author: AuthorName.OLEKSANDR_DANYLCHENKO_EN,
  about:
    "Full-stack developer at Binary Studio. Works on development of a new SPA framework, which generates complex visually-rich sites with just the simple declarative description in the few jsons. Likes to discover and experiment with the new web-platform features. <del>And doesn't like Safari for incompatibilities and obsolescence.</del>",
  contacts: [
    {
      ref: 'https://www.linkedin.com/in/oleksandr-danylchenko-a5a007170/',
      iconColor: 'blue',
      title: 'oleksandr-danylchenko',
      iconName: ContactIcon.LINKEDIN,
    },
  ],
  title: 'Hello, world!',
  subtitle:
    'I will tell you about all the joys of modern JavaScript, starting from the basic syntax and ending <em>(carefully, jargon!)</em> with modules, transpilers, and bundlers. Before you start - a few disclaimers about the content of the lecture:<br />',
  listItems: [
    'Some terms and technologies are covered superficially;',
    '"- Should I click on all the links to the documentation and read all the articles?" Well-u-u-u-u, up to you;',
    'Everything should be interesting and as informative as possible, but you’ll see how it will turn out ... Have fun! 🙃',
  ],
  footer:
    'And another <strong>heads up</strong> - you will need your favorite <a href="https://www.jetbrains.com/products/#lang=js"><strong>IDE</strong></a>, <a href="https://nodejs.org/en/"><strong>Node.js</strong></a>, and download the <a href="/assets/zip/es6-for-everyone.zip">project starter</a>. Ready? Let\'s go!',
};
const introUA: IntroBlueBubbleProps = {
  author: AuthorName.OLEKSANDR_DANYLCHENKO_UA,
  about:
    "Full-stack розробник у компанії Binary Studio. Працює над розробкою нового SPA фреймворку, який генерує складні візуально насичені сайти лише за простими декларативними описами у кількох json'ах. Любить відкривати та експериментувати з новими функціями веб-платформи. <del>І не любить Safari через несумісності та застарілість.</del>",
  contacts: [
    {
      ref: 'https://www.linkedin.com/in/oleksandr-danylchenko-a5a007170/',
      iconColor: 'blue',
      title: 'oleksandr-danylchenko',
      iconName: ContactIcon.LINKEDIN,
    },
  ],
  title: 'Hello, world!',
  subtitle:
    'Розповім про всі радості сучасного JavaScript, починаючи від базового синтаксису і закінчуючи <em>(обережно, жаргон!)</em> модулями, бандлерами і транспайлерами. Перед тим як розпочати  — декілька дісклеймерів про зміст лекції:<br />',
  listItems: [
    'Деякі терміни та технології розглядаються поверхнево;',
    '"— А клікати на всі лінки на документацію і читати всі-всі статті?" Ну-у-у-у-у, up to you;',
    'Все мало би бути цікаво та по максимуму інформативно, але тут вже як вийде... Have fun! 🙃',
  ],
  footer:
    'І ще один <strong>heads up</strong> — вам знадобиться улюблена <a href="https://www.jetbrains.com/products/#lang=js"><strong>IDE</strong></a>, <a href="https://nodejs.org/en/"><strong>Node.js</strong></a>, і завантажити <a href="/assets/zip/es6-for-everyone.zip">стартер проекту</a>. Готові? Побігли!.',
};

const introPayload: IntroPayload = { ua: introUA, en: introEN };

export { introPayload };

import { PanelsPayload } from '~/types';
import { PanelsProps } from '~/components/common/panels/panels';

import yarnLogoImage from '../assets/images/yarn.svg';
import npmLogoImage from '../assets/images/npm.svg';

const historyEn: PanelsProps = {
  panels: [
    {
      head: '<h6><strong>JavaScript — client-side language</strong><span class="text-gray"><small>#1</small></span></h6>',
      body: 'As a result - it has a large community that wants to write code on a server using a familiar language.',
    },
    {
      head: '<h6><strong>Event Loop</strong><span class="text-gray"><small>#2</small></span></h6>',
      body: 'JavaScript is a single-threaded language, which means that all operations, both synchronous and asynchronous, occur in a single thread that is never blocked. Non-blocking I/O model makes it lightweight and efficient.',
    },
    {
      head: '<h6><strong>V8</strong><span class="text-gray"><small>#3</small></span></h6>',
      body: "An engine developed by the Google Chrome team to improve the performance of JavaScript in their browser. It's extremely fast and powerful because it's written in C++. Node.js runs the V8 engine outside the browser and this allows Node to be very performant.",
    },
  ],
  columns: 3,
};
const historyUa: PanelsProps = {
  panels: [
    {
      head: '<h6><strong>JavaScript — мова клієнта</strong><span class="text-gray"><small>#1</small></span></h6>',
      body: "Як результат - велике ком'юніті, що бажає писати код на сервері, використовуючи вже знайому мову.",
    },
    {
      head: '<h6><strong>Event Loop</strong><span class="text-gray"><small>#2</small></span></h6>',
      body: 'JavaScript - це однопотокова мова, що означає, що усі операції, як синхронні так і асинхронні, відбуваються у єдиному потоці, який ніколи не блокується. Це і є основою відмовостійкості Node.js.',
    },
    {
      head: '<h6><strong>V8</strong><span class="text-gray"><small>#3</small></span></h6>',
      body: 'Двигун, розроблений командою Google Chrome для поліпшення роботи JavaScript у їх браузері. Він дуже швидкий та потужний, тому що написаний на C++. Node.js використовує двигун V8 поза браузером, і це дозволяє Node бути дуже ефективним.',
    },
  ],
  columns: 3,
};

const installEn: PanelsProps = {
  panels: [
    {
      head: '<h6><strong>Restart your computer after installation</strong><span>🖥️</span></h6>',
      body: 'In most cases environment variables are the ones to blame, so a reboot is required to apply the changes to them. Mostly this is the case for Windows',
    },
    {
      head: '<h6><strong>Insufficient permissions</strong><span>⚠️</span></h6>',
      body: 'Run the installation on admin behalf',
    },
    {
      head: '<h6><strong>Invalid environment variables</strong><span>🚧</span></h6>',
      body: 'The installer should automatically set the path to the Node.js file, but sometimes this does not work, and you need to enter these paths manually. <a href="https://stackoverflow.com/questions/27864040/fixing-npm-path-in-windows-8-and-10">How to do this on Windows?</a>',
    },
  ],
  columns: 3,
};
const installUa: PanelsProps = {
  panels: [
    {
      head: "<h6><strong>Після інсталяції обов'язково перезавантажте комп'ютер</strong><span>🖥️</span></h6>",
      body: 'Переважно винні змінні оточення, тому, саме для застосування змін у них, необхідне перезавантаження. Це у більшості випадків стосується Windows',
    },
    {
      head: '<h6><strong>Недостатні права</strong><span>⚠️</span></h6>',
      body: 'Виконайте інсталяцію від імені Адміністратора',
    },
    {
      head: '<h6><strong>Неправильні змінні оточення</strong><span>🚧</span></h6>',
      body: 'Інсталятор повинен автоматично встановлювати шлях до стартового файлу Node.js, але інколи це не працює, і потрібно вносити ці шляхи самостійно. <a href="https://stackoverflow.com/questions/27864040/fixing-npm-path-in-windows-8-and-10">Як це зробити на Windows?</a>',
    },
  ],
  columns: 3,
};

const packetsEn: PanelsProps = {
  panels: [
    {
      head: '<h6><strong>npm</strong></h6>',
      body: `<a href="https://www.npmjs.com"><img  src="${npmLogoImage}"/></a> Basic JavaScript development tools that will help you enter the market faster and build powerful applications using modern open-source code.`,
    },
    {
      head: '<h6><strong>yarn</strong></h6>',
      body: `<a href="https://yarnpkg.com"><img src="${yarnLogoImage}" /></a> Fast, reliable and secure dependency management.`,
    },
  ],
};

const packetsUa: PanelsProps = {
  panels: [
    {
      head: '<h6><strong>npm</strong></h6>',
      body: `<a href="https://www.npmjs.com"><img  src="${npmLogoImage}"/></a> Основні інструменти розробки JavaScript, які допоможуть вам швидше вийти на ринок і створювати потужні додатки з використанням сучасного відкритого source коду.`,
    },
    {
      head: '<h6><strong>yarn</strong></h6>',
      body: `<a href="https://yarnpkg.com"><img src="${yarnLogoImage}" /></a> Швидке, надійне й безпечне управління залежностями.`,
    },
  ],
};

const reasonsEn: PanelsProps = {
  panels: [
    {
      head: '<h6><strong>Convenient</strong><span class="text-gray"><small>#1</small></span></h6>',
      body: 'Instead of copypasting the code, there is a handy tool for this.',
    },
    {
      head: '<h6><strong>Reduced project size</strong><span class="text-gray"><small>#2</small></span></h6>',
      body: 'If we stored the code of all dependencies altogether with the project code, it would significantly increase its size, which would complicate the exchange of data within the team during development',
    },
    {
      head: '<h6><strong>Resolving conflicts</strong><span class="text-gray"><small>#3</small></span></h6>',
      body: 'Due to the huge variety of packages, they can conflict with each other. Package managers deal with these problems.',
    },
    {
      head: '<h6><strong>Optimization</strong><span class="text-gray"><small>#4</small></span></h6>',
      body: 'Package <b>Х</b> can depend on package <i><b>А</b></i> and package <b>Y</b> can depend on package <i><b>А</b></i>. If we add packages <b>X</b> and <b>Y</b> to a project manually, we will have a duplicate of package <i><b>А</b></i>. Package managers solve duplicate issues and optimize the number of installed dependencies.',
    },
    {
      head: '<h6><strong>Cross-platform</strong><span class="text-gray"><small>#5</small></span></h6>',
      body: 'Different packages or their analogs may be required to work on different platforms, but managers can help and provide recommendations.',
    },
  ],
  columns: 3,
};

const reasonsUa: PanelsProps = {
  panels: [
    {
      head: '<h6><strong>Зручніть</strong><span class="text-gray"><small>#1</small></span></h6>',
      body: 'Замість копіювання коду руками, для цього є зручний інструмент.',
    },
    {
      head: '<h6><strong>Зменшений розмір проекту</strong><span class="text-gray"><small>#2</small></span></h6>',
      body: "Якщо би ми зберігали код усіх залежностей разом із кодом проекту, то це значно збільшило б його об'єм, що ускладнило б передачу й обмін даними всередині команди під час розробки",
    },
    {
      head: '<h6><strong>Вирішення конфліктів</strong><span class="text-gray"><small>#3</small></span></h6>',
      body: "У зв'язку з величезним різноманіттям пакетів, вони можуть конфліктувати між собою, менеджери беруть ці проблеми на себе.",
    },
    {
      head: '<h6><strong>Оптимізація</strong><span class="text-gray"><small>#4</small></span></h6>',
      body: 'Пакет <b>Х</b> може залежити від пакета <i><b>А</b></i> і пакет <b>Y</b> може залежити від пакета <i><b>А</b></i>. Якщо би ми додавали пакети <b>X</b> і <b>Y</b> до проекту руками, то у нас був би дублікат пакету <i><b>А</b></i>. Менеджери вирішують питання дублікатів та оптимізують кількість встановлених залежностей.',
    },
    {
      head: '<h6><strong>Кросплатформеність</strong><span class="text-gray"><small>#5</small></span></h6>',
      body: 'Для роботи на різних платформах можуть знадобитись різні пакети або їх аналоги, і менеджери можуть надати довідку рекомендацій.',
    },
  ],
  columns: 3,
};

const panelsPayload: Record<string, PanelsPayload> = {
  historySection: { en: historyEn, ua: historyUa },
  installSection: { en: installEn, ua: installUa },
  packetsSection: { en: packetsEn, ua: packetsUa },
  reasonsSection: { en: reasonsEn, ua: reasonsUa },
};

export { panelsPayload };

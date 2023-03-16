import * as React from 'react';
import { HeadFC } from 'gatsby';
import { Layout } from '~/layouts';
import { SEO } from '~/partials';
import {
  DetailsCard,
  IntroBlueBubble,
  Language,
  Level,
  SlackMessage,
  TimelineOfContents,
  VideoWrapper,
  Bubble,
  Code,
  Panels,
  ThatsAllFolks,
} from '~/components/common';
import {
  introPayload,
  panelsPayload,
  seoPayload,
  slugPayload,
} from '../data/data';

import {
  ryuAvatar,
  youAvatar,
  vitaliyOleynikovAvatar,
  alexandrTovmachAvatar,
} from '~/assets/images/avatars/slack-squared';
import networkImage from '../assets/images/network.png';
import clientServerModelImage from '../assets/images/client-server-model.png';
import serverRoomImage from '../assets/images/server-room.jpg';
import nodeNpmVersionsImg from '../assets/images/node-npm-versions.jpg';
import server_startedImg from '../assets/images/server-started.jpg';
import get_serverImg from '../assets/images/get-server.jpg';
import get_server_logImg from '../assets/images/get-server-log.jpg';
import postmanImg from '../assets/images/postman.jpg';
import server_logsImg from '../assets/images/server-logs.jpg';
import eventloopImg from '../assets/images/eventloop.jpg';
import express_getImg from '../assets/images/express-get.jpg';
import express_postImg from '../assets/images/express-post.jpg';
import express_bodyImg from '../assets/images/express-body.jpg';
import express_body_logImg from '../assets/images/express-body-log.jpg';
import express_generator_versionImg from '../assets/images/express-generator-version.jpg';
import express_generator_helpImg from '../assets/images/express-generator-help.jpg';
import express_generatorImg from '../assets/images/express-generator.jpg';
import express_generator_starterImg from '../assets/images/express-generator-starter.jpg';
import service_testImg from '../assets/images/service-test.jpg';
import repository_testImg from '../assets/images/repository-test.jpg';
import middleware_test1Img from '../assets/images/middleware-test1.jpg';
import middleware_test2Img from '../assets/images/middleware-test2.jpg';
import audio from '~/assets/audio/in-the-end.mp3';
import { CodeLanguage } from '~/enums/code-language/code-language';

const Page: React.FC = () => {
  return (
    <Layout>
      <h1>Express yourself with Node.js</h1>
      <Language currentLanguage="ua" languages={slugPayload} />
      <IntroBlueBubble {...introPayload.ua} />
      <p>
        Ryu, залишившись дуже задоволеним онлайн-файтінгом, почав вихвалятися
        ним перед своїми друзями. Спочатку, гра викликала неабияку
        зацікавленність, проте не встиг Ryu почати перемовини з Capcom, як
        ажіотаж зменшився. Всі відмітили, що персонажнів у грі дуже мало, а їх
        характеристики не відповідають дійсності. Через це грати стає нецікаво.
        <br />
        Засмучений Ryu знову звертається до розробників, щоб виправити ситуацію:
      </p>
      <SlackMessage
        senderId="ryu"
        senderName="Ryu"
        senderAvatarUrl={ryuAvatar}
        reactions={[{ emoji: '👍', count: 42 }]}
        replies={[{ name: 'N/A', avatarUrl: alexandrTovmachAvatar }]}
      >
        <p>
          Hi, I need to increase the number of characters in the fighting game.
          I also want to be able to change the properties of the players, their
          appearance, damage, vulnerability and names (because among us there
          are French who are offended when their name is spelled incorrectly)
        </p>
      </SlackMessage>
      <p>
        Студент, розуміючи, що проста сторінка починає розростатися у серйозний
        додаток з бізнес-логікою та керуванням користувачами, а також не маючи
        змоги зберігати великі об'єми даних на клієнті, вирішує, що настав час
        backend'у.
      </p>
      <SlackMessage
        senderId="you"
        senderName="You"
        senderAvatarUrl={youAvatar}
        reactions={[
          { emoji: '👍', count: 13 },
          { emoji: '🏁', count: 8 },
          { emoji: '🚀', count: 10 },
          { emoji: '👏', count: 6 },
        ]}
        replies={[{ name: 'N/A', avatarUrl: vitaliyOleynikovAvatar }]}
      >
        Yes, I think we can implement all this using a server.
      </SlackMessage>
      І так як студент пише на JS, то і вибір технології стає очевидним ―
      Node.js. Залишилось зовсім трохи ―{' '}
      <span
        className="tooltip"
        data-tooltip='ну таааааак, саме "зовсім трохи"...'
      >
        <u>вивчити цю технологію</u>
      </span>
      .
      <hr />
      <TimelineOfContents
        headerTitle="Робота з Node.js"
        timeline={[
          {
            linkTo: '#about-backend',
            title: 'Теорія',
          },
          {
            linkTo: '#preparation',
            title: 'Підготовка',
          },
          {
            linkTo: '#package-manager',
            title: 'Пакетні менеджери',
          },
          {
            linkTo: '#basic-node-js',
            title: 'Основи Node.js',
          },
          {
            linkTo: '#basic-express-js',
            title: 'Основи Express.js',
          },
          {
            linkTo: '#first-project',
            title: 'Перший проект',
          },
          {
            linkTo: '#finish',
            title: 'Висновок',
          },
        ]}
      />
      <Level
        id="about-backend"
        number="1"
        name="Теорія"
        difficulty="Як реклама на YouTube ― можна пропустити."
        objectives="Зрозуміти, що таке сервер, де його місце у web і як з цим жити."
      />
      <VideoWrapper duration="3 хв">
        <iframe
          src="https://www.youtube.com/embed/8ZTQy-ezIwI?start=54&end=235"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </VideoWrapper>
      <DetailsCard>
        <strong>Терміни</strong>
        <ul>
          <li>
            <a href="https://uk.wikipedia.org/wiki/%D0%9A%D0%BB%D1%96%D1%94%D0%BD%D1%82_(%D1%96%D0%BD%D1%84%D0%BE%D1%80%D0%BC%D0%B0%D1%82%D0%B8%D0%BA%D0%B0)">
              <strong>Клієнт</strong>
            </a>{' '}
            ― це може бути браузер або будь-яке інше програмне забезпечення, що
            відправляє запити до серверу.
          </li>
          <li>
            <a href="https://uk.wikipedia.org/wiki/%D0%92%D0%B5%D0%B1%D1%81%D0%B5%D1%80%D0%B2%D0%B5%D1%80">
              <strong>Сервер</strong>
            </a>{' '}
            ― це програма або її частина, що взаємодіє з клієнтом за принципом
            запит-відповідь на основі HTTP-протоколу, відправляючи необхідні
            дані або файли на клієнт.
            <Bubble size="small">
              Коли web-розробник каже слово "сервер", він має на увазі
              "веб-сервер". Те ж саме стосується і "клієнту", "дотатку" і т.д.
            </Bubble>
          </li>
          <li>
            <a href="https://uk.wikipedia.org/wiki/HTTP">
              <strong>HTTP-протокол</strong>
            </a>{' '}
            ― набір правил передачі даних в інтернеті.
          </li>
          <li>
            <a href="https://uk.wikipedia.org/wiki/HTTP#Request_methods">
              <strong>HTTP-метод</strong>
            </a>{' '}
            ― вказує на те, яку операцію необхідно виконати з даним ресурсом. До
            основних можна віднести <strong>GET</strong>, <strong>POST</strong>,{' '}
            <strong>PUT</strong>, <strong>DELETE</strong> ― їх трошки більше,
            але це базис, якого тобі вистачить на перший час.
          </li>
          <li>
            <a href="https://uk.wikipedia.org/wiki/%D0%A1%D0%BF%D0%B8%D1%81%D0%BE%D0%BA_%D0%BA%D0%BE%D0%B4%D1%96%D0%B2_%D1%81%D1%82%D0%B0%D0%BD%D1%83_HTTP">
              <strong>HTTP-статус</strong>
            </a>{' '}
            ― надходить разом із відповіддю з серверу і говорить про статус
            запитуваної операції. Найбільш часто використовуються:{' '}
            <a href="https://ru.wikipedia.org/wiki/%D0%A1%D0%BF%D0%B8%D1%81%D0%BE%D0%BA_%D0%BA%D0%BE%D0%B4%D0%BE%D0%B2_%D1%81%D0%BE%D1%81%D1%82%D0%BE%D1%8F%D0%BD%D0%B8%D1%8F_HTTP#200">
              <strong>200</strong>
            </a>
            ,{' '}
            <a href="https://ru.wikipedia.org/wiki/%D0%A1%D0%BF%D0%B8%D1%81%D0%BE%D0%BA_%D0%BA%D0%BE%D0%B4%D0%BE%D0%B2_%D1%81%D0%BE%D1%81%D1%82%D0%BE%D1%8F%D0%BD%D0%B8%D1%8F_HTTP#301">
              <strong>301</strong>
            </a>
            ,{' '}
            <a href="https://ru.wikipedia.org/wiki/%D0%A1%D0%BF%D0%B8%D1%81%D0%BE%D0%BA_%D0%BA%D0%BE%D0%B4%D0%BE%D0%B2_%D1%81%D0%BE%D1%81%D1%82%D0%BE%D1%8F%D0%BD%D0%B8%D1%8F_HTTP#401">
              <strong>401</strong>
            </a>
            ,{' '}
            <a href="https://ru.wikipedia.org/wiki/%D0%A1%D0%BF%D0%B8%D1%81%D0%BE%D0%BA_%D0%BA%D0%BE%D0%B4%D0%BE%D0%B2_%D1%81%D0%BE%D1%81%D1%82%D0%BE%D1%8F%D0%BD%D0%B8%D1%8F_HTTP#404">
              <strong>404</strong>
            </a>
            ,{' '}
            <a href="https://ru.wikipedia.org/wiki/%D0%A1%D0%BF%D0%B8%D1%81%D0%BE%D0%BA_%D0%BA%D0%BE%D0%B4%D0%BE%D0%B2_%D1%81%D0%BE%D1%81%D1%82%D0%BE%D1%8F%D0%BD%D0%B8%D1%8F_HTTP#500">
              <strong>500</strong>
            </a>
            .
          </li>
        </ul>
      </DetailsCard>
      <ol className="inverted">
        <li>
          <h5>
            <strong>Web теорія</strong>
          </h5>
          Подивимось на прикладі, як же працює Web:
          <ol className="counted">
            <li>
              <em>користувач відкрив браузер</em> /{' '}
              <strong>запустив клієнт</strong>
            </li>
            <li>
              <em>
                користувач відкрив{' '}
                <a href="https://academy.binary-studio.com/ua/">посилання</a>
              </em>{' '}
              / <strong>по HTTP відправив GET запит на сервер</strong>
            </li>
            <li>
              <em>сервер опрацював запит</em> /{' '}
              <strong>визначив, що запитується файл і знайшов його</strong>
            </li>
            <li>
              <DetailsCard isReversed>
                <>
                  <em>сервер повернув файл</em> /{' '}
                  <strong>
                    по HTTP відправив відповідь зі статусом 200 і HTML файлом на
                    клієнт
                  </strong>
                </>
                <>
                  <img src={networkImage} alt="" />
                </>
              </DetailsCard>
            </li>
          </ol>
          <Bubble size="small">
            <a href="https://developer.mozilla.org/ru/docs/Learn/Getting_started_with_the_web/How_the_Web_works">
              Стаття "Як працює Веб"
            </a>
          </Bubble>
          <Bubble size="small">
            Якщо ти пишеш на JS і вже зверстав свою першу HTML-сторінку -
            означає, що з клієнтом ти знайомий достатньо. Тут ми будемо
            розглядати роботу зі сторони серверу{' '}
            <em>
              <s>
                (взагалі то ми розглядаємо сервер через те, що це як би тема
                лекції, але не важливо)
              </s>
            </em>
            .
          </Bubble>
        </li>
        <li>
          <h5>
            <strong>Сервер ― "що?" і "навіщо?"</strong>
          </h5>

          <DetailsCard>
            <>
              <strong>Що</strong> таке сервер?
            </>
            <>
              Простими словами, коли користувач вводить запит до адресного
              рядку, браузер запитує дані на віддаленому комп'ютері (сервері) по
              HTTP. У відповідь він отримує файл або дані, для відображення їх у
              браузері.
              <img src={clientServerModelImage} alt="" />
            </>
          </DetailsCard>

          <DetailsCard>
            <>
              <strong>Навіщо</strong> потрібен сервер?
            </>
            <>
              Для збереження та обробки усіх ресурсів, що використовуються у
              вебі. Неважливо, будь то одна статична сторінка або цілий
              Facebook, усе розташовано на віддалених серверах або хостінгах, і
              відображається користувачу тільки по його запиту.
              <img src={serverRoomImage} alt="" />
            </>
          </DetailsCard>

          <p>
            Сервер у сучасному вебі виконує безліч функцій з обробки та
            збереженню інформації, працює зі статичними файлами та
            конфіденційними даними, до яких ніхто не повинен мати доступу,
            виконує ресурсовитратні розрахунки, які занадто важкі для
            клієнтської частини, і ще багато чого іншого. Тому у залежності від
            складності проекту та вирішуваних задач, для комфортної роботи та
            збільшенню ККД, сервер буде будуватися за певною архітектурою:{' '}
            <a href="https://en.wikipedia.org/wiki/Monolithic_application">
              <strong>монолітною</strong>
            </a>{' '}
            або{' '}
            <a href="https://uk.wikipedia.org/wiki/%D0%9C%D1%96%D0%BA%D1%80%D0%BE%D1%81%D0%B5%D1%80%D0%B2%D1%96%D1%81%D0%B8">
              <strong>мікросервісною</strong>
            </a>
          </p>
        </li>
        <li>
          <h5>
            <strong>Історія Node.js</strong>
          </h5>
          <Bubble size="small">
            Полюбляєш хоку?:
            <blockquote>
              <a href="https://twitter.com/ryanmdahl">
                <strong>Райан Даль</strong>
              </a>
              ,<br />
              <a href="https://www.youtube.com/watch?v=ysSxxIqKNN0">
                <strong>2009 рік</strong>
              </a>
              ,<br />
              іскра, буря, безумство —{' '}
              <a href="https://nodejs.org/">
                <strong>Node.js</strong>
              </a>
            </blockquote>
          </Bubble>
          <p>
            Саме у 2009 році була опублікована перша версія Node.js. Після були{' '}
            <a href="https://blog.risingstack.com/history-of-node-js/">
              деякі перепетії з правами
            </a>
            , але нам це не так цікаво, як причини за яких Node.js був написаний
            саме під JavaScript:
          </p>
          <Panels {...panelsPayload.historySection.ua} />
          <p>
            І зараз, завдяки усім цим факторам, ми можемо створювати повноцінні
            веб додатки, використовуючи JavaScript як на клієнті, так і на
            сервері.
          </p>
        </li>
      </ol>
      <Level
        id="preparation"
        number="2"
        name="Підготовка"
        difficulty="Як встановлення Windows ― усе просто, але щось може піти не так."
        objectives="Встановити Node.js на ПК"
      />
      <VideoWrapper duration="1 хв 40 сек">
        <iframe
          src="https://www.youtube.com/embed/8ZTQy-ezIwI?start=235&end=334"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </VideoWrapper>
      <p>
        Для того, щоб почати процес інсталяції, достатньо перейти на офіційний
        сайт <a href="https://nodejs.org">https://nodejs.org</a>, і завантажити
        інсталяційний файл для своєї операційної системи, далі дотримуватись
        інструкцій з інсталяції.
      </p>
      <Bubble size="small">
        Для зручності можна також використовувати пакет node version manager для
        встановлення різних версій Node на вашу систему. Існує{' '}
        <a href="https://github.com/nvm-sh/nvm">nvm пакет для Mac і Linux</a>{' '}
        або окремий{' '}
        <a href="https://github.com/coreybutler/nvm-windows">
          пакет для Windows
        </a>
        . Перейдіть на одне з цих посилань і дотримуйтесь інструкцій, щоб
        встановити nvm на вашу систему, і це дасть вам можливість встановити
        будь-яку потрібну вам версію Node.js.
      </Bubble>
      <p>
        Я не бачу сенсу розповідати повний процес інсталяції для усіх ОС, для
        цього дивіться офіційни туторіали, але хочу звернути увагу на типові
        проблеми при інсталяції.
      </p>
      <Panels {...panelsPayload.installSection.ua} />
      <DetailsCard>
        <>
          <strong>
            Для перевірки успішної інсталяції Node.js використовуйте термінал.
          </strong>
        </>
        <>
          Введіть наступні команди:
          <Code language={CodeLanguage.SHELL}>
            {`# Print Node.js version
node -v

# Print npm version
npm -v`}
          </Code>
        </>
      </DetailsCard>
      <DetailsCard>
        <>
          <strong>
            Якщо версія відображається - все встановлено і працює правильно.
          </strong>
        </>
        <>
          <p>
            <i>твої версії можуть відрізнятися у більшу сторону</i>
          </p>
          <img src={nodeNpmVersionsImg} alt="nodeNpmVersions" />
        </>
      </DetailsCard>
      <p>
        Помітили <b>npm</b>? Ми ж його не встановлювали? Це пакетний менеджер,
        розроблений командою Node.js, і встановлюється у комплекті для зручної
        роботи з модулями. Ми гоговоримо про нього детальніше у наступному
        блоці, а зараз головне переконатися у його працездатності.
      </p>
      <Level
        id="package-manager"
        number="3"
        name="Пакетні менеджери"
        difficulty="Як вчитися грати у карти ― зрозуміти і запам'ятати хто за що відповідає."
        objectives="Розібратися у термінології та попрацювати з пакетaми за допомогою npm."
      />
      <VideoWrapper duration="7 хв 20 сек">
        <iframe
          src="https://www.youtube.com/embed/8ZTQy-ezIwI?start=335&end=774"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </VideoWrapper>
      <DetailsCard>
        <>
          <strong>Терміни</strong>
        </>
        <>
          <ul>
            <li>
              <a href="https://uk.wikipedia.org/wiki/%D0%9C%D0%BE%D0%B4%D1%83%D0%BB%D1%8C%D0%BD%D0%B5_%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D1%83%D0%B2%D0%B0%D0%BD%D0%BD%D1%8F">
                Модулі (<code>modules</code>)
              </a>{' '}
              — це частини програми/коду, винесені в окремі блоки для подальшого
              перевикористання.
            </li>
            <li>
              <a href="https://uk.wikipedia.org/wiki/%D0%9F%D0%B0%D0%BA%D0%B5%D1%82_%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D0%BD%D0%BE%D0%B3%D0%BE_%D0%B7%D0%B0%D0%B1%D0%B5%D0%B7%D0%BF%D0%B5%D1%87%D0%B5%D0%BD%D0%BD%D1%8F">
                Пакети (<code>packages</code>)
              </a>{' '}
              — це збірник модулів.
            </li>
            <li>
              <a href="https://uk.wikipedia.org/wiki/%D0%A1%D0%B8%D1%81%D1%82%D0%B5%D0%BC%D0%B0_%D0%BA%D0%B5%D1%80%D1%83%D0%B2%D0%B0%D0%BD%D0%BD%D1%8F_%D0%BF%D0%B0%D0%BA%D1%83%D0%BD%D0%BA%D0%B0%D0%BC%D0%B8">
                Пакетні менеджері
              </a>{' '}
              ― інструмент для інсталяції, видалення, оновлення, версіонування
              та валідації пакетів та модулів.
            </li>
          </ul>
        </>
      </DetailsCard>
      <br />
      <ol className="inverted">
        <li>
          <h5>
            <strong>Що за "пакети" і навіщо їм потрібні "менеджери"?</strong>
          </h5>
          <DetailsCard>
            <>
              <strong>
                Для пояснення того чим є пакет/модуль - розглянемо приклад.
              </strong>
            </>
            <>
              <ol className="regular">
                <li>
                  <i>
                    У свому проекті ти написав функцію для сортування масиву і
                    перевикористовуєш її у декількох місцях.
                  </i>
                  <Bubble size="small">Вітаю, це майже пакет/модуль</Bubble>
                </li>
                <li>
                  <i>
                    У подальшому ти вирішив, що ця ж функція може допомогти
                    комусь ще, тому публікуєш її на{' '}
                    <a href="https://stackoverflow.com/questions/1063007/how-to-sort-an-array-of-integers-correctly">
                      StackOverflow як відповідь
                    </a>
                    .
                  </i>
                  <Bubble size="small">
                    Зараз твій пакет/модуль у відкритому доступі й інші
                    розробники можуть просто взяти і скопіювати його.
                  </Bubble>
                </li>
                <li>
                  <i>
                    А що як твоє рішення більш масштабне і займає 400 рядків
                    коду? 500 рядків? 1000?
                  </i>
                  <Bubble size="small">
                    Не дуже й то і зручно копіювати такі об'єми руками{' '}
                    <s>
                      (хоча фронтедщики зі своїми jQuery-слайдерами
                      посрепечаються)
                    </s>
                    .
                  </Bubble>
                </li>
                <li>
                  <i>
                    Тому краще правильно оформити свою функцію та опублікувати у
                    віддалене сховище ― <b>npm</b>.
                  </i>
                  <Bubble size="small">
                    Тепер іншим програмістам достатньо знати тільки назву твого
                    пакета/модуля і використати <b>npm</b>, щоб дотати його до
                    себе у проект, видалити, якщо не сподобається, або оновити
                    до наступної версії, якщо ти її зробиш.
                  </Bubble>
                </li>
              </ol>

              <p>
                <blockquote>
                  Ще раз - у чому різниця між <code>packages</code> і{' '}
                  <code>modules</code>? Повірте, у цьому плутаються навіть
                  досвідчені розробники, а різниця проста, <code>module</code> -
                  це атом,
                  <code>package</code> - це молекула. Іншими словами{' '}
                  <code>package</code> складається з інших <code>modules</code>,
                  які є наймешною одиницею, що вирішує одну задачу. Все
                  максимально просто!
                </blockquote>
              </p>
            </>
          </DetailsCard>
          <p>
            Буквально{' '}
            <a href="https://www.javascriptstuff.com/javascript-frontend-package-managers/">
              декілька років назад
            </a>
            блок про пакетні менеджери міг зайняти час цілої лекції, в силу їх
            величезнох кількості, але станом на сьогодні ситуація
            стабілізувалася, і теперь для работи з JS у нас є 2 лідери:
          </p>

          <Panels {...panelsPayload.packetsSection.ua} />

          <p>
            В <b>yarn</b> доступні усі пакети з <b>npm</b>, тому що вони мають
            єдиний реєстр даних на двох, і створений він був тільки для того,
            щоб поліпшити роботу <b>npm</b>. Фактичної різниці між ними немає,
            крім суб'єктивних забобонів у фанатів конкретного інструмента. У
            майбутньому ви зможете самостійно вирішити з чим вам зручніше
            працювати, а сьогодні ми будемо говорити про <b>npm</b>, через його
            прив'язанність до Node.js.
          </p>

          <Bubble size="small">
            <a href="https://www.sitepoint.com/yarn-vs-npm/" target="_blank">
              {' '}
              Стаття "yarn або npm: все, що вам потрібно знати"
            </a>
          </Bubble>
        </li>
        <li>
          <h5>
            <strong>Робота з npm</strong>
          </h5>

          <p>
            Щоб дізнатися повний список команд доступних для <b>npm</b>, можна{' '}
            <s>і потрібно</s> почитати
            <a href="https://docs.npmjs.com/cli-documentation/" target="_blank">
              {' '}
              документацію{' '}
            </a>
            , я наведу в лекції базовий мінімум:
          </p>
          <Code language={CodeLanguage.SHELL}>
            {`# project initialization
npm init

# package installation
npm install package-name

# package installation for development only
npm install package-name --save-dev

# package removal
npm uninstall package-name

# installation of a specific version of the package
npm install package-name@version`}
          </Code>
        </li>
        <li>
          <p>
            На завершення хотілось би пояснити навіщо придумали "пакетні
            менеджери", адже ми могли би додавати код руками прямо до проекту
            без будь-яких проблем:
          </p>
          <Panels {...panelsPayload.reasonsSection.ua} />
        </li>
      </ol>
      <Level
        id="basic-node-js"
        number="4"
        name="Основи Node.js"
        difficulty="Як правила з бейсболу ― нічого не зрозумів, але дуже цікаво."
        objectives="За допомогою пакетів Node.js запустити базовий HTTP-сервер і розібратися з eventloop."
      />
      <VideoWrapper duration="5 хв 20 сек">
        <iframe
          src="https://www.youtube.com/embed/8ZTQy-ezIwI?start=774&end=1095"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </VideoWrapper>
      <p>
        <b>Node.js</b> - це середовище виконання для <b>JavaScript</b>, і ми
        можем запускати будь-які скрипти у ньому. Все буде працювати{' '}
        <span
          className="tooltip"
          data-tooltip='"майже", тому що спільного в них тільки V8'
        >
          <u>майже як у браузері</u>
        </span>
        , тому перехід с фронтенду на бекенд повинен бути{' '}
        <span
          className="tooltip"
          data-tooltip="якщо порівнювати з вивчанням нової мови"
        >
          <u>максимально комфортним</u>
        </span>
        .
      </p>
      <p>
        Для переходу у середовище потрібно виконати команду <code>node</code> у
        терминалі, потім написати будь-які команди на JS. Але очевидно, що цей
        метод не найзручніший і краще писати код у файлах, які у подальшому
        можна запускати командою <code>node назва_файлу.js</code>.
      </p>
      <p>
        Час експериментів! Ми вже знаємо як використовувати всю потужність JS з{' '}
        <span
          className="tooltip"
          data-tooltip="так розробники називають Node.js"
        >
          <u>нодами</u>
        </span>{' '}
        і це круто, але ми вже хочемо писати сервери. Відкриємо{' '}
        <a href="https://nodejs.org/api/" target="_blank">
          офіційну документацію
        </a>
        , щоб дізнатися список пакетів, що йдуть у комплекті з <b>Node.js</b>, і
        те, як з ними працювати. Як ми бачимо, пакетів дуже багато, але для
        початку нам потрібен лише один -{' '}
        <a href="https://nodejs.org/api/http.html" target="_blank">
          http
        </a>
        , який відповідає за роботу з мережею на основі HTTP. З опису ми
        розуміємо, що методів у нього багато і розглядати кожен новачку просто
        немає змісту, замість цього давайте напишемо практичний приклад запуску
        HTTP-серверу:
      </p>
      <Code language={CodeLanguage.JS}>
        {`// import of the http module
const http = require('http');

const port = 3000;

// callback on each HTTP request
const requestHandler = (request, response) => {
  console.log(request.url);
  response.end("How you doin'?");
};

// create HTTP-server
const server = http.createServer(requestHandler);

// run the server
server.listen(port, () => {
  console.log(\`Server running at http://localhost:\${port}\`);
});`}
      </Code>
      <DetailsCard>
        <>
          <strong>Запускаємо файл</strong>
        </>
        <>
          <img src={server_startedImg} alt="server_started" />
        </>
      </DetailsCard>
      <DetailsCard>
        <>
          <strong>Перевірка серверу через браузер</strong>
        </>
        <>
          <p>
            Браузер завжди відправляє GET запит на вказанний URL і в доповнення
            запитує <i>favicon.ico</i>, тому що вважає будь-яку адресу
            сторінкою.
          </p>
          <img src={get_serverImg} alt="get_server" />
          <p>
            Логи серверу, які ми отримуємо завдяки функції{' '}
            <code>requestHandler()</code>
          </p>
          <img src={get_server_logImg} alt="get_server_log" />
        </>
      </DetailsCard>
      <DetailsCard>
        <>
          <strong>Перевіряємо сервер за допомогою Postman</strong>
        </>
        <>
          <p>
            <s>На правах реклами</s> представляю{' '}
            <a href="https://www.getpostman.com/" target="_blank">
              Postman
            </a>{' '}
            ― інструмент для зручної відправки HTTP-запитів на сервер. За його
            допомогою ми можемо легко змінювати URL, методи, заголовки та тіло
            запиту.
          </p>
          <img src={postmanImg} alt="postman" />
          <Bubble size="small">
            <a
              href="https://habr.com/ru/company/kolesa/blog/351250/"
              target="_blank"
            >
              Стаття "Введення в Postman"
            </a>
          </Bubble>
        </>
      </DetailsCard>
      <p>
        Ми зробили працюючий сервер! Ура! Він дуже простий і не розуміє різницю
        між GET та POST запитом, не знає як працювати з тілом запиту і багато
        чого іншого, але він же перший, і ми ❤️ його просто за це, так? Давайте
        навчимо сервер зберігати всі логи у файл, а також розглянемо ще один
        пакет{' '}
        <a href="https://nodejs.org/api/fs.html" target="_blank">
          fs
        </a>
        , призначений для роботи з файловою системою:
      </p>
      <Code language={CodeLanguage.JS}>{`// import of the http module
const http = require('http');

// import of fs http module
const fs = require('fs');

const port = 3000;

// create a stream for writing to a file
const logFile = fs.createWriteStream('log.txt', { flags: 'a' });

// callback on each HTTP request
const requestHandler = (request, response) => {
  console.log(request.url);
  logFile.write(\`Request url: \${request.url}\\n\`);
  response.end("How you doin'?");
};

// create HTTP-server
const server = http.createServer(requestHandler);

// run the server
server.listen(port, () => {
  console.log(\`Server running at http://localhost:\${port}\`);
});`}</Code>
      <DetailsCard>
        <p>
          <strong>
            Після завершення декількох запитів подивимось у файл <i>log.txt</i>
          </strong>
        </p>
        <>
          <img src={server_logsImg} alt="server_logs" />
        </>
      </DetailsCard>
      <p>
        А що буде, якщо запис до файлу ще не закінчений, а на сервер прийде
        інший запит? Забігаючи наперед, скажу що операції роботи з файловою
        системою є асинхроними потоками(stream) і враховуючи однопотоковість JS
        вони повинні блокувати сервер до завершення. Але це не так, і ми можемо
        переконатися у цьому бомбардуючи сервер запитами, а він не відмовить і
        навіть не затримає жоден з них.
      </p>
      <Bubble size="small">
        <a
          href="https://habr.com/ru/company/zerotech/blog/339900/"
          target="_blank"
        >
          Стаття "Потоки (Stream) в NodeJS — річки, в які ввійдеш двічі"
        </a>
      </Bubble>
      <br />
      <br />
      <DetailsCard>
        <p>
          <strong>
            В чому ж справа? І тут ми повинні нарешті розібратися у тому, як
            реалізований eventloop у нодах
          </strong>
        </p>
        <>
          <p>
            Кільце в центрі - це одиничний потік JS і він завжди виконує тільки
            одну операцію. Зліва ми бачимо чергу запитів, очікуючих свого
            виконання. При попаданні у потік синхроного запиту, він починає
            опрацьовуватися і по завершенню дає старт наступному запиту. У
            випадках, коли запит викликає асинхроні операції, він делегується
            бібліотеці{' '}
            <a target="_blank" href="https://github.com/libuv/libuv">
              libuv
            </a>
            , яка опрацьовує його в окремому потоці, а по завершенню, викликає
            коллбек у ту ж саму чергу запитів.
          </p>
          <img src={eventloopImg} alt="eventloop" />
          <Bubble size="small">
            Я намагався пояснити як можна простіше, але не впевнений що цього
            достатьньо, тому ось більш детальна стаття -{' '}
            <a
              href="https://medium.com/devschacht/javascript-eventloop-explained-f2dcf84e36ee"
              target="_blank"
            >
              "Пояснення роботи EventLoop у JavaScript"
            </a>
          </Bubble>
        </>
      </DetailsCard>
      <p>
        Знижуємо висоту і повертаємось до нашого коду. Для виконуваних ним
        операцій він виглядає занадто громіздким, тому що оперує занадто{' '}
        <a
          href="https://uk.wikipedia.org/wiki/%D0%9D%D0%B8%D0%B7%D1%8C%D0%BA%D0%BE%D1%80%D1%96%D0%B2%D0%BD%D0%B5%D0%B2%D0%B0_%D0%BC%D0%BE%D0%B2%D0%B0_%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D1%83%D0%B2%D0%B0%D0%BD%D0%BD%D1%8F"
          target="_blank"
        >
          {' '}
          низькорівневими{' '}
        </a>
        операціями. Про те, як перейти на більш{' '}
        <a
          href="https://uk.wikipedia.org/wiki/%D0%9C%D0%BE%D0%B2%D0%B0_%D0%BF%D1%80%D0%BE%D0%B3%D1%80%D0%B0%D0%BC%D1%83%D0%B2%D0%B0%D0%BD%D0%BD%D1%8F_%D0%B2%D0%B8%D1%81%D0%BE%D0%BA%D0%BE%D0%B3%D0%BE_%D1%80%D1%96%D0%B2%D0%BD%D1%8F"
          target="_blank"
        >
          високий рівень
        </a>{' '}
        абстракцій за допомогою Express.js ми поговоримо у наступному блоці.
      </p>
      <Bubble size="small">
        <a href="/assets/zip/nodejs-2.zip" download>
          Zip файл з кодом цього блоку
        </a>
      </Bubble>
      <br />
      <Level
        id="basic-express-js"
        number="5"
        name="Основи Express.js"
        difficulty="Як рівень в SuperMario 🍄 ― щоб пройти потрібно декілька раз програти."
        objectives="Встановити Express.js і запустити з його допомогою HTTP-сервер."
      />
      <VideoWrapper duration="3 хв 25 сек">
        <iframe
          src="https://www.youtube.com/embed/8ZTQy-ezIwI?start=1095&end=1300"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </VideoWrapper>
      <p>
        <b>Express.js</b> - це пакет, що надає безліч можливостей, що спрощують
        життя при розробці на <b>Node.js</b>. З його допомогою підвищується
        рівень абстракції і нам не потрібно займатися налаштуванням мережевого
        з'єднання, парсити заголовки, методи та тіло запиту, і ще багато чого
        іншого. Для початку давайте встановимо{' '}
        <a href="https://www.npmjs.com/package/express" target="_blank">
          його
        </a>{' '}
        в проект за допомогою <b>npm</b>.
      </p>
      <Code language={CodeLanguage.SHELL}>{'npm i express'}</Code>
      <p>
        Створимо новий файл і напишемо в ньому код для базового HTTP-сервера:
      </p>
      <Code language={CodeLanguage.JS}>{`/* express.js */

// import of express
const express = require('express');
// express-app initialization
const app = express();

// listener for GET-requests to "/" route
app.get('/', function (req, res) {
  res.send('Hello World');
});

// listener for PUT-requests to "/test" route
app.put('/test', function (req, res) {
  res.send('Hello World PUT');
});

// run the server
app.listen(3000);`}</Code>
      <DetailsCard>
        <p>
          <strong>Запустимо і перевіримо його роботу</strong>
        </p>
        <>
          <Code language={CodeLanguage.SHELL}>{'node express.js'}</Code>
          <br />
          <img src={express_getImg} alt="express_get" />
          <br />
          <img src={express_postImg} alt="express_post" />
        </>
      </DetailsCard>
      <p>
        Все працює! Якщо спробувати відправляти запити неописані у коді
        (наприклад <b>GET</b>: <i>/users</i>), то ми будем отримувати у
        відповідь 404-сторінку. Для того, щоб написали щось подібне на нодах,
        нам би було необхідно приблизно 200 рядків коду. Вражає? Рухаємось далі.
      </p>
      <p>
        <b>Express.js</b> розширює звичні об'єкти{' '}
        <a
          href="https://nodejs.org/docs/latest-v18.x/api/http.html#class-httpclientrequest"
          target="_blank"
        >
          request
        </a>{' '}
        та{' '}
        <a
          href="https://nodejs.org/docs/latest-v18.x/api/http.html#class-httpserverresponse"
          target="_blank"
        >
          response
        </a>{' '}
        з ноди, додаючи велику кількість корисних штук прямо з коробки.
        Наприклад, він парсить <i>query-параметри</i> в об'єкт і може брати
        частини URL як параметри. У <i>response</i> з'являються зручні методи
        для відповіді:
      </p>
      <Code
        language={CodeLanguage.JS}
      >{`app.get('/:param', function (req, res) {
  console.log(req.query); // query-params object
  console.log(req.params.value); // value of param, located in the URL at the specified position '/:param'
  res.status(200).json({ message: 'Hello World' }); // method "status()", sets status code for response, and "json()" configures Content-Type header for JSON format
});`}</Code>
      <p>
        5 рядків, а скільки користі! Цим і підкорив Express.js світову славу. На
        даний момент для express нараховується величезна кількість npm-пакетів,
        покликаних розв'язувати різноманітні кейси. Давайте розглянемо один з
        таких - парсинг тіла запиту. Для цього додамо пакет (офіційно визнаний
        Best Practice){' '}
        <a href="https://www.npmjs.com/package/body-parser" target="_blank">
          body-parser
        </a>
        .
      </p>
      <DetailsCard>
        <p>
          <strong>
            Встановимо і впровадимо <b>body-parser</b>
          </strong>
        </p>
        <>
          <Code language={CodeLanguage.SHELL}>{'npm i body-parser'}</Code>
          <Code language={CodeLanguage.JS}>{`/* express.js */

// import of express
const express = require('express');
// express-app initialization
const app = express();

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));

// parse application/json
app.use(express.json());

// listener for GET-requests to "/" route
app.get('/', function (req, res) {
  console.log(req.query);
  res.send('Hello World');
});

// listener for PUT-requests to "/test" route
app.put('/test', function (req, res) {
  console.log(req.body);
  res.send('Hello World PUT');
});

// run the server
app.listen(3000);`}</Code>
          <Code language={CodeLanguage.SHELL}>{'node express.js'}</Code>
          <p>Відправляємо POST-запит, з тілом:</p>
          <img src={express_bodyImg} alt="express_body" />
          <p>Дивимось логи:</p>
          <img src={express_body_logImg} alt="express_body_log" />
        </>
      </DetailsCard>
      <p>
        Це достатня основа в <b>Express.js</b> для новачка, далі ми можемо
        подивитися на те як масштабується весь цей код в реальному житті.
      </p>
      <Bubble size="small">
        <a href="/assets/zip/nodejs-3.zip" download>
          Zip файл з кодом цього блоку
        </a>
      </Bubble>
      <br />
      <Level
        id="first-project"
        number="6"
        name="Проект"
        difficulty="Як наблюдати за малюючим художником ― поки дивишся прикольно."
        objectives="Зрозуміти структуру типового проекту на Node.js/Express.js"
      />
      <VideoWrapper duration="6 хв 40 сек">
        <iframe
          src="https://www.youtube.com/embed/8ZTQy-ezIwI?start=1301&end=1698"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </VideoWrapper>
      <p>
        Самий сік 🍎. Тут ми поговоримо про структуру проекту, що, де, куди й
        чому. У своїй практиці, для швидкого старту проекту, я зазвичай
        використовую{' '}
        <a
          href="https://www.npmjs.com/package/express-generator"
          target="_blank"
        >
          express-generator
        </a>{' '}
        , який створений командою Express і створює шаблонний стартер на{' '}
        <b>Express.js</b>. Він встановлюється на машину глобально, щоб бути
        доступним у будь-якому місці і проекті. Для цього до команди інсталяції
        потрібно додати флаг
        <code>-g</code>:
      </p>
      <Code language={CodeLanguage.SHELL}>{'npm i express-generator -g'}</Code>
      <DetailsCard>
        <>
          <strong>
            Після успішної інсталяції можна перевірити його працездатність
            класичним методом - дізнатися версію або викликати довідку 🙃
          </strong>
        </>
        <>
          <p>Версія:</p>
          <img
            src={express_generator_versionImg}
            alt="express_generator_version"
          />
          <p>Довідка:</p>
          <img src={express_generator_helpImg} alt="express_generator_help" />
        </>
      </DetailsCard>
      <DetailsCard>
        <>
          <strong>
            Ну і тепер згенеруємо проект без підтримки шаблонів і з файлом
            <i>.gitignore</i>
          </strong>
        </>
        <>
          <img src={express_generatorImg} alt="express_generator" />
        </>
      </DetailsCard>
      <DetailsCard>
        <>
          <strong>Подивимось що вийшло?</strong>
        </>
        <>
          <img
            src={express_generator_starterImg}
            alt="express_generator_starter"
          />
        </>
      </DetailsCard>
      <p>
        Зверніть увагу на поле <code>scripts</code>, у <i>package.json</i>, в
        ньому містяться npm-скрипти для роботи з додатком. Для того щоб
        запустити сервер нам необхідно буде використовувати команду{' '}
        <code>npm start</code>.
      </p>
      <Bubble size="small">
        Стаття{' '}
        <a
          href="https://blog.nakulrajput.com/task-automation-with-npm-run/"
          target="_blank"
        >
          "Автоматизація задач за допомогою npm run"
        </a>{' '}
      </Bubble>
      <DetailsCard>
        <>
          <strong>
            Для найпростішого API-серверу нам не потрібна папка <i>/public</i>{' '}
            та ініціализація рендеру шаблонів, тому ми їх просто видаляємо.
          </strong>
        </>
        <ol className="regular">
          <li>
            видаляємо папку <i>/public</i> з усім вмістом
          </li>
          <li>
            <p>
              вносимо зміни у <i>/routes/index.js</i>
            </p>
            <Code language={CodeLanguage.JS}>{`/* /routes/index.js */

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.send('Express');
});

module.exports = router;`}</Code>
          </li>
          <li>
            <p>
              вносимо зміни в <i>app.js</i>
            </p>
            <Code language={CodeLanguage.JS}>{`/* app.js */

var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);
app.use('/users', usersRouter);

module.exports = app;`}</Code>
          </li>
        </ol>
      </DetailsCard>
      <p>
        Зараз у нашому проекті реалізований тільки один шар <b>routes</b>, який
        повинен відповідати <b>ТІЛЬКИ</b> за роботу з HTTP-запитами.
      </p>
      <Bubble size="small">
        Чому так радикально?{' '}
        <i>
          ... повинен відповідати <b>ТІЛЬКИ</b> за роботу ...
        </i>
        . Грамотне розділення додатку за шарами - це запорука коду, який буде
        легко підтримувати за рахунок зручності роботи та зрозумілої структури.
        Якщо шар працює тільки з HTTP-запитами, то у ньому не повинно бути
        ніякої бізнес-логіки або обробки даних і навпаки.
      </Bubble>
      <p>
        Давайте зробимо наш сервер розумним і подаруємо йому{' '}
        <span className="tooltip" data-tooltip="🕵️ 007 🔫">
          <u>логіку, бізнес-логіку</u>
        </span>
        . У світі Express-додатків за них повинен відповідати шар, що
        називається <b>services</b>, і, оскільки, він не генерується
        автоматично, ми створимо його самі.
      </p>
      <DetailsCard>
        <>
          <strong>Створення і тестування шару services</strong>
        </>
        <ol>
          <li>
            Створюємо папку <i>/services</i>
          </li>

          <li>
            Створюємо файл <i>/services/user.service.js</i>{' '}
          </li>

          <li>
            <p>Додаємо функцію у файл та експортуємо її:</p>
            <Code language={CodeLanguage.JS}>{`/* services/user.service.js */

const getName = (user) => (user ? user.name : null);

module.exports = { getName };`}</Code>
          </li>

          <li>
            <p>
              Імпортуємо функцію з сервіса до роутера, використовуємо її для
              отримання імені.
            </p>
            <Code language={CodeLanguage.JS}>{`/* routes/users.js */

var express = require('express');
const { getName } = require('../services/user.service');

var router = express.Router();

router.get('/', function (req, res, next) {
  res.send('Welcome');
});

/* GET users listing. */
router.post('/', function (req, res, next) {
  const result = getName(req.body);

  if (result) {
    res.send(\`Your name is \${result}\`);
  } else {
    res.status(400).send("User wasn't sent");
  }
});

module.exports = router;`}</Code>
          </li>
          <li>
            Запускаємм сервер <code>npm start</code>{' '}
          </li>
          <li>
            <p>
              Відправляємо POST-запит на <i>/users</i> і дивимось на відповідь,
              що містить передане им'я
            </p>

            <img src={service_testImg} alt="service_test" />
          </li>
        </ol>
      </DetailsCard>
      <p>
        Сервер вміє щось робити, а що як ми хочему зберігати дані? Для цього
        існує шар <b>repositories</b>, і ми його зараз реалізуємо.
      </p>
      <DetailsCard>
        <>
          <strong>Створення і тестування шару repositories</strong>
        </>
        <ol className="regular">
          <li>
            {' '}
            Створюємо папку <i>/repositories</i>
          </li>

          <li>
            {' '}
            Створюємо файл <i>/repositories/user.repository.js</i>{' '}
          </li>

          <li>
            Додаємо функцію у файл та експортуємо її:
            <Code
              language={CodeLanguage.JS}
            >{`/* repositories/user.repository.js */

const saveData = (data) => {
  if (data) {
    // code for saving data to the DB
    console.log(\`\${data} is saved\`);
    return true;
  } else {
    return false;
  }
};

module.exports = { saveData };`}</Code>
            <Bubble size="small">
              Ми не розглядаємо Бази Даних у цій лекції, тому наш код є лише
              імітацією роботи з нею, насправді в цьому шарі повинна відбуватися
              вся робота з даними: їх отримання зі сховища, запис та оновлення.
            </Bubble>
          </li>

          <li>
            Імпортуємо функцію із репозиторія у сервіс та додаємо функцію{' '}
            <code>saveName()</code>:
            <Code language={CodeLanguage.JS}>{`/* services/user.service.js */
const { saveData } = require('../repositories/user.repository');

const getName = (user) => (user ? user.name : null);

const saveName = (user) => {
  if (user) {
    const isSaved = saveData(user);
    return isSaved;
  } else {
    return null;
  }
};

module.exports = { getName, saveName };`}</Code>
          </li>
          <li>
            Імпортуємо функцію з сервіса в роутер та використовуємо її для
            роботи з тілом запиту:
            <Code language={CodeLanguage.JS}>{`/* routes/users.js */
var express = require('express');
const { saveName } = require('../services/user.service');

var router = express.Router();

router.get('/', function (req, res, next) {
  res.send('Hello!');
});

router.post('/', function (req, res, next) {
  const result = saveName(req.body);

  if (result) {
    res.send('Data is saved');
  } else {
    res.status(400).send("User wasn't saved");
  }
});

module.exports = router;`}</Code>
          </li>
          <li>
            Запускаємо сервер <code>npm start</code>
          </li>
          <li>
            Надсилаємо POST-запит на <i>/users</i> і дивимось на відповідь{' '}
            <i>"Name is saved ― true"</i>, тому що функція з репозиторія
            повернула таке значення
            <img src={repository_testImg} alt="repository_test" />
          </li>
        </ol>
      </DetailsCard>
      <p>
        І останній шар - це <b>middlewares</b>, приклади якого ми вже бачили в
        цьому проекті. Давайте розберемося як він влаштований і що він робить.
      </p>
      <DetailsCard>
        <>
          <strong>Створення і тестування шару middlewares</strong>
        </>
        <ol className="regular">
          <li>
            Створюємо папку <i>/middlewares</i>
          </li>

          <li>
            Створюємо файл <i>/middlewares/auth.middleware.js</i>
          </li>

          <li>
            <p>Додаємо функцію у файл та експортуємо її:</p>
            <Code
              language={CodeLanguage.JS}
            >{`/* middlewares/auth.middleware.js */

const isAuthorized = (req, res, next) => {
  if (req.headers.authorization === 'admin') {
    next();
  } else {
    res.status(401).send();
  }
};

module.exports = { isAuthorized };`}</Code>
            <Bubble size="small">
              <b>middlewares</b> — виконують операції з даними, що проходять
              крізь них та відправляються їх далі, або переривають потік.
              Функція middleware приймає три аргументи: (req, res, next). З
              першими двому ми вже знайомі - це об'єкти запиту та відповіді, а
              третій - це функція коллбек, яка говорить, що усі поточні операції
              закінчені і можна переходити до наступного кроку.
            </Bubble>
          </li>

          <li>
            <p>
              Імпортуємо мідлвер до роутеру і використовуємо його для роботи з
              тілом запиту:
            </p>
            <Code language={CodeLanguage.JS}>{`/* routes/users.js */

var express = require('express');
const { getName } = require('../services/user.service');
const { isAuthorized } = require('../middlewares/auth.middleware');

var router = express.Router();

router.get('/', isAuthorized, function (req, res, next) {
  res.send('Welcome');
});

/* GET users listing. */
router.post('/', function (req, res, next) {
  const result = getName(req.body);

  if (result) {
    res.send(\`Your name is \${result}\`);
  } else {
    res.status(400).send("User wasn't sent");
  }
});

module.exports = router;`}</Code>

            <Bubble size="small">
              Щоб ініціалізувати <b>middleware</b> можна використовувати{' '}
              <code>app.use</code> синтаксис, або ж у випадку з роутінгом просто
              передати його другим аргументом.
            </Bubble>
          </li>
          <li>
            <p>
              Запускаємо сервер <code>npm start</code>
            </p>
          </li>
          <li>
            Відправляємо POST-запит на <i>/users</i> з заголовком{' '}
            <code>Authorization: user</code> і дивимось на відповідь 401
            <img src={middleware_test1Img} alt="middleware_test1" />
          </li>
          <li>
            Відправляємо POST-запит на <i>/users</i> с заголовком{' '}
            <code>Authorization: admin</code> і отримуємо відповідь, тому що ми
            пройшли перевірку
            <img src={middleware_test2Img} alt="middleware_test2" />
          </li>
        </ol>
      </DetailsCard>
      <p>
        І це все, що стосується основ у структурі Node.js-застосунку. Тепер ти
        тру фулстек 😎
      </p>
      <Bubble size="small">
        <a href="/assets/zip/nodejs-1.zip" download>
          Zip файл з кодом цього блоку
        </a>
      </Bubble>
      <br />
      <Level
        id="finish"
        number="7"
        name="Висновок"
        difficulty="Як прохолодна вода у літній день ― довгоочікуване полегшення."
        objectives="Почитати, відпочити, почекати півгодини й почати лекцію спочатку"
      />
      <VideoWrapper duration="30 сек">
        <iframe
          src="https://www.youtube.com/embed/8ZTQy-ezIwI?start=1698&end=1726"
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </VideoWrapper>
      <p>
        Все, вітаю! Лекція повністю проскролена, більше нічого не потрібно
        читати. Швиденько переходь на вкладки, які ти повідкривав під час лекції
        (сподіваюсь не Facebook), і ознайомлюйся з додатковими матеріалами.
        Потім - дай собі відпочити. Півгодинки... так-так, дедлайни й таке інше,
        але це буде трохи більш ефективно, якщо ти даси перепочинок своїй
        голові, для того, щоб розкласти все по поличкам, а потім повертайся
        назад і приступай до домашнього завдання.
      </p>
      <Level
        id="special"
        number="8"
        name="Бонус"
        difficulty="Як на кухні ― все виходить, якщо дотримуватись інструкцій"
        objectives="Задеплоїти Node.js додаток на Heroku"
      />
      <p>
        Мені тут розповіли, що ви все вмієте деплоїти клієнтські додатки, так
        чому б не навчитися публіковати сервери на Node.js 😉?
      </p>
      <VideoWrapper duration="1 хв 50 сек">
        <iframe
          src="https://www.youtube.com/embed/8ZTQy-ezIwI?start=1743&end=1847"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </VideoWrapper>
      <ThatsAllFolks source={audio}>
        <b>The End!</b>
      </ThatsAllFolks>
      <Bubble>
        Залишай питання та відгуки в особистому кабінеті{' '}
        <a href="https://academy.binary-studio.com/">
          <strong>Binary Studio Academy</strong>
        </a>
        . Хай щастить з домашкою і не забувай про дедлайни 😉
      </Bubble>
    </Layout>
  );
};

const Head: HeadFC = () => <SEO pageContext={seoPayload.ua} />;

export { Page, Head };

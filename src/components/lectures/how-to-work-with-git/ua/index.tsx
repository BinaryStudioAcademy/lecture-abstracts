import * as React from 'react';
import { HeadFC } from 'gatsby';
import { Layout } from '~/layout/layout';
import {
  Code,
  IntroBlueBubble,
  Language,
  Level,
  TimelineOfContents,
  VideoWrapper,
  SEO,
} from '~/components/common/common';
import { introPayload, seoPayload, slugPayload } from '../data/data';

const Page: React.FC = () => {
  return (
    <Layout>
      <h1>Як працювати з Git</h1>
      <Language currentLanguage="ua" languages={slugPayload} />

      <IntroBlueBubble {...introPayload.ua} />
      <br />
      <h2>План лекції</h2>

      <TimelineOfContents
        timeline={[
          {
            linkTo: '#setting-up-the-repository',
            title: 'Налаштування репозиторію',
          },
          {
            linkTo: '#practicing-git',
            title: '<span>Основні <code>git</code> команди</span>',
          },
          {
            linkTo: '#git-flow',
            title: 'Git flow',
          },
          {
            linkTo: '#undo-changes',
            title: 'Відмінити зміни',
          },
        ]}
      />
      <VideoWrapper duration="38m 2s">
        <iframe
          src="https://www.youtube.com/embed/HJ7NW6zatXo"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </VideoWrapper>

      <Level
        id="setting-up-the-repository"
        number="1"
        name="Налаштування репозиторію"
        difficulty="Beginner"
        objectives="How to create and clone the repo"
      />

      <ol className="counted">
        <li>
          Перед тим як склонувати репозиторій вам потрібно буде налаштувати
          токен - PAT (personal access token) або SSH ключі. Це може стати в
          нагоді -&nbsp;
          <a href="https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token">
            <strong>How to set up PAT</strong>
          </a>
          ,
          <a href="https://docs.github.com/en/authentication/connecting-to-github-with-ssh">
            <strong>How to set up SSH keys</strong>
          </a>
          .
        </li>
        <li>
          Щоб склонувати репозиторій скористайся <code>git clone</code> командою
          + URL на репозиторій. <p>За умови https це виглядатиме так:</p>
          <Code>
            {'git clone https://github.com/<my-username>/homepage.git'}
          </Code>
          За умови SSH:
          <Code>{'git clone git@github.com:<my-username>/homepage.git'}</Code>
        </li>
        <li>
          Використовуй <code>git remote show origin</code> щоб переглянути
          посилання на віддалений репозиторій.
        </li>
        <li>
          <code>git status</code> команда відобразить стан вашого репозиторію та
          staging area. Використовуй дану команду, щоб перевірити, які файли
          додано в staging area та буде включено в коміт.
        </li>
      </ol>

      <Level
        id="practicing-git"
        number="2"
        name={
          <span>
            Основні <code>git</code> команди
          </span>
        }
        difficulty="Beginner"
        objectives="How to create commits and branches"
      />
      <ol className="counted">
        <li>
          Щоб додати файли до staging area використовуй <code>git add</code>{' '}
          команду + назва файлу. Можеш використовувати <code>git add .</code>{' '}
          команду, щоб додати <strong>усі</strong> змінені та нові файли.
        </li>
        <li>
          Щоб створити коміт використовуй <code>git commit</code> команду. А щоб
          додати коміт з описом використай{' '}
          <Code>git commit -m "Your message here"</Code>
        </li>
        <li>
          Використовуй <code>git branch</code> команду, щоб переглянути локальні
          гілки та
          <code>git checkout branch-name</code> щоб перемкнутися на гілку. Щоб
          створити нову гілку та одразу перемкнутися на неї можеш скористатися{' '}
          <code>git checkout -b branch-name</code> командою.
        </li>
        <li>
          <code>git log</code> показує історію комітів на гілці.
        </li>
        <li>
          Щоб оновити віддалену гілку використовуй <code>git push</code>{' '}
          команду. Якщо твоєї локальної гілки не існує на віддаленому
          репозиторій тобі потрібно буде ввести{' '}
          <code>git push --set-upstream branch-name</code> або скорочено{' '}
          <code>git push -u branch-name</code>, що означає те ж. Або ж ти можеш
          явно вказати, в яку remote гілку ти хочеш запушити свої зміни - ось
          так <code>git push origin branch-name</code>.
        </li>
        <li>
          Git stash зручний, якщо ви ще не готові закомітити свої зміни.{' '}
          <code>git stash</code> 'застешить' зміни, <code>git stash list</code>{' '}
          покаже усі доступні стегі, а <code>git stash pop</code> застосує
          останній стеш - поверне зміни назад.
        </li>
        <li>
          Щоб переглянути зміни колег тобі знадобиться <code>git fetch</code>{' '}
          команда. <code>git fetch</code> завантажує коміти, файли, нові гілки з
          віддаленого репозиторію до локального. Після цього ви можете захотіти
          змерджити зміни віддаленої гілки в локальну (для цього є команда{' '}
          <code>git merge branch-name</code>). Або ж ви можете скористатися
          командою <code>git pull</code>, щоб завантажити зміни з remote
          репозиторію і змерджити в локальну гілку за один раз.
        </li>
        <li>
          У випадку якщо ви забули додати файли до останнього коміту або зробили
          помилку в описі ви можете скористатися командою{' '}
          <code>git commit --amend</code>.
        </li>
      </ol>

      <Level
        id="git-flow"
        number="3"
        name="Git flow"
        difficulty="Intermediate"
        objectives="How to create pull requests"
      />

      <p>Існує рекомендаваний сценарій при роботі з репозиторієм:</p>
      <ol className="counted">
        <li>
          Create branches - створювати окрему гілку на кожну таску/feature
        </li>
        <li>Add commits - робити невеликі коміти з зрозумілими описами</li>
        <li>
          Open a Pull request - створювати pull requests для обговорення,
          перегляду та затвердження ваших змін
        </li>
        <li>Merge to the main branch - змерджити в головну гілку</li>
      </ol>

      <Level
        id="undo-changes"
        number="4"
        name="Відмінити зміни"
        difficulty="Hard"
        objectives="How to revert or reset commits"
      />

      <p>
        Є дві команди, щоб відмінити зміни: <code>git revert</code> та{' '}
        <code>git reset</code>.
      </p>

      <ol className="counted">
        <li>
          <code>git revert HEAD</code> створює новий коміт поверх зі зворотніми
          змінами до останнього коміту.
        </li>

        <li>
          <code>{'git reset <commit>'}</code> очищує історію комітів впритул до
          заданого.
        </li>
      </ol>
    </Layout>
  );
};

const Head: HeadFC = () => <SEO pageContext={seoPayload.ua} />;

export { Page, Head };

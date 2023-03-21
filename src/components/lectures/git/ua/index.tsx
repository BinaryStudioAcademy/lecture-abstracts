import * as React from 'react';
import { HeadFC } from 'gatsby';
import { Layout } from '~/layout/layout';
import { SEO } from '~/partials/partials';
import {
  Accordion,
  Bubble,
  Code,
  DetailsCard,
  Panels,
  RadarChart,
  IntroBlueBubble,
  Language,
  Level,
  TimelineOfContents,
} from '~/components/common/common';
import resume_template from '~/assets/images/resume-template.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuestionCircle } from '@fortawesome/pro-solid-svg-icons';
import { faChevronRight } from '@fortawesome/pro-regular-svg-icons';
import {
  introPayload,
  panelsPayload,
  seoPayload,
  slugPayload,
} from '../data/data';
import { CodeLanguage } from '~/enums/code-language/code-language';
import * as styles from '../assets/styles/git.module.scss';

const Page: React.FC = () => {
  return (
    <Layout>
      <h1>Git Homework</h1>
      <Language currentLanguage="ua" languages={slugPayload} />

      <IntroBlueBubble {...introPayload.ua} />

      <TimelineOfContents
        headerTitle="Створи та захости власне резюме використовуючи GitHub"
        timeline={[
          {
            linkTo: '#setting-up-the-repository',
            title: 'Setting up the repository',
          },
          {
            linkTo: '#practicing-git',
            title: '<span>Practicing <code>git</code></span>',
          },
          {
            linkTo: '#project-management-and-planning',
            title: 'Project management and planning',
          },
          {
            linkTo: '#putting-the-website-together',
            title: 'Putting the website together',
          },
          {
            linkTo: '#add-resume-template',
            title: 'Add resume template',
          },
        ]}
      />

      <Level
        id="setting-up-the-repository"
        number="1"
        name="Setting up the repository"
        difficulty="I Can Win."
        objectives="Get to the &#x1F681; Internet! Learn the GitHub platform while you're at it."
      />

      <ol className="counted">
        <li>
          <p>
            Переконайтеся, що у вас встановлено{' '}
            <a href="https://git-scm.com/downloads">
              <strong>Git</strong>
            </a>{' '}
            - він вам знадобиться 😉.
          </p>
          <p>
            Ми будемо використовувати <strong>GitHub</strong> сьогодні. Для
            початку, переглянь{' '}
            <a href="https://guides.github.com/activities/hello-world/">
              <strong>Hello World</strong>
            </a>{' '}
            гайди, щоб отримати огляд термінології та основних понять{' '}
            <sup>
              <strong>
                <a
                  href="https://git-scm.com/docs/gitglossary"
                  title="gitglossary"
                >
                  [1]
                </a>
              </strong>
            </sup>
          </p>
        </li>
        <li>
          <p>
            {' '}
            Відкрий{' '}
            <a href="https://github.com/">
              <strong>GitHub</strong>
            </a>{' '}
            та авторизуйся. Створи новий репозиторій із назвою{' '}
            <strong>&quot;homepage&quot;</strong> (e.g.{' '}
            <strong>your-username/homepage</strong>), постав description
            &quot;My very own personal website. Basically this is just a
            résumé.&quot;, ініціалізуй <strong>README</strong>, проігноруй{' '}
            <strong>.gitignore</strong>, але обери{' '}
            <strong>&quot;MIT License&quot;</strong>
          </p>
        </li>
        <li>
          <p>Додай топіки:</p>
          <ul>
            <li>personal</li>
            <li>website</li>
            <li>homepage</li>
            <li>resume</li>
            <li>gh-pages</li>
            <li>html</li>
            <li>css</li>
            <li>binary-studio-academy</li>
          </ul>

          <Bubble size="small">
            Hmmm, adding proper topics helps to SEO your repository... Good job!
          </Bubble>
        </li>
        <li>
          <p>
            Налаштуй{' '}
            <a href="https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token">
              <strong>PAT</strong>
            </a>{' '}
            (personal access token) або{' '}
            <a href="https://docs.github.com/en/authentication/connecting-to-github-with-ssh">
              <strong>SSH</strong>
            </a>{' '}
            ключі.
          </p>

          <Accordion>
            <>
              <FontAwesomeIcon icon={faQuestionCircle} />
              <span className="title">
                <strong>https or ssh</strong>
              </span>
              <span className="icon">
                <FontAwesomeIcon icon={faChevronRight} fixedWidth />
              </span>
            </>
            <>
              <div className={styles.paddedContainer}>
                Не хвилюйтеся, обидва протоколи безпечні у використанні. Основна
                відмінність полягає в тому, що https вимагає аутентифікації на
                основі пароля щоразу при push змін{' '}
                <em>
                  (проте ви також можете кешувати свої облікові дані git 🤔)
                </em>
                , але ssh ви налаштовуєте лише один раз і жодної повторної
                автентифікації не потрібно.
              </div>
            </>
          </Accordion>
        </li>
        <li>
          Відкрий свій улюблений термінал, зміни робочу директорію(
          <code>cd</code>) на ту, куди хочеш склонувати репозиторій{' '}
          <em>(перевір вміст папки за допомогою</em> <code>ls</code>{' '}
          <em>або</em> <code>dir</code>
          <em>)</em>
        </li>
        <li>
          <p>
            Склонуй репозиторій - використай <code>git clone</code> команду для
            цього. Це матиме вигляд:
            <code>
              git clone https://github.com/&lt;my-username&gt;/homepage.git
            </code>{' '}
            для https
            <code>
              git clone git@github.com:&lt;my-username&gt;/homepage.git
            </code>{' '}
            для ssh
          </p>
          <p>
            Після цього перейдіть до папки вашого репозиторію -{' '}
            <code>cd homepage</code>. Тепер ви також можете відкрити свій проект
            в редакторі коду, наприклад VS Code.
          </p>
        </li>
      </ol>
      <Bubble size="small">
        Ура! Перша частина виконана ✅. Ви щойно створили та клонували свій
        репозиторій . Давай потренуємося далі.
      </Bubble>
      <Level
        id="practicing-git"
        number="2"
        name={
          <span>
            Practicing <code>git</code>
          </span>
        }
        difficulty="Baby, don't hurt me."
        objectives={
          <span>
            Practicing <code>git</code> commands, gain some confidence.
          </span>
        }
      />
      <ol className="counted">
        <li>
          <p>
            Перевір поточний статус за допомогою <code>git status</code>{' '}
            команди.
          </p>
        </li>
        <li>
          <p>
            Створи нову гілку та перейди на неї{' '}
            <code>git checkout -b patch/README.md</code>.
          </p>
        </li>
        <li>
          <p>
            Відредагуй README.md — додай &quot;<strong>🧙Hocus-pocus!</strong>
            &quot; — застейдж зміни за допомогою <code>git add README.md</code>
          </p>
        </li>
        <li>
          <p>
            Створи коміт за допомогою{' '}
            <code>git commit -m &quot;Abracadabra&quot;</code> команди
          </p>
        </li>
        <li>
          <p>
            Завантаж (запуш) локальні зміни на ремоут - використай{' '}
            <code>git push</code>. Якщо це не вдається, то, швидше за все, тому,
            що такої гілки немає на віддаленому сервері. Дотримуйся рекомендацій
            Git і використай <code>--set-upstream origin patch/README.md</code>{' '}
            або ж визнач remote гілку явно{' '}
            <code>git push origin patch/README.md</code>.
          </p>
        </li>
        <li>
          <p>
            Переглянь історію комітів за допомогою <code>git log</code>.
          </p>
        </li>
        <li>
          <p>
            Видали останній рядок з README.md і переглянь різницю. Застейдж
            README.md файл - <code>git add README.md</code> та створи коміт{' '}
            <code>git commit -m &quot;Undobracadabra&quot;</code>.
          </p>
        </li>
        <li>
          <p>
            Відміни останній коміт, використавши <code>git revert HEAD</code>.
          </p>
        </li>
        <li>
          <p>
            Переглянь історію змін знову - <code>git log</code>.
          </p>
        </li>
        <li>
          <p>
            Завантаж локальні зміни - <code>git push</code>.
          </p>
        </li>
        <li>
          <p>
            Повернись назад на <code>main</code> гілку -{' '}
            <code>git checkout main</code>.
          </p>
        </li>
      </ol>
      <Bubble size="small">
        Хороша робота! Тепер ти маєш почувати себе більш впевнено з командами
        Git. Ходімо далі!
      </Bubble>
      <Level
        id="project-management-and-planning"
        number="3"
        name="Project management and planning"
        difficulty="Bring It On!"
        objectives="Master issues and project management."
      />
      <ol className="counted">
        <li>
          <p>
            Створи два проекти — <strong>&quot;Homepage&quot;</strong> та{' '}
            <strong>&quot;Resume&quot;</strong> ― використовуючи{' '}
            <strong>Board</strong> як темплейт для обох. Додай хоча б 3 завдання
            до проекту <strong>Homepage</strong> і конвертуй їх в issues (кожне
            повинне бути залінковане до репозиторію з домашкою). Використай опис
            (description) для <strong>Homepage</strong> проекту:
          </p>
          <blockquote>
            <p>
              <strong>**Make homepage great!**</strong> Make it responsive,
              accessible, informative, credible, readable, descriptive,
              compatible, consistent, uncluttered, simple, secure, up-to-date.
              Alternatively, just give up.
            </p>
          </blockquote>
          <p>
            А це опис для <strong>Resume</strong> проекту:
          </p>
          <blockquote>
            <p>
              A typical résumé contains a &quot;summary&quot; of relevant job
              experience and education, as its French origin implies. The résumé
              is usually one of the first items, along with a cover letter and
              sometimes an application for employment, which a potential
              employer sees regarding the job seeker and is typically used to
              screen applicants. *
              <strong>
                *The goal of this project is to create an online version of the
                résumé using HTML, CSS, and the minimum amount of JavaScript.**
              </strong>
            </p>
          </blockquote>
          <Bubble size="small">
            Добре, друже, відтепер ти повинен{' '}
            <strong>
              створювати завдання в GitHub Projects для кожного кроку цієї місії
            </strong>
            ! Таким чином ти пам’ятатимеш, що збираєшся зробити, і твій клієнт
            знатиме про роботу, яку ти виконуєш.
          </Bubble>
        </li>
        <li>
          <p>
            Додай наступні завдання до проекту{' '}
            <strong>&quot;Resume&quot;</strong> проекту та перетвори їх на
            issues — використовуй GitHub <strong>Labels</strong>,{' '}
            <strong>Assignees</strong>, і <strong>Milestones</strong>{' '}
            <em>
              (
              <a href="https://guides.github.com/features/issues/">
                <strong>Mastering Issues</strong>
              </a>{' '}
              пояснює як і чому)
            </em>
            : Додай задані <strong>описи</strong> до завдань. (Інструкції,
            виділені жирним - важливі, не ігноруй їх 😉)
          </p>
          <Bubble size="small">
            Вміння добре складати завдання, чітко описувати проблеми і звітувати
            про їх вирішення допоможе знайти спільну мову з проджект-менеджером
            замовника. Окрім того, в світі open source більшість корисних розмов
            та інформація щодо вирішення проблем знаходиться якраз в Issues,
            тому розуміти як це працює — запорука успіху. Тепер це ваш Google
            (ну, може ще трошки StackOverflow).
          </Bubble>

          <ol className="counted">
            <li>
              <strong>Скласти інтро</strong>
              Скласти інтро (вступ), де в 2-4 реченнях описати, чим ти
              займаєшся, що подобається робити, що хочеться робити краще, що
              важливо робити, чому ти тут.
            </li>
            <li>
              <strong>Скласти блок контактної інформації</strong>
              Посилання на соцмережі (Facebook чи Instagram, тощо), номер
              телефону чи адреса електронної скриньки, тощо. Може не всі лінки в
              світі, а тільки ті, що дійсно доречні.
            </li>
            <li>
              <strong>Скласти таймлайн</strong>
              Скласти список всіх (важливих) життєвих подій, визначних дат,
              досягнень, періодів, що дали приємний і неприємний досвід, тощо. В
              цьому конкретному випадку довгих списків не буває, натомість
              бувають погано згорнуті, тому пакуємо сюди все підряд, а про
              &quot;лишні&quot; події можна буде промовчати пізніше. Список
              повинен бути систематизованим і посортованим в такий спосіб, щоб
              читач швидко зрозумів &quot;паттерн&quot; і міг легко
              орієнтуватись в просторі і часі цього резюме.
            </li>
            <li>
              <strong>Скласти додаткові інформаційні блоки</strong>
              Можна зробити резюме менш формальним, додавши додаткові блоки, які
              містять корисну інформацію, але подають її в
              &quot;розважальній&quot; формі. Наприклад, що подобається і не
              подобається, сильні і слабкі сторони, перелік навиків чи хобі,
              інфографіка або ж інтерактивні модулі, тощо. Варто написати
              контент такого блоку раніше, ніж починати верстку, бо його розміри
              впливатимуть на розміщення елементів на сторінці.
            </li>
          </ol>
        </li>
        <li>
          <p>
            Переміщуй завдання в розділ <strong>&quot;In progress&quot;</strong>
            , поки працюєш над ними. Залишай <strong>коментарі</strong> під
            завданнями, призначай відповідні labels та milestones (хоча б по 1му
            для кожного обов&#39;язкового завдання), <strong>закривай</strong>{' '}
            issues та tasks після завершення.
          </p>
        </li>
      </ol>
      <Level
        id="putting-the-website-together"
        number="4"
        name="Збираємо website докупи"
        difficulty="Hardcore."
        objectives="Make the résumé page look better, learn some HTML, CSS."
      />
      <ol className="counted">
        <li>
          <p>
            Створи і перейди на <code>develop</code> гілку -{' '}
            <code>git checkout -b develop</code>.
          </p>
        </li>
        <li>
          <p>
            Створи <strong>index.html</strong> і встав в нього наведений нижче
            фрагмент:
          </p>
          <Code language={CodeLanguage.HTML}>{`<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>Résumé</title>
  </head>
  <body>
    ― Hello World! &#x1F609;
  </body>
</html>`}</Code>
          <Bubble size="small">
            That's right, <code>&amp;#x1F609;</code> is a{' '}
            <a href="http://unicode.org/emoji/charts-12.0/full-emoji-list.html#1f609">
              <strong>Unicode code for an emoji</strong>
            </a>
            .
          </Bubble>
          <Bubble size="small">
            Psst, please add this task to <strong>Homepage</strong> project. Oh,
            also convert it to an issue while you&#39;re at it
          </Bubble>
        </li>
        <li>
          <p>
            Перевір <code>git status</code>.
          </p>
        </li>
        <li>
          <p>
            Застейдж та закоміть зміни - <code>git add index.html</code> та{' '}
            <code>git commit -m &quot;Added index.html template&quot;</code>
          </p>
          <Bubble size="small">
            Між іншим, будь ласка, надавайте своїм комітам змістовні
            повідомлення, i.e. 🤗&quot;Updated Résumé Contacts block&quot;.
          </Bubble>
        </li>
        <li>
          <p>
            Запуш зміни за допомогою <code>git push</code> команди.
          </p>
        </li>
        <li>
          <p>
            Перейди за запропонованим посиланням і створіть pull request в{' '}
            <code>main</code> гілку. Постав title{' '}
            <em>&quot;First release to production&quot;</em>, визнач метаданні{' '}
            <em>(assignees, labels, projects)</em>. Потім{' '}
            <strong>змердж</strong> pull request.
          </p>
          <Bubble size="small">
            This looks like a task too - add it to <strong>Homepage</strong>{' '}
            project.
          </Bubble>
        </li>
        <li>
          <p>
            Перейди до <strong>Settings</strong> репозиторію і налаштуй{' '}
            <strong>GitHub Pages</strong> (з <code>main</code> гілки), онови
            опис репозиторію з коректним <strong>посиланням</strong>. Перейди за
            посиланням, щоб перевірити, чи все в порядку – ви повинні побачити
            вміст index.html.
          </p>
          <Bubble size="small">
            Create a task for this in <strong>Homepage</strong> project.
          </Bubble>
        </li>
      </ol>
      <p>Тепер ваш репозиторій налаштовано!</p>

      <Level
        id="add-resume-template"
        number="5"
        name="Додай темплейт резюме"
        difficulty="Are you still here?"
        objectives="Let's make a resume finally"
      />
      <h5>Head</h5>

      <ol className="counted">
        <li>
          <p>
            Створи нову гілку <code>feature/head</code> (на основі{' '}
            <code>develop</code> гілки).
          </p>
          <Bubble size="small">
            Розділяючи свою роботу на багато гілок, можна швидко і вправно
            виправляти баги на сервері, мати окремо стабільну версію (
            <code>release</code>), яка готова до релізу (шляхом злиття в{' '}
            <code>main</code>), а також ще версію, в якій ведеться основна
            розробка (<code>develop</code>). А в одній єдиній гілці так не
            вийде. Мерджіть свої гілки pull request-ами, бо так треба. І потім,
            так можна частково зняти з себе відповідальність, адже той, хто
            approve-нув поганий код, допустив не меншу помилку, аніж той, хто
            його написав 😁
          </Bubble>
        </li>
        <li>
          <p>
            Створи <em>styles.css</em> файл в кореневій папці проекту і встав
            туди наступні стилі:
          </p>
          <DetailsCard>
            <>General styles</>
            <Code language={CodeLanguage.CSS}>{`* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: Arial, Helvetica, sans-serif;
    line-height: 1.5;

    --primary-text-color: #181820;
    --secondary-text-color: #5c5c62;
    --durability-text-color: #6a737d9c;
    --icon-color: #6a737d;
    --border-color: #ff9a0045;
    --text-decoration-color: #ff9a00;
}

.container {
    margin: 0 auto;
    padding: 0 30px;
    max-width: 900px;
}

.fh {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.fv {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.resume {
    margin: 50px auto;
    border: 1px solid #f5f5f5;
    box-shadow: 1px 1px 7px 7px #f5f5f5;
    padding: 30px 0;
    max-width: 900px;
}

.resume__block {
    border-bottom: 3px solid var(--border-color);
    padding-bottom: 30px;
    margin-bottom: 15px;
}

@media screen and (max-width: 576px) {

    .main-info,
    .contact_info_container {
        flex-direction: column;
    }

    .contact_info_container {
        align-items: center;
    }

    .contact-info__block:not(:last-child) {
        margin-bottom: 20px;
    }

    .experiences {
        margin-right: 0;
    }
}`}</Code>
          </DetailsCard>
          <DetailsCard>
            <>Contact info styles</>
            <Code language={CodeLanguage.CSS}>{`.contact-info__header,
.contact-info__sub-header {
    text-align: center;
}

.contact-info__header {
    color: var(--primary-text-color);
    margin-bottom: 15px;
    text-decoration-color: var(--text-decoration-color);
    text-decoration-line: underline;
}

.contact-info__sub-header {
    color: var(--secondary-text-color);
    margin-bottom: 30px;
}

.contact-info__block {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.contact-info__block--center {
    justify-content: center;
}

.contact-info__item {
    color: var(--secondary-text-color);
    text-decoration: none;
    display: flex;
    justify-content: start;
}

.contact-info__item:not(:last-child) {
    margin-bottom: 20px;
}

.contact-info__item-icon-wrapper {
    margin-right: 10px;
    width: 20px;
    display: flex;
    justify-content: center;
}

.contact-info__item-icon path {
    fill: var(--icon-color);
}

.contact-info__item-icon {
    height: 1.1428rem;
    vertical-align: text-bottom;
}

.contact-info__avatar {
    border-radius: 50%;
    width: 100px;
    height: 100px;
    object-fit: cover;
    border: 3px solid;
    border-color: var(--text-decoration-color);
}`}</Code>
          </DetailsCard>
          <DetailsCard>
            <>Intro and skills styles</>
            <Code language={CodeLanguage.CSS}>{`.intro {
    display: flex;
    justify-content: start;
}

.intro__icon-wrapper {
    margin-right: 30px;
    width: 30px;
    display: flex;
    justify-content: center;
}

.intro__icon {
    height: 1.1428rem;
    vertical-align: text-bottom;
}

.intro__icon path {
    fill: var(--text-decoration-color);
}

.intro_text {
    color: var(--secondary-text-color);
    text-align: justify;
}

.skills__header {
    color: var(--secondary-text-color);
    text-align: center;
    margin-bottom: 15px;
}

.skills__text {
    color: var(--secondary-text-color);
    text-align: justify;
}`}</Code>
          </DetailsCard>
          <DetailsCard>
            <>Experience and additonal info styles</>
            <Code language={CodeLanguage.CSS}>{`.experiences {
    flex: 1 1 60%;
    margin-right: 50px;
}

.experiences__header {
    color: var(--secondary-text-color);
    text-align: left;
    margin-bottom: 20px;
}

.experiences__company-header-durability {
    color: var(--durability-text-color);
    text-align: left;
    margin-bottom: 10px;
    font-size: 15px;
}

.experiences__company-header-name {
    color: var(--primary-text-color);
    text-decoration-color: var(--text-decoration-color);
    text-decoration-line: underline;
    text-align: left;
    margin-bottom: 20px;
}

.experiences__company-project {
    margin-left: 15px;
    margin-bottom: 25px;
}

.experiences__company-project-role {
    color: var(--durability-text-color);
    text-align: left;
    margin-bottom: 10px;
    font-size: 15px;
}

.experiences__company-project-name {
    color: var(--primary-text-color);
    text-align: left;
    margin-bottom: 10px;
}

.experiences__company-project-responsibilities {
    color: var(--secondary-text-color);
    padding-left: 20px;
}

.additional-info {
    flex: 1 1 40%;
}

.additional-info__education {
    margin-bottom: 20px;
}

.additional-info__education-header {
    color: var(--secondary-text-color);
    text-align: left;
    margin-bottom: 20px;
}

.additional-info__education-university-durability {
    color: var(--durability-text-color);
    text-align: left;
    margin-bottom: 10px;
    font-size: 15px;
}

.additional-info__education-university-speciality {
    color: var(--primary-text-color);
    text-align: left;
    margin-bottom: 10px;
}

.additional-info__education-university-name {
    color: var(--secondary-text-color);
}

.additional-info__languages {
    margin-bottom: 20px;
}

.additional-info__languages-header {
    color: var(--secondary-text-color);
    text-align: left;
    margin-bottom: 20px;
}

.additional-info__languages-item {
    color: var(--secondary-text-color);
}`}</Code>
          </DetailsCard>
        </li>
        <li>
          <p>
            Приєднай стилі додавши наступний рядок всередину{' '}
            <code>&lt;head&gt;&lt;/head&gt;</code> секції.
          </p>
          <Code language={CodeLanguage.HTML}>
            {'<link rel="stylesheet" href="styles.css">'}
          </Code>
          <p>
            Також додай даний мета тег в <code>&lt;head&gt;&lt;/head&gt;</code>{' '}
            секцію для responsive design.
          </p>

          <Code language={CodeLanguage.HTML}>
            {
              '<meta name="viewport" content="width=device-width, initial-scale=1" />'
            }
          </Code>
        </li>
        <li>
          <p>
            Як закінчиш ― <strong>закоміть</strong> свої зміни,{' '}
            <strong>запуш</strong> гілку, створи новий{' '}
            <strong>pull request</strong> і <strong>змердж</strong> в{' '}
            <code>develop</code>
          </p>
        </li>
      </ol>
      <Bubble size="small">
        Якщо гілку не пушнути нагору, а змерджити локально через{' '}
        <code>git merge</code>, то віддалений сервер не буде нічого знати про
        існування гілки, відтак і не покаже її у Insights → Network
      </Bubble>

      <h5>Body</h5>
      <ol className="counted">
        <li>
          <p>
            Перейди на <code>develop</code> гілку і виконай pull змін{' '}
            <code>git pull</code>.
          </p>
        </li>
        <li>
          <p>
            Створи нову гілку <code>feature/body</code> (на основі develop),
            запуш на ремоут репозиторій -{' '}
            <code>git push -u origin feature/body</code>, і використовуй її для
            редагування основного контенту:
          </p>
          <ol className="counted">
            <li>
              <p>Відкрий прев&#39;ю index.html в браузері</p>
              <Bubble size="small">
                Одним зі способів є встановити http-server{' '}
                <code>npm install --global http-server</code> і потім заранити
                <code> http-server -c-1</code> в робочій папці.
              </Bubble>
            </li>
            <li>
              <p>
                Створи <code>patch/content/primary</code> гілку (на основі{' '}
                <code>feature/body</code>) гілки.
              </p>
            </li>
            <li>
              <p>
                Додай основний контент{' '}
                <em>(e.g. avatar, name, job, contacts, intro, etc.)</em> here.
                Коміть невеликі зміни, додавай змістовні повідомлення.
              </p>
              <DetailsCard>
                <>Primary content template</>
                <>
                  <Code language={CodeLanguage.HTML}>{`<main>
  <div class="resume">
    <div class="container">
      <div class="resume__block">
        <h1 class="contact-info__header">Bulka</h1>
        <h3 class="contact-info__sub-header">Senior Hooman Manager</h3>

        <div class="contact_info_container fh">
          <div class="contact-info__block"></div>

          <div class="contact-info__block contact-info__block--center">
            <img class="contact-info__avatar" src="assets/avatar.png" alt="Avatar">
          </div>

          <div class="contact-info__block"></div>
        </div>
      </div>
    </div>
  </div>
</main>`}</Code>
                  <p>
                    Create <code>assets</code> folder and put here any
                    Bulka&#39;s image from his{' '}
                    <a href="https://www.instagram.com/binarystudiocat/">
                      Instagram
                    </a>
                    . Use it as a <code>src=</code> for avatar.
                  </p>
                </>
              </DetailsCard>
              <DetailsCard>
                <>
                  Contact info items example (should be place inside the{' '}
                  <code>contact-info__block</code>)
                </>
                <>
                  <Code
                    language={CodeLanguage.HTML}
                  >{`<a href="" rel="author" class="contact-info__item">
  <div class="contact-info__item-icon-wrapper">
    <svg class="contact-info__item-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
      <path
        d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z">
      </path>
    </svg>
  </div>
  <span>Lviv, Ukraine</span>
</a>
<a href="https://ua.linkedin.com/company/binary-studio_241166" rel="author" class="contact-info__item">
  <div class="contact-info__item-icon-wrapper">
    <svg class="contact-info__item-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
      <path
        d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z">
      </path>
    </svg>
  </div>
  <span>binary-studio</span>
</a>

`}</Code>
                  <p>
                    You may take SVG icons from{' '}
                    <a href="https://fontawesome.com/">fontawesome</a>.
                  </p>
                </>
              </DetailsCard>
              <DetailsCard>
                <>Intro block (should be put below the previous container)</>
                <Code language={CodeLanguage.HTML}>{`<div class="container">
  <div class="resume__block">
    <div class="intro">
      <div class="intro__icon-wrapper">
        <svg class="intro__icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path
            d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z">
          </path>
        </svg>
      </div>
      <p class="intro_text">Meow.
        I am a Binary Studio cat. Still got 7 lives. Work in IT, Full Stack Evil,
        all I do is sleep and try to help out hoomans with their projects whenever
        they need me.
      </p>
    </div>
  </div>
</div>`}</Code>
              </DetailsCard>
            </li>
            <li>
              <p>
                Змердж гілку <code>patch/content/primary</code> в{' '}
                <code>feature/body</code> використовуючи пул-реквест
              </p>
            </li>
            <li>
              <p>
                Повернись до <code>feature/body</code> гілки, завантаж зміни за
                допомогою <code>git pull</code>.
              </p>
            </li>
            <li>
              <p>
                Створи <code>patch/content/secondary</code> гілку (на основі{' '}
                <code>feature/body</code>) гілки.
              </p>
            </li>
            <li>
              <p>
                Додай додатковий контент{' '}
                <em>(e.g. languages, skills, character, etc.)</em>. Коміть
                невеликі зміни, додавай змістовні повідомлення.
              </p>

              <DetailsCard>
                <>Skills block</>
                <Code language={CodeLanguage.HTML}>{`<div class="container">
  <div class="resume__block">
    <div class="skills">
      <h3 class="skills__header">Skills</h3>
      <p class="skills__text">Sleep, eat, more sleep, meow, mrrr, purr. </p>
    </div>
  </div>
</div>`}</Code>
              </DetailsCard>
              <DetailsCard>
                <>Experience block template</>
                <Code language={CodeLanguage.HTML}>{`<div class="container">
  <div class="resume__block">
    <div class="main-info fh">

      <div class="experiences"></div>

      <div class="additional-info fv"></div>
    </div>
  </div>
</div>`}</Code>
              </DetailsCard>
              <DetailsCard>
                <>Experiences</>
                <Code language={CodeLanguage.HTML}>{`<div class="experiences">
  <h3 class="experiences__header">Experience</h3>
  <div class="experiences__company">
    <div class="experiences__company-header">
      <span class="experiences__company-header-durability">For whole my life</span>
      <h3 class="experiences__company-header-name">BinaryStudio</h3>
    </div>

    <div class="experiences__company-project">
      <span class="experiences__company-project-role">Binary Studio Cat</span>
      <h3 class="experiences__company-project-name">Hooman project</h3>
      <ul class="experiences__company-project-responsibilities">
        <li>Supported hoomans</li>
        <li>Slept all the time</li>
        <li>Lied on the keyboard</li>
        <li>Watched my hoomans working</li>
      </ul>
    </div>
  </div>
</div>`}</Code>
              </DetailsCard>
              <DetailsCard>
                <>Additional info</>
                <Code
                  language={CodeLanguage.HTML}
                >{`<div class="additional-info fv">
  <div class="additional-info__education">
    <h3 class="additional-info__education-header">Education</h3>
    <div class="additional-info__education-university">
      <span class="additional-info__education-university-durability">2021</span>
      <h3 class="additional-info__education-university-speciality">Cat track</h3>
      <p class="additional-info__education-university-name">Binary Studio Academy</p>
    </div>
  </div>

  <div class="additional-info__languages">
    <h3 class="additional-info__languages-header">Languages</h3>
    <p class="additional-info__languages-item">
      Meow dialect
    </p>
    <p class="additional-info__languages-item">
      Ukrainian (understand)
    </p>
    <p class="additional-info__languages-item">
      English (don't understand)
    </p>
  </div>
</div>`}</Code>
              </DetailsCard>
              <p>Як попердній перегляд ви має бачити щось схоже на:</p>
              <DetailsCard>
                <>Попередній перегляд</>
                <img src={resume_template} alt="eventloop" />
              </DetailsCard>
            </li>

            <li>
              <p>
                Змердж гілку <code>patch/content/secondary</code> в{' '}
                <code>feature/body</code> використовуючи пул-реквест
              </p>
            </li>
            <li>
              <p>
                Повернись до <code>feature/body</code> гілки, завантаж зміни за
                допомогою <code>git pull</code>.
              </p>
            </li>
            <li>
              <p>
                Продовжуй далі та заповни резюме <strong>ВЛАСНОЮ</strong>{' '}
                інформацією - Сміливо додавай нові блоки, змінюй структуру,
                стилі. Пасхалки також вітаються 😉
              </p>
              <Bubble size="small">
                Ми дуже любимо Булку, але ми б також хотіли познайомитися з
                тобою ближче. Тож, будь ласка, створи власне резюме – і отримай
                додаткові бали 😉
              </Bubble>
            </li>
            <li>
              <p>
                Змердж <code>feature/body</code> в <code>develop</code>{' '}
                використовуючи pull request
              </p>
            </li>
          </ol>
        </li>
        <li>
          <p>
            Перевір свій HTML та CSS на валідність. Можеш скористатися{' '}
            <a href="https://validator.w3.org/">HTML validator</a> або{' '}
            <a href="https://stylelint.io/demo">CSS validator</a> для цього.
          </p>
        </li>
        <li>
          <p>
            Відкрий pull request і{' '}
            <strong>
              змредж <code>develop</code> в <code>main</code> гілку
            </strong>
            .
          </p>
        </li>
      </ol>
      <Bubble size="small">
        Будь ласка, не забудьте об’єднати останні зміни в main гілку – ми
        перевірятимемо лише її.
      </Bubble>

      <p>
        💥 <strong>Boom, done! That&#39;s it! You are awesome!</strong>
        Надішліть нам посилання на ваш репозиторій GitHub і подивіться нижче, як
        буде оцінено завдання. Зверніть увагу, що{' '}
        <strong>у вас є лише 3 спроби запустити автоматичні тести</strong> -
        тому використовуйте це з розумом 😉
      </p>

      <Accordion>
        <>
          <FontAwesomeIcon icon={faQuestionCircle} />
          <span className="title">
            <strong>Як буде оцінюватися проект</strong>
          </span>
          <span className="icon">
            <FontAwesomeIcon icon={faChevronRight} fixedWidth />
          </span>
        </>
        <>
          <div className={styles.paddedContainer}>
            <p>
              Завдання комплексне, тому й оцінюватися буде в шести напрямках, а
              середнє арифметичне тих шести чисел і буде кінцевою оцінкою:
            </p>
            <Panels {...panelsPayload.ua} />

            <RadarChart
              labels={[
                'Repository management',
                'Project management',
                'git + GitFlow',
                'HTML / CSS / JS',
                'UI / UX',
                'Awesomeness',
              ]}
              datasets={[
                {
                  label: 'You',
                  data: [6, 5, 5, 5, 2, 0],
                  dragData: true,
                  borderColor: 'rgba(0, 173, 238, 1)',
                  backgroundColor: 'rgba(0, 173, 238, 0.125)',
                  pointBorderColor: 'white',
                  pointBackgroundColor: (context): string => {
                    if (!context.dataIndex) {
                      return '';
                    }
                    return context.dataIndex % 2 === 0
                      ? 'rgb(255, 199, 18)'
                      : 'rgb(236, 24, 72)';
                  },
                  pointHoverBorderColor: 'white',
                  pointRadius: 5,
                  pointHoverRadius: 8,
                  pointBorderWidth: 3,
                  pointHoverBorderWidth: 3,
                  pointHitRadius: 30,
                },
                {
                  label: 'Joe Average',
                  data: [6, 5, 5, 5, 2, 0],
                  dragData: false,
                  borderColor: 'rgba(0, 0, 0, 0.1)',
                  backgroundColor: 'rgba(0, 0, 0, 0.05)',
                  pointRadius: 0,
                  pointHitRadius: 0,
                  pointHoverRadius: 0,
                },
              ]}
            />
            <p>
              Ми дуже цінуємо вашу оригінальність, ініціативу та гумор, тому по
              останньому критерію будь-яку цікаву ідею буде високо оцінено!
            </p>
          </div>
        </>
      </Accordion>

      <Bubble size="small">
        Не хвилюйся 😌, якщо твій репозиторій не отримав 10 — самотужки за
        короткий проміжок часу репозиторії на 10 не складаються 😝. Хтось вкладе
        весь свій час і сили в сам проект, але не встигне оформити репозиторій,
        а хтось зробить навпаки. В першу чергу варто робити те, що подобається,
        і отримати максимум задоволення від процесу. Якщо при цьому всьому ще й
        зайти в незнайому чи некомфортну для cебе область і досягти успіхів там
        — то це взагалі супер!
      </Bubble>
    </Layout>
  );
};

const Head: HeadFC = () => <SEO pageContext={seoPayload.ua} />;

export { Page, Head };

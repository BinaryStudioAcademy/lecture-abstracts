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
import * as styles from '../assets/styles/git.module.scss';
import { CodeLanguage } from '~/enums/code-language/code-language';

const Page: React.FC = () => {
  return (
    <Layout>
      <h1>Git Homework</h1>
      <Language currentLanguage="en" languages={slugPayload} />

      <IntroBlueBubble {...introPayload.en} />

      <TimelineOfContents
        headerTitle="Create and host your own resume using GitHub"
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
            Make sure you have{' '}
            <a href="https://git-scm.com/downloads">
              <strong>Git</strong>
            </a>{' '}
            installed - you&#39;ll need it 😉.
          </p>
          <p>
            {' '}
            We&#39;ll use <strong>GitHub</strong> to host it. Firstly, skim
            through{' '}
            <a href="https://guides.github.com/activities/hello-world/">
              <strong>Hello World</strong>
            </a>
            guides to get an overview of terminology and core concepts{' '}
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
            Open up{' '}
            <a href="https://github.com/">
              <strong>GitHub</strong>
            </a>{' '}
            and sign in. Create a new repository named{' '}
            <strong>&quot;homepage&quot;</strong> (e.g.{' '}
            <strong>your-username/homepage</strong>), set description to
            &quot;My very own personal website. Basically this is just a
            résumé.&quot;, initialize with <strong>README</strong>, ignore{' '}
            <strong>.gitignore</strong>, but choose{' '}
            <strong>&quot;MIT License&quot;</strong>
          </p>
        </li>
        <li>
          <p>Add topics:</p>
          <ul>
            <li>personal</li>
            <li>website</li>
            <li>homepage</li>
            <li>resume</li>
            <li>gh-pages</li>
            <li>html</li>
            <li>css</li>
            <li>
              <p>binary-studio-academy</p>
              <Bubble size="small">
                Hmmm, adding proper topics helps to SEO your repository... Good
                job!
              </Bubble>
            </li>
          </ul>
        </li>
        <li>
          <p>
            Setup either{' '}
            <a href="https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token">
              <strong>PAT</strong>
            </a>{' '}
            (personal access token) or{' '}
            <a href="https://docs.github.com/en/authentication/connecting-to-github-with-ssh">
              <strong>SSH</strong>
            </a>{' '}
            keypair depending on which protocol you want to use: https or ssh.
          </p>
          <Accordion>
            <>
              <FontAwesomeIcon icon={faQuestionCircle} />
              <span className="title">
                <strong>&nbsp;https or ssh</strong>
              </span>
              <span className="icon">
                <FontAwesomeIcon icon={faChevronRight} fixedWidth />
              </span>
            </>
            <>
              <div className={styles.paddedContainer}>
                No worries, both protocols are secure to use. The main
                difference is that https requires password-based authentication
                every time you push your changes{' '}
                <em>(however, you may also cache your git credentials 🤔)</em>,
                but ssh you configure only once and no repetitive authentication
                is required.
              </div>
            </>
          </Accordion>
        </li>

        <li>
          <p>
            Open your favorite terminal, change working directory (
            <code>cd</code>) to where you&#39;d like to keep the repository{' '}
            <em>(check directory content with</em> <code>ls</code> <em>or</em>{' '}
            <code>dir</code>
            <em>)</em>
          </p>
        </li>
        <li>
          <p>
            Clone the repo - use <code>git clone</code> command for that.
            It&#39;ll look like:
            <code>
              git clone https://github.com/&lt;my-username&gt;/homepage.git
            </code>{' '}
            if you choose https
            <code>
              git clone git@github.com:&lt;my-username&gt;/homepage.git
            </code>{' '}
            if you choose ssh
          </p>
        </li>
      </ol>
      <p>
        After that go to your repository folder - <code>cd homepage</code>. Now
        you may also open your repository in a code editor like VS Code.
      </p>
      <Bubble size="small">
        Hurray! The first part is done ✅. You've just created and cloned your
        repository. Let's go to have some practice.
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
            Check current status with <code>git status</code>
          </p>
        </li>
        <li>
          <p>
            Create a new branch and checkout to it with{' '}
            <code>git checkout -b patch/README.md</code>.
          </p>
        </li>
        <li>
          <p>
            Edit README.md — add &quot;<strong>🧙Hocus-pocus!</strong>&quot; —
            and stage it with <code>git add README.md</code>
          </p>
        </li>
        <li>
          <p>
            Commit staged file with{' '}
            <code>git commit -m &quot;Abracadabra&quot;</code>
          </p>
        </li>
        <li>
          <p>
            Upload your local changes with <code>git push</code>. If it fails,
            it&#39;s most likely because there&#39;s no such branch on the
            remote server. Follow Git suggestion and use{' '}
            <code>--set-upstream origin patch/README.md</code> or set the remote
            branch explicitly <code>git push origin patch/README.md</code>.
          </p>
        </li>
        <li>
          <p>
            Look at the current history with <code>git log</code>.
          </p>
        </li>
        <li>
          <p>
            Remove last line from the README.md and see the difference! Stage
            README.md file with <code>git add README.md</code> and commit with{' '}
            <code>git commit -m &quot;Undobracadabra&quot;</code>.
          </p>
        </li>
        <li>
          <p>
            Revert the latest commit with <code>git revert HEAD</code>.
          </p>
        </li>
        <li>
          <p>
            Look at the current history with <code>git log</code> again.
          </p>
        </li>
        <li>
          <p>
            Upload your local changes with <code>git push</code>.
          </p>
        </li>
        <li>
          <p>
            Switch to the <code>main</code> branch back -{' '}
            <code>git checkout main</code>.
          </p>
        </li>
      </ol>
      <Bubble size="small">
        Good job! Now you should feel more confident with Git commands. Let's go
        further!
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
            Create two projects — <strong>&quot;Homepage&quot;</strong> and{' '}
            <strong>&quot;Resume&quot;</strong> ― using <strong>Board</strong>{' '}
            as a project template for both. Add at least 3 tasks to{' '}
            <strong>Homepage</strong> project and convert them to issues (every
            issue should be linked to the homework&#39;s repository). Here&#39;s
            the description for the <strong>Homepage</strong> project:
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
            And this is the description for the <strong>Resume</strong> project:
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
            Alright, mate, from now on you have to{' '}
            <strong>
              create a task in GitHub Projects for every step of this mission
            </strong>
            ! That way you remember what you are going to do, and your customer
            is aware of the work you are doing.
          </Bubble>
        </li>
        <li>
          <p>
            Add the following tasks to the <strong>&quot;Resume&quot;</strong>{' '}
            project and <strong>convert them to issues</strong> — use
            GitHub&#39;s <strong>Labels</strong>, <strong>Assignees</strong>,
            and <strong>Milestones</strong> features at this point{' '}
            <em>
              (
              <a href="https://guides.github.com/features/issues/">
                <strong>Mastering Issues</strong>
              </a>{' '}
              explains why and how)
            </em>
            : Add given <strong>descriptions</strong> to the tasks. (Bold
            instructions are important - don&#39;t ignore them 😉)
          </p>
          <Bubble size="small">
            Making clear description of a task is a good skill to have.
            It&#39;ll help you to set the requirements better and get along with
            a project manager. Besides, a lot of useful discussions are taking
            place in comments to GitHub issues, so it&#39;s helpful to know how
            to work with them. (But StackOverflow is your friend on this path
            too 😉).
          </Bubble>

          <ol className="counted">
            <li>
              <strong>Create an intro</strong> Add an intro about yourself: who
              are you, what is your strength, why are you here.
            </li>
            <li>
              <strong>Create a contact info block</strong> Add links to social
              networks (LinkedIn, Facebook, Instagram), phone number, email,
              Telegram username, etc.
            </li>
            <li>
              <strong>Create a timeline</strong> Add a list of all your
              activities, achievements, work experience. Add as much info as you
              can remember. In case you don&#39;t have working experience tell
              about your pet-projects or student projects. Don&#39;t be shy :)
            </li>
            <li>
              <strong>Create additional info blocks</strong> You can make your
              resume less official by adding more entertaining info, like your
              hobbies and interest, or what do you like, some interactive
              content or joke, easter egg, etc.
            </li>
          </ol>
        </li>
        <li>
          <p>
            Move tasks to <strong>&quot;In progress&quot;</strong> while
            you&#39;re working on them. Leave comments under issues, assign
            proper labels and milestones (provide at least 1 item of each type
            for every required issue), close issues and tasks when done.
          </p>
        </li>
      </ol>
      <Level
        id="putting-the-website-together"
        number="4"
        name="Putting the website together"
        difficulty="Hardcore."
        objectives="Make the résumé page look better, learn some HTML, CSS."
      />
      <ol className="counted">
        <li>
          <p>
            Create and checkout to <code>develop</code> branch -{' '}
            <code>git checkout -b develop</code>.
          </p>
        </li>
        <li>
          <p>
            Create <strong>index.html</strong> and insert the snippet below in
            it:
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
            That&#39;s right, <code>&amp;#x1F609;</code> is a{' '}
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
            Check <code>git status</code>.
          </p>
        </li>
        <li>
          <p>
            Stage and commit your changes - <code>git add index.html</code> and{' '}
            <code>git commit -m &quot;Added index.html template&quot;</code>
          </p>
          <Bubble size="small">
            BTW, please give your commits meaningful messages, i.e.
            🤗&quot;Updated Résumé Contacts block&quot;.
          </Bubble>
        </li>
        <li>
          <p>
            Push your changes with <code>git push</code> command.
          </p>
        </li>
        <li>
          <p>
            Follow the suggested link and create a pull request into{' '}
            <code>main</code> branch. Set title{' '}
            <em>&quot;First release to production&quot;</em>, set metadata{' '}
            <em>(assignees, labels, projects)</em>. Then <strong>merge</strong>{' '}
            pull request.
          </p>
          <Bubble size="small">
            This looks like a task too - add it to <strong>Homepage</strong>{' '}
            project.
          </Bubble>
        </li>
        <li>
          <p>
            Go to repository <strong>Settings</strong> and set up{' '}
            <strong>GitHub Pages</strong> (from the <code>main</code> branch),
            update repository description with the proper{' '}
            <strong>website</strong> link. Follow the link to check if
            everything is fine - you should see your index.html content.
          </p>
          <Bubble size="small">
            Create a task for this in <strong>Homepage</strong> project.
          </Bubble>
        </li>
      </ol>
      <p>Now your repository is set up!</p>

      <Level
        id="add-resume-template"
        number="5"
        name="Add resume template"
        difficulty="Are you still here?"
        objectives="Let's make a resume finally"
      />

      <h5>Head</h5>

      <ol className="counted">
        <li>
          <p>
            Create a new branch named <code>feature/head</code> (based on{' '}
            <code>develop</code> branch).
          </p>
          <Bubble size="small">
            By dividing your work into many branches, you can quickly and
            efficiently fix bugs on the server, have a separate stable version (
            <code> release </code>) that is ready for release, as well as the
            version with the main development (<code> develop </code>). Merge
            your branches with pull requests, because the one who approved bad
            code, made no less error than the one who wrote it 😁
          </Bubble>
        </li>
        <li>
          <p>
            Create <em>styles.css</em> file in the root directory and insert the
            following styles into it.
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
            Connect styles by adding the next line inside the{' '}
            <code>&lt;head&gt;&lt;/head&gt;</code> section.
          </p>

          <Code language={CodeLanguage.HTML}>
            {'<link rel="stylesheet" href="styles.css">'}
          </Code>
          <p>
            {' '}
            Also add this meta tag inside the{' '}
            <code>&lt;head&gt;&lt;/head&gt;</code> section for responsive
            design.
          </p>

          <Code language={CodeLanguage.HTML}>
            {
              '<meta name="viewport" content="width=device-width, initial-scale=1" />'
            }
          </Code>
        </li>
        <li>
          <p>
            When done ― <strong>commit</strong> your changes,{' '}
            <strong>push</strong> the branch to the remote, create a new{' '}
            <strong>pull request</strong> and <strong>merge</strong> into{' '}
            <code>develop</code>
          </p>
          <Bubble size="small">
            If the branch is not pushed, but merged locally via{' '}
            <code>git merge</code>, the remote server will not know anything
            about the existence of the branch, and therefore will not show it in
            Insights → Network
          </Bubble>
        </li>
      </ol>

      <h5>Body</h5>
      <ol className="counted">
        <li>
          <p>
            <p>
              Switch to <code>develop</code> branch and pull changes using{' '}
              <code>git pull</code>.
            </p>
          </p>
        </li>
        <li>
          <p>
            Create a new branch named <code>feature/body</code> (based on
            develop), push it to origin -{' '}
            <code>git push -u origin feature/body</code>, and use it to edit
            main content:
          </p>

          <ol className="counted">
            <li>
              <p>Preview index.html in a browser</p>
              <Bubble size="small">
                One way to do it is to install http-server{' '}
                <code>npm install --global http-server</code> and then run{' '}
                <code> http-server -c-1</code> in working directory.
              </Bubble>
            </li>
            <li>
              <p>
                Create <code>patch/content/primary</code> (based on{' '}
                <code>feature/body</code>) branch.
              </p>
            </li>
            <li>
              <p>
                Add a primary content{' '}
                <em>(e.g. avatar, name, job, contacts, intro, etc.)</em> here.
                Commit small steps, add meaningful messages.
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
                Merge branch <code>patch/content/primary</code> into{' '}
                <code>feature/body</code> using pull request
              </p>
            </li>
            <li>
              <p>
                Switch back to <code>feature/body</code> branch, pull changes
                using <code>git pull</code>.
              </p>
            </li>
            <li>
              <p>
                Create <code>patch/content/secondary</code> (based on{' '}
                <code>feature/body</code>) branch.
              </p>
            </li>
            <li>
              <p>
                Add a secondary content{' '}
                <em>(e.g. languages, skills, character, etc.)</em>. Commit small
                steps, add meaningful messages.
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
              <p>As a preview ou should see something like this:</p>
              <DetailsCard>
                <>Preview</>
                <img src={resume_template} alt="eventloop" />
              </DetailsCard>
            </li>

            <li>
              Merge branch <code>patch/content/secondary</code> into{' '}
              <code>feature/body</code> using pull request
            </li>
          </ol>
          <ol>
            <li>
              <p>
                Switch back to <code>feature/body</code> branch, pull changes
                using <code>git pull</code>.
              </p>
            </li>
            <li>
              <p>
                Iterate further and fill up the resume with{' '}
                <strong>YOUR OWN</strong> info - feel free to add new blocks,
                change structure, styles. Easter eggs are welcome too 😉
              </p>
              <Bubble size="small">
                We do like Bulka very much, but we'd like to know you better
                too. So, please, create your own resume - and get your
                additional points 😉
              </Bubble>
            </li>
            <li>
              <p>
                Merge <code>feature/body</code> into <code>develop</code> using
                pull request
              </p>
            </li>
          </ol>
        </li>
        <li>
          <p>
            Check if your HTML and CSS are valid. You may use{' '}
            <a href="https://validator.w3.org/">HTML validator</a> and{' '}
            <a href="https://stylelint.io/demo">CSS validator</a> for this.
          </p>
        </li>
        <li>
          <p>
            Open a pull request and{' '}
            <strong>
              merge <code>develop</code> into <code>main</code>
            </strong>
            .
          </p>
        </li>
      </ol>
      <Bubble size="small">
        Please, don't forget to merge your final changes to the main branch -
        we'll check only this one.
      </Bubble>

      <p>
        💥 <strong>Boom, done! That&#39;s it! You are awesome!</strong>
        Send us the link to your GitHub repository and take a look how the task
        will be evaluated. Pay attention, that{' '}
        <strong>you have only 3 attempts to run the automated tests</strong> -
        so use it wisely 😉
      </p>

      <Accordion>
        <>
          <FontAwesomeIcon icon={faQuestionCircle} />
          <span className="title">
            <strong>How the project will be evaluated</strong>
          </span>
          <span className="icon">
            <FontAwesomeIcon icon={faChevronRight} fixedWidth />
          </span>
        </>
        <>
          <div className={styles.paddedContainer}>
            <p>
              The task is complex, so it will be evaluated in six directions,
              and the arithmetic mean of the six numbers will be the final
              score:
            </p>
            <Panels {...panelsPayload.en} />

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
              We really appreciate your originality, initiative and humor, so
              any interesting idea will be highly appreciated according to the
              last criterion!
            </p>
          </div>
        </>
      </Accordion>

      <Bubble size="small">
        Don't worry 😌 if your repository doesn't get 10 - repositories for 10
        aren't compiled on their own in a short period of time 😝. Some will
        invest all their time and effort in the project itself, but will not
        have time to design a repository, and some will do the opposite. First
        of all, you should do what you like and get the most out of the process.
        If you go into an unfamiliar or uncomfortable area and succeed there -
        it's great!
      </Bubble>
    </Layout>
  );
};

const Head: HeadFC = () => <SEO pageContext={seoPayload.en} />;

export { Page, Head };

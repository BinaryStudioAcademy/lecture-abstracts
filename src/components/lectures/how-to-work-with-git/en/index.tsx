import * as React from 'react';
import { HeadFC } from 'gatsby';
import { Layout } from '~/layouts';
import { SEO } from '~/partials';
import {
  Code,
  IntroBlueBubble,
  Language,
  Level,
  TimelineOfContents,
  VideoWrapper,
} from '~/components/common';
import { introPayload, seoPayload, slugPayload } from '../data/data';

const Page: React.FC = () => {
  return (
    <Layout>
      <h1>How to work with Git</h1>
      <Language currentLanguage="en" languages={slugPayload} />

      <IntroBlueBubble {...introPayload.en} />
      <br />
      <h2>Lecture plan</h2>

      <TimelineOfContents
        timeline={[
          {
            linkTo: '#setting-up-the-repository',
            title: 'Setting up the repository',
          },
          {
            linkTo: '#practicing-git',
            title: '<span>Common <code>git</code> commands</span>',
          },
          {
            linkTo: '#git-flow',
            title: 'Git flow',
          },
          {
            linkTo: '#undo-changes',
            title: 'Undo the changes',
          },
        ]}
      />

      <VideoWrapper duration="33m 31s">
        <iframe
          src="https://www.youtube.com/embed/czNvX0xdFZA"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </VideoWrapper>

      <Level
        id="setting-up-the-repository"
        number="1"
        name="Setting up the repository"
        difficulty="Beginner"
        objectives="How to create and clone the repo"
      />

      <ol className="counted">
        <li>
          Before you clone the repository set up either PAT (personal access
          token) or SSH keys. You may find this helpful -
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
          <p>
            To clone the repositoty use <code>git clone</code> command + copied
            repository URL.
          </p>{' '}
          In case you choose https it will look like:
          <Code>
            {'git clone https://github.com/<my-username>/homepage.git'}
          </Code>
          In case of SSH:
          <Code>{'git clone git@github.com:<my-username>/homepage.git'}</Code>
        </li>
        <li>
          Use <code>git remote show origin</code> to see remote repository URL.
        </li>
        <li>
          <code>git status</code> command will display the state of your
          repositoty and staging area. Use it to see which files are added to
          the staging area and are going to be included in commit.
        </li>
      </ol>

      <Level
        id="practicing-git"
        number="2"
        name={
          <span>
            Common <code>git</code> commands
          </span>
        }
        difficulty="Beginner"
        objectives="How to create commits and branches"
      />

      <ol className="counted">
        <li>
          To add changed files to the staging area we use <code>git add</code>{' '}
          command + file name. You may use <code>git add .</code> command to add{' '}
          <strong>all</strong> changed and untracked files.
        </li>
        <li>
          To create a commit use <code>git commit</code> command. To add a
          description message use
          <Code>git commit -m "Your message here"</Code>
        </li>
        <li>
          Use <code>git branch</code> command to see local branches and{' '}
          <code>git checkout branch-name</code> to switch to the branch. To
          create a new branch and switch to it use{' '}
          <code>git checkout -b branch-name</code> command.
        </li>
        <li>
          <code>git log</code> command shows commit history of your branch.
        </li>
        <li>
          To update your remote branch use <code>git push</code> command.
        </li>
        <li>
          If your local branch doesn't exists on the remote you might need to
          run <code>git push --set-upstream branch-name</code>
          or just <code>git push -u branch-name</code>, which means the same.
          Otherwise you may explicitly set a remote branch you want to push your
          changes to, like <code>git push origin branch-name</code>.
        </li>
        <li>
          Git stash is handy when you're not ready to commit yet.{' '}
          <code>git stash</code> command will add your changes to stash,{' '}
          <code>git stash list</code> will show you all available stashes, and{' '}
          <code>git stash pop</code> with apply your changes back.
        </li>
        <li>
          To follow you teammates changes you might need to run{' '}
          <code>git fetch</code> command. <code>git fetch</code> downloads
          commits, files, or new branches from a remote repository into your
          local repo. After that you may merge remote branch changes into your
          local branch (by using <code>git merge branch-name</code> command).
          You may use <code>git pull</code> command to fetch changes froma
          remote branch and merge them at one time.
        </li>
        <li>
          In case you forgot to add some files to your last commit or noticed a
          typo in a message you may use <code>git commit --ammend</code>.
        </li>
      </ol>

      <Level
        id="git-flow"
        number="3"
        name="Git flow"
        difficulty="Intermediate"
        objectives="How to create pull requests"
      />

      <p>
        You might need/want/like to follow the next steps during yout work with
        a repository:
      </p>
      <ol className="counted">
        <li>Create branches - create a separate branch for every feature</li>
        <li>Add commits - make small commits with a meaningful messages</li>
        <li>
          Open a Pull request - open PR to discuss, review and approve your
          changes
        </li>
        <li>Merge to the main branch</li>
      </ol>

      <Level
        id="undo-changes"
        number="4"
        name="Undo the changes"
        difficulty="Hard"
        objectives="How to revert or reset commits"
      />

      <p>
        To undo you changes you may use two commands: <code>git revert</code> or{' '}
        <code>git reset</code>.
      </p>
      <ol className="counted">
        <li>
          <code>git revert HEAD</code> creates a new commit with the inverse of
          the last commit.
        </li>
        <li>
          <code>{'git reset <commit>'}</code> clears the commit history until
          the given commit.
        </li>
      </ol>
    </Layout>
  );
};

const Head: HeadFC = () => <SEO pageContext={seoPayload.en} />;

export { Page, Head };

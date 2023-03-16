import { TimelineProps } from '~/types';

const timelineUa: TimelineProps = {
  timeline: [
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
  ],
};

const timelineEn: TimelineProps = {
  timeline: [
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
  ],
};

const timelinePayload = { en: timelineEn, ua: timelineUa };

export { timelinePayload };

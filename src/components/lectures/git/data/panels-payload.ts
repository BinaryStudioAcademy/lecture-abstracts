import { PanelsPayload, PanelsProps } from '~/common/types/types';

const en: PanelsProps = {
  panels: [
    {
      head: '<h6><strong>Repository management</strong><span class="text-gray"><small>#1</small></span></h6>',
      body: '<p>Repository created, topics added, README.md in place, and GitHub Pages enabled.</p></div>',
    },
    {
      head: '<h6><strong>Project management</strong><span class="text-gray"><small>#2</small></span></h6>',
      body: 'Projects have been launched, milestones have been identified, tasks have been created, problems have been described, and labels have been attached.',
    },
    {
      head: '<h6><strong><code>git</code><span style={{ fontWeight: 300 }}> + </span>GitFlow</strong><span class="text-gray"><small>#3</small></span></h6>',
      body: 'The work is carried out in several branches, each intuitively clear, and pull requests are used to merge them into the main branch. Maybe even commits have normal names :)',
    },
    {
      head: '<h6><span><span style={{ fontWeight: 900 }}>HTML</span><span style={{ fontWeight: 300 }}> / </span><strong>CSS</strong><span style={{ fontWeight: 300 }}> / </span>JS</span><span class="text-gray"><small>#4</small></span></h6>',
      body: 'Level 80 copypaste - valid HTML markup, CSS, and JS (if any) does normal things.',
    },
    {
      head: '<h6><span><strong>UI</strong><span style={{ fontWeight: 300 }}> / </span><span style={{ fontWeight: 900 }}>UX</span></span><span class="text-gray"><small>#5</small></span></h6>',
      body: 'The page is accessible, informative, convenient, readable, clean, pleasant, interesting, fast.',
    },
    {
      head: '<h6><strong><span role="img" aria-label="rainbow">🌈</span>A-a-a-A-A-aweso-o-O-O-oomene-e-E-E-ess!</strong><span class="text-gray"><small>#6</small></span></h6>',
      body: 'Creativity, diligence, attention to detail, humor, originality, "wha-a-a-t ?!".',
    },
  ],
  columns: 3,
  bodySize: 'small',
};
const ua: PanelsProps = {
  panels: [
    {
      head: '<h6><strong>Repository management</strong><span class="text-gray"><small>#1</small></span></h6>',
      body: '<p>Репозиторій створений, топіки додані, README.md на місці, а GitHub Pages увімкнено.</p>',
    },
    {
      head: '<h6><strong>Project management</strong><span class="text-gray"><small>#2</small></span></h6>',
      body: 'Проекти заведені, майлстоуни визначені, таски створюються, проблеми описуються, лейби прикріплюються.',
    },
    {
      head: '<h6><strong><code>git</code><span style={{ fontWeight: 300 }}> + </span>GitFlow</strong><span class="text-gray"><small>#3</small></span></h6>',
      body: 'Робота ведеться в декількох гілках, кожна інтуїтивно зрозуміла, а для їх злиття у основну гілку використовуються pull request-и. Може навіть комміти мають нормальні назви.',
    },
    {
      head: '<h6><span><span style={{ fontWeight: 900 }}>HTML</span><span style={{ fontWeight: 300 }}> / </span><strong>CSS</strong><span style={{ fontWeight: 300 }}> / </span>JS</span><span class="text-gray"><small>#4</small></span></h6>',
      body: 'Майстер копіпасту 80-го рівня — валідна HTML-розмітка, CSS, а JS (якщо є) робить нормальні речі.',
    },
    {
      head: '<h6><span><strong>UI</strong><span style={{ fontWeight: 300 }}> / </span><span style={{ fontWeight: 900 }}>UX</span></span><span class="text-gray"><small>#5</small></span></h6>',
      body: 'Сторінка доступна, інформативна, зручна, читабельна, чиста, приємна, цікава, швидка.',
    },
    {
      head: '<h6><strong><span role="img" aria-label="rainbow">🌈</span>A-a-a-A-A-aweso-o-O-O-oomene-e-E-E-ess!</strong><span class="text-gray"><small>#6</small></span></h6>',
      body: 'Творчість, старанність, увага до деталей, гумор, оригінальність, "што-о-о-о?!".',
    },
  ],
  columns: 3,
  bodySize: 'small',
};

const panelsPayload: PanelsPayload = { en, ua };

export { panelsPayload };

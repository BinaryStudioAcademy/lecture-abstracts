import * as React from 'react';
import { WrapPageElementBrowserArgs } from 'gatsby';
import { MDXProvider } from '@mdx-js/react';
import {
  Avatar,
  Language,
  TimelineOfContents,
  FacebookMessage,
  RadarChart,
  Level,
  Accordion,
  ShrugMessage,
  SlackMessage,
  ThatsAllFolks,
  VideoWrapper,
  Flute,
  IntroBlueBubble,
  DetailsCard,
} from '~/components';

// import '~/assets/stylesheets/index.css';

const components = {
  Avatar,
  Accordion,
  Language,
  Level,
  RadarChart,
  FacebookMessage,
  TimelineOfContents,
  ShrugMessage,
  SlackMessage,
  ThatsAllFolks,
  VideoWrapper,
  Flute,
  IntroBlueBubble,
  DetailsCard,
};

const wrapPageElement = ({
  element,
}: WrapPageElementBrowserArgs): React.ReactNode => (
  <MDXProvider components={components}>{element}</MDXProvider>
);

export { wrapPageElement };

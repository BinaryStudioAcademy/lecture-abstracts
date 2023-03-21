import * as React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { prism as syntaxHighlighterStyles } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { CodeLanguage } from '~/enums/code-language/code-language';
import { Copy } from '~/components/common/common';
import * as styles from './code.module.scss';

type Props = {
  language?: CodeLanguage;
  children: string;
};

const Code: React.FC<Props> = ({ language = CodeLanguage.TEXT, children }) => (
  <div className={styles.wrapper}>
    <Copy text={children} />
    <SyntaxHighlighter language={language} style={syntaxHighlighterStyles}>
      {children}
    </SyntaxHighlighter>
  </div>
);

export { Code };

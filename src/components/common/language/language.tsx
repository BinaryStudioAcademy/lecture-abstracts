import React from 'react';
import { Link } from 'gatsby';
import classNames from 'classnames';

import * as styles from './language.module.scss';

type Props = {
  currentLanguage: string;
  languages: Record<string, string>;
};
const Language: React.FC<Props> = ({ languages, currentLanguage }) => (
  <div className={styles.menu}>
    <div>
      Translated into:
      {Object.keys(languages).map((language) =>
        currentLanguage === language ? (
          <div
            key={language}
            className={classNames(styles.option, {
              [styles.isActive]: currentLanguage === language,
            })}
          >
            {language.toUpperCase()}
          </div>
        ) : (
          <Link
            key={language}
            className={classNames(styles.option, {
              [styles.isActive]: currentLanguage === language,
            })}
            to={`/${languages[language]}`}
          >
            {language.toUpperCase()}
          </Link>
        ),
      )}
    </div>
  </div>
);

export { Language };

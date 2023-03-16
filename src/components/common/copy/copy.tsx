import * as React from 'react';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopy, faCheck } from '@fortawesome/pro-regular-svg-icons';
import copy from 'copy-to-clipboard';

import * as styles from './copy.module.scss';

type Props = {
  text: string;
};

const Copy: React.FC<Props> = ({ text }) => {
  const [copied, setCopied] = useState<boolean>(false);
  const handleCopy = (): void => {
    copy(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className={styles.wrapper}>
      {copied && <span className={styles.tooltip} data-text="Copied" />}
      <button className={styles.button} onClick={handleCopy}>
        {copied ? (
          <FontAwesomeIcon icon={faCheck} className="icon" color={'#4cbb17'} />
        ) : (
          <FontAwesomeIcon icon={faCopy} className="icon" />
        )}
      </button>
    </div>
  );
};

export { Copy };

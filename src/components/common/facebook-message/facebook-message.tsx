import React from 'react';
import classNames from 'classnames';

type Props = {
  children: React.ReactNode;
  small: boolean;
  subtle: boolean;
};

const FacebookMessage: React.FC<Props> = ({ children, small, subtle }) => {
  return (
    <div
      className={classNames('bubble', {
        small: small,
        subtle: subtle,
      })}
    >
      {children}
    </div>
  );
};

export { FacebookMessage };

import React from 'react';
import classnames from 'classnames';

type Props = {
  className?: string;
};

const Body: React.FC<React.PropsWithChildren<Props>> = ({
  children,
  ...props
}) => {
  const { className, ...otherProps } = props;
  const classNames = classnames('accordion-body', className);
  return (
    <div className={classNames} {...otherProps}>
      {children}
    </div>
  );
};

export { Body };

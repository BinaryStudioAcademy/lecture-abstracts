import React from 'react';
import classnames from 'classnames';

type Props = {
  className?: string;
  id?: string;
};

const Header: React.FC<React.PropsWithChildren<Props>> = ({
  children,
  ...props
}) => {
  const randomId = Math.random().toString(36);
  const { className, id = randomId } = props;
  const classNames = classnames('accordion-header', className);

  return (
    <React.Fragment>
      <input type="checkbox" id={id} hidden />
      <label className={classNames} htmlFor={id}>
        {children}
      </label>
    </React.Fragment>
  );
};

export { Header };

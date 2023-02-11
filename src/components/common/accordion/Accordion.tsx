import React from 'react';
import classnames from 'classnames';
import { AccordionProps, BodyProps, HeaderProps } from './types';

const Header: React.FC<HeaderProps> = ({ children, ...props }) => {
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

const Body: React.FC<BodyProps> = ({ children, ...props }) => {
  const { className, ...otherProps } = props;
  const classNames = classnames('accordion-body', className);
  return (
    <div className={classNames} {...otherProps}>
      {children}
    </div>
  );
};

const Accordion: AccordionFC = ({ children, ...props }) => {
  const { className, ...otherProps } = props;
  const classNames = classnames('accordion', className);
  return (
    <div className={classNames} {...otherProps}>
      {children}
    </div>
  );
};

interface AccordionFC extends React.FC<AccordionProps> {
  Body: typeof Body;
  Header: typeof Header;
}

Accordion.Body = Body;
Accordion.Header = Header;

export default Accordion;

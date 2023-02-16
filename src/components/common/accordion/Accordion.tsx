import React from 'react';
import classnames from 'classnames';
import { Body } from './accordion-body/AccordionBody';
import { Header } from './accordion-header/AccordionHeader';

type Props = {
  className?: string;
};
interface AccordionFC extends React.FC<React.PropsWithChildren<Props>> {
  Body: typeof Body;
  Header: typeof Header;
}

const Accordion: AccordionFC = ({ children, ...props }) => {
  const { className, ...otherProps } = props;
  const classNames = classnames('accordion', className);
  return (
    <div className={classNames} {...otherProps}>
      {children}
    </div>
  );
};

Accordion.Body = Body;
Accordion.Header = Header;

export default Accordion;

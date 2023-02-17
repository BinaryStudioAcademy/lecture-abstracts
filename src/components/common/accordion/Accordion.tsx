import React from 'react';
import classnames from 'classnames';

type Props = {
  children: [React.ReactNode, React.ReactNode];
  className?: string;
};

const Accordion: React.FC<Props> = ({ children, className }) => {
  const [heading, content] = children;
  const classNames = classnames('accordion', className);

  return (
    <details className={classNames}>
      <summary className="accordion-header">{heading}</summary>
      <div className="accordion-body">{content}</div>
    </details>
  );
};

export { Accordion };

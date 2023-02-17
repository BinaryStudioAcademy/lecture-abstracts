import React, { ReactNode } from 'react';
import shrugGif from '~/assets/images/shrug.gif';
import './shrugMessage.css';

const ShrugMessage: React.FC<{ children: ReactNode }> = ({ children }) => (
  <div className="hero hero-lg">
    <div className="hero-body text-center">
      <img src={shrugGif} alt="shrug" className="shrug" />
      {children}
    </div>
  </div>
);

export { ShrugMessage };

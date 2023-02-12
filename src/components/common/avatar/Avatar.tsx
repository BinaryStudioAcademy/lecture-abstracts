import React from 'react';
import { nameToImage } from './utils/name-to-image';
import { Author } from '~/types';

type Props = {
  name: Author;
  className?: string;
};

const Avatar: React.FC<Props> = ({ name, className }) => {
  const Avatar = nameToImage[name];
  return (
    <div className="avatar-wrapper">
      <object
        className={`avatar-object ${className}`}
        role="img"
        data={Avatar}
        aria-label={name}
      />
    </div>
  );
};

export default Avatar;

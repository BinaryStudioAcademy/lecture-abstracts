import React from 'react';
import { Avatar } from '~/components/common/common';
import { isDateInThePast } from '~/utils/utils';
import { LectureItem } from '~/types/types';
import { Link } from 'gatsby';

import './lectures-grid.css';

type Props = {
  lectures: LectureItem[];
};

const LecturesGrid: React.FC<Props> = ({ lectures }) => {
  return (
    <div className="lectures-wrapper">
      {lectures.map(
        (
          { author, description, duration, publishedAt, title, slug },
          index,
        ) => {
          const lectureTitle = (
            <h2 className="lecture-title">
              <span>
                <strong>{title}</strong>
              </span>
            </h2>
          );
          const isPublished = isDateInThePast(publishedAt);
          return (
            <div key={slug} className="lecture">
              <div className="lecture-header">
                {isPublished ? (
                  <Link to={slug} title={title} className="lectureLink">
                    {lectureTitle}
                  </Link>
                ) : (
                  lectureTitle
                )}
              </div>
              <div className="lecture-body">
                <span dangerouslySetInnerHTML={{ __html: description }} />
              </div>
              <div className="lecture-footer">
                <div className="lecture-meta">
                  <div className="lecture-author">
                    <Avatar name={author} size="small" />
                    <div className="lecture-author-name">{author}</div>
                    {duration && (
                      <span className="lecture-duration">
                        <small>{duration}</small>
                      </span>
                    )}
                  </div>
                </div>
                {
                  <span className="lecture-number">
                    <small>#{index + 1}</small>
                  </span>
                }
              </div>
            </div>
          );
        },
      )}
    </div>
  );
};

export { LecturesGrid };

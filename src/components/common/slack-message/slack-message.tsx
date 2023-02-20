import React from 'react';
import { TimeUnit } from './constants/time-unit';

import './slack-message.css';

type Emotion = {
  emoji: string;
  count: number;
};

type ReplyAuthor = {
  name: string;
  avatarUrl: string;
};

type SlackMessageProps = {
  senderId: string;
  senderName: string;
  senderAvatarUrl: string;
  reactions: Emotion[];
  replies: ReplyAuthor[];
  senderDate?: number;
};

const SlackMessage: React.FC<React.PropsWithChildren<SlackMessageProps>> = ({
  senderId = '',
  senderName = '',
  senderAvatarUrl = '',
  senderDate = Date.now(),
  children,
  reactions = [],
  replies = [],
  ...rest
}) => {
  const repliesCount = Math.floor(Math.random() * 10) + 7;
  const senderTime = new Date(senderDate - 130 * TimeUnit.MINUTE)
    .toTimeString()
    .slice(0, 5);
  const lastReplyTime = new Date(senderDate - 116 * TimeUnit.MINUTE)
    .toTimeString()
    .slice(0, 5);
  return (
    <div className="message" data-from={senderId} {...rest}>
      <img
        className="message__avatar message__avatar--big"
        src={senderAvatarUrl}
        alt=""
      />
      <div className="message__content">
        <div className="message__meta">
          <span className="message__author">{senderName}</span>
          <span className="message__timestamp">{senderTime}</span>
        </div>
        <div className="message__text">{children}</div>
        <div className="message__reactions">
          {reactions.map(({ emoji, count }, index) => (
            <input
              key={`reactions-item-${index}`}
              className="message__reaction"
              type="checkbox"
              data-before={emoji}
              data-after={count}
              data-after-checked={count + 1}
            />
          ))}
        </div>
        {replies && replies.length > 0 && (
          <div className="message__replies">
            {replies
              .slice(0, replies.length - 1)
              .map(({ name, avatarUrl }, index) => (
                <span
                  key={`replies-item-${index}`}
                  className="tooltip"
                  data-tooltip={name}
                >
                  <img
                    className="message__reply message__avatar"
                    src={avatarUrl}
                    alt={name}
                  />
                </span>
              ))}
            {repliesCount - replies.length > 0 && (
              <div className="message__reply">
                <img
                  className="message__avatar"
                  src={replies.slice(replies.length - 1)[0].avatarUrl}
                  alt=""
                />
                <span className="message__replies--count">
                  +{repliesCount - replies.length}
                </span>
              </div>
            )}
            <div className="message__replies--meta">
              <span className="message__replies--total">
                {Math.max(repliesCount, replies.length)} replies
              </span>
              <span className="message__replies--last">
                Last reply today at {lastReplyTime}
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export { SlackMessage };

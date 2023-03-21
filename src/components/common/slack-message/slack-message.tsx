import React from 'react';
import { TimeUnit } from './constants/time-unit';
import { getRandomNumber } from './utils/get-random-number';
import { getValidClasses } from '~/helpers/helpers';

import * as styles from './slack-message.module.scss';

type Emotion = {
  emoji: string;
  count: number;
};

type ReplyAuthor = {
  name: string;
  avatarUrl: string;
};

type Props = {
  senderId: string;
  senderName: string;
  senderAvatarUrl: string;
  reactions: Emotion[];
  replies: ReplyAuthor[];
  senderDate?: number;
};

const SlackMessage: React.FC<React.PropsWithChildren<Props>> = ({
  senderId = '',
  senderName = '',
  senderAvatarUrl = '',
  senderDate = Date.now(),
  children,
  reactions = [],
  replies = [],
  ...rest
}) => {
  const repliesCount = getRandomNumber(7, 16);
  const senderTime = new Date(senderDate - 130 * TimeUnit.MINUTE)
    .toTimeString()
    .slice(0, 5);
  const lastReplyTime = new Date(senderDate - 116 * TimeUnit.MINUTE)
    .toTimeString()
    .slice(0, 5);
  return (
    <div className={styles.message} data-from={senderId} {...rest}>
      <img
        className={getValidClasses(styles.avatar, styles.avatarBig)}
        src={senderAvatarUrl}
        alt=""
      />
      <div className={styles.content}>
        <div>
          <span className={styles.author}>{senderName}</span>
          <span className={styles.timestamp}>{senderTime}</span>
        </div>
        <div className={styles.text}>{children}</div>
        <div className={styles.reactions}>
          {reactions.map(({ emoji, count }, index) => (
            <input
              key={`reactions-item-${index}`}
              className={styles.reaction}
              type="checkbox"
              data-before={emoji}
              data-after={count}
              data-after-checked={count + 1}
            />
          ))}
        </div>
        {replies && replies.length > 0 && (
          <div className={styles.replies}>
            {replies
              .slice(0, replies.length - 1)
              .map(({ name, avatarUrl }, index) => (
                <span
                  key={`replies-item-${index}`}
                  className="tooltip"
                  data-tooltip={name}
                >
                  <img
                    className={getValidClasses(styles.reply, styles.avatar)}
                    src={avatarUrl}
                    alt={name}
                  />
                </span>
              ))}
            {repliesCount - replies.length > 0 && (
              <div className={styles.reply}>
                <img
                  className={styles.avatar}
                  src={replies.slice(replies.length - 1)[0].avatarUrl}
                  alt=""
                />
                <span className={styles.replyCount}>
                  +{repliesCount - replies.length}
                </span>
              </div>
            )}
            <div className={styles.replyMeta}>
              <span className={styles.replyTotal}>
                {Math.max(repliesCount, replies.length)} replies
              </span>
              <span className={styles.replyLast}>
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

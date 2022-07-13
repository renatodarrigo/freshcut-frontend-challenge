import Avatar, { AvatarSizeEnum } from '../avatar/avatar';

import Like from '../like/like';
import styles from './comment-item.module.scss';

/* eslint-disable-next-line */
export interface CommentItemProps {
  avatarUrl: string;
  commentUser: string;
  commentText: string;
  commentTime: string;
  liked: boolean;
  likes: number;
  replies?: CommentItemProps[];
}

export function CommentItem({
  avatarUrl,
  commentUser,
  commentText,
  commentTime,
  liked,
  likes,
  replies = [],
}: CommentItemProps) {
  return (
    <div className={styles['container']}>
      <div className={styles['commentWrapper']}>
        <Avatar size={AvatarSizeEnum.SMALL} avatarUrl={avatarUrl} />
        <div className={styles['commentInfo']}>
          <div className={styles['commentUser']}>{commentUser}</div>
          <div className={styles['commentText']}>{commentText}</div>
          <div className={styles['commentFooter']}>
            <div className={styles['commentTime']}>{commentTime}</div>
            <button className={styles['commentReply']}>Reply</button>
          </div>
        </div>
        <div className={styles['commentLike']}>
          <Like active={liked} number={likes} />
        </div>
      </div>
      {replies.length > 0 && (
        <div className={styles['commentReplies']}>
          {replies.map((reply, index) => {
            return (
              <CommentItem
                key={index} // todo remove index
                avatarUrl={reply.avatarUrl}
                commentUser={reply.commentUser}
                commentText={reply.commentText}
                commentTime={reply.commentTime}
                liked={reply.liked}
                likes={reply.likes}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}

export default CommentItem;

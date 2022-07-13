import CommentItem from '../comment-item/comment-item';
import Input from '../input/input';
import Like from '../like/like';
import Share from '../share/share';
import styles from './comments.module.scss';

/* eslint-disable-next-line */
export interface CommentsProps {}

export function Comments(props: CommentsProps) {
  return (
    <div className={styles['container']}>
      <div className={styles['header']}>
        Comments <span>12</span>
      </div>
      <div className={styles['main']}>
        <CommentItem
          avatarUrl="https://placekitten.com/241/241"
          commentUser="CommentUser1"
          commentText="Test test test test 1"
          commentTime="2d"
          liked={true}
          likes={2}
          replies={[
            {
              avatarUrl: 'https://placekitten.com/245/245',
              commentUser: 'CommentUser5',
              commentText: '@CommentUser1 Reply reply reply reply reply 1',
              commentTime: '1d',
              liked: false,
              likes: 0,
            },
          ]}
        />
        <CommentItem
          avatarUrl="https://placekitten.com/242/242"
          commentUser="CommentUser2"
          commentText="Test test test test 2"
          commentTime="1d"
          liked={false}
          likes={5}
        />
        <CommentItem
          avatarUrl="https://placekitten.com/243/243"
          commentUser="CommentUser3"
          commentText="Test test test test 3"
          commentTime="12h"
          liked={true}
          likes={500}
        />
      </div>
      <div className={styles['footer']}>
        <div className={styles['input']}>
          <Input placeholder="Add a comment..." />
        </div>
        <div className={styles['actions']}>
          <Share big number={10} />
          <Like big number={100} />
        </div>
      </div>
    </div>
  );
}

export default Comments;

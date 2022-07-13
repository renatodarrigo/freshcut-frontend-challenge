import FeedUnit from '../feed-unit/feed-unit';
import styles from './feed.module.scss';

/* eslint-disable-next-line */
export interface FeedProps {}

export function Feed(props: FeedProps) {
  return (
    <div className={styles['feed']}>
      <FeedUnit />
      <FeedUnit />
      <FeedUnit />
    </div>
  );
}

export default Feed;

import Sidebar from '../sidebar/sidebar';
import VideoPlayer from '../video-player/video-player';
import styles from './feed-unit.module.scss';

/* eslint-disable-next-line */
export interface FeedUnitProps {}

export function FeedUnit(props: FeedUnitProps) {
  return (
    <div className={styles['feedUnit']}>
      <div className={styles['container']}>
        <div className={styles['video']}>
          <VideoPlayer imageUrl="https://placekitten.com/1920/1080" />
        </div>
        <div className={styles['sidebar']}>
          <Sidebar
            creatorName="CreatorName"
            isVerified={true}
            description="Satoshi Nakamoto launched lots of decentralisation when Litecoin required many decentralised application #sniped #teamsolomid"
            game="Call of Duty: Warzone"
          />
        </div>
      </div>
    </div>
  );
}

export default FeedUnit;

import styles from './video-player.module.scss';

/* eslint-disable-next-line */
export interface VideoPlayerProps {
  imageUrl: string;
}

export function VideoPlayer({ imageUrl }: VideoPlayerProps) {
  return (
    <div className={styles['container']}>
      <div
        className={styles['wrapper']}
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
    </div>
  );
}

export default VideoPlayer;

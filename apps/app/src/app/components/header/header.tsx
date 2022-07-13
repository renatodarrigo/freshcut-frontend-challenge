import Avatar, { AvatarSizeEnum } from '../avatar/avatar';

import DiscordIcon from '../icons/discord-icon/discord-icon';
import InstagramIcon from '../icons/instagram-icon/instagram-icon';
import RoundButton from '../round-button/round-button';
import TwitchIcon from '../icons/twitch-icon/twitch-icon';
import VerifiedBadge from '../verified-badge/verified-badge';
import YoutubeIcon from '../icons/youtube-icon/youtube-icon';
import styles from './header.module.scss';

/* eslint-disable-next-line */
export interface HeaderProps {
  creatorName: string;
  isVerified: boolean;
  isFollowed: boolean;
  description: string;
  avatarUrl?: string;
  followers?: number;
  views?: number;
  likes?: number;
  backgroundUrl?: string;
  discordUrl?: string;
  twitchUrl?: string;
  youtubeUrl?: string;
  instagramUrl?: string;
}

export function Header({
  creatorName,
  isVerified,
  isFollowed,
  description,
  avatarUrl,
  followers,
  views,
  likes,
  backgroundUrl,
  discordUrl,
  twitchUrl,
  youtubeUrl,
  instagramUrl,
}: HeaderProps) {
  return (
    <div
      className={styles['container']}
      style={{
        backgroundImage: backgroundUrl
          ? `url(${backgroundUrl})`
          : 'url(/assets/feedBg.png)',
      }}
    >
      <div className={styles['avatar']}>
        <Avatar size={AvatarSizeEnum.BIG} avatarUrl={avatarUrl} />
      </div>
      <div className={styles['nameAndBadge']}>
        <h1>{creatorName}</h1>
        {isVerified && <VerifiedBadge />}
      </div>
      <div className={styles['followersViewsAndLikes']}>
        {followers && (
          <div>
            <span>{followers}</span> Followers
          </div>
        )}
        {views && (
          <div>
            <span>{views}</span> Views
          </div>
        )}
        {likes && (
          <div>
            <span>{likes}</span> Likes
          </div>
        )}
      </div>
      <p className={styles['description']}>{description}</p>
      <div className={styles['socialLinks']}>
        {discordUrl && (
          <a href={discordUrl}>
            <DiscordIcon />
          </a>
        )}
        {twitchUrl && (
          <a href={twitchUrl}>
            <TwitchIcon />
          </a>
        )}
        {youtubeUrl && (
          <a href={youtubeUrl}>
            <YoutubeIcon />
          </a>
        )}
        {instagramUrl && (
          <a href={instagramUrl}>
            <InstagramIcon />
          </a>
        )}
      </div>
      <div className={styles['followButton']}>
        <RoundButton text={'Follow'} />
      </div>
    </div>
  );
}

export default Header;

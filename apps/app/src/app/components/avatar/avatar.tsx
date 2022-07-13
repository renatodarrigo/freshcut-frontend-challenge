import classnames from 'classnames';
import styles from './avatar.module.scss';

/* eslint-disable-next-line */
export interface AvatarProps {
  size?: AvatarSizeEnum;
  avatarUrl?: string;
}

export enum AvatarSizeEnum {
  SMALL = 'small',
  MEDIUM = 'medium',
  BIG = 'big',
}

export function Avatar({ size, avatarUrl }: AvatarProps) {
  const bgStyle = {
    backgroundImage: avatarUrl ? `url(${avatarUrl})` : `none`,
  };

  return (
    <div
      className={classnames(
        styles['avatar'],
        styles[size ? size : AvatarSizeEnum.BIG]
      )}
      style={bgStyle}
    ></div>
  );
}

export default Avatar;

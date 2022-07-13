import Avatar, { AvatarSizeEnum } from '../avatar/avatar';
import VerifiedBadge, {
  VerifiedBadgeSizeEnum,
} from '../verified-badge/verified-badge';

import AddButton from '../add-button/add-button';
import Comments from '../comments/comments';
import GamepadIcon from '../icons/gamepad-icon/gamepad-icon';
import styles from './sidebar.module.scss';

/* eslint-disable-next-line */
export interface SidebarProps {
  creatorName: string;
  isVerified: boolean;
  description: string;
  game: string;
}

export function Sidebar({
  creatorName,
  isVerified,
  description,
  game,
}: SidebarProps) {
  return (
    <div className={styles['container']}>
      <div className={styles['creator']}>
        <div className={styles['creatorAvatar']}>
          <div className={styles['avatar']}>
            <Avatar
              size={AvatarSizeEnum.MEDIUM}
              avatarUrl="https://placekitten.com/240/240"
            />
          </div>
          <div className={styles['addButton']}>
            <AddButton />
          </div>
        </div>
        <div className={styles['creatorInfo']}>
          <div className={styles['nameAndBadge']}>
            <span>{creatorName}</span>
            {isVerified && <VerifiedBadge size={VerifiedBadgeSizeEnum.SMALL} />}
          </div>
          <div className={styles['description']}>{description}</div>
          <div className={styles['game']}>
            <GamepadIcon />
            {game}
          </div>
        </div>
      </div>
      <div className={styles['comments']}>
        <Comments />
      </div>
    </div>
  );
}

export default Sidebar;

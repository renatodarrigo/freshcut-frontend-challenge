import HeartFilledIcon from '../icons/heart-filled-icon/heart-filled-icon';
import HeartIcon from '../icons/heart-icon/heart-icon';
import classnames from 'classnames';
import styles from './like.module.scss';

/* eslint-disable-next-line */
export interface LikeProps {
  big?: boolean;
  active?: boolean;
  number?: number;
}

export function Like({ big = false, active = false, number = 0 }: LikeProps) {
  return (
    <div className={classnames(styles['container'], big && styles['big'])}>
      <div className={classnames(styles['heart'], active && styles['active'])}>
        {active ? <HeartFilledIcon /> : <HeartIcon />}
      </div>
      <div className={styles['number']}>{number > 0 ? number : ''}</div>
    </div>
  );
}

export default Like;

import ShareIcon from '../icons/share-icon/share-icon';
import classnames from 'classnames';
import styles from './share.module.scss';

/* eslint-disable-next-line */
export interface ShareProps {
  big?: boolean;
  number?: number;
}

export function Share({ big = false, number = 0 }: ShareProps) {
  return (
    <div className={classnames(styles['container'], big && styles['big'])}>
      <div className={styles['share']}>
        <ShareIcon />
      </div>
      <div className={styles['number']}>{number > 0 ? number : ''}</div>
    </div>
  );
}

export default Share;

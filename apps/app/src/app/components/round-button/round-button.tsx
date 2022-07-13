import styles from './round-button.module.scss';

/* eslint-disable-next-line */
export interface RoundButtonProps {
  text: string;
}

export function RoundButton({ text }: RoundButtonProps) {
  return (
    <button className={styles['roundButton']}>
      <span>{text}</span>
    </button>
  );
}

export default RoundButton;

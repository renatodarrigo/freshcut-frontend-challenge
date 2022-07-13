import styles from './input.module.scss';

/* eslint-disable-next-line */
export interface InputProps {
  placeholder: string;
}

export function Input({ placeholder }: InputProps) {
  return (
    <div className={styles['container']}>
      <label>
        <input type="text" placeholder={placeholder} />
      </label>
    </div>
  );
}

export default Input;

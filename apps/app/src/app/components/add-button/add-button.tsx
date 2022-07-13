import styles from './add-button.module.scss';

/* eslint-disable-next-line */
export interface AddButtonProps {}

export function AddButton(props: AddButtonProps) {
  return <button className={styles['container']}></button>;
}

export default AddButton;

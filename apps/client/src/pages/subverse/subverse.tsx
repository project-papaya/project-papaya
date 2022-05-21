import styles from './subverse.module.css';

/* eslint-disable-next-line */
export interface SubverseProps {}

export function Subverse(props: SubverseProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Subverse!</h1>
    </div>
  );
}

export default Subverse;

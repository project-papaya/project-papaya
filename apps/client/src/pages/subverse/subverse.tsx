import { useParams } from 'react-router-dom';
import styles from './subverse.module.css';

/* eslint-disable-next-line */
export interface SubverseProps {}

export function Subverse(props: SubverseProps) {

    const { userId, subverseId } = useParams();

    return (
        <div className={styles['container']}>
            <h1>User: {userId}, Subverse: {subverseId}</h1>
        </div>
  );
}

export default Subverse;

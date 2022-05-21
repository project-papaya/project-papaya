import { useParams } from 'react-router-dom';
import styles from './user.module.css';

/* eslint-disable-next-line */
export interface UserProps {}

export function User(props: UserProps) {

    const { userId } = useParams();

    return (
        <div className={styles['container']}>
            <h1>User: {userId}</h1>
        </div>
  );
}

export default User;

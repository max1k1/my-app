import React from 'react';
import styles from './User.module.css';
import userPhoto from '../../../assets/images/userPhoto.png';
import { NavLink } from 'react-router-dom';
import { UserDateType } from '../../../types/types';

type PropsType = {
  userDate: UserDateType;
  follow: (id: number) => void;
  unFollow: (id: number) => void;
  followingInProgress: Array<number>;
};
const User: React.FC<PropsType> = ({ userDate, follow, unFollow, followingInProgress }) => {
  return (
    <div>
      <div className={styles.user}>
        <div className={styles.firstArea}>
          <NavLink to={'/profile/' + userDate.id}>
            <img
              className={styles.ava}
              src={userDate.photos.small ? userDate.photos.small : userPhoto}
              alt="avatar"
            />
          </NavLink>
          <div>
            {userDate.followed ? (
              <button
                disabled={followingInProgress.some((userId) => userId === userDate.id)}
                onClick={() => {
                  unFollow(userDate.id);
                }}>
                Unfollow
              </button>
            ) : (
              <button
                disabled={followingInProgress.some((userId) => userId === userDate.id)}
                onClick={() => {
                  follow(userDate.id);
                }}>
                Follow
              </button>
            )}
          </div>
        </div>
        <div className={styles.secondArea}>
          <div className={styles.thirdArea}>
            <div className={styles.name}>{userDate.name}</div>
            <div className={styles.status}>
              {userDate.status ? userDate.status : 'User has no status'}
            </div>
          </div>
          <div className={styles.livingPlace}>
            <div>{'Country,'}</div>
            <div>{'City'}</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default User;

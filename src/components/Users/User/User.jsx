import React from "react";
import styles from "./User.module.css";
import userPhoto from "../../../assets/images/userPhoto.png";
import { NavLink } from "react-router-dom";

const User = ({ userDate, follow, unFollow, followingInProgress }) => {
  return (
    <div>
      <div className={styles.user}>
        <div className={styles.firstArea}>
            <NavLink to={"/profile/" + userDate.id}>
              <img
                className={styles.ava}
                src={userDate.photos.small ? userDate.photos.small : userPhoto}
                alt="avatar"
              />
            </NavLink>
          <div>
            {userDate.followed ? (
              <button
                disabled={followingInProgress.some(
                  (userId) => userId === userDate.id
                )}
                onClick={() => {
                  unFollow(userDate.id);
                }}
              >
                Unfollow
              </button>
            ) : (
              <button
                disabled={followingInProgress.some(
                  (userId) => userId === userDate.id
                )}
                onClick={() => {
                  follow(userDate.id);
                }}
              >
                Follow
              </button>
            )}
          </div>
        </div>
        <div className={styles.secondArea}>
          <div className={styles.thirdArea}>
            <div className={styles.name}>{userDate.name}</div>
            <div className={styles.status}>{userDate.status}</div>
          </div>
          <div className={styles.livingPlace}>
            {/* <div>{"`${userDate.livingPlace.country}`"}</div>
            <div>{"`${userDate.livingPlace.city}`"}</div> */}
          </div>
        </div>
      </div>
    </div>
  );
};
export default User;

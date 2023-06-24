import React from "react";
import styles from "./Users.module.css";
import userPhoto from "../../assets/images/userPhoto.png";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { usersAPI } from "../../api/api";

const Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= 23; i++) {
    pages.push(i);
  }
  return (
    <div>
      <div>
        {pages.map((p) => {
          return (
            <span
              className={p === props.currentPage && styles.selectedPageNumber}
              onClick={(e) => {
                props.onPageChanged(p);
              }}
            >
              {p}
            </span>
          );
        })}
      </div>
      {props.usersDate.map((u) => (
        <div key={u.userId} className={styles.users}>
          <span className={styles.user}>
            <div className={styles.firstArea}>
              {
                <NavLink to={"/profile/" + u.id}>
                  <img
                    className={styles.ava}
                    src={u.photos.small ? u.photos.small : userPhoto}
                    alt="avatar"
                  />
                </NavLink>
              }
              <div>
                {u.followed ? (
                  <button
                    onClick={() => {
                      usersAPI.unfollow(u.id).then((resultCode) => {
                        if (resultCode == 0) {
                          props.unFollow(u.id);
                        }
                      });
                    }}
                  >
                    Unfollow
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      usersAPI.follow(u.id).then((resultCode) => {
                        if (resultCode == 0) {
                          props.follow(u.id);
                        }
                      });
                    }}
                  >
                    Follow
                  </button>
                )}
              </div>
            </div>
            <div className={styles.secondArea}>
              <div className={styles.thirdArea}>
                <div className={styles.name}>{u.name}</div>
                <div className={styles.status}>{u.status}</div>
              </div>
              <div className={styles.livingPlace}>
                <div>{"`${u.livingPlace.country}`"}</div>
                <div>{"`${u.livingPlace.city}`"}</div>
              </div>
            </div>
          </span>
        </div>
      ))}
    </div>
  );
};
export default Users;

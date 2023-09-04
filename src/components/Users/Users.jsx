import React from "react";
import styles from "./Users.module.css";
import Paginator from "../common/Paginator/Paginator";
import User from "./User/User";

const Users = ({
  currentPage,
  onPageChanged,
  totalUsersCount,
  pageSize,
  usersDate,
  follow,
  unFollow,
  followingInProgress,
  ...props
}) => {
  return (
    <div>
      <Paginator
        pageSize={pageSize}
        currentPage={currentPage}
        onPageChanged={onPageChanged}
        totalUsersCount={totalUsersCount}
      />
      {usersDate.map((userDate) => (
        <div key={userDate.id} className={styles.users}>
          <User key={userDate.id}
            userDate={userDate}
            follow={follow}
            unFollow={unFollow}
            followingInProgress={followingInProgress}
          />
        </div>
      ))}
    </div>
  );
};
export default Users;

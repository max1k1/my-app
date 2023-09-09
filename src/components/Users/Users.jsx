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
  pagesListSize,
  ...props
}) => {
  return (
    <div>
      <Paginator
        currentPage={currentPage}
        onPageChanged={onPageChanged}
        totalItemsCount={totalUsersCount}
        pageSize={pageSize}
        pagesListSize={pagesListSize}
      />
      {usersDate.map((userDate) => (
        <div key={userDate.id} className={styles.users}>
          <User
            key={userDate.id}
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

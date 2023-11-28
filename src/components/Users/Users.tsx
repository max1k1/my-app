import React, { FC, useState } from 'react';
import styles from './Users.module.css';
import Paginator from '../common/Paginator/Paginator.tsx';
import User from './User/User.tsx';
import { UserDateType } from '../../types/types.ts';
type PropsType = {
  currentPage: number;
  onPageChanged: (pageNumber: number) => void;
  totalUsersCount: number;
  pageSize: number;
  usersDate: Array<UserDateType>;
  follow: (id: number )=>void;
  unFollow: (id: number )=>void;
  followingInProgress: Array<number>;
  pagesListSize: number;
};
const Users: FC<PropsType> = ({
  currentPage,
  onPageChanged,
  totalUsersCount,
  pageSize,
  usersDate,
  follow,
  unFollow,
  followingInProgress,
  pagesListSize,
}) => {
  const [filtersList, setFiltersList] = useState([
    { name: 'My Friends', status: false },
    { name: 'Friends request', status: false },
    { name: 'Search for friends', status: false },
  ]);
  const usersElement = usersDate.map((userDate) => (
    <div key={userDate.id} className={styles.user}>
      <User
        key={userDate.id}
        userDate={userDate}
        follow={follow}
        unFollow={unFollow}
        followingInProgress={followingInProgress}
      />
    </div>
  ));
  const filterListElement = filtersList.map((obj, i) => {
    return (
      <div
        key={i}
        onPointerLeave={() => {
          obj.status = false;
          setFiltersList([...filtersList]);
        }}
        onPointerEnter={() => {
          obj.status = true;
          setFiltersList([...filtersList]);
        }}
        className={obj.status ? styles.active : styles.item}>
        {obj.name}
      </div>
    );
  });
  return (
    <div className={styles.pageLayout}>
      <div className={styles.users}>
        <Paginator
          currentPage={currentPage}
          onPageChanged={onPageChanged}
          totalItemsCount={totalUsersCount}
          pageSize={pageSize}
          pagesListSize={pagesListSize}
        />
        {usersElement}
      </div>
      <div className={styles.filterUsers}>{filterListElement}</div>
    </div>
  );
};
export default Users;

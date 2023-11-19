import React from 'react';
import { connect } from 'react-redux';
import { follow, unFollow, requestUsers } from './../../redux/users-reducer';
import Users from './Users';
import Preloader from './../common/Preloader/Preloader';
import { useEffect } from 'react';
import {
  getCurrentPage,
  getFollowingInProgress,
  getPageSize,
  getPagesListSize,
  getTotalUsersCount,
  getUsers,
} from '../../redux/users-selectors';
const UsersContainer = ({
  pageSize,
  currentPage,
  pagesListSize,
  totalUsersCount,
  follow,
  unFollow,
  followingInProgress,
  isFetching,
  usersDate,
  requestUsers,
}) => {
  useEffect(() => {
    requestUsers(pageSize, currentPage);
  }, [requestUsers, pageSize, currentPage]);
  const onPageChanged = (pageNumber) => {
    requestUsers(pageSize, pageNumber);
  };
  return (
    <>
      {isFetching ? <Preloader /> : null}
      <Users
        pagesListSize={pagesListSize}
        totalUsersCount={totalUsersCount}
        currentPage={currentPage}
        pageSize={pageSize}
        usersDate={usersDate}
        follow={follow}
        unFollow={unFollow}
        onPageChanged={onPageChanged}
        followingInProgress={followingInProgress}
      />
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    usersDate: getUsers(state),
    totalUsersCount: getTotalUsersCount(state),
    pageSize: getPageSize(state),
    currentPage: getCurrentPage(state),
    followingInProgress: getFollowingInProgress(state),
    pagesListSize: getPagesListSize(state),
  };
};
export default connect(mapStateToProps, { follow, unFollow, requestUsers })(UsersContainer);

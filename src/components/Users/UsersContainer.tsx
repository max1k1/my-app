import React from 'react';
import { connect } from 'react-redux';
import { follow, unFollow, requestUsers } from '../../redux/users-reducer.ts';
import Users from './Users.tsx';
import Preloader from '../common/Preloader/Preloader.tsx';
import {
  getCurrentPage,
  getFollowingInProgress,
  getIsFetching,
  getPageSize,
  getPagesListSize,
  getTotalUsersCount,
  getUsers,
} from '../../redux/users-selectors.ts';
import { UserDateType } from '../../types/types.ts';
import { AppStateType } from '../../redux/store.ts';
type MapStatePropsType = {
  currentPage: number;
  pageSize: number;
  isFetching: boolean;
  totalUsersCount: number;
  usersDate: Array<UserDateType>;
  followingInProgress: Array<number>;
  pagesListSize: number;
};
type MapDispatchPropsType = {
  requestUsers: (currentPage: number, pageSize: number) => void;
  follow: (id: number) => void;
  unFollow: (id: number) => void;
};
type OwnPropsType = {};
type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType;

class UsersContainer extends React.Component<PropsType> {
  componentDidMount() {
    this.props.requestUsers(this.props.pageSize, this.props.currentPage);
  }
  onPageChanged = (pageNumber: number) => {
    this.props.requestUsers(this.props.pageSize, pageNumber);
  };
  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users
          pagesListSize={this.props.pagesListSize}
          totalUsersCount={this.props.totalUsersCount}
          currentPage={this.props.currentPage}
          pageSize={this.props.pageSize}
          usersDate={this.props.usersDate}
          follow={this.props.follow}
          unFollow={this.props.unFollow}
          onPageChanged={this.onPageChanged}
          followingInProgress={this.props.followingInProgress}
        />
      </>
    );
  }
}
const mapStateToProps = (state: AppStateType): MapStatePropsType => {
  return {
    usersDate: getUsers(state),
    totalUsersCount: getTotalUsersCount(state),
    pageSize: getPageSize(state),
    currentPage: getCurrentPage(state),
    followingInProgress: getFollowingInProgress(state),
    pagesListSize: getPagesListSize(state),
    isFetching: getIsFetching(state),
  };
};
// TStateProps = {}, TDispatchProps = {}, TOwnProps = {}, State = DefaultRootState
export default connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(
  mapStateToProps,
  {
    follow,
    unFollow,
    requestUsers,
  },
)(UsersContainer);

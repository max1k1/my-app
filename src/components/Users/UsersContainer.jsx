import React from "react";
import { connect } from "react-redux";
import {
  follow,
  setUsers,
  unFollow,
  setPage,
  setTotalUsersCount,
  toggleIsFatching,
} from "./../../redux/users-reducer";
import Users from "./Users";
import Preloader from "./../common/Preloader/Preloader";
import { usersAPI } from './../../api/api';

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.toggleIsFatching(true);
    // this.props.pageSize, this.props.currentPage
    usersAPI.getUsers(this.props.pageSize, this.props.pageNumber).then(data => {
        this.props.toggleIsFatching(false);
        this.props.setUsers(data.items);
        this.props.setTotalUsersCount(data.totalCount);
      });
  }
  onPageChanged = (pageNumber) => {
    this.props.setPage(pageNumber);
    this.props.toggleIsFatching(true);
    usersAPI.getUsers(this.props.pageSize, pageNumber).then(data => {
      this.props.toggleIsFatching(false);
      this.props.setUsers(data.items);
    });
  };

  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users
          totalUsersCount={this.props.totalUsersCount}
          currentPage={this.props.currentPage}
          pageSize={this.props.pageSize}
          usersDate={this.props.usersDate}
          follow={this.props.follow}
          unFollow={this.props.unFollow}
          onPageChanged={this.onPageChanged}
        />
      </>
    );
  }
}
const mapStateToProps = (state) => {
  const { usersDate, totalUsersCount, pageSize, currentPage, isFatching } =
    state.usersPage;
  return {
    usersDate,
    totalUsersCount,
    pageSize,
    currentPage,
    isFatching,
  };
};
export default connect(mapStateToProps, {
  follow,
  unFollow,
  setUsers,
  setPage,
  setTotalUsersCount,
  toggleIsFatching,
})(UsersContainer);

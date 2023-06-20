import React from "react";
import { connect } from "react-redux";
import {
  follow,
  setUsers,
  unFollow,
  setPage,
  setTotalUsersCount,
  toggleIsFatching,
} from "./../../redux/Users-reducer";
import Users from "./Users";
import axios from "axios";
import Preloader from "./../common/Preloader/Preloader";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.toggleIsFatching(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${this.props.currentPage}`
      )
      .then(response => {
        this.props.toggleIsFatching(false);
        this.props.setUsers(response.data.items);
        this.props.setTotalUsersCount(response.data.totalCount);
      });
  }
  onPageChanged = (pageNumber) => {
    this.props.setPage(pageNumber);
    this.props.toggleIsFatching(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?count=${this.props.pageSize}&page=${pageNumber}`
      )
      .then(response => {
        this.props.toggleIsFatching(false);
        this.props.setUsers(response.data.items);
      });
  };
  render() {
    return <>
        {this.props.isFetching ? <Preloader />: null }
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
  }
}
const mapStateToProps = (state) => {
  const {usersDate, totalUsersCount, pageSize, currentPage, isFatching} = state.usersPage
  return {
    usersDate,
    totalUsersCount,
    pageSize,
    currentPage,
    isFatching
  };
};
export default connect(mapStateToProps, {follow, unFollow, setUsers, setPage, setTotalUsersCount, toggleIsFatching})(UsersContainer);

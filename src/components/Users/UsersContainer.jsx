import React from "react";
import { connect } from "react-redux";
import { follow, unFollow, getUsers } from "./../../redux/users-reducer";
import Users from "./Users";
import Preloader from "./../common/Preloader/Preloader";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.pageSize, this.props.currentPage);
  }
  onPageChanged = (pageNumber) => {
    this.props.getUsers(this.props.pageSize, pageNumber);
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
          followingInProgress={this.props.followingInProgress}
        />
      </>
    );
  }
}
const mapStateToProps = (state) => {
  const {
    usersDate,
    totalUsersCount,
    pageSize,
    currentPage,
    followingInProgress,
  } = state.usersPage;
  return {
    usersDate,
    totalUsersCount,
    pageSize,
    currentPage,
    followingInProgress,
    isAuth: state.auth.isAuth,
  };
};
export default compose(
  withAuthRedirect,
  connect(mapStateToProps, {follow, unFollow, getUsers,}),
)(UsersContainer)

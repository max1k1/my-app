// import React from "react";
// import Profile from "./Profile";
// import { connect } from "react-redux";
// import {
//   getUserProfile,
//   getStatus,
//   updateStatus,
// } from "../../redux/profile-reducer";
// import { compose } from "redux";
// import { withRouter } from "../../hoc/withRouter";

// class ProfileContainer extends React.Component {
    
//   componentDidMount() {
//     let userId = this.props.match.params.userId;
//     if (!userId) {
//       userId = this.props.authorizedUserId;
//       if (!userId) {
//         window.location.replace("http://localhost:3000/users");
//       }
//       ////////////NEEDS TO BE FIXED/////////////////////////////////////////////////////////////////////////
//       ////////////////////////////////////////////////////////////////////////////////////////////////////
//     }
//     this.props.getUserProfile(userId);
//     this.props.getStatus(userId);
//   }
//   render() {
//     console.log("profileContainer")
//     return (
//       <Profile
//         {...this.props}
//         profile={this.props.profile}
//         status={this.props.status}
//         updateStatus={this.props.updateStatus}
//       />
//     );
//   }
// }
// const mapStateToProps = (state) => ({
//   profile: state.profilePage.profile,
//   status: state.profilePage.status,
//   authorizedUserId: state.auth.id,
//   isAuth: state.auth.isAuth,
// });
// export default compose(
//   withRouter,
//   connect(mapStateToProps, { getUserProfile, getStatus, updateStatus })
// )(ProfileContainer);

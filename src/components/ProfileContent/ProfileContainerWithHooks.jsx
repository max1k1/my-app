import React, { useEffect } from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import {
  getUserProfile,
  getStatus,
  updateStatus,
  updatePhoto,
  updateProfileInfo
} from "../../redux/profile-reducer";
import { compose } from "redux";
import { withRouter } from "../../hoc/withRouter";
import { useNavigate } from "react-router-dom";

const ProfileContainerWithHooks = ({
  profile,
  status,
  authorizedUserId,
  match,
  getUserProfile,
  getStatus,
  updateStatus,
  updatePhoto,
  updateProfileInfo,
}) => {
  const navigate = useNavigate();
  useEffect(() => {
    const redirect = (adress) => {
      navigate(adress);
    };
    let userId = match.params.userId;
    if (!userId) {
      userId = authorizedUserId;
      if (!userId) {
        return redirect("/users");
      }
    }
    getUserProfile(userId);
    getStatus(userId);
  }, [getUserProfile, getStatus, authorizedUserId, match, navigate]);
  return (
    <Profile
      profile={profile}
      status={status}
      updateStatus={updateStatus}
      authorizedUserId={authorizedUserId}
      isOwner={!match.params.userId}
      updatePhoto={updatePhoto}
      updateProfileInfo={updateProfileInfo}
    />
  );
};
const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  authorizedUserId: state.auth.id,
});

export default compose(
  withRouter,
  connect(mapStateToProps, {
    getUserProfile,
    getStatus,
    updateStatus,
    updatePhoto,
    updateProfileInfo
  })
)(ProfileContainerWithHooks);

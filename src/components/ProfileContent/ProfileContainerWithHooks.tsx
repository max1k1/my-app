import React, { useEffect } from 'react';
import Profile from './Profile.jsx';
import { connect } from 'react-redux';
import {
  getUserProfile,
  getStatus,
  updateStatus,
  updatePhoto,
  updateProfileInfo,
} from '../../redux/profile-reducer.ts';
import { compose } from 'redux';
import { withRouter } from '../../hoc/withRouter.js';
import { useNavigate } from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/withAuthRedirect.js';
import { AppStateType } from '../../redux/store.ts';
import { ProfileType } from '../../types/types.ts';

type MapStatePropsType = {
  profile: ProfileType | null;
  status: string;
  authorizedUserId: number | null;
};
type MapDispatchPropsType = {
  getUserProfile: (userId: number) => void;
  getStatus: (userId: number) => void;
  updateStatus: () => void;
  updatePhoto: () => void;
  updateProfileInfo: () => void;
};
type OwnPropsType = {
  match: any;
};
type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType;

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
}: PropsType) => {
  const navigate = useNavigate();
  useEffect(() => {
    const redirect = (adress: string) => {
      navigate(adress);
    };
    let userId: number | null = match.params.userId;
    if (!userId) {
      userId = authorizedUserId;
      if (!userId) {
        return redirect('/users');
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
const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  authorizedUserId: state.auth.id,
});

// TODO <MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType> place it in coonect
export default compose(
  withAuthRedirect,
  withRouter,
  connect(mapStateToProps, {
    getUserProfile,
    getStatus,
    updateStatus,
    updatePhoto,
    updateProfileInfo,
  }),
)(ProfileContainerWithHooks);

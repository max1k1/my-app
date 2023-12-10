import React, { useEffect } from 'react';
import Profile from './Profile.tsx';
import { connect } from 'react-redux';
import {
  getUserProfile,
  getStatus,
  updateStatus,
  updatePhoto,
  updateProfileInfo,
} from '../../redux/profile-reducer.ts';
import { compose } from 'redux';
import { withRouter } from '../../hoc/withRouter.tsx';
import { useNavigate } from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/withAuthRedirect.tsx';
import { AppStateType } from '../../redux/store.ts';
import { ProfileType } from '../../types/types.ts';

type MapPropsType = ReturnType<typeof mapStateToProps>;

type MapDispatchPropsType = {
  getUserProfile: (userId: number) => void;
  getStatus: (userId: number) => void;
  updateStatus: (status: string) => void;
  updatePhoto: (file: File) => void;
  updateProfileInfo: (profile: ProfileType) => Promise<any>;
};
type OwnPropsType = {
  match: any;
};
type PathParamsType = {
  // TODO by this path match.params.userId should be only userId, fix it
  userId: string;
};
type PropsType = MapPropsType & MapDispatchPropsType & OwnPropsType & PathParamsType;

const ProfileContainerWithHooks: React.FC<PropsType> = ({
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
      isOwner={!match.params.userId}
      updatePhoto={updatePhoto}
      updateProfileInfo={updateProfileInfo}
    />
  );
};
const mapStateToProps = (state: AppStateType) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  authorizedUserId: state.auth.id,
});

export default compose<React.ComponentType>(
  withRouter,
  withAuthRedirect,
  connect(mapStateToProps, {
    getUserProfile,
    getStatus,
    updateStatus,
    updatePhoto,
    updateProfileInfo,
  }),
)(ProfileContainerWithHooks);

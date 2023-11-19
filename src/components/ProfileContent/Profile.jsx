import React from 'react';
import stytles from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';

const Profile = ({
  profile,
  status,
  updateStatus,
  authorizedUserId,
  isOwner,
  updatePhoto,
  updateProfileInfo,
}) => {
  return (
    <div className={stytles.profile}>
      <ProfileInfo
        profile={profile}
        status={status}
        updateStatus={updateStatus}
        authorizedUserId={authorizedUserId}
        isOwner={isOwner}
        updatePhoto={updatePhoto}
        updateProfileInfo={updateProfileInfo}
      />
      <MyPostsContainer isOwner={isOwner} />
    </div>
  );
};
export default Profile;

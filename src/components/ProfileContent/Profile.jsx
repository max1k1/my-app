import React, { useState } from 'react';
import styles from './Profile.module.css';
import Preloader from '../common/Preloader/Preloader';
import userPhoto from '../../assets/images/userPhoto.png';
import ProfileInfoForm from './ProfileForm/ProfileForm';
// import vMarkIcon from '../../../assets/images/v-mark.png';
// import xMarkIcon from '../../../assets/images/x-mark.svg';
import defalutBackground from '../../assets/images/defaultBackground.png';
import ProfileStatusWithHooks from './ProfileStatus/ProfileStatusWithHooks.tsx';
import MainButton from '../common/Buttons/MainButton/MainButton';
import UploadButtonControl from '../common/UploadButtonControl/UploadButtonControl';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import Contacts from './Contacts/InfoContacts/Contacts';

const Profile = ({
  profile,
  status,
  updateStatus,
  isOwner,
  updatePhoto,
  updateProfileInfo,
}) => {
  let [editMode, setEditMode] = useState(false);
  if (!profile) {
    return <Preloader />;
  }
  const onProfilePhotoSelected = (e) => {
    if (e.target.files.length) {
      updatePhoto(e.target.files[0]);
    }
  };
  const onSubmit = (formData) => {
    updateProfileInfo(formData).then(deactivateEditMode());
  };
  const activateEditMode = () => {
    setEditMode(true);
  };
  const deactivateEditMode = () => {
    setEditMode(false);
  };
  return (
    <div className={styles.profile}>
      <div>
        {!editMode ? (
          <div className={styles.pageLayout}>
            <div className={styles.profileHeaderLayout}>
              <div className={styles.profileBackground}>
                <img src={defalutBackground} alt="defalutBackground" />
              </div>
              <div className={styles.profileHeader}>
                {isOwner ? (
                  <div className={styles.changeProfilePhotoButton}>
                    <button>
                      <UploadButtonControl
                        className={styles.profilePhotoButton}
                        onChange={onProfilePhotoSelected}
                        accept="image/*">
                        <img
                          src={profile.photos.large || userPhoto}
                          alt="profileAva"
                          className={styles.profilePicture}
                        />
                      </UploadButtonControl>
                    </button>
                  </div>
                ) : (
                  <div>
                    <img
                      src={profile.photos.large || userPhoto}
                      alt="profileAva"
                      className={styles.profilePicture}
                    />
                  </div>
                )}
                <div className={styles.profileHeaderInfo}>
                  <div className={styles.profileTextInfo}>
                    <div>{profile.fullName}</div>
                    <ProfileStatusWithHooks
                      status={status}
                      updateStatus={updateStatus}
                      isOwner={isOwner}
                    />
                  </div>
                  {isOwner ? (
                    <div className={styles.editMode} onClick={activateEditMode}>
                      <MainButton name="Edit profile"></MainButton>
                    </div>
                  ) : (
                    <div />
                  )}
                </div>
              </div>
            </div>
            <div className={styles.profileBodyLayout}>
              <div className={styles.profilePosts}>
                <MyPostsContainer isOwner={isOwner} />
              </div>
              <Contacts contacts={profile.contacts} />
            </div>
          </div>
        ) : (
          <ProfileInfoForm
            initialValues={profile}
            profile={profile}
            onSubmit={onSubmit}
            userPhoto={userPhoto}
            isOwner={isOwner}
            status={status}
            updateStatus={updateStatus}
            updateProfileInfo={updateProfileInfo}
            updatePhoto={updatePhoto}
            onProfilePhotoSelected={onProfilePhotoSelected}
          />
        )}
      </div>
    </div>
  );
};
export default Profile;

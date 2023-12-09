import React, { ChangeEvent, useState } from 'react';
import styles from './Profile.module.css';
import Preloader from '../common/Preloader/Preloader.tsx';
import userPhoto from '../../assets/images/userPhoto.png';
import ProfileInfoForm from './ProfileForm/ProfileInfoForm.tsx';
// import vMarkIcon from '../../../assets/images/v-mark.png';
// import xMarkIcon from '../../../assets/images/x-mark.svg';
import defalutBackground from '../../assets/images/defaultBackground.png';
import ProfileStatusWithHooks from './ProfileStatus/ProfileStatusWithHooks.tsx';
import MainButton from '../common/Buttons/MainButton/MainButton.tsx';
import UploadButtonControl from '../common/UploadButtonControl/UploadButtonControl.tsx';
import MyPostsContainer from './MyPosts/MyPostsContainer.tsx';
import Contacts from './Contacts/InfoContacts/Contacts.tsx';
import { ProfileType } from '../../types/types.ts';

type PropsType = {
  profile: ProfileType | null;
  status: string;
  isOwner: boolean;
  updateStatus: (status: string) => void;
  updatePhoto: (file: File) => void;
  updateProfileInfo: (profile: ProfileType) => Promise<any>;
};
const Profile: React.FC<PropsType> = ({
  profile,
  status,
  isOwner,
  updateStatus,
  updatePhoto,
  updateProfileInfo,
}) => {
  let [editMode, setEditMode] = useState(false);
  if (!profile) {
    return <Preloader />;
  }
  const onProfilePhotoSelected = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length) {
      updatePhoto(e.target.files[0]);
    }
  };
  const onSubmit = (formData: ProfileType) => {
    // TODO: remove then
    updateProfileInfo(formData).then(() => {
      setEditMode(false);
    });
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
                      <UploadButtonControl onChange={onProfilePhotoSelected} accept="image/*">
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
                    <div className={styles.editMode} onClick={() => setEditMode(true)}>
                      <MainButton name="Edit profile"></MainButton>
                    </div>
                  ) : (
                    <div />
                  )}
                </div>
              </div>
            </div>
            <div className={styles.profileBodyLayout}>
              <div className={styles.profilePosts}>{isOwner ? <MyPostsContainer /> : <div />}</div>
              <Contacts contacts={profile.contacts} />
            </div>
          </div>
        ) : (
          <ProfileInfoForm
            profile={profile}
            initialValues={profile}
            onSubmit={onSubmit}
            isOwner={isOwner}
            status={status}
            updateStatus={updateStatus}
            onProfilePhotoSelected={onProfilePhotoSelected}
          />
        )}
      </div>
    </div>
  );
};
export default Profile;
